const launchDate = new Date(2026, 0, 15, 22, 6, 0); 

    function updateTimer() {
        const now = new Date();
        const diff = now - launchDate;

        const msPerSecond = 1000;
        const msPerMinute = msPerSecond * 60;
        const msPerHour = msPerMinute * 60;
        const msPerDay = msPerHour * 24;
        const msPerYear = msPerDay * 365.25;

        const years = Math.floor(diff / msPerYear);
        const days = Math.floor((diff % msPerYear) / msPerDay);
        const hours = Math.floor((diff % msPerDay) / msPerHour);
        const minutes = Math.floor((diff % msPerHour) / msPerMinute);
        const seconds = Math.floor((diff % msPerMinute) / msPerSecond);

        document.getElementById('years').innerText = years;
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }
    
    setInterval(updateTimer, 1000);
