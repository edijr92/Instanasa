import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getNasaPhotos } from '../store/actions/test';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCard from './card'


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
    botones: {
        margin: '20px',
        display: 'flex',
        justifyContent: 'center'
    }
}));

function List({ sol }) {

    let [setup, setSetup] = useState(1)
    const rover = useParams();
    const dispatch = useDispatch();
    const vehiculo = useSelector((state) => state.nasa.rover);
    const setMarsSol = sol.filter(e => e.name === rover.name).map(x => x.max_sol)[0]



    useEffect(() => {
        dispatch(getNasaPhotos(rover.name, setMarsSol, setup.page));
    }, [rover.name, setMarsSol, setup.page]);

    function nextPage() {

        setSetup(setup + 1)
        dispatch(getNasaPhotos(rover.name, setMarsSol, setup));
        console.log('subo')
        console.log(setup)
    };

    function prevPage() {

        setSetup(setup = setup - 1)
        dispatch(getNasaPhotos(rover.name, setMarsSol, setup));
        console.log('bajo')
        console.log(setup)
    }


    const classes = useStyles();
    return (
        <div>

            <PhotoCard photos={vehiculo.photos} />
            <div>
                <ButtonGroup className={classes.botones} color="secondary" aria-label="outlined primary button group">
                    <Button onClick={() => { prevPage() }} ><ArrowBackIosIcon /></Button>
                    <Button onClick={() => { nextPage() }} ><ArrowForwardIosIcon /></Button>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default List;