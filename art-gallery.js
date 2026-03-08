let imagesArray = [
  "just-do-it.jpg",
  "hydrangeas.jpg",
  "hanging.jpg",
  "organic.jpg",
  "park.jpg",
  "woods.jpg",
  "pagan.jpg",
  "forest.jpg",
  "mountain_monotype.jpg",
  "person.jpg",
  "sky_monotype.jpg",
  "splash_monotype.jpg",
  "face.jpg",
  "plant.JPG",
  "red-bags.jpg",
  "workspace.jpg",
  "persistence.jpg",
  "woman-with-bike.jpg",
  "house.JPG",
  "business man.jpg",
  "corn.JPG",
  "self-portrait.jpg",
  "sweater.jpg",
  "scratchboard.jpg"
];

let getLatestOpenedImgIndex;
let frames = document.querySelectorAll(".art-container");

function init() {
  if (frames) {
    frames.forEach(function(frame, index) {
      frame.onclick = function() {
        let imageName = frame.children[0].src.split(
          "images/fine-art/thumbnails/"
        )[1];
        getLatestOpenedImgIndex = imagesArray.indexOf(imageName);
        let container = document.body;
        let newImageWindow = document.createElement("div");
        container.appendChild(newImageWindow);
        newImageWindow.setAttribute("class", "img-window");
        newImageWindow.setAttribute("onclick", "closeImg()");

        let newImage = document.createElement("img");
        newImageWindow.appendChild(newImage);
        newImage.setAttribute("src", "images/fine-art/" + imageName);
        newImage.setAttribute("id", "current-img");

        newImage.onload = function() {
          loadArrows(document, container);
        };
      };
    });
  }
}

/**
 * Change image given direction
 * @param {prev or next direction} changeDir
 */
function changeImg(changeDir) {
  //close current image
  document.querySelector("#current-img").remove();
  let getImgWindow = document.querySelector(".img-window");
  //add new image
  let newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);

  let newImageIndex;
  if (changeDir === 1) {
    if (getLatestOpenedImgIndex == imagesArray.length - 1) {
      newImageIndex = 0;
    } else {
      newImageIndex = getLatestOpenedImgIndex + 1;
    }
  } else if (changeDir === 0) {
    if (getLatestOpenedImgIndex == 0) {
      newImageIndex = imagesArray.length - 1;
    } else {
      newImageIndex = getLatestOpenedImgIndex - 1;
    }
  }

  newImg.setAttribute("src", "images/fine-art/" + imagesArray[newImageIndex]);
  newImg.setAttribute("id", "current-img");
  getLatestOpenedImgIndex = newImageIndex;
}

function closeImg() {
  document.querySelector(".img-window").remove();
}

init();
