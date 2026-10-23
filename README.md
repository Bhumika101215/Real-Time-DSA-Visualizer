Real World DSA Visualizer

An interactive web platform that animates sorting algorithms in real time, so students can see how they work instead of just reading code. Each algorithm also has its own page with an explanation, time and space complexity, and sample code.

Table of Contents
About the Project
Features
Tech Stack
Project Structure
Getting Started
Usage
Future Scope
License
About the Project

Sorting algorithms are hard to learn because they are abstract. Static diagrams and textbook explanations don't show what happens at each step. Real World DSA Visualizer turns that logic into step-by-step bar animations, and pairs each animation with a clear explanation, complexity analysis, and code.

Features
Six sorting algorithms: Bubble, Selection, Insertion, Merge, Quick, and Heap Sort
Real-time visualization with animated bars and a "completed" status message
Custom input: enter your own comma-separated values (for example 34,2,3,1,6) and pick an algorithm
Algorithm deep-dive pages with "How it Works", step-by-step visualization, and tags such as Stable, In-place, and Divide & Conquer
Complexity analysis: best, average, and worst-case time plus space complexity for every algorithm
Code view: sample implementation shown on each algorithm page
Dashboard to browse and quick-start any algorithm
User sign up with name, email, and password (PHP + MySQL)
Dark, responsive UI
Tech Stack
Layer	Technology
Frontend	HTML, CSS, JavaScript
Backend	PHP
Database	MySQL
Tools	Git, GitHub, XAMPP
Project Structure
dsa-visualizer/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── ...
├── php/
│   ├── config.php
│   └── ...
├── database/
│   └── dsa_visualizer.sql
└── README.md

Update this tree to match your actual folders and files.

Getting Started
Prerequisites
XAMPP (or any Apache + PHP + MySQL setup)
A modern web browser
Git
Installation
Clone the repository
bash
   git clone https://github.com/<your-username>/dsa-visualizer.git
Move the project to your server folder
bash
   # For XAMPP, copy into htdocs
   cp -r dsa-visualizer /path/to/xampp/htdocs/
Set up the database
Start Apache and MySQL from the XAMPP control panel

Create a database named dsa_visualizer
Import database/dsa_visualizer.sql
Configure the connection
Open php/config.php and set your MySQL host, username, password, and database name

Create an account from the Sign Up page and log in
Open the Dashboard and choose an algorithm, or go straight to the Visualizer
Enter your own values (comma-separated) and select a sorting algorithm
Click Start Visualization and watch the bars sort step by step
Open an algorithm page to read how it works, check its complexity, and see the code
Future Scope
More data structures and algorithms: searching, linked lists, trees, graphs, dynamic programming
Playback controls: pause, step forward, and speed slider
Code view synced line by line with the animation
Progress tracking for logged-in users
Quizzes and practice questions for each topic
License

This project is for educational purposes. 
