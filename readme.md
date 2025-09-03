# Todo List Application

A simple Todo List application built using **React.js (frontend)** and **Node.js with Express (backend)**. This application allows users to add, delete, update, and filter tasks.

## Features

✅ Add new todos  
✅ Mark todos as completed  
✅ Edit existing todos  
✅ Delete todos  
✅ Filter todos by status (All, Active, Completed)  
✅ Responsive UI with modern design  

## Tech Stack

- **Frontend:** React.js (Material UI for styling)
- **Backend:** Node.js, Express.js
- **Data Storage:** In-memory storage (No database required)

---

## **Getting Started**

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/todo-app.git
cd todo-app
```

---

## **Backend Setup**

### 2️⃣ Navigate to Backend Folder
```sh
cd backend
```

### 3️⃣ Install Dependencies
```sh
npm install
```

### 4️⃣ Start the Backend Server
```sh
npm start
```

> The backend will run on `https://todo-list-app-70me.onrender.com/api'`

---

## **Frontend Setup**

### 5️⃣ Navigate to Frontend Folder
```sh
cd ../frontend
```

### 6️⃣ Install Dependencies
```sh
npm install
```

### 7️⃣ Start the Frontend Application
```sh
npm start
```

> The frontend will run on `http://localhost:3000`

---

## **API Endpoints**

| Method | Endpoint        | Description              |
|--------|----------------|--------------------------|
| GET    | /api/todos     | Fetch all todos         |
| POST   | /api/todos     | Add a new todo          |
| PUT    | /api/todos/:id | Update a todo           |
| DELETE | /api/todos/:id | Delete a todo           |

---

## **Customization**
- Modify `styles.css` for UI changes.
- Update `server.js` for backend enhancements.
- Change API endpoints in `TodoList.js` (React) if needed.

---

## **Deployment**

### 🚀 Deploy Backend (Express.js)
1. Use **Render**, for hosting.
2. Ensure `CORS` is enabled in `server.js`.
3. Deploy using:
   ```sh
   git push origin main
   ```

### 🚀 Deploy Frontend (React.js)
1. Use **Vercel**, **Netlify**, or **GitHub Pages**.
2. Build the project:
   ```sh
   npm run build
   ```
3. Deploy using Vercel/Netlify CLI or GitHub Actions.

---

## **Contributing**
Feel free to contribute! Fork the repo, make changes, and submit a pull request. 🚀


