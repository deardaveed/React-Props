import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Kate Upton"
      img="https://b.thumbs.redditmedia.com/rv3jTpVuQQDZUvNFjiwzDwjr7i1UDBKC3arEOvt1lFM.jpg"
      tel="+800 CALL KATE"
      email="kate@bae.com"
    />
  </div>,
  document.getElementById("root")
);
