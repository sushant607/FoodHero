# FoodHero

**FoodHero** is a web application designed to reduce food waste by connecting those with surplus food (like restaurants, households, or retailers) to individuals or organizations in need. The platform makes it easy to donate leftover food, discover available food in your area, and contribute to sustainability efforts.

## Features

- **Two-sided platform:**  
  - **Donors** (Food Heroes): Can post surplus food with details, pickup time, and location.
  - **Recipients**: Find and claim food offers nearby, filtered by location and needs.
- **User Authentication:** Secure login and account creation for managing donations and pickups.
- **Donation Management:** Easy interface for tracking donated and received items.
- **Impact Tracking:** See how much food was saved and your positive environmental impact (CO₂ and waste reductions).
- **Responsive Design:** Works on desktops and mobiles.
- **Tech Stack:** Backend (Node.js/Express or similar), Frontend (likely React.js), and Database.
- **Community Collaboration:** Contribute and suggest features via issues and pull requests.

## Project Structure

```
FoodHero/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── ...
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   └── ...
├── README.md
└── ...
```

## Getting Started

### Prerequisites

- **Node.js** (v14+ recommended)
- **npm** (v6+)
- **MongoDB** (or similar NoSQL database)

### Installation

**1. Clone the repository:**

```bash
git clone https://github.com/sushant607/FoodHero.git
cd FoodHero
```

**2. Install dependencies:**

- *Backend:*
  ```bash
  cd backend
  npm install
  ```
- *Frontend:*
  ```bash
  cd ../frontend
  npm install
  ```

**3. Environment Variables:**

- Setup `.env` files in `backend` and `frontend` as needed (API keys, DB connection strings).
  Example for backend:
  ```
  MONGO_URI=your_mongodb_uri
  JWT_SECRET=your_secret
  ```

**4. Running the app:**

- *Start backend server:*
  ```bash
  cd backend
  npm start
  ```
- *Start frontend development server:*
  ```bash
  cd ../frontend
  npm start
  ```

Open `http://localhost:3000` in your browser for the frontend interface.

## Usage Guide

- **Register/Login** as donor or recipient.
- **Donor:** Add new food donation entries, set details, manage your offers.
- **Recipient:** Browse available food, filter by proximity or dietary need, claim items.
- **Track your impact** on the dashboard.

## Technologies Used

| Area       | Technology            |
|------------|----------------------|
| Backend    | Node.js, Express     |
| Frontend   | React.js, CSS, HTML  |
| Database   | MongoDB (NoSQL)      |
| Auth       | JWT, bcrypt          |
| Deployment | Heroku/Vercel/Render (user configurable) |
