import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());




function run(){
    console.log('I`m run here!');
    setInterval(() => {
        console.log('I`m run here!');
    }, 5000);
}
run();

app.listen(5001);