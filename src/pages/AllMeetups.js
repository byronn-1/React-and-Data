/* 
Transform data from object into an array.... using fetch useEffect and useState.
This works well with Firebase 
*/


import { useEffect, useState } from 'react';
import { json } from 'react-router-dom';
import MeetUpList from '../components/meetups/MeetupList'
import { DUMMY_DATA } from '../model/dummy-data'

const API_ENDPOINT = process.env.REACT_APP_VARIABLE_FIREBASE_ENDPOINT;

export default function AllMeetupsPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        fetch(API_ENDPOINT)
            .then((response) => {
            return response.json();
            })
            .then(data => {
                const meetups = [];

                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    };

                    meetups.push(meetup);
                }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);
    

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetUpList meetups={DUMMY_DATA} />
        </section>
    )
}