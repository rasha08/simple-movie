class Movie{
	constructor(obj){
		this.isValidGanre(obj.genre_ids);
		this.isValidId(obj.id);
		this.isValidHomepage(obj.homepage)
		this.isValidOriginalTitle(obj.original_title, obj.title)
		this.isValidOverview(obj.overview)
		this._popularity = obj.popularity,
		this._poster_path = obj.poster_path,
		this._release_date = obj.release_date;
		this._title = obj.title;
		this._video = obj.video;
		this._vote_average = obj.vote_average;
		this._vote_count = obj.vote_count
	}
	isValidGanre(ganre){
		if(Array.isArray(ganre) && ganre.length > 0){
			if(ganre.indexOf(undefined) != -1 || ganre.indexOf(null) != -1){
				this._genres = [0];;				
			}else{
				this._genres = ganre;
			}
		}else{
			this._genres = [0];;
		}
	}
	isValidId(id){
		if(typeof id === 'number' && id>0){
			this._id = id;
		}
		else{
			this._id = 1
		}
	}
	isValidHomepage(homepage){
		if(typeof homepage === 'string'){
			this._homepage = homepage;
		}else{
			this._homepage="";
		}
	}
	isValidOriginalTitle(original_title, title){
		if(typeof original_title ==='string'){
			if(original_title.length > 0){
				this._original_title = original_title
			}else{
				this._original_title = title
			}
		}else{
			this._original_title = title
		}
	}
	isValidOverview(overview){
		if(typeof overview ==='string' && overview.length > 0){
			this._overview = overview;
		}else{
			this._overview = 'No overview vas found for this Movie';
		}
	}
	
}