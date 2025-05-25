# Maa Kali Hardware - Enterprise CMS Solution

![Project Banner](https://via.placeholder.com/1200x400?text=Maa+Kali+Hardware+CMS)  
_A complete Content Management System for hardware e-commerce with blog capabilities_

## 🌟 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Running the Application](#running-the-application)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Authentication Flow](#-authentication-flow)
- [Payment Integration](#-payment-integration)
- [Image Management](#-image-management)
- [State Management](#-state-management)
- [Acknowledgements](#-acknowledgements)

## 📌 Project Overview

Maa Kali Hardware CMS is a full-featured content management system designed for hardware e-commerce businesses with:

- **Admin Dashboard**: Complete CRUD operations for products, blogs, and customer messages
- **Secure Authentication**: JWT with access/refresh token implementation
- **E-commerce Features**: Online payment processing via eSewa
- **Media Management**: Cloudinary integration for image uploads and delivery
- **Scalable Architecture**: Modular codebase designed for future expansion

## ✨ Key Features

### Core Functionality

- **Multi-model CRUD Operations**
  - Product catalog management
  - Blog content system
  - Customer message handling
- **Role-based Access Control**
  - Admin privileges
  - Editor permissions
  - Viewer access

### Advanced Capabilities

- **JWT Authentication System**
  - Access token (short-lived)
  - Refresh token (long-lived)
  - Automatic token rotation
- **Payment Gateway Integration**
  - eSewa payment processing
  - Transaction history
  - Payment verification
- **Performance Optimizations**
  - Tanstack Query for efficient data fetching
  - Zustand for lightweight state management
  - Image optimization via Cloudinary

## 🛠️ Technology Stack

### Frontend

| Technology     | Purpose           | Version |
| -------------- | ----------------- | ------- |
| Next.js        | React framework   | 13.4+   |
| TypeScript     | Type safety       | 4.9+    |
| Tailwind CSS   | Utility-first CSS | 3.3+    |
| Zustand        | State management  | 4.0+    |
| Tanstack Query | Data fetching     | 4.0+    |

### Backend

| Technology     | Purpose              | Version |
| -------------- | -------------------- | ------- |
| Next.js API    | Serverless functions | 13.4+   |
| MongoDB        | Database             | 5.0+    |
| Mongoose       | ODM for MongoDB      | 7.0+    |
| Cloudinary SDK | Image management     | 1.0+    |

### DevOps

| Technology | Purpose         |
| ---------- | --------------- |
| Prettier   | Code formatting |

## 🏗️ System Architecture

```mermaid
graph TD
    A[Client] --> B[Next.js Frontend]
    B --> C[Next.js API Routes]
    C --> D[MongoDB]
    C --> E[Cloudinary]
    C --> F[eSewa API]
    D --> G[(Database)]
    E --> H[(Image CDN)]
    F --> I[(Payment Gateway)]
```

# Database

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/reponame?retryWrites=true&w=majority

# Authentication

NEXT_ACCESS_TOKEN_SECRET=your_strong_access_token_secret_here
NEXT_REFRESH_TOKEN_SECRET=your_strong_refresh_token_secret_here

# Cloudinary

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# eSewa (optional)

NEXT_PUBLIC_ESEWA_MERCHANT_ID=your_merchant_id
ESEWA_SECRET_KEY=your_secret_key

## ✨ Key Features

### 🖥️ Content Management System

- **Blog Management**

  - Create, Read, Update, Delete blog posts
  - Rich text editor with image embedding
  - Category and tag organization
  - Scheduled publishing

- **Product Management**

  - Full product CRUD operations
  - Inventory tracking system
  - Multiple product variants (size/color)
  - Pricing and discount management

- **Customer Messages**
  - Incoming message dashboard
  - Status tracking (New/In Progress/Resolved)
  - Admin response system
  - Message archiving

### 🛒 E-Commerce Functionality

- **Shopping Cart System**

  - Persistent cart across sessions
  - Guest checkout option
  - Cart item quantity adjustment
  - Real-time price calculation

- **Order Processing**
  - Secure checkout flow
  - Order confirmation emails
  - Order status tracking
  - Purchase history for users

### 💬 Client Communication

- **Contact System**

  - Customer-facing contact form
  - Automated receipt confirmation
  - File attachment support
  - Spam protection

- **Admin Tools**
  - Unified message center
  - Bulk action support
  - Customer communication history
  - Export message data

### 🔐 Security Features

- JWT authentication for all CRUD operations
- Role-based access control
- CSRF protection
- Data validation on all endpoints

### 🚀 Performance Optimizations

- Image optimization via Cloudinary CDN
- Tanstack Query for efficient data fetching
- Zustand for lightweight state management
- Code-splitting for faster page loads
