import { createFileRoute, Outlet } from '@tanstack/react-router';
export const Route=createFileRoute('/domestic')({component:Layout});
function Layout(){return <Outlet/>}
