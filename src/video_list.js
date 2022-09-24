https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR&maxResults=50&key=AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA
const {google} = require('googleapis');
//https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR&maxResults=50&key=AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA
const service = google.youtube('v3');
service.videos.list({
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    part : 'snippet,statistics, id.videoId',
    q:'asmr',
    maxResults : '50',
    id : 't-0WD34AytM',
    fields : 'items(snippet(title,description,channelId, thumbnail,publishedAt),statistics(viewCount,likeCount))',

},function(err, response){
    if(err){
        console.log('The API returned an error : ' + err);
        return;
    }
    const video = response.data.items;
    if(video.length === 0){
        console.log('검색된 동영상이 없습니다');
    } else {
        console.log(JSON.stringify(response.data.items[0],null,4));
    }
})