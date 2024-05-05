

function App() {
	function handleClick(e)  {
		console.log(e)
	}

	return (
		<div className="app" onClick={ handleClick }></div>
	)
}

export default App;
