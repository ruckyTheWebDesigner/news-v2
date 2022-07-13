import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import newsData from "../api/MockData";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import Card from "./Card";
import { styled, alpha } from "@mui/material/styles";
import BottomAppbar from "./BottomAppbar";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import CustomNews from "./CustomNews";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function HomePage(props) {
  const [data, setData] = useState(newsData);
  const [page, setPage] = useState(1);

  const fetchData = async (no) => {
    const apiKey = "c6af1a17c8a24814bd3f48f11408de46";
    const country = "us";
    const category = "general";
    const pageSize = "10";
    const pageNo = no;

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${pageNo}&apiKey=${apiKey}`
    );
    const data = await response.json();
    console.log(data);
    setData(data.articles);
  };

  const fetchQuery = async (query) => {
    const apiKey = "c6af1a17c8a24814bd3f48f11408de46";
    const queryString = query;
    // const Date = new Date();
    const pageSize = 10;
    const pageNo = page;

    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${queryString}&from=2022-07-01&sortBy=popularity&pageSize=${pageSize}&page=${pageNo}&apiKey=${apiKey}`
    );
    const data = await response.json();

    setData(data.articles);
  };

  const handleChange = (event, value) => {
    setPage(value);
    fetchData(value);
  };

  useEffect(() => {
    // fetchData();
    // fetchNews();
  }, []);

  return (
    <>
      <Navbar
        search={
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        }
        button={props.button}
      />
      <BottomAppbar
        select1={
          <h3 className='' onClick={() => fetchQuery("Headlines")}>
            Headlines
          </h3>
        }
        select2={<h3 onClick={() => fetchQuery("business")}>Business</h3>}
        select3={<h3 onClick={() => fetchQuery("Technology")}>Technology</h3>}
        select4={
          <h3 onClick={() => fetchQuery("entertainment")}>Entertainment</h3>
        }
        select5={<h3 onClick={() => fetchQuery("Sports")}>Sports</h3>}
      />
      <div className='home-body'>
        <Sidebar />

        <div>
          <CustomNews />
          <Box className='news-content'>
            {data.length > 0 ? (
              data.map((item, index) => {
                return (
                  <Card
                    key={index}
                    className='card-news'
                    source={item.source.name}
                    author={item.author}
                    title={item.title}
                    publishedAt={item.publishedAt}
                    image={item.urlToImage}
                    description={item.description}
                    content={item.content}
                    url={item.url}
                  />
                );
              })
            ) : (
              <div className='d-flex justify-content-center'>
                <h1>No News Found</h1>
              </div>
            )}

            <Stack spacing={2} justifyContent='center' alignItems='center'>
              <Typography>Page: {page}</Typography>
              <Pagination
                count={Math.ceil(data.length / 2)}
                page={page}
                onChange={handleChange}
              />
            </Stack>
          </Box>
          {/* <MarketAnalytics /> */}
        </div>
        <Rightbar />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
