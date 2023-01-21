import React from "react";
import PropTypes from "prop-types";
import "./youtube.css";
import { Helmet } from "react-helmet";

const Sermons = ({ embedId }) => (
<>
<Helmet>
    <meta charSet='utf-8'/>
    <title> Sermons </title>
</Helmet>
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
</>
);

Sermons.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Sermons;