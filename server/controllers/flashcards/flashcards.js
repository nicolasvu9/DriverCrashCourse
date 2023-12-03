import flashcards from "../../models/flashcards/flashcard.js";

export async function getFlashcards() {
    try {
        return await flashcards.find({});
    } catch (err) {
        console.error("error getting flashcards", err);
        throw err;
    }
}