'use client'

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/pimp13',
      label: '@pimp13',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'Pouya Ghazanfary niya',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:pimp.puma.13@gmail.com',
      label: 'pimp.puma.13@gmail.com',
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Interested in collaborating or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="space-y-6 flex flex-col justify-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-card transition-all group"
                    >
                      <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{link.name}</p>
                        <p className="text-xs text-muted-foreground">{link.label}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                💡 <span className="font-semibold text-foreground">Always open</span> to exciting opportunities and interesting projects!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border mt-16 pt-8">
        <p className="text-center text-sm text-muted-foreground">
          © 2024-2026 Pouya Ghazanfary niya. All rights reserved. | Crafted with passion for great code.
        </p>
      </div>
    </section>
  )
}
