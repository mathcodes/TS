# Commands:
```bash
npm install --save-dev 
```
Exclusive to this project to make it a development only dependency, a tool which does not containt any code which will be part of our main code.


# Nested Objects & Types:
Of course object types can also be created for nested objects.

Let's say you have this JavaScript object:

```js
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
```
This would be the type of such an object:
```js
{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
So you have an object type in an object type so to say.
```

# Type Aliases & Object Types
Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

For example:

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
This allows you to avoid unnecessary repetition and manage types centrally.

For example, you can simplify this code:
```js
function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
```
To:
```js
type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```