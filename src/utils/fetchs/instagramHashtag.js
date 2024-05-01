export async function instagramHashtag({ hashtag }) {
    const url = `https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/media_by_tag?tag=${hashtag}&feed_type=recent&corsEnabled=true`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7c172c9e0dmsh14fc5ce0ce28e95p1cb1eajsn0e90cc3c186f',
            'X-RapidAPI-Host': 'instagram-bulk-profile-scrapper.p.rapidapi.com'
        }
    };
    if (hashtag) {
        return fetch(url, options)
            .then(resp => resp.text())
            .then(data => data)
            .catch(err => console.log(err))
    }

}