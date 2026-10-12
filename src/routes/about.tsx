import { createFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Building2, Check, ChevronRight, Clock, Download, House, MessageCircle, MessagesSquare, ShieldCheck, Sun, Target, UserPlus, Zap, ClipboardCheck } from 'lucide-react';
import { Header, Footer, PlayButton, pageHead } from '@/components/site';
import { Button } from '@/components/ui/button';
import { PhonePreview } from '@/components/phone-preview';
import { aboutContent as copy } from '@/lib/about-content';

export const Route = createFileRoute('/about')({
  head: () => pageHead('About Flip Power Plus', copy.subtitle),
  component: AboutPage,
});

function WhatsAppButton() {
  return <Button asChild variant="outline" className="h-12 rounded-lg"><Link to="/contact"><MessageCircle/>Chat on WhatsApp</Link></Button>;
}

function AboutPage() {
  const serviceIcons = [Sun, Zap, ClipboardCheck];
  const valueIcons = [ShieldCheck, Check, Clock, MessagesSquare];
  return <><Header/><main>
    <section className="page-heading about-heading">
      <div className="container">
        <nav className="about-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><ChevronRight size={14}/><span aria-current="page">About</span></nav>
        <h1>{copy.title}</h1><p>{copy.subtitle}</p>
        <div className="hero-actions"><Button asChild className="h-12 rounded-lg"><Link to="/app"><Download/>Download the App</Link></Button><WhatsAppButton/></div>
      </div>
    </section>
    <section className="section"><div className="container about-story">
      <div className="about-copy"><h2>{copy.storyTitle}</h2>{copy.story.map(text => <p key={text}>{text}</p>)}</div>
      <aside className="about-mission"><Target aria-hidden="true"/><h2>Our mission</h2><p>{copy.mission}</p></aside>
    </div></section>
    <section className="section section-muted"><div className="container">
      <div className="section-heading"><h2>{copy.servicesTitle}</h2></div>
      <div className="feature-grid">{copy.services.map(([title,text],i) => { const Icon = serviceIcons[i] ?? Sun; return <article className="service-card" key={title}><Icon aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>; })}</div>
    </div></section>
    <section className="section"><div className="container">
      <div className="section-heading"><h2>{copy.valuesTitle}</h2></div>
      <div className="about-values">{copy.values.map(([title,text],i) => { const Icon = valueIcons[i] ?? ShieldCheck; return <article className="benefit" key={title}><Icon aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>; })}</div>
    </div></section>
    <section className="section section-muted"><div className="container app-gallery">
      <div className="about-copy"><h2>{copy.appTitle}</h2><p>{copy.appText}</p><ul className="home-list">{copy.appBenefits.map(text => <li key={text}><Check/>{text}</li>)}</ul><PlayButton/></div>
      <div className="gallery-preview"><PhonePreview/><span className="preview-label">App screen preview</span></div>
    </div></section>
    <section className="section"><div className="container path-grid">{copy.audiences.map((audience,i) => { const Icon = i ? Building2 : House; return <article className="path-card" key={audience.title}><div className="path-icon"><Icon/></div><div><h3>{audience.title}</h3><p>{audience.text}</p><Button asChild variant="link" className="h-auto p-0 whitespace-normal text-left"><Link to={audience.path}>{audience.button}<ArrowRight/></Link></Button></div></article>; })}</div></section>
    <section className="section section-muted"><div className="container about-join"><UserPlus className="text-primary" size={36}/><div className="about-copy"><h2>{copy.joinTitle}</h2><p>{copy.joinText}</p><ul className="home-list">{copy.joinBenefits.map(text => <li key={text}><Check/>{text}</li>)}</ul><Button asChild><Link to="/contact">Apply to Join<ArrowRight/></Link></Button></div></div></section>
    <section className="cta-band"><div className="container cta-inner"><div><h2>{copy.contactTitle}</h2><p>{copy.contactText}</p><p className="mt-4">Lahore, Pakistan</p></div><div className="hero-actions"><WhatsAppButton/><PlayButton/></div></div></section>
  </main><Footer/></>;
}
