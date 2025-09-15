# Weekend Armory - A Game of Glorious Doom

**An ultra-minimalist, high-stakes, run-based RPG about forging the perfect weapon... and knowing when to let it go.**

---

## Table of Contents

- [Core Gameplay Concepts](#core-gameplay-concepts)
- [The Signature Mechanic: A Faustian Bargain](#the-signature-mechanic-a-faustian-bargain)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Architectural Overview](#architectural-overview)
- [Project Roadmap (Future Plans)](#project-roadmap-future-plans)
- [License](#license)

## Core Gameplay Concepts

The goal is to survive as long as you can in an endless series of auto-battles. Your success is determined entirely by the weapon you forge during the **Preparation Phase** between each fight. There is no meta-progression; each run is a fresh test of your strategic decision-making.

The Preparation Phase is organized around six key "stations":

*   **Reforge Station:** The heart of the game. Spend points to reroll your weapon's stats and trait slots.
*   **Marketplace:** Purchase powerful Traits to socket into your weapon, including game-breaking multiplicative and damage conversion effects.
*   **Shop:** Buy entirely new, clean-slate weapons. Essential for when your current weapon becomes too expensive to upgrade.
*   **Armory:** A personal storage for your weapons, allowing you to swap between different elemental tools to counter specific threats.
*   **Kitchen:** Consume meals to gain powerful, temporary buffs for the next fight. A tactical toolkit for overcoming difficult hurdles.
*   **Wager Station:** A gambling station where you can place an ante to multiply your point rewards on a successful fight.

## The Signature Mechanic: A Faustian Bargain

The most important decision in any run is applying your **Signature** to a weapon.

*   **The Boon:** The Signature is a free, one-time action that instantly **halves the effective points spent** in all future evolution calculations for that weapon, making it dramatically cheaper to upgrade.
*   **The Curse:** A Signed weapon is doomed. To evolve it, you must perform **more rerolls than you did in the previous evolution cycle**. This escalating commitment means the cost will eventually become unsustainable.

This transforms the game into a race against time. You must leverage your weapon's period of immense power to prepare its successor before it becomes a beautiful, useless relic. True masters of the game know not only how to build a hero, but when to retire it.

## Tech Stack

This project is built with a focus on robustness and a clean separation of concerns.

*   **Language:** TypeScript
*   **Error Handling:** `ts-results-es` for explicit, functional error handling.
*   **Data Validation:** `zod` for robust runtime schema validation and type inference, providing a single source of truth for all data structures.
*   **Core Logic:** Built with pure, composable functions.
*   **UI Framework:** None. The core logic is a UI-agnostic engine. It could be plugged into a command line, simple HTML/CSS, or a modern framework like Vue or React.

## Getting Started

To get the project running locally, follow these steps:

1.  **Prerequisites:**
    *   Node.js (v18.x or later)
    *   `npm`

2.  **Installation:**
    ```bash
    git clone [your-repo-url]
    cd [project-name]
    npm install
    ```

## Architectural Overview

The codebase is designed as a data-driven engine with a strictly enforced functional approach.

*   **Data-Driven:** The entire game state is contained within a single, well-defined `IPlayer` object.
*   **Pure Functions:** All game logic consists of pure functions that take the current state object as input and return a new, updated state object. This eliminates side effects and makes the system highly predictable and testable.
*   **Schema-First Design:** The project follows a strict schema-first architecture. Each domain's data shape is defined in a `*.schema.ts` file using `zod`. The TypeScript types in `*.types.ts` are then inferred directly from these schemas, ensuring the types and validation rules can never drift apart.

## Project Roadmap (Future Plans)

This initial version represents a complete, "vertical slice" of the core mechanics. Future additions we have considered include:

*   **Defensive Systems:** Introducing armor, shields, and defensive stats.
*   **Enemy Complexity:** Adding enemy traits and special abilities.
*   **Procedural Naming:** A system for renaming weapons on evolution.
*   **Expanded Content:** More meal types, trait effects, and reforge options.

## License

This project is licensed under the [LGPL 3.0](LICENSE).