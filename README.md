
# 📌 Event Tracker API (Keploy Session 2 Task)

A backend API server built using Node.js, Express.js, and MongoDB Atlas. It allows full CRUD operations on events — part of Keploy Session 2 Task 1.

---

## 🔧 Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Thunder Client** (for API testing)

---

## 📁 Folder Structure

event-tracker-api/
├── models/
│ └── Event.js
├── routes/
│ └── eventRoutes.js
├── server.js
├── .env
├── package.json
└── .gitignore


---

## 📬 API Endpoints

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | `/api/events`      | Get all events      |
| POST   | `/api/events`      | Create new event    |
| GET    | `/api/events/:id`  | Get event by ID     |
| PUT    | `/api/events/:id`  | Update event by ID  |
| DELETE | `/api/events/:id`  | Delete event by ID  |

---

## ⚙️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/hansikachaudhary/event-tracker-api.git
   cd event-tracker-api
2. Install dependencies:
   
   npm install
   
3.Create .env file and add:

   MONGO_URI=your_mongodb_uri
   PORT=5000
   
4.   Start the server:
   
       npm start
 
   
# 📌 Status
     ✅API server with CRUD routes

     ✅MongoDB Atlas integration

     ✅Thunder Client tested

     ✅GitHub setup with .gitignore & README

     
  👩‍💻 Author
**Hansika Chaudhary**  
[LinkedIn](https://www.linkedin.com/in/hansika-chaudhary-243164253/)  
[GitHub](hansikachaudhary)

   

