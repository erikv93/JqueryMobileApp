function onAddClicked() {
    addNote($('#nameEntry').val(), $('#descriptionEntry').val());
    console.log("On add clicked called");
}

function onEditClicked() {
    editNote($('#nameEntryView').val(), $('#descriptionEntryView').val());
    console.log("On edit clicked called");
}

function editNote(name, description) {
    localStorage.removeItem(name);
    localStorage.setItem(name, description)
}

function onRemoveClicked() {
    localStorage.removeItem(sessionStorage.getItem("noteClicked"));
    $('notesList').listView('refresh');
    window.history.back();
}

function addNote(name, description) {
    localStorage.setItem(name, description);
    window.history.back();
}

function removeNote(name) {
    localStorage.removeItem(name);
    $.mobile.navigate("#home");
}

function getNote(name) {
    return localStorage.getItem(name);
}

function updateNote(name, description) {
    localStorage.setItem(name, description);
}

function getAllNotes() {

    console.log("Get all notes called");
    for (var i = 0, len = localStorage.length; i < len; ++i) {
        printNote(localStorage.key(i), localStorage.getItem(localStorage.key(i)));
    }

    $('#notesList').on('click', 'li', function () {
        viewNote($(this).attr('id'));
        console.log("test");
    });
}


function printNote(name, description) {
    $('#notesList').append('<li id="' + name + '"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#">' + name + '</a></li>');

    //    document.getElementById("contentNotes").appendChild('<li><a href="#"><h3>' + name + "</h3> " + description + '</a></li>');
    console.log("print note called");
}

function viewNote(name) {
    console.log("Note viewed: " + name);
    sessionStorage.setItem("noteClicked", name);
    $.mobile.navigate("#view");
}