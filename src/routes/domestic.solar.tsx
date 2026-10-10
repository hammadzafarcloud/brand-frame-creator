import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead } from '@/components/site';
export const Route = createFileRoute("/domestic/solar")({head:()=>pageHead("Solar Solutions for Your Home","Cut your electricity bills and stay powered with a solar system designed around your real usage."),component:Page});
function Page(){return <ContentPage path="/domestic/solar"/>}
