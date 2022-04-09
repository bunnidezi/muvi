import { ThemeProvider } from '@emotion/react';
import { Alert, Box, Button, createTheme, Tab, Tabs, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Search.css'
import axios from 'axios';
import SingleContent from '../../componets/SingleContent/SingleContent';
import CustomPagination from '../../componets/Pagination/CustomPagination';
import LoadingScreen from '../../componets/LoadingScreen';


function Search() {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#101010",
      },
    },
  });

  const fetchSearch = async () => {
    try {
      const API_KEY = `21a18fd40187d76bd381816c4a8949ea`
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      setError("");
      // console.log(data);
    } catch (error) {
      setError("");
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div className="search">
          <TextField
              style={{ flex: 1, }}
              className="searchBox"
              label="Search"
              variant="filled"
              onChange={(e) => setSearchText(e.target.value)}
             sx={{backgroundColor:"#e7dfdd", fontSize:"30px"}} 
            />
            <Button  variant="contained" style={{ marginLeft: 10 }} onClick={fetchSearch}>
            <SearchIcon fontSize="large" />
            </Button>
        </div>
            <Tabs
              value={type}
              style={{ paddingBottom: 5 }}
              onChange={(event, newValue) => {
                setType(newValue);
                setPage(1);
              }}>
                <Tab style={{ width: "50%",backgroundColor:"#a239ca", color:"white"}} label="Search Movies" />
                <Tab style={{ width: "50%",backgroundColor:"#130b19",marginLeft:"10px", color:"white"}} label="Search TV Series" />
            </Tabs>
      </ThemeProvider>
      
      <div className="trending">
      <Box sx={{ position: "relative", height: 1 }}>
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              {error ? (
                <Alert severity="error">{error}</Alert>
              ) : (
                <div className='trending'>
                 {content &&
                  content.map((c) => (
                    <SingleContent
                      key={c.id}
                      id={c.id}
                      poster={c.poster_path}
                      title={c.title || c.name}
                      date={c.first_air_date || c.release_date}
                      media_type={type ? "tv" : "movie"}
                      vote_average={c.vote_average}
                    />
                  ))}
                    {searchText}
                  
                </div>
              )}
            </>
          )}
       </Box>
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    
    </div>
  )
}

export default Search