import DUMMY_DATA from '../model/dummy-data';
import MeetupList from '../components/meetups';

export default function AllMeetupsPage(){
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={DUMMY_DATA} />
        </section>
    )
}