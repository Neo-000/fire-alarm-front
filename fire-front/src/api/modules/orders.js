import { API } from "@/api/axios";
import { api_router } from "../api.router";
const orders = api_router.order;

const Orders = {
    async Create(data) {
        try {
          const result = await API.post(orders.create,data);
          return [null, result];
        } catch (error) {
          return [error, null];
        }
      },
    async all(data) {
        try {
          const result = await API.post(orders.all,data);
          return [null, result];
        } catch (error) {
          return [error, null];
        }
      },
    async delete(data) {
      console.log('delete')
      console.log(data)
        try {
          const result = await API.post(orders.delete,data);
          return [null, result];
        } catch (error) {
          return [error, null];
        }
      },
    async delete_all(data) {
        try {
          const result = await API.post(orders.delete_all,data);
          return [null, result];
        } catch (error) {
          return [error, null];
        }
      },
    async update(id,data) {
      console.log('update')
      console.log(id)
      console.log(data)
        try {
          const result = await API.post(orders.update,{
            '_id':id,'data':data});
          return [null, result];
        } catch (error) {
          return [error, null];
        }
      }
}
export {Orders}