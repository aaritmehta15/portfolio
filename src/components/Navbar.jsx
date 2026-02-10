import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)

    const links = [
        { label: 'PROJECTS', href: '#projects' },
        { label: 'EXPERIENCE', href: '#experience' },
        { label: 'SKILLS', href: '#skills' },
        { label: 'ABOUT', href: '#about' },
        { label: 'CONTACT', href: '#contact' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            // Detect active section
            const sections = links.map(l => l.href.replace('#', ''))
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i])
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActive(sections[i])
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50"
            style={{
                borderBottom: scrolled ? '2px solid var(--accent)' : '2px solid var(--border)',
                background: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.7)',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease',
            }}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <a
                    href="#"
                    style={{
                        fontFamily: "'Clash Display', sans-serif",
                        fontWeight: 700,
                        fontSize: '1.3rem',
                        color: 'var(--accent)',
                        textDecoration: 'none',
                        letterSpacing: '-1px',
                    }}
                >
                    AARIT<span style={{ color: 'var(--text-primary)' }}>.DEV</span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-6">
                    {links.map((link) => {
                        const isActive = active === link.href.replace('#', '')
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: '0.7rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s',
                                    borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                                    paddingBottom: '4px',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'var(--accent)'
                                    e.target.style.borderBottom = '2px solid var(--accent)'
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        e.target.style.color = 'var(--text-secondary)'
                                        e.target.style.borderBottom = '2px solid transparent'
                                    }
                                }}
                            >
                                {link.label}
                            </a>
                        )
                    })}
                    <a
                        href="https://github.com/aaritmehta15"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-brutal"
                        style={{ padding: '8px 20px', fontSize: '0.65rem' }}
                    >
                        GITHUB ↗
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        background: 'none',
                        border: '2px solid var(--border)',
                        padding: '8px 12px',
                        cursor: 'pointer',
                        color: 'var(--accent)',
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.8rem',
                    }}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden"
                    style={{
                        background: 'var(--bg-primary)',
                        borderTop: '1px solid var(--border)',
                        padding: '20px',
                    }}
                >
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                display: 'block',
                                fontFamily: "'Space Mono', monospace",
                                fontSize: '0.8rem',
                                color: 'var(--text-primary)',
                                textDecoration: 'none',
                                padding: '12px 0',
                                borderBottom: '1px solid var(--border)',
                                letterSpacing: '2px',
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://github.com/aaritmehta15"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-brutal"
                        style={{ marginTop: '16px', display: 'block', textAlign: 'center', fontSize: '0.7rem' }}
                    >
                        GITHUB ↗
                    </a>
                </motion.div>
            )}
        </motion.nav>
    )
}

export default Navbar
