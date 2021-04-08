import React from 'react';
import "../../main_style.css";
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
    withStyles
    
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
        "& ul": {
            backgroundColor: "#232427",
        },
    },

}));

const c1 = {text: "All"};


const Genres1 = [
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


const c2 = {text: "All"};

const TT1 = [
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

    const [value1, setValue1] = React.useState('International');
    const [value2, setValue2] = React.useState('Descending');

    const handleRadio1 = (event) => {
      setValue1(event.target.value);
    };

    const handleRadio2 = (event) => {
        setValue2(event.target.value);
      };


    return (
        <Grid container direction={"column"} spacing={3}>
            <Grid item>
                <Typography variant={"h2"}>
                    Filter by
                </Typography>
            </Grid>
                <SidebarPopover title={"Genres"} 
                    itemsRow1={Genres1}
                    itemsRow2={Genres2}
                    itemsRow3={Genres3}
                    first={c1}/>
            
                <SidebarPopover title={"Title Type"} 
                    itemsRow1={TT1}
                    itemsRow2={TT2}
                    itemsRow3={TT3}
                    first={c2}/>
            


            <Grid item  style={{marginTop: -5}}>
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
                                    id="Vote-min"
                                    label="Min. Votes"                                 
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CssTextField
                                    className={classes.select}
                                    id="Vote-max"
                                    label="Max. Votes"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
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


            <Grid item>
                <Accordion className={classes.accordion} >
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
                    Sort by
                </Typography>
            </Grid>

            <Grid item>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="YearFrom">Sort</InputLabel>
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
                        <MenuItem value={"Rating"} >Rating</MenuItem>
                        <MenuItem value={"Box Office"} >Box Office</MenuItem>
                        <MenuItem value={"Runtime"} >Runtime</MenuItem>
                        <MenuItem value={"Alphabetic"} >Alphabetic</MenuItem>
                        <MenuItem value={"Number of Votes"} >Number of Votes</MenuItem>
                        <MenuItem value={"Release Date"} >Release Date</MenuItem>
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

            <Grid item>
                <GreyButton variant="outlined">
                    Apply
                </GreyButton>
            </Grid>

        </Grid>

    );
}
