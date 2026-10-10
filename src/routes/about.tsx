import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead } from '@/components/site';
export const Route = createFileRoute("/about")({head:()=>pageHead("About Flip Power Plus","Your trusted partner for solar and electrical services in Pakistan."),component:Page});
function Page(){return <ContentPage path="/about"/>}
