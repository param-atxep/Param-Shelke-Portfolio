import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { assets } from "@/config/assets";
import SocialIcon from "@/components/SocialIcon";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: `Param Shelke — ${project.name}`, description: project.description } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];
  if (!project) notFound();
  const next = projects[(projectIndex + 1) % projects.length];
  return <main className="app-frame detail-page"><header className="site-header"><Link className="brand" href="/"><span className="brand-mark"><Image src={assets.logo} alt="" width={30} height={30} /></span><span><strong>PARAM SHELKE</strong><small>FULL-STACK SOFTWARE ENGINEER</small></span></Link><Link className="text-link" href="/">RETURN_TO_PARAM.SYS <ArrowLeft size={14} /></Link></header><section className="detail-hero section-shell"><div><p className="eyebrow">{project.number} {"//"} {project.category}</p><h1>{project.name}</h1><p className="hero-lede">{project.description}</p><p className="detail-status"><span className="status-dot" /> STATUS:: {project.status}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="detail-image">{project.image ? <Image src={project.image} alt={`${project.name} project preview`} fill sizes="(max-width: 800px) 100vw, 50vw" priority /> : <div className="image-fallback"><span>{project.number}</span><small>IMAGE_ASSET_NOT_CONFIGURED</small></div>}</div></section><section className="detail-content section-shell"><DetailBlock title="PROBLEM" body={project.problem} /><DetailBlock title="SOLUTION" body={project.solution} /><div className="detail-two-col"><div><DetailBlock title="ARCHITECTURE" body="A deliberate separation of interface, domain logic, persistence, and supporting services." /><div className="detail-architecture">{project.architecture.map((node, index) => <div key={node}><span>{node}</span>{index < project.architecture.length - 1 && <b>↓</b>}</div>)}</div></div><div><DetailBlock title="FEATURES" body="Scope is represented from the supplied project information; unverified claims are intentionally omitted." /><div className="feature-list">{project.features.map((feature) => <span key={feature}><i className="status-dot" />{feature}</span>)}</div></div></div></section><section className="detail-footer section-shell"><Link className="text-link" href={`/projects/${next.slug}`}>NEXT PROJECT: {next.name} <ArrowUpRight size={14} /></Link><Link className="button button-primary" href="/">BACK TO PROJECT INDEX <ArrowLeft size={14} /></Link></section><footer className="site-footer"><span>© {new Date().getFullYear()} PARAM SHELKE</span><div><a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><SocialIcon kind="github" /></a><a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><SocialIcon kind="linkedin" /></a><a href={`mailto:${profile.email}`} aria-label="Email"><SocialIcon kind="email" /></a></div></footer></main>;
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return <div className="detail-block"><span>{"//"} {title}</span><p>{body}</p></div>;
}
