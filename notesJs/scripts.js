function create_note(x, y ) {
    /* on veut faire une sorte de constructeur, on définir tel ou tel classe d'objet. 
    En résumé, une classe c'est un objet exmple : "voiture". Une sorte de moule. La note 
    notre classe. !! Attention ne pas confondre avec classe dans CSS.!! 
    
    ---- ->Générer un élem_t div de classe "note" ds le body 
         -> Ds celui-ci, générer un élém-t de clase "handle" et un élément de type "textarea"
         -> Dans un élément de classe "handle", générer un élément de type "button" contenant le symbole "fois" (code : &times;)     
         -> Tout doit direct_t être stocké ds des variables, donc utliser la manière creatElement/ appandChild -----<
    */

    var new_note = document.createElement("div"); // les var c'est comme des x
    new_note.classList.add("note"); // ou  new_note.classList ="note" avec la classList "=" on écrasse les classes existant alors que le classList.add, on ajoute une nouvelle classe.
    // new_note.className = "note"; autre méthode
    document.body.appendChild(new_note); // on lit de cette façon : "dans document, on va ds le body et on veut faire  apparaitre new_note"

    new_note.style.top = y + "px";
    new_note.style.left = x + "px";

    var new_handle = document.createElement("div");


    new_handle.classList.add("handle");
    new_note.appendChild(new_handle);
                // créer un champs text document.createElement("c'est un élément du html");
    var new_textarea = document.createElement("textarea");
    new_note.appendChild(new_textarea);

    new_textarea.style.height ="100%";
    new_textarea.oninput = auto_resize;
    new_textarea.focus();

    // 
    new_textarea.onblur = function(){
        save_note(new_note);
    }

    new_note.textarea = new_textarea; // on donne une propriété personnaliséé à notre notre, qui sera un accès directe à son chmt texte(et ns permettra de dispenser querySelector)

    var delete_button = document.createElement("button");
    delete_button.classList.add("delete_button");
    delete_button.innerHTML = "&times;";
    new_handle.appendChild(delete_button); // on lit de cette façon : "dans le div new_handle faire apparaitre delete_button"

    delete_button.onclick  = function () {
        
     delete_note(new_note);// La note qui sera supprimée est celle que l'on est entrain de créer
    }
    
    $(new_note).draggable(); // Méthode ajoutée par jQuery UI

    //alert("supprimer cette note ?");
    return new_note; // return équivalent de y dans f(x)=y
    /*var handle = document.createElement("handle");
    handle.new_textareaContent = "delete_button" ;
    document.body.appendChild = ("&times;");
*/
}
window.ondblclick = function (e) { // e = l'évément : c'est le x dans f(x)
    create_note(e.clientX , e.clientY);
}
// Fct additionnlle pr les éléments de notes
function auto_resize(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.
    target.scrollHeight + "px";
}
function delete_note(note_to_delete) {
    
    if (confirm("Supprimer cette note ?")){ // ce teste se vérifie une fois que le bouton "OK" a été cliqué
        // document.body.removeChild(note_to_delete); est une versioon pour supprimer la note ou on peut écrire le formul ci-dessous
        note_to_delete.parentElement.removeChild(note_to_delete);

    }
}

//------------ function save data -------------------

function save_note(note_to_save) {

    // $.ajax("cheminAccèsAuFichier.php",{ouverture de l'objet servant à info supplémentaires à la requet:})
    $.ajax("php/save_note.php",
        {// ouverture de l'objet servant à donner des infos supp à la requêt. 
            data:{// ouverture de l'objet représentant les datas to send
                // dans le content on prend note_to_save.dElementTexte.onRecupereLaValue
                content: note_to_save.textarea.value
            }, 
            method:"post", 
            success : function() {alert("ok")}
        });
}