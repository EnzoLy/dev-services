# Dev Services Documentation

## Overview
This directory contains technical documentation for the Dev Services project.

## Available Documentation

### Translation System
- **[Translation System Guide](../TRANSLATIONS.md)** - Complete guide to the multi-language implementation

### Component Architecture
- **[Components](../components/)** - Reusable UI components
- **[Types](../types/)** - TypeScript type definitions

### Hooks
- **[Custom Hooks](../hooks/)** - React hooks for translations and language preferences

## API Documentation

### Backend Integration
Currently, this project is a frontend showcase. Backend integration documentation will be added when implementing:

- **RESTful APIs** - For dynamic data
- **Database Integration** - PostgreSQL schemas and queries
- **Authentication** - User management and access control
- **File Upload** - Document and image management

### Future Backend Features
- **User Management** - Client portal access
- **Project Management** - Portfolio and case tracking
- **Contact Forms** - Lead generation and management
- **Analytics** - Website performance metrics

## Development Guidelines

### Code Style
- **TypeScript** - Strict mode enabled
- **ESLint** - Code quality enforcement
- **Prettier** - Code formatting (recommended)

### Component Structure
- **Functional Components** - Using React hooks
- **Type Safety** - Full TypeScript integration
- **Props Interface** - Clear component contracts
- **Error Boundaries** - Graceful error handling

### State Management
- **React Hooks** - useState, useEffect, custom hooks
- **Local Storage** - User preferences persistence
- **Context API** - Global state when needed

## Deployment

### Build Process
```bash
npm run build    # Production build
npm run start    # Production server
npm run dev      # Development server
```

### Environment Variables
Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Contributing

### Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

### Code Review
- Ensure TypeScript compilation passes
- Run linting: `npm run lint`
- Test all language switches
- Verify responsive design

## Support

For technical questions or contributions:
- **Email**: loyolaenzo90@gmail.com
- **Location**: Santa Rosa, La Pampa, Argentina 