'use client'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="w-[90%] mx-auto flex justify-between items-center h-screen">
        {children}
      </section>
    </>
  )
}

export default Container