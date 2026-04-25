// Tarot Major Arcana Dataset
const tarotDeck = [
    {
        id: 0,
        name: "The Fool",
        upright: "New beginnings, innocence, spontaneity, a free spirit.",
        reversed: "Recklessness, holding back, risk-taking without thought.",
        prediction: "A new journey awaits. Trust your intuition and take a leap of faith.",
        energy: "positive"
    },
    {
        id: 1,
        name: "The Magician",
        upright: "Manifestation, resourcefulness, power, inspired action.",
        reversed: "Manipulation, poor planning, untapped talents.",
        prediction: "You have all the tools you need to succeed. Focus your will.",
        energy: "positive"
    },
    {
        id: 2,
        name: "The High Priestess",
        upright: "Intuition, sacred knowledge, divine feminine, the subconscious.",
        reversed: "Secrets, disconnected from intuition, withdrawal and silence.",
        prediction: "Listen to your inner voice. Not everything is as it seems on the surface.",
        energy: "neutral"
    },
    {
        id: 3,
        name: "The Empress",
        upright: "Femininity, beauty, nature, nurturing, abundance.",
        reversed: "Creative block, dependence on others, emptiness.",
        prediction: "A period of growth and abundance is approaching. Nurture your creations.",
        energy: "positive"
    },
    {
        id: 4,
        name: "The Emperor",
        upright: "Authority, establishment, structure, a father figure.",
        reversed: "Domination, excessive control, lack of discipline, inflexibility.",
        prediction: "Structure and logic will help you achieve your goals. Take charge.",
        energy: "positive"
    },
    {
        id: 5,
        name: "The Hierophant",
        upright: "Spiritual wisdom, religious beliefs, conformity, tradition.",
        reversed: "Personal beliefs, freedom, challenging the status quo.",
        prediction: "Seek guidance from a mentor or established traditions.",
        energy: "neutral"
    },
    {
        id: 6,
        name: "The Lovers",
        upright: "Love, harmony, relationships, values alignment, choices.",
        reversed: "Self-love, disharmony, imbalance, misalignment of values.",
        prediction: "A significant relationship or choice requires your attention. Choose with your heart.",
        energy: "positive"
    },
    {
        id: 7,
        name: "The Chariot",
        upright: "Control, willpower, success, action, determination.",
        reversed: "Self-discipline, opposition, lack of direction.",
        prediction: "Victory is yours if you maintain focus and discipline.",
        energy: "positive"
    },
    {
        id: 8,
        name: "Strength",
        upright: "Strength, courage, persuasion, influence, compassion.",
        reversed: "Inner strength, self-doubt, low energy, raw emotion.",
        prediction: "Gentle power and inner resilience will overcome current obstacles.",
        energy: "positive"
    },
    {
        id: 9,
        name: "The Hermit",
        upright: "Soul-searching, introspection, being alone, inner guidance.",
        reversed: "Isolation, loneliness, withdrawal.",
        prediction: "Take time for solitude and introspection to find the answers you seek.",
        energy: "neutral"
    },
    {
        id: 10,
        name: "Wheel of Fortune",
        upright: "Good luck, karma, life cycles, destiny, a turning point.",
        reversed: "Bad luck, resistance to change, breaking cycles.",
        prediction: "The wheel turns in your favor. Embrace the inevitable changes.",
        energy: "positive"
    },
    {
        id: 11,
        name: "Justice",
        upright: "Justice, fairness, truth, cause and effect, law.",
        reversed: "Unfairness, lack of accountability, dishonesty.",
        prediction: "Truth will prevail. Ensure your actions are fair and balanced.",
        energy: "neutral"
    },
    {
        id: 12,
        name: "The Hanged Man",
        upright: "Pause, surrender, letting go, new perspectives.",
        reversed: "Delays, resistance, stalling, indecision.",
        prediction: "A temporary pause is required. Look at things from a different angle.",
        energy: "neutral"
    },
    {
        id: 13,
        name: "Death",
        upright: "Endings, change, transformation, transition.",
        reversed: "Resistance to change, personal transformation, inner purging.",
        prediction: "Let go of the old to make way for the new. Profound transformation.",
        energy: "neutral"
    },
    {
        id: 14,
        name: "Temperance",
        upright: "Balance, moderation, patience, purpose.",
        reversed: "Imbalance, excess, self-healing, re-alignment.",
        prediction: "Find the middle path. Patience and moderation bring harmony.",
        energy: "positive"
    },
    {
        id: 15,
        name: "The Devil",
        upright: "Shadow self, attachment, addiction, restriction, sexuality.",
        reversed: "Releasing limiting beliefs, exploring dark thoughts, detachment.",
        prediction: "Examine unhealthy attachments or habits holding you back.",
        energy: "negative"
    },
    {
        id: 16,
        name: "The Tower",
        upright: "Sudden change, upheaval, chaos, revelation, awakening.",
        reversed: "Personal transformation, fear of change, averting disaster.",
        prediction: "Foundations may shake, but the destruction clears the path for truth.",
        energy: "negative"
    },
    {
        id: 17,
        name: "The Star",
        upright: "Hope, faith, purpose, renewal, spirituality.",
        reversed: "Lack of faith, despair, self-trust, disconnection.",
        prediction: "A period of healing and renewed hope is upon you. The universe guides you.",
        energy: "positive"
    },
    {
        id: 18,
        name: "The Moon",
        upright: "Illusion, fear, anxiety, subconscious, intuition.",
        reversed: "Release of fear, repressed emotion, inner confusion.",
        prediction: "Things are not clear. Rely on intuition rather than logic right now.",
        energy: "negative"
    },
    {
        id: 19,
        name: "The Sun",
        upright: "Positivity, fun, warmth, success, vitality.",
        reversed: "Inner child, feeling down, overly optimistic.",
        prediction: "Joy and success radiate. A highly favorable outcome is indicated.",
        energy: "positive"
    },
    {
        id: 20,
        name: "Judgement",
        upright: "Judgement, rebirth, inner calling, absolution.",
        reversed: "Self-doubt, inner critic, ignoring the call.",
        prediction: "A time for self-evaluation. Answer your higher calling.",
        energy: "neutral"
    },
    {
        id: 21,
        name: "The World",
        upright: "Completion, integration, accomplishment, travel.",
        reversed: "Seeking personal closure, short-cuts, delays.",
        prediction: "A cycle reaches successful completion. You are whole.",
        energy: "positive"
    }
];
