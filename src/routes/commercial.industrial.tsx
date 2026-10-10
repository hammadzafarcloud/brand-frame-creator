import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead } from '@/components/site';
export const Route = createFileRoute("/commercial/industrial")({head:()=>pageHead("Industrial Solar and Power","Solar and power engineering for heavy loads and demanding operations."),component:Page});
function Page(){return <ContentPage path="/commercial/industrial"/>}
