import {Grid, makeStyles, Typography} from "@material-ui/core";
import ShowMore from "../ShowMore";
import {Link} from "react-router-dom";

const ruleMargin = 15;

const useStyle = makeStyles(theme => ({
    balken: {
        borderTop: "1px",
        borderColor: theme.palette.balken,
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    },
    subtitle: {
        marginTop: 2
    }
}));

export default function ActorListItem({
                                          number,
                                          image,
                                          name,
                                          age,
                                          born,
                                          description,
                                          zodiacSign,
                                          knownFor,
                                          lastItem,
                                          link
                                      }) {
    const classes = useStyle();
    return (
        [
            <Grid item>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Link to={link} style={{textDecoration: "none"}}>
                            <img src={image} width={"100%"}/>
                        </Link>
                    </Grid>


                    <Grid item xs={10}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item xs>
                                <Grid container spacing={1} alignItems={"center"}>
                                    <Grid item>
                                        <Link to={link} style={{textDecoration: "none"}}>
                                            <Typography variant={"h3"}
                                                        color={"primary"}>{number !== undefined && number + "."} {name} {age !== undefined && `(${age})`}</Typography>
                                        </Link>
                                    </Grid>
                                </Grid>

                                {born !== undefined &&
                                <Typography variant={"body2"} className={classes.subtitle}>
                                    {born}
                                </Typography>
                                }
                            </Grid>

                            <Grid item xs>
                                <Typography variant={"body1"}>{description}</Typography>
                            </Grid>

                            <Grid item xs>
                                {zodiacSign !== undefined &&
                                <Typography variant={"body2"}>Zodiac Sign : &nbsp;{zodiacSign}</Typography>}
                                <Typography variant={"body2"}>Known For : &nbsp;&nbsp;&nbsp;{knownFor}&nbsp;&nbsp;
                                    <ShowMore variant={"body2"}/></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>,
            <Grid item style={{width: "100%", display: lastItem ? "none" : "block"}}>
                <hr className={classes.balken}/>
            </Grid>
        ]
    );
}
