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

const ZS1 = [
    {text: "Capricon"},
    {text: "Aquarius"},
    {text: "Pisces"},
    {text: "Aries"},
    {text: "Taurus"}
];

const ZS2 = [
    {text: "Gemini"},
    {text: "Cancer"},
    {text: "Leo"},
    {text: "Virgo"},
    {text: "Libra"}
];

const ZS3 = [
    {text: "Scorpio"},
    {text: "Sagittarius"}
];


export default function SidebarBornToday() {
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
                        <Typography variant={"h3"}>Profession</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion}>
                        <Grid container direction={"column"}>
                                <Grid item>
                                    <FormControlLabel control={<Checkbox color="default"/>} label={"Actor"}/>
                                </Grid>
                                <Grid item>
                                    <FormControlLabel control={<Checkbox color="default"/>} label={"Producer"}/>
                                </Grid>
                                <Grid item>
                                    <FormControlLabel control={<Checkbox color="default"/>} label={"Writer"}/>
                                </Grid>
                                <Grid item>
                                    <FormControlLabel control={<Checkbox color="default"/>} label={"Director"}/>
                                </Grid>
                                <Grid item>
                                    <FormControlLabel control={<Checkbox color="default"/>} label={"Soundtrack"}/>
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
                        <Typography variant={"h3"}>Birth Year</Typography>
                    </AccordionSummary>
                    <Grid container direction={"column"} spacing={2}>
                            <Grid item>
                                <Grid container direction={"row"} justify={"space-between"} spacing={2}>
                                    <Grid item xs={6}>
                                        <FormControl variant="outlined" fullWidth>
                                            <InputLabel id="YearFrom">From Year</InputLabel>
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
                                                <MenuItem value={2000}>2000</MenuItem>
                                                <MenuItem value={2001}>2001</MenuItem>
                                                <MenuItem value={2002}>2002</MenuItem>
                                                <MenuItem value={2003}>2003</MenuItem>
                                                <MenuItem value={2004}>2004</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl variant="outlined" fullWidth>
                                            <InputLabel id="demo-simple-select-outlined-label">To Year</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={age}
                                                onChange={handleChange}
                                                label="Age"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={2000}>2000</MenuItem>
                                                <MenuItem value={2001}>2001</MenuItem>
                                                <MenuItem value={2002}>2002</MenuItem>
                                                <MenuItem value={2003}>2003</MenuItem>
                                                <MenuItem value={2004}>2004</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                </Accordion>
            </Grid>

            <Grid item>
                <SidebarPopover title={"Zodiac Sign"} 
                    itemsRow1={ZS1}
                    itemsRow2={ZS2}
                    itemsRow3={ZS3}/>
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
                        <MenuItem value={"Alphabetic"}>Alphabetic</MenuItem>
                        <MenuItem value={"Birth Date"}>Birth Date</MenuItem>
                        <MenuItem value={"Death Date"}>Death Date</MenuItem>
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