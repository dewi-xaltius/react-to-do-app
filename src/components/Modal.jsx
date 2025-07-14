import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // Import the CSS file

const Modal = ({ isShowing, hide, message }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="backdrop">
      <div className="modal">
        <p>{message}</p>
        <button onClick={hide}>Close</button>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;
