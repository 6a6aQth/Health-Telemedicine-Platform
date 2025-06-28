import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, MessageSquare, Video, Star, Filter } from "lucide-react"

export default function ConsultationsPage() {
  return (
    <div className="container py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Consultations</h1>
        <p className="text-muted-foreground">Connect with healthcare professionals in Malawi</p>
      </div>

      <Tabs defaultValue="new">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <TabsList>
            <TabsTrigger value="new">New Consultation</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Filter className="h-4 w-4" /> Filter
          </Button>
        </div>

        <TabsContent value="new" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Start a Video Consultation</CardTitle>
                <CardDescription>Face-to-face consultation with a doctor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <Video className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <p className="text-sm">
                  Connect with a doctor via video call for a comprehensive consultation. Ideal for detailed assessments.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">Start Video Consultation</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Start a Text Consultation</CardTitle>
                <CardDescription>Chat with a doctor via text</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <MessageSquare className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <p className="text-sm">
                  Connect with a doctor via text chat. Ideal for simple questions and follow-ups.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Text Consultation</Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Available Doctors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "Dr. Zione Phiri",
                  specialty: "Pediatrics",
                  hospital: "Queen Elizabeth Central Hospital",
                  rating: 4.8,
                  available: true,
                },
                {
                  name: "Dr. Tiwonge Kumwenda",
                  specialty: "General Medicine",
                  hospital: "Kamuzu Central Hospital",
                  rating: 4.6,
                  available: true,
                },
                {
                  name: "Dr. Mphatso Banda",
                  specialty: "Cardiology",
                  hospital: "Mzuzu Health Centre",
                  rating: 4.9,
                  available: false,
                },
              ].map((doctor, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={`/placeholder.svg?height=48&width=48`} alt={doctor.name} />
                        <AvatarFallback>
                          {doctor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{doctor.name}</h3>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 fill-brand-yellow text-brand-yellow" />
                            <span className="text-sm ml-1">{doctor.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                        <p className="text-xs text-muted-foreground mt-1">{doctor.hospital}</p>
                        <div className="mt-3 flex items-center gap-2">
                          {doctor.available ? (
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Available Now
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                              Available at 14:00
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button size="sm" className="flex-1 gap-1" disabled={!doctor.available}>
                      <Video className="h-4 w-4" /> Video
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 gap-1 bg-transparent">
                      <MessageSquare className="h-4 w-4" /> Chat
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history" className="mt-6 space-y-4">
          <div className="space-y-4">
            {[
              {
                doctor: "Dr. Zione Phiri",
                specialty: "Pediatrics",
                date: "02 May 2025",
                time: "14:30",
                type: "Video",
                status: "Completed",
              },
              {
                doctor: "Dr. Tiwonge Kumwenda",
                specialty: "General Medicine",
                date: "25 Apr 2025",
                time: "10:15",
                type: "Text",
                status: "Completed",
              },
              {
                doctor: "Dr. Mphatso Banda",
                specialty: "Cardiology",
                date: "15 Apr 2025",
                time: "16:00",
                type: "Video",
                status: "Cancelled",
              },
            ].map((consultation, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        {consultation.type === "Video" ? (
                          <Video className="h-5 w-5 text-primary" />
                        ) : (
                          <MessageSquare className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium">{consultation.doctor}</h4>
                        <p className="text-sm text-muted-foreground">{consultation.specialty}</p>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{consultation.date}</span>
                          <Clock className="h-3 w-3 ml-2" />
                          <span>{consultation.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={consultation.status === "Completed" ? "default" : "outline"}
                        className={consultation.status === "Cancelled" ? "bg-red-50 text-red-700 border-red-200" : ""}
                      >
                        {consultation.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
