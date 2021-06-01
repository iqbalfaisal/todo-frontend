import Api from "../../services/Api";
import { DELETE_ITEM, ADD_ITEM, SAVE_ITEMS } from "../types";

export function getItems() {
  return (dispatch) => {
    Api._call("GET")
      .then((data) => {
        console.log(data);
        dispatch({
          type: SAVE_ITEMS,
          todo: data,
        });
      })
      .catch((error) => {});
  };
}

export function addItem(item) {
  return (dispatch) => {
    Api._call("POST", { item })
      .then((data) => {
        dispatch({
          type: ADD_ITEM,
          data,
        });
      })
      .catch((error) => {});
  };
}

export function deleteItem(_id) {
  return (dispatch) => {
    Api._call("DELETE", { _id })
      .then((data) => {
        dispatch({
          type: DELETE_ITEM,
          _id,
        });
      })
      .catch((error) => {});
  };
}
