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
    Button,
    Checkbox
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



export default function SidebarTopNews() {
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
                <Accordion className={classes.accordion} m = {0} boxShadow={20} className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordion}
                        expandIcon={<ExpandMore className={classes.expand}/>}
                        id="panel1a-header">
                        <Typography variant={"h3"}>Category</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion}>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <FormControlLabel control={<Checkbox color="default"/>} label={"All"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<Checkbox color="default"/>} label={"Variety"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<Checkbox color="default"/>} label={"Indiewire"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<Checkbox color="default"/>} label={"TheW Wrap"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<Checkbox color="default"/>} label={"Slash"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<Checkbox color="default"/>} label={"TV Line"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<Checkbox color="default"/>} label={"The Portal"}/>
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
                        <Typography variant={"h3"}>News Portal</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion}>
                        <Grid container direction={"column"}>
                                <Grid item>
                                    <FormControlLabel control={<Checkbox color="default"/>} label={"All"}/>
                                </Grid>
                                <Grid item>
                                    <FormControlLabel control={<Checkbox color="default"/>} label={"Variety"}/>
                                </Grid>
                                <Grid item>
                                    <FormControlLabel control={<Checkbox color="default"/>} label={"Indiewire"}/>
                                </Grid>
                                <Grid item>
                                    <FormControlLabel control={<Checkbox color="default"/>} label={"TheW Wrap"}/>
                                </Grid>
                                <Grid item>
                                    <FormControlLabel control={<Checkbox color="default"/>} label={"Slash"}/>
                                </Grid>
                                <Grid item>
                                    <FormControlLabel control={<Checkbox color="default"/>} label={"TV Line"}/>
                                </Grid>
                                <Grid item>
                                    <FormControlLabel control={<Checkbox color="default"/>} label={"The Portal"}/>
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