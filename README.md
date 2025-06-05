📘 Yesh University Entrance Exam Prep A modern web and mobile application designed to help students prepare for the Yesh University entrance exam with confidence and efficiency. This platform provides curated study materials, practice tests, real-time progress tracking, and personalized learning plans to support students on their journey to academic success.

🚀 Features 📚 Access to categorized study materials and past papers

📝 Practice tests with instant feedback

📈 Progress tracking and performance analytics

🎯 Personalized learning suggestions based on user performance

💬 Discussion forums and support community

🌐 Built with modern technologies (React, Next.js)

🎯 Goal To make entrance exam preparation more accessible, structured, and engaging for aspiring Yesh University students through a user-friendly platform.

📱 Platforms Web App

Mobile App (iOS & Android with React Native )

🛠 Tech Stack Frontend: Next.js

Backend: Next.js

Database: MongoDB

## Prisma setup

This project uses [Prisma](https://www.prisma.io/) as an ORM for MongoDB.

1. Copy `.env.example` to `.env` and provide your MongoDB password:

```bash
cp .env.example .env
# edit .env and replace <db_password>
```

2. Generate the Prisma client:

```bash
npm run generate
```

3. Start the development server:

```bash
npm run dev
```

Mobile: React Native

Authentication: Next Auth
  - Includes Facebook OAuth provider. Set `FACEBOOK_CLIENT_ID` and
    `FACEBOOK_CLIENT_SECRET` in your `.env` file.

Hosting: Vercel
