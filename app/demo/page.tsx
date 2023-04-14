'use client'
import Link from "next/link";

export default async function Demo () {
    const test = async() => {
        console.log("test");
    }
    return (
    <div>
      <h1>Home</h1>
      <button onClick={test} className='block border px-4 py-2 bg-blue-100'>Try</button>
      <Link href="/"> Back to home </Link>
    </div>
  );
}