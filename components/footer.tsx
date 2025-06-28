import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-brand-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Telemedicine Platform</h3>
            <p className="mb-4">Providing quality healthcare services remotely to all Malawians.</p>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-4 w-4" />
              <span>+265 1 234 567</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-4 w-4" />
              <span>info@telemedicine.mw</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Lilongwe, Malawi</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/consultations" className="hover:underline">
                  Consultations
                </Link>
              </li>
              <li>
                <Link href="/prescriptions" className="hover:underline">
                  Prescriptions
                </Link>
              </li>
              <li>
                <Link href="/pharmacies" className="hover:underline">
                  Pharmacies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Partners</h3>
            <ul className="space-y-2">
              <li>Queen Elizabeth Central Hospital</li>
              <li>Kamuzu Central Hospital</li>
              <li>Mzuzu Health Centre</li>
              <li>Dwangwa Private Clinic</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Telemedicine Platform. All rights reserved.</p>
          <p className="mt-1">
            <span className="inline-flex items-center">
              <span className="mr-1">🔒</span> Data Encrypted - AES-256
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
