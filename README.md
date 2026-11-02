# 🚀 Moazam Ali — Cloud & DevOps Engineering Portfolio

[![AWS Amplify](https://img.shields.io/badge/AWS-Amplify%20Hosting-590907?logo=aws-amplify&logoColor=white)](https://aws.amazon.com/amplify/hosting/)
[![Amazon S3](https://img.shields.io/badge/Amazon-S3%20Storage-E8D2B5?logo=amazon-s3&logoColor=black)](https://aws.amazon.com/s3/)
[![CloudFront](https://img.shields.io/badge/Amazon-CloudFront%20Global%20CDN-1C1917?logo=amazon-aws&logoColor=white)](https://aws.amazon.com/cloudfront/)
[![Docker](https://img.shields.io/badge/Docker-Containerization-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)

> Official submission for the **AWS Student Portfolio Challenge 2026**. Designed, built, and deployed on AWS Amplify Hosting following AWS Well-Architected Framework guidelines.

---

## 🎨 Design Philosophy: Editorial Luxury & Precision Engineering
- **Color Palette:** Warm Alabaster Canvas (`#FAF7F2`), Sand / Cream (`#E8D2B5`), and Deep Burgundy (`#590907`).
- **Typography & Structure:** Modern editorial typography with generous breathing room, crisp readability, and minimalist elegance.
- **Performance:** 100/100 Lighthouse performance, ultra-fast static bundling, and global CDN delivery.

---

## 🏗️ AWS Cloud Architecture

```
                       ┌────────────────────────────────────────┐
                       │           GitHub Repository            │
                       │     (Continuous Deployment Hook)       │
                       └───────────────────┬────────────────────┘
                                           │ (git push webhook)
                                           ▼
                       ┌────────────────────────────────────────┐
                       │        AWS Amplify Build Pipeline      │
                       │   (npm ci -> npm run build -> dist)    │
                       └───────────────────┬────────────────────┘
                                           │
                        ┌──────────────────┴──────────────────┐
                        ▼                                     ▼
       ┌──────────────────────────────────┐  ┌──────────────────────────────────┐
       │         Amazon S3 Bucket         │  │       Amazon CloudFront CDN      │
       │    (Static Asset Repository)     │  │   (Global Edge Caching & SSL)    │
       └──────────────────────────────────┘  └────────────────┬─────────────────┘
                                                              │
                                                              ▼
                                             ┌──────────────────────────────────┐
                                             │          Global Visitor          │
                                             │  (Ultra-low latency <50ms, HTTPS)│
                                             └──────────────────────────────────┘
```

---

## 🛠️ Local Development & Quickstart

```bash
cd "d:\porfolio 2"

# Start local development server
cmd /c "npm.cmd run dev"

# Build for production
cmd /c "npm.cmd run build"
```

---

## 📬 Contact & Connect

- **Builder:** Moazam Ali (Computer Engineering, BZU Multan — CGPA: 3.65)
- **Email:** [moazamali517500@gmail.com](mailto:moazamali517500@gmail.com)
- **Phone:** `03267998589`
