import { redirect } from "next/navigation"

export default function Home() {
  // In a real app, we would check if the user is logged in
  // For demo purposes, we'll redirect to the dashboard
  redirect("/dashboard")
}
