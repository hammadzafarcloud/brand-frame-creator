import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead } from '@/components/site';
export const Route = createFileRoute("/domestic/electrical")({head:()=>pageHead("Reliable Electrical Services at Home","Safe, tidy electrical work by skilled technicians, for every room in your house."),component:Page});
function Page(){return <ContentPage path="/domestic/electrical"/>}
