import { createFileRoute } from '@tanstack/react-router';
import { ContactPage, pageHead } from '@/components/site';
export const Route=createFileRoute('/contact')({head:()=>pageHead('Talk to Us','Contact Flip Power Plus for solar, electrical and cooling services in Lahore, Pakistan.'),component:ContactPage});
