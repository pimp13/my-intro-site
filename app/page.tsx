import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}
