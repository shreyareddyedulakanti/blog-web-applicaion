# Blog web application

## Description

This is a travel blog web full-stack web application. The application will allow users to create and view blog posts. Posts will not persist between sessions as no database will be used in this version of the application. I have used an object to hold the data along with one sample blog post.

### Live URL
https://blog-web-application-8lzt.onrender.com/

### API endpoints

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| GET    | `/`              | Get all posts       |
| POST   | `/new`           | Create a new post   |
| PUT    | `/update/:id`    | Update a post       |
| DELETE | `/delete/:id`    | Delete a post       |

Removed the individual page for a blog post. Will add later with read more feature on homepage.

### Project
- Installation
```
mkdir 'blog web application'
cd 'blog web application'
npm i
```