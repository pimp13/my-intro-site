export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="text-foreground font-semibold">Golang developer</span> and DevOps enthusiast with a passion for building scalable, production-grade systems. My expertise spans backend development, infrastructure automation, and cloud-native technologies.
              </p>
              <p>
                With deep knowledge of Linux systems, I design and implement efficient deployment pipelines, containerized applications, and microservice architectures. I love the intersection of development and operations where code meets infrastructure.
              </p>
              <p>
                Beyond backend work, I'm proficient in modern frontend technologies like TypeScript, React, and Next.js, allowing me to bridge the gap between frontend and backend seamlessly.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-lg font-semibold mb-2 text-primary">Backend Development</h3>
              <p className="text-sm text-muted-foreground">
                Building high-performance APIs and services with Golang, focusing on concurrency, memory efficiency, and scalability.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-lg font-semibold mb-2 text-primary">DevOps & Infrastructure</h3>
              <p className="text-sm text-muted-foreground">
                Automating deployment pipelines, managing containerized applications, and optimizing cloud infrastructure for performance and cost.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-lg font-semibold mb-2 text-primary">Full-Stack Capability</h3>
              <p className="text-sm text-muted-foreground">
                Creating complete solutions from database design to responsive UI, leveraging Next.js and React for modern frontend experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
