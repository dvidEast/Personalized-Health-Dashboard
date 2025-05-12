# Health Metrics Tracker MVP

### Scope
- User can register/login (mock JWT)
- User can add/view basic health data (weight, BP, steps)
- User sees simple dashboard (charts and KPIs)
- Admin can see list of users (basic CRUD)

### High-Level Code Structure
| Layer | Tech | Actions |
| -------- | ------- | -------- |
| Frontend | React (TypeScript), Tailwind CSS | User UI, Auth Flow, Health Input, Dashboard |
| Backend | Java Spring Boot | API Endpoints, Auth (mock JWT), Data Validation |
| Database | MySQL (AWS RDS or local) | User & Health Data Storage |
| Infrastructure | Docker, AWS ECS, S3, RDS | Deployment |
| Testing | Jest (React, JUnit (Java), Cypress (e2e) | Unit, Integration, E2E Tests |
| CI/CD | GitHub Actions | Auto Build, Test, Deploy |

# Walk Through
....
