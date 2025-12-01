import './popup.styles.css'
import { MdSave } from "react-icons/md";

const Popup = ({ onClose, children }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {children}
        {/* <button onClick={onClose}>Save</button> */}
        <MdSave className='btnSave-edit' onClick={onClose}></MdSave>
      </div>
    </div>
  );
};

export default Popup;
