# End-to-End House Price Prediction App with CI/CD

![CI/CD Pipeline](https://github.com/ramwijesooriya/Home_Price_prediction_MLproject/actions/workflows/docker-publish.yml/badge.svg)
![Python](https://img.shields.io/badge/Python-3.10-blue)
![Docker](https://img.shields.io/badge/Docker-blue?logo=docker&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-black?logo=flask&logoColor=white)
![React](https://img.shields.io/badge/React-blue?logo=react&logoColor=61DAFB)
![Nginx](https://img.shields.io/badge/Nginx-green?logo=nginx&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-EC2-orange?logo=amazonaws&logoColor=white)

A full-stack, Dockerized machine learning application that predicts house prices in Bengaluru. This project is built with a production-grade, automated CI/CD pipeline that deploys all changes to a live AWS server.

---

## 🚀 Live Demo

You can access the live application here:
http://13.60.99.54:8080/
(http://YOUR_SERVER_IP:8080)

---

## 🏛️ Application Architecture

This project is not just a single application but a system of microservices, containerized with Docker and deployed with a fully automated workflow.

 Request Flow
1.  User > visits the domain (or IP).
2.  Nginx (Frontend Container) serves the static ui application.
3.  The React app makes an API call to `/api/predict_home_price`.
4.  Nginx acts as a reverse proxy, forwarding this request to the **Backend Container**.
5.  Gunicorn (production server) receives the request and passes it to the Flask app.
6.  The Flask app uses the Scikit-learn model to get a prediction and returns it as JSON.
7.  The response travels back to the user's browser, which displays the estimated price.

CI/CD Workflow (The Automation)
1.  Code: I push a new commit to the `main` branch on GitHub.
2.  CI (GitHub Actions): This push automatically triggers a GitHub Actions workflow.
3.  Build & Push:** The workflow builds new Docker images for both the `frontend` and `backend` (using the `Dockerfile` in each).
4.  Store (Docker Hub): The new images are tagged and pushed to my Docker Hub registry.
5.  CD (Watchtower): On the AWS EC2 server, a container called **Watchtower** is constantly running. It detects the new images on Docker Hub.
6.  Deploy: Watchtower automatically pulls the new images and gracefully restarts the `frontend` and `backend` containers with zero downtime.

---

## 🛠️ Tech Stack

Backend
* Python: Core programming language.
* Flask: Micro-framework for the API.
* Scikit-learn: For loading and using the pickled ML model.
* Gunicorn: Production-grade WSGI server to run the Flask app.

Frontend
* React.js: (or plain HTML/CSS/JavaScript as in your files) for the user interface.
* jQuery: For simplifying AJAX (API) calls.
* Nginx: To serve the static frontend files (HTML, CSS, JS).

DevOps (Infrastructure & Automation)
* Docker: To containerize the frontend and backend services.
* Docker Compose: To orchestrate and run the multi-container application.
* Nginx (Reverse Proxy): Single entry point to route traffic (e.g., `/api` to backend, `/` to frontend).
* GitHub Actions: For the automated CI/CD pipeline (build, push).
* Docker Hub: To host the Docker images.
* AWS EC2: Cloud server (VPS) to host the entire application.
* Watchtower: For continuous deployment (automating the "pull & restart" step).

---
