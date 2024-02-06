import * as Toast from '@radix-ui/react-toast'
import { useCountdown } from '../hooks/useCountdown'

interface INextVideoToastProps {
  isOpen: boolean
}

export function NextVideoToast({ isOpen }: INextVideoToastProps) {
  const countdown = useCountdown(5, isOpen)
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        open={isOpen}
        className="flex items-center justify-center gap-x-2 rounded-md bg-zinc-800 p-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0
        data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide
        data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
      >
        <Toast.Description className="text-emerald-400">
          Next video will be played in {countdown}s
        </Toast.Description>
      </Toast.Root>

      <Toast.Viewport className="fixed right-0 top-0 z-[2147483647] m-0 flex w-80 max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </Toast.Provider>
  )
}
