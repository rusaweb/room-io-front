export default {
    mounted: (node: HTMLElement) => {
        const handleMouseDown = (e: MouseEvent) => {
            if (!node) {
                return
            }
            const startPos = {
                x: e.clientX,
                y: e.clientY,
            }
            const styles = window.getComputedStyle(node)
            const w = parseInt(styles.width, 10)

            const handleMouseMove = (e: MouseEvent) => {
                const dx = e.clientX - startPos.x
                node.style.width = `${w + dx}px`
                updateCursor()
            }

            const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove)
                document.removeEventListener("mouseup", handleMouseUp)
                resetCursor()
            }

            document.addEventListener("mousemove", handleMouseMove)
            document.addEventListener("mouseup", handleMouseUp)
        }
        const handleTouchStart = (e: TouchEvent) => {
            if (!node) {
                return
            }
            const touch = e.touches[0]
            const startPos = {
                x: touch.clientX,
                y: touch.clientY,
            }
            const styles = window.getComputedStyle(node)
            const w = parseInt(styles.width, 10)

            const handleTouchMove = (e: TouchEvent) => {
                const touch = e.touches[0]
                const dx = touch.clientX - startPos.x
                node.style.width = `${w + dx}px`
                updateCursor()
            }

            const handleTouchEnd = () => {
                document.removeEventListener("touchmove", handleTouchMove)
                document.removeEventListener("touchend", handleTouchEnd)
                resetCursor()
            }

            document.addEventListener("touchmove", handleTouchMove)
            document.addEventListener("touchend", handleTouchEnd)
        }
        const updateCursor = () => {
            document.body.style.cursor = "col-resize"
            document.body.style.userSelect = "none"
        }
        const resetCursor = () => {
            document.body.style.removeProperty("cursor")
            document.body.style.removeProperty("user-select")
        }

        if (!node) {
            return
        }
        const trigger = document.createElement('div')
        trigger.classList.add('resizer')
        node.appendChild(trigger)

        trigger.addEventListener("mousedown", handleMouseDown)
        trigger.addEventListener("touchstart", handleTouchStart, {passive: true})
    }
}