import Image from "next/image"
import Link from "next/link"
import { Award, Clock, Users, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

import { IMAGES } from "@/lib/constants"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">

        {/* =====================================================
            HERO SECTION
        ====================================================== */}
        <section
          aria-labelledby="about-acustard-heading"
          className="
            relative
            w-full
            overflow-hidden
            bg-gradient-to-r
            from-blue-50
            to-violet-50
            py-16
            dark:from-blue-950/30
            dark:to-violet-950/30
            sm:py-20
            lg:py-28
          "
        >
          {/* Background */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image
              src={IMAGES.backgrounds.gradient || "/placeholder.svg"}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-[0.06] dark:opacity-[0.08]"
            />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

              {/* Content */}
              <div className="text-center lg:text-left">

                <div className="mb-6 flex justify-center lg:justify-start">
                  <div className="relative h-16 w-16 sm:h-20 sm:w-20">
                    <Image
                      src={IMAGES.logo || "/placeholder.svg"}
                      alt="Acustard Technologies logo"
                      fill
                      priority
                      sizes="80px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <h1
                  id="about-acustard-heading"
                  className="
                    text-3xl
                    font-bold
                    tracking-tight
                    text-gray-900
                    dark:text-white
                    sm:text-4xl
                    lg:text-5xl
                    xl:text-6xl
                  "
                >
                  About Acustard Technologies
                </h1>

                <p
                  className="
                    mt-6
                    max-w-2xl
                    text-base
                    leading-8
                    text-gray-600
                    dark:text-gray-400
                    sm:text-lg
                    lg:text-xl
                  "
                >
                  Acustard Technologies is a technology and software
                  solutions company helping businesses transform ideas
                  into reliable digital products and innovative technology
                  solutions.
                </p>

                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-base
                    leading-8
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  From custom web development and mobile applications to
                  software solutions, AI-powered systems, digital marketing,
                  and modern technology consulting, we work with businesses
                  to build, improve, and grow in the digital world.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start">
                  <Link href="/services">
                    <Button
                      size="lg"
                      className="
                        w-full
                        bg-blue-600
                        text-white
                        hover:bg-blue-700
                        sm:w-auto
                      "
                    >
                      Explore Our Services
                    </Button>
                  </Link>

                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="
                        w-full
                        border-blue-600
                        text-blue-600
                        hover:bg-blue-600
                        hover:text-white
                        dark:border-blue-400
                        dark:text-blue-400
                        dark:hover:bg-blue-600
                        dark:hover:text-white
                        sm:w-auto
                      "
                    >
                      Start a Conversation
                    </Button>
                  </Link>
                </div>

              </div>

              {/* Team Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-xl">

                  <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
                  <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-full bg-violet-500/20 blur-2xl" />

                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    alt="Technology team collaborating on digital solutions"
                    width={800}
                    height={550}
                    priority
                    className="
                      relative
                      aspect-[4/3]
                      w-full
                      rounded-2xl
                      object-cover
                      shadow-2xl
                    "
                  />

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            ABOUT / STORY SECTION
        ====================================================== */}
        <section
          aria-labelledby="our-story-heading"
          className="
            relative
            w-full
            overflow-hidden
            bg-background
            py-16
            sm:py-20
            lg:py-28
          "
        >
          <div className="pointer-events-none absolute inset-0">
            <Image
              src={IMAGES.backgrounds.tech || "/placeholder.svg"}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-[0.025] dark:opacity-[0.04]"
            />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-4xl text-center">

              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Our Journey
              </p>

              <h2
                id="our-story-heading"
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  dark:text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Building Technology That Creates Real Impact
              </h2>

              <div className="mt-8 space-y-6 text-left">

                <p className="text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                  Acustard Technologies was founded with a clear vision:
                  to make modern technology more accessible, practical, and
                  valuable for businesses. We believe technology should not
                  simply look innovative — it should solve real problems,
                  improve efficiency, and create measurable value.
                </p>

                <p className="text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                  Under the vision of Greenkumar Bisen, Acustard Technologies
                  has grown with a focus on software development, web
                  technologies, mobile applications, AI solutions, digital
                  transformation, and technology-driven business solutions.
                </p>

                <p className="text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                  Our approach combines technical expertise, creative
                  thinking, and a strong understanding of business needs.
                  Whether it is a new digital product, a business website,
                  a custom software system, or a technology upgrade, our goal
                  is to create solutions that are scalable, reliable, and
                  built for the future.
                </p>

              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            WHAT WE DO SECTION
        ====================================================== */}
        <section
          aria-labelledby="what-we-do-heading"
          className="
            w-full
            bg-gray-50
            py-16
            dark:bg-gray-900/50
            sm:py-20
            lg:py-28
          "
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                What We Do
              </p>

              <h2
                id="what-we-do-heading"
                className="
                  text-3xl
                  font-bold
                  text-gray-900
                  dark:text-white
                  sm:text-4xl
                "
              >
                Technology Solutions for Modern Businesses
              </h2>

              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
                Acustard Technologies brings together technology,
                creativity, and business understanding to help organizations
                build and grow their digital presence.
              </p>

            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  title: "Software Development",
                  description:
                    "Custom software solutions designed around your business processes and goals.",
                },
                {
                  title: "Web Development",
                  description:
                    "Modern, responsive, and high-performance websites and web applications.",
                },
                {
                  title: "AI & Emerging Technology",
                  description:
                    "Intelligent technology solutions that help businesses explore automation and innovation.",
                },
                {
                  title: "Digital Transformation",
                  description:
                    "Technology strategies and digital solutions that help businesses adapt and grow.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    p-6
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    dark:border-gray-800
                    dark:bg-gray-950
                  "
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </article>
              ))}

            </div>
          </div>
        </section>


        {/* =====================================================
            VALUES SECTION
        ====================================================== */}
        <section
          aria-labelledby="values-heading"
          className="
            relative
            w-full
            overflow-hidden
            py-16
            sm:py-20
            lg:py-28
          "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-violet-50 dark:from-blue-950/20 dark:to-violet-950/20" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Our Principles
              </p>

              <h2
                id="values-heading"
                className="
                  text-3xl
                  font-bold
                  text-gray-900
                  dark:text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                The Values Behind Acustard Technologies
              </h2>

              <p className="mt-4 text-base text-gray-600 dark:text-gray-400 sm:text-lg">
                The principles that guide how we build technology,
                collaborate with clients, and deliver solutions.
              </p>

            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  icon: Zap,
                  title: "Innovation",
                  description:
                    "We explore modern technologies and creative approaches to solve complex business challenges.",
                  color: "text-blue-600",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description:
                    "We focus on quality, attention to detail, and continuous improvement in everything we build.",
                  color: "text-violet-600",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description:
                    "We work closely with clients and believe strong partnerships create better technology solutions.",
                  color: "text-blue-600",
                },
                {
                  icon: Clock,
                  title: "Reliability",
                  description:
                    "We believe in clear communication, responsible delivery, and building solutions clients can depend on.",
                  color: "text-violet-600",
                },
              ].map((value) => {
                const Icon = value.icon

                return (
                  <Card
                    key={value.title}
                    className="
                      border-gray-200
                      bg-white
                      dark:border-gray-800
                      dark:bg-gray-950
                    "
                  >
                    <CardContent className="flex h-full flex-col items-center p-6 text-center">

                      <Icon
                        className={`mb-4 h-10 w-10 ${value.color}`}
                        aria-hidden="true"
                      />

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {value.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                        {value.description}
                      </p>

                    </CardContent>
                  </Card>
                )
              })}

            </div>
          </div>
        </section>


        {/* =====================================================
            LEADERSHIP SECTION
        ====================================================== */}
        <section
          aria-labelledby="leadership-heading"
          className="
            w-full
            bg-background
            py-16
            sm:py-20
            lg:py-28
          "
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Leadership
              </p>

              <h2
                id="leadership-heading"
                className="
                  text-3xl
                  font-bold
                  text-gray-900
                  dark:text-white
                  sm:text-4xl
                "
              >
                The People Behind Our Vision
              </h2>

              <p className="mt-4 text-base text-gray-600 dark:text-gray-400 sm:text-lg">
                Meet the people helping shape the future of Acustard Technologies.
              </p>

            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-3">

              {IMAGES.team_members.map((member) => (
                <article
                  key={member.name}
                  className="text-center"
                >
                  <div className="mx-auto w-fit">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.role} at Acustard Technologies`}
                      width={300}
                      height={300}
                      className="
                        aspect-square
                        rounded-full
                        object-cover
                        shadow-lg
                      "
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                    {member.role}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {member.bio}
                  </p>
                </article>
              ))}

            </div>
          </div>
        </section>


        {/* =====================================================
            CTA SECTION
        ====================================================== */}
        <section
          aria-labelledby="about-cta-heading"
          className="
            w-full
            bg-gradient-to-r
            from-blue-600
            to-violet-600
            py-16
            text-white
            sm:py-20
            lg:py-24
          "
        >
          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">

            <h2
              id="about-cta-heading"
              className="text-3xl font-bold sm:text-4xl lg:text-5xl"
            >
              Have an Idea? Let's Build It Together.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-50 sm:text-lg">
              Whether you are starting a new digital project or looking
              to improve an existing business system, Acustard Technologies
              can help turn your technology goals into practical solutions.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link href="/contact">
                <Button
                  size="lg"
                  className="
                    w-full
                    bg-white
                    text-blue-700
                    hover:bg-gray-100
                    sm:w-auto
                  "
                >
                  Contact Acustard Technologies
                </Button>
              </Link>

              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="
                    w-full
                    border-white
                    bg-transparent
                    text-white
                    hover:bg-white
                    hover:text-blue-700
                    sm:w-auto
                  "
                >
                  Explore Our Services
                </Button>
              </Link>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}