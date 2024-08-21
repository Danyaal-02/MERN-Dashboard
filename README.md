# MERN Stack Project

This project is a full-stack web application built using the MERN stack, which stands for MongoDB, Express.js, React.js, and Node.js. It includes both the frontend and backend components necessary to run a web application.

## Deployed Application

- Backend: [https://mern-dashboard-backend-six3.onrender.com](https://mern-dashboard-backend-six3.onrender.com)
- Frontend: [https://master--mern-dashboard-02.netlify.app/](https://master--mern-dashboard-02.netlify.app/)

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- MongoDB

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/Danyaal-02/MERN-Dashboard.git
    ```

2. Navigate to the project directory:

    ```bash
    cd MERN-Dashboard
    ```

3. Install dependencies for both the frontend and backend:

    ```bash
    cd frontend
    npm install

    cd ../backend
    npm install
    ```

4. Create a `.env` file in the backend directory and add your MongoDB URL and port number:

    ```bash
    MONGOURL=<your-mongodb-url>
    PORT=4000
    ```

5. Database Initialization

    Ensure that your MongoDB server is running.

    Navigate to the backend folder.

    Load the `reports.json` file into the MongoDB database using the `mongoimport` command:

    ```bash
    mongoimport --db your_database_name --collection reports --file reports.json --jsonArray
    ```

    Replace `your_database_name` with the name of your MongoDB database.

## Usage

### Backend:

- Start the backend server:

    ```bash
    npm start
    ```

### Frontend:

- Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

- Start the frontend development server:

    ```bash
    npm run dev
    ```

Open [http://localhost:FRONT_END_PORT](http://localhost:FRONT_END_PORT) to view the frontend in your browser.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License - see the [LICENSE](LICENSE) file for details.
