import React from 'react';
import "./ThemeItem.css";
import Link from 'next/link';
import { lowerCase } from 'lodash';

const ThemeItem = ({item, index}) => {
    
    return (
        <div className={"item"} key={index}>
            <div className={"itemTop"}>
                <div className={"title"}>{item.theme_title}</div>
                <div className={"length"}>{item.length}</div>
            </div>
            <div className={"itemBottom"}>
                <div className={"format"}>{item.format}<br/>{item.time}</div>
                <Link className='btn' href={`/themes/${item.theme_id}/${lowerCase(item.format)}`}>Commencer</Link>
            </div>
        </div>
    );
};

export default ThemeItem;