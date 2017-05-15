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