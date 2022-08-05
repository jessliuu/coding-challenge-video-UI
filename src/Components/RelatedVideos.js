import React, { useContext } from "react";
import { VideoContext } from "../Contexts/VideoContext";
import { useParams } from "react-router-dom";

const RelatedVideos = () => {
  const params = useParams();
  const id = parseInt(params.id);

  const videos = useContext(VideoContext);
  //   var isArr = Array.isArray(videos);
  //   console.log(isArr);

  const video = videos.filter((video) => {
    return video.id === id;
  });

  const videoTags = video.map((v) => v.tags);

  const relatedVideos = videos.filter((video) => {
    // console.log(Array.isArray(video.tags));
    return video.tags.some((n) => videoTags.includes(n));
  });
  console.log(relatedVideos);

  return <div>RelatedVideos</div>;
};

export default RelatedVideos;
