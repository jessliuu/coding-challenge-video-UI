import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const VideoCard = (props) => {
  const video = props.data;
  const { id, url, title } = video;

  return (
    <div>
      <Col>
        <Card className="shadow-sm p-3 mb-5 bg-white rounded d-flex justify-content-between">
          <Link
            to={`/browse/${id}`}
            state={video}
            style={{ textDecoration: "none" }}
          >
            <div className="embed-responsive embed-responsive-16by9">
              <video className="embed-responsive-item" src={url}></video>
            </div>
          </Link>

          <h5>{title}</h5>
        </Card>
      </Col>
    </div>
  );
};

export default VideoCard;
