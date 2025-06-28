"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Video,
  Mic,
  MicOff,
  VideoOff,
  MessageSquare,
  PaperclipIcon,
  Send,
  Heart,
  Activity,
  Thermometer,
  Droplet,
  FileText,
  Lock,
} from "lucide-react"

export default function ConsultationPage() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "doctor", text: "Hello Chikondi, how can I help you today?", time: "10:30" },
    {
      id: 2,
      sender: "user",
      text: "Hello Dr. Phiri, I've been having a persistent cough for the past week.",
      time: "10:31",
    },
    {
      id: 3,
      sender: "doctor",
      text: "I'm sorry to hear that. Can you tell me if you have any other symptoms like fever or difficulty breathing?",
      time: "10:32",
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [videoEnabled, setVideoEnabled] = useState(true)
  const [micEnabled, setMicEnabled] = useState(true)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: "user", text: newMessage, time: "10:33" }])
      setNewMessage("")

      // Simulate doctor response after a delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            sender: "doctor",
            text: "Thank you for sharing that information. Based on your symptoms, I recommend taking some warm fluids and rest. Would you be able to upload a photo of your throat?",
            time: "10:34",
          },
        ])
      }, 2000)
    }
  }

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Consultation</h1>
          <div className="flex items-center gap-2">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
            <p className="text-muted-foreground">Started at 10:30 • 07 May 2025</p>
          </div>
        </div>
        <Button variant="outline" className="gap-2 bg-transparent">
          <FileText className="h-4 w-4" /> Medical Records
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-brand-red" />
                  Video Consultation
                </CardTitle>
                <div className="flex items-center gap-1">
                  <Lock className="h-4 w-4 text-green-600" />
                  <span className="text-xs text-green-600">Encrypted</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <Video className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <div className="absolute bottom-8 right-4 w-32 h-24 bg-gray-800 rounded-md overflow-hidden border-2 border-background">
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`/placeholder.svg?height=48&width=48`} alt="Chikondi Banda" />
                      <AvatarFallback>CB</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                  <Button
                    size="icon"
                    variant={micEnabled ? "default" : "destructive"}
                    onClick={() => setMicEnabled(!micEnabled)}
                  >
                    {micEnabled ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                  </Button>
                  <Button
                    size="icon"
                    variant={videoEnabled ? "default" : "destructive"}
                    onClick={() => setVideoEnabled(!videoEnabled)}
                  >
                    {videoEnabled ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                  </Button>
                  <Button size="icon" variant="destructive">
                    <VideoOff className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt="Dr. Zione Phiri" />
                  <AvatarFallback>ZP</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Dr. Zione Phiri</h3>
                  <p className="text-sm text-muted-foreground">Pediatrics • Queen Elizabeth Central Hospital</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-brand-red" />
                Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] overflow-y-auto mb-4 space-y-4 p-2">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user" ? "bg-brand-blue text-white" : "bg-muted"
                      }`}
                    >
                      <p>{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user" ? "text-white/70" : "text-muted-foreground"
                        }`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Button size="icon" variant="outline">
                  <PaperclipIcon className="h-4 w-4" />
                </Button>
                <Textarea
                  placeholder="Type your message..."
                  className="min-h-[40px]"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                />
                <Button size="icon" onClick={handleSendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Patient Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={`/placeholder.svg?height=64&width=64`} alt="Chikondi Banda" />
                  <AvatarFallback>CB</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Chikondi Banda</h3>
                  <p className="text-sm text-muted-foreground">32 years • Male</p>
                  <p className="text-sm text-muted-foreground">Blantyre, Malawi</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Vital Signs</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-brand-red" />
                      <span>Blood Pressure</span>
                    </div>
                    <span>120/80 mmHg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-brand-red" />
                      <span>Heart Rate</span>
                    </div>
                    <span>72 bpm</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-brand-red" />
                      <span>Temperature</span>
                    </div>
                    <span>37.2°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Droplet className="h-4 w-4 text-brand-red" />
                      <span>Blood Sugar</span>
                    </div>
                    <span>5.4 mmol/L</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Allergies</h4>
                <div className="space-y-1 text-sm">
                  <p>Penicillin</p>
                  <p>Peanuts</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Current Medications</h4>
                <div className="space-y-1 text-sm">
                  <p>Paracetamol 500mg - 3x/day</p>
                  <p>Amoxicillin 250mg - 2x/day</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>E-Prescription</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="create">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="create">Create</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                <TabsContent value="create" className="space-y-4 mt-4">
                  <p className="text-sm text-muted-foreground">
                    Only doctors can create prescriptions. This will be available after the consultation.
                  </p>
                  <Button className="w-full" disabled>
                    Create Prescription
                  </Button>
                </TabsContent>
                <TabsContent value="history" className="space-y-4 mt-4">
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Paracetamol 500mg</h4>
                        <p className="text-sm text-muted-foreground">1 tablet, 3x/day - 5 days</p>
                        <p className="text-xs text-muted-foreground mt-1">Dr. Tiwonge Kumwenda - 25 Apr 2025</p>
                      </div>
                      <Badge>Active</Badge>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg border">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Amoxicillin 250mg</h4>
                        <p className="text-sm text-muted-foreground">1 capsule, 2x/day - 7 days</p>
                        <p className="text-xs text-muted-foreground mt-1">Dr. Tiwonge Kumwenda - 25 Apr 2025</p>
                      </div>
                      <Badge>Active</Badge>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
