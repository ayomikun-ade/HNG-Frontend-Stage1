function updateTimeAndDay() {
  const now = new Date();
  const utcTime = now.toUTCString().split(" ")[4]; // Get time in HH:MM:SS
  const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

  document.querySelector(
    '[data-testid="currentTimeUTC"]'
  ).textContent = `Current UTC Time: ${utcTime}`;
  document.querySelector(
    '[data-testid="currentDay"]'
  ).textContent = `Current Day: ${dayOfWeek}`;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);
