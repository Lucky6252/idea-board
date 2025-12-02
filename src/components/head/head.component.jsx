import { ReactComponent as IdeaLogo } from "../../assets/logo/IdeaLogo.svg";
import './head.styles.css'

const Head = () => {
  return (
    <div className="header">
      <div className="head-container">
      <div className="logo-container">
          <IdeaLogo className="logo" />
        </div>
        <h1 className="title">Idea Board</h1>
      </div>
    </div>
  );
};

export default Head;