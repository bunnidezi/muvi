import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import {createTheme, ThemeProvider } from '@mui/material';
import { green, purple } from '@mui/material/colors';




const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#6719f1",
      },
    },
  });

const CustomPagination = ({setPage, numOfPages = 20}) => {

    const handlePageChange = (page)=>{
        setPage(page);
        window.scroll(0, 0);
    };

  return (
    <div
    style={{
        width:"60%",
        display:"flex",
        justifyContent:"center",
        marginTop:"30px",
        margin: "auto",  
        background:"#99d9",
        borderRadius: 10 ,
        fontWeight:"1000",
        color:"white"
    }} 
    >
       <ThemeProvider theme={darkTheme}>
        <Pagination 
        color="primary"
        count={numOfPages}
         onChange={(e)=> handlePageChange(e.target.textContent)}/>
        </ThemeProvider>
        
    </div>
  )
}

export default CustomPagination