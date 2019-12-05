const from=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const cardbody =document.querySelectorAll(".card-body")[1];
const clear =document.getElementById("clear-films");


//tüm eventleri yükleme

EventListener();

function EventListener(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films=Storage.getFilmFromStorage();
        UI.loadAllFilms(films);
    });
    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);


}
function addFilm(e){
    const title =titleElement.value;
    const director =directorElement.value;
    const url =urlElement.value;
    if(title ==="" || director==="" || url==="" ){
        //hata
        UI.displayMessages("Tüm alanları doldurun...","danger");
        



    }
    else{
        const newFilm= new Film(title,director,url);
        ui.addFilmToUI(newFilm);//arayüze film ekleme
        Storage.addFilmToStorage(newFilm);

        UI.displayMessages("Film başariyla eklendi...","success");
    }
    UI.clearInput(titleElement,urlElement,directorElement);

    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id==="delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Film başariyla silindi...","success");
    }


}

function clearAllFilms(){ 
    if(confirm("eminmisiniz")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();

    }  


}