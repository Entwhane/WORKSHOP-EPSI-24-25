import React, {useEffect, useState} from 'react';
import './ProfileCard.css'; // On va styliser ce composant avec un fichier CSS

const ProfileCard = ({ imageUrl, name, job }) => {

    const defaultImageUrl = '/images/default.png';

    const [imageSrc, setImageSrc] = useState(imageUrl);

    useEffect(() => {
        // Ajout du cache-buster uniquement côté client après le rendu initial
        const preventCache = (url) => `${url}?${new Date().getTime()}`;
        setImageSrc(preventCache(imageUrl));
    }, [imageUrl]);

    return (
        <div className="profile-card">
            <img
                src={imageSrc}
                alt={`${name}'s profile`}
                className="profile-image"
                onError={(e) => { e.target.onerror = null; e.target.src = defaultImageUrl; }}
            />
            <h2 className="profile-name">{name}</h2>
            <p className="profile-job">{job}</p>
        </div>
    );
};

export default ProfileCard;
