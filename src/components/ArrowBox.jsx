export default function ArrowBox() {
  return (
    <span className="arrowbox" aria-hidden="true">
      <svg viewBox="0 0 16 16">
        <path
          d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="square"
        />
      </svg>
    </span>
  )
}
