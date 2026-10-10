import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead } from '@/components/site';
export const Route = createFileRoute("/domestic/backup-ev")({head:()=>pageHead("Backup Power and EV Charging","Keep the lights on and get ready for electric vehicles."),component:Page});
function Page(){return <ContentPage path="/domestic/backup-ev"/>}
