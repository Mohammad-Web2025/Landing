const menu = document.querySelector("#menu");
const Elementsmenu = document.querySelector(".right-Elements-menu");
const leftmenu = document.querySelector("#left-menu");
menu.addEventListener("click", () => {
  Elementsmenu.style.display = "flex";
});
leftmenu.addEventListener("click", () => {
  if ((Elementsmenu.style.display = "flex")) {
    Elementsmenu.style.display = "none";
  }
});

const buttonoff = document.querySelector(".button-off");
const valueinput = document.querySelectorAll(".input-text-user");
buttonoff.addEventListener("click", () => {
  valueinput.forEach((input) => {
    console.log(input.value);
  });
  alert("اطلاعات شما با موفقیت ارسال شد و نتیجه برای شما ارسال خواهد شد!");
  setTimeout(() => {
    valueinput.forEach((input) => {
      input.value = "";
    });
  }, 3000);
});
