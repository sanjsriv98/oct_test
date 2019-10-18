import axios from 'axios';

const KEY = 'AIzaSyBuqIPtLqw0rVnYo355c2kEncD4eoijHLg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: "video"

    }
})
