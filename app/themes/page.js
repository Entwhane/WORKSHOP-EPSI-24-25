import React from 'react';

import "./page.css";
import ThemeItem from "../../components/ThemeItem/ThemeItem";


const blueGradient = ['0081A7', 'FDFCDC'];
const redGradient = ['F07167', 'FDFCDC'];

const items = [
    {
        id: 1,
        theme_id: 1,
        theme_title: "Cyber harcèlement",
        format: "Quizz",
        time: "20 questions",
        length: "15m",
        color: blueGradient,
    },
    {
        id: 2,
        theme_id: 1,
        theme_title: "Cyber harcèlement",
        format: "Aventure",
        time: "100 questions",
        length: "40m",
        color: redGradient,
    },
    {
        id: 3,
        theme_id: 1,
        theme_title: "Cyber harcèlement",
        format: "Quizz",
        time: "20 questions",
        length: "15m",
        color: blueGradient,
    },
    {
        id: 4,
        theme_id: 1,
        theme_title: "Cyber harcèlement",
        format: "Quizz",
        time: "20 questions",
        length: "15m",
        color: blueGradient,
    },
    {
        id: 5,
        theme_id: 1,
        theme_title: "Cyber harcèlement",
        format: "Quizz",
        time: "20 questions",
        length: "15m",
        color: blueGradient,
    },
    {
        id: 6,
        theme_id: 1,
        theme_title: "Cyber harcèlement",
        format: "Quizz",
        time: "20 questions",
        length: "15m",
        color: blueGradient,
    },
]

const Page = () => {
    return (
        <div className={"body"}>
            <div className={"title"}>Choississez un thème sur lequel vous former</div>
            <div className={"theme--wrapper"}>
                {items.map((item, index) => (
                    <ThemeItem  key={index} item={item} />
                ))}
            </div>
            <div className={"plus--btn"}>En savoir +</div>
        </div>
)
    ;
};

export default Page;