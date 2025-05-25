window.onload = function () {
  console.log("Trang đã tải xong");
  addTabIndexes();
};

function addTabIndexes() {
  const figures = document.querySelectorAll("figure");
  for (let i = 0; i < figures.length; i++) {
    figures[i].setAttribute("tabindex", "0");

    let index = i + 1;

    figures[i].addEventListener("mouseover", function () {
      console.log(`Chuột vào ảnh ${index}`);
      this.classList.add("hovered");
    });

    figures[i].addEventListener("mouseleave", function () {
      console.log(`Chuột rời ảnh ${index}`);
      this.classList.remove("hovered");
    });

    figures[i].addEventListener("focus", function () {
      console.log(`Focus ảnh ${index}`);
      this.classList.add("hovered");
    });

    figures[i].addEventListener("blur", function () {
      console.log(`Blur ảnh ${index}`);
      this.classList.remove("hovered");
    });
  }
}
