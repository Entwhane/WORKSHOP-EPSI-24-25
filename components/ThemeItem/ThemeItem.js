import React from 'react';

import "./ThemeItem.css";
import {borderColor} from "@mui/system";

const ThemeItem = ({item, index}) => {
    return (
        <div className={"item"} key={index}>
            <div className={"itemTop"}>
                <div className={"title"}>{item.title}</div>
                <div className={"length"}>{item.length}</div>
            </div>
            <div className={"itemBottom"}>
                <div className={"format"}>{item.format}<br/>{item.time}</div>
                <div className={"btn"}>Commencer</div>

            </div>
        </div>
    );
};

export default ThemeItem;