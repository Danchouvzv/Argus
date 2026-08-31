export default function Mark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <ellipse
        cx="20"
        cy="20"
        rx="14"
        ry="8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="20" cy="20" r="4" fill="currentColor" />
    </svg>
  )
}
