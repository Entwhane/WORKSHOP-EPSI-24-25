'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation'
import "./page.css";
import ProfileFormation from "../../components/ProfileFormation/ProfileFormation";
import SchoolIcon from '@mui/icons-material/School';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react';

const ProfileComponent = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className={"body__profile"}>
            <div className={"profile__header"}>
                <div className={"profile__background"}></div>
                <div className={"profile__bottom"}>
                    <div className={"profile__avatar"} style={{ background: `grey`, borderRadius: 500,backgroundSize: "contain", width:80, height:80}}></div>
                    <div className={"profile__infos"}>
                        <div className={"profile__username"}>{user.user_name}</div>
                        <div className={"profile__level"}>Enseignement supérieur</div>
                    </div>
                </div>
            </div>

            <div className={"profile__stats"}>
                <div className={"profile__stat"}>
                    <SchoolIcon className={"profile__stat__value"}/>
                    <div className={"profile__stat__title"}>EPSI</div>
                </div>
                <div className={"profile__stat"}>
                    <div className={"profile__stat__value"}>58%</div>
                    <div className={"profile__stat__title"}>Effectués</div>
                </div>
                <div className={"profile__stat"} style={{ opacity: 0.3}}>
                    <EditIcon className={"profile__stat__value"}/>
                    <div className={"profile__stat__title"}>Modifier<br/>les informations</div>
                </div>
            </div>

            <div className={"profile__progress"}>
                <div className={"profile__progress__title"}>Formations en cours</div>
                {/*
                <div className={"profile__progress__formations"}>
                    {user.formations.map((item, index) => (
                        <ProfileFormation item={item} index={index} key={index}/>
                    ))}
                </div>
                */ }
            </div>
        </div>
    );
};

const ProfilePage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProfileComponent />
        </Suspense>
    );
};

export default ProfilePage;

