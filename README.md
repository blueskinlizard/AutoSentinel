# 🔫 AutoSentinel: Gun Detection with a Web Dashboard

## 🧠 Overview

AutoSentinel combines server-side video processing with web-based visualization tools to deliver a near real-time firearm detection solution for schools and secure facilities. The system ingests video feeds, runs detections using a high-performance computer vision model (yolov11m), and broadcasts detected images from a surveilance stream to a web dashboard with actionable timestamps of where any guns were detected.

---
## 🧩 Multi-User & Multi-Camera Architecture

AutoSentinel is built for scalable deployment across institutions such as schools, campuses, or office buildings—supporting multiple users, real-time surveillance feeds, and modular monitoring dashboards.

### 👥 Multi-User Support

#### User Accounts & Authentication
- Secure authentication system with hashed passwords.
- Admins can register new users, assign roles, and manage system access.

#### Access Control
- Feeds and detection logs are only accessible to authorized users.
- Access permissions are enforced at the database.

#### Role-Based Permissions (Soon to be implemented)
- **Admins**: Manage camera feeds, user accounts, and system-wide settings.
- **Guests**: Read-only access to specific feeds or events.

---

### 🎥 Multi-Camera Feed Management

#### Dynamic Camera Registration
- Camera streams can be registered and configured via the surveilance page for a respective dashboard.

#### Stream Monitoring Dashboard
- Each feed is displayed in a dedicated dashboard tile.
- Users can:
  - View recent detection snapshots and status
  - Filter feeds by location, detection time, or returned yolov11 confidence scale (Soon to be implemented).

## 🧱 Tech Stack

### 🖥️ Backend (Server-Side)

- **Node.js + Express.js**  
  - Core REST API layer for detection events, logs, and camera metadata.
  - Structured MVC-style service separation for clean logic management.

- **Custom Video Processor Service (Python)**  
  - Script that runs firearm detection on video streams using a YOLOv8 model.
  - Communicates with Node.js via child processes for logging and event handling.

- **PostgreSQL**  
  - Stores timestamped detection logs, metadata, and system events.
  - Optimized schema for querying recent detections and historical patterns.
  - 
### 🌐 Frontend (Dashboard)

- **React.js + Vite**  
  - Fast, lightweight SPA with detection feed, camera stream previews, and historical data browsing.
  - Fetches from Postgres via repeated Tanstack query.

- **Material UI (Soon to be implemented)**  
  - Utility-first styling for a responsive and accessible UI.

### ⚙️ Infrastructure & DevOps (Soon to be implemented)

- **Docke
  - Entire system is containerized: web, API, video processor, and database.
  - Easy local spin-up and seamless transition to production deployment.
