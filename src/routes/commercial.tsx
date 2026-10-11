import { createFileRoute, Outlet } from '@tanstack/react-router';
export const Route=createFileRoute('/commercial')({component:Layout});
function Layout(){return <Outlet/>}
