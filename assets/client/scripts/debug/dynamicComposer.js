async function processIncludes(scope=document) {
  const chunks = Array.from(scope.querySelectorAll('[include-html]'));
  for (const el of chunks) {
    try {
      const file = el.getAttribute('include-html');
      const res = await fetch(file);
      if (res.ok) {
        let html = await res.text();
        html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

        const temp = document.createElement('div');
        temp.innerHTML = html;
  
        const parent = el.parentNode;
        while (temp.firstChild) {
          parent.insertBefore(temp.firstChild, el);
        }
  
        parent.removeChild(el);

        // await processIncludes(parent);
      }
    } catch (error) {
      if (el.parentNode) {
        el.outerHTML = `<div style="color:red">Помилка: ${error.message}</div>`;
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", async () => {
    processIncludes();
});
