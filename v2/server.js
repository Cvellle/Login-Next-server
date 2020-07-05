const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./server/graphql/schema/schema.js');

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

const MONGO_URI = "mongodb://Cvele:cveledb1@ds129914.mlab.com:29914/posts";
if (!MONGO_URI) {
    throw new Error("You must provide a MongoLab URI");
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(process.env.PORT || PORT, function () {
    console.log(`??  ==> API Server now listening on PORT ${PORT}!`);
});

