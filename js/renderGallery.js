import { createCardPhoto } from "./createCardPhoto.js";

export const renderGallery = (photos) => {
  const gallery = document.querySelector('.grid');
  const cards = photos.map(createCardPhoto);
  gallery.append(...cards);

}