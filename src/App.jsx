import logo from "./logo.svg";
import "./App.css";
//import Welcome from "./welcome.js";

// const Welcome = (props) => {
//     // console.log(`props:`, props.name);
//     return (
//         <button onClick={() => props.alertMyInput(`My name is ${props.name} `)}>
//             ClickMe
//         </button>
//     );
// };
{
}
function App() {
    const alertMyInput = (name) => alert(name);
    return (
        <div
            className="App"
            style={{ display: "flex", justifyContent: "space-around" }}
        >
            <div style={{ diplay: "block" }}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/fIZz8BzkaMg"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <h2>Play Reggae Bass Like Flabba Holt</h2>
            </div>
            <div className="suggestion">
                <div className="video_area">
                    <iframe
                        width="200"
                        height="150"
                        src="https://www.youtube.com/embed/jpyIxuAjZdg"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <h6>Play Reggae Bass Like Flabba Holt</h6>
                </div>
                <div style={{ display: "flex" }}>
                    <iframe
                        width="200"
                        height="150"
                        src="https://www.youtube.com/embed/jpyIxuAjZdg"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <h6>Play Reggae Bass Like Flabba Holt</h6>
                </div>
                <div style={{ display: "flex" }}>
                    <iframe
                        width="200"
                        height="150"
                        src="https://www.youtube.com/embed/jpyIxuAjZdg"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <h6>Play Reggae Bass Like Flabba Holt</h6>
                </div>
                <div style={{ display: "flex" }}>
                    <iframe
                        width="200"
                        height="150"
                        src="https://www.youtube.com/embed/jpyIxuAjZdg"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <h6>Play Reggae Bass Like Flabba Holt</h6>
                </div>
            </div>
        </div>
    );
}

export default App;
