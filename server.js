var express = require('express')
var server = express()

require('dotenv').config();

var admin = require('firebase-admin');
var {serviceAccount} = require('./store-firebase-adminsdk.js')


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();

storeInfosCol = db.collection("storeInfos")

server.get("/", (req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    // res.send('bonjour')

    storeInfosCol.get().then(snapshot => {
        // console.log(snapshot.docs.map(doc => doc.data()))
        // snapshot.docs.forEach(doc => {
        //     res.send(doc.data())
        // })

        res.send(snapshot.docs.map(doc => doc.data()))
    })

    
    // res.send(new Date("Thu, 20 Jul 2023 22:15:05 +0000") > new Date("Wed, 19 Jul 2023 12:23:15 +0000"))
    // alert('Hi')

})

server.listen(3001)
