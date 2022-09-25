const LoadingPage = () => {
  return (
    <div className="relative flex min-h-screen antialiased">
      <nav className="fixed top-0 left-0 z-30 h-screen w-[300px] shrink-0 translate-x-0 animate-pulse overflow-y-auto bg-gray-100 bg-dotted-pattern-vertical bg-right bg-repeat-y opacity-100 duration-150 ease-in md:w-80 lg:sticky lg:transform-none lg:overflow-hidden lg:opacity-100 lg:transition-none lg:hover:overflow-y-auto"></nav>
      <main className="relative flex max-w-full grow flex-col">
        <div className="sticky top-0 z-20 h-[92px] w-full animate-pulse items-center justify-between bg-gray-50"></div>
      </main>
    </div>
  )
}

export default LoadingPage
