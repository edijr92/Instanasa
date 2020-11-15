import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonBase, Typography, Grid, Container } from '@material-ui/core'
import useStyles from './home.styles'

const images = [
    {
        url: 'https://mars-photos.herokuapp.com/explore/images/Curiosity_rover.jpg',
        title: 'Curiosity',
    },
    {
        url: 'https://mars-photos.herokuapp.com/explore/images/Spirit_rover.jpg',
        title: 'Spirit',
    },
    {
        url: 'https://mars-photos.herokuapp.com/explore/images/Opportunity_rover.jpg',
        title: 'Opportunity',
    },
];

export default function Home() {
    const classes = useStyles();
    return (
        <Container >
            <div style={{ textAlign: 'center' }}>
                <Typography variant='h2' color='primary'>Escoge tu rover preferido: </Typography>
            </div>
            <div>
                <Grid className={classes.contenedor} container spacing={3}>
                    {images.map((image) => (
                        <Grid item key={image} xs={8} sm={10} md={4}>
                            <Link to={`/rover/${image.title}`}>
                                <ButtonBase key={image.title} className={classes.image} focusVisibleClassName={classes.focusVisible}>
                                    <span
                                        className={classes.imageSrc}
                                        style={{
                                            backgroundImage: `url(${image.url})`,
                                        }} rian
                                    />
                                    <span className={classes.imageBackdrop} />
                                    <span className={classes.imageButton}>
                                        <Typography
                                            component="span"
                                            variant="h4"
                                            color="inherit"
                                            className={classes.imageTitle}
                                        >
                                            {image.title}
                                            <span className={classes.imageMarked} />
                                        </Typography>
                                    </span>
                                </ButtonBase>
                            </Link>
                        </Grid>

                    ))}
                </Grid>
            </div>
        </Container >
    );
}