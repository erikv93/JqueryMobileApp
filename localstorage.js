function onAddClicked() {
    addNote($('#nameEntry').val(), $('#descriptionEntry').val());
    console.log("On add clicked called");
    location.reload();
}

function onEditClicked() {
    editNote($('#nameEntryView').val(), $('#descriptionEntryView').val());
    console.log("On edit clicked called");
    location.reload();
}


function onRemoveClicked() {
    removeNote(sessionStorage.getItem("noteClicked"));
    $.mobile.navigate('#home');
    location.reload();
}

function editNote(name, description) {
    removeNote(name);
    addNote(name, description);
}

function addNote(name, description) {
    localStorage.setItem(name, description);
    window.history.back();
}

function removeNote(name) {
    localStorage.removeItem(sessionStorage.getItem("noteClicked"));
}

function getNote(name) {
    return localStorage.getItem(name);
}

function updateNote(name, description) {
    removeNote(name);
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
    $('#nameEntryView').val(name);
    $('#descriptionEntryView').val(getNote(name));
}