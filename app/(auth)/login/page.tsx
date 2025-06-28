"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Flag, Stethoscope, User, UserCog, Building2 } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <div className="flex items-center justify-center gap-2">
                <div className="relative h-12 w-12 overflow-hidden rounded-md bg-brand-blue">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
                    T
                  </div>
                </div>
                <span className="font-bold text-2xl">
                  <span className="text-brand-red">Tele</span>Medicine
                </span>
              </div>
            </Link>
            <h1 className="mt-6 text-2xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to access your healthcare services</p>
          </div>

          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone</TabsTrigger>
            </TabsList>

            <TabsContent value="email">
              <Card>
                <form onSubmit={handleLogin}>
                  <CardHeader>
                    <CardTitle>Sign In with Email</CardTitle>
                    <CardDescription>Enter your email and password to access your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select defaultValue="patient">
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="patient">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4" />
                              <span>Patient</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="doctor">
                            <div className="flex items-center gap-2">
                              <Stethoscope className="h-4 w-4" />
                              <span>Doctor</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="admin">
                            <div className="flex items-center gap-2">
                              <UserCog className="h-4 w-4" />
                              <span>Admin</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="pharmacist">
                            <div className="flex items-center gap-2">
                              <Building2 className="h-4 w-4" />
                              <span>Pharmacist</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="name@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link href="#" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input id="password" type="password" placeholder="••••••••" required />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col">
                    <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90" disabled={isLoading}>
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                      Don&apos;t have an account?{" "}
                      <Link href="/signup" className="text-primary hover:underline">
                        Sign up
                      </Link>
                    </p>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="phone">
              <Card>
                <form onSubmit={handleLogin}>
                  <CardHeader>
                    <CardTitle>Sign In with Phone</CardTitle>
                    <CardDescription>Enter your phone number to receive a verification code</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select defaultValue="patient">
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="patient">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4" />
                              <span>Patient</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="doctor">
                            <div className="flex items-center gap-2">
                              <Stethoscope className="h-4 w-4" />
                              <span>Doctor</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="admin">
                            <div className="flex items-center gap-2">
                              <UserCog className="h-4 w-4" />
                              <span>Admin</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="pharmacist">
                            <div className="flex items-center gap-2">
                              <Building2 className="h-4 w-4" />
                              <span>Pharmacist</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="flex">
                        <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-muted">
                          <Flag className="h-4 w-4 mr-1" />
                          <span className="text-sm">+265</span>
                        </div>
                        <Input id="phone" type="tel" placeholder="999 123 456" className="rounded-l-none" required />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col">
                    <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90" disabled={isLoading}>
                      {isLoading ? "Sending code..." : "Send Verification Code"}
                    </Button>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                      Don&apos;t have an account?{" "}
                      <Link href="/signup" className="text-primary hover:underline">
                        Sign up
                      </Link>
                    </p>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="p-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Telemedicine Platform. All rights reserved.</p>
        <p className="mt-1">
          <span className="inline-flex items-center">
            <span className="mr-1">🔒</span> Data Encrypted - AES-256
          </span>
        </p>
      </div>
    </div>
  )
}
