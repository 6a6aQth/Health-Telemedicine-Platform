import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { MapPin, Search, Clock, Truck, CreditCard, Phone, ExternalLink, Filter, CheckCircle2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PharmaciesPage() {
  return (
    <div className="container py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Nearby Pharmacies</h1>
        <p className="text-muted-foreground">Find pharmacies that can fulfill your prescriptions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3 relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search pharmacies by name or location..." className="pl-8" />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="blantyre">
            <SelectTrigger>
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blantyre">Blantyre</SelectItem>
              <SelectItem value="lilongwe">Lilongwe</SelectItem>
              <SelectItem value="mzuzu">Mzuzu</SelectItem>
              <SelectItem value="zomba">Zomba</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="list">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="map">Map View</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "City Pharmacy",
                location: "Victoria Avenue, Blantyre",
                hours: "Open Now • Closes at 20:00",
                distance: "1.2 km away",
                features: ["Delivers", "Insurance Accepted"],
                phone: "+265 1 823 456",
              },
              {
                name: "MediCare Chemist",
                location: "Area 47, Lilongwe",
                hours: "Open Now • Closes at 21:00",
                distance: "15.3 km away",
                features: ["Delivers", "24/7 Service"],
                phone: "+265 1 755 234",
              },
              {
                name: "Mzuzu Community Pharmacy",
                location: "Mzuzu City Centre",
                hours: "Open Now • Closes at 19:00",
                distance: "350 km away",
                features: ["Insurance Accepted"],
                phone: "+265 1 332 567",
              },
              {
                name: "Zomba Central Pharmacy",
                location: "Near Zomba Central Hospital",
                hours: "Open Now • Closes at 18:00",
                distance: "65 km away",
                features: ["Delivers", "Insurance Accepted"],
                phone: "+265 1 524 789",
              },
              {
                name: "Dwangwa Pharmacy",
                location: "Dwangwa Trading Centre",
                hours: "Closed • Opens at 08:00 tomorrow",
                distance: "220 km away",
                features: ["Insurance Accepted"],
                phone: "+265 1 293 456",
              },
              {
                name: "Nkhotakota Health Store",
                location: "Nkhotakota Boma",
                hours: "Open Now • Closes at 17:30",
                distance: "200 km away",
                features: ["Delivers"],
                phone: "+265 1 655 321",
              },
            ].map((pharmacy, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-40 bg-muted flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-muted-foreground/50" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{pharmacy.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {pharmacy.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {pharmacy.distance}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className={pharmacy.hours.includes("Closed") ? "text-red-500" : ""}>{pharmacy.hours}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{pharmacy.phone}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {pharmacy.features.includes("Delivers") && (
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          <Truck className="h-3 w-3 mr-1" /> Delivers
                        </Badge>
                      )}
                      {pharmacy.features.includes("Insurance Accepted") && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          <CreditCard className="h-3 w-3 mr-1" /> Insurance
                        </Badge>
                      )}
                      {pharmacy.features.includes("24/7 Service") && (
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                          <Clock className="h-3 w-3 mr-1" /> 24/7
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1 gap-1">
                    <Truck className="h-4 w-4" /> Request Delivery
                  </Button>
                  <Button variant="outline" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="map" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-lg font-medium">Map View</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Interactive map would be displayed here in a real application
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 space-y-2">
            <h2 className="text-lg font-medium">Nearest Pharmacies</h2>
            <div className="space-y-2">
              {[
                {
                  name: "City Pharmacy",
                  location: "Victoria Avenue, Blantyre",
                  distance: "1.2 km away",
                  status: "Open Now",
                },
                {
                  name: "Blantyre Medical Centre Pharmacy",
                  location: "Ginnery Corner, Blantyre",
                  distance: "2.5 km away",
                  status: "Open Now",
                },
                {
                  name: "Queen Elizabeth Hospital Pharmacy",
                  location: "Chipatala Avenue, Blantyre",
                  distance: "3.7 km away",
                  status: "Open Now",
                },
              ].map((pharmacy, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{pharmacy.name}</h4>
                      <p className="text-sm text-muted-foreground">{pharmacy.location}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {pharmacy.distance}
                        </Badge>
                        <span className="text-xs flex items-center gap-1 text-green-600">
                          <CheckCircle2 className="h-3 w-3" /> {pharmacy.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm">Select</Button>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
