import clock from "./clock.js";
import food, { check } from "./food.js";
import song from "./audio.js";

const $container = document.querySelector(".main");
const $main = document.querySelector(".main main");

const clear = () => {
  $main.innerHTML = "";
};

document.addEventListener("click", async (e) => {
  const hash = location.hash;
  console.log(e.target);
  if (e.target.closest(".deadpool-start button")) {
    e.target.closest(".deadpool-start").classList.add("opacity-0");
    setTimeout(() => {
      e.target.closest(".deadpool-start").remove();
      $container.classList.remove("opacity-0");
    }, 500);
  }

  if (e.target.closest("#food")) {
    if (hash === "#food") return;
    location.hash = "#food";
    clear();
    await foodMovie(e);
  }
  if (e.target.closest("#gift")) {
    if (hash === "#gift") return;
    location.hash = "#gift";
    clear();
    await gift();
  }
  if (e.target.closest("#count")) {
    if (hash === "#count") return;
    location.hash = "#count";
    clear();
    await timeMovie();
  }
  if (e.target.closest("#tickets")) {
    if (hash === "#tickets") return;
    location.hash = "#tickets";
    clear();
    await ticketsMovie();
  }
  if (food) food(e);
});

const request = async ({ url }) => {
  const json = await fetch(`./assets/html/${url}`);
  const response = json.text();
  return response;
};

const timeMovie = async () => {
  const html = await request({ url: "time.html" });
  document.head.insertAdjacentHTML(
    "beforeend",
    '<link rel="stylesheet" href="./assets/css/time.css"></link>'
  );
  $main.insertAdjacentHTML("afterbegin", html);
  clock();
};

const ticketsMovie = async () => {
  const html = await request({ url: "tickets.html" });
  document.head.insertAdjacentHTML(
    "beforeend",
    '<link rel="stylesheet" href="./assets/css/tickets.css"></link>'
  );
  $main.insertAdjacentHTML("afterbegin", html);
};

const foodMovie = async (e) => {
  const html = await request({ url: "food.html" });
  document.head.insertAdjacentHTML(
    "beforeend",
    '<link rel="stylesheet" href="./assets/css/food.css"></link>'
  );
  $main.insertAdjacentHTML("afterbegin", html);
  check(food);
};

const gift = async () => {
  const html = await request({ url: "gift.html" });
  document.head.insertAdjacentHTML(
    "beforeend",
    '<link rel="stylesheet" href="./assets/css/gift.css"></link>'
  );
  $main.insertAdjacentHTML("afterbegin", html);
};

document.addEventListener("DOMContentLoaded", async (e) => {
  song();

  const hash = location.hash;
  if (hash === "#food") {
    await foodMovie(e);
    return;
  }
  if (hash === "#count") {
    await timeMovie();
    return;
  }
  if (hash === "#tickets") {
    await ticketsMovie();
    return;
  }
  if (hash === "#gift") {
    await gift();
    return;
  }
  await timeMovie();
});
