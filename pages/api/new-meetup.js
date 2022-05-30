import { MongoClient } from "mongodb";



async function  handler (req, res) {
    //POST api/new-meetup
    if(req.method === 'POST'){
        const data = req.body;

        const client = await MongoClient.connect(
          "mongodb+srv://kareemfahmyy:0125156522KkKk@cluster0.3itc3tp.mongodb.net/Meetups?retryWrites=true&w=majority"
        );
        const db = client.db();
        const meetupsCollection = db.collection('Meetups');

        const result = await meetupsCollection.insertOne(data)
        
        console.log(result);

        client.close();

        res.status(201).json({
            message: 'Meetup Inserted!'
        });

    }
}


export default handler ;
