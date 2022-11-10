import DUMMY_DATA from '../model/dummy-data'

export default function AllMeetupsPage(){
    return (
        <section>
            <h1>All Meetups</h1>
            <ul>
                {DUMMY_DATA.map((meetup) => {
                    return <li key={meetup.id}>{meetup.title}</li>
                })}
            </ul>
        </section>
    )
}