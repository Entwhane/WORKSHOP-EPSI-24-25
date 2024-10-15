'use client'


import { Button, Typography } from "@mui/material";
import "./QuizzDetails.css"


export default function QuizzDetails(props) {
    const { quizz } = props

    return (
        <div className="column" style={{ borderRadius: 5, borderStyle: "solid", paddingInline: 50, paddingBlock: 30 }}>
            <Typography className="quizzQuestionTitle">
                {quizz.title}
            </Typography>
            <div className="column">
                {quizz.answers.map((answer) => (
                    <Button key={answer.id} className="quizzQuestionAnswer">
                        <Typography className="quizzQuestionAnswerText">
                            {answer.title}
                        </Typography>
                    </Button>
                ))}
            </div>
        </div>
    );
}
