const Button = ({ name }) => {
  return (
    <button
      type="button"
      className="mt-12 block w-full rounded-md bg-primary-600 py-4 text-[13px] font-extrabold uppercase leading-4 tracking-wider transition-colors hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-800 sm:mt-14">
      {name}
    </button>
  )
}

export default Button
