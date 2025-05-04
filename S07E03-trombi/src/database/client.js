import pg from 'pg';

const client = new pg.Client(process.env.PG_URL);

/client.connect(err => {
    if(err) {
        console.log('callback', err.message);
        client.end();
    }
});


export { client };
