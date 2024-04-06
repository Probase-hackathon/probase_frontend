import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const withdraw = () => {
    const router  = useRouter()
  const [withdraw, setWithDraw] = useState({
    amount: "",
  });

  const handleWithdrawChange = (e) => {
    const { name, value } = e.target;

    setWithDraw({
      ...withdraw,
      [name]: value,
    });
  };

 const handleWithdrawSubmit = (e) => {
    e.preventDefault()
    console.log(withdraw);

    const sendData = async () => {
        const response = await fetch(
          `/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(withdraw),
          }
        );
        if (response.ok) {
         alert("Input your pin to confirm withdraw")
         router.push("/withdraw_Confirm")
        }
  
        if (response.status === 400) {
          console.log("Error:", response.status);
        }
      };

      sendData();
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="withdraw" >
            Withdraw
          </label>

          <input
            type="text"
            name="amount"
            id="withdraw_amount"
            value={withdraw.amount}
            onChange={handleWithdrawChange}
          />
        </div>

        <button onClick={handleWithdrawSubmit}>Submit</button>
      </form>

      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default withdraw;
