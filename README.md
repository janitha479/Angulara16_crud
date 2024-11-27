# 📦 **AngularV16_crud**

This project is an **Angular Frontend** built to interact with a **Laravel API Backend**. The repository contains only the Angular part of the project. It provides a clean and intuitive CRUD (Create, Read, Update, Delete) interface for managing data stored in the Laravel backend.

---

## ⚙️ **Features**
- **Frontend Framework**: Built using [Angular CLI](https://github.com/angular/angular-cli) (version 16.0.0).
- **Backend Integration**: Communicates seamlessly with a Laravel API.
- **Modular Design**: Components, services, and routing structured for scalability.
- **Modern UI**: Responsive and user-friendly interface.
- **CRUD Operations**: Manage backend data with real-time updates.

---

## 🚀 **Getting Started**

### **Step 1: Clone the Repositories**
Clone both the frontend and backend repositories to your local system:

1. Angular Frontend:
   ```bash
   git clone https://github.com/janitha479/Angulara16_crud.git
   ```
2. Laravel Backend:
   ```bash
   git clone https://github.com/janitha479/API_crud.git
   ```

### **Step 2: Install Frontend Dependencies**
Navigate to the Angular project folder and install all required dependencies:
```bash
cd Angulara16_crud
npm install
```

### **Step 3: Set Up the Backend**
1. Navigate to the Laravel project directory:
   ```bash
   cd API_crud
   ```
2. Install backend dependencies using Composer:
   ```bash
   composer install
   ```
3. Set up the `.env` file and configure your database connection.
4. Run database migrations :
   ```bash
   php artisan migrate 
   ```
5. Start the Laravel development server:
   ```bash
   php artisan serve
   ```

### **Step 4: Adjust Script Execution Policy**
If you encounter an error while running `ng serve` about script execution being disabled, follow these steps to fix it:

1. Open **PowerShell as Administrator**.
2. Run the following command to allow script execution temporarily:
   ```bash
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   ```
3. Alternatively, set it for the current user:
   ```bash
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```

For more information on PowerShell execution policies, see [About Execution Policies](https://go.microsoft.com/fwlink/?LinkID=135170).

---

## 🌐 **Development Server**

To start the Angular development server, use:

```bash
ng serve
```

Once started, open your browser and navigate to:

```
http://localhost:4200/
```

The application will automatically reload whenever you modify any source files.

---

## 📁 **Code Scaffolding**

Angular CLI makes it easy to generate new components, services, or other elements. For example, to create a new component:

```bash
ng generate component component-name
```

For a full list of available schematics:
```bash
ng generate --help
```

---

## 📦 **Building**

To build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory. The production build is optimized for better performance.

---

## 🧪 **Running Unit Tests**

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner:

```bash
ng test
```

---

## 🛠️ **Running End-to-End Tests**

To perform end-to-end (e2e) testing:

```bash
ng e2e
```

Note: Angular CLI does not include an end-to-end testing framework by default. You can integrate frameworks like **Protractor** or **Cypress** as per your preference.

---

## 📖 **Learn More**

For more detailed guides and references:
- **Angular CLI Overview and Command Reference**: [Angular CLI Documentation](https://angular.dev/tools/cli)
- **Laravel Documentation**: [Laravel Official Docs](https://laravel.com/docs)
- **PowerShell Execution Policies**: [Microsoft Guide](https://go.microsoft.com/fwlink/?LinkID=135170)

---

## 🏷️ **License**
This project is licensed under the [MIT License](LICENSE).

---
