import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead } from '@/components/site';
export const Route = createFileRoute("/commercial/energy-audit")({head:()=>pageHead("Energy Audit for Business","Find waste, cut costs and plan your solar investment with real numbers."),component:Page});
function Page(){return <ContentPage path="/commercial/energy-audit"/>}
