import {Grid} from "@material-ui/core";
import HomepageTabItem from "../Homepage/HomepageTabItem";
import {useState} from "react";

const values = [
    {
        id: 0,
        name: "ACTRESS",
        active: true
    },
    {
        id: 1,
        name: "SOUNDTRACK",
        active: false
    },
    {
        id: 2,
        name: "PRODUCER",
        active: false
    },
    {
        id: 3,
        name: "SELF",
        active: false
    }
];


export default function KnownForTabs({shuffle}) {
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

