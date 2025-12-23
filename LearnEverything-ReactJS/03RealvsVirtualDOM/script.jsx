// var h1 = <h1>Hello</h1>

function Greet() {
    console.log("Hello guys");
    return <h1>Hello guys</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greet />)