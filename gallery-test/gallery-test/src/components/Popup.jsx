import React from "react";

import PropTypes from "prop-types";
import "../styles/popup.css";
import Comment from "./Comment";
const Popup = ({ isOpen, onClosed, img, comments, addComment }) => {
  return (
    <>
      {isOpen && (
        <div className="popup_overlay">
          <div className="popup_window">
            <div className="popup_body">
              <span className="close" onClick={onClosed}></span>
              <img className="popup_img" src={img} alt="Gallery img" />
              <input
                className="popup_input"
                id="name"
                type="text"
                placeholder="Ваше имя"
              />
              <input
                className="popup_input"
                type="text"
                id="comment"
                placeholder="Ваш комментарий"
              />
              <button className="popup_btn">
                <span className="popup_btn-text" onClick={addComment}>
                  Оставить комментарий
                </span>
              </button>
            </div>
            <div className="popup_comment">
              <Comment data={comments} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Popup.propTypes = {
  isOpen: PropTypes.bool,
  onClosed: PropTypes.func,
};
export default Popup;
