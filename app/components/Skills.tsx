'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  SiReact, SiNextdotjs, SiTypescript, 
  SiPython, SiJavascript, SiHtml5, SiCss3, 
  SiTailwindcss,
  SiDjango
} from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ElementType
  proficiency: 'Beginner' | 'Proficient' | 'Intermediate' | 'Advanced' | 'Familiar'
}

const skills: Skill[] = [
  { name: 'React', icon: SiReact, proficiency: 'Intermediate' },
  { name: 'Next.js', icon: SiNextdotjs, proficiency: 'Familiar' },
  { name: 'TypeScript', icon: SiTypescript, proficiency: 'Proficient' },
  { name: 'Django', icon: SiDjango, proficiency: 'Familiar'},
  { name: 'Python', icon: SiPython, proficiency: 'Proficient' },
  { name: 'JavaScript', icon: SiJavascript, proficiency: 'Proficient' },
  { name: 'HTML5', icon: SiHtml5, proficiency: 'Proficient' },
  { name: 'CSS3', icon: SiCss3, proficiency: 'Proficient' },
  { name: 'TailwindCSS', icon: SiTailwindcss, proficiency: 'Familiar' },
  
]

export default function Skills() {
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  
    return (
      <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSkill(skill)}
              >
                <div className="w-24 h-24 mb-4 relative flex items-center justify-center text-4xl text-blue-500 group-hover:text-blue-400 transition-colors rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="absolute inset-0 border-2 border-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
                  <skill.icon className="relative z-10" />
                </div>
                <p className="text-center font-medium">{skill.name}</p>
                <span className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click for proficiency</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
  
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-xl p-6 max-w-sm w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <selectedSkill.icon className="text-6xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{selectedSkill.name}</h3>
              <p className="text-xl text-blue-400 mb-4">Proficiency: {selectedSkill.proficiency}</p>
              <button
                onClick={() => setSelectedSkill(null)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </section>
    )
  }
