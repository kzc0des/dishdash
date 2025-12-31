# 🍊 Dish Dash

## 📖 Description
* **DishDash** is a hybrid app for finding meals or sharing your own recipes.
* It works on mobile, tablet, and desktop screens.
* It uses **Capacitor** to turn the Angular web app into a native mobile app (iOS/Android).

## ✨ Features
* 🖼️ **Landing Page**: Search screen with food images.
* 🔍 **Meal Discovery**: Find food by name, cuisine, or ingredients.
* 🔐 **User Accounts**: Sign up or log in to manage your posts.
* 🍳 **Dish Creation**: Upload your own meals to the list.
* 📱 **Cross-Platform**: Different layouts for mobile and desktop.

## 🛠️ Tech Stack

### 🎨 Frontend (Web & Mobile)
* **Framework**: Angular 18+ (Standalone Components, Signals)
* **Styling**: Tailwind CSS
* **Mobile Runtime**: Capacitor

### ⚙️ Backend (API)
* **Framework**: ASP.NET Core Web API (.NET 8)
* **Authentication**: JWT Bearer Tokens + Identity Core
* **Documentation**: Swagger/OpenAPI

### 🗄️ Database
* **RDBMS**: Microsoft SQL Server
* **ORM**: Entity Framework Core

## 📡 API Endpoints
* **GET** /api/meals/search?q={query} - Search meals.
* **POST** /api/meals - Add a new meal (Requires Auth).
* **POST** /api/auth/login - Authenticate user.
