let imagesArray = [
  "pagan.jpg",
  "forest.jpg",
  "woods.jpg",
  "person.jpg",
  "sky_monotype.jpg",
  "mountain_monotype.jpg",
  "face.jpg",
  "plant.JPG",
  "splash_monotype.jpg",
  "workspace.jpg",
  "persistence.jpg",
  "red-bags.jpg",
  "house.JPG",
  "business man.jpg",
  "woman-with-bike.jpg",
  "self-portrait.jpg",
  "sweater.jpg",
  "corn.JPG",
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
