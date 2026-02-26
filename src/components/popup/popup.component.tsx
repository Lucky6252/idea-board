import './popup.styles.css'
import { MdSave } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { PropsWithChildren } from 'react';

type PopupProps = PropsWithChildren<{
  onSave: () => void;
  onCancel: () => void;
  // children: Element[];
}>;

const Popup = ({ onSave, onCancel, children } : PopupProps) => {
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
