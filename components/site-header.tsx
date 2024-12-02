import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home } from 'lucide-react'

export function SiteHeader() {
  return (
    <div className="border-b">
      {/* Main Navigation */}
      <div className="flex h-16 items-center px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="MerryMeal" />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
          <span className="text-lg font-semibold">MerryMeal</span>
        </div>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline hidden sm:block" href="#">
            About Us
          </Link>
          <Link className="text-sm font-medium hover:underline hidden sm:block" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline hidden sm:block" href="#">
            Fundraising
          </Link>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <span className="sr-only">Admin Menu</span>
          </Button>
        </nav>
      </div>

      {/* Breadcrumb */}
      <div className="border-b px-4 py-2 md:px-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Home className="h-4 w-4" />
          <span>/</span>
          <span>Log in</span>
          <span>/</span>
          <span className="font-medium text-foreground">Dashboard</span>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="px-4 md:px-6">
        <nav className="flex overflow-x-auto">
          {[
            "Overview",
            "Members",
            "Volunteers & partners",
            "Meals",
            "Fundraising",
            "Reports",
            "Setting"
          ].map((item) => (
            <Link
              key={item}
              href="#"
              className={`border-b-2 px-4 py-3 text-sm font-medium ${
                item === "Overview" 
                  ? "border-primary text-primary" 
                  : "border-transparent hover:border-muted-foreground/25"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

