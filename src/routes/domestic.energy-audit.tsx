import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead } from '@/components/site';
export const Route = createFileRoute("/domestic/energy-audit")({head:()=>pageHead("Understand Your Electricity Bill","See where your power goes and what solar could save you."),component:Page});
function Page(){return <ContentPage path="/domestic/energy-audit"/>}
