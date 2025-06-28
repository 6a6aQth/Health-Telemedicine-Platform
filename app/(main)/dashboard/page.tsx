import Link from "next/link"
import { RoleSwitcher } from "@/components/role-switcher"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Video,
  Pill,
  MapPin,
  Clock,
  AlertCircle,
  ChevronRight,
  Droplet,
  Thermometer,
  Heart,
  Activity,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Moni, <span className="text-brand-red">Chikondi Banda</span>
          </h1>
          <p className="text-muted-foreground">07 May 2025, 10:32 | Blantyre, Malawi</p>
        </div>
        <div className="w-full md:w-64">
          <RoleSwitcher />
        </div>
      </div>

      <div className="bg-gradient-to-r from-brand-blue to-brand-blue/80 rounded-lg p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome to Telemedicine Platform</h2>
            <p className="max-w-2xl">
              Stay healthy in Malawi's hot season. Remember to drink plenty of water and schedule regular check-ups with
              your doctor.
            </p>
          </div>
          <Button className="bg-brand-yellow text-black hover:bg-brand-yellow/90">Start Consultation</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/consultations" className="block">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-brand-red" />
                Start Consultation
              </CardTitle>
              <CardDescription>Connect with a doctor now</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Video or text chat with qualified Malawian doctors. Available 24/7.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="gap-1">
                Start now <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </Link>

        <Link href="/prescriptions" className="block">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Pill className="h-5 w-5 text-brand-red" />
                My Prescriptions
              </CardTitle>
              <CardDescription>View and manage your medications</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Access your e-prescriptions and send them to nearby pharmacies.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="gap-1">
                View all <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </Link>

        <Link href="/pharmacies" className="block">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-red" />
                Nearby Pharmacies
              </CardTitle>
              <CardDescription>Find medicines near you</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Locate pharmacies in Blantyre that can fulfill your prescriptions.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="gap-1">
                Find now <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Your scheduled consultations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-3 rounded-lg border">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <div>
                        <h4 className="font-medium">Dr. Zione Phiri</h4>
                        <p className="text-sm text-muted-foreground">Pediatrics</p>
                      </div>
                      <Badge className="w-fit">Today, 15:00</Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Button size="sm" className="gap-1 bg-brand-blue hover:bg-brand-blue/90">
                        <Video className="h-4 w-4" /> Join
                      </Button>
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-lg border">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <div>
                        <h4 className="font-medium">Dr. Tiwonge Kumwenda</h4>
                        <p className="text-sm text-muted-foreground">General Medicine</p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        10 May, 10:00
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Button size="sm" variant="outline" className="gap-1 bg-transparent">
                        <Clock className="h-4 w-4" /> Reminder
                      </Button>
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="gap-1">
                View all appointments <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>My Health</CardTitle>
              <CardDescription>Your vital statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="vitals">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="vitals">Vitals</TabsTrigger>
                  <TabsTrigger value="medications">Medications</TabsTrigger>
                </TabsList>
                <TabsContent value="vitals" className="space-y-4 mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-brand-red" />
                      <span>Blood Pressure</span>
                    </div>
                    <span className="font-medium">120/80 mmHg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-brand-red" />
                      <span>Heart Rate</span>
                    </div>
                    <span className="font-medium">72 bpm</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-5 w-5 text-brand-red" />
                      <span>Temperature</span>
                    </div>
                    <span className="font-medium">37.2°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Droplet className="h-5 w-5 text-brand-red" />
                      <span>Blood Sugar</span>
                    </div>
                    <span className="font-medium">5.4 mmol/L</span>
                  </div>
                </TabsContent>
                <TabsContent value="medications" className="space-y-4 mt-4">
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Paracetamol 500mg</h4>
                        <p className="text-sm text-muted-foreground">1 tablet, 3x/day</p>
                      </div>
                      <Badge>5 days</Badge>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Amoxicillin 250mg</h4>
                        <p className="text-sm text-muted-foreground">1 capsule, 2x/day</p>
                      </div>
                      <Badge>7 days</Badge>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-brand-red mt-0.5" />
          <div>
            <h3 className="font-medium">Health Tips for Malawi's Hot Season</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Stay hydrated by drinking at least 2-3 liters of water daily. Avoid prolonged sun exposure between 10am
              and 4pm. Use mosquito repellent to prevent malaria.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
