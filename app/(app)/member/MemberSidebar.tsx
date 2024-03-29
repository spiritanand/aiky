"use client";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
	Home,
	CalendarFold,
	StretchHorizontal,
	Users,
	Swords,
} from "lucide-react";
import Link from "next/link";
import { NavigationMenuSub } from "@radix-ui/react-navigation-menu";
import { usePathname } from "next/navigation";

function MemberSidebar() {
	const pathname = usePathname();

	return (
		<aside
			className="flex-[2_2_0%] p-6"
			style={{ height: "calc(100vh - 3.5rem)" }}
		>
			<NavigationMenu className="flex-col items-start gap-2">
				<NavigationMenuSub>
					<Link href="home">
						<NavigationMenuList className="flex-col items-start gap-4 hover:bg-gray-300 p-3 rounded-[20px] w-40 cursor-pointer">
							<NavigationMenuItem
								className={`flex items-center gap-4 text-sm ${
									pathname.includes("home")
										? "text-primary font-semibold"
										: "text-gray-400"
								}`}
							>
								<Home />
								Home
							</NavigationMenuItem>
						</NavigationMenuList>
					</Link>
				</NavigationMenuSub>

				<NavigationMenuSub>
					<Link href="events">
						<NavigationMenuList className="flex-col items-start gap-4 hover:bg-gray-300 p-3 rounded-[20px] w-40 cursor-pointer">
							<NavigationMenuItem
								className={`flex items-center gap-4 text-sm ${
									pathname.includes("events")
										? "text-primary font-semibold"
										: "text-gray-400"
								}`}
							>
								<CalendarFold />
								Events
							</NavigationMenuItem>
						</NavigationMenuList>
					</Link>
				</NavigationMenuSub>

				<NavigationMenuSub>
					<Link href="products">
						<NavigationMenuList className="flex-col items-start gap-4 hover:bg-gray-300 p-3 rounded-[20px] w-40 cursor-pointer">
							<NavigationMenuItem
								className={`flex items-center gap-4 text-sm ${
									pathname.includes("products")
										? "text-primary font-semibold"
										: "text-gray-400"
								}`}
							>
								<StretchHorizontal />
								Products
							</NavigationMenuItem>
						</NavigationMenuList>
					</Link>
				</NavigationMenuSub>

				<NavigationMenuSub>
					<Link href="members">
						<NavigationMenuList className="flex-col items-start gap-4 hover:bg-gray-300 p-3 rounded-[20px] w-40 cursor-pointer">
							<NavigationMenuItem
								className={`flex items-center gap-4 text-sm ${
									pathname.includes("members")
										? "text-primary font-semibold"
										: "text-gray-400"
								}`}
							>
								<Users />
								Members
							</NavigationMenuItem>
						</NavigationMenuList>
					</Link>
				</NavigationMenuSub>

				<NavigationMenuSub>
					<Link href="challenges">
						<NavigationMenuList className="flex-col items-start gap-4 hover:bg-gray-300 p-3 rounded-[20px] w-40 cursor-pointer">
							<NavigationMenuItem
								className={`flex items-center gap-4 text-sm ${
									pathname.includes("challenges")
										? "text-primary font-semibold"
										: "text-gray-400"
								}`}
							>
								<Swords />
								Challenges
							</NavigationMenuItem>
						</NavigationMenuList>
					</Link>
				</NavigationMenuSub>
			</NavigationMenu>
		</aside>
	);
}

export default MemberSidebar;
