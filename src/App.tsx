import { ThemeProvider } from "@/components/theme/theme-provider"
import { HomePage } from "@/pages/HomePage"

function App() {
  return (
    <ThemeProvider defaultTheme="projects" storageKey="vite-ui-theme">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">@goabego</h1>
        </div>
        <HomePage />
      </div>
    </ThemeProvider>
  )
}

export default App