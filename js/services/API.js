(function() {
    'use strict';

    angular
        .module('routing')
        .factory('API', function($http) {

            let data = [{
                    'id': 1,
                    'name': '2001: A Space Odyssey',
                    'img': '2001.jpg',
                    'genre': 'scifi'
                },
                {
                    'id': 2,
                    'name': 'North by Northwest',
                    'img': 'northwest.jpg',
                    'genre': 'mystery'
                },
                {
                    'id': 3,
                    'name': 'Paul Blart: Mall Cop',
                    'img': 'paulblart.jpg',
                    'genre': 'comedy'
                },
                {
                    'id': 4,
                    'name': 'The Usual Suspects',
                    'img': 'suspects.jpg',
                    'genre': 'mystery'
                },
                {
                    'id': 5,
                    'name': 'The Shining',
                    'img': 'theshining.jpg',
                    'genre': 'horror'
                },
                {
                    'id': 6,
                    'name': 'Vertigo',
                    'img': 'vertigo.jpg',
                    'genre': 'mystery'
                },
                {
                    'id': 7,
                    'name': 'Young Frankenstein',
                    'img': 'youngfrank.jpg',
                    'genre': 'comedy'
                },
                {
                    'id': 8,
                    'name': 'Zodiac',
                    'img': 'zodiac.jpg',
                    'genre': 'mystery'
                },
                {
                    'id': 9,
                    'name': 'Alien',
                    'img': 'alien.jpg',
                    'genre': 'horror'
                },
                {
                    'id': 10,
                    'name': 'Blade Runner',
                    'img': 'bladerunner.jpg',
                    'genre': 'scifi'
                },
                {
                    'id': 11,
                    'name': 'Blazing Saddles',
                    'img': 'blazingsaddles.jpg',
                    'genre': 'comedy'
                },
                {
                    'id': 12,
                    'name': 'The Exorcist',
                    'img': 'exorcist.jpg',
                    'genre': 'horror'
                },
                {
                    'id': 13,
                    'name': 'Friday the 13th',
                    'img': 'friday13.jpg',
                    'genre': 'horror'
                },
                {
                    'id': 14,
                    'name': 'The Matrix',
                    'img': 'matrix.jpg',
                    'genre': 'scifi'
                },
                {
                    'id': 15,
                    'name': 'Monty Python and the Holy Grail',
                    'img': 'MontyPython.jpg',
                    'genre': 'comedy'
                },
                {
                    'id': 16,
                    'name': 'A Nightmare on Elm Street',
                    'img': 'nightmare.jpg',
                    'genre': 'horror'
                }
            ]


            return {
                getData: () => {
                    return data;
                },
                getWeather:(city) => {
                    return $http({
                        type: "GET",
                        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7cf16558d759d14815306832bd7341e2&units=imperial`,
                    })
                },
            };
        });

})();
