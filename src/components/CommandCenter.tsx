"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowUpRight, Terminal } from "lucide-react";
import { github } from "@/data/github";
import { leetcode } from "@/data/leetcode";
import { profile } from "@/data/profile";

const sections = ["home", "about", "projects", "stack", "contact"];

export default function CommandCenter() {
  const [palette, setPalette] = useState(false);
  const [terminal, setTerminal] = useState(false);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      const typing = ["INPUT", "TEXTAREA"].includes((event.target as HTMLElement).tagName);
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setPalette(true); }
      if (event.key === "Escape") { setPalette(false); setTerminal(false); }
      if (!typing && event.key.toLowerCase() === "g") window.open(github.profileUrl, "_blank", "noopener,noreferrer");
      if (!typing && event.key.toLowerCase() === "l") window.open(`https://leetcode.com/u/${leetcode.username}`, "_blank", "noopener,noreferrer");
      if (!typing && event.key.toLowerCase() === "p") document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      if (!typing && event.key.toLowerCase() === "h") document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); setPalette(false); };
  const run = (event: FormEvent) => {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    const results: Record<string, string> = {
      whoami: "PARAM SHELKE · FULL-STACK SOFTWARE ENGINEER",
      about: "BUILDING RELIABLE BACKEND SYSTEMS AND PRACTICAL AI PRODUCTS.",
      stack: "JAVASCRIPT / TYPESCRIPT / JAVA / PYTHON / NEXT.JS / NODE.JS",
      projects: "ALTFaze / ReqGuard / GrowthPilot AI / OpsMind AI",
      github: github.username, leetcode: leetcode.username, contact: profile.email,
      help: "whoami · about · stack · projects · github · leetcode · contact · clear",
    };
    setLines((previous) => command === "clear" ? [] : [...previous, `> ${command}`, results[command] ?? 'COMMAND_NOT_FOUND · TYPE "help" FOR AVAILABLE COMMANDS']);
    setInput("");
  };

  return <>
    <button className="command-trigger" onClick={() => setPalette(true)} aria-label="Open command palette">⌘K</button>
    <button className="terminal-trigger" onClick={() => setTerminal(true)} aria-label="Open terminal"><Terminal size={14} /> TERMINAL</button>
    {palette && <div className="overlay" role="dialog" aria-modal="true" aria-label="Command palette" onClick={() => setPalette(false)}><div className="command-palette" onClick={(event) => event.stopPropagation()}><div className="command-input">&gt; Search PARAM.SYS... <kbd>ESC</kbd></div><CommandGroup title="NAVIGATION" items={sections.map((id) => [id.toUpperCase(), () => go(id)])} /><CommandGroup title="ENGINEERING" items={[["GITHUB", () => window.open(github.profileUrl, "_blank", "noopener,noreferrer")], ["LEETCODE", () => window.open(`https://leetcode.com/u/${leetcode.username}`, "_blank", "noopener,noreferrer")], ["CONTACT", () => go("contact")], ["TERMINAL", () => { setPalette(false); setTerminal(true); }]]} /></div></div>}
    {terminal && <div className="overlay" role="dialog" aria-modal="true" aria-label="Param SYS terminal" onClick={() => setTerminal(false)}><div className="terminal-panel" onClick={(event) => event.stopPropagation()}><div className="panel-top"><span>PARAM.SYS TERMINAL</span><kbd>ESC</kbd></div>{lines.map((line, index) => <div className="terminal-line" key={`${line}-${index}`}>{line}</div>)}<form className="terminal-form" onSubmit={run}><span>&gt;</span><input autoFocus value={input} onChange={(event) => setInput(event.target.value)} aria-label="Terminal command" /></form></div></div>}
  </>;
}

function CommandGroup({ title, items }: { title: string; items: [string, () => void][] }) {
  return <div className="command-group"><span>{title}</span>{items.map(([label, action]) => <button key={label} onClick={action}>{label}<ArrowUpRight size={13} /></button>)}</div>;
}
