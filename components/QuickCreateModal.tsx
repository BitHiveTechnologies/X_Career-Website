"use client"

import { useState } from "react"
import { X, Plus, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface QuickCreateModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: any) => void
}

export function QuickCreateModal({ isOpen, onClose, onSubmit }: QuickCreateModalProps) {
  const [activeTab, setActiveTab] = useState<"job" | "internship">("job")
  const [jobForm, setJobForm] = useState({
    title: "",
    company: "",
    location: "",
    experienceRequired: "",
    jobType: "",
    employmentType: "",
    skills: [] as string[],
    salary: "",
    description: "",
    isRemote: false,
    isFeatured: false,
    isUrgent: false,
    benefits: [] as string[],
    industry: "",
    companySize: "",
    companyType: "",
  })

  const [internshipForm, setInternshipForm] = useState({
    title: "",
    company: "",
    location: "",
    duration: "",
    stipend: "",
    jobType: "Internship",
    employmentType: "Temporary",
    skills: [] as string[],
    description: "",
    isRemote: false,
    isFeatured: false,
    isUrgent: false,
    benefits: [] as string[],
    industry: "",
    companySize: "",
    companyType: "",
    startDate: "",
    applicationDeadline: "",
    isPartTime: false,
    isPaid: true,
    certificateProvided: true,
    mentorshipIncluded: true,
  })

  const [skillInput, setSkillInput] = useState("")
  const [benefitInput, setBenefitInput] = useState("")

  const handleJobFormChange = (field: string, value: any) => {
    setJobForm(prev => ({ ...prev, [field]: value }))
  }

  const handleInternshipFormChange = (field: string, value: any) => {
    setInternshipForm(prev => ({ ...prev, [field]: value }))
  }

  const addSkill = (formType: "job" | "internship") => {
    if (skillInput.trim()) {
      if (formType === "job") {
        setJobForm(prev => ({
          ...prev,
          skills: [...prev.skills, skillInput.trim()]
        }))
      } else {
        setInternshipForm(prev => ({
          ...prev,
          skills: [...prev.skills, skillInput.trim()]
        }))
      }
      setSkillInput("")
    }
  }

  const removeSkill = (skill: string, formType: "job" | "internship") => {
    if (formType === "job") {
      setJobForm(prev => ({
        ...prev,
        skills: prev.skills.filter(s => s !== skill)
      }))
    } else {
      setInternshipForm(prev => ({
        ...prev,
        skills: prev.skills.filter(s => s !== skill)
      }))
    }
  }

  const addBenefit = (formType: "job" | "internship") => {
    if (benefitInput.trim()) {
      if (formType === "job") {
        setJobForm(prev => ({
          ...prev,
          benefits: [...prev.benefits, benefitInput.trim()]
        }))
      } else {
        setInternshipForm(prev => ({
          ...prev,
          benefits: [...prev.benefits, benefitInput.trim()]
        }))
      }
      setBenefitInput("")
    }
  }

  const removeBenefit = (benefit: string, formType: "job" | "internship") => {
    if (formType === "job") {
      setJobForm(prev => ({
        ...prev,
        benefits: prev.benefits.filter(b => b !== benefit)
      }))
    } else {
      setInternshipForm(prev => ({
        ...prev,
        benefits: prev.benefits.filter(b => b !== benefit)
      }))
    }
  }

  const handleSubmit = () => {
    if (activeTab === "job") {
      onSubmit(jobForm)
    } else {
      onSubmit(internshipForm)
    }
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] p-2 rounded-lg">
                <Plus className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Quick Create</h2>
                <p className="text-gray-600">Create a new job or internship posting</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="p-6">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "job" | "internship")}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="job" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Job Posting
              </TabsTrigger>
              <TabsTrigger value="internship" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Internship
              </TabsTrigger>
            </TabsList>

            <TabsContent value="job" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Essential job details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="job-title">Job Title *</Label>
                      <Input
                        id="job-title"
                        placeholder="e.g., Frontend Developer"
                        value={jobForm.title}
                        onChange={(e) => handleJobFormChange("title", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="job-company">Company *</Label>
                      <Input
                        id="job-company"
                        placeholder="e.g., Swiggy"
                        value={jobForm.company}
                        onChange={(e) => handleJobFormChange("company", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="job-location">Location *</Label>
                      <Input
                        id="job-location"
                        placeholder="e.g., Bangalore, India"
                        value={jobForm.location}
                        onChange={(e) => handleJobFormChange("location", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="job-experience">Experience Required *</Label>
                      <Select value={jobForm.experienceRequired} onValueChange={(value) => handleJobFormChange("experienceRequired", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-2 years">0-2 years</SelectItem>
                          <SelectItem value="1-3 years">1-3 years</SelectItem>
                          <SelectItem value="2-4 years">2-4 years</SelectItem>
                          <SelectItem value="3-5 years">3-5 years</SelectItem>
                          <SelectItem value="5+ years">5+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Job Type & Employment</CardTitle>
                    <CardDescription>Employment details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="job-type">Job Type *</Label>
                      <Select value={jobForm.jobType} onValueChange={(value) => handleJobFormChange("jobType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select job type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Full-time">Full-time</SelectItem>
                          <SelectItem value="Part-time">Part-time</SelectItem>
                          <SelectItem value="Contract">Contract</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="job-employment-type">Employment Type *</Label>
                      <Select value={jobForm.employmentType} onValueChange={(value) => handleJobFormChange("employmentType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select employment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Permanent">Permanent</SelectItem>
                          <SelectItem value="Contract">Contract</SelectItem>
                          <SelectItem value="Temporary">Temporary</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="job-salary">Salary Range</Label>
                      <Input
                        id="job-salary"
                        placeholder="e.g., ₹6-10 LPA"
                        value={jobForm.salary}
                        onChange={(e) => handleJobFormChange("salary", e.target.value)}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="job-remote"
                        checked={jobForm.isRemote}
                        onCheckedChange={(checked) => handleJobFormChange("isRemote", checked)}
                      />
                      <Label htmlFor="job-remote">Remote position</Label>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Required Skills</CardTitle>
                    <CardDescription>Add skills required for this position</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a skill"
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        onKeyPress={(e: React.KeyboardEvent) => e.key === "Enter" && (e.preventDefault(), addSkill("job"))}
                      />
                      <Button onClick={() => addSkill("job")} size="sm">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {jobForm.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {skill}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => removeSkill(skill, "job")}
                          />
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Benefits</CardTitle>
                    <CardDescription>Add benefits offered</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a benefit"
                        value={benefitInput}
                        onChange={(e) => setBenefitInput(e.target.value)}
                        onKeyPress={(e: React.KeyboardEvent) => e.key === "Enter" && (e.preventDefault(), addBenefit("job"))}
                      />
                      <Button onClick={() => addBenefit("job")} size="sm">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {jobForm.benefits.map((benefit, index) => (
                        <Badge key={index} variant="outline" className="flex items-center gap-1">
                          {benefit}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => removeBenefit(benefit, "job")}
                          />
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Job Description</CardTitle>
                    <CardDescription>Detailed job description</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea
                      placeholder="Describe the role, responsibilities, and requirements..."
                      value={jobForm.description}
                      onChange={(e) => handleJobFormChange("description", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="internship" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Essential internship details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="internship-title">Internship Title *</Label>
                      <Input
                        id="internship-title"
                        placeholder="e.g., Frontend Development Intern"
                        value={internshipForm.title}
                        onChange={(e) => handleInternshipFormChange("title", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="internship-company">Company *</Label>
                      <Input
                        id="internship-company"
                        placeholder="e.g., Swiggy"
                        value={internshipForm.company}
                        onChange={(e) => handleInternshipFormChange("company", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="internship-location">Location *</Label>
                      <Input
                        id="internship-location"
                        placeholder="e.g., Bangalore, India"
                        value={internshipForm.location}
                        onChange={(e) => handleInternshipFormChange("location", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="internship-duration">Duration *</Label>
                      <Select value={internshipForm.duration} onValueChange={(value) => handleInternshipFormChange("duration", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1 month">1 month</SelectItem>
                          <SelectItem value="2 months">2 months</SelectItem>
                          <SelectItem value="3 months">3 months</SelectItem>
                          <SelectItem value="4 months">4 months</SelectItem>
                          <SelectItem value="5 months">5 months</SelectItem>
                          <SelectItem value="6 months">6 months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Internship Details</CardTitle>
                    <CardDescription>Compensation and timing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="internship-stipend">Stipend</Label>
                      <Input
                        id="internship-stipend"
                        placeholder="e.g., ₹25,000/month"
                        value={internshipForm.stipend}
                        onChange={(e) => handleInternshipFormChange("stipend", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="internship-start-date">Start Date</Label>
                      <Input
                        id="internship-start-date"
                        type="date"
                        value={internshipForm.startDate}
                        onChange={(e) => handleInternshipFormChange("startDate", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="internship-deadline">Application Deadline</Label>
                      <Input
                        id="internship-deadline"
                        type="date"
                        value={internshipForm.applicationDeadline}
                        onChange={(e) => handleInternshipFormChange("applicationDeadline", e.target.value)}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="internship-remote"
                        checked={internshipForm.isRemote}
                        onCheckedChange={(checked) => handleInternshipFormChange("isRemote", checked)}
                      />
                      <Label htmlFor="internship-remote">Remote internship</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="internship-part-time"
                        checked={internshipForm.isPartTime}
                        onCheckedChange={(checked) => handleInternshipFormChange("isPartTime", checked)}
                      />
                      <Label htmlFor="internship-part-time">Part-time</Label>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Required Skills</CardTitle>
                    <CardDescription>Add skills required for this internship</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a skill"
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        onKeyPress={(e: React.KeyboardEvent) => e.key === "Enter" && (e.preventDefault(), addSkill("internship"))}
                      />
                      <Button onClick={() => addSkill("internship")} size="sm">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {internshipForm.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {skill}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => removeSkill(skill, "internship")}
                          />
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Benefits</CardTitle>
                    <CardDescription>Add benefits offered</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a benefit"
                        value={benefitInput}
                        onChange={(e) => setBenefitInput(e.target.value)}
                        onKeyPress={(e: React.KeyboardEvent) => e.key === "Enter" && (e.preventDefault(), addBenefit("internship"))}
                      />
                      <Button onClick={() => addBenefit("internship")} size="sm">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {internshipForm.benefits.map((benefit, index) => (
                        <Badge key={index} variant="outline" className="flex items-center gap-1">
                          {benefit}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => removeBenefit(benefit, "internship")}
                          />
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Internship Description</CardTitle>
                    <CardDescription>Detailed internship description</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea
                      placeholder="Describe the internship role, learning opportunities, and requirements..."
                      value={internshipForm.description}
                      onChange={(e) => handleInternshipFormChange("description", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit}
              className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)]"
            >
              Create {activeTab === "job" ? "Job" : "Internship"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 