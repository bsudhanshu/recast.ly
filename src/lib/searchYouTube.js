var searchYouTube = (options, callback) => {
  var youtubeUrl = "https://www.googleapis.com/youtube/v3/search";

  $.ajax({
  	url: youtubeUrl,
  	type: 'GET',
  	data: {
  		key: options.key,
  		  	maxResults: options.max,
	  		  q: options.query,
	  			part: 'snippet',
	  		  type: 'video'},
  	videoEmbeddable: true,
  	contentType: 'application/json',
  	// videoType: 'any',
  	success: (data) => {
  		console.log("data received");
  		console.log(data.items);
  		callback(data.items);
  	},
  	error: () => {console.log("fail")}
  })
};

window.searchYouTube = searchYouTube;
