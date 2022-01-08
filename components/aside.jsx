export default function Aside() {
  return (
    <aside>
      <div style={{ display: 'flex', marginBottom: '3.5rem' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/profile-pic-c715447ce38098828758e525a1128b87.jpg"
          alt="Dan Abramov"
          style={{ marginRight: '0.875rem', marginBottom: 0, width: '3.5rem', height:'3.5rem', borderRadius: '50%' }}
        />
        <p style={{ maxWidth: '310px' }}>
          Personal blog by <a href="https://mobile.twitter.com/dan_abramov">Dan Abramov.</a>.
          I&nbsp;explain with words and code.
        </p>
      </div>
    </aside>
  )
}
