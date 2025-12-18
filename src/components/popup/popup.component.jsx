import './popup.styles.css'
import { MdSave } from "react-icons/md";
import { MdCancel } from "react-icons/md";

const Popup = ({ onSave, onCancel, children }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {children}
        <MdSave className='btnSave-edit' onClick={onSave}></MdSave>
        <MdCancel className='btnCancel-edit' onClick={onCancel}/>
      </div>
    </div>
  );
};

export default Popup;
