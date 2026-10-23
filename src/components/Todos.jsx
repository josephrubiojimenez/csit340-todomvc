
import { useState } from 'react'

function Todos() {
    const [text, setText] = useState('')
    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState('All')
    const selectedFilterClass =
      'cursor-pointer rounded-[3px] border border-[#b83f45]/20 px-[7px] py-[3px]'
    const unselectedFilterClass =
      'cursor-pointer rounded-[3px] border border-transparent px-[7px] py-[3px] hover:border-[#b83f45]/10'
    const activeCount = todos.filter((todo) => !todo.completed).length
    const completedCount = todos.filter((todo) => todo.completed).length
    const allCompleted = todos.length > 0 && activeCount === 0
    const visibleTodos = todos.filter((todo) => {
      if (filter === 'Active') return !todo.completed
      if (filter === 'Completed') return todo.completed
      return true
    })

    function handleSubmit(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (trimmed === '') {
      return
    }
    const newTodo = { id: crypto.randomUUID(), text: trimmed, completed: false }
    setTodos((currentTodos) => [...currentTodos, newTodo])
    setText('')
  }
  
  function handleToggle(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  function handleDelete(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))
  }

  function handleToggleAll() {
    setTodos((currentTodos) => {
      const shouldCompleteAll = !currentTodos.every((todo) => todo.completed)
      return currentTodos.map((todo) => ({
        ...todo,
        completed: shouldCompleteAll,
      }))
    })
  }

  function handleClearCompleted() {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => !todo.completed)
    )
  }

  return (
    <section className="mx-auto max-w-[550px]">
      <h1 className="text-center text-[80px] font-extralight text-[#b83f45]">
        todos
      </h1>

      <div className="relative bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.2),0_25px_50px_0_rgba(0,0,0,0.1)]">
        <form onSubmit={handleSubmit}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="h-[65px] w-full py-4 pr-4 pl-[60px] text-2xl shadow-[inset_0_-2px_1px_rgba(0,0,0,0.03)] outline-none placeholder:text-black/40 placeholder:italic focus:shadow-[0_0_2px_2px_#cf7d7d]"
            placeholder="What needs to be done?"
          />
        </form>

        {todos.length > 0 && (
          <>
            <main className="relative border-t border-[#e6e6e6]">
              <input
                id="toggle-all"
                type="checkbox"
                checked={allCompleted}
                onChange={handleToggleAll}
                className="peer sr-only"
              />
              <label
                htmlFor="toggle-all"
                className="absolute -top-[66px] left-0 flex h-[65px] w-[60px] cursor-pointer items-center justify-center text-[22px] text-[#949494] peer-checked:text-[#484848]"
              >
                <span className="rotate-90">❯</span>
              </label>

              <ul>
                {visibleTodos.map((todo) => (
                  <li
                    key={todo.id}
                    className="group relative flex items-center border-b border-[#ededed] text-2xl"
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggle(todo.id)}
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
                      onClick={() => handleDelete(todo.id)}
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
                <strong className="font-light">{activeCount}</strong>{' '}
                {activeCount === 1 ? 'item' : 'items'} left
              </span>

              <ul className="flex justify-center gap-1">
                <li>
                  <button
                    type="button"
                    onClick={() => setFilter('All')}
                    aria-pressed={filter === 'All'}
                    className={filter === 'All' ? selectedFilterClass : unselectedFilterClass}
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setFilter('Active')}
                    aria-pressed={filter === 'Active'}
                    className={filter === 'Active' ? selectedFilterClass : unselectedFilterClass}
                  >
                    Active
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setFilter('Completed')}
                    aria-pressed={filter === 'Completed'}
                    className={
                      filter === 'Completed'
                        ? selectedFilterClass
                        : unselectedFilterClass
                    }
                  >
                    Completed
                  </button>
                </li>
              </ul>

              {completedCount > 0 && (
                <button
                  type="button"
                  onClick={handleClearCompleted}
                  className="cursor-pointer justify-self-end hover:underline"
                >
                  Clear completed
                </button>
              )}
            </footer>
          </>
        )}
      </div>
    </section>
  )
}

export default Todos
