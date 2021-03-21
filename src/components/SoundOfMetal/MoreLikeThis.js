import {Grid} from "@material-ui/core";

export default function MoreLikeThis({image, image2}) {
    return (
        <Grid container direction={"column"} spacing={1} alignItems={"flex-start"}>
            <Grid item>
                <img src={image} width={"100%"}/>
            </Grid>
            <Grid item >
                <img src={image2} width={"100%"}/>
            </Grid>
        </Grid>
    );
}
