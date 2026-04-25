// Main Application Logic

class TarotApp {
    constructor() {
        this.ui = new TarotUI();
        this.bindEvents();
    }

    bindEvents() {
        this.ui.startBtn.addEventListener('click', () => this.startReading());
        this.ui.resetBtn.addEventListener('click', () => this.resetReading());
    }

    // Fisher-Yates Shuffle Algorithm
    shuffleDeck(deck) {
        const shuffled = [...deck];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Draw 3 unique random cards with random orientations
    drawCards() {
        const shuffled = this.shuffleDeck(tarotDeck);
        const drawn = shuffled.slice(0, 3);
        
        // Assign upright or reversed (50% probability)
        return drawn.map(card => {
            return {
                ...card,
                isReversed: Math.random() < 0.5
            };
        });
    }

    startReading() {
        // Change button text to simulate shuffling
        this.ui.startBtn.textContent = "Shuffling Deck...";
        this.ui.startBtn.disabled = true;
        
        setTimeout(() => {
            const selectedCards = this.drawCards();
            this.ui.renderDrawnCards(selectedCards);
            
            // Reset button state for next time
            this.ui.startBtn.textContent = "Start Reading";
            this.ui.startBtn.disabled = false;
        }, 1500); // 1.5s shuffling animation delay
    }

    resetReading() {
        this.ui.resetUI();
    }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new TarotApp();
});
