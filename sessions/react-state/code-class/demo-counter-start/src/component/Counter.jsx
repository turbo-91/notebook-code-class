import { useState } from 'react';
import './Counter.css';

export default function Counter() {
	// let counter = 0;
	let [count, setCount] = useState(2);
	function handleCounter() {
		console.log('I am clicking');
		// counter++;
		setCount(++count);
		// setCount(count + 1);
		console.log('counter after clicking', count);
	}

	return (
		<button onClick={handleCounter}>
			You have clicked this button {count} times
		</button>
	);
}
