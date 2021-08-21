import React from "react";

const PageLoading = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// Creating a default message  for the component incase the message wasn't set.

PageLoading.defaultProps = {
  message: "Loading...",
};

export default PageLoading;
