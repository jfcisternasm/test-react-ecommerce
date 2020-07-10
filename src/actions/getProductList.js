import api from "../api";

export default function getProductList(searchText) {
    return async (dispatch) => {
        dispatch({ type: "GET_PRODUCT_LIST_START" });

        try {
            let { data } = await api.get("/amiibo", {
                params: {
                    name: searchText
                }
            });
            dispatch({ type: "GET_PRODUCT_LIST_SUCCESS", payload: data });
        } catch (error) {
            dispatch({ type: "GET_PRODUCT_LIST_FAIL", error });
        }

    }
}