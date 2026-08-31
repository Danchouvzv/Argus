import logoBlack from '../assets/logo-mark.png'
import logoWhite from '../assets/logo-mark-white.png'

export default function Mark({ className = '', variant = 'white' }) {
  const src = variant === 'black' ? logoBlack : logoWhite
  return (
    <img
      className={className}
      src={src}
      alt="Athena Labs"
      draggable="false"
    />
  )
}
