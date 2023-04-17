'use client'
import Link from "next/link";

export default async function Demo () {
    const test = async(name) => {
        const res = await fetch('/api/hello',{
        

            method: 'POST',
            body: JSON.stringify({
              name: 'John Doe'
            })
         })
       
           const data = await res.json()
  
           console.log(data)
         }
         
    
    return (
    <div>
      <h1>Home</h1>
      <button onClick={test} className='block border px-4 py-2 bg-blue-100'>Try</button>
      <Link href="/"> Back to home </Link>
    </div>
  );
}