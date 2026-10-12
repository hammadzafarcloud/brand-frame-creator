import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function FAQList({items}: {items: readonly (readonly [string, string])[]}) {
  return <Accordion type="multiple" className="faq-list">{items.map(([question, answer], i) => <AccordionItem className="faq-card" value={`question-${i}`} key={question}><AccordionTrigger className="faq-question">{question}</AccordionTrigger><AccordionContent className="faq-answer"><p>{answer}</p></AccordionContent></AccordionItem>)}</Accordion>;
}

export function NumberedSteps({items}: {items: readonly (readonly [string, string])[]}) {
  return <ol className="steps">{items.map(([title, description], i) => <li className="step" key={`${i}-${title}`}><span className="step-number">{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3>{description && <p>{description}</p>}</li>)}</ol>;
}