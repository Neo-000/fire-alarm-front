import { API } from "@/api/axios";
import { api_router } from "../api.router";
const category = api_router.category;
class Category{

    async Create(data){
        if (Object.keys(data).length != 0) {
        await API.post(category.add,data).then(
            res => {return res.data},
            err => {console.log(err)}
        )  
        }
        

    }

}
export {Category}