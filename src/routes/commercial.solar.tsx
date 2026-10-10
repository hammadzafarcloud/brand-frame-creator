import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead } from '@/components/site';
export const Route = createFileRoute("/commercial/solar")({head:()=>pageHead("Commercial Solar Systems","Turn your rooftop into a lasting cost-saving asset."),component:Page});
function Page(){return <ContentPage path="/commercial/solar"/>}
