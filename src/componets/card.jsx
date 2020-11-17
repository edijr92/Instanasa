import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

import { useParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function PhotosCard({ photos }) {
    const rover = useParams();
    const classes = useStyles();



    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">{rover.name}</ListSubheader>
                </GridListTile>
                {photos && photos.map((e) => (
                    <GridListTile key={e.id}>
                        <img src={e.img_src} alt={e.id} />
                        <GridListTileBar
                            title={e.earth_date}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}


