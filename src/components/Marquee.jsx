import { motion } from 'framer-motion'

const Marquee = () => {
    const items = [
        'GENERATIVE AI', '★', 'LLM SYSTEMS', '★', 'EXPLAINABLE AI', '★',
        'DATA ENGINEERING', '★', 'PYTORCH', '★', 'FASTAPI', '★',
        'PRODUCTION ML', '★', 'NLP', '★', 'MACHINE LEARNING', '★',
        'TRUST SCORING', '★',
    ]

    return (
        <div className="marquee-wrapper">
            <div className="marquee-track">
                {[...items, ...items].map((item, i) => (
                    <span
                        key={i}
                        style={{
                            fontFamily: "'Clash Display', sans-serif",
                            fontWeight: 700,
                            fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            whiteSpace: 'nowrap',
                            padding: '0 24px',
                            color: item === '★' ? 'var(--accent)' : 'var(--text-primary)',
                        }}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Marquee
