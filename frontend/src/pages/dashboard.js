import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const dashboard = () => {
  return (
    <div>
      <Link href={"/withdraw"}>Withdraw</Link>

      <Link href={"/deposit"}>Deposit</Link>

      <h1>Current Balance: K0</h1>
    </div>
  );
};
export default dashboard;
