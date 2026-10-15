import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import { useReveal } from './hooks/useReveal'
import AppRoutes from './routes/AppRoutes'

function App() {
  useReveal()   // 👈 THIS LINE WAS MISSING

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App