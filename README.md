
---

# Django-React Student Management System  

## Description  
The **Django-React Student Management System** is a full-stack application that enables users to manage student records. The backend is built with Django, and the frontend is developed using React. The project provides functionality for adding, editing, deleting, and viewing student details.  

## Features  
- **CRUD Operations**: Create, Read, Update, and Delete student records.  
- **Frontend**: React with Bootstrap for a responsive UI.  
- **Backend**: Django REST Framework with SQLite for the database. 

## Technologies  
- **Backend**: Django, Django REST Framework  
- **Frontend**: React, Vite, Bootstrap  
- **Database**: SQLite (development)  

## Setup Instructions  

### Backend Setup  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/Hassan25220/Student-Management-System.git  
   cd student-management-system/backend  
   ```  

2. Create and activate a virtual environment:  
   ```bash  
   python -m venv venv  
   ```  
   - On Windows:  
     ```bash  
     .\venv\Scripts\activate  
     ```  
   - On macOS/Linux:  
     ```bash  
     source venv/bin/activate  
     ```  

3. Install dependencies:  
   ```bash  
   pip install -r requirements.txt  
   ```  

4. Apply migrations:  
   ```bash  
   python manage.py migrate  
   ```  

5. Start the server:  
   ```bash  
   python manage.py runserver  
   ```  
   The backend will run on `http://localhost:8000`.  

### Frontend Setup  
1. Navigate to the frontend directory:  
   ```bash  
   cd frontend  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Start the server:  
   ```bash  
   npm run dev  
   ```  
   The frontend will run on `http://localhost:5173`.  

## Run and Test  

### Backend  
- Run the server:  
  ```bash  
  python manage.py runserver  
  ```  
- Access the API at `http://localhost:8000`.  

### Frontend  
- Run the React development server:  
  ```bash  
  npm run dev  
  ```  
- Open `http://localhost:5173` in your browser.  

## How to Use  

- **Add Students**: Fill in the student details and click "Add."  
- **Update Students**: Select a student and edit their information.  
- **Delete Students**: Remove a student from the list.  
- **View Details**: See all student records in the table.  

## License  
This project is open-source and available under the MIT License.  

---

