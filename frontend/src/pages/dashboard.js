import React from "react";
import Link from "next/link";

const dashboard = () => {
  return (
    <div>
      <Link href={"/withdraw"}>Withdraw</Link>

      <Link href={"/deposit"}>Deposit</Link>
    </div>
  );
};

export default dashboard;
