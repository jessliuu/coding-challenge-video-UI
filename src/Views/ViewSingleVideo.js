import React from "react";
import RelatedVideos from "../Components/RelatedVideos";
import VideoDetails from "../Components/VideoDetails";

const ViewSingleVideo = () => {
  return (
    <div>
      <VideoDetails />
      <RelatedVideos />
    </div>
  );
};

export default ViewSingleVideo;
