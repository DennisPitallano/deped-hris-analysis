/// <reference types="vite/client" />
import { defineAppSetup } from '@slidev/types'

/**
 * Swallow certain built-in Slidev keyboard shortcuts that open overlays
 * which get in the way of a live presentation:
 *   - O / o → "Show slide overview" (fullscreen thumbnail grid)
 *   - G / g → "Go to slide" dialog (autocomplete list of every slide,
 *             see internals/Goto.vue). This is the one that shows up
 *             stuck on the right side of the screen.
 * The deck already has its own clickable TOC on slide 3 plus the
 * SectionNav breadcrumb on section headers.
 */
export default defineAppSetup(() => {
  if (typeof window === 'undefined') return

  const blocked = new Set(['o', 'O', 'g', 'G'])

  window.addEventListener(
    'keydown',
    (e) => {
      if (!blocked.has(e.key)) return
      // Do not intercept if the user is typing in an input / editor.
      const target = e.target as HTMLElement | null
      const tag = target?.tagName?.toLowerCase()
      if (tag === 'input' || tag === 'textarea' || target?.isContentEditable) return
      e.stopPropagation()
      e.preventDefault()
    },
    { capture: true },
  )
})
