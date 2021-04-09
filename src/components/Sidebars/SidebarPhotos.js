import React from 'react';
import {
    Grid,
    makeStyles,
    Typography,
    Button,
    withStyles
} from "@material-ui/core";
import SidebarPopover from "./SidebarPopover";


const GreyButton = withStyles((theme) => ({
    root: {
        color: "#F2F2F2",
        backgroundColor: "#25272a",
        '&:hover': {
            backgroundColor: "#25272a",
        },
    },
}))(Button);


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

}));

const Type1 = [
    {text: "All"},
    {text: "Still Frame"},
    {text: "Event"}
];

const Type2 = [
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
                <Typography variant={"h2"}>
                    Filter by
                </Typography>
            </Grid>
            <Grid item>
                <SidebarPopover title={"Type"} 
                    itemsRow1={Type1}
                    itemsRow2={Type2}/>
            </Grid>
            <Grid item>
                <SidebarPopover title={"Person"} 
                    itemsRow1={Person1}
                    itemsRow2={Person2}/>
            </Grid>
            <Grid item>
                <SidebarPopover title={"Theme"} 
                    itemsRow1={Theme1}
                    itemsRow2={Theme2}/>
            </Grid>

            <Grid item>
                <GreyButton variant="outlined">
                    Apply
                </GreyButton>
            </Grid>

        </Grid>

    );
}
