"use client"

import { useState } from "react"
import { Check, ChevronsUpDown, User, UserCog, Stethoscope, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const roles = [
  {
    value: "patient",
    label: "Patient",
    description: "Chikondi Banda",
    icon: User,
  },
  {
    value: "doctor",
    label: "Doctor",
    description: "Dr. Zione Phiri",
    icon: Stethoscope,
  },
  {
    value: "admin",
    label: "Admin",
    description: "Mercy Kachingwe",
    icon: UserCog,
  },
  {
    value: "pharmacist",
    label: "Pharmacist",
    description: "Chemist Mwale",
    icon: Building2,
  },
]

export function RoleSwitcher() {
  const [open, setOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState(roles[0])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
          <div className="flex items-center gap-2">
            <selectedRole.icon className="h-4 w-4" />
            <div className="flex flex-col items-start">
              <span>{selectedRole.label}</span>
              <span className="text-xs text-muted-foreground">{selectedRole.description}</span>
            </div>
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search role..." />
          <CommandList>
            <CommandEmpty>No role found.</CommandEmpty>
            <CommandGroup>
              {roles.map((role) => (
                <CommandItem
                  key={role.value}
                  value={role.value}
                  onSelect={() => {
                    setSelectedRole(role)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn("mr-2 h-4 w-4", selectedRole.value === role.value ? "opacity-100" : "opacity-0")}
                  />
                  <div className="flex items-center gap-2">
                    <role.icon className="h-4 w-4" />
                    <div className="flex flex-col items-start">
                      <span>{role.label}</span>
                      <span className="text-xs text-muted-foreground">{role.description}</span>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
