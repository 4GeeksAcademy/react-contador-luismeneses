import React, { useState, useEffect } from "react";
import { Digit } from "./Digit";

//include images into your bundle

//create your first component
const Home = () => {

	const [counterSecond, setCounterSecond] = useState(0)
	



	useEffect(() => {
		const interval = setInterval(() => {
			setCounterSecond(prev => prev + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);



	const digito = (position) => {
		return Math.floor(counterSecond / Math.pow(10, position)) % 10;
	  };
 

	return (
		<body>
			<h1 className="mt-5">CONTADOR</h1>
			<div className="w-25 myhome">
				<span><i className="fa-solid fa-clock text-light"></i></span>
				<Digit numero={digito(4)} />
				<Digit numero={digito(3)} />
				<Digit numero={digito(2)} />
				<Digit numero={digito(1)} />
				<Digit numero={digito(0)} />
			</div>
		</body>
	);
};

export default Home;