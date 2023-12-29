
# The Brand Wick : LogIn/SignUp App
### **Visit Deployed Link** : https://thebrandwick-three.vercel.app

## Objectives :
- To create login authentication using jwt token with expiry
- UI for login signup page using React JS
- Api should be in Nodejs
- User should not be allowed to register with email already registered.
- User can login using either their email or phone no.


## **Installation & Getting Started**
- **Start the Front-End Server**
1. Clone the repository: **`git clone https://github.com/prateekshuklaps0/Assignments.git`**
2. Navigate to path : **`Assignments\TheBrandWick\Assignment1\FrontEnd`**
3. Install dependencies: **`npm install`**
4. Start the guided tour: **`npm run dev`**

- **Start the Back-End Server**
1. Clone the repository: **`git clone https://github.com/prateekshuklaps0/Assignments.git`**
2. Navigate to path : **`Assignments\TheBrandWick\Assignment1\BackEnd`**
3. Install dependencies: **`npm install`**
4. Start the guided tour: **`npm run server`**


## **API Endpoints**

- **`POST /user/signup`** - SignUp with following json data:
```json
{
  "userName": "your_name",
  "email": "your_email",
  "phone": "your_phone_no.",
  "password": "your_password"
}
```

- **`POST /user/login`** - Login with following json data.
```json
{
  "emailOrPhone": "your_email_or_phone_no.",
  "password": "your_password"
}
```

- **`POST /user/logout`** - Logout with following json data.
```json
{
  "token": "your_jwt_token"
}
```


## Technology Stack

- **Front-end**: React | Chakra UI | Redux
- **Back-end**: Node.js | Express
- **Database**: MongoDB
- **Authentication**: JsonWebToken | Bcrypt
- **Deployment**: Vercel | onRender

---
