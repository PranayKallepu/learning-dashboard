# Next-Gen Learning Dashboard

A modern student dashboard built with Next.js, Supabase, Tailwind **CSS**, and Framer Motion. The dashboard follows a Bento Grid layout and displays course progress, learning activity, and user statistics with smooth animations and responsive design.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind **CSS**
- Supabase
- Framer Motion
- Lucide React Icons

## Features

- Responsive Bento Grid Dashboard
- Server-side data fetching from Supabase
- Dynamic course cards
- Animated progress bars
- Sidebar navigation with Framer Motion layout animations
- Loading skeletons while fetching data
- Error handling for failed database requests
- Mobile, tablet, and desktop responsive layouts

---

## Project Architecture

The project is organized into reusable and modular components.

```text
src
├── app
├── actions
├── components
    ├── dashboard
    ├── sidebar
    └── ui
├── lib
├── types
└── utils
...
```

### Folder Responsibilities

- **app/** → Routes, layouts, loading states, and error boundaries.
- **actions/** → Data fetching functions.
- **components/dashboard/** → Dashboard-specific UI components.
- **components/sidebar/** → Navigation components.
- **components/ui/** → Reusable UI building blocks.
- **lib/** → Supabase configuration and utility functions.
- **types/** → TypeScript interfaces and types.

This structure keeps UI, business logic, and data access concerns separated and easier to maintain.

---

## Server and Client Component Split

I used Next.js Server Components for data fetching and Client Components only where browser interactivity was required.

### Server Components

Used for:

- Fetching course data from Supabase
- Rendering dashboard content
- Reducing client-side JavaScript

Example:

```text
DashboardContent
    └── getCourses()
    └── Supabase
```

Benefits:

- Better performance
- Secure data fetching
- Smaller client bundle

### Client Components

Used for:

- Framer Motion animations
- Sidebar navigation state
- Progress bar animations
- Interactive UI elements

Components marked with `*use client*`:

- Sidebar
- NavItem
- ProgressBar
- Animated dashboard tiles

This approach follows the recommended App Router architecture where data fetching happens on the server and interactive behavior runs on the client.

---

## Data Fetching Strategy

Course information is stored in Supabase.

The application fetches course data on the server using a dedicated data layer:

```text
Page
 └── DashboardContent
    └── getCourses()
    └── Supabase
```

This avoids exposing database logic directly inside UI components.

---

## Loading and Error Handling

### Loading State

A loading skeleton is displayed while course data is being fetched using React Suspense.

### Error Handling

An error boundary is implemented using Next.js `error.tsx`.

If the database request fails, a user-friendly error screen is displayed with a retry option.

---

## Animation Approach

Framer Motion was used for all animations.

Implemented interactions:

- Staggered page load animations
- Sidebar active state animation using `layoutId`
- Animated progress bars
- Card hover elevation effects
- Smooth spring-based transitions

To avoid layout shifts, animations primarily use:

- transform
- opacity

instead of changing width, height, margins, or positioning.

---

## Responsive Design

### Desktop (>1024px)

- Full sidebar with labels
- Multi-column Bento Grid layout

### Tablet (768px - 1024px)

- Sidebar collapses to icons only
- Dashboard adjusts to a two-column layout

### Mobile (<768px)

- Sidebar replaced with bottom navigation
- Single-column dashboard layout

---

## Challenges Faced

### 1. Server Components with Animated UI

One challenge was combining Server Components for data fetching with Client Components for Framer Motion animations. The solution was to fetch data on the server and pass the results down to animated client-side components.

### 2. Preventing Layout Shifts

Hover effects initially caused slight layout movement. This was solved by using transform-based animations such as scale and translate instead of changing dimensions.

### 3. Responsive Sidebar Behavior

Creating different sidebar behaviors for desktop, tablet, and mobile required careful breakpoint management to ensure smooth transitions between layouts.

### 4. Dynamic Icon Rendering

Course icons are stored as strings in the database. A mapping layer was created to dynamically render the correct Lucide icon based on the stored value.

---

## Environment Variables

Create a `.env.local` file:

`env NEXT_PUBLIC_SUPABASE_URL= NEXT_PUBLIC_SUPABASE_ANON_KEY= `

Do not commit `.env.local` to version control.

---

## Running the Project

Install dependencies:

`bash npm install `

Start development server:

`bash npm run dev `

Open:

`text [http://localhost:**3000**](http://localhost:**3000**) `
