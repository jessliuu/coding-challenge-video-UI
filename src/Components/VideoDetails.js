import React, { useContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";
import { VideoContext } from "../Contexts/VideoContext";
import "./_styles.css";

const VideoDetails = () => {
  const params = useParams();
  const paramsNumber = parseInt(params.id);
  const videos = useContext(VideoContext);

  const video = videos.filter((video) => {
    return video.id === paramsNumber;
  });
  const videoURL = video.map((v) => {
    return v.url;
  });

  const imageURL = video.map((v) => {
    return v.imageURL;
  });

  return (
    <div className="details-container">
      {/* <video width="50%" preload="auto">
        <source src={videoURL} type="video/mp4" />
      </video> */}

      <img src={imageURL} />
    </div>
  );
};

export default VideoDetails;
