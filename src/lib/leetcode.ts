export type LeetCodeDataState = "loading" | "success" | "fallback" | "error";

export async function fetchLeetCodeStats(): Promise<never> {
  throw new Error("Live LeetCode sync is not configured; use the explicit reference dataset.");
}
