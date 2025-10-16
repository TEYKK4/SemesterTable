import { Header } from "@/components/header"
import { MobileNav } from "@/components/mobile-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, TrendingUp, GraduationCap, Crown, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const isAuthenticated = true

const userCurriculums = [
    {
        id: 1,
        name: "Computer Science - Fall 2024",
        semester: "Fall 2024",
        coursesCount: 5,
        totalClasses: 120,
        attendedClasses: 95,
        upcomingExams: 2,
        isOwner: true,
    },
    {
        id: 2,
        name: "Computer Science - Spring 2024",
        semester: "Spring 2024",
        coursesCount: 4,
        totalClasses: 96,
        attendedClasses: 96,
        upcomingExams: 0,
        isOwner: true,
    },
    {
        id: 3,
        name: "Mathematics - Fall 2024",
        semester: "Fall 2024",
        coursesCount: 3,
        totalClasses: 72,
        attendedClasses: 68,
        upcomingExams: 1,
        isOwner: false,
    },
]

const featuredCurriculums = [
    {
        id: 1,
        name: "Computer Science - Fall 2024",
        description: "Complete CS curriculum including algorithms, data structures, and web development",
        creator: "Prof. Johnson",
        courseCount: 5,
        subscribers: 234,
        semester: "Fall 2024",
        category: "Computer Science",
    },
    {
        id: 2,
        name: "Mathematics - Advanced Track",
        description: "Advanced mathematics covering calculus, linear algebra, and discrete math",
        creator: "Dr. Smith",
        courseCount: 4,
        subscribers: 189,
        semester: "Fall 2024",
        category: "Mathematics",
    },
    {
        id: 3,
        name: "Business Administration Core",
        description: "Essential business courses including management, finance, and marketing",
        creator: "Prof. Williams",
        courseCount: 6,
        subscribers: 312,
        semester: "Fall 2024",
        category: "Business",
    },
]

function PublicHomePage() {
    return (
        <div className="min-h-screen pb-20">
            <Header />

            <main className="container px-4 py-6 space-y-8">
                {/* Hero Section */}
                <div className="text-center space-y-4 py-8">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                            <GraduationCap className="h-8 w-8 text-primary-foreground" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-balance">Organize Your Semester</h1>
                    <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                        Track attendance, manage courses, and stay on top of exams. Join students organizing their academic journey.
                    </p>
                    <div className="flex gap-3 justify-center pt-4">
                        <Button size="lg" asChild>
                            <Link href="/signup">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="bg-transparent">
                            <Link href="/signin">Sign In</Link>
                        </Button>
                    </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="border-primary/20 bg-primary/5">
                        <CardContent className="pt-6 pb-4 px-4">
                            <div className="flex flex-col items-center text-center gap-2">
                                <BookOpen className="h-8 w-8 text-primary mb-2" />
                                <h3 className="font-semibold">Track Courses</h3>
                                <p className="text-sm text-muted-foreground">Organize all your courses and class types in one place</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-accent/20 bg-accent/5">
                        <CardContent className="pt-6 pb-4 px-4">
                            <div className="flex flex-col items-center text-center gap-2">
                                <Calendar className="h-8 w-8 text-accent mb-2" />
                                <h3 className="font-semibold">Mark Attendance</h3>
                                <p className="text-sm text-muted-foreground">Visual progress tracking with color-coded attendance</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-success/20 bg-success/5">
                        <CardContent className="pt-6 pb-4 px-4">
                            <div className="flex flex-col items-center text-center gap-2">
                                <Users className="h-8 w-8 text-success mb-2" />
                                <h3 className="font-semibold">Share & Subscribe</h3>
                                <p className="text-sm text-muted-foreground">Subscribe to curriculums shared by other students</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Featured Curriculums */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">Featured Curriculums</h2>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/discover">View All</Link>
                        </Button>
                    </div>

                    <div className="grid gap-4">
                        {featuredCurriculums.map((curriculum) => (
                            <Card key={curriculum.id} className="hover:shadow-md transition-shadow">
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="space-y-1 flex-1">
                                            <CardTitle className="text-lg leading-tight">{curriculum.name}</CardTitle>
                                            <CardDescription className="text-sm line-clamp-2">{curriculum.description}</CardDescription>
                                        </div>
                                        <Badge variant="secondary" className="shrink-0">
                                            {curriculum.category}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1.5">
                                            <BookOpen className="h-4 w-4" />
                                            <span>{curriculum.courseCount} courses</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Users className="h-4 w-4" />
                                            <span>{curriculum.subscribers} subscribers</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-1.5 text-muted-foreground">
                                            <GraduationCap className="h-4 w-4" />
                                            <span>{curriculum.creator}</span>
                                        </div>
                                        <span className="text-muted-foreground">{curriculum.semester}</span>
                                    </div>

                                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                                        <Link href={`/curriculum/${curriculum.id}`}>View Details</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <Card className="bg-primary text-primary-foreground border-0">
                    <CardContent className="py-8 text-center space-y-4">
                        <h2 className="text-2xl font-bold">Ready to get organized?</h2>
                        <p className="text-primary-foreground/90">
                            Join students who are staying on top of their semester with smart tracking
                        </p>
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/signup">Create Free Account</Link>
                        </Button>
                    </CardContent>
                </Card>
            </main>

            <MobileNav />
        </div>
    )
}

function AuthenticatedHomePage() {
    const totalCurriculums = userCurriculums.length
    const totalCourses = userCurriculums.reduce((acc, c) => acc + c.coursesCount, 0)
    const upcomingExams = userCurriculums.reduce((acc, c) => acc + c.upcomingExams, 0)
    const avgAttendance = Math.round(
        userCurriculums.reduce((acc, c) => acc + (c.attendedClasses / c.totalClasses) * 100, 0) / userCurriculums.length ||
        0,
    )

    return (
        <div className="min-h-screen pb-20">
            <Header />

            <main className="container px-4 py-6 space-y-6">
                {/* Welcome Section */}
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight text-balance">Welcome back, Student</h1>
                    <p className="text-muted-foreground text-pretty">Track your progress and stay on top of your semester</p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3">
                    <Card className="border-primary/20 bg-primary/5">
                        <CardContent className="pt-6 pb-4 px-4">
                            <div className="flex flex-col items-center text-center gap-1">
                                <BookOpen className="h-5 w-5 text-primary mb-1" />
                                <div className="text-2xl font-bold text-primary">{totalCourses}</div>
                                <div className="text-xs text-muted-foreground">Courses</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-accent/20 bg-accent/5">
                        <CardContent className="pt-6 pb-4 px-4">
                            <div className="flex flex-col items-center text-center gap-1">
                                <Calendar className="h-5 w-5 text-accent mb-1" />
                                <div className="text-2xl font-bold text-accent">{upcomingExams}</div>
                                <div className="text-xs text-muted-foreground">Exams Soon</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-success/20 bg-success/5">
                        <CardContent className="pt-6 pb-4 px-4">
                            <div className="flex flex-col items-center text-center gap-1">
                                <TrendingUp className="h-5 w-5 text-success mb-1" />
                                <div className="text-2xl font-bold text-success">{avgAttendance}%</div>
                                <div className="text-xs text-muted-foreground">Attendance</div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* My Curriculums Section */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">My Curriculums</h2>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/discover">Discover</Link>
                        </Button>
                    </div>

                    <div className="space-y-3">
                        {/* Curriculum Cards */}
                        {userCurriculums.map((curriculum) => {
                            const attendanceRate = Math.round((curriculum.attendedClasses / curriculum.totalClasses) * 100)

                            return (
                                <Card key={curriculum.id} className="overflow-hidden hover:shadow-md transition-shadow">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="space-y-1 flex-1">
                                                <CardTitle className="text-base leading-tight flex items-center gap-2">
                                                    <GraduationCap className="h-4 w-4 text-primary" />
                                                    {curriculum.name}
                                                    {curriculum.isOwner && (
                                                        <Badge variant="secondary" className="gap-1 text-[10px] px-1.5 py-0">
                                                            <Crown className="h-2.5 w-2.5" />
                                                            Owner
                                                        </Badge>
                                                    )}
                                                </CardTitle>
                                                <CardDescription className="text-sm">{curriculum.semester}</CardDescription>
                                            </div>
                                            <div className="flex flex-col items-end gap-1">
                                                <span className="text-xs font-medium text-muted-foreground">Attendance</span>
                                                <span className="text-lg font-bold text-primary">{attendanceRate}%</span>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        {/* Stats */}
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <span className="text-muted-foreground">Courses: </span>
                                                    <span className="font-medium">{curriculum.coursesCount}</span>
                                                </div>
                                                <div>
                                                    <span className="text-muted-foreground">Classes: </span>
                                                    <span className="font-medium">
                            {curriculum.attendedClasses}/{curriculum.totalClasses}
                          </span>
                                                </div>
                                            </div>
                                            {curriculum.upcomingExams > 0 && (
                                                <div className="text-accent font-medium">{curriculum.upcomingExams} exams soon</div>
                                            )}
                                        </div>

                                        <Button className="w-full" size="sm" asChild>
                                            <Link href={`/curriculum/${curriculum.id}`}>View Courses</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            )
                        })}

                        {/* Empty State */}
                        {userCurriculums.length === 0 && (
                            <Card className="border-dashed">
                                <CardContent className="flex flex-col items-center justify-center py-8 text-center">
                                    <GraduationCap className="h-10 w-10 text-muted-foreground/50 mb-3" />
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Create or subscribe to curriculums to track your progress
                                    </p>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm" asChild>
                                            <Link href="/discover">Discover</Link>
                                        </Button>
                                        <Button size="sm" asChild>
                                            <Link href="/create">Create</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </main>

            <MobileNav />
        </div>
    )
}

export default function HomePage() {
    return isAuthenticated ? <AuthenticatedHomePage /> : <PublicHomePage />
}
