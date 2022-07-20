import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Box, debounce, Pagination, Stack, Typography } from "@mui/material";
import Card from "./Card";
import { styled, alpha } from "@mui/material/styles";
import BottomAppbar from "./BottomAppbar";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import CustomNews from "./CustomNews";
import Loading from "./Loading";

import { useQuery } from "react-query";

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
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("general");

  const apiKey = "c6af1a17c8a24814bd3f48f11408de46";
  const pageSize = 10;
  const searchQuery = query ? query : "general";

  const userQuery = useQuery(
    [
      "users",
      {
        page,
        searchQuery,
      },
    ],
    () =>
      fetch(
        `https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=publishedAt&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`
      ).then((res) => res.json())
  );

  const handleChange = (_event, value) => {
    setPage(value);
    scrollToSection();
  };

  const handleSearch = debounce((event) => {
    event.preventDefault();
  }, 1000);

  const scrollToSection = () => {
    const element = document.getElementById("news-card");
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  function selectQuery(id) {
    setQuery(id);
    scrollToSection();
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 100);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar
            search={
              <Search onChange={handleSearch}>
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
              <h3 className='' onClick={() => selectQuery("general")}>
                General
              </h3>
            }
            select2={<h3 onClick={() => selectQuery("business")}>Business</h3>}
            select3={
              <h3 onClick={() => selectQuery("technology")}>Technology</h3>
            }
            select4={
              <h3 onClick={() => selectQuery("entertainment")}>
                Entertainment
              </h3>
            }
            select5={<h3 onClick={() => selectQuery("sports")}>Sports</h3>}
          />
          <div className='home-body'>
            <Sidebar />

            <div>
              <CustomNews />
              <Box className='news-content'>
                {userQuery.isError ? (
                  <h4 className='text-center text-bold'>
                    Error fetching news.
                  </h4>
                ) : null}
                {userQuery.isLoading ? (
                  <h4 className='text-center text-bold'>Loading news...</h4>
                ) : (
                  userQuery.data.articles.map((article, index) => {
                    return (
                      <Card
                        key={index}
                        title={article.title}
                        source={article.source.name}
                        author={article.author}
                        content={article.content}
                        description={article.description}
                        url={article.url}
                        image={article.urlToImage}
                        publishedAt={article.publishedAt}
                      />
                    );
                  })
                )}

                <Stack spacing={2} justifyContent='center' alignItems='center'>
                  <Typography>Page: {page}</Typography>
                  <Pagination
                    count={
                      userQuery.isLoading ||
                      userQuery.isError ||
                      userQuery.data === undefined
                        ? 0
                        : Math.floor(userQuery.data.totalResults / 1000)
                    }
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
      )}
    </>
  );
}

export default HomePage;
