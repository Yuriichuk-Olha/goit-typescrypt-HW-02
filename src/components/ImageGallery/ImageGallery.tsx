import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
import { Hit } from '../../types';

interface ImageGalleryProps{
  images: Hit[];
  clickImages:(largeImageURL:string)=>void;
} 

const ImageGallery: React.FC<ImageGalleryProps> =
    ({images, clickImages}) => {
  return (
    <>
    <ul className={css.ImageGallery}>

      {images.map(({id, webformatURL, largeImageURL}) => {

     return <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        clickImages={clickImages}
        />
        
      })}
    </ul> 
    
</>
)
}

export default ImageGallery



