'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation'
import "./page.css";
import ProfileFormation from "../../components/ProfileFormation/ProfileFormation";
import SchoolIcon from '@mui/icons-material/School';
import EditIcon from '@mui/icons-material/Edit';

const Page = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    // Fetch user here with useeffet hook

    const user = {
        id: id,
        name:"Pierre",
        picture: "/images/default_user.jpg",
        formations: [
            {name: "Cyberharcélement", progress: 0.5, link: "/formation/1"},
            {name: "Vol d'identité", progress: 0.3, link: "/formation/2"},
            {name: "Réseaux sociaux", progress: 1, link: "/formation/3"},
        ]
    }

    return (
        <div className={"body__profile"}>
            <div className={"profile__header"}>
                <div className={"profile__background"}></div>
                <div className={"profile__bottom"}>
                    <div className={"profile__avatar"} style={{ background: `url(${user.picture})`, borderRadius: 500,backgroundSize: "contain", width:80, height:80}}></div>
                    <div className={"profile__infos"}>
                        <div className={"profile__username"}>{user.name}</div>
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
                <div className={"profile__progress__formations"}>
                    {user.formations.map((item, index) => (
                        <ProfileFormation item={item} index={index} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;

