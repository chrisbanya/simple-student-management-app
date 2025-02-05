# simple-student-management-app
Project Assignment: Student Management System in React

Objective
The goal of this project is to assess students' proficiency in React by building a simple Student Management System with the following features:

Listing students in a tabular format.
Viewing student details on a separate page.
Updating student details through a form.
Managing application state using Context API or a state management library (Redux/Zustand).
Implementing authentication with login and logout functionality.
Project Requirements
1. Authentication (Login & Logout)
Implement a login page where users authenticate using dummy credentials (e.g., admin@example.com / password123).
Use Context API, Redux, or Zustand for managing authentication state.
Restrict access to student pages unless the user is logged in.
Provide a logout button to clear authentication state.
2. Student List Page (/students)
Display a list of students in a table format.
Each student should have: ID, Name, Email, Age, Course.
Each student should have a View button that navigates to the Student Detail Page.
Include a Search functionality to filter students by name or course.
3. Student Detail Page (/students/:id)
Display full details of a selected student.
Show student attributes like ID, Name, Email, Age, Course, and Enrollment Date.
Provide an Edit button to navigate to the Update Student Page.
4. Update Student Page (/students/:id/edit)
Display a pre-filled form with the student’s details.
Allow modification of the Name, Email, Age, and Course fields.
Implement form validation (e.g., email format, age as a number, required fields).
Provide a Save button to update student information.
Show success/failure messages upon submission.
5. State Management
Use React Context API, Redux, or Zustand to store student data.
Manage authentication state globally.
Ensure state persists across page navigations.
6. UI & Navigation
Use React Router for navigation between pages.
Ensure a consistent layout with a navigation bar (Home, Students, Logout).
Apply basic styling with CSS or a framework like Tailwind CSS.
Technical Requirements
Use React with Vite as the project setup.
Implement routing using React Router.
Use Context API, Redux, or Zustand for state management.
Validate forms using React Hook Form or native validation.
Handle API calls using Axios or Fetch (dummy JSON data can be used).
Store authentication state in localStorage or sessionStorage.
