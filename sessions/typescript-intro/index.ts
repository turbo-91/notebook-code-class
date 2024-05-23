// type annotations
// let id: string = 'ab'
let val: number = 23

let loggedIn: boolean = true

// console.log(id.toUpperCase())
// void is used when the function does not return anything
function run(id: any): void {
	console.log(id)
}

// run(false)

// objects

// interface
// interface User {
// 	name: string,
// 	id: number
// }

// type alias
type User = {
	name: string,
	id: number
}

let user: User = {
	name: 'rick',
	id: 0
}

type Id = number | string

let id: Id = '23'


// function greet(person: Person): string {
// 	return 'hello' + person.name
// }
interface Person {
	name: string,
	// this property is optional
	age?: number | string
}
let rick: Person = {
	name: 'Rick',
	age: 76
}
let morty: Person = {
	name: 'Morty',
	age: '12'
}

// type assertions
let beth: Person = {} as Person 

// const num = 34 as string -> this is not allowed

// literal types
function check(user: 'rick' | 'morty') {
	console.log(user)
} 
// check('beth') -> this is not allowed as we set the parameter to either 'rick' or 'morty'

// returning a promise
function fetchData(): Promise<string> {
	return Promise.resolve('data from x')
}
// typing a callback as a parameter
function printAndCallback(str: string, callback: () => void) {
	console.log(str)
	callback()
}

