import React, { useContext } from "react";
import { VideoContext } from "../Contexts/VideoContext";
import { Link, useParams } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import "./_styles.css";

const RelatedVideos = () => {
  const params = useParams();
  const id = parseInt(params.id);

  const videos = useContext(VideoContext);

  const video = videos.filter((video) => {
    return video.id === id;
  });

  const videoTags = video.map((v) => v.tags);

  const videoTagsArr = videoTags[0].map((t) => t);

  const relatedVideos = videos.filter((video) => {
    return videoTagsArr.some((n) => video.tags.includes(n));
  });

  const relatedVideosToShow = relatedVideos.filter((n) => n.id !== id);

  return (
    <div className="details-container">
      <h2>You might also be interested in the following videos:</h2>
      <div className="related-videos-container">
        {relatedVideosToShow.map((v) => (
          <div className="relatedVideo">
            <Link
              to={`/browse/${v.id}`}
              // state={video}
              // style={{ textDecoration: "none" }}
            >
              <Card.Img
                variant="top"
                src={v.imageURL}
                style={{ width: "300px", height: "200px" }}
              />
            </Link>
            <h5>{v.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedVideos;
