import { GraduationCap } from "lucide-react"
import Link from "next/link"

export function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            <div className="container flex h-14 items-center px-4">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <GraduationCap className="h-5 w-5" />
                    </div>
                    <span className="text-lg">Semester Organizer</span>
                </Link>
            </div>
        </header>
    )
}
