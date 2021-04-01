import React from 'react';
import {
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button
} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";
import SidebarPopover from "./SidebarPopover";

const ruleMargin = 15;

const useStyle = makeStyles((theme) => ({
    text: {
        color: theme.palette.text.primary
    },

    accordion: {
        backgroundColor: theme.palette.background.default,
        padding: 0,
        boxShadow : "none"
    },

    expand: {
        color: theme.palette.text.primary        
    }, 

    select: {
        backgroundColor: theme.palette.background.default
    },

}));

const Genres1 = [
    {text: "All"},
    {text: "Sci-Fi"},
    {text: "Action"},
    {text: "Adventure"},
    {text: "Animation"},
    {text: "Comedy"},
    {text: "Drama"},
    {text: "Fantasy"},
    {text: "Family"},
    {text: "Thriller"}
];

const Genres2 = [
    {text: "Short"},
    {text: "Mystery"},
    {text: "Horror"},
    {text: "Romance"},
    {text: "Crime"},
    {text: "Talk-Show"},
    {text: "Sport"},
    {text: "Documentary"},
    {text: "Music"},
    {text: "History"}
];

const Genres3 = [
    {text: "Reality-Tv"},
    {text: "War"},
    {text: "Western"},
    {text: "Game-Show"},
    {text: "News"},
    {text: "Biography"},
    {text: "Adult"},
    {text: "Film-Noir"}
];

const TT1 = [
    {text: "All"},
    {text: "Movies"},
    {text: "TV Shows"},
    {text: "TV Episodes"},
    {text: "Short Films"}
];

const TT2 = [
    {text: "Feature Films"},
    {text: "TV Movies"},
    {text: "TV Shorts"},
    {text: "Video Games"},
    {text: "Video"}
];

const TT3 = [
    {text: "TV Mini-Series"},
    {text: "TV Specials"}
];


export default function SiderBrowse() {
    const classes = useStyle();

    const [age, setAge] = React.useState('')

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [value, setValue] = React.useState("International");

    const handleRadio = (event) => {
        setValue(event.target.value);
    };


    return (
        <Grid container direction={"column"} spacing={5}>
            <Grid item>
                <Typography variant={"h2"}>
                    Filter by
                </Typography>
            </Grid>
            <Grid item>
                <SidebarPopover title={"Genres"} 
                    itemsRow1={Genres1}
                    itemsRow2={Genres2}
                    itemsRow3={Genres3}/>
            </Grid>
            <Grid item>
                <SidebarPopover title={"Title Type"} 
                    itemsRow1={TT1}
                    itemsRow2={TT2}
                    itemsRow3={TT3}/>
            </Grid>


            <Grid item>
                <Accordion className={classes.accordion} m = {0} boxShadow={20} className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordion}
                        expandIcon={<ExpandMore className={classes.expand}/>}
                        id="panel1a-header">
                        <Typography variant={"h3"}>Votes</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion}>
                        <Grid container direction={"row"} justify={"space-between"} spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    id="Vote-min"
                                    label="Min. Votes"                                 
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="Vote-min"
                                    label="Max. Votes"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>

            <Grid item>
                <Accordion className={classes.accordion} m = {0} boxShadow={20} className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordion}
                        expandIcon={<ExpandMore className={classes.expand}/>}
                        id="panel1a-header">
                        <Typography variant={"h3"}>Release Date</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion}>
                        <Grid container direction={"row"} justify={"space-between"} spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    id="From Date"
                                    label="From Date"                                 
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="To Date"
                                    label="To Date"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>


            <Grid item>
                <Accordion className={classes.accordion} >
                    <AccordionSummary
                        className={classes.accordion}
                        expandIcon={<ExpandMore className={classes.expand}/>}
                        id="panel1a-header">
                        <Typography variant={"h3"}>Region</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion}>
                        <RadioGroup aria-label="Region" name="Radio1" alue={value} onChange={handleChange}>
                                <FormControlLabel value="International" control={<Radio/>} label="International"
                                                onChange={handleRadio}/>
                                <FormControlLabel value="English" control={<Radio/>} label="English"/>
                                <FormControlLabel value="Indian" control={<Radio/>} label="Indian"/>
                        </RadioGroup>
                    </AccordionDetails>
                </Accordion>
            </Grid>

            <Grid item>
                <Typography variant={"h2"}>
                    
                </Typography>
            </Grid>

            <Grid item>
                <Typography variant={"h2"}>
                    Sort by
                </Typography>
            </Grid>

            <Grid item>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="YearFrom">Sort</InputLabel>
                    <Select
                        labelId="YearFrom"
                        id="YearFrom"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Popularity"}>Popularity</MenuItem>
                        <MenuItem value={"Rating"}>Rating</MenuItem>
                        <MenuItem value={"Box Office"}>Box Office</MenuItem>
                        <MenuItem value={"Runtime"}>Runtime</MenuItem>
                        <MenuItem value={"Alphabetic"}>Alphabetic</MenuItem>
                        <MenuItem value={"Number of Votes"}>Number of Votes</MenuItem>
                        <MenuItem value={"Release Date"}>Release Date</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item>
                        <RadioGroup aria-label="Region" name="Radio1" alue={value} onChange={handleChange}>
                                <FormControlLabel value="Descending" control={<Radio/>} label="Descending"
                                                onChange={handleRadio}/>
                                <FormControlLabel value="Ascending" control={<Radio/>} label="Ascending"/>
                        </RadioGroup>
            </Grid>

            <Grid item>
                <Button variant="outlined">
                    Apply
                </Button>
            </Grid>

        </Grid>

    );
}
