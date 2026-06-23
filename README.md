<div align="center">
  <h1>💰 Expense Tracker</h1>
  <p><strong>Track your income & expenses with beautiful visualizations</strong></p>

  <p>
    <a href="https://expanse-tracker-inky.vercel.app/" target="_blank">🌐 Live Demo</a>
  </p>

  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tools&logoColor=white" />
</div>

---

## ✨ Features

- **🔐 User Authentication** — JWT-based login/signup with "Remember Me" support
- **📊 Interactive Dashboard** — Gauges, expense distribution pie chart, and financial overview at a glance
- **📈 Income Tracking** — Add, edit, delete income records; view trends with bar charts; filter by time frame
- **📉 Expense Tracking** — Add, edit, delete expense records; view trends with area charts; filter by category/time
- **⏱️ Time Frame Filtering** — Switch between daily, weekly, monthly, and yearly views
- **📤 Export to Excel** — Download income/expense data as `.xlsx` files
- **👤 Profile Management** — Update name, email, and password with real-time validation
- **🎨 Beautiful UI** — Built with Tailwind CSS, Framer Motion animations, and Lucide icons
- **📱 Responsive Design** — Works seamlessly on desktop and mobile

## 🛠️ Tech Stack

| Layer      | Technology                                                   |
| ---------- | ------------------------------------------------------------ |
| **Frontend** | React 19, Vite, Tailwind CSS v4, Recharts, Framer Motion, Axios |
| **Backend**  | Express.js, Mongoose, JWT, bcryptjs                          |
| **Database** | MongoDB                                                      |

## 📁 Project Structure

```
expense-tracker/
├── backend/
│   ├── config/          # DB connection
│   ├── controllers/     # Route handlers
│   ├── middleware/       # Auth middleware
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API route definitions
│   └── server.js        # Entry point
├── frontend/
│   ├── src/
│   │   ├── assets/      # Colors, dummy data, styles
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Dashboard, Income, Expense, Profile
│   │   └── utils/       # Export helpers
│   └── index.html
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB (local or Atlas)

### Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd expense-tracker

# Backend setup
cd backend
npm install
# Create a .env file with:
#   DB_URL=<your-mongodb-connection-string>
#   JWT_SECRET=<your-jwt-secret>
#   FRONTEND_URL=http://localhost:5173
npm run dev

# Frontend setup (new terminal)
cd frontend
npm install
# Create a .env file with:
#   VITE_API_URL=http://localhost:4000
npm run dev
```

The app will be available at `http://localhost:5173`.

## 🔌 API Endpoints

| Method | Endpoint                  | Description          |
| ------ | ------------------------- | -------------------- |
| POST   | `/api/user/register`      | Register a new user  |
| POST   | `/api/user/login`         | Login                |
| GET    | `/api/user/me`            | Get current profile  |
| PUT    | `/api/user/update`        | Update profile       |
| POST   | `/api/income/add`         | Add income           |
| PUT    | `/api/income/update/:id`  | Update income        |
| DELETE | `/api/income/delete/:id`  | Delete income        |
| GET    | `/api/income/overview`    | Income overview      |
| GET    | `/api/income/downloadexcel` | Export income      |
| POST   | `/api/expense/add`        | Add expense          |
| PUT    | `/api/expense/update/:id` | Update expense       |
| DELETE | `/api/expense/delete/:id` | Delete expense       |
| GET    | `/api/expense/overview`   | Expense overview     |
| GET    | `/api/expense/downloadexcel` | Export expense    |
| GET    | `/api/dashboard`          | Dashboard overview   |

## 🌐 Deployment

- **Frontend**: [expanse-tracker-inky.vercel.app](https://expanse-tracker-inky.vercel.app/) (hosted on Vercel)
- **Backend**: Deployed separately with environment variables configured

---

<div align="center">
  <p>Built using React & Express</p>
</div>