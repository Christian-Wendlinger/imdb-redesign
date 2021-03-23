import {Grid} from "@material-ui/core";

export default function MoreLikeThis({image, image2}) {
    return (
        <Grid container direction={"column"} spacing={2} alignItems={"flex-start"}>
            <Grid item xs>
                <img src={image} width={"100%"}/>
            </Grid>
            <Grid item xs>
                <img src={image2} width={"100%"}/>
            </Grid>
        </Grid>
    );
}
