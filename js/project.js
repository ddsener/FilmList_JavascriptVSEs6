const from=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const cardbody =document.querySelectorAll(".card-body")[1];
const clear =document.getElementById("clear-films");
//UI objesi başlar

const ui = new UI();
//storefa obje üret
const storage =new Storage();

//tüm eventleri yükleme

EventListener();

function EventListener(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films=storage.getFilmFromStorage();
        ui.loadAllFilms(films);
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
        ui.displayMessages("Tüm alanları doldurun...","danger");
        



    }
    else{
        const newFilm= new Film(title,director,url);
        ui.addFilmToUI(newFilm);//arayüze film ekleme
        storage.addFilmToStorage(newFilm);

        ui.displayMessages("Film başariyla eklendi...","success");
    }
    ui.clearInput(titleElement,urlElement,directorElement);

    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id==="delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Film başariyla silindi...","success");
    }


}

function clearAllFilms(){ 
    if(confirm("eminmisiniz")){
        ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();

    }  


}