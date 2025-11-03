import GameColumn from '../../entities/game-column'
import UserInfo from '../../widgets/userInfo'

export function Game() {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <UserInfo direction="left" />
        <section className="flex items-center justify-center gap-4 rounded-2xl bg-black p-4">
          {[0, 1, 2, 3, 4, 5, 6].map(() => (
            <GameColumn />
          ))}
        </section>
        <UserInfo direction="right" />
      </div>
    </>
  )
}
