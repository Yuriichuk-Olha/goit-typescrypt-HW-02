import {useState, useEffect} from "react";

import Searchbar from './Searchbar/Searchbar';
import APIfetch from './API/APIfetch'
import Loader from './Loader/loader';
import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

import { Hit } from "../types";


interface Modal{
  showModal:boolean;
  largeImageURL:string;
}

 const App:React.FC=()=>{
  const [images, setImages] = useState<Hit[] >([])
  const [search, setSearch] = useState<string>('')
  const [total, setTotal] = useState<number>(0)
  const [queryPage, setQueryPage] = useState<number>(1)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [modal, setModal] = useState<Modal>({showModal:false, largeImageURL:''})
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);
  //показу кнопки "Load More" let loadMore=false;

  useEffect(()=>{
    if(!search) return
      setLoading(true)

      APIfetch( search, queryPage)
      .then(({hits, totalHits}) => { 
        
        setImages(prev=>[...prev, ...hits]),
        setTotal(totalHits);
        setShowLoadMore(images.length < totalHits); // Оновлюємо стан для показу кнопки "Load More"
      //prev || hits.length images.length
      })
      .catch(error=>setError(error.message || 'Unknown error'))
      .finally(()=>setLoading(false))
  },[search, queryPage ]);

  const onLoadMore=()=>{   
    setQueryPage(prev=>prev + 1)
  }

  const handleFormSubmit = (search:string) => {
    setSearch(search);
    setImages([]);
    setQueryPage(1);
  }

  const clickImages=(largeImageURL:string)=>{
    setModal({largeImageURL, showModal:true})
  }

  const closeModal=()=>{
    setModal({largeImageURL:'', showModal:false})
  }

    return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr',
        gridGap: 16, paddingBottom: 24}}
    > 
    {modal.showModal && (<Modal 
    closeModal={closeModal} 
    largeImageURL={modal.largeImageURL} />)}
        
        <Searchbar handleFormSubmit={handleFormSubmit}/>     
        {error && <h1>{error}</h1>}
        {loading && <Loader/>}

        { images.length>0 && !loading && ( 
          <ImageGallery images={images}   
        clickImages={clickImages}
        /> )} 

         {showLoadMore && <Button onLoadMoreClick={onLoadMore}/>} 
          
         {/* {(images.length < total)?( <Button onLoadMoreClick={onLoadMore}/>):(showLoadMore)}  */}
        
    </div>
    )
}


export default App;