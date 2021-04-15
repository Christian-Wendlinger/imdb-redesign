import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button, Checkbox, FormControlLabel,
    Grid,
    makeStyles,
    Typography,
    withStyles
} from "@material-ui/core";
import SidebarPopover from "./SidebarPopover";
import {ExpandMore} from "@material-ui/icons";


const GreyButton = withStyles((theme) => ({
    root: {
        color: "#F2F2F2",
        backgroundColor: "#25272a",
        '&:hover': {
            backgroundColor: "#25272a",
        },
    },
}))(Button);

const GreyCheckbox = withStyles({
    root: {
        color: "#131314",
        '&$checked': {
            color: "#F5C518",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);


const useStyle = makeStyles((theme) => ({
    text: {
        color: theme.palette.text.primary
    },
    expand: {
        color: theme.palette.text.primary
    },

    select: {
        backgroundColor: theme.palette.background.default
    },

    accordion: {
        backgroundColor: theme.palette.background.default,
        padding: 0,
        boxShadow: "none"
    },

}));


const Type = [
    {text: "All"},
    {text: "Still Frame"},
    {text: "Event"},
    {text: "Publicity"},
    {text: "Poster"},
    {text: "Behind the Scenes"}
];

const Person1 = [
    {text: "Riz Ahmed"},
    {text: "Olivia Cooke"},
    {text: "Paul Raci"},
    {text: "Dave Karger"},
    {text: "Tom Kemp"}
];

const Person2 = [
    {text: "Darius Marder"},
    {text: "Chelsea Lee"},
    {text: "Lauren Ridloff"},
    {text: "Shaheem Sanchez"},
    {text: "Mathieu Amalric"}
];

const Theme1 = [
    {text: "IMDb at Toronto 2019 Presented By Intuit QuickBooks"},
    {text: "TIFF 2019: Premieres and Parties"},
    {text: "TIFF 2019: Photos We Love"}
];

const Theme2 = [
    {text: "TIFF 2019 Stars: Then And Now"},
    {text: "TIFF 2019: Still Images"},
    {text: "2021 Golden Globes Nominees In and Out of Character"}
];


export default function SiderBrowse() {
    const classes = useStyle();

    return (
        <Grid container direction={"column"} spacing={3}>
            <Grid item>
            </Grid>

            <Grid item>
                <Typography variant={"h2"}>
                    Filter by
                </Typography>
            </Grid>

            <Grid item>
                <Accordion className={classes.accordion} m={0} boxShadow={20} style={{marginBottom: 12}}>
                    <AccordionSummary
                        className={classes.accordion}
                        expandIcon={<ExpandMore className={classes.expand}/>}
                        id="panel1a-header">
                        <Typography variant={"h3"}>Type</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion}>
                        <Grid container direction={"column"}>
                            {Type.map(item => {
                                return(
                                    <Grid item>
                                        <FormControlLabel control={<GreyCheckbox checked={item.text === "All"}/>} label={item.text}/>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>

            <SidebarPopover title={"Person"}
                            itemsRow1={Person1}
                            itemsRow2={Person2}/>


            <SidebarPopover title={"Theme"}
                            itemsRow1={Theme1}
                            itemsRow2={Theme2}/>

            <Grid item>
                <Grid container direction={"row"} spacing="2">
                    <Grid item>
                        <GreyButton variant="outlined">
                            Apply
                        </GreyButton>
                    </Grid>

                    <Grid item>
                        <GreyButton variant="outlined">
                            Reset
                        </GreyButton>
                    </Grid>

                </Grid>
            </Grid>

        </Grid>

    );
}
