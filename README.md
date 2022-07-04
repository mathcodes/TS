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
