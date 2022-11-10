import MeetUpList from '../components/meetups/MeetupList'
import { DUMMY_DATA } from '../model/dummy-data'

export default function AllMeetupsPage(){
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetUpList meetups={DUMMY_DATA} />
        </section>
    )
}