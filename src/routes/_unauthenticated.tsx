import UnauthenticatedLayout from "@/components/layout/UnauthenticatedLayout";
// src/routes/_unauthenticated.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_unauthenticated")({
	component: () => <UnauthenticatedLayout />,
});
