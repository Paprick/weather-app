import { useEffect, useState } from "react"

export const useConditionalRenderDelay = (isRendered: boolean, delay: number = 250) => {
    const [showComponent, setShowComponent] = useState(false)

    useEffect(() => {
        let timeoutId: NodeJS.Timeout
        if (isRendered && !showComponent) {
            setShowComponent(true)
        } else if (!isRendered && showComponent) {
            timeoutId = setTimeout(() => setShowComponent(false), delay)
        }
        return () => clearTimeout(timeoutId)
    }, [isRendered, delay, showComponent])

    return showComponent
}