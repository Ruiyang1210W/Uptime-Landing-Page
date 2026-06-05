import { track } from '@vercel/analytics'

export function trackEvent(
  eventName: string,
  properties?: Record<string, string | number | boolean>
) {
  try {
    track(eventName, properties)
  } catch {
    // Silently fail in unsupported environments (dev without Vercel)
  }
}
