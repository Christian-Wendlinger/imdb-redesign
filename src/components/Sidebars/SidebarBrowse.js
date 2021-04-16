import React from 'react';
import "../../main_style.css";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    makeStyles,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography,
    withStyles
} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";
import SidebarPopover from "./SidebarPopover";

const ruleMargin = 0;

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: "#F5C518",
        },
        // '& .MuiOutlinedInput-root': {
        //   '& fieldset': {
        //     borderColor: "#131314",
    },
    //'&:hover fieldset': {
    //  borderColor: "#5B5F63",
    //},
    //  },
    // },
})(TextField);


const CssSelect = withStyles({
    root: {
        '& label.Mui-focused': {
            color: "#F5C518",
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: "#232427",
            },
            '&.Mui-focused fieldset': {
                borderColor: "#F5C518",
            },
        },
    },
})(Select);

const GreyCheckbox = withStyles({
    root: {
        color: "#131314",
        '&$checked': {
            color: "#F5C518",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);


const GreyRadio = withStyles({
    root: {
        color: "#131314",
        '&$checked': {
            color: "#131314",
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);


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
        backgroundColor: "#25272a",
    },

    accordion: {
        backgroundColor: theme.palette.background.default,
        padding: 0,
        boxShadow: "none"
    },

    expand: {
        color: theme.palette.text.primary
    },

    select: {
        backgroundColor: "#25272a"
    },

    icon: {
        fill: "#F2F2F2",
        fontSize: 32,
        marginTop: -5,
    },

    input: {
        color: '#828282'
    },
    balken: {
        borderTop: "1px",
        borderColor: theme.palette.balken,
        marginTop: ruleMargin,
        marginBottom: ruleMargin
    }

}));

const Genres1 = [
    {text: "All", checked: true},
    {text: "Sci-Fi", checked: false},
    {text: "Action", checked: false},
    {text: "Adventure", checked: false},
    {text: "Animation", checked: false},
    {text: "Comedy", checked: false},
    {text: "Drama", checked: false},
    {text: "Fantasy", checked: false},
    {text: "Family", checked: false},
    {text: "Thriller", checked: false}
];

const Genres2 = [
    {text: "Short", checked: false},
    {text: "Mystery", checked: false},
    {text: "Horror", checked: false},
    {text: "Romance", checked: false},
    {text: "Crime", checked: false},
    {text: "Talk-Show", checked: false},
    {text: "Sport", checked: false},
    {text: "Documentary", checked: false},
    {text: "Music", checked: false},
    {text: "History", checked: false}
];

const Genres3 = [
    {text: "Reality-Tv", checked: false},
    {text: "War", checked: false},
    {text: "Western", checked: false},
    {text: "Game-Show", checked: false},
    {text: "News", checked: false},
    {text: "Biography", checked: false},
    {text: "Adult", checked: false},
    {text: "Film-Noir", checked: false}
];


const TT1 = [
    {text: "All", checked: true},
    {text: "Movies", checked: false},
    {text: "TV Shows", checked: false},
    {text: "TV Episodes", checked: false},
    {text: "Short Films", checked: false}
];

const TT2 = [
    {text: "Feature Films", checked: false},
    {text: "TV Movies", checked: false},
    {text: "TV Shorts", checked: false},
    {text: "Video Games", checked: false},
    {text: "Video", checked: false}
];

const TT3 = [
    {text: "TV Mini-Series", checked: false},
    {text: "TV Specials", checked: false}
];


export default function SiderBrowse({shuffle}) {
    const classes = useStyle();

    const [age, setAge] = React.useState('')

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [value1, setValue1] = React.useState('International');
    const [value2, setValue2] = React.useState('Descending');

    const handleRadio1 = (event) => {
        setValue1(event.target.value);
    };

    const handleRadio2 = (event) => {
        setValue2(event.target.value);
    };

    const [checked, setChecked] = React.useState(true);
    const handleChecked = (event) => {
        setChecked(event.target.checked);
    };


    return (
        <Grid container direction={"column"} spacing={1}>
            <Grid item>
                <Typography variant={"h2"}>
                    Filter by
                </Typography>
            </Grid>
            <SidebarPopover title={"Genres"}
                            itemsRow1={Genres1}
                            itemsRow2={Genres2}
                            itemsRow3={Genres3}
            />
            <Grid item style={{width: "100%", display: "block"}}>
                <hr className={classes.balken}/>
            </Grid>

            <SidebarPopover title={"Title Type"}
                            itemsRow1={TT1}
                            itemsRow2={TT2}
                            itemsRow3={TT3}
            />

            <Grid item style={{width: "100%", display: "block"}}>
                <hr className={classes.balken}/>
            </Grid>

            <Grid item style={{width: "100%", display: "block"}}>
                <hr className={classes.balken}/>
            </Grid>


            <Grid item style={{marginTop: -12}}>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordion}
                        expandIcon={<ExpandMore className={classes.expand}/>}
                        id="panel1a-header">
                        <Typography variant={"h3"}>Votes</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion}>
                        <Grid container direction={"row"} justify={"space-between"} spacing={2}>
                            <Grid item xs={6}>
                                <CssTextField
                                    InputLabelProps={{className: classes.input}}
                                    className={classes.text}
                                    id="Vote-min"
                                    label="Min. Votes"
                                    variant="outlined"
                                    autoComplete={"off"}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CssTextField
                                    InputLabelProps={{className: classes.input}}
                                    className={classes.text}
                                    id="Vote-max"
                                    label="Max. Votes"
                                    variant="outlined"
                                    autoComplete={"off"}
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>

            <Grid item style={{width: "100%", display: "block"}}>
                <hr className={classes.balken}/>
            </Grid>

            <Grid item>
                <Accordion className={classes.accordion} className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordion}
                        expandIcon={<ExpandMore className={classes.expand}/>}
                        id="panel1a-header">
                        <Typography variant={"h3"}>Release Date</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion}>
                        <Grid container direction={"row"} justify={"space-between"} spacing={2}>
                            <Grid item xs={6}>
                                <CssTextField
                                    InputLabelProps={{className: classes.input}}
                                    className={classes.text}
                                    id="From Date"
                                    label="From Date"
                                    variant="outlined"
                                    autoComplete={"off"}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CssTextField
                                    InputLabelProps={{className: classes.input}}
                                    className={classes.text}
                                    id="To Date"
                                    label="To Date"
                                    variant="outlined"
                                    autoComplete={"off"}
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>

            <Grid item style={{width: "100%", display: "block"}}>
                <hr className={classes.balken}/>
            </Grid>

            <Grid item>
                <Accordion className={classes.accordion} m={0} boxShadow={20} className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordion}
                        expandIcon={<ExpandMore className={classes.expand}/>}
                        id="panel1a-header">
                        <Typography variant={"h3"}>Streaming Service</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion}>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox checked={checked} onChange={handleChecked}/>}
                                                  label={"All"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"Prime Video"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"Filmtastic"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"MGM"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"Starzplay"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"MUBI"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"BBC Player"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"Sony"}/>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>

            <Grid item style={{width: "100%", display: "block"}}>
                <hr className={classes.balken}/>
            </Grid>


            <Grid item>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordion}
                        expandIcon={<ExpandMore className={classes.expand}/>}
                        id="panel1a-header">
                        <Typography variant={"h3"}>Region</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion}>
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="Region" name="Radio1" value={value1} onChange={handleRadio1}>
                                <FormControlLabel value="International" control={<GreyRadio/>} label="International"/>
                                <FormControlLabel value="English" control={<GreyRadio/>} label="English"/>
                                <FormControlLabel value="Indian" control={<GreyRadio/>} label="Indian"/>
                            </RadioGroup>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
            </Grid>

            <Grid item>
                <Typography variant={"h2"}>

                </Typography>
            </Grid>

            <Grid item>
                <Typography variant={"h2"}>

                </Typography>
            </Grid>

            <Grid item style={{marginBottom: 12}}>
                <Typography variant={"h2"}>
                    Sort by
                </Typography>
            </Grid>

            <Grid item>
                <FormControl variant="outlined" fullWidth>
                    <CssSelect
                        defaultValue={"Popularity"}
                        MenuProps={{classes: {paper: classes.select}}}
                        className={classes.select}
                        inputProps={{
                            classes: {
                                icon: classes.icon,
                            },
                        }}
                        labelId="YearFrom"
                        id="YearFrom"
                        onChange={handleChange}
                    >
                        <MenuItem value={"Popularity"}>Popularity</MenuItem>
                        <MenuItem value={"Rating"}>Rating</MenuItem>
                        <MenuItem value={"Box Office"}>Box Office</MenuItem>
                        <MenuItem value={"Runtime"}>Runtime</MenuItem>
                        <MenuItem value={"Alphabetic"}>Alphabetic</MenuItem>
                        <MenuItem value={"Number of Votes"}>Number of Votes</MenuItem>
                        <MenuItem value={"Release Date"}>Release Date</MenuItem>
                    </CssSelect>
                </FormControl>
            </Grid>

            <Grid item>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="Sort" name="Radio2" value={value2} onChange={handleRadio2}>
                        <FormControlLabel value="Descending" control={<GreyRadio/>} label="Descending"/>
                        <FormControlLabel value="Ascending" control={<GreyRadio/>} label="Ascending"/>
                    </RadioGroup>
                </FormControl>
            </Grid>

            <Grid item style={{width: "100%", display: "block", marginBottom: 12}}>
                <hr className={classes.balken}/>
            </Grid>

            <Grid item>
                <Grid container direction={"row"} spacing="2">
                    <Grid item>
                        <GreyButton variant="outlined" onClick={shuffle}>
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
