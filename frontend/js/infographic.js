const timelineRows = document.querySelectorAll('.timeline-row');
const screenshotBtn = document.getElementById('screenshot-btn');

// Scroll animation for timeline rows
function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;
  timelineRows.forEach(row => {
    const rowTop = row.getBoundingClientRect().top;
    if (rowTop < triggerBottom) {
      row.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Screenshot notification
function showNotification(message) {
  let notification = document.getElementById('notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'notification';
    document.body.appendChild(notification);
  }
  notification.textContent = message;
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 2500);
}

// Screenshot button click handler with notification
screenshotBtn.addEventListener('click', function() {
  html2canvas(document.getElementById('infographic'), {
    useCORS: true,
    backgroundColor: '#eaf7fb',
    scale: 2
  }).then(function(canvas) {
    canvas.toBlob(function(blob) {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'infographic-screenshot.jpg';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      showNotification('Screenshot saved!');
    }, 'image/jpeg', 0.92);
  });
});

// Keyboard accessibility for screenshot button
screenshotBtn.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    screenshotBtn.click();
  }
});
