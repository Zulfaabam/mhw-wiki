# Monster Hunter World Wiki

This is a Monster Hunter World Wiki built using Vite, React, and Tailwind CSS. The app currently provides detailed information about various weapons in Monster Hunter World, including their stats, crafting materials, and more. The UI is designed to be responsive, ensuring a seamless experience across different devices.

## API Used

- [mhw-db](https://docs.mhw-db.com/) to get all the weapons data
- [dummyjson-auth-login](https://dummyjson.com/docs/auth#auth-login) to emulate the authentication.

To login to the app, use any users from [dummyjson-users](https://dummyjson.com/users) or you can use this:

```bash
username: emilys
password: emilyspass
```

## How to Run the Project Locally

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v18 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [Git](https://git-scm.com/downloads) (optional, for version control)

### Clone the Repository

```bash
git clone https://github.com/Zulfaabam/mhw-wiki.git
cd mhw-wiki
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

This will start the development server, and you can view the app in your web browser by navigating to the localhost that will be generated in the terminal.

### Building for Production

To build the project for production, use the following command:

```bash
npm run build
```

This will generate optimized static files in the dist directory, ready to be deployed.
