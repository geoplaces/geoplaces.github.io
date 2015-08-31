(function ($) {
	'use sctrict';

	var username = 'dannyboscan';
	$.fn.api.settings.api = {
		'geonames': 'http://api.geonames.org/childrenJSON?geonameId={geonameId}&username={username}'
	};
	/** Continent */
	//<div class="item" data-value="af"><i class="af flag"></i>Afghanistan</div>
	$('#continent').dropdown().api({
		action: 'geonames',
		urlData: {
			geonameId: 6295630,
			username: username,
		},
		on: 'now',
		successTest: function (response) {
			console.log("response: ", response);
			if(response.totalResultsCount > 0) {
				response.geonames.forEach(function (place) {
					$('#continent').find('.menu').append($('<div></div>', {
						'class': 'item',
						'data-value': place.geonameId,
						'text': place.name,
					}));
				});
			}
		},
	});

})(jQuery);