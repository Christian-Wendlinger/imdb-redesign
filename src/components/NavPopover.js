import {Box, ClickAwayListener, Grid, makeStyles, Popover, Typography} from "@material-ui/core";
import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";
import {ExpandMore} from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
    menuDropDown: {
        backgroundColor: theme.palette.secondary.main,
    },
    pointer: {
        cursor: "pointer"
    },
    popover: {
        marginTop: 10,
        pointerEvents: "none"
    },
    popoverContent: {
        pointerEvents: "auto"
    },
    navArrow: {
        marginBottom: -5
    }
}));

export default function NavPopover({title, itemsRow1, itemsRow2}) {
    const classes = useStyle();

    const [openedPopover, setOpenedPopover] = useState(false);
    const popoverAnchor = useRef(null);

    const popoverEnter = () => setOpenedPopover(true);
    const popoverLeave = () => setOpenedPopover(false);

    return (
        <ClickAwayListener onClickAway={popoverLeave}>
            <div>
                <Grid container
                      className={classes.pointer}
                      alignItems={"center"}
                      ref={popoverAnchor}
                      onClick={openedPopover ? popoverLeave : popoverEnter}>

                    <Grid item>
                        <Typography>{title}</Typography>
                    </Grid>

                    <Grid item>
                        <ExpandMore fontSize={"small"} className={classes.navArrow}/>
                    </Grid>
                </Grid>

                <Popover
                    className={classes.popover}
                    classes={{
                        paper: classes.popoverContent,
                    }}
                    open={openedPopover}
                    anchorEl={popoverAnchor.current}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}>
                    <Box p={2} className={classes.menuDropDown}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Grid container direction={"column"} spacing={1}>
                                    {itemsRow1.map(item => {
                                        return (
                                            <Grid item>
                                                <Link to={item.link} style={{textDecoration: "none", color: "#F2F2F2"}}
                                                      onClick={popoverLeave}>
                                                    <Typography>{item.text}</Typography>
                                                </Link>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </Grid>

                            {itemsRow2 !== undefined &&
                            [
                                <Grid item/>,
                                <Grid item>
                                    <Grid container direction={"column"} spacing={1}>
                                        {itemsRow2.map(item => {
                                            return (
                                                <Grid item>
                                                    <Link to={item.link}
                                                          style={{textDecoration: "none", color: "#F2F2F2"}}>
                                                        <Typography>{item.text}</Typography>
                                                    </Link>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Grid>
                            ]
                            }
                        </Grid>
                    </Box>
                </Popover>
            </div>
        </ClickAwayListener>
    );
}
