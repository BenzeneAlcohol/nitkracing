const express = require('express');

const connectDB = require('./config/mongoose');
const dotenv = require('dotenv');

const sponsorRoutes = require('./routes/sponsors');
const authRoutes = require('./routes/auth');
const memberRoutes = require('./routes/members');
const subscriptionRoutes = require('./routes/subscriptions');
const captainRouters = require('./routes/captains');
const achievementRoutes = require('./routes/achievements');
const cors = require('cors');

dotenv.config();

const app = express();

connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());
app.options('*', cors());

app.use('/api/auth', authRoutes);
app.use('/api/sponsors', sponsorRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/captains', captainRouters);
app.use('/api/achievements', achievementRoutes);

app.get('/' , (req, res) => {
    res.send("Hello and welcome to the NITK Racing backend!");
});

const PORT = 1337;
app.listen(process.env.PORT || PORT, (err) => {
    if(err) {
        console.log(`Error: ${err}`);
    }
    console.log(`server is up and running at port ${PORT}`);
});