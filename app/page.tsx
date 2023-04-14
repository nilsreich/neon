'use client'
import { SyntheticEvent, useState } from "react";
import { useQuery, useMutation } from "../convex/_generated/react";
import Link from "next/link";

export default function Home() {

  const [value, setValue] = useState('')
  const tasks = useQuery('todos:get')
  const addTask = useMutation('todos:add')
  const clearDB = useMutation('todos:deleteAll')

  const addTaskHandler = (e:SyntheticEvent) => {
    e.preventDefault()
    addTask({
      task: value,
      id:  self.crypto.randomUUID(),
      completed: false
    })
    setValue('')
  }

  return (

    <main>
      <form onSubmit={(e)=>addTaskHandler(e)}>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button>add</button>
      </form>
      <button onClick={()=>clearDB()}>deleteALL</button>
    {tasks &&tasks.map((task:any)=>(
      <div key={task.id}>
        <p>{task.task}</p>

      </div>
      ))}
      <Link href="/demo">Link to demo</Link>
  </main>
  )
}
