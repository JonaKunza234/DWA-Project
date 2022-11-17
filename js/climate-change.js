const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://environment-news-live.p.rapidapi.com/news",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "e06fd8d013msh2d25cf021625650p176335jsn0e50023972e2",
		"X-RapidAPI-Host": "environment-news-live.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	let set = new Set( response.map( JSON.stringify ) )
	let dataArr = Array.from( set ).map( JSON.parse );

	$.each(dataArr, (i, item) => {
        let col = 
		`<div class="col-lg-4 col-md-6 col-sm-12">
		<div class="card m-2">
		  <div class="card-body">
			<h5 class="card-title">${item.title}</h5>
			<a href="${item.url}" target="_blank" class="btn btn-primary">Go somewhere</a>
		  </div>
		</div>
	  </div>`

		if(i<12)
        	$('#news').append(col);
		else
			return;	
    });
});