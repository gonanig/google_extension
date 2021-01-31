import React from "react";

const Comment = ({ data }) => {
  let keyValue = () => Math.random();

  return (
    <>
      {Array.isArray(data) ? (
        data.map((comments) => (
          <div className="comment_block">
            <span className="comment_date" key={keyValue}>
              29.01.2021
            </span>
            <div className="comment_text" key={comments.id}>
              {comments.description}
            </div>
          </div>
        ))
      ) : (
        <p>No comments</p>
      )}
    </>
  );
};
export default Comment;
