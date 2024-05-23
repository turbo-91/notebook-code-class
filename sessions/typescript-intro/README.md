## Typescript Intro

```bash
$ npm init
$ npm install typescript -D
$ npm install ts-node -D
```

#### Add typescript config
```bash
$ npx tsc --init
```

#### Now change basics.js to basics.ts and run the file
```bash
$ npx ts-node basics.ts
```

#### You could also compile first to a JS file
```bash
$ tsc index.ts
```

#### TypeScript shows two kinds of errors
```js
// Static type-checking
const num = 23

console.log(num.toUpperCase()); 

// Non-exception Failures
const user = {
	name: 'Hayes'
}

console.log(user.age);
```

#### Any - a way to leave TypeScripts type system
You can pass anything to this function, but you still have to pass something
```js
// you 
function greet(x: any) {

}
```

#### Typing functions - parameters and return value
```js
function sum(a: number, b: number): number {
    return a + b
}
```

### Union and void - if a function does not return anything this gets void as a return value
```js
function format(title: string, param: string | number): void {
     console.log(`${title} ${param}`);
}
```
#### Objects
First show this: 
```js
const user: {} = {
	name: "Hayes",
	id: 0,
};
```
```js
interface User  {
	name: string, 
	id: number
}

const user: User = {
	name: "Hayes",
	id: 0,
};
```

## Type Aliases
```js
type Point = {
  x: number;
  y: number;
};
```
#### Object Types
In JavaScript, the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.

As we’ve seen, they can be anonymous:

```js
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}
```
or they can be named by using either an interface:

```js
interface Person {
  name: string;
  age: number;
}
``` 
```js
function greet(person: Person) {
  return "Hello " + person.name;
}
```
Or a type alias:

```js
type Person = {
  name: string;
  age: number;
};
 
function greet(person: Person) {
  return "Hello " + person.name;
}
```

#### Optional object property
```js
interface User {
    name: string,
    age?: number
}
```

#### Unions - either or 

```js
function printId(id: string | number) {
    if (typeof id === number) {
        return id.toString()
    } else {
        return id.toUpperCase()
    }
}
```

#### Type assertions
We can make something conform to a specific type
```js
interface User {
    name: string,
    age?: number
}
const person = {} as User
```
Some conversions are not allowed though

```js
const num = 34 as string 
```

#### Literal types
This is inferred as the literal value of the string (Flynn) because it cannot be reassigned
```js
const user = 'Flynn'
```
Use case:
```js
function check(user: 'rick' | 'morty') {
	console.log(user);
	
}

check('rick')
// you also get autocomplete if you do this:
check('')
```

#### Just another example for object type alias
```js
type Point = {
  x: number;
  y: number;
};
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```


## Union types
```js
type WindowStates = "open" | "closed" | "minimized";

let state: WindowStates

state = 'open'
```


### In typescript we use import and export default -> ES 6 imports

```js
function addNumbers(a: number, b: number) {
    return a + b
}
```

 ### Returning a promise
```js
function fetchData (url: string): Promise<string> {
    Promise.resolve(`Data from ${}`)
}
```

### Returning a callback
```js
const printAndCallback = (str: string, callback: () => void) => {
    console.log(str);
    return callback();
}
```
### Utility types or type helpers 

#### Record<Keys, Type> -> Go to the docs and copy the example

Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

Example
```js
interface CatInfo {
  age: number;
  breed: string;
}
 
type CatName = "miffy" | "boris" | "mordred";
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
```

The syntax might look a bit unusual. But it's just like a function, only that it operates on types instead of values. Instead of (), we use <>.

#### Custom type helper
```js
type Maybe<T> = T | null | undefined;
```

Here, we are defining a custom type helper Maybe that takes a type T as a parameter and returns a new type that can either be T, null, or undefined.

We can use it like so:
```js
interface User {
  id: string;
  name: string;
  phoneNumber: Maybe<string>;
}
```