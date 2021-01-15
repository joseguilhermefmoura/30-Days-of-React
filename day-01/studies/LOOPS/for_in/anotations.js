/*
    The for in loop can be used with object literals to get the keys of the object.
*/

const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
}
  
for (const key in user) {
    console.log(key, user[key])
}