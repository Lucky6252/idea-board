import { FaGithub } from "react-icons/fa";
import "./footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Developed by Lucky: <span><a href="https://github.com/Lucky6252/idea-board">
          <FaGithub />
        </a></span> </h3>
        
        
      </div>
    </footer>
  );
};

export default Footer;
