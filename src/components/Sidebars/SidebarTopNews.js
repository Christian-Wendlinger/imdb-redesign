import React from 'react';
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

const ruleMargin = 15;


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

const GreyCheckbox = withStyles({
    root: {
        color: "#131314",
        '&$checked': {
            color: "#F5C518",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CssSelect = withStyles({
    root: {
        '& label.Mui-focused': {
            color: "#F5C518",
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: "#131314",
            },
            '&.Mui-focused fieldset': {
                borderColor: "#F5C518",
            },
        },
    },
})(Select);

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

    input: {
        color: '#828282'
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
        backgroundColor: "#25272a",
    },

    icon: {
        fill: "#F2F2F2",
        fontSize: 32,
        marginTop: -5,
    },

}));


export default function SidebarTopNews({shuffle}) {
    const classes = useStyle();

    const [age, setAge] = React.useState('')

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [value, setValue] = React.useState("Descending");

    const handleRadio = (event) => {
        setValue(event.target.value);
    };

    const [checked, setChecked] = React.useState(true);
    const handleChecked = (event) => {
        setChecked(event.target.checked);
    };


    return (
        <Grid container direction={"column"} spacing={3}>
            <Grid item>
                <Typography variant={"h2"}>
                    Filter by
                </Typography>
            </Grid>

            <Grid item style={{marginTop: -12}}>
                <Accordion className={classes.accordion} m={0} boxShadow={20} className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordion}
                        expandIcon={<ExpandMore className={classes.expand}/>}
                        id="panel1a-header">
                        <Typography variant={"h3"}>Category</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion}>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox checked={checked} onChange={handleChecked}/>}
                                                  label={"All"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"Movie"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"TV Show"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"Celebrity"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"Indie"}/>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>

            <Grid item>
                <Accordion className={classes.accordion} m={0} boxShadow={20} className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordion}
                        expandIcon={<ExpandMore className={classes.expand}/>}
                        id="panel1a-header">
                        <Typography variant={"h3"}>News Portal</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion}>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox checked={checked} onChange={handleChecked}/>}
                                                  label={"All"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"Variety"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"Indiewire"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"The Wrap"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"Slash"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"TV Line"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"The Portal"}/>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>

            <Grid item>
                <Accordion className={classes.accordion} m={0} boxShadow={20} className={classes.accordion}>
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
                        <MenuItem value={"Release Date"}>Release Date</MenuItem>
                        <MenuItem value={"Alphabetic"}>Alphabetic</MenuItem>
                    </CssSelect>
                </FormControl>
            </Grid>

            <Grid item>
                <RadioGroup aria-label="Asc/Desc" name="Radio1" value={value} onChange={handleRadio}>
                    <FormControlLabel value="Descending" control={<GreyRadio/>} label="Descending"
                                      onChange={handleRadio}/>
                    <FormControlLabel value="Ascending" control={<GreyRadio/>} label="Ascending"/>
                </RadioGroup>
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
