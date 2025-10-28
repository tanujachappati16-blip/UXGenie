// Run Analysis Button Logic
document.getElementById('analyze-btn').addEventListener('click', () => {
  const status = document.getElementById('status');
  const insights = document.getElementById('insights');

  status.innerText = "🔍 Analyzing your page...";
  insights.innerHTML = "";

  const fakeInsights = [
    "⚠️ Low color contrast detected on header text — try using #ffffff for better readability.",
    "📏 Inconsistent spacing between sections — maintain 24px vertical rhythm.",
    "🔠 Button font size too small on mobile — increase to at least 16px.",
    "🎨 Use a single primary color palette to improve brand consistency.",
    "🧭 Navigation links are too close together — add more padding.",
    "🪄 Suggest adding hover effects for better interactivity feedback."
  ];

  // Simulate AI delay
  setTimeout(() => {
    status.innerText = "✅ Analysis Complete — Found design insights:";
    fakeInsights.sort(() => 0.5 - Math.random());
    fakeInsights.slice(0, 4).forEach(tip => {
      const li = document.createElement('li');
      li.innerText = tip;
      insights.appendChild(li);
    });
  }, 1500);
});

// Close Sidebar Button Logic
document.getElementById('closeSidebar').addEventListener('click', () => {
  // Send a message to the content script to close the sidebar
  window.parent.postMessage({ type: 'CLOSE_UXGENIE' }, '*');
});
