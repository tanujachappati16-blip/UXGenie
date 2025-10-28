if (!document.getElementById('uxgenie-sidebar')) {
  const iframe = document.createElement('iframe');
  iframe.src = chrome.runtime.getURL('sidebar.html');
  iframe.id = 'uxgenie-sidebar';
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.right = '0';
  iframe.style.width = '0';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.zIndex = '999999';
  iframe.style.transition = 'width 0.4s ease';
  iframe.style.boxShadow = '0 0 25px rgba(0,0,0,0.4)';
  document.body.appendChild(iframe);

  // Animate slide-in
  setTimeout(() => {
    iframe.style.width = '350px';
  }, 10);
} else {
  // Animate slide-out
  const iframe = document.getElementById('uxgenie-sidebar');
  iframe.style.width = '0';
  setTimeout(() => iframe.remove(), 400);
}

