export default () => {
  document.addEventListener("click", (e) => {
    if (e.target.closest(".container-song")) {
      document.querySelector(".audio").classList.toggle("active");
    }
  });
};
