export default function SectionHeader({ kicker, title, subtitle, center = true }) {
  return (
    <div className={`mb-10 ${center ? 'text-center mx-auto' : ''}`}>
      {kicker && <span className="tag">{kicker}</span>}
      <h2 className={`h-title mt-2 ${center ? 'mx-auto' : ''}`}>{title}</h2>
      {subtitle && <p className={`h-sub ${center ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </div>
  )
}
