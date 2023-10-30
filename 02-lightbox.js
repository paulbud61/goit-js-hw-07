import { galleryItems } from "./gallery-items.js";
// Change code below this line

const getGalleryList = document.querySelector(".gallery");
const items = createGalleryItems(galleryItems);
getGalleryList.insertAdjacentHTML("beforeend", items);

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
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
