import NoteForm from './NoteForm'
import { NoteData, Tag } from './App'

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[]
}

function NewNotes({ onSubmit, onAddTag, availableTags} : NewNoteProps) {
  return (
    <>
      <h1 className='mb-4'>New Note</h1>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
    </>
  )
}

export default NewNotes
