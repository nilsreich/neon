import { mutation, query } from "./_generated/server";

export const add = mutation(async ({ db }, { task, id, completed }) => {
    db.insert("todos", {
        task,
        completed,
        id
    });
})

export const get = query(async ({ db }) => {
    return await db.query("todos").collect()
})


export const deleteAll = mutation(async ({ db }) => {
    return (await db.query("todos")
        .filter(q => q.eq(q.field("completed"), false))
        .collect()).forEach(todo => {
            db.delete(todo._id)
        })
})
