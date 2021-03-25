import React from 'react';
import {Grid, makeStyles ,TextField , Typography, Select, FormControl, InputLabel, MenuItem, Radio, FormLabel, RadioGroup, FormControlLabel} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";
import {Link} from "react-router-dom";


const ruleMargin = 15;

const useStyle = makeStyles((theme) => ({
    text:{
        color:theme.palette.text.primary
    },
    box:{
        backgroundColor:"#2A2C30"
    }
}));



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
                <Grid container direction={"row"} justify={"space-between"}>
                    <Grid item>
                        <Typography variant={"h3"}>
                                Genres
                        </Typography>
                    </Grid>
                    <Grid item>
                        <ExpandMore/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction={"row"} justify={"space-between"}>
                    <Grid item>
                        <Typography variant={"h3"}>
                                Title Type
                        </Typography>
                    </Grid>
                    <Grid item>
                        <ExpandMore/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction={"column"} spacing={2}>
                    <Grid item>
                        <Grid container direction={"row"} justify={"space-between"}>
                            <Grid item>
                                <Typography variant={"h3"}>
                                        Votes
                                </Typography>
                            </Grid>
                            <Grid item>
                                <ExpandMore/>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction={"row"} justify={"space-between"}>
                            <Grid item xs={5}>
                                <TextField
                                    id="Vote-min"
                                    label="Min. Votes"
                                    type="password"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <TextField
                                    id="Vote-min"
                                    label="Max. Votes"
                                    type="password"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction={"column"} spacing={2}>
                    <Grid item>
                        <Grid container direction={"row"} justify={"space-between"}>
                            <Grid item>
                                <Typography variant={"h3"}>
                                        Time Period
                                </Typography>
                            </Grid>
                            <Grid item>
                                <ExpandMore/>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item>
                                <Grid container direction={"row"} justify={"space-between"}>
                                    <Grid item xs={5}>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-outlined-label">From Year</InputLabel>
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
                                    <Grid item xs={5}>
                                    <FormControl variant="outlined" className={classes.formControl}>
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
                            <Grid item>
                                <Grid container direction={"row"} justify={"space-between"}>
                                    <Grid item xs={5}>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-outlined-label">From Month</InputLabel>
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
                                    <Grid item xs={5}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-outlined-label">To Month</InputLabel>
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
                            <Grid item>
                                <Grid container direction={"row"} justify={"space-between"}>
                                    <Grid item xs={5}>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-outlined-label">From Day</InputLabel>
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
                                    <Grid item xs={5}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-outlined-label">To Day</InputLabel>
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
                    </Grid>

                </Grid>
            </Grid>

            
            <Grid item>
                <Grid container direction={"column"} spacing={2}>
                    <Grid item>
                        <Grid container direction={"row"} justify={"space-between"}>
                            <Grid item>
                                <Typography variant={"h3"}>
                                        Region
                                </Typography>
                            </Grid>
                            <Grid item>
                                <ExpandMore/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>                   
                        <RadioGroup aria-label="Region" name="Radio1" alue={value} onChange={handleChange}>
                            <FormControlLabel value="International" control={<Radio />} label="International" onChange={handleRadio}/>
                            <FormControlLabel value="English" control={<Radio />} label="English" />
                            <FormControlLabel value="Indian" control={<Radio />} label="Indian"/>
                        </RadioGroup>                        
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}