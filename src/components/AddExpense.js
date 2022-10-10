import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { AddNewExpense } from "../actions/ExpenseAction";
import { bars } from "../icons";

function AddExpense() {
  const dispatch = useDispatch();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(
    `${new Date().getDate()}/${new Date().getMonth() + 1
    }/${new Date().getFullYear()}`
  );
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [amount, setAmount] = useState(0);
  const [option, setOption] = useState("");
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!title || !amount || !category) {
  //     setMsg("All fields are Required!");
  //     setTimeout(() => {
  //       setMsg("");
  //     }, 2000);
  //   } else {
  //     dispatch(
  //       AddNewExpense({ id: uuidv4(), item, date, time, amount, option })

  //     );
  //     setMsg("Expense Added Successfully!");
  //     setAmount(0);
  //     setItem("");
  //     setOption("");
  //     setTimeout(() => {
  //       setMsg("");
  //     }, 2000);
  //     setItem("");
  //     setAmount("");
  //   }



  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!option || !item || !date || !amount) {
      setMsg("All inputs are Required!");
      setTimeout(() => {
        setMsg("");
      }, 2000);
    }
    else {
      dispatch(
        AddNewExpense({ id: uuidv4(), item, date, time, amount, option })

      );
      setMsg("Expense Added Successfully!");
      setAmount(0);
      setItem("");
      setOption("");
      setDate("");
      setTimeout(() => {
        setMsg("");
      }, 2000);
      setItem("");
      setAmount("");

    }
  }


  return (
    <div className="transaction">
      <h3>Add Transaction</h3>
      <form>
        <label htmlFor="categories" className="cat">
          Categories:
        </label>
        <select
          name="categories"
          id="categories"
          title="select category"
          className="category"
          value={option}
          onChange={(e) => {
            setOption(e.target.value);
          }}
        >
          <optgroup label="Select a category">
            <option value="Housing & Rent">Housing & Rent</option>
            <option value="Food & Drinks">Food & Drinks</option>
            <option value="Transportation">Transportation</option>
            <option value="Miscellaneous">Miscellaneous</option>
            <option value="Technology">Technology</option>
          </optgroup>
        </select>
        <br />
        <input
          type="text"
          name="title"
          placeholder="Enter item/service..."
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <br />
        <input
          type="date"
          name="date"
          placeholder="Select date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <br />
        <input
          type="number"
          name="amount"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />

        <button
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
            setIsSidebarOpen(false);
          }}
        >
          Save
        </button>
        <h3>{msg}</h3>
      </form>
      {/* <button type="submit"
      className="btn"
      onClick={(e) => {
        handleSubmit(e);
        setIsSidebarOpen(false);
      }}
    >
      Save
    </button> */}

      {/* <button
      type="submit"
      onClick={(e) => {
        handleSubmit(e);
        setIsSidebarOpen(false);
      }}
    >
      Save
    </button> */}

  //   </div>
  );
}


export default AddExpense;
