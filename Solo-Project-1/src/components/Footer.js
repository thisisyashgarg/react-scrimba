import twiiter from "../images/Twitter Icon.png";
import fb from "../images/Facebook Icon.png";
import ig from "../images/Instagram Icon.png";
import github from "../images/GitHub Icon.png";
import linkedin from "../images/Linkedin Icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={twiiter} />
      <img src={ig} />
      <img src={fb} />
      <img src={github} />
      <img src={linkedin} />
    </div>
  );
}
