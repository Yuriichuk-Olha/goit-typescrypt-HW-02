import axios from "axios";
import { APIType } from "../../types";


const APIfetch= async(search:string, queryPage=1):Promise<APIType>=>{
    const response = await axios.get<APIType>
    (`https://pixabay.com/api/?q=${search}&page=${queryPage}&key=33330220-38622d6f802367b73b86585e9&image_type=photo&orientation=horizontal&per_page=12`)
    console.log(response)
    return response.data
}
export default APIfetch