# AI Trip Planner


This is an intelligent travel planning application that leverages Google's Gemini AI to create personalized trip itineraries. Users can input their destination, travel duration, budget, and group size to receive a comprehensive travel plan, complete with hotel recommendations and a day-by-day schedule of activities.

## Features

- **AI-Powered Itinerary Generation:** Generates custom travel plans using Google's Gemini AI based on user preferences.
- **Google Authentication:** Securely sign in with your Google account to create, save, and access your travel plans.
- **Personalized Trip Creation:** Specify your destination, number of days, budget (Cheap, Moderate, Luxury), and travel companions (Solo, Couple, Family, Friends).
- **Detailed Trip View:** View your generated itinerary, which includes:
    - An overview of your trip selections.
    - A list of recommended hotels with names, addresses, prices, and ratings.
    - A day-by-day plan with suggested places to visit, including details, timings, and ticket pricing.
- **My Trips Dashboard:** A personal dashboard to view all your previously generated trips.
- **Dynamic Content:** Fetches real-world images for destinations and hotels using the Google Places API.
- **Interactive Links:** Hotels and places to visit link directly to their location on Google Maps.

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS, shadcn/ui
- **AI Model:** Google Gemini AI (`@google/generative-ai`)
- **Database & Backend:** Firebase (Firestore)
- **Authentication:** Google OAuth (`@react-oauth/google`)
- **Routing:** React Router (`react-router-dom`)
- **APIs:** Google Places API

## Getting Started

To run this project locally, follow these steps.

### Prerequisites

- Node.js and npm (or a compatible package manager) installed on your machine.
- A Google Cloud Platform project with the Gemini API and Places API enabled.
- A Firebase project for database services.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/adityaa1205/Ai-Trip-Planner.git
    cd Ai-Trip-Planner
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add the following keys with your own API credentials:

    ```
    VITE_GOOGLE_PLACE_API_KEY=YOUR_GOOGLE_PLACES_API_KEY
    VITE_GOOGLE_GEMINI_AI_API_KEY=YOUR_GOOGLE_GEMINI_API_KEY
    VITE_GOOGLE_AUTH_CLIENT_ID=YOUR_GOOGLE_OAUTH_CLIENT_ID
    ```

4.  **Configure Firebase:**
    Navigate to `src/services/firebaseConfig.jsx`. Replace the existing `firebaseConfig` object with the configuration object from your own Firebase project.

    You can find this configuration in your Firebase project settings:
    *Project Settings > General > Your apps > Web app > SDK setup and configuration*.

5.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Project Structure

```
/
├── public/                 # Static assets
└── src/
    ├── assets/             # Image assets
    ├── components/         # Reusable UI components (custom & shadcn/ui)
    ├── constants/          # Application constants (e.g., AI prompts, form options)
    ├── create-trip/        # Logic and UI for the trip creation form
    ├── lib/                # Utility functions
    ├── my-trips/           # Components for the 'My Trips' page
    ├── services/           # API clients (Firebase, Google AI, Global API)
    ├── view-trip/          # Components for displaying the detailed trip itinerary
    ├── App.jsx             # Main App component
    └── main.jsx            # Application entry point and router setup
