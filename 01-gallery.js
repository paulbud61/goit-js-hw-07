import { galleryItems } from "./gallery-items.js";

const getGalleryList = document.querySelector(".gallery");
const items = createGalleryItems(galleryItems);
getGalleryList.insertAdjacentHTML("beforeend", items);
getGalleryList.addEventListener("click", onHangleImg);
function createGalleryItems(list) {
  return list
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
const instance = basicLightbox.create(
  `
    <img src="" width="800" height="auto">
`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscape);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscape);
    },
  }
);

function onHangleImg(event) {
  event.preventDefault();
  const data = event.target.dataset.source;
  if (!data) return;
  instance.element().querySelector("img").src = data;
  instance.show();
}

function onEscape(event) {
  if (event.code !== "Escape") return;
  instance.close();
}
consolelog(galleryItems);
