import {Grid, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function CastSlide({image, name, role, link}) {
    return (
        <Grid container direction={"column"} spacing={1} alignItems={"flex-start"}>
            <Grid item>
                <Link to={link} style={{textDecoration: "none"}}>
                    <img src={image} width={"100%"}/>
                </Link>
            </Grid>
            <Grid item>
                <Typography variant={"h3"} color={"text"}>{name}</Typography>
                <Typography variant={"body2"} style={{color: "#8d8e8f"}}>as {role}</Typography>
            </Grid>
        </Grid>
    );
}
