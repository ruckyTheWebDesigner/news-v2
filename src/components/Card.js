import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";

function relativeDate(date) {
  const delta = Math.round((+new Date() - new Date(date)) / 1000);

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (delta < 30) {
    return "just now";
  } else if (delta < minute) {
    return delta + " seconds ago";
  } else if (delta < 2 * minute) {
    return "a minute ago";
  } else if (delta < hour) {
    return Math.floor(delta / minute) + " minutes ago";
  } else if (Math.floor(delta / hour) === 1) {
    return "1 hour ago";
  } else if (delta < day) {
    return Math.floor(delta / hour) + " hours ago";
  } else if (delta < day * 2) {
    return "yesterday";
  } else {
    return delta + " days ago";
  }
}

export default function ImgMediaCard(props) {
  const options = {
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
          {relativeDate(
            new Date(props.publishedAt).toLocaleDateString("en-US", options)
          )}
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
