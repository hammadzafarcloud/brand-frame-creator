import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { parseQuestions, parseSteps } from '@/lib/page-sections';
import { FAQList, NumberedSteps } from '@/components/page-elements';

describe('Page questions and steps', () => {
  it('keeps complete questions, including sentences before the question mark', () => {
    expect(parseQuestions(['- *My breaker trips. What should I do?* Book a visit.','- Can I upgrade? Yes.'])).toEqual([['My breaker trips. What should I do?','Book a visit.'],['Can I upgrade?','Yes.']]);
  });
  it('separates all numbered titles and descriptions', () => {
    const items=parseSteps('1. Share your bill: Send us your bill.\n2. Survey: We visit.');
    render(<NumberedSteps items={items}/>);
    expect(screen.getByRole('heading', {name:'Share your bill'})).toBeInTheDocument();
    expect(screen.getByText('We visit.')).toBeInTheDocument();
  });
  it('renders every question and opens answers independently', () => {
    render(<FAQList items={ [['First question?', 'First answer.'], ['Second question?', 'Second answer.']] }/>);
    const first=screen.getByRole('button',{name:'First question?'});
    const second=screen.getByRole('button',{name:'Second question?'});
    fireEvent.click(first); fireEvent.click(second);
    expect(first).toHaveAttribute('aria-expanded','true');
    expect(second).toHaveAttribute('aria-expanded','true');
    expect(screen.getByText('Second answer.')).toBeVisible();
  });
});