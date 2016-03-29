function onAddClicked() {
    addNote($('#nameEntry').val(), $('#descriptionEntry').val());
    console.log("On add clicked called");
    getAllNotes();
}

function addNote(name, description) {
    localStorage.setItem(name, description);
    window.history.back();
}

function removeNote(name) {
    localStorage.removeItem(name);
}

function getNote(name) {
    return localStorage.getItem(name);
}

function updateNote(name, description) {
    localStorage.setItem(name, description);
}

function getAllNotes() {
    //    var notes = [];
    //    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
    //      notes.push( localStorage.getItem( localStorage.key( i ) ) );
    //    }
    //    console.log(notes)
    //    return notes;
    console.log("Get all notes called");
    for (var i = 0, len = localStorage.length; i < len; i++) {
        printNote(localStorage.key(i), localStorage.getItem(localStorage.key(i)));
        //        $('#notesList').append('<li><a href="#"><h3>' + localStorage.key(i) + "</h3> " + localStorage.getItem(localStorage.key(i)) + '</a></li>');
        console.log("Key: " + localStorage.key(i) + " - Content: " + localStorage.getItem(localStorage.key(i)));
        //        console.log();
        console.log("Loop index" + i + " called");
    }
}


function printNote(name, description) {
    $('#notesList').append('<li><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#">' + name + " " + description + '</a></li>');

    //    document.getElementById("contentNotes").appendChild('<li><a href="#"><h3>' + name + "</h3> " + description + '</a></li>');
    console.log("print note called");
}

$('#notesList').on('click', '#li', function() {
    console.log("test");
});