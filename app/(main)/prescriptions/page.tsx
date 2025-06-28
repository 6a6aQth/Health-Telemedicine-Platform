import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pill, Send, Download, Lock, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PrescriptionsPage() {
  return (
    <div className="container py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Prescriptions</h1>
        <p className="text-muted-foreground">View and manage your e-prescriptions</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search prescriptions..." className="pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                id: "RX-2025-001",
                name: "Paracetamol 500mg",
                dosage: "1 tablet, 3x/day",
                duration: "5 days",
                doctor: "Dr. Tiwonge Kumwenda",
                date: "25 Apr 2025",
                status: "Ready for Pickup",
              },
              {
                id: "RX-2025-002",
                name: "Amoxicillin 250mg",
                dosage: "1 capsule, 2x/day",
                duration: "7 days",
                doctor: "Dr. Tiwonge Kumwenda",
                date: "25 Apr 2025",
                status: "Pending Pharmacy",
              },
              {
                id: "RX-2025-003",
                name: "Cough Syrup (Benylin)",
                dosage: "10ml, 3x/day",
                duration: "5 days",
                doctor: "Dr. Zione Phiri",
                date: "02 May 2025",
                status: "Pending Pharmacy",
              },
            ].map((prescription, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Pill className="h-5 w-5 text-brand-red" />
                      {prescription.name}
                    </CardTitle>
                    <Badge
                      variant={prescription.status === "Ready for Pickup" ? "default" : "outline"}
                      className={
                        prescription.status === "Ready for Pickup"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : ""
                      }
                    >
                      {prescription.status}
                    </Badge>
                  </div>
                  <CardDescription>Prescription #{prescription.id}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      <div className="text-muted-foreground">Dosage:</div>
                      <div>{prescription.dosage}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      <div className="text-muted-foreground">Duration:</div>
                      <div>{prescription.duration}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      <div className="text-muted-foreground">Prescribed by:</div>
                      <div>{prescription.doctor}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      <div className="text-muted-foreground">Date:</div>
                      <div>{prescription.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    <Lock className="h-3 w-3 text-green-600" />
                    <span className="text-xs text-green-600">Data Encrypted - AES-256</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="flex-1 gap-1">
                        <Send className="h-4 w-4" /> Send to Pharmacy
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Send to Pharmacy</DialogTitle>
                        <DialogDescription>Choose a pharmacy to send your prescription to.</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Select Pharmacy</label>
                          <Select defaultValue="city">
                            <SelectTrigger>
                              <SelectValue placeholder="Select a pharmacy" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="city">City Pharmacy - Blantyre</SelectItem>
                              <SelectItem value="medicare">MediCare Chemist - Lilongwe</SelectItem>
                              <SelectItem value="mzuzu">Mzuzu Community Pharmacy - Mzuzu</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Delivery Option</label>
                          <Select defaultValue="pickup">
                            <SelectTrigger>
                              <SelectValue placeholder="Select delivery option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pickup">Pickup at Pharmacy</SelectItem>
                              <SelectItem value="delivery">Home Delivery (+MK 1,500)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Notes for Pharmacist (Optional)</label>
                          <Input placeholder="Any special instructions..." />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Confirm</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" className="flex-1 gap-1 bg-transparent">
                    <Download className="h-4 w-4" /> Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history" className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                id: "RX-2025-001",
                name: "Metformin 500mg",
                dosage: "1 tablet, 2x/day",
                duration: "30 days",
                doctor: "Dr. Mphatso Banda",
                date: "15 Mar 2025",
                status: "Completed",
                pharmacy: "City Pharmacy - Blantyre",
              },
              {
                id: "RX-2024-098",
                name: "Ibuprofen 400mg",
                dosage: "1 tablet, 3x/day",
                duration: "7 days",
                doctor: "Dr. Tiwonge Kumwenda",
                date: "28 Feb 2025",
                status: "Completed",
                pharmacy: "MediCare Chemist - Lilongwe",
              },
            ].map((prescription, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Pill className="h-5 w-5 text-brand-red" />
                      {prescription.name}
                    </CardTitle>
                    <Badge variant="outline">{prescription.status}</Badge>
                  </div>
                  <CardDescription>Prescription #{prescription.id}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      <div className="text-muted-foreground">Dosage:</div>
                      <div>{prescription.dosage}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      <div className="text-muted-foreground">Duration:</div>
                      <div>{prescription.duration}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      <div className="text-muted-foreground">Prescribed by:</div>
                      <div>{prescription.doctor}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      <div className="text-muted-foreground">Date:</div>
                      <div>{prescription.date}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      <div className="text-muted-foreground">Dispensed by:</div>
                      <div>{prescription.pharmacy}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full gap-1 bg-transparent">
                    <Download className="h-4 w-4" /> Download Record
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
