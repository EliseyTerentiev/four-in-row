// import { useRef } from "react"

export function GameColumn() {
  // const ROWS = useRef(import.meta.env.VITE_GAME_ROWS)

  return (
    <button className="flex w-[min(calc(100vw*1/12),calc(100vh*1/12))]">
      <ul className="flex h-full w-full flex-col items-center justify-between gap-4">
        <li className="aspect-square w-full rounded-full bg-amber-50"></li>
        <li className="aspect-square w-full rounded-full bg-amber-50"></li>
        <li className="aspect-square w-full rounded-full bg-amber-50"></li>
        <li className="aspect-square w-full rounded-full bg-amber-50"></li>
        <li className="aspect-square w-full rounded-full bg-amber-50"></li>
        <li className="aspect-square w-full rounded-full bg-amber-50"></li>
      </ul>
    </button>
  )
}
