export default () => {
  document.addEventListener("click", (e) => {
    document.querySelector("audio").play();
    // document.querySelector("audio").loop();
    if (e.target.closest(".container-song")) {
      document.querySelector(".audio").classList.toggle("active");
    }
  });
};
