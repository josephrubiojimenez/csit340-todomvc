function Info({ name }) {
  return (
    <footer className="mt-16 text-center text-[11px] text-[#4d4d4d]">
      <p className="my-3">Click the box to complete a todo</p>
      <p className="my-3">Created by {name}</p>
      <p className="my-3">Inspired by TodoMVC</p>
   </footer>
  )
}
 
export default Info