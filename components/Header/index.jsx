import "./Header.css";
import logo from "./Logo.png";

export default function Header(props) {
  return (
    <div className="header">
      <img src={logo} alt="Tereos" />
      <h1>{props.title}</h1>
      <h2>{Date.now()}</h2>
    </div>
  );
}
