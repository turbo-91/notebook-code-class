# Challenges: JS Modern Syntax

## Destructuring Objects

(difficulty: 🌶️🌶️)

Solve the _Destructuring Objects_ challenge by running this command in your Terminal:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/js-modern-syntax/destructuring-objects
```

## Destructuring Arrays

(difficulty: 🌶️🌶️)

Solve the _Destructuring Arrays_ challenge by running this command in your Terminal:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/js-modern-syntax/destructuring-arrays
```

## Spread and Rest Syntax

(difficulty: 🌶️🌶️)

Solve the _Spread and Rest Syntax_ challenge by running this command in your Terminal:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/js-modern-syntax/rest-and-spread
```

## Retro Coding Challenge

(difficulty: 🌶️🌶️🌶️🌶️)

Pretend that it is 2002 and rewrite the following hipster Javascript so it will work in Internet Explorer 5 and Netscape 4.

```js
let getNameAndCountry = ({ name, country }) => [name, country];

let getRelocatedCity = (
  city1,
  city2 = { name: "Berlin", country: "Germany" }
) => {
  let [, country] = getNameAndCountry(city2);
  return {
    ...city1,
    country,
  };
};
```

<details>
<summary>💡 Hint</summary>

- From Arrow Functions to Classic Functions: Remember that older JavaScript versions do not recognize arrow functions (=>). Use the traditional function keyword to declare functions instead.

- Manual Property Access: Since object destructuring is a more recent feature, you'll need to revert to accessing object properties the old-fashioned way. Use dot notation or bracket notation to get values from objects.

- Default Parameters Workaround: To emulate this behavior, check if function parameters are undefined within the function body and manually assign them default values if necessary.

- Object Copying without Spread: To combine objects or copy them, initiate a new object and loop through properties of the source object(s), copying each property explicitly.
