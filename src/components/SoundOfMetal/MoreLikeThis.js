import {Grid} from "@material-ui/core";

export default function MoreLikeThis({images}) {
    return (
        <Grid container direction={"row"} spacing={2}>
            <Grid item xs>
                <Grid container direction={"column"} spacing={2} alignItems={"flex-start"}>
                    <Grid item xs>
                        <img src={images.image} width={"100%"}/>
                    </Grid>
                    <Grid item xs>
                        <img src={images.image2} width={"100%"}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs>
                <Grid container direction={"column"} spacing={2} alignItems={"flex-start"}>
                    <Grid item xs>
                        <img src={images.image3} width={"100%"}/>
                    </Grid>
                    <Grid item xs>
                        <img src={images.image4} width={"100%"}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs>
                <Grid container direction={"column"} spacing={2} alignItems={"flex-start"}>
                    <Grid item xs>
                        <img src={images.image5} width={"100%"}/>
                    </Grid>
                    <Grid item xs>
                        <img src={images.image6} width={"100%"}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
