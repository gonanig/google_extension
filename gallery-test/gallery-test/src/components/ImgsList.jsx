import React from "react";
import Popup from "./Popup";
import { getImg, getComments, addComment } from "../data.getways";
import { useState } from "react";
import "../styles/styles.css";

const ImgsList = ({ data }) => {
  console.log(data);
  const [isOpen, setOpen] = useState(false);
  const [img, setImg] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({});

  const handleClickOnImg = (id) => {
    setOpen(true);
    getImg(id).then((img) => setImg(img.src));
    getComments(id).then((comments) => setComments(comments));
  };
  const handleClickOnCross = () => {
    setOpen(false);
    setImg(" ");
  };

  const handleClickOnBtn = () => {
    const authorComment = document.getElementById("name").value;
    const textComment = document.getElementById("comment").value;
    if (!authorComment && textComment) {
      return;
    }
    addComment({
      name: authorComment,
      description: textComment,
      image_id: 1,
    }).then((comment) => setNewComment(comment));
  };

  return (
    <>
      {data.map((item) => (
        <img
          onClick={() => handleClickOnImg(item.image_id)}
          className="gallery_image"
          src={item.src}
          alt="Gallery img"
          key={item.image_id}
        />
      ))}
      {isOpen ? (
        <Popup
          img={img}
          comments={comments}
          onClosed={handleClickOnCross}
          isOpen={isOpen}
          addComment={handleClickOnBtn}
        />
      ) : null}
    </>
  );
};
export default ImgsList;
