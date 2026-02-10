import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
    const [copied, setCopied] = useState(false)

    const copyEmail = () => {
        navigator.clipboard.writeText('aaritmehta152005@gmail.com')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section id="contact" style={{ padding: '120px 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }} className="grid-bg">
            {/* Accent orb */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--accent-dim) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                }}
            />

            <div className="max-w-7xl mx-auto px-6 text-center" style={{ position: 'relative' }}>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label" style={{ textAlign: 'center' }}>// GET IN TOUCH</div>
                    <h2
                        className="section-title"
                        style={{ marginBottom: '24px' }}
                    >
                        LET'S BUILD<br />
                        <span style={{ color: 'var(--accent)', textShadow: '0 0 60px var(--accent-dim)' }}>SOMETHING</span><br />
                        TOGETHER<span style={{ color: 'var(--accent)' }}>.</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '500px',
                        margin: '0 auto 50px',
                        lineHeight: 1.8,
                    }}
                >
                    Looking for AI/ML, Data Science, or SWE roles.
                    Open to full-time, internships, and collaborations.
                </motion.p>

                {/* Email */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={copyEmail}
                    style={{
                        display: 'inline-block',
                        padding: '24px 48px',
                        border: '3px solid var(--accent)',
                        fontFamily: "'Clash Display', sans-serif",
                        fontWeight: 700,
                        fontSize: 'clamp(1rem, 3vw, 1.8rem)',
                        color: 'var(--accent)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        marginBottom: '50px',
                        position: 'relative',
                        background: 'transparent',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--accent)'
                        e.currentTarget.style.color = 'var(--bg-primary)'
                        e.currentTarget.style.boxShadow = '0 0 50px var(--accent-glow), 12px 12px 0 var(--accent-dim)'
                        e.currentTarget.style.transform = 'translate(-4px, -4px)'
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = 'var(--accent)'
                        e.currentTarget.style.boxShadow = 'none'
                        e.currentTarget.style.transform = 'none'
                    }}
                >
                    {copied ? '✓ COPIED TO CLIPBOARD!' : 'AARITMEHTA152005@GMAIL.COM'}
                    <div style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.6rem',
                        color: 'inherit',
                        opacity: 0.7,
                        marginTop: '8px',
                        letterSpacing: '3px',
                    }}>
                        {copied ? 'READY TO PASTE' : 'CLICK TO COPY'}
                    </div>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center gap-4 flex-wrap"
                >
                    {[
                        { label: 'GITHUB', url: 'https://github.com/aaritmehta15', icon: '⟨/⟩' },
                        { label: 'LINKEDIN', url: 'https://www.linkedin.com/in/aarit-mehta-949597229/', icon: 'in' },
                        { label: 'EMAIL', url: 'mailto:aaritmehta152005@gmail.com', icon: '@' },
                    ].map((link, i) => (
                        <motion.a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 + i * 0.1 }}
                            className="btn-brutal-outline"
                            style={{
                                fontSize: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{link.icon}</span>
                            {link.label} ↗
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
