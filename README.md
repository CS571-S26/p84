# JSA Website (UW-Madison)

This is the official website for the Japanese Student Association (JSA) at UW-Madison.  
It provides event listings, organization information, study abroad guidance, FAQ, career resources, and a contact form.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router (`HashRouter`)
- React Bootstrap + Bootstrap 5
- i18next / react-i18next

## Local Development

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Run TypeScript build and production build
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint

## Environment Variables

The following variables are used for Google Calendar event integration.

```env
VITE_GOOGLE_CALENDAR_API_KEY=your_google_calendar_api_key_here
VITE_GOOGLE_CALENDAR_ID_CAREER=your_career_calendar_id_here
VITE_GOOGLE_CALENDAR_ID_COMMUNITY_CULTURE=your_community_culture_calendar_id_here
VITE_GOOGLE_CALENDAR_ID_COLLABORATIONS=your_collaborations_calendar_id_here
VITE_GOOGLE_CALENDAR_ID_EXTERNAL=your_external_calendar_id_here
```

Copy `.env.example` to `.env` and fill in your values.

## Routing Structure

- `/` Home
- `/about` About
- `/events` Events
- `/exchange`
- `/exchange/considering-uw-madison`
- `/exchange/preparing-for-uw-madison`
- `/exchange/arriving-in-madison`
- `/exchange/resources`
- `/board`
- `/board/2025-2026`
- `/faq`
- `/careers`
- `/contact`

## Deployment (GitHub Pages)

Pushes to the `main` branch trigger GitHub Pages deployment via GitHub Actions (`.github/workflows/deploy.yml`).

The following GitHub Secrets are required in Actions.

- `VITE_GOOGLE_CALENDAR_API_KEY`
- `VITE_GOOGLE_CALENDAR_ID_CAREER`
- `VITE_GOOGLE_CALENDAR_ID_COMMUNITY_CULTURE`
- `VITE_GOOGLE_CALENDAR_ID_COLLABORATIONS`
- `VITE_GOOGLE_CALENDAR_ID_EXTERNAL`

## Project Structure (Main)

- `src/pages/`: Page components
- `src/components/`: Reusable UI components
- `src/config/appConfig.ts`: Environment variable loading and app config
- `src/utils/googleCalendar.ts`: Google Calendar fetching logic
- `src/i18n.ts`: English/Japanese translation resources
