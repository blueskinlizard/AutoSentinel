# 🔫 AutoSentinel: Gun Detection with a Web Dashboard

## 🧠 Overview

AutoSentinel combines server-side video processing with web-based visualization tools to deliver a near real-time firearm detection solution for schools and secure facilities (It uploads frames, so it has a detection delay of ~3 seconds). 
The system ingests video feeds, runs detections using a high-performance computer vision model (Yolov11m), and broadcasts detected images from a surveilance stream to a web dashboard with actionable timestamps of where any guns were detected.

---
### Multi-User Support

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

### Multi-Camera Feed Management

#### Camera Registration
- Camera streams can be registered and configured via the surveilance page for a respective dashboard (any detected cameras will automatically be used).

#### Stream Monitoring Dashboard
- Each feed is displayed in a dedicated dashboard tile.
- Users can:
  - View recent detection snapshots and status
  - Filter feeds by location, detection time, or returned Yolov11 confidence scale (Soon to be implemented).

## Tech Stack

### Backend (Server-Side)

- **Node.js + Express.js**  
  - Core REST API layer for detection events, logs, and camera metadata.
  - Structured MVC-style service separation for clean logic management.

- **Custom Video Processor Service (Python)**  
  - Script that runs firearm detection on video streams using a YOLOv11 model.
  - Communicates with Node.js via child processes for logging and event handling.

- **PostgreSQL**  
  - Stores timestamped detection logs, metadata, and system events.
  - Optimized schema for querying recent detections and historical patterns.
### Frontend (Dashboard)

- **React.js + Vite**  
  - Fast, lightweight SPA with detection feed, camera stream previews, and historical data browsing.
  - Fetches from Postgres via repeated Tanstack query.

- **Material UI (Soon to be implemented)**  
  - Utility-first styling for a responsive and accessible UI.

### Infrastructure & DevOps (Soon to be implemented)

- **Docker
  - Entire system is containerized: web, API, video processor, and database.
  - Easy local spin-up and seamless transition to production deployment.
---
## Screenshots
<img width="1367" height="525" alt="image" src="https://github.com/user-attachments/assets/c4c78716-d25c-4535-99b1-f6af9d556909" />
<img width="327" height="275" alt="image" src="https://github.com/user-attachments/assets/2c9b26fc-1809-4b6e-b491-cce5d6dd9cda" />

