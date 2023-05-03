# Scratchpay Challenge ❤️
This project was designed to test my back-end knowledge and assess my suitability for the Software Engineer position at Scratch Financial by creating a RESTful API with attention to detail, standards, reusability and scalability.

## ⌨️ Development

- Conventional Commits - This repo uses [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/) to standardize commit messages and auto generate a changelog throughout the development cycle.
- Clean Architecture
  - Single Responsibility Principle (SRP)
  - Open Closed Principle (OCP)
  - Interface Segregation Principle (ISP)
  - Dependency Inversion Principle (DIP)
  - Separation of Concerns (SOC)
  - Don't Repeat Yourself (DRY)
  - You Aren't Gonna Need It (YAGNI)
  - Keep It Simple, Silly (KISS)
  - Small Commits

## 🛠️ Libraries and Tools

- NPM
- Typescript
- Git
- Docker
- Jest
- Express
- Supertest
- Husky
- Lint Staged
- Eslint
- Standard Javascript Style
- Sucrase

## 📦 Running Locally on Machine or Docker Machine

Choose one of the options below:

### **Machine**

Install the node_modules

```bash
$ yarn
```
Then

```bash
$ yarn start
```
### **Docker**

Make sure you have docker installed on your machine

Then run the following commands

```bash
$ docker build -t scratchpay-api .
$ docker run --name scratchpay-api  -p 3000:3000 scratchpay-api
```
Now open your browser or any HTTP Request Tool and exec the following GET request: http://localhost:3000/api/clinics

You can filter all the clinics passing arguments through query params. For example:

http://localhost:3000/api/clinics?name=hospital&state=CA

## 🤝 Contributing

<table>
  <tr>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/49277374?v=4" width="100px;" alt=""/>
      <br />      
      <sub>
        <b>Leonardo Arruda</b>
      </sub>      
      <br />
    </td>
  </tr>
</table>

Follow me on <a href="https://github.com/LeonardoArrudaMesquita">Github</a> and <a href="https://www.linkedin.com/in/leonardo-arruda-40053b146/">Linkedin</a>!