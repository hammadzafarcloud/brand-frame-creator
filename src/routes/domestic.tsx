import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead } from '@/components/site';
export const Route = createFileRoute("/domestic")({head:()=>pageHead("Power Solutions for Your Home","From rooftop solar to everyday electrical repairs, we take care of your home's power so you do not have to worry."),component:Page});
function Page(){return <ContentPage path="/domestic"/>}
