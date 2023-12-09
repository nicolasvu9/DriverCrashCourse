import flashcard from "../../models/flashcards/flashcard.js";


export async function getFlashcards() {
    try {
        return await flashcard.find({});
    } catch (err) {
        console.error("error getting flashcards", err);
        throw err;
    }
}

export async function addFlashcard(data){
    try {
        const newFlashcard = new flashcard(data);
        const savedFlashcard = await newFlashcard.save();
        return savedFlashcard;
    } catch (err) {
        console.error("error adding new flashcard", err);
        throw err;
    }
}

export async function deleteFlashcard(id) {
    try {
      const deletedFlashcard = await flashcard.findByIdAndDelete(id);
      return deletedFlashcard;
    } catch (err) {
      console.error("error deleting flashcard", err);
      throw err;
    }
  }
  