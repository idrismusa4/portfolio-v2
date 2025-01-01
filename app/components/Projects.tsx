'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ExternalLink, Github, Linkedin } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  status: 'hosted' | 'local'
  collaboration: boolean
  teammates?: { name: string; linkedin: string }[]
  previewImage: string
  screenshots: string[]
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'StudyBug(Startup:Building)',
    description: 'An AI-powered platform offering personalized flashcards, study tools, and focus features to enhance learning and productivity',
    status: 'hosted',
    collaboration: true,
    teammates: [
      { name: 'Elohor Omugbe', linkedin: 'https://www.linkedin.com/in/elohor-omugbe-579647212/' },
      { name: 'Efosa Igbinovia', linkedin: 'https://linkedin.com/in/efosa-igbinovia/' },
      { name: 'Leonard Mafeni', linkedin: 'https://www.linkedin.com/in/leonard-mafeni/' },
    ],
    previewImage: '/SB/SB.png?height=400&width=600',
    screenshots: [
      '/SB/SB.png?height=400&width=600',
      '/SB/SB2.png?height=400&width=600',
      '/SB/SB3.png?height=400&width=600',
    ],
    tags: ['Django', 'Python', 'HTMX', 'Tailwind CSS', 'JavaScript', 'HyperScript'],
    liveUrl: 'https://studybug.me',
    githubUrl: 'https://github.com/StudyBugAI',
  },
  {
    id: 2,
    title: 'Deckify',
    description: 'A cutting-edge AI web application designed to revolutionize the way students and professionals create, manage, and study flashcards. ',
    status: 'hosted',
    collaboration: true,
    teammates: [
      { name: 'Efosa Igbinovia', linkedin: 'https://linkedin.com/in/efosa-igbinovia/' },
      { name: 'Harrison Akunne', linkedin: 'https://www.linkedin.com/in/harrisonakunne/' },
    ],
    previewImage: '/DC/D.png?height=400&width=600',
    screenshots: [
      '/DC/D.png?height=400&width=600',
      '/DC/D1.png?height=400&width=600',
      '/DC/D2.png?height=400&width=600',
    ],
    tags: ['Gemini 1.5 Pro', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Clerk', 'Firebase', 'Stripe'],
    liveUrl: 'https://deckify.vercel.app/',
    githubUrl: 'https://github.com/idrismusa4/ai-flashcard-saas',
  },

  {
    id: 3,
    title: 'Nile Edu Lens',
    description: 'A Retrieval-Augmented Generation (RAG) app that utilizes data from the university\'s website. ',
    status: 'hosted',
    collaboration: true,
    teammates: [
      { name: 'Efosa Igbinovia', linkedin: 'https://linkedin.com/in/efosa-igbinovia/' },
      { name: 'Harrison Akunne', linkedin: 'https://www.linkedin.com/in/harrisonakunne/' },
    ],
    previewImage: '/NEL/1.png?height=400&width=600',
    screenshots: [
      '/NEL/2.png?height=400&width=600',
      '/NEL/3.png?height=400&width=600',
      '/NEL/4.png?height=400&width=600',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Pinecone', 'React', 'Cohere Embed', 'LLaMA 3.0', 'AWS Bedrock', 'Python'],
    liveUrl: 'https://nile-edulens.vercel.app/',
    githubUrl: 'https://github.com/idrismusa4/ai-rate-my-professor',
  },
  {
    id: 4,
    title: 'Reform',
    description: 'An AI powered survey platform designed to keep users engaged while filling out surveys ',
    status: 'hosted',
    collaboration: true,
    teammates: [
      { name: 'Efosa Igbinovia', linkedin: 'https://linkedin.com/in/efosa-igbinovia/' },
      { name: 'Harrison Akunne', linkedin: 'https://www.linkedin.com/in/harrisonakunne/' },
    ],
    previewImage: '/rf/1.png?height=400&width=600',
    screenshots: [
      '/rf/2.png?height=400&width=600',
      '/rf/3.png?height=400&width=600',
      '/rf/4.png?height=400&width=600',
      '/rf/5.png?height=400&width=600',
      '/rf/6.png?height=400&width=600',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Gemini', 'React', 'Paystack',  'Python'],
    liveUrl: 'https://reformai.tech/',
    githubUrl: 'https://github.com/Harry654/reform',
  },
  {
    id: 5,
    title: 'Portfolio V1',
    description: 'V1 of my personal portfolio website. ',
    status: 'hosted',
    collaboration: false,
    previewImage: '/pf.png?height=400&width=600',
    screenshots: [
      '/pf.png?height=400&width=600',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
    liveUrl: 'https://idrismusa4.github.io/dev-idris-portfolio/',
    githubUrl: 'https://github.com/idrismusa4/dev-idris-portfolio',
  },
  {
    id: 6,
    title: 'AI Weapon Detection System',
    description: 'An advanced solution designed to enhance public safety by leveraging real-time AI and computer vision',
    status: 'hosted',
    collaboration: true,
    teammates: [
      { name: 'Umar Adam Ibrahim Ph.D', linkedin: 'https://www.linkedin.com/in/umar-adam-ibrahim/' },
      { name: 'Shafa\'atu Aminu', linkedin: 'https://www.linkedin.com/in/shafa%E2%80%99atu-aminu-74680b2b9/https://www.linkedin.com/in/harrisonakunne/' },
    ],
    previewImage: '/WDS/1.png?height=400&width=600',
    screenshots: [
      '/WDS/2.png?height=400&width=600',
      '/WDS/3.png?height=400&width=600',
      '/WDS/4.png?height=400&width=600',
      '/WDS/5.png?height=400&width=600',
      '/WDS/6.png?height=400&width=600',
      '/WDS/7.png?height=400&width=600',
    ],
    tags: ['AI/ML','Flask','OpenCV', 'YOLO v5/v8','NumPy', 'TensorFlow','PyTorch','PyQt5 and PyQt5-tools','Matplotlib', 'Pandas','Scikit-Learn','Albumentations','Ultralytics', 'Seaborn', 'Jupyter Notebook'],
    liveUrl: 'https://ai-wds.startupcampushq.com/',
    githubUrl: 'https://github.com/idrismusa4/ai-wds-webapp',
  },
  // Add more projects as needed
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer aspect-[16/12] sm:aspect-video"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={project.previewImage}
                alt={project.title}
                fill
                className="transition-transform duration-500 group-hover:scale-105 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 flex flex-col justify-end">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{project.title}</h4>
                <p className="text-sm sm:text-base text-gray-300 mb-2 sm:mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <Image
                  src={selectedProject.previewImage}
                  alt={selectedProject.title}
                  fill
                  className="rounded-t-xl object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                <h3 className='text-lg font-semibold mb-2'>Tools Used:</h3>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Status</h4>
                    <p className="text-gray-300">
                      {selectedProject.status === 'hosted' ? '🟢 Live/Hosted' : '🟡 Local Development'}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Collaboration</h4>
                    <p className="text-gray-300">
                      {selectedProject.collaboration ? '👥 Team Project' : '👤 Solo Project'}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  {selectedProject.status === 'hosted' && selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Site
                    </a>
                  )}
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </div>

                {selectedProject.collaboration && selectedProject.teammates && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Team Members</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.teammates.map((teammate) => (
                        <a
                          key={teammate.name}
                          href={teammate.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200 flex items-center gap-2"
                        >
                          <span>{teammate.name}</span>
                          <span className="flex items-center gap-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            <Linkedin className="w-4 h-4" />
                            Open
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-semibold mb-4">Screenshots</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <div 
                        key={index} 
                        className="relative aspect-video cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setEnlargedImage(screenshot)}
                      >
                        <Image
                          src={screenshot}
                          alt={`${selectedProject.title} screenshot ${index + 1}`}
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {enlargedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEnlargedImage(null)}
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
          >
            <div className="relative w-full max-w-5xl max-h-[90vh]">
              <button
                onClick={() => setEnlargedImage(null)}
                className="absolute -top-10 right-0 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={enlargedImage}
                  alt="Enlarged screenshot"
                  layout="responsive"
                  width={1920}
                  height={1080}
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

