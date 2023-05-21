// creation du corps de note en js 
function create_note(x , y ){
        // <div class="note"></div>
    var div_note = document.createElement("div");
    div_note.classList = "note";
    document.body.appendChild(div_note);
        //on change le style de cette div pour son affiache a l'endroit voulu
    div_note.style.top = y + "px";
    div_note.style.left = x + "px";

        // <div class="handle"></div>
    var div_handle = document.createElement("div");
    div_handle.classList = "handle";
    div_note.appendChild(div_handle);
        // element <button> dans la <div class="handle">
    var button_handle = document.createElement("button");
    button_handle.className = "delete_button";
    button_handle.innerHTML = "&times;";
    div_handle.appendChild(button_handle);

    button_handle.onclick = function () {
        delete_note (div_note);
    }
    //----------------------------------------------------------
    $(div_note).draggable(); // methode jQuery pour ajuster l'emplacement du note
    //----------------------------------------------------------
        // element <textarea>
    var text_area = document.createElement("textarea");
    div_note.appendChild(text_area);
    text_area.oninput = auto_resize; // une fonction fait en bas 
    text_area.focus(); // pour avoir la possibllibilité decrire des l'ouverture 

        // retourner une valeur
    return div_note;
}
//------------------------------------------------------------------------------------------
// appel function 
// create_note();
// var note_2 = create_note();
// //------------------------------------------------------------------------------------------
// // pour pouvoir ajouter du style a une variable dans la function
// note_2.style.left= "400px";

//------------------------------------------------------------------------------------------
// affichage au double_click
window.ondblclick = function (e) { // e = event ou evenement 
    console.log(e);
    create_note (e.clientX, e.clientY);
}
//------------------------------------------------------------------------------------------
// fonction pour changer la taille d'une cible 
function auto_resize (e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
} 
//------------------------------------------------------------------------------------------
// fonction fermeture des notes
function delete_note (note_to_delete) {
  if ( confirm("Suprimer cette note ?")) { // confirm est un booleen laisse 2 choix a l'utilisateur
    // on est dans ce if que si on fait ok sur l'alert du confirm 
    
    // une facon de supprimer 
    //document.body.removeChild(note_to_delete);
    
    // une deuxieme facon de supprimer : c'est plus sûr !
    note_to_delete.parentElement.removeChild(note_to_delete);
  }
}