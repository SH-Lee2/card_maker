import { getDatabase, ref, set, onValue, off, remove } from "firebase/database";
class CardRepository {
    constructor(app) {
        this.db = getDatabase(app);
    }

    syncCards(userId, onUpdateCard) {
        const data = ref(this.db, `${userId}/card`);
        onValue(data, (snapshot) => {
            const value = snapshot.val();
            value && onUpdateCard(value);
        });
        return () => off(data);
    }

    saveCard(userId, card) {
        set(ref(this.db, `${userId}/card/${card.id}`), card);
    }

    removeCard(userId, card) {
        remove(ref(this.db, `${userId}/card/${card.id}`));
    }
}

export default CardRepository;
