import { useState, useEffect } from "react";

function Trash() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const savedNotes = localStorage.getItem("notes");

        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        }
    }, []);
    const deletedNotes = notes.filter((note) => note.isDeleted);

    function handleRestoreNote(id) {
        const updatedNotes = notes.map((note) =>
        note.id === id 
    ? {...note, isDeleted: false}
    : note
    );
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }
    return (
        <main>
            <h1>Trash!</h1>
            <p>View and restore your deleted notes and drawings!</p>
    
            <section>
                {deletedNotes.length === 0 ? (
                    <p>Empty Trash!!</p>
                ) : (      
            deletedNotes.map((note) => (
                <div key={note.id} className="card">
                    <h3>{note.title}</h3>
                    <p>{note.description}</p>
                     <button onClick={() => handleRestoreNote(note.id)}>
                    Restore
                    </button>
                </div>
            ))
        )}
            </section>       
        </main>
    );
}
export default Trash;