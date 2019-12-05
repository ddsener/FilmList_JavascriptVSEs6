class Storage{

    static addFilmToStorage (newFilm){
   
        let films = this.getFilmFromStorage();
        films.push(newFilm);
    
        /*
        [
            {titele:"sasasd",director:"asdasd",url:"asdasdasd"},
            {titele:"sasasd",director:"asdasd",url:"asdasdasd"},
            {titele:"sasasd",director:"asdasd",url:"asdasdasd"},
        ]
    
    
         */
        localStorage.setItem("films",JSON.stringify(films));
    
    }
    
    static getFilmFromStorage(){
        let films;
        if(localStorage.getItem("films") === null){
            films =[]
    
    
        }
        else{
            films=JSON.parse(localStorage.getItem("films"));
    
        }
    
        return films;
    }
    static deleteFilmFromStorage(filmTitle){
        let films=this.getFilmFromStorage();
        films.forEach(function(film,index){
            if(film.title === filmTitle){
                films.splice(index,1);
            }
        });
        localStorage.setItem("films",JSON.stringify(films));
    
    
    
    }
    
    static clearAllFilmsFromStorage(){
        localStorage.removeItem("films")
    
    
    }



};


