# Intern Job Tracker

A full-stack web application to manage and track internship/job applications. Built with Node.js, Express, MongoDB, and a minimal frontend.

---

## 🧪 API Testing with Keploy AI

This project integrates **Keploy**, an AI-powered API testing tool. It auto-generates test cases from real-time traffic and seamlessly fits into a CI/CD pipeline.

---

## 🔧 OpenAPI Schema

The API endpoints are documented using the `openapi.yaml` file, located in the project root.

Example API paths:
- POST /api/interns
- GET /api/interns
- DELETE /api/interns/:id

Refer to [openapi.yaml](./openapi.yaml) for the full schema.

---

## ⚙️ Keploy Configuration

We have added a `keploy.yml` config file that defines:
- Application port
- Command to run server
- Path to OpenAPI schema

📄 File: `keploy.yml`

---

## 🚀 CI/CD Integration with GitHub Actions

Keploy API testing is integrated into the CI/CD pipeline using GitHub Actions.

📄 File: `.github/workflows/keploy-ci.yml`

This workflow:
- Installs dependencies
- Starts MongoDB
- Launches the backend
- Executes Keploy test recording & testing steps

✅ **CI/CD Status**: Passing

---

## 📸 Keploy Dashboard Test Reports

> Replace the image below with your own screenshot

![Keploy Dashboard Screenshot](https://via.placeholder.com/800x400?text=Keploy+Test+Dashboard)

---

## 📝 Blog Post

Read about my experience using Keploy for automated API testing:

👉 [Blog Post on Keploy Testing](https://your-blog-link-here.com)

---

## 👨‍💻 Author

**Pratigyan Pattanayak**

---

## 📂 Project Structure

intern-job-tracker/
├── backend/
│   ├── app.js
│   ├── routes/
│   └── tests/
├── frontend/
├── keploy.yml
├── openapi.yaml
└── .github/
    └── workflows/
        └── keploy-ci.yml

---

## 📌 How to Contribute

1. Fork the repo
2. Clone your fork
3. Create a new branch
4. Make changes and commit
5. Push and create a PR

---

## 📃 License

MIT License
