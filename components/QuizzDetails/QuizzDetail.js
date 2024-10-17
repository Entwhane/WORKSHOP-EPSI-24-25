import React, { useState } from 'react';
import { Button, Typography } from "@mui/material";
import "./QuizzDetails.css"

export default function QuizzDetails(props) {
    const { quizz, setScore, setQuestionsAnswered } = props;
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        if (answer.is_correct) {
            setScore(prevScore => prevScore + 1);
        }
        setQuestionsAnswered(prevScore => prevScore + 1)
    };

    return (
        <div className="col" style={{ borderRadius: 5, borderStyle: "solid", paddingInline: 50, paddingBlock: 30 }}>
            <Typography className="quizzQuestionTitle">
                {quizz.question_text}
            </Typography>
            <div className="col">
                {quizz.responses.map((answer) => (
                    <Button
                        key={answer.id}
                        className="quizzQuestionAnswer"
                        onClick={() => handleAnswerClick(answer)}
                        disabled={selectedAnswer !== null} // Désactiver si une réponse a été sélectionnée
                        style={{
                            background: selectedAnswer === answer ? (answer.is_correct ? 'linear-gradient(90deg, #0081A7 0%, #00BF8F 100%)' : 'linear-gradient(90deg, #F07167 0%, #FDFCDC 100%)') : '',
                            borderWidth: selectedAnswer === answer && 0,
                        }}
                    >
                        <Typography
                            className="quizzQuestionAnswerText"
                            style={{
                                color: selectedAnswer === answer && "#FFFFFF",
                                fontWeight: selectedAnswer === answer && "bold"
                            }}
                        >
                            {answer.title}
                        </Typography>
                    </Button>
                ))}
            </div>
        </div>
    );
}
