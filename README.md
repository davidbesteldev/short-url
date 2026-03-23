> ⚠️ **Note:** This project was developed exclusively for technical evaluation purposes as part of a recruitment process.

# 🔗 Short URL

API for shortening URLs.

## 📋 Prerequisites

- **Node.js** (v22.14 or higher)
- **Docker** and **Docker Compose**
- **NPM**

---

## 📖 Development Utilities

Helpful tools to assist development:

- API Documentation (Swagger): Access http://localhost:3000/docs (check the port in the ".env" file)
- Prisma Studio: Visual interface to inspect and manage database data

  ```bash
  npm run prisma:studio
  ```

- Full Database Reset **(⚠️ Destructive operation)** This command **irreversibly deletes all data**, recreates the database schema, and runs the seed automatically.

  > ❗ **Use only in local development environments.** ❗

  ```bash
  npx prisma migrate reset
  ```

## 🛠️ Technologies

This project was built using the following technologies:

- **[NestJS](https://nestjs.com/)**: Progressive Node.js framework for building efficient and scalable applications.
- **[TypeScript](https://www.typescriptlang.org/)**: JavaScript superset that adds static typing.
- **[Prisma](https://www.prisma.io/)**: Modern and high-performance ORM.
- **[PostgreSQL](https://www.postgresql.org/)**: Robust and open-source relational database.
- **[Swagger](https://swagger.io/)**: API documentation and testing tool (OpenAPI).
