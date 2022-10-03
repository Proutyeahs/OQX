import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './AboutPage.css';
import '@fontsource/roboto';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';



// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <>
    <div className="container">
      
      <div>
      <h2>About Our Queer Hxstory</h2>
        <p>
          LGBTQ literature and educational resources are often barred behind paywalls and complex language.
          <br></br>
          <br></br>
          Our Queer Hxstory creates a platform for people to access three educational timelines: political/legal, medical/scientific, and business/cultural. All at no cost and accessible for people as young as ten.
          <br></br>
          <br></br>
          Now, the LGBTQ story is available to all reading levels and all educational levels. OQX gives you clean timelines that you can click into and explore the consequential events that still impact us all today. Whether you are discovering queer history for the first time, or diving deep into the research, Our Queer Hxstory opens the doors for you. 
          <br></br>
          <br></br>
          <a href="https://ourqueerhxtory.com">Please Consider Donating to OQX</a>
        </p>
      </div>
      <div className='bios'>
      <Card sx={{ maxWidth: 300 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image="https://www.seekpng.com/png/small/143-1435868_headshot-silhouette-person-placeholder.png"
        alt="Leo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Leonardo E. Candelario-Pérez, Ph.D. LP
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet. Et saepe sunt qui dignissimos dolores aut ipsa praesentium ut officia voluptatem ut consequatur iusto magni repellendus sit aliquid quis. Cum Quis accusantium et animi iste et dolore labore et mollitia incidunt qui minus ullam ut rerum nemo! Eum fugit veniam qui debitis ipsum aut rerum incidunt sit galisum esse? Et voluptatum ullam ex corporis dolorem ut ducimus quia aut praesentium dolorem At omnis sequi.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  <br></br>
  <Card sx={{ maxWidth: 300 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image="https://www.seekpng.com/png/small/143-1435868_headshot-silhouette-person-placeholder.png"
        alt="Nic"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Nic Rider, Ph.D.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet. Et saepe sunt qui dignissimos dolores aut ipsa praesentium ut officia voluptatem ut consequatur iusto magni repellendus sit aliquid quis. Cum Quis accusantium et animi iste et dolore labore et mollitia incidunt qui minus ullam ut rerum nemo! Eum fugit veniam qui debitis ipsum aut rerum incidunt sit galisum esse? Et voluptatum ullam ex corporis dolorem ut ducimus quia aut praesentium dolorem At omnis sequi.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
          <a href="https://ourqueerhxtory.com">Get in  contact!</a>

          </div>
      </div>
    
  </>

  );
}

export default AboutPage;
