const Welcome = (props) => {
    // console.log(`props:`, props.name);
    return (
        <button onClick={() => props.alertMyInput(`My name is ${props.name} `)}>
            ClickMe
        </button>
    );
};
{
    /* an other welcome react child component
                  const Row = ({ name, age, email, doSomthingAmazing }) => {
                  return (
                    <div>
                   <span>name: {name}</span>
                   <span>age: {age}</span>
                   <span>email: {email}</span>
                   <button onClick={doSomthingAmazing}>Click !</button>
                   </div>
                   )}
                  */
}
function App() {
    const alertMyInput = (name) => alert(name);
    return (
        <div className="App">
            <header className="App-header">
                <Welcome
                    name="James Brown : this is a men world"
                    alertMyInput={alertMyInput}
                />