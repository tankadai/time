function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const clockDisplay = `अहिले ${hours}:${minutes}:${seconds} बजेको छ`;
    document.getElementById('clock').textContent = clockDisplay;
}
setInterval(updateClock, 1);