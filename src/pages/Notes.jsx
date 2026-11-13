import { useState, useEffect } from "react";

function Notes() {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    function handleAddNote(event) {
        event.preventDefault();

        if (!title.trim() || !description.trim()) {
            return;
        }
        if (editingId != null) {
            const updatedNotes = notes.map((note) =>
            note.id === editingId
        ? {...note, title: title, description: description}
        : note
    );

    setNotes(updatedNotes);

    setEditingId(null);
    } else {
        const newNote = {
            id: Date.now(),
            title: title,
            description: description,
            isDeleted: false
        };

        setNotes([...notes, newNote]);
    }
        setTitle("");
        setDescription(""); 
    }
// DELETing my notes meow!
    function handleDeleteNote(id) {
        const updatedNotes = notes.map((note) =>
            note.id === id
        ? {...note, isDeleted: true}
    : note
    );
    setNotes(updatedNotes);
    }
    //to EDIT my notes
    function handleEditNote(note) {
            setEditingId(note.id);
            setTitle(note.title);
            setDescription(note.description);
        }
//cancel edit!
    function handleCancelEdit() {
        setEditingId(null);
        setTitle("");
        setDescription("");
    }

    return (
        <main>
            <h1>Your Notes</h1>
            <p>Keep your ideas organized!</p>

        <form onSubmit={handleAddNote}>
            <input
            type="text"
            placeholder="Note title..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            />
            <textarea
            placeholder="Write your thoughts..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            />
            </form>    

            <section>
                <h2>History</h2>

                {notes.filter((note) => !note.isDeleted).map((note) => (
                    <div key={note.id} className="card">
                        <h3>{note.title}</h3>
                        <p>{note.description}</p>
                        <button onClick={() => handleDeleteNote(note.id)}>
                            Delete!!
                            </button>

                        <button onClick={() => handleEditNote(note)}>
                            Edit!
                        </button>

                        {editingId != null && (
                            <button type="button" onClick={handleCancelEdit}>
                                Cancel!!
                            </button>
                        )}
                    </div>
                ))}
            </section>
        </main>
    );
}

export default Notes;