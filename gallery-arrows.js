function loadArrows(document, container) {
  console.log("in js file");
  let newNextBtn = document.createElement("img");
  container.appendChild(newNextBtn);
  newNextBtn.setAttribute("src", "images/right-arrow.png");
  newNextBtn.setAttribute("class", "img-btn-next");
  newNextBtn.setAttribute("onclick", "changeImg(1)");
  newNextBtn.style.cssText = "right: 20px";

  let newPrevBtn = document.createElement("img");
  container.appendChild(newPrevBtn);
  newPrevBtn.setAttribute("src", "images/left-arrow.png");
  newPrevBtn.setAttribute("class", "img-btn-prev");
  newPrevBtn.setAttribute("onclick", "changeImg(0)");
  newPrevBtn.style.cssText = "left: 20px";
}
