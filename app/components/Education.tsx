'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const education = [
  {
    school: 'Nile University of Nigeria',
    logo: '/nile.png?height=100&width=100',
    degree: 'Bachelor of Science(Bsc.) in Software Engineering',
    period: '2020 - 2024',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Graduated with honors.',
    achievements: [
      'CEO/Lead, Nile Startup Campus; A student entrepreneur community',
      'Design Lead for Google Developer Student Clubs(GDSC)(2023/2024 Session)',
      'Received Best in Ideation Award for Startup StudyBug'
    ]
  },
  // {
  //   school: 'Tech Institute',
  //   logo: '/placeholder.svg?height=100&width=100',
  //   degree: 'Bachelor of Science in Software Engineering',
  //   period: '2011 - 2015',
  //   description: 'Focus on software development and system design. Minor in Business Administration.',
  //   achievements: [
  //     'Dean\'s List all semesters',
  //     'Developed campus mobile app',
  //     'President of Computing Society'
  //   ]
  // }
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
            >
              <div className="w-20 h-20 bg-gray-800 rounded-lg flex-shrink-0 overflow-hidden">
                <Image
                  src={edu.logo}
                  alt={`${edu.school} logo`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-blue-400">{edu.school}</h3>
                  <span className="text-gray-400">{edu.period}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                <p className="text-gray-300 mb-4">{edu.description}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

