import React, { useContext } from "react";
import VideoCard from "../Components/VideoCard";
import { Row } from "react-bootstrap";
import { VideoContext } from "../Contexts/VideoContext";

const ViewOverview = () => {
  const videos = useContext(VideoContext);

  return (
    <div>
      <Row className="gx-1 gy-0" xs={1} md={3} style={{ marginTop: 20 }}>
        {videos &&
          videos.map((video) => {
            return <VideoCard data={video} key={video.id} />;
          })}
      </Row>
    </div>
  );
};

export default ViewOverview;
