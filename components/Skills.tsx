import { CheckCircle2 } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Golang', 'Python', 'TypeScript', 'JavaScript', 'Bash'],
    },
    {
      category: 'Backend & DevOps',
      skills: ['Linux/Unix', 'Docker', 'Kubernetes', 'CI/CD', 'System Design'],
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Web APIs'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'PostgreSQL', 'Redis', 'AWS', 'GitHub Actions'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive set of technical skills developed through years of hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-3">Specialization</h3>
          <p className="text-muted-foreground text-lg">
            <span className="text-foreground font-semibold">Golang Backend Development</span> coupled with{' '}
            <span className="text-foreground font-semibold">DevOps & Infrastructure Automation</span>, with full-stack capabilities for modern web applications.
          </p>
        </div>
      </div>
    </section>
  )
}
