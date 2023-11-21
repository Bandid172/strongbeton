import { createStore } from "vuex";
import products from "@/plugins/products";
import services from "@/plugins/services";

export default createStore({
    modules: {
        products,
        services
    }
})