import {Grid} from "@material-ui/core";
import React from 'react';
import ReactPlayer from 'react-player'

export default function Photos({videos}) {
    return (
        <Grid container direction={"row"} spacing={2} alignItems={"flex-start"}>
            <Grid item xs>
                <Grid container direction={"column"} spacing={2} alignItems={"flex-start"}>
                    <Grid item xs>
                        <ReactPlayer url={videos.video} controls={true}/>
                    </Grid>
                    <Grid item xs>
                        <ReactPlayer url={videos.video2} controls={true} style={{width: "50%"}}/>
                    </Grid>
                    <Grid item xs>
                        <ReactPlayer url={videos.video3} controls={true} style={{width: "50%"}}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs>
                <Grid container direction={"column"} spacing={2} alignItems={"flex-start"}>
                    <Grid item xs>
                        <ReactPlayer url={videos.video4} controls={true} style={{width: "50%"}}/>
                    </Grid>
                    <Grid item xs>
                        <ReactPlayer url={videos.video5} controls={true} style={{width: "50%"}}/>
                    </Grid>
                    <Grid item xs>
                        <ReactPlayer url={videos.video6} controls={true} style={{width: "50%"}}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    );
}
