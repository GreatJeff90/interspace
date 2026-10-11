export default function SaturnLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Interspace Saturn Symbol">
      <circle cx="12" cy="12" r="5" fill="currentColor" />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.2"
        stroke="currentColor"
        strokeWidth="1.6"
        transform="rotate(-22 12 12)"
      />
    </svg>
  );
}