# Blog web application

## Description

This is a travel blog web full-stack web application. The application will allow users to create and view blog posts. Posts will not persist between sessions as no database will be used in this version of the application. I have used an object to hold the data along with one sample blog post.

![HTML5](https://img.shields.io/badge/HTML5-e34c26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-264de4?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-323330?style=for-the-badge&logo=ejs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
[![Deploy on Render](https://img.shields.io/badge/Deployed%20on-Render-00979D?style=for-the-badge&logo=render&logoColor=white)](https://your-app.onrender.com)


### Live URL
https://blog-web-application-8lzt.onrender.com/

### API endpoints

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| GET    | `/`              | Get all posts       |
| GET    | `/blog:id`       | Individual post     |
| POST   | `/new`           | Create a new post   |
| PUT    | `/update/:id`    | Update a post       |
| DELETE | `/delete/:id`    | Delete a post       |
|   -    | Any invalid url  | Page not found      |


### Installation
```
mkdir 'blog web application'
cd 'blog web application'
npm i
```
