import Age from "./Age";
import "./Welcome.css";

export function Welcome({ name, age }) {
  return (
    <div className="welcome-age">
      <h1>Welcome back, {name}!</h1>
      <ol>
        <li>{age > 18 && <Age age={age} />}</li>

        <li>{age !== false && <Age age={age} />}</li>

        <li>{age > 18 && age < 65 && <Age age={age} />}</li>

        <li>{age > 18 && age < 65 && name === "John" && <Age age={age} />}</li>
      </ol>
    </div>
  );
}

export default Welcome;
