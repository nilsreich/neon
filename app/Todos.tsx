"use client";
import { useUser } from "@clerk/nextjs";
import { SyntheticEvent, useState, useEffect } from "react";
import { useQuery, useMutation } from "../convex/_generated/react";

export const Todos = () => {
  const { user } = useUser();
  const storeUser = useMutation("users:storeUser");
  const tasks = useQuery("todos:get", { ownerID: user.id });
  const addTask = useMutation("todos:add");
  const clearDB = useMutation("todos:deleteAll");
  const [value, setValue] = useState("");

  useEffect(() => {
    storeUser();
  }, [storeUser]);

  const addTaskHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    addTask({
      task: value,
      id: self.crypto.randomUUID(),
      completed: false,
      ownerID: user.id,
    });
    setValue("");
  };

  return (
    <div>
      <form onSubmit={(e) => addTaskHandler(e)}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>add</button>
      </form>
      <button onClick={() => clearDB()}>deleteALL</button>
      {tasks &&
        tasks.map((task: any) => (
          <div key={task.id}>
            <p>{task.task}</p>
          </div>
        ))}
    </div>
  );
};
