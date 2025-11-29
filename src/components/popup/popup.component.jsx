import './popup.styles.css'

const Popup = ({ onClose, children }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {children}
        <button onClick={onClose}>Save</button>
      </div>
    </div>
  );
};

export default Popup;
