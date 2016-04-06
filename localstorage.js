//called when add button is clicked
function onAddClicked() {
    addNote($('#nameEntry').val(), $('#descriptionEntry').val());
    console.log("On add clicked called");
    location.reload();
}

//called when save button is clicked in view/edit screen
function onEditClicked() {
    editNote($('#nameEntryView').val(), $('#descriptionEntryView').val());
    console.log("On edit clicked called");
    location.reload();
}

//called when remove button is clicked in view/edit screen
function onRemoveClicked() {
    removeNote(sessionStorage.getItem("noteClicked"));
    $.mobile.navigate('#home');
    location.reload();
}

//removes a note from localstorage then saves it again with modified values
function editNote(name, description) {
    removeNote(name);
    addNote(name, description);
}

//adds a note to localstorage
function addNote(name, description) {
    localStorage.setItem(name, description);
    window.history.back();
}

//removes note from localstorage
function removeNote(name) {
    localStorage.removeItem(sessionStorage.getItem("noteClicked"));
}

//gets a note from localstorage
function getNote(name) {
    return localStorage.getItem(name);
}

//gets all notes from localstorage by iterating over localstorage, then calls printNote to add them to the listview in 'View notes' 
function getAllNotes() {
    console.log("Get all notes called");
    for (var i = 0, len = localStorage.length; i < len; ++i) {
        printNote(localStorage.key(i), localStorage.getItem(localStorage.key(i)));
    }
    
    //adds onclick to the listview
    $('#notesList').on('click', 'li', function () {
        viewNote($(this).attr('id'));
    });
}

//Adds an item to the listView on the mainscreen
function printNote(name, description) {
    $('#notesList').append('<li id="' + name + '"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#">' + name + '</a></li>');
}

//opens #view
function viewNote(name) {
    console.log("Note viewed: " + name);
    sessionStorage.setItem("noteClicked", name);
    $.mobile.navigate("#view");
    $('#nameEntryView').val(name);
    $('#descriptionEntryView').val(getNote(name));
}