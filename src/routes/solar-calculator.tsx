import { createFileRoute } from '@tanstack/react-router';
import { Header, Footer, Calculator, pageHead } from '@/components/site';
export const Route=createFileRoute('/solar-calculator')({head:()=>pageHead('Solar System Calculator','Estimate your solar system size and panel count from your monthly electricity units.'),component:Page});
function Page(){return <><Header/><main><Calculator/></main><Footer/></>}
