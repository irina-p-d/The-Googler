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
            
        ];

        const notes = StoredNotes;
        console.log(notes);

        notes.forEach((note) => NotesList.addNoteToSection(note));
        
    }


static addNoteToSection(note){
        const sectionNotes = document.getElementById('notes_section');
        console.log(sectionNotes);
       
        const item = document.createElement('div'); 
        item.classList.add("card"); 
        
        item.innerHTML = `
         <div class="card-body">
         <p class="card-title">${note.title}</p>
         <p class="card-text">${note.description}</p>
         <p class="card-hashtag">#${note.hashtag}</p>
         <p><a href="#" class="btn btn-danger btn-sm delete"><i class="fa fa-trash" aria-hidden="true"></i></a></p>
         </div>
         `; 
        sectionNotes.appendChild(item);
}
    static deleteNote(item){
        if (item.classList.contains('delete')) {
            item.parentElement.parentElement.parentElement.remove();
        }
    }
    static clearFields() {
        document.getElementById('title').value = "";
        document.getElementById('description').value = "";
        document.getElementById('hashtag').value = "";

    }

}


document.addEventListener('DOMContentLoaded', NotesList.displayNotes);

document.getElementById('note-form').addEventListener('submit', (e) => {
    e.preventDefault();
   const title = document.getElementById('title').value;
   const description = document.getElementById('description').value;
   const hashtag = document.getElementById('hashtag').value;

   const note = new Note(title, description, hashtag);
   NotesList.addNoteToSection(note);

  NotesList.clearFields();
});  
  document.getElementById('notes_section').addEventListener('click', (e) =>
    {
        NotesList.deleteNote(e.target)
    });

    
