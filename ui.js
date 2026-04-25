// UI Manipulation and Rendering Logic

class TarotUI {
    constructor() {
        this.startBtn = document.getElementById('start-reading-btn');
        this.resetBtn = document.getElementById('reset-btn');
        this.deckContainer = document.getElementById('deck-container');
        this.cardsDisplay = document.getElementById('cards-display');
        this.interpretationPanel = document.getElementById('interpretation-panel');
        this.readingDetails = document.getElementById('reading-details');
        this.readingSummary = document.getElementById('reading-summary');
        
        this.slots = {
            past: document.querySelector('.card-wrapper[data-position="past"]'),
            present: document.querySelector('.card-wrapper[data-position="present"]'),
            future: document.querySelector('.card-wrapper[data-position="future"]')
        };
        
        this.initBackground();
    }

    // Generate starry background
    initBackground() {
        const container = document.getElementById('stars-container');
        const starCount = 100;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Randomize position, size, and animation duration
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 3;
            const duration = Math.random() * 3 + 1;
            const delay = Math.random() * 2;
            
            star.style.left = `${x}vw`;
            star.style.top = `${y}vh`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `${delay}s`;
            
            container.appendChild(star);
        }
    }

    // Create the HTML structure for a single card
    createCardElement(cardData, position) {
        const cardHTML = `
            <div class="tarot-card ${cardData.isReversed ? 'reversed' : ''}">
                <div class="card-face card-back"></div>
                <div class="card-face card-front">
                    <div class="card-image-placeholder">
                        <span>${cardData.name}</span>
                    </div>
                    <div class="card-name-display">${cardData.name}</div>
                </div>
            </div>
        `;
        
        const slot = this.slots[position];
        slot.innerHTML = cardHTML;
        slot.classList.add('floating');
        
        // Add click listener to flip
        const cardElement = slot.querySelector('.tarot-card');
        cardElement.addEventListener('click', () => {
            if (!cardElement.classList.contains('flipped')) {
                cardElement.classList.add('flipped');
                this.checkAllCardsFlipped();
            }
        }, { once: true });
    }

    // Render all drawn cards to DOM
    renderDrawnCards(drawnCards) {
        this.drawnCardsData = drawnCards;
        this.cardsFlipped = 0;
        
        // Hide start button, show cards area
        this.deckContainer.classList.add('hidden');
        this.cardsDisplay.classList.remove('hidden');
        
        // Render each card face down
        this.createCardElement(drawnCards[0], 'past');
        this.createCardElement(drawnCards[1], 'present');
        this.createCardElement(drawnCards[2], 'future');
    }

    // Check if all cards are flipped, if so, show interpretation
    checkAllCardsFlipped() {
        this.cardsFlipped++;
        if (this.cardsFlipped === 3) {
            setTimeout(() => this.showInterpretations(), 1000);
        }
    }

    // Render interpretations text
    showInterpretations() {
        this.readingDetails.innerHTML = '';
        
        const positions = ['Past', 'Present', 'Future'];
        
        this.drawnCardsData.forEach((card, index) => {
            const orientationText = card.isReversed ? "Reversed" : "Upright";
            const meaningText = card.isReversed ? card.reversed : card.upright;
            
            const detailHTML = `
                <div class="card-interpretation">
                    <h4>${positions[index]}: ${card.name}</h4>
                    <div class="orientation">${orientationText}</div>
                    <p><strong>Meaning:</strong> ${meaningText}</p>
                    <p><strong>Prediction:</strong> ${card.prediction}</p>
                </div>
            `;
            this.readingDetails.innerHTML += detailHTML;
        });
        
        this.renderSummary();
        this.interpretationPanel.classList.remove('hidden');
        
        // Scroll to interpretation panel
        this.interpretationPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Calculate and render final spiritual summary
    renderSummary() {
        const scores = { positive: 1, neutral: 0, negative: -1 };
        let totalScore = 0;
        
        this.drawnCardsData.forEach(card => {
            let energy = card.energy;
            // If reversed, invert energy generally (simplistic approach for summary)
            if (card.isReversed) {
                if (energy === 'positive') energy = 'negative';
                else if (energy === 'negative') energy = 'positive';
            }
            totalScore += scores[energy];
        });

        let summaryText = "";
        if (totalScore >= 2) {
            summaryText = "The energies surrounding you are highly optimistic. The universe is aligning in your favor, bringing growth and positive transformations. Trust your path.";
        } else if (totalScore <= -2) {
            summaryText = "The cards urge caution. You are entering a period of challenge or internal clearing. Shadow work and careful reflection are necessary right now. Do not rush.";
        } else {
            summaryText = "Your reading reveals a balanced mix of energies. Challenges and blessings go hand in hand right now. Stay grounded, maintain your center, and navigate changes with mindful awareness.";
        }
        
        this.readingSummary.innerHTML = `
            <h3>Spiritual Guidance</h3>
            <p>${summaryText}</p>
        `;
    }

    // Reset UI for a new reading
    resetUI() {
        this.interpretationPanel.classList.add('hidden');
        this.cardsDisplay.classList.add('hidden');
        this.deckContainer.classList.remove('hidden');
        
        // Clear slots
        Object.values(this.slots).forEach(slot => {
            slot.innerHTML = '';
            slot.classList.remove('floating');
        });
        
        // Scroll back to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
