import { API } from "@/api/axios";
import { api_router } from "../api.router";
const bid = api_router.bid;

const Bid = {
    async Create(data) {
        try {
          const result = await API.post(bid.create,data);
          return [null, result];
        } catch (error) {
          return [error, null];
        }
      }

}
export {Bid}