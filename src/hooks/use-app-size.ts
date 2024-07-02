import { layoutSize } from 'configs/constants'
import { useEffect, useMemo, useState } from 'react'

// type ResizeWindowListenerType = (this: Window, ev: UIEvent) => any;

function useAppSize() {
  const { LAYOUT_FOOTER_HEIGHT, LAYOUT_HEADER_HEIGHT, PAGE_HEADER_HEIGHT, PAGE_FOOTER_HEIGHT } = layoutSize
  const [appHeight, setAppHeight] = useState<number>(window.innerHeight)
  const [appWidth, setAppWidth] = useState<number>(window.innerWidth)
  const heightWithFooterHeader = useMemo(
    () => appHeight - LAYOUT_FOOTER_HEIGHT - LAYOUT_HEADER_HEIGHT,
    [appHeight, LAYOUT_FOOTER_HEIGHT, LAYOUT_HEADER_HEIGHT]
  )
  const heightWithHeader = useMemo(() => appHeight - LAYOUT_HEADER_HEIGHT, [appHeight, LAYOUT_HEADER_HEIGHT])
  const heightWithFooter = useMemo(() => appHeight - LAYOUT_FOOTER_HEIGHT, [appHeight, LAYOUT_FOOTER_HEIGHT])
  const innerAppHeight = useMemo(
    () => heightWithFooterHeader - (PAGE_HEADER_HEIGHT + PAGE_FOOTER_HEIGHT),
    [heightWithFooterHeader, PAGE_HEADER_HEIGHT, PAGE_FOOTER_HEIGHT]
  )
  const innerAppWidth = useMemo(() => appWidth - 1, [appWidth])

  useEffect(() => {
    function resizeListener(this: Window) {
      setAppHeight(this.innerHeight)
      setAppWidth(this.innerWidth)
    }

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener, true)
    }
  }, [])

  return {
    heightWithFooterHeader,
    heightWithFooter,
    heightWithHeader,
    innerAppHeight,
    innerAppWidth
  }
}

export default useAppSize
