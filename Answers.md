1. What problem does the context API help solve?

It allows compoontents to share data without explicitly having to pass props through each component manually

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are hold information that send data from your application to your store.
Reducers take the previous state and action, and returns the next state.
The store contains the state of our application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

your application state is global, and your component stat is local

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux because I found it easier to understand and follow. I know we are just using it on small projects now, but I like how it has the ability to
keeps your state organized in bigger projects
