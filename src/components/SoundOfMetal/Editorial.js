import {Grid, Typography} from "@material-ui/core";

export default function Editorial({image, text}) {
    return (
        <Grid container direction={"row"} spacing={2} alignItems={"flex-start"}>
            <Grid item xs>
                <img src={image} width={"100%"}/>
            </Grid>
            <Grid item xs>
                <Typography variant={"body2"} color={"text"}>{text} <Typography variant={"body2"} color={"primary"}>More »</Typography></Typography>
            </Grid>
        </Grid>
    );
}
