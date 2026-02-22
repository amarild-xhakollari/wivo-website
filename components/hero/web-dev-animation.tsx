"use client"

import { motion } from "framer-motion"
import { Lightbulb, Sparkles, Rocket, Star } from "lucide-react"

export function WebDevAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Floating sparkles background */}
      {[...Array(15)].map((_, index) => (
        <motion.div
          key={`sparkle-${index}`}
          className="absolute pointer-events-none"
          style={{
            left: `${(index * 7.3) % 100}%`,
            top: `${(index * 13.7) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + (index % 3) * 0.7,
            delay: (index % 5) * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-6 h-6 text-gold" />
        </motion.div>
      ))}

      <div className="relative z-10 flex items-center justify-center gap-16">
        {/* Left side - The Idea (Lightbulb) */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-0 blur-2xl opacity-50"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-28 h-28 bg-gold rounded-full" />
            </motion.div>
            <Lightbulb className="w-28 h-28 text-foreground fill-gold/40" strokeWidth={1.5} />
          </motion.div>
          <motion.p
            className="text-lg font-medium text-foreground/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Your Idea
          </motion.p>
        </motion.div>

        {/* Middle - Transformation Arrow/Particles */}
        <div className="relative z-20 flex flex-col items-center gap-3">
          {/* Stars stream one after another from left to right */}
          <div className="relative h-6 w-20">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="absolute top-0 left-0"
                animate={{
                  x: [0, 72],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.0,
                  delay: 1.5 + index * 0.33,
                  repeat: Infinity,
                  repeatDelay: 0.66,
                  ease: "easeInOut",
                }}
              >
                <Star className="w-6 h-6 text-teal fill-teal/50" />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-teal font-semibold text-xl ml-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            We Build
          </motion.div>
        </div>

        {/* Right side - The Website/Devices */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Desktop/Laptop */}
          <motion.div
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-1 shadow-2xl"
            style={{ width: "380px", height: "240px" }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            {/* Screen */}
            <div className="w-full h-full bg-white rounded overflow-hidden">
              <motion.div
                className="h-9 bg-gradient-to-r from-teal to-cyan-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 2 }}
                style={{ originX: 0 }}
              />

              <div className="p-4 space-y-3">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.3 }}
                >
                  <motion.div
                    className="h-3 bg-foreground rounded"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                    style={{ originX: 0, width: "70%" }}
                  />
                  <motion.div
                    className="h-2 bg-foreground/30 rounded"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 2.7 }}
                    style={{ originX: 0, width: "90%" }}
                  />
                </motion.div>

                {/* Cards */}
                <div className="flex gap-2">
                  {[0, 1, 2].map((index) => (
                    <motion.div
                      key={index}
                      className="flex-1 h-20 bg-gradient-to-br from-coral/30 to-teal/30 rounded"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 2.9 + index * 0.15 }}
                    />
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  className="h-7 bg-gradient-to-r from-teal to-cyan-400 rounded-full mx-auto"
                  style={{ width: "120px" }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 3.5 }}
                />
              </div>
            </div>

            {/* Laptop base */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[400px] h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg" />
          </motion.div>

          {/* Mobile Phone */}
          <motion.div
            className="absolute -right-10 -bottom-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-2 shadow-xl"
            style={{ width: "88px", height: "154px" }}
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 8, y: [0, -3, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 3.8 },
              scale: { duration: 0.5, delay: 3.8 },
              rotate: { duration: 0.5, delay: 3.8 },
              y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 4.5 },
            }}
          >
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-900 rounded-full" />
            <div className="w-full h-full bg-white rounded-xl overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-br from-teal/10 via-background to-coral/10 p-2 space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}
              >
                <motion.div
                  className="h-1.5 bg-teal rounded"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, delay: 4.2 }}
                  style={{ originX: 0 }}
                />
                <motion.div
                  className="h-10 bg-gradient-to-br from-coral/30 to-teal/30 rounded"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 4.4 }}
                />
                <motion.div
                  className="h-1 bg-foreground/20 rounded"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, delay: 4.6 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Rocket */}
          <motion.div
            className="absolute -top-10 -right-10"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 5, type: "spring", bounce: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 5.5 }}
            >
              <Rocket className="w-14 h-14 text-foreground fill-teal/30" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
