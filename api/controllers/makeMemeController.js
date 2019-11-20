'use strict';
const axios = require('axios');


exports.makeMeme = async function (req, res) {
    // Making the meme code
    let meme = 'placeholder';
    const imgData = await axios.get('https://api.imgflip.com/get_memes').then(res => { const memesArray = res.data.data.memes; return memesArray[Math.floor(Math.random() * memesArray.length)] }).catch(err => console.error(err))
    console.log(imgData)

    res.status(200).json({ image: imgData });

};
