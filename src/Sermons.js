import React from "react";
import PropTypes from "prop-types";
import "./youtube.css";
import { Helmet } from "react-helmet";

const Sermons = ({ embedId }) => (
<>
<Helmet>
    <title>Sermons</title>
    <meta charSet='utf-8'/>
</Helmet>
  <div>
   <object 
    className="video-responsive"
    width="1500"
    height="650"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube">
    <param name="movie" value={`http://www.youtube.com/v/${embedId}`}></param>
    <embed src={`http://www.youtube.com/v/${embedId}`} type="application/x-shockwave-flash"></embed>
</object>
  </div>
</>
);

Sermons.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Sermons;