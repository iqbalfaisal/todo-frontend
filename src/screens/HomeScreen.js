import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, getItems } from "../store/actions";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const [item, setItem] = useState("");

  const { todo } = useSelector(({ HomeReducer }) => HomeReducer);

  useEffect(() => {
    dispatch(getItems());
  }, []);

  const onChange = (event) => {
    setItem(event.target.value);
  };

  const onClick = (event) => {
    event.preventDefault();
    dispatch(addItem(item));
    setItem("");
  };

  const onDelete = (event, _id) => {
    event.preventDefault();
    dispatch(deleteItem(_id));
  };

  return (
    <div>
      <input type="text" value={item} onChange={onChange} />
      <button type="submit" onClick={onClick}>
        add
      </button>
      <div>
        <ul>
          {todo?.map((item, index) => (
            <li key={index}>
              <>{item.todo}</>
              <button type="reset" onClick={(e) => onDelete(e, item._id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
