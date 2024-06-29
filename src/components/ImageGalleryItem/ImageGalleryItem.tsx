import css from '../ImageGalleryItem/ImageGalleryItem.module.css'

interface ImageGalleryItemProps{
  webformatURL:string;
  largeImageURL:string;
  clickImages:(largeImageURL:string)=>void;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> =
({webformatURL ,largeImageURL, clickImages})=>{

  return <li className={css.ImageGalleryItem}>

  <img src={webformatURL} alt="" 
  className={css.ImageGalleryItemImage}
  width='260'
  onClick={()=>clickImages(largeImageURL)}
  />
  
</li>
}

export default ImageGalleryItem
