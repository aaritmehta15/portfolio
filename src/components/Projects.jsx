import { motion } from 'framer-motion'
import { useState } from 'react'

const projects = [
    {
        id: '01',
        title: 'ADAPTIVE TRUST-AWARE PERSUASION SYSTEM',
        subtitle: 'Ethical AI Persuasion Framework',
        description: 'Pioneered a trust-constrained LLM framework demonstrating ethical AI persuasion with Llama 3.1-8B across 15-turn conversations.',
        impact: [
            '8 production API endpoints',
            '38 NLP patterns @ 90% confidence',
            'A/B testing via telemetry',
            'Trust-constrained generation',
        ],
        tech: ['Llama 3.1-8B', 'FastAPI', 'NLP', 'Telemetry'],
        github: 'https://github.com/aaritmehta15/Adaptive-Trust-Aware-Persuasion-System',
        color: '#39ff14',
    },
    {
        id: '02',
        title: 'AUTONOMOUS EV FLEET COMMAND',
        subtitle: 'Intent-Driven AI Fleet Management',
        description: 'Architected an AI-powered fleet backend integrating Google Gemma-7B for real-time decision reasoning, processing 6 event types with explainable AI.',
        impact: [
            '23 REST endpoints',
            '1,900+ penalty calculations',
            'Multilingual support',
            'Explainable AI trust scoring',
        ],
        tech: ['Gemma-7B', 'FastAPI', 'Decision AI', 'Real-time'],
        github: 'https://github.com/aaritmehta15/GDG_Agentic_Fleet_Command',
        color: '#ff3333',
    },
    {
        id: '03',
        title: 'INTERPRETABLE CREDIT RISK AI',
        subtitle: 'High-Stakes Financial ML',
        description: 'Engineered a credit risk model achieving 96.7% AUC-ROC on 32,500+ loan applications using LightGBM with SHAP and LIME for fairness and compliance.',
        impact: [
            '96.7% AUC-ROC accuracy',
            '32,500+ applications processed',
            'SHAP + LIME explainability',
            'Real-time Streamlit dashboard',
        ],
        tech: ['LightGBM', 'SHAP', 'LIME', 'Streamlit'],
        github: 'https://github.com/aaritmehta15/explainable-ai-credit-risk-app',
        color: '#ffaa00',
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
    }),
}

const Projects = () => {
    const [hoveredId, setHoveredId] = useState(null)

    return (
        <section id="projects" style={{ padding: '120px 0', background: 'var(--bg-primary)' }}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '80px', textAlign: 'center' }}
                >
                    <div className="section-label" style={{ textAlign: 'center' }}>// SELECTED WORK</div>
                    <h2 className="section-title">
                        PROJECTS<span style={{ color: 'var(--accent)' }}>.</span>
                    </h2>
                </motion.div>

                {/* Project Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {projects.map((project, i) => (
                        <motion.a
                            key={project.id}
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            style={{
                                display: 'block',
                                padding: '40px',
                                border: `2px solid ${hoveredId === project.id ? project.color : 'var(--border)'}`,
                                background: hoveredId === project.id ? 'var(--bg-card)' : 'transparent',
                                cursor: 'pointer',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Project number */}
                            <div style={{
                                position: 'absolute',
                                top: 20,
                                right: 24,
                                fontFamily: "'Clash Display', sans-serif",
                                fontSize: '4rem',
                                fontWeight: 700,
                                color: hoveredId === project.id ? project.color : 'var(--border)',
                                lineHeight: 1,
                                transition: 'color 0.3s',
                                opacity: 0.3,
                            }}>
                                {project.id}
                            </div>

                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                {/* Left side */}
                                <div style={{ flex: 1 }}>
                                    <div style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontSize: '0.65rem',
                                        color: project.color,
                                        letterSpacing: '3px',
                                        textTransform: 'uppercase',
                                        marginBottom: '8px',
                                    }}>
                                        {project.subtitle}
                                    </div>
                                    <h3 style={{
                                        fontFamily: "'Clash Display', sans-serif",
                                        fontWeight: 700,
                                        fontSize: 'clamp(1.3rem, 3vw, 2rem)',
                                        letterSpacing: '-1px',
                                        color: 'var(--text-primary)',
                                        marginBottom: '12px',
                                        lineHeight: 1.1,
                                    }}>
                                        {project.title}
                                    </h3>
                                    <p style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontSize: '0.8rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.6,
                                        maxWidth: '500px',
                                    }}>
                                        {project.description}
                                    </p>

                                    {/* Tech tags */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                style={{
                                                    fontFamily: "'Space Mono', monospace",
                                                    fontSize: '0.6rem',
                                                    padding: '4px 10px',
                                                    border: `1px solid ${project.color}33`,
                                                    color: project.color,
                                                    letterSpacing: '1px',
                                                    textTransform: 'uppercase',
                                                }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right side: Impact metrics */}
                                <div style={{
                                    minWidth: '240px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                    paddingTop: '28px',
                                }}>
                                    {project.impact.map((item, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                fontFamily: "'Space Mono', monospace",
                                                fontSize: '0.7rem',
                                                color: 'var(--text-secondary)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                            }}
                                        >
                                            <span style={{ color: project.color, fontSize: '0.5rem' }}>▸</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Hover arrow */}
                            <motion.div
                                animate={{
                                    x: hoveredId === project.id ? 0 : -20,
                                    opacity: hoveredId === project.id ? 1 : 0,
                                }}
                                style={{
                                    position: 'absolute',
                                    bottom: 20,
                                    right: 24,
                                    fontFamily: "'Clash Display', sans-serif",
                                    fontSize: '1.2rem',
                                    color: project.color,
                                }}
                            >
                                VIEW ON GITHUB →
                            </motion.div>
                        </motion.a>
                    ))}
                </div>

                {/* Additional projects list */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    style={{
                        marginTop: '60px',
                        padding: '30px',
                        border: '1px solid var(--border)',
                    }}
                >
                    <div style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.7rem',
                        color: 'var(--text-secondary)',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: '16px',
                    }}>
            // OTHER WORK
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            { name: 'LLM Personality Evaluation Suite', tech: 'BFI-44 • Gemma • NLP', url: 'https://github.com/aaritmehta15/LLM-Personality-Suite' },
                            { name: 'AI Mental Fitness Platform', tech: 'Flask • Random Forest • LLaMA', url: 'https://github.com/aaritmehta15/Mental_Fitness' },
                        ].map((p) => (
                            <a
                                key={p.name}
                                href={p.url}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '12px 0',
                                    borderBottom: '1px solid var(--border)',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.paddingLeft = '12px'
                                    e.currentTarget.style.borderColor = 'var(--accent)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.paddingLeft = '0'
                                    e.currentTarget.style.borderColor = 'var(--border)'
                                }}
                            >
                                <span style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: '0.85rem',
                                    color: 'var(--text-primary)',
                                }}>
                                    {p.name}
                                </span>
                                <span style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: '0.65rem',
                                    color: 'var(--text-secondary)',
                                    letterSpacing: '1px',
                                }}>
                                    {p.tech} →
                                </span>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
