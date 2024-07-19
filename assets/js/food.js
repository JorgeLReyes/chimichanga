const request = async () => {
  try {
    const select = localStorage.getItem("food");
    console.log(select);
    const response = await fetch(
      "https://formsubmit.co/ajax/jorgereyes.130101@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Comida: `La orden contiene: \n✔${select.replaceAll(",", "\n✔")}`,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

export const check = () => {
  const select = localStorage.getItem("food").split(",");
  const food = document.querySelectorAll("[data-food]");
  food.forEach((item) => {
    if (select.includes(item.dataset.food)) item.classList.add("check");
  });
};

const message = () => {
  const messageElement = document.createElement("section");
  messageElement.classList.add("message");

  const picture = document.createElement("picture");
  picture.classList.add("message-img");

  const img = document.createElement("img");
  img.src = "./assets/img/gif/deadpool_start.gif";

  const h2 = document.createElement("h2");
  h2.textContent = "Guardado con éxito";
  h2.classList.add("message-title");

  picture.appendChild(img);
  messageElement.append(picture, h2);

  return messageElement;
};

export default (e) => {
  console.log(e);
  if (e.target.closest(".deadpool-food-item")) {
    console.log(e.target.closest(".deadpool-food-item"));
    console.log(1);
    e.target.closest(".deadpool-food-item").classList.toggle("check");
  }
  if (e.target.closest(".deadpool-food-button button")) {
    console.log(2);
    const food = document.querySelectorAll("[data-food]");
    const items = [];
    food.forEach((item) => {
      if (item.classList.contains("check")) {
        items.push(item.dataset.food);
      }
    });
    localStorage.setItem("food", items);
    const html = message();
    document.querySelector(".main").insertAdjacentElement("beforeend", html);
    request();
    setTimeout(() => {
      html.classList.add("opacity-0");
    }, 1000);
    setTimeout(() => {
      html.remove();
    }, 2000);
  }
};
