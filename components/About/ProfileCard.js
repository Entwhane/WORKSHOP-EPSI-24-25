import React, {useEffect, useState} from 'react';
import './ProfileCard.css'; // On va styliser ce composant avec un fichier CSS

const ProfileCard = ({ imageUrl, name, job }) => {

    const defaultImageUrl = '/images/default.png';


    return (
        <div className="profile-card">
            <h2 className="profile-name">{name}</h2>
            <p className="profile-job">{job}</p>
        </div>
    );
};

export default ProfileCard;
