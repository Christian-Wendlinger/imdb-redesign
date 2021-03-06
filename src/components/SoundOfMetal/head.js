import {Grid, makeStyles, Typography} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";
import React from 'react';
import ReactPlayer from 'react-player'
import { autocompleteData } from "../../data/autocompleteData";
import ShowMore from "../ShowMore";

const useStyle = makeStyles({
    balken: {
        borderTop: "1px",
        borderColor: "#5B5F63",
        marginTop: 17,
        marginBottom: 17
    },
    headline: {
        marginBottom: 5,
    },
    addIcon: {
        fontSize: 25,
        marginLeft: 5,
        cursor: "pointer",
        color: "#F2F2F2"
    },
    starIcon: {
        fontSize: 18,
        marginRight: 3
    },
    content: {
        paddingTop: 60,
        marginBottom: 30
    }
});

export default function Head({poster, trailer, trailerPoster, title, informations, description}) {
    const classes = useStyle();
    return (
        <div className={classes.content}>

            <Grid container spacing={5}>

                <Grid item xs={3}>
                    <img src={poster} width={"100%"}/>
                </Grid>
                <Grid item xs={7}>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <Typography variant={"h1"} color={"text"} className={classes.headline}>
                                {title}
                                <AddBox className={classes.addIcon}/>
                            </Typography>
                        </Grid>

                        <Grid item style={{width: "100%"}}>
                            <hr className={classes.balken}/>
                        </Grid>

                        <Grid item>
                            <Typography variant={"body2"} color={"text"}>
                                {informations}
                            </Typography>
                        </Grid>

                        <Grid item style={{width: "100%"}}>
                            <hr className={classes.balken}/>
                        </Grid>

                        <Grid item style={{paddingBottom: 20}}>
                            <Typography variant={"body1"}>
                                {description} <ShowMore variant={"body1"}/>
                            </Typography>
                        </Grid>

                        <Grid item xs >
                            <ReactPlayer width="100%" height="400px" url={process.env.PUBLIC_URL + trailer} controls={true} light={trailerPoster}/>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </div>

    );
}
