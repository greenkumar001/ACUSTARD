import Image from "next/image"
import Link from "next/link"
import { Award, Clock, Users, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Import the constants
import { IMAGES } from "@/lib/constants"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-acustard-blue/10 to-acustard-violet/10 relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={IMAGES.backgrounds.gradient || "/placeholder.svg"}
              alt="Technology background"
              fill
              className="object-cover opacity-10"
            />
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-acustard-blue/5 rounded-full blur-3xl"></div>
            <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] bg-acustard-violet/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative h-12 w-12">
                      <Image
                        src={IMAGES.logo || "/placeholder.svg"}
                        alt="ACUSTARD Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    About ACUSTARD
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We are a forward-thinking IT company dedicated to delivering innovative solutions that drive
                    business growth and digital transformation.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-acustard-blue/20 rounded-full blur-lg"></div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-acustard-violet/20 rounded-full blur-lg"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    alt="ACUSTARD team"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={IMAGES.backgrounds.tech || "/placeholder.svg"}
              alt="Code background"
              fill
              className="object-cover opacity-5"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Founded by Greenkumar Bisen, ACUSTARD began with a vision to bridge the gap between
                technology and business needs. What started as a small consulting firm has grown into a comprehensive IT
                solutions provider, helping businesses of all sizes navigate the digital landscape.
              </p>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Our journey has been defined by innovation, dedication, and a relentless pursuit of excellence. We've
                built a team of experts who share our passion for technology and our commitment to delivering
                exceptional results for our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-acustard-blue/10 to-acustard-violet/10">
            <Image
              src={IMAGES.backgrounds.abstract || "/placeholder.svg"}
              alt="Abstract technology background"
              fill
              className="object-cover opacity-10 mix-blend-overlay"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Values</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The principles that guide everything we do.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <Zap className="h-10 w-10 text-acustard-blue mb-2" />
                  <h3 className="text-xl font-bold">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    We embrace new technologies and creative solutions to solve complex problems.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <Award className="h-10 w-10 text-acustard-violet mb-2" />
                  <h3 className="text-xl font-bold">Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    We strive for excellence in everything we do, from code quality to client service.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <Users className="h-10 w-10 text-acustard-blue mb-2" />
                  <h3 className="text-xl font-bold">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    We believe in the power of teamwork and partnership with our clients.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <Clock className="h-10 w-10 text-acustard-violet mb-2" />
                  <h3 className="text-xl font-bold">Reliability</h3>
                  <p className="text-sm text-muted-foreground">We deliver on our promises and stand behind our work.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={IMAGES.backgrounds.network || "/placeholder.svg"}
              alt="Network background"
              fill
              className="object-cover opacity-5"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Leadership</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the team driving our vision forward.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
              {IMAGES.team_members.map((member, index) => (
                <div key={member.name} className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-acustard-blue/20 rounded-full blur-md"></div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-acustard-violet/20 rounded-full blur-md"></div>
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="rounded-full object-cover aspect-square"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-acustard-blue">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-acustard-blue/10 to-acustard-violet/10">
            <Image
              src={IMAGES.backgrounds.gradient || "/placeholder.svg"}
              alt="Gradient background"
              fill
              className="object-cover opacity-20 mix-blend-overlay"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Work With Us?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's transform your business with innovative technology solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="bg-acustard-blue hover:bg-acustard-violet">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-acustard-blue hover:bg-acustard-violet hover:text-white border-acustard-blue"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}