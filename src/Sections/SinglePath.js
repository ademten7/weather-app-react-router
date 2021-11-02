import React from "react";
import { Link } from "react-router-dom";

const SinglePath = (props) => {
  let { location, history, match } = props;
  return (
    <div>
      <h1>This is the path link of nested route</h1>
      <Link
        to={{
          pathname: `/forcast/${match.params.name}/${match.params.main}/${match.params.path}/deeper`,
        }}
      >
        <p>Deeper nested route one more time</p>
      </Link>
    </div>
  );
};

export default SinglePath;
