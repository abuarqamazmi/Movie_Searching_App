import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="250"
        image={movie.show.image.medium}
        alt={movie.show.name}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Name: {movie.show.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Language: {movie.show.language}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
