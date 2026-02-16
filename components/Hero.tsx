import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-balance">
            Hi, Im Pouya Hi,
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Golang & DevOps
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            I craft scalable backend systems, automate infrastructure, and optimize deployment pipelines. Passionate about Linux, cloud-native technologies, and writing clean, efficient code.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <a className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 group" href="http://185.19.201.107:4255/">
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-secondary transition-colors">
            Get in Touch
          </button>
        </div>

        <div className="pt-12">
          <p className="text-sm text-muted-foreground mb-6">Tech Stack</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Golang', 'Linux', 'Python', 'TypeScript', 'Next.js', 'React'].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium border border-border"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
