import Link from "next/link";

export default function NotFound() {
  return <main className="app-frame system-page"><p className="eyebrow">{"//"} SYSTEM_ERROR</p><h1>404</h1><h2>ROUTE_NOT_FOUND</h2><p>The requested module does not exist.</p><Link className="button button-primary" href="/">RETURN_TO_HOME</Link></main>;
}
