import {Typography} from "@material-ui/core";
import React from "react";

export default function ShowMore({variant}) {
    return (
        <Typography variant={variant} color={"primary"} style={{display: "inline", cursor: "pointer"}}>More
            »</Typography>
    );
}
