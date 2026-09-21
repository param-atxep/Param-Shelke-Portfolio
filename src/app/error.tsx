"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="app-frame system-page"><p className="eyebrow">{"//"} SYSTEM_FAILURE</p><h1>Something went wrong.</h1><button className="button button-primary" onClick={reset}>RELOAD</button><Link className="button" href="/">RETURN_HOME</Link></main>;
}
