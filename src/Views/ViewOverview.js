import React from "react";
import VideoCard from "../Components/VideoCard";
import { Row } from "react-bootstrap";
// import video from "./372.mp4";

const ViewOverview = () => {
  const videoData = [
    {
      id: 584,
      url: "https://www.videvo.net/video/dummy/584/",
      title: "dummy",
      tags: [],
    },
    {
      id: 372,
      url: "https://www.videvo.net/video/children-s-space/545/",
      title: "children's space",
      tags: ["children", "space"],
    },
    {
      id: 546,
      url: "https://www.videvo.net/video/teddy-bears-at-beach/546/",
      title: "teddy bears at the beach",
      tags: ["teddy bears", "beach"],
    },
    ,
    {
      id: 549,
      url: "https://www.videvo.net/video/childrens-toys-1/549/",
      title: "children's toys",
      tags: ["children", "toys"],
    },
    {
      id: 586,
      url: "https://www.videvo.net/video/hop-scotch/586/",
      title: "hop scotch",
      tags: ["children", "games"],
    },
    {
      id: 554,
      url: "https://www.videvo.net/video/floating-teddy-bears/554/",
      title: "floating teddy bears",
      tags: ["teddy bears"],
    },
  ];

  return (
    <div>
      <Row className="gx-1 gy-0" xs={1} md={3} style={{ marginTop: 20 }}>
        {videoData.map((video) => {
          return <VideoCard data={video} key={video.id} />;
        })}
      </Row>
    </div>
  );
};

export default ViewOverview;
