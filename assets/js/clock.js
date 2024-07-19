const updateCountdown = ({ targetDate, days, hours, minutes, seconds }) => {
  const currentDate = new Date().getTime();
  const timeLeft = targetDate - currentDate;

  const daysCountdown = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursCountdown = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesCountdown = Math.floor(
    (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsCountdown = Math.floor((timeLeft % (1000 * 60)) / 1000);

  days.textContent = daysCountdown;
  hours.textContent = hoursCountdown;
  minutes.textContent = minutesCountdown;
  seconds.textContent = secondsCountdown;
};

export default () => {
  const days = document.querySelector(".days");
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");

  const targetDate = new Date(2024, 6, 28, 15, 20).getTime();

  updateCountdown({ targetDate, days, hours, minutes, seconds });

  setInterval(
    () => updateCountdown({ targetDate, days, hours, minutes, seconds }),
    1000
  );
};
