# RM Weekly Report - React Application

A modern React application for displaying RM (Relationship Manager) weekly reports with interactive KPI cards, charts, and leaderboards.

## 🚀 Features

- **Modern React 18** with hooks and functional components
- **Vite** for fast development and hot reload
- **Tailwind CSS** for styling with custom glassmorphism effects
- **Chart.js** with React wrapper for data visualization
- **Font Awesome** React components for icons
- **Interactive flip cards** with 3D animations
- **Responsive design** for all screen sizes
- **Modal system** for leaderboard displays

## 🛠 Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - The app will automatically open at `http://localhost:3000`
   - Hot reload is enabled for instant updates

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Main header component
│   ├── KPICard.jsx         # Flip card component
│   ├── Chart.jsx           # Chart.js wrapper
│   └── LeaderboardModal.jsx # Modal component
├── data/
│   └── mockData.js         # Sample data
├── styles/
│   └── index.css           # Global styles + Tailwind
├── App.jsx                 # Main app component
└── main.jsx               # Entry point
```

## 🎨 Key Features

### Interactive KPI Cards
- **Flip animation** with 3D transforms
- **Progress bars** with shimmer effects
- **Real-time data** display
- **Performance evaluations** with contextual messages

### Charts & Visualizations
- **8-week trend charts** for revenue and investment
- **Responsive design** with custom styling
- **Hover effects** and animations

### Leaderboard System
- **Modal-based** leaderboard display
- **Trophy icons** for top performers
- **Ranking changes** with visual indicators
- **Filtered views** based on KPI type

### Modern UI/UX
- **Glassmorphism** design effects
- **Gradient backgrounds** for visual appeal
- **Smooth animations** and transitions
- **Mobile-responsive** layout

## 🔧 Browser Extension Support

This React application fully supports browser extensions and development tools:

- ✅ **Hot Module Replacement (HMR)**
- ✅ **React Developer Tools**
- ✅ **Browser extensions** (like React Developer Tools and Stagewise)
- ✅ **Source maps** for debugging
- ✅ **ESLint integration**
- ✅ **Modern build system**

## 🚀 Production Build

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📱 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🎯 Next Steps

1. **Connect to real API** - Replace mock data with actual backend
2. **Add authentication** - User login and session management
3. **Real-time updates** - WebSocket integration
4. **Data persistence** - Local storage or database
5. **Advanced analytics** - More detailed reporting features

---

Built with ❤️ using React, Vite, and Tailwind CSS # Ark-RM-WM
# Ark-RM-WM
