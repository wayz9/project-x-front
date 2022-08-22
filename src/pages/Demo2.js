const Demo2 = () => {
  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-black bg-opacity-20 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 sm:p-0">
          <div
            id="modal"
            className="relative w-full max-w-xl transform overflow-hidden rounded-lg bg-neutral-900 py-40 px-4 text-left shadow-xl transition-all">
            Blyatttt
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo2
