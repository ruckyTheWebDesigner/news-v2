import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
// import ReadMore from "../api/ReadMore";

export default function ImgMediaCard(props) {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const openUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <React.Fragment>
      <Card className='card-news' onClick={() => openUrl(props.url)}>
        <h6>News</h6>
        <h1 className='text-2xl font-bold'>{props.title}</h1>
        <p>
          {new Date(props.publishedAt).toLocaleDateString("en-US", options)}
        </p>
        <p className=''>Source: {props.source}</p>
        <p>Written by: {props.author}</p>

        <CardMedia
          component='img'
          className='news-photo'
          alt=''
          image={props.image}
        />
        <div>
          <Divider className='divider' />
          <li>{props.description}</li>
          <div class='inline-block pb-1 mt-4 font-medium text-blue-600 '>
            Read more
            <span aria-hidden='true'>&rarr;</span>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
}
