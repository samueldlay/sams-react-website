export default function Menu() {
  const menuItems = ["Home", "About", "Work", "Contact"]
  return (
    <div className="dark:bg-slate-300 flex fixed top-0 inset-12 gap-4 bg-inherit h-6 justify-center rounded-md">
      {menuItems.map((item, index) => {
        return (
          <button className="text-white opacity-100" key={item}>
            {item}
          </button>
        )
      })}
    </div>
  )
}
