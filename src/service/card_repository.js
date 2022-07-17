import { firebaseDatabase } from "./firebase";

class CardRepository {
    syncCards(userId, onUpdateCard) {
        const ref = firebaseDatabase.ref(`${userId}/card`);
        ref.on("value", (snapshot) => {
            const value = snapshot.val();
            value && onUpdateCard(value);
        });
        return () => ref.off();
    }

    saveCard(userId, card) {
        firebaseDatabase.ref(`${userId}/card/${card.id}`).set(card);
    }

    removeCard(userId, card) {
        firebaseDatabase.ref(`${userId}/card/${card.id}`).remove();
    }
}

export default CardRepository;
