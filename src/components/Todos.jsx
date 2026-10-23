
import { useState } from 'react'

function Todos() {
 const [todos] = useState([
    { id: 1, text: 'Learn the spread operator', completed: false },
    { id: 2, text: 'Set up Tailwind', completed: true },
  ])

  return (
    <section className="mx-auto max-w-[550px]">
      <h1 className="text-center text-[80px] font-extralight text-[#b83f45]">
        todos
      </h1>

      <div className="relative bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.2),0_25px_50px_0_rgba(0,0,0,0.1)]">
        <form>
          <input
            className="h-[65px] w-full py-4 pr-4 pl-[60px] text-2xl shadow-[inset_0_-2px_1px_rgba(0,0,0,0.03)] outline-none placeholder:text-black/40 placeholder:italic focus:shadow-[0_0_2px_2px_#cf7d7d]"
            placeholder="What needs to be done?"
          />
        </form>

        <main className="relative border-t border-[#e6e6e6]">
          <input
            id="toggle-all"
            type="checkbox"
            className="peer sr-only"
          />
          <label
            htmlFor="toggle-all"
            className="absolute -top-[66px] left-0 flex h-[65px] w-[60px] cursor-pointer items-center justify-center text-[22px] text-[#949494] peer-checked:text-[#484848]"
          >
            <span className="rotate-90">❯</span>
          </label>

          <ul>
  {todos.map((todo) => (
    <li
      key={todo.id}
      className="group relative flex items-center border-b border-[#ededed] text-2xl"
    >
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
        className="ml-[15px] size-[30px] shrink-0 cursor-pointer accent-[#59a193]"
      />
      <span
        className={
          todo.completed
            ? 'flex-1 py-[15px] pr-[60px] pl-[15px] break-all text-[#949494] line-through'
            : 'flex-1 py-[15px] pr-[60px] pl-[15px] break-all'
        }
      >
        {todo.text}
      </span>
      <button
        type="button"
        className="absolute right-[10px] hidden size-10 cursor-pointer text-[30px] text-[#949494] group-hover:block hover:text-[#c18585]"
      >
        ×
      </button>
    </li>
  ))}
</ul>
        </main>

        <footer className="grid h-10 grid-cols-3 items-center border-t border-[#e6e6e6] px-[15px] text-[15px]">
          <span>
            <strong className="font-light">1</strong> item left
          </span>

          <ul className="flex justify-center gap-1">
            <li>
              <button
                type="button"
                className="cursor-pointer rounded-[3px] border border-[#b83f45]/20 px-[7px] py-[3px]"
              >
                All
              </button>
            </li>
            <li>
              <button
                type="button"
                className="cursor-pointer rounded-[3px] border border-transparent px-[7px] py-[3px] hover:border-[#b83f45]/10"
              >
                Active
              </button>
            </li>
            <li>
              <button
                type="button"
                className="cursor-pointer rounded-[3px] border border-transparent px-[7px] py-[3px] hover:border-[#b83f45]/10"
              >
                Completed
              </button>
            </li>
          </ul>

          <button
            type="button"
            className="cursor-pointer justify-self-end hover:underline"
          >
            Clear completed
          </button>
        </footer>
      </div>
    </section>
  )
}

export default Todos
