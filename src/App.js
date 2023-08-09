import "./styles.css";

export default function App() {
  const sportsImages = ["https://wallpaperaccess.com/full/191736.jpg"];

  const myStyle = {
    width: 300,
    borderColor: "blue"
  };

  return (
    <div className="App">
      <div>
        <div
          style={{
            borderStyle: "solid",
            borderColor: "blue"
          }}
        >
          <h1>Welcome to the sports home page!</h1>
          <h2>You will find everything you need!</h2>
          <p>
            {" "}
            Your favorite player and their team. As well as the leaderboards and
            more!{" "}
          </p>
        </div>
        <div
          style={{
            borderStyle: "solid",
            borderColor: "blue",
            margin: 5
          }}
        >
          <p> “Don’t be afraid of failure. This is the way to succeed.” </p>
          <p>-LeBron James </p>
          <div>
            {sportsImages.map((image) => (
              <div key={image}>
                <img style={myStyle} src={image} alt="Sport Image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
