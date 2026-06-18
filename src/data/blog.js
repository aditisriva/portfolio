export const blogs = [
  {
    id: 1,
    title: 'Building Civic Connect: From Idea to Production',
    slug: 'building-civic-connect',
    excerpt: 'How I built a full-stack civic issue reporting platform using React, Node.js, Express, and JWT authentication — and what I learned along the way.',
    content: `Building Civic Connect was one of the most exciting projects I've worked on. The idea was simple: create a platform where citizens can report local issues and actually see them get resolved.

## The Problem

Local civic issues — potholes, broken streetlights, garbage dumps — often go unreported simply because there's no easy way to report them. I wanted to change that.

## Tech Stack

I chose the MERN stack for its flexibility:
- **React 18** for a responsive, dynamic UI
- **Node.js + Express** for a clean REST API
- **JWT** for secure authentication
- **Vercel** for seamless deployment

## Key Challenges

1. **Real-time updates**: I used polling initially, then moved to optimistic UI updates for better UX
2. **Role-based access**: Citizens vs Admin required careful middleware design
3. **Image uploads**: Integrated Cloudinary for issue photo storage

## What I Learned

Building a full product from scratch teaches you things no tutorial can — handling edge cases, writing clean API contracts, and thinking about UX from a user's perspective first.`,
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    tags: ['React', 'Node.js', 'Full Stack', 'Case Study'],
    date: 'June 10, 2026',
    readTime: 5,
    category: 'Case Study',
  },
  {
    id: 2,
    title: 'React Native vs Flutter: My Honest Take',
    slug: 'react-native-vs-flutter',
    excerpt: 'After building Zenith Cabs with React Native and exploring Flutter, here\'s my honest comparison for mobile developers choosing their stack in 2026.',
    content: `After shipping Zenith Cabs on the Play Store using React Native, I spent time exploring Flutter. Here's my honest take.

## React Native

**Pros:**
- JavaScript — same language as web development
- Huge ecosystem (Expo makes it even easier)
- Bridge to native modules when needed

**Cons:**
- Performance overhead with the JS bridge
- Styling can feel inconsistent across platforms

## Flutter

**Pros:**
- Dart compiles to native — genuinely fast
- Beautiful, consistent UI out of the box
- Strong Google backing

**Cons:**
- Learning Dart adds overhead
- Smaller ecosystem compared to JS

## My Verdict

For JavaScript developers building their first mobile app — **React Native with Expo** is the fastest path. For teams that need pixel-perfect UI and top performance — **Flutter** wins.`,
    cover: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
    tags: ['React Native', 'Flutter', 'Mobile', 'Opinion'],
    date: 'May 28, 2026',
    readTime: 4,
    category: 'Opinion',
  },
  {
    id: 3,
    title: 'MERN Stack: What No One Tells You',
    slug: 'mern-stack-secrets',
    excerpt: 'The MERN stack looks simple on paper. But there are patterns, pitfalls, and best practices that tutorials never cover. Here\'s what I wish I knew earlier.',
    content: `Everyone learns MERN from a Todo app tutorial. Nobody talks about what happens when your app scales.

## 1. Structure Your Express App Properly

Avoid putting everything in index.js. Use:
- \`/routes\` for API routes
- \`/controllers\` for business logic
- \`/middleware\` for auth, error handling
- \`/models\` for Mongoose schemas

## 2. Error Handling is Everything

Build a global error handler middleware early. Every async route should use try/catch or a wrapper.

## 3. React State Management

For small apps, useState + Context is enough. For complex apps, consider Zustand — it's simpler than Redux and more powerful than Context.

## 4. MongoDB Indexing

Always index fields you query often. Without indexes, MongoDB does full collection scans.

## 5. JWT Security

Store JWTs in httpOnly cookies, not localStorage. localStorage is vulnerable to XSS attacks.`,
    cover: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&h=400&fit=crop',
    tags: ['MERN', 'Node.js', 'MongoDB', 'Tips'],
    date: 'May 15, 2026',
    readTime: 6,
    category: 'Tutorial',
  },
];
