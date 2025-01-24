const section = document.querySelector('section');

fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UUOFDDm2g05fvlhec5FS6Lbg&key=AIzaSyBxI6gI7IjymJciMnFf_mNyzzzlY6QkY9k')
    .then(res => res.json())
    .then(data => {
        data.items.forEach(video => {
            section.innerHTML += `
                <a target="_blank" href="https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}">
                    <img src="${video.snippet.thumbnails.maxres.url}" alt="${video.snippet.title}">
                    <h4>${video.snippet.title}</h4>
                </a>`;
        });
    });
