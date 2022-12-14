import MeetupItem from "./MeetupItem";
import classes from '../layout/MeetupList.module.css';

export default function MeetUpList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
              title={meetup.title}
              address={meetup.address}
              description={meetup.description}
        />
      ))}
    </ul>
  );
}
