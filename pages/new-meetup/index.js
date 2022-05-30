import { useRouter } from 'next/router';
import { Fragment } from 'react/cjs/react.production.min';
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Head from "next/head";

function NewMeetpPage(){
    const router = useRouter();

    async function addMeetupHandler (enteredMeetupData) {
        const response = await fetch('/api/new-meetup',{
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': "application/json"
            }
        });

        const data = await response.json();

        console.log(data);

        router.push('/');
    };

    return (
      <Fragment>
        <Head>
          <title>Add New Meetup</title>
          <meta
            name="description"
            content="Add your own meetup to our amazing website!"
          ></meta>
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </Fragment>
    );
}

export default NewMeetpPage;