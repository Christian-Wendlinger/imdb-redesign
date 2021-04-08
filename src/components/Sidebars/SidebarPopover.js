import {Box, ClickAwayListener, Grid, makeStyles, Popover, Typography, Checkbox,FormControlLabel, withStyles} from "@material-ui/core";
import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";
import {ExpandLess, ExpandMore, ArrowDropDown, ArrowDropUp} from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
    menuDropDown: {
        boxShadow: "none",
        backgroundColor: theme.palette.secondary.main,
    },
    pointer: {
        cursor: "pointer"
    },
    popover: {
        pointerEvents: "none"
    },
    popoverContent: {
        pointerEvents: "auto"
    },
    navArrow: {
        marginTop: -6,
        marginRight: -5,
        fontSize: 32
    }
}));

const GreyCheckbox = withStyles({
    root: {
      color: "#131314",
      '&$checked': {
        color: "#F5C518",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

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
            <Grid item style={{marginBottom: 10, backgroundColor: openedPopover ? "#232427": ""}} ref={popoverAnchor}>
                    <Grid container
                        className={classes.pointer}
                        direction={"row"} 
                        justify={"space-between"}
                        onClick={openedPopover ? popoverLeave : popoverEnter}>

                        <Grid item>
                            <Typography variant={"h3"}>{title}</Typography>
                        </Grid>

                        <Grid item>
                            { openedPopover ? <ArrowDropUp className={classes.navArrow}/> : <ArrowDropDown className={classes.navArrow}/>}
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
                                                        <FormControlLabel control={<GreyCheckbox color="default"/>} label={item.text}/>
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
                                                        <FormControlLabel control={<GreyCheckbox color="default"/>} label={item.text}/>
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
                                                        <FormControlLabel control={<GreyCheckbox color="default"/>} label={item.text}/>
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
            </Grid>
        </ClickAwayListener>
    );
}