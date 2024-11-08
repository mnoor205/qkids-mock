import { Button } from "@/components/ui/button"
import { Video, Users, Calendar, Sparkles } from "lucide-react"

export default function CodingClassFeatures() {
  const features = [
    { icon: Video, title: "Live Video Chat Classes", description: "Interactive sessions for real-time learning" },
    { icon: Users, title: "World-class Teachers", description: "Learn from experienced industry professionals" },
    { icon: Calendar, title: "Flexible Learning Options", description: "Choose schedules that fit your lifestyle" },
    { icon: Sparkles, title: "For Ages 8-17", description: "Tailored curriculum for young learners" },
  ]

  return (
    <section className="w-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/5 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Discover Our Coding Classes</h2>
        <p className="text-xl text-center text-muted-foreground mb-12">Empowering the next generation of tech innovators</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="px-8 py-6 text-lg">
            Start Learning Today
          </Button>
        </div>
      </div>
    </section>
  )
}