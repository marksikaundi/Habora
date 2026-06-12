# Habora

Habora is a habit and momentum tracker with social accountability. , it runs on iOS, Android, and web.

## Features

### Home

Daily dashboard with habit check-ins, streak stats, a weekly review card, activity calendar, and monthly heatmap. Track your main activities and see how consistent you've been over time.

### Inspirations

Daily sparks, quotes, and prompts to keep you motivated between sessions.

### Add activity (+)

Log what you did from anywhere in the app via the center tab button. Activities sync to your crew feed when Appwrite is configured.

### Rituals (Library)

Curated ritual collections—morning fuel, wind-down, deep work sessions, and accountability prompts. Tap a ritual to pre-fill an activity log.

### Journey

Streak gamification with spark points, milestone rewards, and unlockable themes. Progress is stored locally on device.

### Activity (crew feed)

See everything you and your accountability partners log. Invite friends, view live status, and sync with Appwrite when connected.

### Onboarding

Optional intake flow for goals and preferences. Enable it by changing the initial redirect in `app/index.tsx` from `"/(tabs)"` to `"/onboarding"`.

## Tech stack

- **Expo 54** with React Native and the New Architecture
- **Expo Router** for file-based navigation
- **Appwrite** for habits, friends, activity records, and optional realtime sync
- **AsyncStorage** for local streak and check-in history

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the development server

   ```bash
   npx expo start
   ```

   Then open the app in a [development build](https://docs.expo.dev/develop/development-builds/introduction/), iOS simulator, Android emulator, or Expo Go.

3. (Optional) Configure Appwrite

   Set these Expo public environment variables to connect to your backend:

   - `EXPO_PUBLIC_APPWRITE_ENDPOINT`
   - `EXPO_PUBLIC_APPWRITE_PROJECT_ID`
   - `EXPO_PUBLIC_APPWRITE_DATABASE_ID`
   - `EXPO_PUBLIC_APPWRITE_HABITS_COLLECTION_ID`
   - `EXPO_PUBLIC_APPWRITE_FRIENDS_COLLECTION_ID`
   - `EXPO_PUBLIC_APPWRITE_ACTIVITY_COLLECTION_ID`

   To enable realtime subscriptions on those collections, also set:

   - `EXPO_PUBLIC_APPWRITE_ENABLE_REALTIME=true`

   Without these variables, the app runs in **demo mode** with the same UI and local seed data.

## Project structure

```
app/                  # Expo Router screens and layouts
  (tabs)/             # Main tab bar (Home, Inspirations, Rituals, Journey)
  add-activity.tsx    # Activity logging modal
  onboarding.tsx      # Optional intake flow
components/           # Shared UI (charts, heatmap, dashboard cards)
lib/                  # Accountability board, streak gamification, calendar utils
constants/            # Theme tokens and fonts
```

## Scripts

| Command            | Description                |
| ------------------ | -------------------------- |
| `npm start`        | Start Expo dev server      |
| `npm run ios`      | Open on iOS simulator      |
| `npm run android`  | Open on Android emulator   |
| `npm run web`      | Open in the browser        |
| `npm run lint`     | Run ESLint                 |

## Building for production

This project includes [EAS Build](https://docs.expo.dev/build/introduction/) configuration. See `eas.json` for development, preview, and production profiles.
