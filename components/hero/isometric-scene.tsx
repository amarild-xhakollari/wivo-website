"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion"

// Glass-style Isometric Building Block with layered shadows
function IsometricBuilding({
  x,
  y,
  height,
  color,
  delay = 0,
  floatOffset = 0,
}: {
  x: number
  y: number
  height: number
  color: string
  delay?: number
  floatOffset?: number
}) {
  const [isHovered, setIsHovered] = useState(false)
  
  const colorSets = {
    coral: { 
      top: "hsl(355 70% 78%)", 
      left: "hsl(355 70% 68%)", 
      right: "hsl(355 70% 58%)",
      glow: "hsl(355 70% 78% / 0.4)",
      border: "hsl(355 70% 88% / 0.6)"
    },
    teal: { 
      top: "hsl(174 62% 56%)", 
      left: "hsl(174 62% 46%)", 
      right: "hsl(174 62% 36%)",
      glow: "hsl(174 62% 56% / 0.4)",
      border: "hsl(174 62% 76% / 0.6)"
    },
    gold: { 
      top: "hsl(48 93% 66%)", 
      left: "hsl(48 93% 56%)", 
      right: "hsl(48 93% 46%)",
      glow: "hsl(48 93% 66% / 0.4)",
      border: "hsl(48 93% 86% / 0.6)"
    },
    slate: { 
      top: "hsl(220 26% 30%)", 
      left: "hsl(220 26% 24%)", 
      right: "hsl(220 26% 18%)",
      glow: "hsl(220 26% 50% / 0.3)",
      border: "hsl(220 26% 50% / 0.4)"
    },
  }
  
  const colors = colorSets[color as keyof typeof colorSets] || colorSets.slate

  const w = 40
  const h = height

  return (
    <motion.g
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer" }}
    >
      {/* Ambient shadow (soft, distant) */}
      <motion.ellipse
        cx={x + w}
        cy={y + 15}
        rx={w + 5}
        ry={15}
        fill="hsl(220 26% 14% / 0.15)"
        animate={{ 
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 0.2 : 0.15
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Contact shadow (sharp, close) */}
      <motion.ellipse
        cx={x + w}
        cy={y + 5}
        rx={w - 5}
        ry={8}
        fill="hsl(220 26% 14% / 0.3)"
      />

      {/* Building group with hover lift */}
      <motion.g
        animate={{ 
          y: isHovered ? -8 : 0,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Floating animation wrapper */}
        <motion.g
          animate={{ 
            y: [0, -4, 0],
          }}
          transition={{
            y: { 
              duration: 3 + floatOffset, 
              repeat: Infinity, 
              ease: "easeInOut" 
            },
          }}
        >
          {/* Top face with inner glow */}
          <motion.path
            d={`M${x} ${y - h} L${x + w} ${y - h - w/2} L${x + w * 2} ${y - h} L${x + w} ${y - h + w/2} Z`}
            fill={colors.top}
            stroke={colors.border}
            strokeWidth="1"
          />
          
          {/* Left face */}
          <motion.path
            d={`M${x} ${y - h} L${x} ${y} L${x + w} ${y + w/2} L${x + w} ${y - h + w/2} Z`}
            fill={colors.left}
            stroke={colors.border}
            strokeWidth="1"
          />
          
          {/* Right face */}
          <motion.path
            d={`M${x + w} ${y - h + w/2} L${x + w} ${y + w/2} L${x + w * 2} ${y} L${x + w * 2} ${y - h} Z`}
            fill={colors.right}
            stroke={colors.border}
            strokeWidth="1"
          />
          
          {/* Glass reflection highlights */}
          <motion.path
            d={`M${x + 2} ${y - h + 5} L${x + w - 5} ${y - h - w/2 + 8} L${x + w} ${y - h - w/2 + 5}`}
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Window details with glow */}
          {height > 40 && (
            <>
              <rect 
                x={x + 8} 
                y={y - h + 15} 
                width={12} 
                height={8} 
                rx={1}
                fill="rgba(255,255,255,0.25)" 
              />
              <rect 
                x={x + 8} 
                y={y - h + 35} 
                width={12} 
                height={8} 
                rx={1}
                fill="rgba(255,255,255,0.25)" 
              />
            </>
          )}

          {/* Hover glow effect */}
          <motion.ellipse
            cx={x + w}
            cy={y - h/2}
            rx={w + 10}
            ry={h/2 + 10}
            fill={colors.glow}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.3 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ filter: "blur(15px)" }}
          />
        </motion.g>
      </motion.g>
    </motion.g>
  )
}

// Glowing Pipeline with path animation for data packets
function Pipeline({ d, delay = 0, id }: { d: string; delay?: number; id: string }) {
  return (
    <g>
      {/* Glow layer */}
      <motion.path
        d={d}
        stroke="hsl(174 62% 56% / 0.3)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 1, ease: "easeOut" }}
        style={{ filter: "blur(4px)" }}
      />
      {/* Main line */}
      <motion.path
        id={id}
        d={d}
        stroke="hsl(174 62% 56%)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 1, ease: "easeOut" }}
      />
      {/* Inner highlight */}
      <motion.path
        d={d}
        stroke="hsl(174 62% 76% / 0.5)"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.1, duration: 1, ease: "easeOut" }}
      />
    </g>
  )
}

// Data packet that travels along pipeline
function DataPacket({ 
  path, 
  delay = 0, 
  duration = 2,
  size = 4 
}: { 
  path: string
  delay?: number
  duration?: number
  size?: number
}) {
  return (
    <g>
      {/* Glow */}
      <motion.circle
        r={size + 4}
        fill="hsl(174 62% 56% / 0.4)"
        style={{ filter: "blur(4px)" }}
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{
          delay,
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        css={{ offsetPath: `path("${path}")` } as any}
      />
      {/* Core */}
      <motion.circle
        r={size}
        fill="white"
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{
          delay,
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        css={{ offsetPath: `path("${path}")` } as any}
      />
    </g>
  )
}

// Floating Particle with pulse
function FloatingParticle({ x, y, delay = 0, size = 3 }: { x: number; y: number; delay?: number; size?: number }) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.3, 0.7, 0.3], 
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        delay,
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Outer glow */}
      <motion.circle
        cx={x}
        cy={y}
        r={size + 6}
        fill="hsl(48 93% 66% / 0.2)"
        style={{ filter: "blur(4px)" }}
        animate={{ 
          y: [y, y - 10, y]
        }}
        transition={{
          delay,
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Core */}
      <motion.circle
        cx={x}
        cy={y}
        r={size}
        fill="hsl(48 93% 66%)"
        animate={{ 
          y: [y, y - 10, y]
        }}
        transition={{
          delay,
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.g>
  )
}

// Refined Server Rack
function ServerRack({ x, y, delay = 0 }: { x: number; y: number; delay?: number }) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay
      }}
    >
      {/* Shadow */}
      <ellipse cx={x + 25} cy={y + 75} rx={30} ry={8} fill="hsl(220 26% 14% / 0.2)" />
      
      {/* Rack body */}
      <rect x={x} y={y} width={50} height={70} rx={4} fill="hsl(220 26% 18%)" stroke="hsl(220 26% 30% / 0.5)" strokeWidth="1" />
      
      {/* Server units */}
      {[0, 1, 2, 3].map((i) => (
        <motion.g key={i}>
          <rect x={x + 5} y={y + 8 + i * 15} width={40} height={12} rx={2} fill="hsl(220 26% 25%)" stroke="hsl(220 26% 35% / 0.3)" strokeWidth="0.5" />
          <motion.circle
            cx={x + 12}
            cy={y + 14 + i * 15}
            r={2}
            fill="hsl(174 62% 56%)"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
          />
          <motion.circle
            cx={x + 20}
            cy={y + 14 + i * 15}
            r={2}
            fill="hsl(48 93% 66%)"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
          <rect x={x + 28} y={y + 12 + i * 15} width={12} height={4} rx={1} fill="hsl(220 26% 35% / 0.5)" />
        </motion.g>
      ))}
    </motion.g>
  )
}

// Isometric Platform with layered shadows
function IsometricPlatform({ delay = 0 }: { delay?: number }) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay
      }}
    >
      {/* Ambient shadow */}
      <ellipse cx="320" cy="270" rx="140" ry="50" fill="hsl(220 26% 14% / 0.1)" style={{ filter: "blur(20px)" }} />
      
      {/* Contact shadow */}
      <ellipse cx="320" cy="250" rx="120" ry="35" fill="hsl(220 26% 14% / 0.15)" style={{ filter: "blur(8px)" }} />
      
      {/* Main platform */}
      <motion.path
        d="M200 180 L320 120 L440 180 L320 240 Z"
        fill="hsl(220 26% 14%)"
        stroke="hsl(220 26% 24% / 0.5)"
        strokeWidth="1"
      />
      {/* Platform depth left */}
      <motion.path
        d="M200 180 L200 200 L320 260 L320 240 Z"
        fill="hsl(220 26% 20%)"
        stroke="hsl(220 26% 30% / 0.3)"
        strokeWidth="0.5"
      />
      {/* Platform depth right */}
      <motion.path
        d="M320 240 L320 260 L440 200 L440 180 Z"
        fill="hsl(220 26% 25%)"
        stroke="hsl(220 26% 35% / 0.3)"
        strokeWidth="0.5"
      />
      
      {/* Grid lines on platform surface */}
      {[0, 1, 2, 3].map((i) => (
        <line 
          key={`h-${i}`}
          x1={220 + i * 30} 
          y1={150 + i * 15} 
          x2={340 + i * 30} 
          y2={210 + i * 15}
          stroke="hsl(220 26% 30% / 0.2)"
          strokeWidth="0.5"
          strokeDasharray="2 4"
        />
      ))}
    </motion.g>
  )
}

// Main Isometric Scene Component
export function IsometricScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 30, stiffness: 120 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const rotateX = useTransform(y, [-300, 300], [8, -8])
  const rotateY = useTransform(x, [-300, 300], [-8, 8])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Pipeline paths for data packet animation
  const pipePath1 = "M260 140 Q280 120 320 110"
  const pipePath2 = "M320 110 Q360 100 400 130"
  const pipePath3 = "M240 170 Q280 200 340 200"

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      {/* Radial masked dotted grid background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, transparent 0%, hsl(210 20% 98%) 70%),
            radial-gradient(circle, hsl(226 23% 88% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 20px 20px',
        }}
      />

      <motion.div
        className="relative"
        style={{
          perspective: 1200,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.svg
          width="500"
          height="450"
          viewBox="0 0 500 450"
          className="overflow-visible"
          style={{
            rotateX,
            rotateY,
          }}
        >
          <defs>
            {/* Refined glow gradient */}
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(174 62% 56%)" stopOpacity="0.12" />
              <stop offset="50%" stopColor="hsl(174 62% 56%)" stopOpacity="0.05" />
              <stop offset="100%" stopColor="hsl(174 62% 56%)" stopOpacity="0" />
            </radialGradient>
            
            {/* Soft glow filter */}
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Background glow */}
          <ellipse cx="320" cy="220" rx="200" ry="120" fill="url(#glowGradient)" />

          {/* Main Platform - scroll triggered */}
          <IsometricPlatform delay={0} />
          
          {/* Secondary Platform */}
          <motion.g
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.15
            }}
          >
            <ellipse cx="360" cy="165" rx="50" ry="15" fill="hsl(220 26% 14% / 0.1)" style={{ filter: "blur(8px)" }} />
            <path d="M280 140 L360 100 L440 140 L360 180 Z" fill="hsl(220 26% 20%)" stroke="hsl(220 26% 30% / 0.4)" strokeWidth="0.5" />
            <path d="M280 140 L280 155 L360 195 L360 180 Z" fill="hsl(220 26% 26%)" stroke="hsl(220 26% 36% / 0.3)" strokeWidth="0.5" />
            <path d="M360 180 L360 195 L440 155 L440 140 Z" fill="hsl(220 26% 30%)" stroke="hsl(220 26% 40% / 0.3)" strokeWidth="0.5" />
          </motion.g>

          {/* Glass Buildings - staggered scroll animation */}
          <IsometricBuilding x={220} y={180} height={60} color="teal" delay={0.2} floatOffset={0} />
          <IsometricBuilding x={280} y={160} height={80} color="coral" delay={0.35} floatOffset={0.5} />
          <IsometricBuilding x={340} y={170} height={50} color="gold" delay={0.5} floatOffset={1} />
          <IsometricBuilding x={380} y={190} height={40} color="slate" delay={0.65} floatOffset={0.3} />

          {/* Glowing Pipelines */}
          <g filter="url(#softGlow)">
            <Pipeline d={pipePath1} delay={0.8} id="pipe1" />
            <Pipeline d={pipePath2} delay={1.0} id="pipe2" />
            <Pipeline d={pipePath3} delay={1.2} id="pipe3" />
          </g>

          {/* Live Data Packets traveling along pipelines */}
          {isInView && (
            <g>
              {/* Packets on pipe 1 */}
              <motion.circle
                r="4"
                fill="white"
                filter="url(#softGlow)"
                initial={{ cx: 260, cy: 140 }}
                animate={{ 
                  cx: [260, 270, 290, 310, 320],
                  cy: [140, 130, 115, 112, 110]
                }}
                transition={{
                  duration: 1.5,
                  delay: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.circle
                r="3"
                fill="white"
                filter="url(#softGlow)"
                initial={{ cx: 260, cy: 140 }}
                animate={{ 
                  cx: [260, 270, 290, 310, 320],
                  cy: [140, 130, 115, 112, 110]
                }}
                transition={{
                  duration: 1.5,
                  delay: 2.2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Packets on pipe 2 */}
              <motion.circle
                r="4"
                fill="white"
                filter="url(#softGlow)"
                initial={{ cx: 320, cy: 110 }}
                animate={{ 
                  cx: [320, 340, 370, 390, 400],
                  cy: [110, 103, 100, 110, 130]
                }}
                transition={{
                  duration: 1.8,
                  delay: 1.8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Packets on pipe 3 */}
              <motion.circle
                r="3"
                fill="hsl(355 70% 88%)"
                filter="url(#softGlow)"
                initial={{ cx: 240, cy: 170 }}
                animate={{ 
                  cx: [240, 260, 290, 320, 340],
                  cy: [170, 185, 198, 200, 200]
                }}
                transition={{
                  duration: 1.2,
                  delay: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.circle
                r="2"
                fill="hsl(355 70% 88%)"
                filter="url(#softGlow)"
                initial={{ cx: 240, cy: 170 }}
                animate={{ 
                  cx: [240, 260, 290, 320, 340],
                  cy: [170, 185, 198, 200, 200]
                }}
                transition={{
                  duration: 1.2,
                  delay: 2.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </g>
          )}

          {/* Server Rack */}
          <ServerRack x={100} y={150} delay={0.7} />

          {/* Floating particles */}
          <FloatingParticle x={150} y={120} delay={1.5} size={4} />
          <FloatingParticle x={420} y={100} delay={1.8} size={3} />
          <FloatingParticle x={180} y={250} delay={2.1} size={5} />
          <FloatingParticle x={400} y={230} delay={2.4} size={3} />
          <FloatingParticle x={300} y={80} delay={2.7} size={4} />

        </motion.svg>
      </motion.div>

      {/* Subtle noise overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
