import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead } from '@/components/site';
export const Route = createFileRoute("/commercial/electrical")({head:()=>pageHead("Commercial Electrical Services","Safe, compliant electrical work for business premises."),component:Page});
function Page(){return <ContentPage path="/commercial/electrical"/>}
