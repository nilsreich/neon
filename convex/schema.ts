import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({
  todos: defineTable({
    task: s.string(),
    id: s.string(),
    completed: s.boolean(),
    ownerID: s.id("users"),
  }),
  users: defineTable({
    name: s.string(),
    tokenIdentifier: s.string(),
  }).index("by_token", ["tokenIdentifier"]),
});
