import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const roles = [
    'AI ENGINEER',
    'ML ENGINEER',
    'DATA SCIENTIST',
    'LLM SPECIALIST',
    'FULL-STACK DEV',
]

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length)
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    return (
        <section
            className="min-h-screen flex flex-col justify-center relative grid-bg"
            style={{ paddingTop: '100px', overflow: 'hidden' }}
        >
            {/* Animated diagonal lines background */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 80px,
                    rgba(57,255,20,0.02) 80px,
                    rgba(57,255,20,0.02) 81px
                )`,
            }} />

            {/* Floating orb */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    top: '15%',
                    right: '10%',
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--accent-dim) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    pointerEvents: 'none',
                }}
            />

            {/* Second orb */}
            <motion.div
                animate={{
                    y: [0, 25, 0],
                    x: [0, -15, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '5%',
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,51,51,0.1) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    pointerEvents: 'none',
                }}
            />

            {/* Decorative corner brackets */}
            <div style={{
                position: 'absolute', top: 80, left: 24,
                width: 60, height: 60,
                borderTop: '3px solid var(--accent)',
                borderLeft: '3px solid var(--accent)',
                opacity: 0.4,
            }} />
            <div style={{
                position: 'absolute', bottom: 24, right: 24,
                width: 60, height: 60,
                borderBottom: '3px solid var(--accent)',
                borderRight: '3px solid var(--accent)',
                opacity: 0.4,
            }} />

            <div className="max-w-7xl mx-auto px-6 w-full" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                {/* Status line */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.75rem',
                        color: 'var(--accent)',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        marginBottom: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: '8px 24px',
                        border: '1px solid var(--accent-dim)',
                        background: 'var(--accent-dim)',
                    }}
                >
                    <span style={{
                        width: 8, height: 8, borderRadius: '50%',
                        background: 'var(--accent)',
                        boxShadow: '0 0 12px var(--accent)',
                        display: 'inline-block',
                        animation: 'pulse 2s infinite',
                    }} />
                    AVAILABLE FOR OPPORTUNITIES
                </motion.div>

                {/* Name */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ marginBottom: '20px' }}
                >
                    <h1
                        className="glitch"
                        data-text="AARIT"
                        style={{
                            fontFamily: "'Clash Display', sans-serif",
                            fontSize: 'clamp(4rem, 14vw, 12rem)',
                            fontWeight: 700,
                            lineHeight: 0.85,
                            letterSpacing: '-6px',
                            textTransform: 'uppercase',
                        }}
                    >
                        AARIT
                    </h1>
                    <div
                        style={{
                            fontFamily: "'Clash Display', sans-serif",
                            fontSize: 'clamp(4rem, 14vw, 12rem)',
                            fontWeight: 700,
                            lineHeight: 0.85,
                            letterSpacing: '-6px',
                            textTransform: 'uppercase',
                            color: 'var(--accent)',
                            textShadow: '0 0 60px var(--accent-dim)',
                        }}
                    >
                        MEHTA
                    </div>
                </motion.div>

                {/* Rotating role */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    style={{
                        height: '36px',
                        overflow: 'hidden',
                        marginBottom: '32px',
                    }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={roleIndex}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -30, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                fontFamily: "'Clash Display', sans-serif",
                                fontSize: '1.3rem',
                                fontWeight: 600,
                                letterSpacing: '6px',
                                color: 'var(--text-secondary)',
                                textTransform: 'uppercase',
                            }}
                        >
                            {roles[roleIndex]}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)',
                        color: 'var(--text-secondary)',
                        maxWidth: '550px',
                        lineHeight: 1.9,
                        marginBottom: '40px',
                        textAlign: 'center',
                    }}
                >
                    Building{' '}
                    <span style={{ color: 'var(--text-primary)' }}>production-grade LLM systems</span>{' '}
                    and end-to-end ML pipelines.
                    <br />
                    <span style={{ color: 'var(--accent)' }}>GPA: 9.51/10.0</span> — K.J. Somaiya College of Engineering
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <a href="#projects" className="btn-brutal">VIEW PROJECTS →</a>
                    <a href="#contact" className="btn-brutal-outline">LET'S TALK</a>
                </motion.div>

                {/* Tech stack ticker */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                    style={{
                        marginTop: '60px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        justifyContent: 'center',
                    }}
                >
                    {['PyTorch', 'LLMs', 'FastAPI', 'Hugging Face', 'SHAP', 'LightGBM', 'Python', 'SQL'].map((tech, i) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.7 + i * 0.08 }}
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: '0.65rem',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                padding: '6px 14px',
                                border: '1px solid var(--border)',
                                color: 'var(--text-secondary)',
                                transition: 'all 0.2s',
                                cursor: 'default',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = 'var(--accent)'
                                e.target.style.color = 'var(--accent)'
                                e.target.style.boxShadow = '0 0 20px var(--accent-dim)'
                                e.target.style.transform = 'translateY(-2px)'
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = 'var(--border)'
                                e.target.style.color = 'var(--text-secondary)'
                                e.target.style.boxShadow = 'none'
                                e.target.style.transform = 'none'
                            }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}
                style={{
                    position: 'absolute',
                    bottom: 40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                }}
            >
                <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.6rem',
                    letterSpacing: '3px',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    writingMode: 'vertical-lr',
                }}>
                    SCROLL
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                        width: 1,
                        height: 40,
                        background: 'linear-gradient(to bottom, var(--accent), transparent)',
                    }}
                />
            </motion.div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.3; }
                }
            `}</style>
        </section>
    )
}

export default Hero
