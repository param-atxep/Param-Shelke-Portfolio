export type GitHubDataState = "loading" | "success" | "fallback" | "error";

export async function fetchGitHubStats(): Promise<never> {
  throw new Error("Live GitHub sync is not configured; use the explicit fallback dataset.");
}

export async function fetchGitHubRepos(): Promise<never> {
  throw new Error("Live GitHub sync is not configured; use the explicit fallback dataset.");
}
