import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead } from '@/components/site';
export const Route = createFileRoute("/commercial/backup-power")({head:()=>pageHead("Backup Power for Business","Avoid downtime with reliable backup systems."),component:Page});
function Page(){return <ContentPage path="/commercial/backup-power"/>}
