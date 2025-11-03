interface UserInfoProps {
  direction: 'left' | 'right'
}

export function UserInfo({ direction }: UserInfoProps) {
  return (
    <div
      data-direction={direction}
      className="flex w-[1%] flex-grow flex-col items-start justify-start data-[direction='right']:items-end"
    >
      <span>player</span>
      <span>count</span>
    </div>
  )
}
