import React from 'react'
import { motion } from 'framer-motion'
export default function Hero() {
  return (
    <motion.section className="flex flex-col items-center justify-center text-center pt-24 pb-40 px-4"
      initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1 }}>
      <motion.img src="profile.jpg" alt="Harsh" className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6" whileHover={{ scale:1.05 }}/>
      <h2 className="text-xl font-medium text-gray-700 mb-2">Namaste 🙏🏻</h2>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">I’m Harsh Vardhan</h1>
      <p className="text-gray-700 max-w-md mb-6">A multidisciplinary <strong>Digital Experience Designer</strong> focused on making design accessible and impactful.</p>
      <div className="flex gap-4">
        <motion.a href="#home" className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold" whileHover={{ scale:1.1 }}>Home</motion.a>
        <motion.a href="#work" className="px-6 py-3 bg-white text-gray-800 rounded-full font-semibold shadow" whileHover={{ scale:1.1 }}>Work & Experiments</motion.a>
      </div>
    </motion.section>
  )
}
