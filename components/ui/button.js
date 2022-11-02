function Button({ children, ...props }) {
  return (
    <button
      className="bg-primary-600 hover:bg-neutral-700 px-4 py-3 rounded-lg text-white text-body-xl font-bold tracking-widest uppercase focus:outline-none"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
