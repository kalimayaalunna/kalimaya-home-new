/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Safe helper to track Meta Pixel events
export const trackPixelEvent = (event: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined") {
    const fb = (window as any).fbq;
    if (fb && typeof fb === "function") {
      fb("track", event, params);
      console.log(`[Meta Pixel] Successfully tracked event: "${event}"`, params);
    } else {
      console.log(`[Meta Pixel Mock] Event "${event}" triggered, but fbq is not active yet.`, params);
    }
  }
};
