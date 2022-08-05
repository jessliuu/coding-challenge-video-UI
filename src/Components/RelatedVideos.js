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
  const videoTagsArr = videoTags[0].map((t) => t);

  const relatedVideos = videos.filter((video) => {
    return videoTagsArr.some((n) => video.tags.includes(n));
  });

  return (
    <div>
      <h2>You might also be interested in the following videos:</h2>
      {relatedVideos.map((v) => (
        <div>{v.title}</div>
      ))}
    </div>
  );
};

export default RelatedVideos;
