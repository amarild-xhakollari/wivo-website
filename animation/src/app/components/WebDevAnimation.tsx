import { motion } from 'motion/react';
import { Lightbulb, Sparkles, Rocket, Star } from 'lucide-react';

export function WebDevAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Floating sparkles background */}
      {[...Array(15)].map((_, index) => (
        <motion.div
          key={`sparkle-${index}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Sparkles className="w-6 h-6 text-yellow-400" />
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
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className="absolute inset-0 blur-2xl opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <div className="w-24 h-24 bg-yellow-400 rounded-full" />
            </motion.div>
            <Lightbulb className="w-24 h-24 text-yellow-500 fill-yellow-200" strokeWidth={1.5} />
          </motion.div>
          <motion.p
            className="text-xl font-medium text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Your Idea
          </motion.p>
        </motion.div>

        {/* Middle - Transformation Arrow/Particles */}
        <div className="flex flex-col items-center gap-4">
          <motion.div className="flex items-center gap-2">
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: [0, 1, 0], x: [-200, -100, 0] }}
                transition={{
                  duration: 1.5,
                  delay: 1.5 + index * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <Star className="w-6 h-6 text-purple-500 fill-purple-300" />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="text-purple-600 font-medium"
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
            style={{ width: '320px', height: '200px' }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            {/* Screen */}
            <div className="w-full h-full bg-white rounded overflow-hidden">
              {/* Website content being built */}
              <motion.div
                className="h-8 bg-gradient-to-r from-purple-500 to-blue-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 2 }}
                style={{ originX: 0 }}
              />
              
              <div className="p-4 space-y-3">
                {/* Hero section */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.3 }}
                >
                  <motion.div
                    className="h-3 bg-gray-800 rounded"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                    style={{ originX: 0, width: '70%' }}
                  />
                  <motion.div
                    className="h-2 bg-gray-400 rounded"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 2.7 }}
                    style={{ originX: 0, width: '90%' }}
                  />
                </motion.div>

                {/* Images/Cards */}
                <div className="flex gap-2">
                  {[0, 1, 2].map((index) => (
                    <motion.div
                      key={index}
                      className="flex-1 h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 2.9 + index * 0.15 }}
                    />
                  ))}
                </div>

                {/* Button */}
                <motion.div
                  className="h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"
                  style={{ width: '100px' }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 3.5 }}
                />
              </div>
            </div>

            {/* Laptop base */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[340px] h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg" />
          </motion.div>

          {/* Mobile Phone */}
          <motion.div
            className="absolute -right-8 -bottom-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-2 shadow-xl"
            style={{ width: '80px', height: '140px' }}
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 8, y: [0, -3, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 3.8 },
              scale: { duration: 0.5, delay: 3.8 },
              rotate: { duration: 0.5, delay: 3.8 },
              y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 4.5 },
            }}
          >
            {/* Notch */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-900 rounded-full" />
            
            {/* Screen */}
            <div className="w-full h-full bg-white rounded-xl overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-2 space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}
              >
                <motion.div
                  className="h-1.5 bg-purple-500 rounded"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, delay: 4.2 }}
                  style={{ originX: 0 }}
                />
                <motion.div
                  className="h-8 bg-gradient-to-br from-pink-200 to-purple-200 rounded"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 4.4 }}
                />
                <motion.div
                  className="h-1 bg-gray-400 rounded"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, delay: 4.6 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Success checkmark or rocket */}
          <motion.div
            className="absolute -top-8 -right-8"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 5, type: 'spring', bounce: 0.5 }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 5.5,
              }}
            >
              <Rocket className="w-12 h-12 text-purple-600 fill-purple-200" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Success text at bottom */}
      <motion.div
        className="absolute bottom-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5.5 }}
      >
  
      </motion.div>
    </div>
  );
}