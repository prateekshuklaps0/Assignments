import { useSelector } from "react-redux";

function NoteList() {
  const notes = useSelector((state: any) => state.notes.notes);

  return (
    <div className="note-list">
      <h2>Notes</h2>
      {notes.map((note: any, index: number) => (
        <div key={index} className="note-card">
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <p>Timestamp: {note.timestamp.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
