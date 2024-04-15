
function updateTime() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;


    const startDate = new Date('2019-04-19');
    const elapsedDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));

    document.getElementById('daysPassed').textContent = elapsedDays;
}

updateTime();
setInterval(updateTime, 1000);
