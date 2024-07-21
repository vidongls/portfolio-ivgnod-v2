import { Header } from "@/components/header";

export default function Layout({ children }) {
	return (
		<div className="flex min-h-full flex-col">
			<Header />
			<main className="h-full">{children}</main>
		</div>
	);
}
