'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Movie = function () {
	function Movie(obj) {
		_classCallCheck(this, Movie);

		this.isValidGanre(obj.genre_ids);
		this.isValidId(obj.id);
		this.isValidHomepage(obj.homepage);
		this.isValidOriginalTitle(obj.original_title, obj.title);
		this.isValidOverview(obj.overview);
		this._popularity = obj.popularity, this._poster_path = obj.poster_path, this._release_date = obj.release_date;
		this._title = obj.title;
		this._video = obj.video;
		this._vote_average = obj.vote_average;
		this._vote_count = obj.vote_count;
	}

	_createClass(Movie, [{
		key: 'isValidGanre',
		value: function isValidGanre(ganre) {
			if (Array.isArray(ganre) && ganre.length > 0) {
				if (ganre.indexOf(undefined) != -1 || ganre.indexOf(null) != -1) {
					this._genres = [0];;
				} else {
					this._genres = ganre;
				}
			} else {
				this._genres = [0];;
			}
		}
	}, {
		key: 'isValidId',
		value: function isValidId(id) {
			if (typeof id === 'number' && id > 0) {
				this._id = id;
			} else {
				this._id = 1;
			}
		}
	}, {
		key: 'isValidHomepage',
		value: function isValidHomepage(homepage) {
			if (typeof homepage === 'string') {
				this._homepage = homepage;
			} else {
				this._homepage = "";
			}
		}
	}, {
		key: 'isValidOriginalTitle',
		value: function isValidOriginalTitle(original_title, title) {
			if (typeof original_title === 'string') {
				if (original_title.length > 0) {
					this._original_title = original_title;
				} else {
					this._original_title = title;
				}
			} else {
				this._original_title = title;
			}
		}
	}, {
		key: 'isValidOverview',
		value: function isValidOverview(overview) {
			if (typeof overview === 'string' && overview.length > 0) {
				this._overview = overview;
			} else {
				this._overview = 'No overview vas found for this Movie';
			}
		}
	}]);

	return Movie;
}();
//start of tests


describe("Testning class Movie", function() {
	var movie = new Movie({});
  it("instanceof test", function() {
    expect(movie instanceof Movie).toBe(true);
  });
});

// creating Mock Object

let mock = {
      "poster_path": "/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
      "adult": false,
      "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      "release_date": "1972-03-14",
      "genre_ids": [
        18,
        80
      ],
      "id": 238,
      "original_title": "The Godfather",
      "original_language": "en",
      "title": "The Godfather",
      "backdrop_path": "/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",
      "popularity": 7.131615,
      "vote_count": 4970,
      "video": false,
      "vote_average": 8.4,
	  "homepage":"google.rs"
    }

let mock2=  {
      "poster_path": "/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
      "adult": false,
      "overview": undefined,
      "release_date": "1972-03-14",
      "genre_ids": [undefined],
      "id": undefined,
      "original_title": undefined,
      "original_language": "en",
      "title": "The Godfather",
      "backdrop_path": "/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",
      "popularity": 7.131615,
      "vote_count": 4970,
      "video": false,
      "vote_average": 8.4,
	  "homepage":undefined
    }
let mock3=  {
      "poster_path": "/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
      "adult": false,
      "overview": null,
      "release_date": "1972-03-14",
      "genre_ids": [null],
      "id": null,
      "original_title": null,
      "original_language": "en",
      "title": "The Godfather",
      "backdrop_path": "/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",
      "popularity": 7.131615,
      "vote_count": 4970,
      "video": null,
      "vote_average": 8.4,
	  "homepage":null
    }

describe("Testning class Movie -- genres", function() {
	var movie = new Movie(mock);	
	var movie2 = new Movie(mock2);
	var movie3 = new Movie(mock3);	
  it("property: _genres", function() {
    expect(movie._genres === mock.genre_ids).toBe(true);
	expect(Array.isArray(movie._genres)).toBe(true);
	expect(typeof movie._genres[0]).toBe("number");
	expect(movie._genres.length>0).toBe(true);
	expect(movie._genres[0] == 18).toBe(true)
	expect(movie._genres[1] == 80).toBe(true)
  });	
  it("method: isValidGanre", function() {
    expect(Array.isArray(movie2._genres)).toBe(true)
	expect(movie2._genres.indexOf(undefined) == -1).toBe(true)
	expect(movie2._genres.indexOf(0) != -1).toBe(true)
	expect(Array.isArray(movie3._genres)).toBe(true)
	expect(movie3._genres.indexOf(null) == -1).toBe(true)
	expect(movie3._genres.indexOf(0) != -1).toBe(true)
  });
});

describe("Testning class Movie -- id", function() {
	var movie = new Movie(mock);	
	var movie2 = new Movie(mock2);
	var movie3 = new Movie(mock3);	
  it("property:_id", function() {
    expect(movie._id === mock.id).toBe(true);
	expect(movie._id===238).toBe(true)
  });		
  it("method: isValidId", function() {
    expect(movie2._id == 1).toBe(true)
    expect(movie3._id == 1).toBe(true)
	
  });
});

describe("Testning class Movie -- homepage", function() {
	var movie = new Movie(mock);	
	var movie2 = new Movie(mock2);
	var movie3 = new Movie(mock3);
  it("property:_homepage", function() {
    expect(movie._homepage === mock.homepage).toBe(true);
	expect(movie._homepage === 'google.rs').toBe(true);
  });				
  it("method: isValidHomepage", function() {
    expect(movie2._homepage==="").toBe(true);
    expect(movie3._homepage==="").toBe(true);	
  });
});

describe("Testning class Movie -- original_title", function() {
	var movie = new Movie(mock);	
	var movie2 = new Movie(mock2);
	var movie3 = new Movie(mock3);
  it("property:_original_title", function() {
    expect(movie._original_title === mock.original_title).toBe(true);
	expect(movie._original_title ==="The Godfather").toBe(true)
  });
  it("method: isValidOriginalTitle", function() {
  	expect(movie2._original_title === movie2._title).toBe(true);	  
  	expect(movie3._original_title === movie3._title).toBe(true);	  	
  });
});

describe("Testning class Movie -- overview", function() {
	var movie = new Movie(mock);
	var movie2 = new Movie(mock2);
	var movie3 = new Movie(mock3);	
  it("property:_overview", function() {
    expect(movie._overview === mock.overview).toBe(true);
	expect(movie._overview === 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.')
  });
  it("method: isValidOverview", function() {
  	expect(movie2._overview === 'No overview vas found for this Movie').toBe(true);	  
  	expect(movie3._overview === 'No overview vas found for this Movie').toBe(true);	  	
  });
});

// TODO //
describe("Testning class Movie -- popularity", function() {
	var movie = new Movie(mock);
  it("property:_popularity", function() {
    expect(movie._popularity === mock.popularity).toBe(true);
	expect(typeof movie._popularity).toBe("number")
	expect(movie._popularity>0).toBe(true);
  });
});
describe("Testning class Movie -- poster_path", function() {
	var movie = new Movie(mock);
  it("property:_poster_path", function() {
    expect(movie._poster_path === mock.poster_path).toBe(true);
	expect(typeof movie._poster_path).toBe('string');
  });
});