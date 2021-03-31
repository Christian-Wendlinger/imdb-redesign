import {Box, ClickAwayListener, Grid, makeStyles, Popover, Typography, Checkbox, FormControl, FormControlLabel,} from "@material-ui/core";
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

export default function SidebarPopover({title, itemsRow1, itemsRow2, itemsRow3}) {
    const classes = useStyle();

    const [openedPopover, setOpenedPopover] = useState(false);
    const popoverAnchor = useRef(null);

    const popoverEnter = () => setOpenedPopover(true);
    const popoverLeave = () => setOpenedPopover(false);

    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
      };

    return (
        <ClickAwayListener onClickAway={popoverLeave}>
            <div>
                <Grid container
                      className={classes.pointer}
                      rid container direction={"row"} 
                      justify={"space-between"}
                      ref={popoverAnchor}
                      onClick={openedPopover ? popoverLeave : popoverEnter}>

                    <Grid item>
                        <Typography variant={"h3"}>{title}</Typography>
                    </Grid>

                    <Grid item>
                        <ExpandMore className={classes.navArrow}/>
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
                                <Grid container direction={"column"}>
                                    {itemsRow1.map(item => {
                                        return (
                                                <Grid item>
                                                    <FormControlLabel control={<Checkbox color="default"/>} label={item.text}/>
                                                </Grid>
                                        );
                                    })}
                                </Grid>
                            </Grid>

                            {itemsRow2 !== undefined &&
                            [
                                <Grid item/>,
                                <Grid item>
                                    <Grid container direction={"column"}>
                                        {itemsRow2.map(item => {
                                            return (
                                                <Grid item>
                                                    <FormControlLabel control={<Checkbox color="default"/>} label={item.text}/>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Grid>
                            ]
                            }
                            
                            {itemsRow3 !== undefined &&
                            [
                                <Grid item/>,
                                <Grid item>
                                    <Grid container direction={"column"}>
                                        {itemsRow3.map(item => {
                                            return (
                                                <Grid item>
                                                    <FormControlLabel control={<Checkbox color="default"/>} label={item.text}/>
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