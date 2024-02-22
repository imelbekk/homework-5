import Link from "next/link";
import React from "react";

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col w-full h-100vh items-center justify-center text-2xl">
      <div className="flex flex-col items-center gap-4">
        <h6>Homepage</h6>
        <Link
          href={"/dashboard"}
          className="border px-[20px] py-[5px] rounded bg-[#182237]"
        >
          Go To Dashboard
        </Link>
        <Link
          href={"/login"}
          className="border px-[20px] py-[5px] rounded bg-[#182237]"
        >
          Go To Login
        </Link>
      </div>
    </div>
  );
}
