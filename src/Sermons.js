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
    width="1200"
    height="650"
    autoplay loop playsinline 
    muted 
    title="Embedded youtube">
    <param name="movie" value={`http://www.youtube.com/v/${embedId}`}></param>
</object>
  </div>
</>
);

Sermons.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Sermons;