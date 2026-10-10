import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead } from '@/components/site';
export const Route = createFileRoute("/how-it-works")({head:()=>pageHead("How It Works Page","Your trusted partner for solar and electrical services in Pakistan."),component:Page});
function Page(){return <ContentPage path="/how-it-works"/>}
