'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

// This is a mock function for AI responses. In a real application, you'd integrate with an AI service.
const getAIResponse = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const responses = [
    "Hi there! I'm Idris Shaaba's AI assistant. What would you like to know about his experience?",
    "Idris Shaaba is a full-stack developer with 5 years of experience in React, Node.js, and cloud technologies.",
    "Idris's most recent project was an e-commerce platform built with Next.js and Stripe integration.",
    "Idris has a Master's degree in Computer Science from the University of Technology.",
    "You can find Idris's complete portfolio and resume on this website. Is there anything specific you'd like to know?"
  ]
  
  return responses[Math.floor(Math.random() * responses.length)]
}

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'ai' }[]>([])
  const [input, setInput] = useState('')

  const handleSend = async () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { text: input, sender: 'user' }])
      setInput('')
      const aiResponse = await getAIResponse()
      setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }])
    }
  }

  return (
    <>
      <motion.button
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 w-[90vw] sm:w-96 h-[70vh] sm:h-[500px] bg-gray-900 rounded-lg shadow-xl flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold">Chat with Idris Shaaba&apos;s AI</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-200'}`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-700">
              <div className="flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about Idris's experience..."
                  className="flex-1 bg-gray-800 text-white p-2 rounded-l-lg focus:outline-none text-sm sm:text-base"
                />
                <button onClick={handleSend} className="bg-blue-500 text-white p-2 rounded-r-lg flex items-center justify-center">
                  <Send />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

