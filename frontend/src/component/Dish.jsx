import {useEffect, useState } from "react";
import "../styles/dish.css";
import { addtocart, removefromcart } from "../../store/cartslice";
import { useDispatch, useSelector } from "react-redux";

function Dish(props) {
  let [item, setitem] = useState(0);

  const array = useSelector((state) => state.cartSlice.cartuser);
  const dispatch = useDispatch();
  const prop = {
    ...props.dish,
    id:props.res_name+","+props.dish.dish_name
  };


  useEffect(()=>{
    for (let i = 0; i < array.length; i++) {
        const ele = array[i];
        if(ele.id==prop.id)
        {
            setitem(Number(ele.quantity))
        }
        
    }
  })

  return (
    <div className="dishmain">
      <div id="dishcontent">
        <div className="dishname">{props.dish.dish_name}</div>
        <div className="dishprice">₹{props.dish.price}</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        repellat atque fugit asperiores autem sequi magni mollitia culpa
        assumenda necessitatibus sit delectus inventore, consectetur, natus
        vero. Perferendis repellat optio quo.
      </div>
      <div className="dishimage">
        <img src={props.dish.image} alt="" />
        {item ? (
          <div className="addbutton">
            <button
              className="plusminus"
              onClick={() => {
                if (item > 0) {
                  setitem(item - 1);
                  prop.quantity = item;
                  dispatch(removefromcart(prop));
                }
              }}
            >
              -
            </button>
            {item}
            <button
              className="plusminus"
              onClick={() => {
                if (item < 20) {
                  setitem(item + 1);
                  prop.quantity = item;
                  dispatch(addtocart(prop));
                }
              }}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="addbutton"
            onClick={() => {
              // If username is not in session storage, redirect to login page
              if (!sessionStorage.username) {
                window.location.href = "/Login_createuser"; // Corrected assignment
              }
              else if (item === 0) {
                setitem(1);
                prop.quantity = 1;
                dispatch(addtocart(prop));
              }
            }}
          >
            ADD
          </button>
        )}
      </div>
    </div>
  );
}

export default Dish;
