import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ImageFile from './assets/test.jpg'
import { Typography } from '@material-ui/core';
import { FavoriteBorder, StarBorder } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: '#5E5558',
    minWidth: '100%',
    minHeight: '1000px'
  },
  imageGridContainer: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px',
    },
  },
  imageContainer: {
    marginTop: '14vh',
    float: 'left',
    width: '28vw',
    height: '50vh',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px',
      width: '70vw'
    },
   /*  [theme.breakpoints.down('lg')]: {
     // marginTop: '14vh',
      width: '28vw',
      height: '50vh',
    }, */
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    /* [theme.breakpoints.down('md')]: {
      //marginTop: '3vh',
    }, */
  },
  title: {
    marginLeft: '20px',
    marginTop: '14vh',
    color: 'white',
    fontSize: '3vh',
    minWidth: '100%'
  },
  titleColumn: {
    maxHeight: "200px",
    //border: '2px solid green'
  },
  secondHeader: {
    //border: '2px solid white',
    marginTop: '-18vh',
    marginLeft: '20px',
    fontSize: '6vh',
    color: 'white',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
    },
  },
  gridContainer1: {
    width: '100%',
    //border: '2px solid blue',
    //paddingTop: '20px'
  },
  iconBox: {
    display: 'flex',
    fontSize: '1vh'
  },
  starBox: {
    display: 'flex',
  },
  favoriteBox: {
    marginLeft: '20px',
    display: 'flex'
  },
  basicAdvance: {
    //marginLeft: '8px',
    color: 'white',
    position: 'absolute',
    bottom: '5px',
    left: '20px'
  }
}));


function App() {
  const classes = useStyles();
  const [height, setHeight] = useState('1000px');
  const [width, setWidth] = useState('100%'); // Keeping for the future use.

  const updateWindowDimensions = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
  }, []);

  return (
    <React.Fragment>
      <div style={{height}} className={classes.body}>
        <Grid className={classes.gridContainer1} container spacing={3}>
          <Grid className={classes.titleColumn} item xs={12} sm={12} md={6}>
            {/* <Typography>{"Title"}</Typography> */}
            <div className={classes.title}>Title</div>
          </Grid>
          <Grid item className={classes.imageGridContainer} xs={12} sm={12} md={6}>
            <Container className={classes.imageContainer}>
              <img className={classes.image} src={ImageFile}/>
            </Container>
          </Grid>
        </Grid>
          <div className={classes.secondHeader} >
            <div >
              Web Developer
            </div>
            <div >
              React, Redux
            </div>
            <div className={classes.iconBox}>
              <div className={classes.starBox}>
                <StarBorder  />
                <Typography style={{marginLeft: '7px'}} >5/5</Typography>
              </div>
              <div className={classes.favoriteBox}>
                <FavoriteBorder  />
                <Typography style={{marginLeft: '7px'}} >Styled</Typography>
              </div>
            </div>
          </div>
        <div className={classes.basicAdvance}>
          Basic, Advance
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
