import {Grid, Typography} from "@material-ui/core";
import ShowMore from "../ShowMore";

export default function Editorial({image, text}) {
    return (
        <Grid container direction={"row"} spacing={2} alignItems={"flex-start"}>
            <Grid item xs={4}>
                <img src={image} width={"100%"}/>
            </Grid>
            <Grid item xs={8}>
                <Typography variant={"body2"} color={"text"}>{text} <ShowMore variant={"body2"}/></Typography>
            </Grid>
        </Grid>
    );
}
