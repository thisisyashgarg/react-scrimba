import dp from "../images/Screenshot 2022-09-16 at 1.23.54 PM.png";
import emailLogo from "../images/Mail.png";

export default function Header() {
  return (
    <>
      <DP />
      <Details />
      <EmailButton />
    </>
  );
}

function DP() {
  return <img className="dp" src={dp} />;
}

function Details() {
  return (
    <div className="intro">
      <h1>Yash Garg</h1>
      <h4>Full Stack Developer</h4>
      <p>thisisyashgarg@gmail.com</p>
    </div>
  );
}

function EmailButton() {
  return (
    <button className="email-button">
      <span>
        <img src={emailLogo} />
        <h2>Email</h2>
      </span>
    </button>
  );
}
