import React, { useContext, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { VideoContext } from "../Contexts/VideoContext";
import video372 from "./372.mp4";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { nanoid } from "nanoid";

const VideoDetails = () => {
  const params = useParams();
  const paramsNumber = parseInt(params.id);
  const { videos } = useContext(VideoContext);
  const [newCommentText, setNewCommentText] = useState("");
  const charLimit = 300;
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(true);

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

  const video = videos.filter((video) => {
    return video.id === paramsNumber;
  });
  const videoURL = video.map((v) => {
    return v.url;
  });

  return (
    <div>
      {/* <ReactPlayer url={video372} /> */}

      <video width="50%" preload="auto">
        <source src={video372} type="video/mp4" />
      </video>

      <Button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </Button>

      {showComments ? (
        <div>
          {comments.map((n) => (
            <div key={n.id}>
              <p>{n.id}</p>
              <p>{n.text}</p>
              <p>{n.date}</p>
            </div>
          ))}

          <InputGroup className="p-3">
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
          <small>{charLimit - newCommentText.length} character remaining</small>
        </div>
      ) : null}
    </div>
  );
};

export default VideoDetails;
