import { ServicesShowcase } from './components/ServicesShowcase';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-center">Our Services</h1>
          <p className="text-center text-muted-foreground mt-2">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <ServicesShowcase layout="featured" />
      </main>
    </div>
  );
}