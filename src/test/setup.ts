import '@testing-library/jest-dom/vitest'
import { afterEach, vi } from 'vitest'

// jsdom doesn't implement either of these; react-awesome-reveal's <Fade> (used
// throughout) depends on IntersectionObserver to trigger its reveal animation.
class MockObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
}

globalThis.IntersectionObserver =
	MockObserver as unknown as typeof IntersectionObserver
globalThis.ResizeObserver = MockObserver as unknown as typeof ResizeObserver

// jsdom doesn't implement layout, so scrollIntoView (Profile's "Contact me"
// CTA, AboutMe's scroll-triggered skill bars) is missing entirely.
Element.prototype.scrollIntoView = vi.fn()

// jsdom doesn't implement the Blob URL APIs used by the resume PDF download.
URL.createObjectURL = vi.fn(() => 'blob:mock-url')
URL.revokeObjectURL = vi.fn()

afterEach(() => {
	localStorage.clear()
})
