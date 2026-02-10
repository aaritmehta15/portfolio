import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
    {
        role: 'AI Intern',
        company: 'Ashna AI, Noida',
        period: 'May 2025 – Jul 2025',
        highlights: [
            'Fine-tuned T5 transformers for automated question generation',
            'Built PyTorch data pipelines for SQuAD dataset experiments',
        ],
        accent: '#39ff14',
    },
    {
        role: 'ML Intern',
        company: 'Suvidha Foundation, Mumbai',
        period: 'May 2025 – Jul 2025',
        highlights: [
            'Led end-to-end text summarization tool lifecycle',
            'Delivered T5-small model meeting 95% accuracy benchmarks',
        ],
        accent: '#ff3333',
    },
    {
        role: 'Backend Dev Intern',
        company: 'KJSCE, Mumbai',
        period: 'Feb 2025 – May 2025',
        highlights: [
            '12 Flask REST endpoints for AI fitness platform',
            'Random Forest + LLaMA integration for personalized plans',
        ],
        accent: '#ffaa00',
    },
]

const skills = {
    'AI & ML': ['PyTorch', 'Scikit-learn', 'Hugging Face', 'LLMs (Gemma, Llama)', 'Fine-Tuning', 'Prompt Engineering', 'NLP', 'XAI (SHAP, LIME)', 'LightGBM', 'XGBoost'],
    'LANGUAGES': ['Python', 'SQL', 'Java'],
    'BACKEND & TOOLS': ['FastAPI', 'Flask', 'REST APIs', 'Git', 'GitHub', 'Docker (basic)', 'Render', 'Vercel'],
    'DATABASES': ['MySQL', 'PostgreSQL', 'MongoDB'],
    'DATA & VISUALIZATION': ['NumPy', 'Pandas', 'Streamlit', 'Tableau', 'Matplotlib', 'Plotly'],
}

const AnimatedCounter = ({ value, suffix = '' }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <span ref={ref}>
            {isInView ? (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {value}{suffix}
                </motion.span>
            ) : '0'}
        </span>
    )
}

const About = () => {
    return (
        <>
            {/* ====== EXPERIENCE SECTION ====== */}
            <section id="experience" style={{ padding: '120px 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
                {/* Animated background accent line */}
                <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '200px',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
                    }}
                />

                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ marginBottom: '60px', textAlign: 'center' }}
                    >
                        <div className="section-label" style={{ textAlign: 'center' }}>// WHERE I'VE WORKED</div>
                        <h2 className="section-title">
                            EXPERIENCE<span style={{ color: 'var(--accent)' }}>.</span>
                        </h2>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2px',
                    }}>
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40, rotateX: 5 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                style={{
                                    padding: '36px',
                                    border: '2px solid var(--border)',
                                    background: 'var(--bg-card)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'default',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = exp.accent
                                    e.currentTarget.style.transform = 'translate(-4px, -4px)'
                                    e.currentTarget.style.boxShadow = `8px 8px 0 ${exp.accent}33`
                                    e.currentTarget.querySelector('.exp-glow').style.opacity = '1'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--border)'
                                    e.currentTarget.style.transform = 'none'
                                    e.currentTarget.style.boxShadow = 'none'
                                    e.currentTarget.querySelector('.exp-glow').style.opacity = '0'
                                }}
                            >
                                {/* Glow effect on hover */}
                                <div
                                    className="exp-glow"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '3px',
                                        background: `linear-gradient(90deg, transparent, ${exp.accent}, transparent)`,
                                        opacity: 0,
                                        transition: 'opacity 0.3s',
                                    }}
                                />

                                <div style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: '0.6rem',
                                    color: 'var(--text-secondary)',
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    marginBottom: '12px',
                                }}>
                                    {exp.period}
                                </div>
                                <h4 style={{
                                    fontFamily: "'Clash Display', sans-serif",
                                    fontWeight: 700,
                                    fontSize: '1.4rem',
                                    color: 'var(--text-primary)',
                                    marginBottom: '4px',
                                    letterSpacing: '-0.5px',
                                }}>
                                    {exp.role}
                                </h4>
                                <div style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: '0.7rem',
                                    color: exp.accent,
                                    marginBottom: '20px',
                                    letterSpacing: '1px',
                                }}>
                                    {exp.company}
                                </div>
                                {exp.highlights.map((h, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            fontFamily: "'Space Mono', monospace",
                                            fontSize: '0.78rem',
                                            color: 'var(--text-secondary)',
                                            lineHeight: 1.7,
                                            display: 'flex',
                                            gap: '10px',
                                            marginBottom: '4px',
                                        }}
                                    >
                                        <span style={{ color: exp.accent, flexShrink: 0 }}>▸</span> {h}
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Animated background accent line bottom */}
                <motion.div
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '200px',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
                    }}
                />
            </section>

            {/* ====== SKILLS / TECH STACK SECTION ====== */}
            <section id="skills" style={{ padding: '120px 0', background: 'var(--bg-primary)', position: 'relative' }}>
                {/* Moving grid dots background */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle, var(--accent) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    opacity: 0.03,
                }} />

                <div className="max-w-7xl mx-auto px-6" style={{ position: 'relative' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '60px' }}
                    >
                        <div className="section-label" style={{ textAlign: 'center' }}>// WHAT I WORK WITH</div>
                        <h2 className="section-title">
                            TECH STACK<span style={{ color: 'var(--accent)' }}>.</span>
                        </h2>
                    </motion.div>

                    {Object.entries(skills).map(([category, items], i) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            style={{ marginBottom: '40px', textAlign: 'center' }}
                        >
                            <div style={{
                                fontFamily: "'Clash Display', sans-serif",
                                fontWeight: 700,
                                fontSize: '1.2rem',
                                color: 'var(--accent)',
                                letterSpacing: '3px',
                                textTransform: 'uppercase',
                                marginBottom: '20px',
                            }}>
                                {category}
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                                {items.map((item, idx) => (
                                    <motion.span
                                        key={item}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 + idx * 0.03, duration: 0.3 }}
                                        style={{
                                            fontFamily: "'Space Mono', monospace",
                                            fontSize: '0.85rem',
                                            padding: '12px 24px',
                                            border: '2px solid var(--border)',
                                            color: 'var(--text-primary)',
                                            letterSpacing: '1px',
                                            transition: 'all 0.25s ease',
                                            cursor: 'default',
                                            background: 'var(--bg-card)',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.borderColor = 'var(--accent)'
                                            e.target.style.color = 'var(--accent)'
                                            e.target.style.background = 'var(--accent-dim)'
                                            e.target.style.transform = 'translateY(-4px) scale(1.05)'
                                            e.target.style.boxShadow = '0 8px 25px var(--accent-glow)'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.borderColor = 'var(--border)'
                                            e.target.style.color = 'var(--text-primary)'
                                            e.target.style.background = 'var(--bg-card)'
                                            e.target.style.transform = 'none'
                                            e.target.style.boxShadow = 'none'
                                        }}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ====== ABOUT SECTION ====== */}
            <section id="about" style={{ padding: '120px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ marginBottom: '60px', textAlign: 'center' }}
                    >
                        <div className="section-label" style={{ textAlign: 'center' }}>// WHO AM I</div>
                        <h2 className="section-title">
                            ABOUT<span style={{ color: 'var(--accent)' }}>.</span>
                        </h2>
                    </motion.div>

                    {/* Bio */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: '1rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 2,
                            maxWidth: '700px',
                            textAlign: 'center',
                            margin: '0 auto 80px auto',
                        }}
                    >
                        B.Tech in AI & Data Science at <span style={{ color: 'var(--text-primary)' }}>K.J. Somaiya College of Engineering</span>,
                        Mumbai. I build things that think — from <span style={{ color: 'var(--accent)' }}>trust-constrained LLM systems</span> to
                        production-grade ML pipelines. I care about AI that's not just smart, but <span style={{ color: 'var(--accent)' }}>responsible and deployable</span>.
                    </motion.p>

                    {/* Stats row */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2px',
                        marginBottom: '60px',
                    }}>
                        {[
                            { value: '9.51', suffix: '/10', label: 'GPA' },
                            { value: '3', suffix: '+', label: 'INTERNSHIPS' },
                            { value: '5', suffix: '+', label: 'AI PROJECTS' },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    textAlign: 'center',
                                    padding: '32px 24px',
                                    border: '2px solid var(--border)',
                                    background: 'var(--bg-card)',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--accent)'
                                    e.currentTarget.style.transform = 'translateY(-4px)'
                                    e.currentTarget.style.boxShadow = '0 8px 30px var(--accent-dim)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--border)'
                                    e.currentTarget.style.transform = 'none'
                                    e.currentTarget.style.boxShadow = 'none'
                                }}
                            >
                                <div style={{
                                    fontFamily: "'Clash Display', sans-serif",
                                    fontWeight: 700,
                                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                                    color: 'var(--accent)',
                                    lineHeight: 1,
                                    marginBottom: '8px',
                                }}>
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: '0.7rem',
                                    color: 'var(--text-secondary)',
                                    letterSpacing: '3px',
                                    textTransform: 'uppercase',
                                }}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Education + Leadership Row */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2px',
                    }}>
                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{
                                padding: '40px',
                                border: '3px solid var(--accent)',
                                background: 'var(--accent-dim)',
                                textAlign: 'center',
                            }}
                        >
                            <div style={{
                                fontFamily: "'Clash Display', sans-serif",
                                fontWeight: 700,
                                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                                color: 'var(--accent)',
                                marginBottom: '8px',
                                letterSpacing: '-1px',
                            }}>
                                9.51 / 10.0
                            </div>
                            <div style={{
                                fontFamily: "'Clash Display', sans-serif",
                                fontWeight: 600,
                                fontSize: '1rem',
                                color: 'var(--text-primary)',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                marginBottom: '12px',
                            }}>
                                GPA
                            </div>
                            <div style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: '0.75rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.8,
                            }}>
                                B.Tech AI & Data Science<br />
                                K.J. Somaiya College of Engineering<br />
                                2023 – 2027
                            </div>
                        </motion.div>

                        {/* Leadership */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            style={{
                                padding: '40px',
                                border: '3px solid var(--border)',
                                background: 'var(--bg-card)',
                                textAlign: 'center',
                                transition: 'all 0.25s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--accent)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--border)'
                            }}
                        >
                            <div style={{
                                fontFamily: "'Clash Display', sans-serif",
                                fontWeight: 700,
                                fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                                color: 'var(--text-primary)',
                                marginBottom: '8px',
                                letterSpacing: '-0.5px',
                            }}>
                                WORKSHOP LEAD
                            </div>
                            <div style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: '0.7rem',
                                color: 'var(--accent)',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                marginBottom: '16px',
                            }}>
                                KJSCE Codecell • 2024 – 2025
                            </div>
                            <div style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: '0.75rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.8,
                            }}>
                                Coordinated contests for 100+ students, led competitive programming workshops, increased budget by 15%.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
