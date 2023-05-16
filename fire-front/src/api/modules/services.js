import { API } from "@/api/axios";
import { api_router } from "../api.router";
const services = api_router.services;

const Services = {
    async GetById(id) {
        try {
          const result = await API.post(services.getById,id);
          return [null, result];
        } catch (error) {
          return [error, null];
        }
      }
}
export {Services}