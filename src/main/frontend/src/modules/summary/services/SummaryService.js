import HttpService from "../../shared/util/HttpService";
import { API_METHODS } from "../../constants";

export default {
  getSummary: (category) => HttpService.request(`/entry/total/${category}`, {method: API_METHODS.GET}),
  getBalance: () => HttpService.request("/entry/balance", {method: API_METHODS.GET})
}