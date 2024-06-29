import {useState, ChangeEvent, FormEvent} from "react";
import css from '../Searchbar/Searchbar.module.css'

interface SearchbarProps{
  handleFormSubmit:(search:string)=>void;
}

const Searchbar:React.FC<SearchbarProps> = ({handleFormSubmit}) => {
  const [search, setSearch]= useState<string>('')


  const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
    setSearch(event.currentTarget.value)
  }


  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    if(search.trim()===''){
        return alert('An empty line')
    }
  
    handleFormSubmit(search)
    setSearch('')
  }

    return ( 
    <header className={css.Searchbar}>
    <form onSubmit={handleSubmit} className={css.SearchForm}>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={css.SearchFormInput}
      type="text"
      // autoСomplete="off"
      // autoFocus
      placeholder="Search images and photos"
      value={search}
      onChange={handleChange}
    />
  </form>
</header>
    )
  
}


export default Searchbar;