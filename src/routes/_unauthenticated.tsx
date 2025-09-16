import UnauthenticatedLayout from "@/components/layouts/template/UnauthenticatedLayout";
// src/routes/_unauthenticated.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_unauthenticated")({
	component: () => <UnauthenticatedLayout />,
});
