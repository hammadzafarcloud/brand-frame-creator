import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead } from '@/components/site';
export const Route = createFileRoute("/commercial/maintenance")({head:()=>pageHead("Maintenance Contracts for Business","Keep your power systems running with scheduled care and priority support."),component:Page});
function Page(){return <ContentPage path="/commercial/maintenance"/>}
