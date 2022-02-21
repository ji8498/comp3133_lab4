const express = require('express')
const port = 8088

const app = express();


const mongoose = require(`mongoose`)
const url = 'mongodb+srv://jong-in:Whddls!23@cluster0.hpxvl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true },
    () => { console.log(`DB Connected --------------------`) }
)

const UserRoutes = require(`./routes/UserRoutes`)

app.use(express.json());
app.use(UserRoutes);





app.listen(8088)
console.log(`server is running at ${port} -----------------------------------`)