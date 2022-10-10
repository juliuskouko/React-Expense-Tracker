// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { EditExpense } from "../actions/ExpenseAction";

// function EditExpenseForm({ editExpense, hide }) {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState(editExpense.title);
//   const [date, setDate] = useState(
//     `${new Date().getDate()}/${
//       new Date().getMonth() + 1
//     }/${new Date().getFullYear()}`
//   );
//   const [time, setTime] = useState(new Date().toLocaleTimeString());
//   const [amount, setAmount] = useState(editExpense.amount);
//   const [option, setOption] = useState(editExpense.option);

//   useEffect(() => {
//     setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(
//       EditExpense({
//         id: editExpense.id,
//         item,
//         amount,
//         Option,
//         date: editExpense.date,
//         time: editExpense.time,
//         dateMod: date,
//         timeMod: time,
//       })
//     );
//     hide();
//   };
//   return (
//     <>
//       <form className="edit-form">
//         <label htmlFor="title">Item / Service</label>
//         <input
//           type="text"
//           name="title"
//           id="title"
//           value={item}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <label htmlFor="date">Date</label>
//         <input
//           type="text"
//           id="date"
//           disabled
//           value={`${new Date().getDate()}/${
//             new Date().getMonth() + 1
//           }/${new Date().getFullYear()}`}
//         />
//         <label htmlFor="amount">Amount</label>
//         <input
//           type="number"
//           name="amount"
//           id="amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <label htmlFor="category">Category</label>
//         <select
//           name="category"
//           id="category"
//           onChange={(e) => setOption(e.target.value)}
//         >
//           <option value="Food">Food</option>
//           <option value="Drink">Drink</option>
//           <option value="Accommodation">Accommodation</option>
//           <option value="Transportation">Transportation</option>
//           <option value="Housing">Housing</option>
//           <option value="Rent">Rent</option>
//           <option value="Miscellaneous">Miscellaneous</option>
//         </select>
//         <button type="submit" onClick={handleSubmit}>
//           Save
//         </button>
//       </form>
//     </>
//   );
// }

// export default EditExpenseForm;


import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { EditTransaction } from "../redux/Action";
import { EditExpense } from "../actions/ExpenseAction";

function EditExpenseForm({ editExpense, hide }) {
  const dispatch = useDispatch();
  const [item, setItem] = useState(editExpense.title);
  const [date, setDate] = useState(
    `${new Date().getDate()}/${new Date().getMonth() + 1
    }/${new Date().getFullYear()}`
  );
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [amount, setAmount] = useState(editExpense.amount);
  const [option, setOption] = useState(editExpense.option);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      EditExpense({
        id: editExpense.id,
        item,
        amount,
        Option,
        date: editExpense.date,
        time: editExpense.time,
        dateMod: date,
        timeMod: time,
      })
    );
    hide();
  };

  return (
    <div>
      <form className="modal">
        <h3>EDIT TRANSACTION</h3>
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
            <option value="Income">Income</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </optgroup>
        </select>
        <br />
        <input
          type="text"
          placeholder="Enter item/service..."
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <br />
        <input
          type="date"
          placeholder="Select date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <br />
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button type="button" className="btn" onClick={handleSubmit}>
          Done
        </button>
      </form>
    </div>
  );
}

export default  EditExpenseForm;
