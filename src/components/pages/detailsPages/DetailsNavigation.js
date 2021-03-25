import {Grid, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const navItems = ["Cast", "Photos", "Videos", "Storyline", "User Reviews", "Did you know", "Details", "Questions"]
const navLinks = ["cast", "photos", "-", "-", "user-reviews", "-", "-", "-"]

export default function DetailsNavigation({active, pageId}) {
    return (
        <Grid container direction={"column"} spacing={2}>
            {navItems.map((navItem, index) => {
                const link = navLinks[index] !== "-" ? `/movies/${pageId}/${navLinks[index]}` : "#";
                return (
                    <Grid item>
                        <Link to={link} style={{textDecoration: "none", color: "#F2F2F2"}}>
                            <Typography variant={"h3"} color={active === index + 1 ? "primary" : ""}>
                                {navItem}
                            </Typography>
                        </Link>
                    </Grid>
                );
            })}
        </Grid>
    );
}
