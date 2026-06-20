export default function BackgroundSection({
  id,
  backgroundImage,
  children,
  className = '',
}) {
  return (
    <section
      id={id}
      className={`relative min-h-screen w-full overflow-hidden ${className}`}
    >
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      ) : null}

      <div className="relative z-10">{children}</div>
    </section>
  )
}