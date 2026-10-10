import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead } from '@/components/site';
export const Route = createFileRoute("/domestic/ac")({head:()=>pageHead("AC Installation and Repair","Stay cool with professional AC care, for all major brands."),component:Page});
function Page(){return <ContentPage path="/domestic/ac"/>}
