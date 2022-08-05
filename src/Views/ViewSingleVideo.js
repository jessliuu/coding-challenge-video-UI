import React from "react";
import Comments from "../Components/Comments";
import RelatedVideos from "../Components/RelatedVideos";
import VideoDetails from "../Components/VideoDetails";

const ViewSingleVideo = () => {
  return (
    <div className="d-flex" style={{ flexDirection: "column" }}>
      <VideoDetails />
      <Comments />
      <RelatedVideos />
    </div>
  );
};

export default ViewSingleVideo;
