## Stack Overview

- **Frontend:** Vite + React
- **Backend:** Express.js + Prisma
- **Database:** PostgreSQL 17

---

## Project Structure

```
.
├── backend/    # Backend service 
├── frontend/   # Frontend service 
├── docker-compose.yml
```

---

## Services

### 1. Database: `postgres_db`
- Official PostgreSQL 17 image
- Persists data in a Docker volume
- Exposes port **5432**
- Healthcheck ensures readiness before backend starts
- Credentials:
  - DB Name: `postgres_db`
  - User: `admin`
  - Password: `1234`

### 2. Backend: `backend`
- Built from `./backend`
- Exposes port **8000**
- Depends on healthy database
- Loads environment variables from `./backend/.env`

### 3. Frontend: `frontend`
- Built from `./frontend`
- Exposes port **5173**

---

## Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed

### Quick Start

1. **Clone this repository**
   ```bash
   git clone https://github.com/ThomasT-GitHub/frontend-docker-quickstart.git
   cd docker-quickstart
   ```

2. **Start all services**
   ```bash
   docker compose up --build
   ```
   This will build and start the database, backend, and frontend containers.

3. **Access your app**
   - **Frontend:** [http://localhost:5173](http://localhost:5173)
   - **Backend:** [http://localhost:8000](http://localhost:8000)
   - **Database:** Accessible at `localhost:5432` ( via pgAdmin)
