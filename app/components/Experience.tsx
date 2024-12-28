'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const experiences = [
  {
    company: 'Startup Campus',
    logo: '/SC.JPEG?height=100&width=100',
    position: 'Software Engineering Research Fellow',
    period: 'July 2024 - Present',
    description: 'Conducted research and developed scalable software solutions across verticals like national security and education, implementing advanced algorithms and technologies to solve complex problems, including designing an AI-driven weapon system prototype for enhanced threat detection, and collaborating with interdisciplinary teams to deliver impactful results.',
    technologies: ['Problem Solving', 'Prompt Engineering', 'AI/ML']
  }, 
  {
    company: 'Headstarter AI',
    logo: '/HSA.png?height=100&width=100',
    position: 'Software Engineering Fellow',
    period: 'July 2024 - September 2024',
    description: 'Developed and deployed 5 AI applications in 5 weeks, leading and collaborating on projects that included a customer support agent, a SaaS platform, and a web scraper, leveraging technologies like React, Next.js, Firebase, Llama 3.1, and Google Gemini, achieving user growth, increased relevance, and automation efficiency.',
    technologies: ['React', 'Next.js', 'AWS Bedrock', 'Firebase', 'TypeScript', 'Clerk', 'Tailwind CSS','Gemini'
      ,'Pinecone'
    ]
  },
 
  // {
  //   company: 'Digital Agency',
  //   logo: '/placeholder.svg?height=100&width=100',
  //   position: 'Frontend Developer',
  //   period: '2017 - 2019',
  //   description: 'Created responsive web applications and implemented pixel-perfect designs.',
  //   technologies: ['React', 'SCSS', 'JavaScript', 'REST APIs']
  // }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
            >
              <div className="w-20 h-20 bg-gray-800 rounded-lg flex-shrink-0 overflow-hidden">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-blue-400">{exp.company}</h3>
                  <span className="text-gray-400">{exp.period}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{exp.position}</h4>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

