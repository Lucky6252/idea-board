import { FaGithub } from "react-icons/fa";
import { ReactComponent as IdeaLogo } from "../../assets/logo/IdeaLogo.svg";
import "./footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="idea-board-logo">
          <div className="logo-container">
            <IdeaLogo className="logo-footer" />
          </div>
          <h3 className="title">Idea Board</h3>
        </div>
        <p>
          Our Idea Board is a simple yet powerful collaborative space designed
          to help individuals and teams capture, refine, and manage their ideas
          efficiently in one centralized platform. In Version 1.0, users can
          easily add new ideas using a clear title and a concise description
          limited to 140 characters, allowing for quick and focused expression
          of thoughts, while full editing functionality ensures ideas can be
          updated and improved at any time. The application securely saves all
          information directly in the browser’s local storage, meaning users’
          ideas remain available even after closing or refreshing the app,
          without the need for account creation or internet dependency. This
          makes the platform fast, private, and reliable for everyday use. The
          Idea Board promotes creativity, productivity, and structured thinking
          by helping users organize concepts, prevent loss of inspiration, and
          turn brief ideas into meaningful actions for personal, academic, or
          business purposes. As Version 1.0 represents the foundation of this
          product, continuous updates and feature enhancements are planned to
          further improve usability, performance, and overall value for users in
          future releases.
        </p>

        <div className="copywrite-container">
          <p>
            © 2025 developed by Lucky{" "}
            <span>
              <a href="https://github.com/Lucky6252/idea-board">
                <FaGithub />
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
