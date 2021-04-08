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
    Checkbox,
    withStyles,
    TextField
} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";
import SidebarPopover from "./SidebarPopover";

const ruleMargin = 15;

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: "#F5C518",
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: "#232427",
        },
        //'&:hover fieldset': {
        //  borderColor: "#5B5F63",
        //},
      },
    },
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
                                <FormControlLabel control={<GreyCheckbox checked={checked} onChange={handleChecked}/>} label={"All"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"Actor"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"Producer"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"Writer"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"Director"}/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<GreyCheckbox color="default"/>} label={"Soundtrack"}/>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>

            <Grid item style={{marginBottom: 12}}>
            <Accordion className={classes.accordion} m = {0} boxShadow={20} className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordion}
                        expandIcon={<ExpandMore className={classes.expand}/>}
                        id="panel1a-header">
                        <Typography variant={"h3"}>Birth Date</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion}>
                        <Grid container direction={"row"} justify={"space-between"} spacing={2}>
                            <Grid item xs={6}>
                                <CssTextField
                                    id="From Date"
                                    label="From Date"                                 
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CssTextField
                                    id="To Date"
                                    label="To Date"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>

            
            <SidebarPopover title={"Zodiac Sign"} 
                itemsRow1={ZS1}
                itemsRow2={ZS2}
                itemsRow3={ZS3}/>
            

            <Grid item>
                <Typography variant={"h2"}>
                    
                </Typography>
            </Grid>

            <Grid item style={{marginTop: -12}}>
                <Typography variant={"h2"}>
                    Sort by
                </Typography>
            </Grid>

            <Grid item>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="SortBy">Sort</InputLabel>
                    <CssSelect
                        defaultValue={"Popularity"}
                        MenuProps={{ classes: { paper: classes.select } }}
                        className={classes.select}
                        labelId="YearFrom"
                        id="YearFrom"
                        onChange={handleChange}
                        label="Sort"
                    >
                        <MenuItem value={"Popularity"} >Popularity</MenuItem>
                        <MenuItem value={"Alphabetic"} >Alphabetic</MenuItem>
                        <MenuItem value={"Number of Votes"} >Birth Date</MenuItem>
                        <MenuItem value={"Release Date"} >Death Date</MenuItem>
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
                <GreyButton variant="outlined">
                    Apply
                </GreyButton>
            </Grid>

        </Grid>

    );
}