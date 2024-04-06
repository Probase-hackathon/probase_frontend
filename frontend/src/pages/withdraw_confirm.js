import React, { useState} from "react";

const withdraw_confirm = () => {
  const [pin, setPin] = useState({
    userPin: "",
  });

  const handlePinChange = (e) => {
    const { name, value } = e.target;

    setPin({
      ...pin,
      [name]: value,
    });
  };
  return (
    <div>
      <h1>Input your pin to confirm Withdraw</h1>

      <div>
        <form>
          <label htmlFor="">Input your pin:</label>

          <input type="number" name="userPin" onChange={handlePinChange} />
        </form>
      </div>
    </div>
  );
};

export default withdraw_confirm;
