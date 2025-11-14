# Overview

This codebase implements features from the following Jira issues:

- **SCRUM-454: MVP: Mood Input and Basic Recipe Recommendation**
  - React frontend to submit mood input (text/emoji)
  - Express backend that processes mood input
  - Simple in-memory recipe database linked to moods
  - API endpoints for mood submission and recipe details retrieval

- **SCRUM-455: Post-MVP: User Profiles, Favorites, External API Integration**
  - Planned features include user registration and login
  - Favorites management
  - Integration with external recipe APIs
  - Mood tracking over time for personalized recommendations

- **SCRUM-456: Future Expansion: AI Mood Recognition, Social Sharing, Localization**
  - Planned advanced features like AI based mood recognition from images and voice
  - Social sharing capabilities
  - Multi-language and localization support
  - Community recipe upload and rating system

This initial implementation focuses on SCRUM-454, providing core MVP functionality.

---

## Project Structure

- `backend/server.js`: Node.js Express backend server
- `frontend/src/App.js`: React frontend app

Further backend and frontend modules will be added as additional Jira issues are implemented.

---

## Running the project

- Backend: `node backend/server.js` (Node.js required)
- Frontend: React app created with Create React App tooling

Server listens on port 3000 by default.
