# Potara Backend API

Node.js/Express backend with Prisma ORM, PostgreSQL, and JWT authentication.

## Setup

```bash
npm install
npm run build
npm run dev
```

## Environment Variables

```env
DATABASE_URL=postgresql://username:password@localhost:5432/database
JWT_SECRET=your-jwt-secret-key
FRONTEND_URL=http://localhost:3000
GEMINI_API_KEY=your-gemini-api-key
MINIO_ENDPOINT=localhost
MINIO_PORT=9000
MINIO_ACCESS_KEY=admin
MINIO_SECRET_KEY=password
MINIO_BUCKET_NAME=potara-images
```

## Authentication API

### Register User
**POST** `/api/auth/register`

Creates a new user account and returns authentication cookie.

**Request:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

**Error Responses:**
- `400`: Missing required fields or password too short
- `409`: Email already exists
- `500`: Internal server error

### Login User
**POST** `/api/auth/login`

Authenticates user and returns authentication cookie.

**Request:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

**Error Responses:**
- `400`: Missing email or password
- `401`: Invalid credentials
- `500`: Internal server error

### Logout User
**POST** `/api/auth/logout`

Clears authentication cookie.

**Request:** No body required

**Success Response (200):**
```json
{
  "success": true,
  "message": "Logout successful"
}
```

## Image Processing API

### Upload Image
**POST** `/api/upload`

Uploads image and processes it with AI to create geometric shapes version.

**Request:** Multipart form data with `image` field

## Security Features

- **Password hashing**: Argon2 for secure password storage
- **JWT tokens**: 7-day expiration with HTTP-only cookies
- **CORS**: Configured with credentials support
- **Cookie security**: HTTP-only, secure (HTTPS), SameSite strict
- **Input validation**: Required field validation and password length requirements

## Database Schema

Uses Prisma ORM with PostgreSQL. Main models:
- **User**: Authentication and user data
- **Reference**: Image references and processed versions
- **Drawing**: User drawings linked to references