import React from 'react';
import "./ThemeItem.css";
import Link from 'next/link';
import { lowerCase } from 'lodash';

const ThemeItem = ({ item, index }) => {
    return (
        <div
            className={"item"}
            style={{
                border: `2px solid ${item.questionCount > 10 ? "#F07167" : "#0081A7"}`
            }}
            key={index}
        >
            <div className={"itemTop"}>
                <div className={"title"}>{item.game_title}</div>
                <div
                    className={"length"}
                    style={{
                        background: item.questionCount > 10 ? 'linear-gradient(90deg, #F07167 0%, #FDFCDC 100%)' : 'linear-gradient(90deg, #0081A7 0%, #00BF8F 100%)',
                        border: `2px solid ${item.questionCount > 10 ? "#F07167" : "#0081A7"}`
                    }}
                >{item.questionCount || "IA"}</div>
            </div>
            <div
                className={"itemBottom"}

            >
                <div className={"format"}>{item.game_type}<br />{item.time}</div>
                <Link
                    className='btn'
                    href={`/themes/${item.id}/${lowerCase(item.game_type)}`}
                    style={{
                        background: item.questionCount > 10 ? 'linear-gradient(90deg, #F07167 0%, #FDFCDC 100%)' : 'linear-gradient(90deg, #0081A7 0%, #00BF8F 100%)',
                    }}
                >
                    Commencer
                </Link>
            </div>
        </div>
    );
};

export default ThemeItem;