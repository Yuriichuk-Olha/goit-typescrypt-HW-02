//import PropTypes from 'prop-types';
import {useEffect} from "react";
import css from '../Modal/Modal.module.css'

 interface ModalProps {
    largeImageURL:string;
    closeModal:()=>void;
} 

const Modal:React.FC<ModalProps> = ({closeModal, largeImageURL}) => {
    
    useEffect(()=>{

       const handleKeydown = (e: WindowEventMap['keydown']):void => {
            if(e.code === 'Escape') closeModal();           
    };  
        window.addEventListener('keydown', handleKeydown);

        return ()=>{
            window.removeEventListener('keydown', handleKeydown)
        }

    },[closeModal])

   

    const handleBackdropClick = (event:React.MouseEvent<HTMLDivElement>): void => {      
        if(event.currentTarget===event.target){
            closeModal()
        }
    }
        
        return (
            <div className={css.Overlay}
                onClick={handleBackdropClick}>
                <div 
                    className={css.Modal}>
                        <img src={largeImageURL} alt="" width={1000}/>
                </div>
            </div>
        );
    
}


export default Modal;