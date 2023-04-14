import {defineSchema, defineTable, s} from 'convex/schema'

export default defineSchema({
todos: defineTable({
    task: s.string(),
    id: s.string(),
    completed: s.boolean()
    })
})
export type Todo = {
    task: string,
    id: string,
    completed: boolean
}