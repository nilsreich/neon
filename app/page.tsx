'use client'
import { SyntheticEvent, use, useEffect, useState } from "react";
import { useQuery, useMutation } from "../convex/_generated/react";

export default function Home() {

  const [value, setValue] = useState('')
  const tasks = useQuery('todos:get')
  const addTask = useMutation('todos:add')
  const clearDB = useMutation('todos:deleteAll')

  useEffect(() => {
    console.log(tasks)
  },[tasks])

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
  </main>
  )
}
