(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwianMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uICgkKSB7XG5cdCd1c2Ugc2N0cmljdCc7XG5cblx0dmFyIHVzZXJuYW1lID0gJ2Rhbm55Ym9zY2FuJztcblx0JC5mbi5hcGkuc2V0dGluZ3MuYXBpID0ge1xuXHRcdCdnZW9uYW1lcyc6ICdodHRwOi8vYXBpLmdlb25hbWVzLm9yZy9jaGlsZHJlbkpTT04/Z2VvbmFtZUlkPXtnZW9uYW1lSWR9JnVzZXJuYW1lPXt1c2VybmFtZX0nXG5cdH07XG5cdC8qKiBDb250aW5lbnQgKi9cblx0Ly88ZGl2IGNsYXNzPVwiaXRlbVwiIGRhdGEtdmFsdWU9XCJhZlwiPjxpIGNsYXNzPVwiYWYgZmxhZ1wiPjwvaT5BZmdoYW5pc3RhbjwvZGl2PlxuXHQkKCcjY29udGluZW50JykuZHJvcGRvd24oKS5hcGkoe1xuXHRcdGFjdGlvbjogJ2dlb25hbWVzJyxcblx0XHR1cmxEYXRhOiB7XG5cdFx0XHRnZW9uYW1lSWQ6IDYyOTU2MzAsXG5cdFx0XHR1c2VybmFtZTogdXNlcm5hbWUsXG5cdFx0fSxcblx0XHRvbjogJ25vdycsXG5cdFx0c3VjY2Vzc1Rlc3Q6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJyZXNwb25zZTogXCIsIHJlc3BvbnNlKTtcblx0XHRcdGlmKHJlc3BvbnNlLnRvdGFsUmVzdWx0c0NvdW50ID4gMCkge1xuXHRcdFx0XHRyZXNwb25zZS5nZW9uYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChwbGFjZSkge1xuXHRcdFx0XHRcdCQoJyNjb250aW5lbnQnKS5maW5kKCcubWVudScpLmFwcGVuZCgkKCc8ZGl2PjwvZGl2PicsIHtcblx0XHRcdFx0XHRcdCdjbGFzcyc6ICdpdGVtJyxcblx0XHRcdFx0XHRcdCdkYXRhLXZhbHVlJzogcGxhY2UuZ2VvbmFtZUlkLFxuXHRcdFx0XHRcdFx0J3RleHQnOiBwbGFjZS5uYW1lLFxuXHRcdFx0XHRcdH0pKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0fSk7XG5cbn0pKGpRdWVyeSk7Il19
