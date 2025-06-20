Intern/Job Tracker – Full-Stack Mini Project

This project is a simple and practical web app to track internship and job applications using:
- Node.js + Express
- MongoDB Atlas
- HTML + CSS + JavaScript

## Features
- Add new applications (Name, Company, Role, Status)
- View all applications in a table
- Delete an application
- (Optional) Update application status

## Backend API – Express + MongoDB

| Method | Endpoint                | Description              |
|--------|-------------------------|--------------------------|
| POST   | `/api/applications`     | Add a new application    |
| GET    | `/api/applications`     | View all applications    |
| PUT    | `/api/applications/:id` | Update status            |
| DELETE | `/api/applications/:id` | Delete an application    |

## Database
- MongoDB Atlas (cloud)
- Connected using `mongoose`
- Schema: `studentName`, `company`, `role`, `status`, `appliedOn`

## How to Run

### Backend
```bash
cd backend
npm install
node server.js
