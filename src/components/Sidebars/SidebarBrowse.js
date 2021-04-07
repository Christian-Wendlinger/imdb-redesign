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
    withStyles,
    NativeSelect
    
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
        '&:hover fieldset': {
          borderColor: "#5B5F63",
        },
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
        '&:hover fieldset': {
          borderColor: "#5B5F63",
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
                    itemsRow3={Genres3}/>
            
                <SidebarPopover title={"Title Type"} 
                    itemsRow1={TT1}
                    itemsRow2={TT2}
                    itemsRow3={TT3}/>
            


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
                        <RadioGroup aria-label="Region" name="Radio1">
                                <FormControlLabel value="International" control={<GreyRadio/>} label="International"/>
                                <FormControlLabel value="English" control={<GreyRadio/>} label="English"/>
                                <FormControlLabel value="Indian" control={<GreyRadio/>} label="Indian"/>
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
                    <CssSelect
                        MenuProps={{ classes: { paper: classes.select } }}
                        className={classes.select}
                        labelId="YearFrom"
                        id="YearFrom"
                        value={age}
                        onChange={handleChange}
                        label="Age"
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
                        <RadioGroup aria-label="Sort" name="Radio2">
                                <FormControlLabel value="Descending" control={<GreyRadio/>} label="Descending"/>
                                <FormControlLabel value="Ascending" control={<GreyRadio/>} label="Ascending"/>
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
