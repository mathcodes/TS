// const person: {
//   name: string,
//   age: number
// } = {
//   name: 'Jonathan',
//   age: 30
// };

// console.log(person[1])

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Jonathan',
  age: 40,
  hobbies: ['Rugby', 'Guitar'],
  role: Role.ADMIN
};

let favoriteActivities: string[];

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby);
}