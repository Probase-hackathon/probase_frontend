import React, { useState } from "react";
import Link from "next/link";
import withdraw from "./withdraw";

const Deposit = () => {
  const [deposit, setDeposit] = useState({
    amount: "",
  });

  const handleDepositChange = (e) => {
    const { name, value } = e.target;

    setDeposit({
      ...deposit,
      [name]: value,
    });
  };

  const handleDepositSubmit = (e) => {
    e.preventDefault();
    console.log(withdraw);

    const sendData = async () => {
      const response = await fetch(`/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(withdraw),
      });
      if (response.ok) {
        alert("Deposited successfully");
      }

      if (response.status === 400) {
        console.log("Error:", response.status);
      }
    };

    //   sendData();
  };
  return (
    <div>
      <form>
        <div>
          <label htmlFor="deposit">Deposit</label>

          <input
            type="text"
            name="amount"
            id="deposit_amount"
            value={deposit.amount}
            onChange={handleDepositChange}
          />
        </div>

        <button onClick={handleDepositSubmit}>Submit</button>
      </form>
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default Deposit;
