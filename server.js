var express = require('express')
var server = express()

require('dotenv').config();

// Firebase
// var admin = require('firebase-admin');
// var { serviceAccount } = require('./store-firebase-adminsdk.js');
const { timeSince } = require('./utils.js');

var fs = require('fs');


// Firebase
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// })
// const db = admin.firestore();
// storeInfosCol = db.collection("storeInfos")

// console.log(new Date('2017-12-25'))
const options = { timeZone: 'Europe/London', timeZoneName: 'short' };
// console.log(new Date().getHours() + ':' + new Date().getMinutes())
// return

server.get("/", (req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    // res.send('bonjour')
    // storeInfosCol.where('pubDate', '>', new Date('2023-10-01')).limit(20).get().then(snapshot => {
    
    // fs.writeFile('resultVideos.json', JSON.stringify({
    //     id: 1, square:2
    // }), 'utf8', ()=>{});

    res.send("OK")

    // storeInfosCol.orderBy('pubDate', 'desc').limit(20).get().then(snapshot => {
    //     // console.log(snapshot.docs.map(doc => doc.data()))
    //     // snapshot.docs.forEach(doc => {
    //     //     res.send(doc.data())
    //     // })
    //     res.send(snapshot.docs.map(doc => {

    //         let pubDate = new Date(doc.data().pubDate._seconds * 1000)
    //         return {...doc.data(),pubDate: timeSince(pubDate)}
    //     }))

    //     // res.send(snapshot.docs.map(doc => ({...doc.data(),pubDate: new Date(doc.data().pubDate._seconds * 1000)})   ))
    //     // res.send(snapshot.docs.map(doc => new Date(doc.data().pubDate._seconds * 1000).toLocaleDateString("en-GB", options)))
    //     // res.send(snapshot.docs.map(doc => new Date(doc.data().pubDate._seconds * 1000).toLocaleTimeString("en-GB", options)))
    // })


    // res.send(new Date("Thu, 20 Jul 2023 22:15:05 +0000") > new Date("Wed, 19 Jul 2023 12:23:15 +0000"))
    // alert('Hi')

})


server.get("/result", (req, res) => {

    const resultVideos = require("./resultVideos.json");


    res.setHeader("Access-Control-Allow-Origin", "*");

    res.send(resultVideos.filter((v, i) => i < 20))


})

server.get("/videos", (req, res) => {

    const resultVideos = require("./resultVideos.json");


    res.setHeader("Access-Control-Allow-Origin", "*");

    res.send(resultVideos)


})

server.get("/channels", (req, res) => {

    const channels = require("./channels.json");


    res.setHeader("Access-Control-Allow-Origin", "*");

    res.send(channels)


})

var bodyParser = require('body-parser')
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json())

server.post("/videos", (req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    console.log('YES')
    console.log(req.body.length)
    fs.writeFile('resultVideos.json', JSON.stringify(req.body), 'utf8', ()=>{});
    res.send("Good")

})

server.post("/channels", (req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    console.log('YES')
    console.log(req.body.length)
    fs.writeFile('channels.json', JSON.stringify(req.body), 'utf8', ()=>{});
    res.send("Good")

})

server.post("/news", (req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    console.log('YES')
    console.log(req.body.length)
    fs.writeFile('news.json', JSON.stringify(req.body), 'utf8', ()=>{});
    res.send("Good")

})

server.listen(3001)
