# Nigeria Hub - Job Openings Mockup

This project is a visually appealing, responsive mockup webpage for a fictional company, "Nigeria Hub," designed to showcase open job positions. It serves as a modern and engaging careers page, built with a focus on clean UI/UX design and smooth animations.

## About The App

The Nigeria Hub Job Openings page is a demonstration of a modern career portal. It features a striking hero section with the company's mission, followed by a clean, card-based layout for individual job roles. Each job card provides essential details like title, location, and job type, along with a brief description and relevant skill tags.

Key functionalities include:
- **Interactive Job Cards:** Each card has dedicated buttons that link to a Trello board for more detailed job descriptions and a form for direct applications.
- **Dynamic Filtering:** Users can easily filter job openings by type (e.g., Full-time, Contract, Internship) to quickly find relevant positions.
- **Graceful Loading State:** A skeleton loader provides a better user experience by showing a content placeholder while job data is being fetched, preventing layout shifts and indicating progress.
- **Engaging UI:** The page uses subtle animations to draw the user's attention to key elements as they scroll, creating a dynamic and pleasant browsing experience.
- **Responsive Design:** The layout is fully responsive, ensuring a seamless experience across all devices, from desktops to mobile phones.
- **Clear Calls-to-Action (CTAs):** The page includes a prominent CTA for users who don't find a suitable role, encouraging them to submit their CV for future opportunities.

## Tech Stack

This project is built using modern frontend technologies:

- **React:** For building the user interface with a component-based architecture.
- **TypeScript:** For adding static typing to improve code quality and maintainability.
- **Tailwind CSS:** For a utility-first CSS framework that enables rapid and custom UI development.
- **HTML5 & CSS3:** For the core structure and styling, including custom animations.

## Project Structure

The codebase is organized into logical components and files for clarity:

```
/
├── index.html            # Main HTML entry point
├── index.tsx             # React application entry point
├── App.tsx               # Root React component
├── metadata.json         # Application metadata
├── constants.ts          # Static data (job roles, external links)
├── types.ts              # TypeScript type definitions
└── components/
    ├── Header.tsx        # The main header/hero section
    ├── JobListing.tsx    # Section containing all job cards
    ├── JobCard.tsx       # Component for a single job opening
    ├── JobCardSkeleton.tsx # Skeleton loader for the job card
    ├── CTA.tsx           # Call-to-action section at the bottom
    ├── Footer.tsx        # Application footer
    └── icons/            # SVG icon components
```

This project demonstrates best practices in frontend development, creating a beautiful and functional user interface for a company's career page.
