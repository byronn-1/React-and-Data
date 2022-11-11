import NewMeetupForm from "../components/meetups/NewMeetupForm";

const API_ENDPOINT = process.env.REACT_APP_VARIABLE_FIREBASE_ENDPOINT;

export default function NewMeetupsPage() {
    
    function addMeetupHandler(meetupData) { 
        fetch(API_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(meetupData),
            hearders: {
                'Content-Type': 'application/json'
            }
        });
    }
    
    return (
        <section >
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}