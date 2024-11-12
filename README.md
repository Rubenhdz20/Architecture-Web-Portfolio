# **Architecture Web Portfolio**

[Live Demo](https://marianaarquitecta.com/) | [GitHub Repository](https://github.com/Rubenhdz20/Architecture-Web-Portfolio)

---

### **Table of Contents**
1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
5. [Usage](#usage)
6. [Screenshots](#screenshots)
7. [Project Structure](#project-structure)
8. [Contributing](#contributing)
9. [License](#license)

---

## **Overview**

Architecture Web Portfolio is a single-page application (SPA) designed to showcase the work and architectural projects of a client. Built with React and Vite, the application allows users to navigate through various projects seamlessly, with a focus on responsive design and optimal performance. The project highlights the client’s skills, services, and past work in a visually engaging and user-friendly manner.

---

## **Features**

- **Dynamic Project Content**: Each project dynamically loads based on URL parameters, ensuring users can directly navigate to any project.
- **Responsive Design**: Optimized for desktop, tablet, and mobile views for accessibility across devices.
- **SEO Optimization**: Includes features like meta tags and unique URLs for each project to improve search engine visibility.
- **Intuitive Navigation**: Custom navigation components built for an easy, fluid browsing experience.
- **Data Fetching**: Uses custom hooks to fetch and display data in real-time without performance compromises.

---

## **Tech Stack**

- **Frontend**: React, Vite, JavaScript
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Other Tools**: Figma (for design), Git, Jest (for testing)

---

## **Getting Started**

### **Prerequisites**

- Node.js and npm installed on your local machine.

### **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Rubenhdz20/Architecture-Web-Portfolio.git
   cd Architecture-Web-Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Run tests**:
   ```bash
   npm test
   ```

---

## **Usage**

- **Navigation**: Use the project slides to switch between project names.
- **Viewing Projects**: Click on a project image to be redirected to view its details, description, and images.
- **Interactive Features**: Navigate over project cards for a preview and additional information.

---

## **Screenshots**

![Homepage Screenshot](path/to/homepage-screenshot.png)
*Caption: The main landing page, showcasing recent projects and client services.*

![Project Detail Screenshot](path/to/project-detail-screenshot.png)
*Caption: Detailed view of a selected project, including descriptions, client testimonials, and gallery.*

---

## **Project Structure**

```plaintext
Architecture-Web-Portfolio/
├── public/
│   └── Altana/                            # Images of the project 
|   |-- Casa 950                           # Images of the project 
|   |-- Fuentes del Molino                 # Images of the project
|   |-- San Pieri                          # Images of the project
|   |-- Assets                             # Svgs  
├── src/
│   ├── components/            # About Us - Contact - Hero Section - Mobile Menu - Our Work - Project Context - Project Details - What we do 
│   ├── layout/                 # Entry point
│   ├── routes/                 # Navigation structure
│   ├── App.jsx                 # Main App component
│   ├── Main.jsx                 # Main App component
│   └── styleguide.css           # Styles 
├── .gitignore
├── README.md
├── index.html
├── package.json
├── vite.config

```

---

## **Contributing**

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

For more details, see the [Contributing Guidelines](CONTRIBUTING.md).

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### **Additional Tips**

- **Consider adding a “Challenges Faced” or “Future Improvements” section** if it’s a project you’re proud of and would like to iterate on.
- **Use Markdown badges** to show technologies, dependencies, or build status (e.g., ![React Badge](https://img.shields.io/badge/React-18.0-blue)).
- **Include links to any related repositories** if this project depends on or interacts with other projects.

---
