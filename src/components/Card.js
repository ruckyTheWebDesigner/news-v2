import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function ImgMediaCard(props) {
  const openUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <React.Fragment>
      <Card
        id='news-card'
        className='card-news'
        onClick={() => openUrl(props.url)}>
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
          <li>{props.content}</li>
          <p>{props.description}</p>
          <div className='inline-block pb-1 mt-4 font-medium text-blue-600 '>
            Read more
            <span aria-hidden='true'>&rarr;</span>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
}
