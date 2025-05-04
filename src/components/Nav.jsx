import React from 'react'
import { motion } from 'framer-motion'
const links = ['Home','Work','About','Resume']
export default function Nav() {
  return (
    <motion.nav className="fixed top-0 w-full bg-white/70 backdrop-blur p-4 flex justify-center z-50"
      initial={{ y:-50, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration:0.5 }}>
      <ul className="flex gap-8">
        {links.map(l=><li key={l}><a href={'#'+l.toLowerCase()} className="text-gray-800 font-semibold hover:text-blue-600">{l}</a></li>)}
      </ul>
    </motion.nav>
  )
}
