<p align="center">
  <img src="https://github.com/KRochaS/ignite-nextauth/blob/main/.github/ignite-reactjs.svg" width="490" >
  <br/>
  <br/>
  <img src="https://github.com/KRochaS/ignite-nextauth/blob/main/.github/authentication-and-authorization.svg" width="350" >
  <br/>
  <br/>
  <img src="https://github.com/KRochaS/ignite-nextauth/blob/main/.github/chapter-iv.svg" width="130" >
   
</p>

<br/>

<p align="center">	
   <img src="https://img.shields.io/badge/-ReactJS-363447?style=flat&logoColor=white" />

  <img src="https://img.shields.io/badge/-NextJS-363447?style=flat&logoColor=white" />
  
   <img src="https://img.shields.io/badge/-Nookies-363447?style=flat&logoColor=white" />
   
   <img src="https://img.shields.io/badge/-TailwindCSS-363447?style=flat&logoColor=white" />
</p>



## :bar_chart: About
The application's objective was to create a complete authentication, authorization, and refresh token process within React with Next.js, 
enabling control over access to routes and components both on the client-side and server-side.

## Technologies and libs:                                                                
- [React](https://pt-br.reactjs.org/)
- [NextJS 13](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Nokiees](https://www.npmjs.com/package/nookies)
- [Axios](https://axios-http.com/)

##  The main insights acquired during the project.
  
  - [x] Authentication with JWT.
    - [x] Authentication context
    - [x] Store tokens in cookies
    - [x] Retrieve authentication state
    - [x] Perform token refresh
    - [x] Request queue in Axios
  - [x] Authentication with SSR
      - [x] Retrieve token on the server-side
      - [x] Validate authentication (Server)
      - [x] Server-side redirection
  - [x] Permission control
     - [x] Refetching Data
     - [x] Create permission hook
     - [x] Create permission component
     - [x] Validate permissions (Server)
     - [x] Logout broadcast
  

## :computer:  WEB Layout
<p align="center">
   <img src="https://github.com/KRochaS/ignite-nextauth/blob/main/.github/screenshot-01.png" width="986" >
   <img src="https://github.com/KRochaS/ignite-nextauth/blob/main/.github/screenshot-02.png" width="986" >
</p>

## :key:  Permission control
<p>
  <img src="https://github.com/KRochaS/ignite-nextauth/blob/main/.github/permissions.gif" width="986" >
  <img src="https://github.com/KRochaS/ignite-nextauth/blob/main/.github/routes.gif" width="986" >
</p>


#### how to run the project: 
```bash
#  Clone this repository.
$ git clone https://github.com/KRochaS/ignite-nextauth

# Navigate to the project folder in the terminal/cmd.
$ cd ignite-nextauth/

# Install the dependencies.
$ npm i ou yarn install

# Run the project
$ npm run dev

# http://localhost:3000

# The application's backend was provided by Rocketseat
$ git clone https://github.com/rocketseat-education/ignite-reactjs-auth-backend

# Navigate to the project folder in the terminal/cmd.
$ cd ignite-reactjs-auth-backend/

# Install the dependencies.
$ npm i ou yarn install

# Run the project
$ npm run dev

 
```
