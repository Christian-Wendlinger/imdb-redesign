import {
    Box,
    Checkbox,
    ClickAwayListener,
    FormControlLabel,
    Grid,
    makeStyles,
    Popover,
    Typography,
    withStyles
} from "@material-ui/core";
import React, {useRef, useState} from "react";
import {ExpandMore, ExpandLess} from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
    menuDropDown: {
        boxShadow: "none",
        backgroundColor: "#25272a ",
    },
    pointer: {
        cursor: "pointer"
    },
    popover: {
        pointerEvents: "none"
    },
    popoverContent: {
        pointerEvents: "auto"
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

    const checks = []
    if (itemsRow1 !== undefined) {
        checks.push(itemsRow1.map(item => item.checked))
    }
    if (itemsRow2 !== undefined) {
        checks.push(itemsRow2.map(item => item.checked))
    }
    if (itemsRow3 !== undefined) {
        checks.push(itemsRow3.map(item => item.checked))
    }

    const [checked, setChecked] = useState(checks);

    return (
        <ClickAwayListener onClickAway={popoverLeave}>
            <Grid item style={{marginBottom: 6, marginTop: 18, backgroundColor: openedPopover ? "#25272a" : ""}} ref={popoverAnchor}>
                <Grid container
                      className={classes.pointer}
                      direction={"row"}
                      justify={"space-between"}
                      onClick={openedPopover ? popoverLeave : popoverEnter}>

                    <Grid item>
                        <Typography variant={"h3"}>{title}</Typography>
                    </Grid>

                    <Grid item>
                        {openedPopover ? <ExpandLess/> : <ExpandMore/>}
                    </Grid>
                </Grid>

                <Popover
                    elevation={0}
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
                                {itemsRow1.map((item, index) => {
                                    return (
                                        <Grid item>
                                            <FormControlLabel control={<GreyCheckbox color="default"/>}
                                                              label={item.text}
                                                              checked={checked[0][index]}
                                                              onChange={() => {
                                                                  // update internally
                                                                  checks[0][index] = !checks[0][index];
                                                                  setChecked(checks);

                                                                  // update permanently
                                                                  item.checked = !item.checked;
                                                              }}/>
                                        </Grid>
                                    );
                                })}
                            </Grid>

                            {itemsRow2 !== undefined &&
                            [
                                <Grid item/>,
                                <Grid item>
                                    <Grid container direction={"column"}>
                                        {itemsRow2.map((item, index) => {
                                            return (
                                                <Grid item>
                                                    <FormControlLabel control={<GreyCheckbox color="default"/>}
                                                                      label={item.text}
                                                                      checked={checked[1][index]}
                                                                      onChange={() => {
                                                                          // update internally
                                                                          checks[1][index] = !checks[1][index];
                                                                          setChecked(checks);

                                                                          // update permanently
                                                                          item.checked = !item.checked;
                                                                      }}/>
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
                                        {itemsRow3.map((item, index) => {
                                            return (
                                                <Grid item>
                                                    <FormControlLabel control={<GreyCheckbox color="default"/>}
                                                                      label={item.text}
                                                                      checked={checked[2][index]}
                                                                      onChange={() => {
                                                                          // update internally
                                                                          checks[2][index] = !checks[2][index];
                                                                          setChecked(checks);

                                                                          // update permanently
                                                                          item.checked = !item.checked;
                                                                      }}/>
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
