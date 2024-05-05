

function App() {
	function handleClick(e) { 
		console.log(e)
	}
	return (
		<div className="app" onClick={ handleClick }>
			<h1>Hello world!</h1>
		</div>
	)
}

export default App;
