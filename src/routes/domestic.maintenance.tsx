import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead } from '@/components/site';
export const Route = createFileRoute("/domestic/maintenance")({head:()=>pageHead("Keep Your Solar System at Its Best","Regular care protects performance and your investment."),component:Page});
function Page(){return <ContentPage path="/domestic/maintenance"/>}
