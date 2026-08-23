const panels = document.querySelectorAll(".story-panel")
const bodyTag = document.body
const auroraBlobs = document.querySelectorAll(".aurora .blob")
let activePanel = panels[0]
let wheelLocked = false

function updatePalette(panel) {
    bodyTag.style.backgroundColor = panel.dataset.background

    panel.querySelector(".circle").style.backgroundColor = panel.dataset.circle

    panel.dataset.aurora.split(",").forEach(function (colour, index) {
        if (auroraBlobs[index]) auroraBlobs[index].style.background = colour
    })
}

const panelObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            activePanel = entry.target
            updatePalette(entry.target)
        }
    })
}, { threshold: 0.6 })

panels.forEach(function (panel) {
    panelObserver.observe(panel)
})

updatePalette(panels[0])

// A physical mouse wheel can otherwise carry enough momentum to skip panels.
// Trackpad and touch input keep the browser's native scrolling behaviour.
window.addEventListener("wheel", function (event) {
    const isMouseWheel = event.deltaMode === WheelEvent.DOM_DELTA_LINE || Math.abs(event.deltaY) >= 50

    if (!isMouseWheel || event.ctrlKey || wheelLocked || event.deltaY === 0) return

    const currentIndex = Array.prototype.indexOf.call(panels, activePanel)
    const nextIndex = event.deltaY > 0 ? currentIndex + 1 : currentIndex - 1

    if (nextIndex < 0 || nextIndex >= panels.length) return

    event.preventDefault()
    wheelLocked = true
    panels[nextIndex].scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "center"
    })

    window.setTimeout(function () {
        wheelLocked = false
    }, 650)
}, { passive: false })
