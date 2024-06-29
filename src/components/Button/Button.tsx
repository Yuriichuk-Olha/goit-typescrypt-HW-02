import React from 'react'
import css from '../Button/Button.module.css'



interface ButtonProps{
    onLoadMoreClick:()=>void;
}


    const Button: React.FC<ButtonProps>=
    ({onLoadMoreClick}) => {
        return(
            <button type='button' className={css.Button}
                onClick={onLoadMoreClick}>
                Load More
            </button>
        )
    }

    export default Button 

/*  export default function Button({onLoadMoreClick}){
    return(
        <button type='button'
            className={css.Button}
            onClick={()=>onLoadMoreClick()}>
            Load More
        </button>
    )
} 
 */