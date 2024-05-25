import { useState } from 'react';

const RADIUS = 50;

function App() {
	const [ circles, setCircles ] = useState([]);
	const [backgroundColur, setBackGroundColur] = useState("rgb(100,100,100)")

	function handleClick(e)  {
		const newCircle = {
			yCord : e.clientY,
			xCord : e.clientX,
			backgroundColur
		}
		setCircles(circles => {
			for(let i=0;i<circles.length;i++)  {
				if(checkIfCircleCollide(circles[i], newCircle)) {
					setBackGroundColur(() => {
                                    const randomColur = getRandomColor()
                                    newCircle.backgroundColur = randomColur
                                    return randomColur
                              })
					break
				}
			}
                  
			return [...circles, newCircle]
		})
	}

	function checkIfCircleCollide(c1, c2) {
		const d = Math.sqrt(((c1.yCord - c2.yCord) * (c1.yCord - c2.yCord)) + ((c1.xCord - c2.xCord) * (c1.xCord - c2.xCord)))
		if(d <= RADIUS + RADIUS) return true;
		return false
	}

	function getRandomColor() {
		let first = getRandomNumber(0, 255)
		let second = getRandomNumber(0, 255)
		let third = getRandomNumber(0, 255)

		return `rgb(${ first },${ second },${ third })`
	}

	function getRandomNumber(min, max) {
		min = Math.ceil(min)
		max = Math.max(max)

		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	return (
		<div className="app" onClick={ handleClick }>
			{
				circles.map((circle, index) => <Circle top={circle.yCord} left={circle.xCord} key={ index + 1} backgroundColur={ circle.backgroundColur }/>)
			}
		</div>
	)
}

function Circle({ top, left, backgroundColur }) {
	const radius = RADIUS
	return (
		<div className="circle" 
		style={{ width: `${radius * 2}px`,
		height: `${radius * 2}px`, 
		top : `${top - 50}px`, 
		left : `${left - 50}px`, 
		backgroundColor: backgroundColur }}>
		</div>
	)
}

export default App;
