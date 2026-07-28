const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb://mariaprisca1627_db_user:ibfTBrFshS6cSwsd@ac-rtlwe2t-shard-00-00.xinbjoz.mongodb.net:27017,ac-rtlwe2t-shard-00-01.xinbjoz.mongodb.net:27017,ac-rtlwe2t-shard-00-02.xinbjoz.mongodb.net:27017/?ssl=true&replicaSet=atlas-konn2f-shard-0&authSource=admin&appName=Cluster0"
)
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.log(err));

const itemRoutes = require('./routes/itemRoutes');

app.use('/api/items', itemRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
