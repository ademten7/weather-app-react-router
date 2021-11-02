import React from "react";
import { Link } from "react-router-dom";

const SingleMain = (props) => {
  console.log(props);
  let { location, history, match } = props;
  return (
    <div>
      <h1>This is main from weather</h1>
      <h2>I dont know how could I do that</h2>
      <p>Path Name:{location.pathname}</p>
      <Link
        to={{
          pathname: `/forcast/${match.params.name}/${match.params.main}/last`,
        }}
      >
        <p>{match.url}</p>
      </Link>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};

export default SingleMain;
