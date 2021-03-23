import {Grid} from "@material-ui/core";
import HomepageTabItem from "./HomepageTabItem";
import {useState} from "react";

const values = [
    {
        id: 0,
        name: "PRIME VIDEO",
        active: true
    },
    {
        id: 1,
        name: "FILMTASTIC",
        active: false
    },
    {
        id: 2,
        name: "MGM",
        active: false
    },
    {
        id: 3,
        name: "STARZPLAY",
        active: false
    },
    {
        id: 4,
        name: "MUBI",
        active: false
    },
    {
        id: 5,
        name: "BBC PLAYER",
        active: false
    },
    {
        id: 6,
        name: "SONY",
        active: false
    }
];


export default function HomeTabs({shuffle}) {
    const [data, setData] = useState(values);

    return (
        <div style={{marginBottom: 15}}>
            <Grid container spacing={3}>
                {data.map((tab =>
                    <HomepageTabItem
                        name={tab.name}
                        active={tab.active}
                        onClick={() => {
                            setData(data.map(item => item.id === tab.id ? {
                                ...item,
                                active: true
                            } : {...item, active: false}))
                            shuffle()
                        }}
                    />))}
            </Grid>
        </div>
    );
}

