"use client"

import * as React from "react"

export function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    if (typeof window === 'undefined') {
        return;
    }
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    
    const onChange = () => {
      setIsMobile(mql.matches)
    }

    mql.addEventListener("change", onChange)
    
    // Set initial value
    setIsMobile(mql.matches)

    return () => mql.removeEventListener("change", onChange)
  }, [breakpoint])

  return isMobile
}
