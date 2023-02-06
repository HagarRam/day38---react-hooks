import React, { useState, useEffect } from 'react';

function App() {
	const [count, setCount] = useState(0);
	const [stop, setStop] = useState(false);
	useEffect(() => {
		if (!stop) {
			console.log(`Count updated to ${count}`);
		}
	}, [count, stop]);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => !stop && setCount(count + 1)}>Click me</button>
			<button onClick={() => setStop(!stop)}>{stop ? 'Start' : 'Stop'}</button>
		</div>
	);
}

export default App;
