function updateViewportSize() {
  const viewportElement = document.getElementById("viewport-size");
  if (viewportElement) {
    viewportElement.textContent = `${window.innerWidth}x${window.innerHeight}`;
  }
}

function calculateAge(birthDate) {
  const now = new Date();
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();
  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return `${years} years ${months} months ${days} days`;
}

function updateUptime() {
  const birthDate = new Date(2005, 8, 8);
  const uptimeEl = document.getElementById("uptime-age");
  if (uptimeEl) {
    uptimeEl.textContent = calculateAge(birthDate);
  }
}

function fixPathWrapping() {
  const paths = document.querySelectorAll(".line.output.path a");
  paths.forEach((el) => {
    el.innerHTML = el.textContent.replace(/\//g, "/\u200B");
  });
}

window.addEventListener("resize", updateViewportSize);
window.addEventListener("load", updateViewportSize);
window.addEventListener("load", updateUptime);
window.addEventListener("load", fixPathWrapping);
