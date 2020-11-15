import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getNasaPhotos } from '../store/actions/test';
import { useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

function List({ sol }) {
    const rover = useParams();
    const dispatch = useDispatch();
    const vehiculo = useSelector((state) => state.nasa.rover);
    const setMarsSol = sol.filter(e => e.name === rover.name).map(x => x.max_sol)[0]
    // console.log(setMarsSol);


    useEffect(() => {
        dispatch(getNasaPhotos(rover.name, setMarsSol));
    }, [rover.name, setMarsSol]);


    const classes = useStyles();
    return (
        <div className={classes.root}>
            {vehiculo.photos && vehiculo.photos.map((e) => (
                // console.log(e.img_src);
                <Avatar key={e.id} alt="Remy Sharp" src={e.img_src} className={classes.large} />
            ))}
        </div>
    );
}

export default List;