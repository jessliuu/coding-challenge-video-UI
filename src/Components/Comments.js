import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { nanoid } from "nanoid";
import "./_styles.css";
import { useParams } from "react-router-dom";

const Comments = () => {
  const params = useParams();
  const [newCommentText, setNewCommentText] = useState("");
  const charLimit = 300;
  const [comments, setComments] = useState([
    {
      id: nanoid(),
      text: "This is the first comment on this video",
      date: "August 2, 2022 at 15:01",
    },
  ]);
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
    console.log(showComments);
  };

  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem("comments"));
  //   if (savedNotes) {
  //     const commentsForThisVideo = savedNotes.filter(
  //       (n) => n.params === paramsNumber
  //     );
  //     setComments(commentsForThisVideo);
  //   }
  // }, [comments]);

  // useEffect(() => {
  //   localStorage.setItem("comments", JSON.stringify(comments));
  // }, [comments]);

  const handleCommentChange = (e) => {
    if (e.target.value.length <= 300) {
      setNewCommentText(e.target.value);
    }
  };

  const handleSubmitComment = () => {
    addComment(newCommentText);
    setNewCommentText("");
  };

  const addComment = (txt) => {
    const date = new Date();
    const newComment = {
      id: nanoid(),
      text: txt,
      date: date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      params: params.id,
    };
    const updatedCommentsList = [...comments, newComment];
    setComments(updatedCommentsList);
    localStorage.setItem("comments", JSON.stringify(comments));
  };
  return (
    <div className="details-container">
      <div className="comments-container">
        <Button variant="outline-secondary" size="sm" onClick={toggleComments}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </Button>
      </div>

      {/* {showComments ? (
        <h5 onClick={toggleComments}>X</h5>
      ) : (
        <Button
          className="comments-container"
          variant="outline-secondary"
          size="sm"
          onClick={toggleComments}
        >
          Show Comments
        </Button>
      )} */}

      {showComments ? (
        <div className="comments-container">
          <ol className="messages">
            {comments.map((n) => (
              <li key={n.id}>
                <div classname="message">
                  <div className="text">
                    <p>{n.id}</p>
                    <p>{n.text}</p>
                    <p>{n.date}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <InputGroup className="pt-3">
            <FormControl
              placeholder="Enter your message..."
              aria-label="Enter your message..."
              aria-describedby="basic-addon1"
              value={newCommentText}
              onChange={handleCommentChange}
              onKeyDown={(e) => e.key === "Enter" && handleSubmitComment()}
            />

            <Button
              variant="danger"
              type="submit"
              onClick={handleSubmitComment}
            >
              Send
            </Button>
          </InputGroup>
          <small className="text-align-right">
            {charLimit - newCommentText.length} character remaining
          </small>
        </div>
      ) : null}
    </div>
  );
};

export default Comments;
