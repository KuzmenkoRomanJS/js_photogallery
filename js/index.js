import { getData } from "./getData.js";
import { renderGallery } from "./renderGallery.js";


const init = async () => {
  const photos = await getData();
  renderGallery(photos);
  
}

init();