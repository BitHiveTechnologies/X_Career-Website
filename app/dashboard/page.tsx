"use client"

import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { FlexibleDataTable } from "@/components/flexible-data-table"
import { QuickCreateModal } from "@/components/QuickCreateModal"
import { SectionCards } from "@/components/section-cards"
import { SharedLayout } from "@/components/shared-layout"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, CreditCard, GraduationCap, Plus, Users } from "lucide-react"
import { useState } from "react"

import customersData from "./customers-data.json"
import data from "./data.json"
import internshipsData from "./internships-data.json"
import jobsData from "./jobs-data.json"
import paymentsData from "./payments-data.json"

export default function Page() {
  const [isQuickCreateOpen, setIsQuickCreateOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("customers")

  const handleQuickCreate = (formData: any) => {
    
    // Here you would typically send the data to your backend
    // For now, we'll just log it to the console
    alert(`${formData.title ? 'Job' : 'Internship'} created successfully!`)
  }

  const getTableData = () => {
    switch (activeTab) {
      case "customers":
        return customersData
      case "jobs":
        return jobsData
      case "internships":
        return internshipsData
      case "payments":
        return paymentsData
      default:
        return data
    }
  }

  const getTableColumns = () => {
    switch (activeTab) {
      case "customers":
        return [
          { key: "name", label: "Name" },
          { key: "email", label: "Email" },
          { key: "status", label: "Status" },
          { key: "joinDate", label: "Join Date" },
          { key: "lastActive", label: "Last Active" },
          { key: "applications", label: "Applications" },
          { key: "profile", label: "Profile" }
        ]
      case "jobs":
        return [
          { key: "title", label: "Job Title" },
          { key: "company", label: "Company" },
          { key: "status", label: "Status" },
          { key: "applications", label: "Applications" },
          { key: "postedDate", label: "Posted Date" },
          { key: "expiryDate", label: "Expiry Date" },
          { key: "salary", label: "Salary" },
          { key: "location", label: "Location" }
        ]
      case "internships":
        return [
          { key: "title", label: "Internship Title" },
          { key: "company", label: "Company" },
          { key: "status", label: "Status" },
          { key: "applications", label: "Applications" },
          { key: "postedDate", label: "Posted Date" },
          { key: "expiryDate", label: "Expiry Date" },
          { key: "stipend", label: "Stipend" },
          { key: "duration", label: "Duration" },
          { key: "location", label: "Location" }
        ]
      case "payments":
        return [
          { key: "transactionId", label: "Transaction ID" },
          { key: "customer", label: "Customer" },
          { key: "amount", label: "Amount" },
          { key: "status", label: "Status" },
          { key: "date", label: "Date" },
          { key: "type", label: "Type" },
          { key: "paymentMethod", label: "Payment Method" }
        ]
      default:
        return [
          { key: "header", label: "Header" },
          { key: "type", label: "Section Type" },
          { key: "status", label: "Status" },
          { key: "target", label: "Target" },
          { key: "limit", label: "Limit" },
          { key: "reviewer", label: "Reviewer" }
        ]
    }
  }

  return (
    <SharedLayout>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        {/* Quick Create Button */}
        <div className="px-4 lg:px-6">
          <div className="flex justify-between items-center mb-6">
            <div>
            </div>
            <Button 
              onClick={() => setIsQuickCreateOpen(true)}
              className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)]"
            >
              <Plus className="h-4 w-4 mr-2" />
              Quick Create
            </Button>
          </div>
        </div>
        
        <SectionCards />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
        
        {/* Tabbed Data Tables */}
        <div className="px-4 lg:px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="customers" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Customers
              </TabsTrigger>
              <TabsTrigger value="jobs" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Jobs
              </TabsTrigger>
              <TabsTrigger value="internships" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Internships
              </TabsTrigger>
              <TabsTrigger value="payments" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Payments
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="customers" className="mt-6">
              <FlexibleDataTable data={getTableData()} columns={getTableColumns()} />
            </TabsContent>
            
            <TabsContent value="jobs" className="mt-6">
              <FlexibleDataTable data={getTableData()} columns={getTableColumns()} />
            </TabsContent>
            
            <TabsContent value="internships" className="mt-6">
              <FlexibleDataTable data={getTableData()} columns={getTableColumns()} />
            </TabsContent>
            
            <TabsContent value="payments" className="mt-6">
              <FlexibleDataTable data={getTableData()} columns={getTableColumns()} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <QuickCreateModal
        isOpen={isQuickCreateOpen}
        onClose={() => setIsQuickCreateOpen(false)}
        onSubmit={handleQuickCreate}
      />
    </SharedLayout>
  )
}
