import dotenv from 'dotenv';
import connectDB from './db/index.js';

// Load environment variables
dotenv.config({ path: './env' });

connectDB();
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Connected to ${process.env.PORT}`);

    })
})
    .catch((err) => {
        console.log(err);

    })

// Uncomment and add your Express setup here if needed
/*
import express from 'express';
const app = express();

(async () => {
    try {
        await mongoose.connect(`${ process.env.MONGODB_URL }/${DB_NAME}`);
    app.on('error', (error) => {
        console.log('Error connecting', error);
        throw error;
    });

    app.listen(process.env.PORT, () => {
        console.log('App listening on port ' + process.env.PORT);
    });

} catch (err) {
    console.error('ERROR:', err);
    throw err;
}
}) ();
*/
