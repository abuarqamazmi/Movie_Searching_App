import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Grid2 } from '@mui/material';
import axios from 'axios';


export default function MovieSearchApp() {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);

  // Function to handle movie search
  const fetchData = async () => {
    if (!searchText) return; // Prevent search on empty input
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`);
      setMovies(response.data); // Set the movies in state
      setSearchText("");
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  // Handle input change
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?fit=crop&w=1800&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width:'100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:0,
        padding:0,
        overflow:'hidden'
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
          padding: '2rem', 
          borderRadius: '10px', 
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' 
        }}
      >
        <Typography variant="h3" align="center" gutterBottom color="white">
          Movie Searching App
        </Typography>
        <Grid2 container spacing={2} justifyContent="center">
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Enter Movie Name"
              variant="outlined"
              value={searchText}
              onChange={handleInputChange}
              sx={{ backgroundColor: 'white', borderRadius: '10px' }}
            />
          </Grid2>
          <Grid2 item xs={12} display="flex" justifyContent="center">
            <Button 
              variant="contained" 
              size="large" 
              sx={{ borderRadius: '10px', backgroundColor: '#ff9800', ':hover': { backgroundColor: '#e68900' } }}
              onClick={fetchData} // Trigger fetch when clicked
            >
              Search
            </Button>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2} justifyContent="center" sx={{ marginTop: '2rem' }}>
          {movies.map((movie, index) => (
            movie.show.image && (
              <Grid2 item xs={12} sm={6} md={4} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <img src={movie.show.image.medium} alt={movie.show.name} style={{ borderRadius: '10px', width: '100%' }} />
                  <Typography variant="h6" color="white">{movie.show.name}</Typography>
                  <Typography variant="subtitle1" color="gray">{movie.show.language}</Typography>
                </Box>
              </Grid2>
            )
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
