/// <reference types="vite/client" />
import { defineAppSetup } from '@slidev/types'

/**
 * Disable Slidev's built-in "Show slide overview" (QuickOverview) so it
 * cannot be triggered by the O keyboard shortcut. The deck already has:
 *   - a clickable custom TOC on slide 3
 *   - the SectionNav breadcrumb on every section header
 * and the built-in overlay does not auto-fade the way the control bar
 * does, so leaving it enabled means a stray keypress covers the slide
 * mid-presentation.
 */
export default defineAppSetup(() => {
  if (typeof window === 'undefined') return

  // Swallow the O / o keypress before Slidev's global handler sees it.
  // Capture-phase + high priority ensures we run first.
  window.addEventListener(
    'keydown',
    (e) => {
      if (e.key === 'o' || e.key === 'O') {
        // Only intercept when not typing into an input / editor
        const target = e.target as HTMLElement | null
        const tag = target?.tagName?.toLowerCase()
        if (tag === 'input' || tag === 'textarea' || target?.isContentEditable) return
        e.stopPropagation()
        e.preventDefault()
      }
    },
    { capture: true },
  )
})
