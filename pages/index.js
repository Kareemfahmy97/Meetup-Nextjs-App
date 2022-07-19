import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>My meetup</title>
        <meta name="description" content="Browse our meetup website "></meta>
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  //Fetch Data From an API
  const client = await MongoClient.connect(
    "mongodb+srv://kareemfahmyy:0125156522KkKk@cluster0.3itc3tp.mongodb.net/Meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("Meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 2,
  };
}

export default HomePage;
