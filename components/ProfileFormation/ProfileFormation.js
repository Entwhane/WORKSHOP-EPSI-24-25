import React from 'react';
import "./ProfileFormation.css";
import Link from 'next/link';
import { lowerCase } from 'lodash';

const ProfileFormation = ({item, index}) => {

    const progress = item.progress * 100;

    return (
        <div className={"formation"} key={index}>
            <div className={"formation__title"}>{item.name}</div>
            <div className={"formation__progress"}>
                {progress === 100 ? (
                    <div style={{borderRadius: 5, backgroundColor: "green", width: `${progress-0.3}%`, height: 20, zIndex: 9999}}></div>
                ) : (
                    <div style={{borderRadius: 5, backgroundColor: "darkred", width: `${progress-0.3}%`, height: 20, zIndex: 9999}}></div>
                )}
            </div>
            <div className={"formation__cta"}>
                <Link href={item.link}>
                    <div >Continuer</div>
                </Link>
            </div>
        </div>
    );
};

export default ProfileFormation;