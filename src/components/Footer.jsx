const Footer = () => {
    return (
        <footer style={{
            padding: '30px 24px',
            borderTop: '2px solid var(--border)',
            background: 'var(--bg-secondary)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
        }}>
            <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.65rem',
                color: 'var(--text-secondary)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
            }}>
                © 2025 AARIT MEHTA
            </span>
            <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.65rem',
                color: 'var(--text-secondary)',
                letterSpacing: '1px',
            }}>
                DESIGNED & BUILT WITH <span style={{ color: 'var(--accent)' }}>OBSESSION</span>
            </span>
        </footer>
    )
}

export default Footer
