import { API } from "@/api/axios";
import { api_router } from "../api.router";
const category = api_router.category;
const Category = {
    async Create(data) {
        try {
          const result = await API.post(category.add,data);
          return [null, result];
        } catch (error) {
          return [error, null];
        }
      },
    async Getall() {
        try {
          const result = await API.get(category.all);
          return [null, result];
        } catch (error) {
          return [error, null];
        }
      }

}
export {Category}