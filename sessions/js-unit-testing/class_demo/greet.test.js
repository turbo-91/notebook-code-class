import {greet} from "./greet.js"

test("returns 'Hello Caraway!' if called greet('Caraway')", ()=>{
    const result = greet("Caraway");

    expect(result).toBe("Hello Caraway!")
})

test("returns 'Hello Stranger!' if called greet()", ()=>{
    const result = greet();

    expect(result).toBe('Hello Stranger!')
})

test("returns 'Hello Klaus!' if called greet('Klaus')", ()=>{
    expect(greet('Klaus')).toBe("Hello Coach!")
})

