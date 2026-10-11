import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead } from '@/components/site';
export const Route = createFileRoute("/commercial/")({head:()=>pageHead("Power Solutions for Your Business","Lower energy costs, fewer outages and dependable electrical support for shops, offices, clinics, schools and factories."),component:Page});
function Page(){return <ContentPage path="/commercial"/>}
