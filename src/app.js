const sectionNotes = document.getElementById('notes_section');


class Note {
    constructor(title, description, hashtag) {
        this.title = title;
        this.description = description;
        this.hashtag = hashtag;
    }
}

class NotesList {
    static displayNotes() {
        const StoredNotes = [
            {
                title: 'Presentation',
                description: 'need prepare presentation for tomorrow meeting',
                hashtag: 'presentation'
            }, 
            {
                title: 'Meeting',
                description: 'Organize meeting with Sales',
                hashtag: 'meeting'
            }
        ];

        const notes = StoredNotes;
        console.log(notes);

        notes.forEach((note) => NotesList.addNoteToSection(note));
        
    }


static addNoteToSection(note){
        const sectionNotes = document.getElementById('notes_section');
        console.log(sectionNotes);
       
        const item = document.createElement('div'); 
        
        item.innerHTML = `
         <p>${note.title}</p>
         <p>${note.description}</p>
         <p>${note.hashtag}</p>
         <p><a href="#" class="btn btn-danger btn-sm delete">x</a></p>
         `; 
    
        sectionNotes.appendChild(item);
}

}


document.addEventListener('DOMContentLoaded', NotesList.displayNotes);

document.getElementById('note-form').addEventListener('submit', (e) => {
    e.preventDefault();
   const title = document.getElementById('title').value;
   const description = document.getElementById('description').value;
   const hashtag = document.getElementById('hashtag').value;

   const note = new Note(title, description, hashtag);
   NotesList.addNoteToSection(note)

});