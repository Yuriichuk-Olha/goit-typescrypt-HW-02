/* export default function APIfetch(search:string, queryPage=1){
    return fetch(`https://pixabay.com/api/?q=${search}&page=${queryPage}&key=33330220-38622d6f802367b73b86585e9&image_type=photo&orientation=horizontal&per_page=12`
        ).then(response => response.json())   
} */
import axios from "axios";
//import { Hit } from "../../types";
import { APIType } from "../../types";

/*  export interface APIType {
    hits:Hit[];
    totalHits:number;
    total:number;
}  */


const APIfetch= async(search:string, queryPage=1):Promise<APIType>=>{
    const response = await axios.get<APIType>
    (`https://pixabay.com/api/?q=${search}&page=${queryPage}&key=33330220-38622d6f802367b73b86585e9&image_type=photo&orientation=horizontal&per_page=12`)
    console.log(response)
    return response.data
}
export default APIfetch