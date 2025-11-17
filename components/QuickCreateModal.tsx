"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Briefcase, GraduationCap, Plus, X } from "lucide-react"
import { useState } from "react"

interface QuickCreateModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: any) => void
  isLoading?: boolean
}

export function QuickCreateModal({ isOpen, onClose, onSubmit, isLoading = false }: QuickCreateModalProps) {
  const [activeTab, setActiveTab] = useState<"job" | "internship">("job")
  const [jobForm, setJobForm] = useState({
    title: "",
    company: "",
    description: "",
    type: "job" as "job" | "internship",
    eligibility: {
      qualifications: [] as string[],
      streams: [] as string[],
      passoutYears: [] as number[],
      minCGPA: 0
    },
    applicationDeadline: "",
    applicationLink: "",
    location: "remote" as "remote" | "onsite" | "hybrid",
    salary: "",
    stipend: "",
    isActive: true,
    skills: [] as string[],
    benefits: [] as string[],
  })

  const [internshipForm, setInternshipForm] = useState({
    title: "",
    company: "",
    description: "",
    type: "internship" as "job" | "internship",
    eligibility: {
      qualifications: [] as string[],
      streams: [] as string[],
      passoutYears: [] as number[],
      minCGPA: 0
    },
    applicationDeadline: "",
    applicationLink: "",
    location: "remote" as "remote" | "onsite" | "hybrid",
    stipend: "",
    isActive: true,
    skills: [] as string[],
    benefits: [] as string[],
    duration: "",
    startDate: "",
    isPartTime: false,
    isPaid: true,
    certificateProvided: true,
    mentorshipIncluded: true,
  })

  const [skillInput, setSkillInput] = useState("")
  const [benefitInput, setBenefitInput] = useState("")
  const [qualificationInput, setQualificationInput] = useState("")
  const [streamInput, setStreamInput] = useState("")
  const [passoutYearInput, setPassoutYearInput] = useState("")
  const [jobLogoFile, setJobLogoFile] = useState<File | null>(null)
  const [jobLogoPreview, setJobLogoPreview] = useState<string | null>(null)
  const [internshipLogoFile, setInternshipLogoFile] = useState<File | null>(null)
  const [internshipLogoPreview, setInternshipLogoPreview] = useState<string | null>(null)
  const [uploadingLogo, setUploadingLogo] = useState(false)

  const handleJobFormChange = (field: string, value: any) => {
    if (field.startsWith('eligibility.')) {
      const eligibilityField = field.split('.')[1]
      setJobForm(prev => ({
        ...prev,
        eligibility: { ...prev.eligibility, [eligibilityField]: value }
      }))
    } else {
    setJobForm(prev => ({ ...prev, [field]: value }))
    }
  }

  const handleInternshipFormChange = (field: string, value: any) => {
    if (field.startsWith('eligibility.')) {
      const eligibilityField = field.split('.')[1]
      setInternshipForm(prev => ({
        ...prev,
        eligibility: { ...prev.eligibility, [eligibilityField]: value }
      }))
    } else {
    setInternshipForm(prev => ({ ...prev, [field]: value }))
    }
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

  const addQualification = (formType: "job" | "internship") => {
    if (qualificationInput.trim()) {
      if (formType === "job") {
        setJobForm(prev => ({
          ...prev,
          eligibility: {
            ...prev.eligibility,
            qualifications: [...prev.eligibility.qualifications, qualificationInput.trim()]
          }
        }))
      } else {
        setInternshipForm(prev => ({
          ...prev,
          eligibility: {
            ...prev.eligibility,
            qualifications: [...prev.eligibility.qualifications, qualificationInput.trim()]
          }
        }))
      }
      setQualificationInput("")
    }
  }

  const removeQualification = (qualification: string, formType: "job" | "internship") => {
    if (formType === "job") {
      setJobForm(prev => ({
        ...prev,
        eligibility: {
          ...prev.eligibility,
          qualifications: prev.eligibility.qualifications.filter(q => q !== qualification)
        }
      }))
    } else {
      setInternshipForm(prev => ({
        ...prev,
        eligibility: {
          ...prev.eligibility,
          qualifications: prev.eligibility.qualifications.filter(q => q !== qualification)
        }
      }))
    }
  }

  const addStream = (formType: "job" | "internship") => {
    if (streamInput.trim()) {
      if (formType === "job") {
        setJobForm(prev => ({
          ...prev,
          eligibility: {
            ...prev.eligibility,
            streams: [...prev.eligibility.streams, streamInput.trim()]
          }
        }))
      } else {
        setInternshipForm(prev => ({
          ...prev,
          eligibility: {
            ...prev.eligibility,
            streams: [...prev.eligibility.streams, streamInput.trim()]
          }
        }))
      }
      setStreamInput("")
    }
  }

  const removeStream = (stream: string, formType: "job" | "internship") => {
    if (formType === "job") {
      setJobForm(prev => ({
        ...prev,
        eligibility: {
          ...prev.eligibility,
          streams: prev.eligibility.streams.filter(s => s !== stream)
        }
      }))
    } else {
      setInternshipForm(prev => ({
        ...prev,
        eligibility: {
          ...prev.eligibility,
          streams: prev.eligibility.streams.filter(s => s !== stream)
        }
      }))
    }
  }

  const addPassoutYear = (formType: "job" | "internship") => {
    if (passoutYearInput.trim()) {
      const year = parseInt(passoutYearInput.trim())
      if (!isNaN(year)) {
        if (formType === "job") {
          setJobForm(prev => ({
            ...prev,
            eligibility: {
              ...prev.eligibility,
              passoutYears: [...prev.eligibility.passoutYears, year]
            }
          }))
        } else {
          setInternshipForm(prev => ({
            ...prev,
            eligibility: {
              ...prev.eligibility,
              passoutYears: [...prev.eligibility.passoutYears, year]
            }
          }))
        }
        setPassoutYearInput("")
      }
    }
  }

  const removePassoutYear = (year: number, formType: "job" | "internship") => {
    if (formType === "job") {
      setJobForm(prev => ({
        ...prev,
        eligibility: {
          ...prev.eligibility,
          passoutYears: prev.eligibility.passoutYears.filter(y => y !== year)
        }
      }))
    } else {
      setInternshipForm(prev => ({
        ...prev,
        eligibility: {
          ...prev.eligibility,
          passoutYears: prev.eligibility.passoutYears.filter(y => y !== year)
        }
      }))
    }
  }

  const handleLogoUpload = async (file: File, formType: "job" | "internship") => {
    if (!file) return null;

    // Validate file type
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a PNG, JPEG, JPG, or WebP image');
      return null;
    }

    // Validate file size (2MB max)
    if (file.size > 2 * 1024 * 1024) {
      alert('File size must be less than 2MB');
      return null;
    }

    try {
      setUploadingLogo(true);
      const formData = new FormData();
      formData.append('logo', file);

      const response = await fetch('/api/upload/company-logo', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success && result.data?.url) {
        return result.data.url;
      } else {
        throw new Error(result.error?.message || 'Failed to upload logo');
      }
    } catch (error) {
      console.error('Error uploading logo:', error);
      alert('Failed to upload logo. Please try again.');
      return null;
    } finally {
      setUploadingLogo(false);
    }
  };

  const handleLogoFileChange = (e: React.ChangeEvent<HTMLInputElement>, formType: "job" | "internship") => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (formType === "job") {
      setJobLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setJobLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setInternshipLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setInternshipLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      let logoUrl: string | null = null;

      // Upload logo if provided
      if (activeTab === "job" && jobLogoFile) {
        logoUrl = await handleLogoUpload(jobLogoFile, "job");
      } else if (activeTab === "internship" && internshipLogoFile) {
        logoUrl = await handleLogoUpload(internshipLogoFile, "internship");
      }

      if (activeTab === "job") {
        onSubmit({ ...jobForm, companyLogoUrl: logoUrl || undefined })
      } else {
        onSubmit({ ...internshipForm, companyLogoUrl: logoUrl || undefined })
      }
      onClose()
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit. Please try again.');
    }
  }

  const loadTestData = () => {
    if (activeTab === "job") {
      setJobForm({
        title: "Frontend Developer",
        company: "TechCorp Solutions",
        description: "We are looking for a talented Frontend Developer to join our team. You will be responsible for building user interfaces and ensuring great user experience.",
        type: "job",
        eligibility: {
          qualifications: ["B.Tech", "M.Tech", "BCA", "MCA"],
          streams: ["CSE", "IT"],
          passoutYears: [2022, 2023, 2024],
          minCGPA: 7.0
        },
        applicationDeadline: "2025-12-31T23:59:59.000Z",
        applicationLink: "https://techcorp.com/careers/frontend-developer",
        location: "remote",
        salary: "₹8-15 LPA",
        stipend: "",
        isActive: true,
        skills: ["React", "JavaScript", "TypeScript", "CSS"],
        benefits: ["Health Insurance", "Flexible Hours", "Remote Work"],
      })
    } else {
      setInternshipForm({
        title: "Software Development Intern",
        company: "StartupXYZ",
        description: "Join our team as a Software Development Intern and gain hands-on experience in building modern web applications. You'll work on real projects and learn from experienced developers.",
        type: "internship",
        eligibility: {
          qualifications: ["B.Tech", "BCA", "MCA"],
          streams: ["CSE", "IT"],
          passoutYears: [2024, 2025, 2026],
          minCGPA: 6.5
        },
        applicationDeadline: "2025-11-30T23:59:59.000Z",
        applicationLink: "https://startupxyz.com/internships/software-dev",
        location: "hybrid",
        stipend: "₹15,000/month",
        duration: "3 months",
        startDate: "2025-12-01T00:00:00.000Z",
        isPartTime: false,
        isPaid: true,
        certificateProvided: true,
        mentorshipIncluded: true,
        isActive: true,
        skills: ["JavaScript", "React", "Node.js", "Git"],
        benefits: ["Mentorship", "Certificate", "Stipend", "Flexible Hours"],
      })
    }
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
                      <Label htmlFor="job-logo">Company Logo (Optional)</Label>
                      <div className="flex items-center gap-4">
                        <Input
                          id="job-logo"
                          type="file"
                          accept="image/png,image/jpeg,image/jpg,image/webp"
                          onChange={(e) => handleLogoFileChange(e, "job")}
                          className="flex-1"
                        />
                        {jobLogoPreview && (
                          <div className="relative">
                            <img
                              src={jobLogoPreview}
                              alt="Logo preview"
                              className="w-16 h-16 object-contain rounded border border-gray-300"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setJobLogoFile(null);
                                setJobLogoPreview(null);
                                const input = document.getElementById('job-logo') as HTMLInputElement;
                                if (input) input.value = '';
                              }}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                            >
                              ×
                            </button>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPEG, JPG, or WebP (max 2MB)</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="job-location">Location Type *</Label>
                      <Select value={jobForm.location} onValueChange={(value) => handleJobFormChange("location", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="remote">Remote</SelectItem>
                          <SelectItem value="onsite">On-site</SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="job-application-deadline">Application Deadline *</Label>
                      <Input
                        id="job-application-deadline"
                        type="date"
                        value={jobForm.applicationDeadline}
                        onChange={(e) => handleJobFormChange("applicationDeadline", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="job-application-link">Application Link *</Label>
                      <Input
                        id="job-application-link"
                        placeholder="https://company.com/apply"
                        value={jobForm.applicationLink}
                        onChange={(e) => handleJobFormChange("applicationLink", e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Compensation</CardTitle>
                    <CardDescription>Salary and compensation details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                        id="job-active"
                        checked={jobForm.isActive}
                        onCheckedChange={(checked) => handleJobFormChange("isActive", checked)}
                      />
                      <Label htmlFor="job-active">Active job posting</Label>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Eligibility - Qualifications</CardTitle>
                    <CardDescription>Required qualifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="e.g., B.Tech, M.Tech"
                        value={qualificationInput}
                        onChange={(e) => setQualificationInput(e.target.value)}
                        onKeyPress={(e: React.KeyboardEvent) => e.key === "Enter" && (e.preventDefault(), addQualification("job"))}
                      />
                      <Button onClick={() => addQualification("job")} size="sm">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {jobForm.eligibility.qualifications.map((qualification, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {qualification}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => removeQualification(qualification, "job")}
                          />
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Eligibility - Streams</CardTitle>
                    <CardDescription>Required academic streams</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="e.g., CSE, IT, ECE"
                        value={streamInput}
                        onChange={(e) => setStreamInput(e.target.value)}
                        onKeyPress={(e: React.KeyboardEvent) => e.key === "Enter" && (e.preventDefault(), addStream("job"))}
                      />
                      <Button onClick={() => addStream("job")} size="sm">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {jobForm.eligibility.streams.map((stream, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {stream}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => removeStream(stream, "job")}
                          />
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Eligibility - Passout Years</CardTitle>
                    <CardDescription>Eligible graduation years</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="e.g., 2023, 2024"
                        value={passoutYearInput}
                        onChange={(e) => setPassoutYearInput(e.target.value)}
                        onKeyPress={(e: React.KeyboardEvent) => e.key === "Enter" && (e.preventDefault(), addPassoutYear("job"))}
                      />
                      <Button onClick={() => addPassoutYear("job")} size="sm">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {jobForm.eligibility.passoutYears.map((year, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {year}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => removePassoutYear(year, "job")}
                          />
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="job-min-cgpa">Minimum CGPA</Label>
                      <Input
                        id="job-min-cgpa"
                        type="number"
                        step="0.1"
                        min="0"
                        max="10"
                        placeholder="e.g., 7.5"
                        value={jobForm.eligibility.minCGPA || ""}
                        onChange={(e) => handleJobFormChange("eligibility.minCGPA", parseFloat(e.target.value) || 0)}
                      />
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
                      <Label htmlFor="internship-logo">Company Logo (Optional)</Label>
                      <div className="flex items-center gap-4">
                        <Input
                          id="internship-logo"
                          type="file"
                          accept="image/png,image/jpeg,image/jpg,image/webp"
                          onChange={(e) => handleLogoFileChange(e, "internship")}
                          className="flex-1"
                        />
                        {internshipLogoPreview && (
                          <div className="relative">
                            <img
                              src={internshipLogoPreview}
                              alt="Logo preview"
                              className="w-16 h-16 object-contain rounded border border-gray-300"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setInternshipLogoFile(null);
                                setInternshipLogoPreview(null);
                                const input = document.getElementById('internship-logo') as HTMLInputElement;
                                if (input) input.value = '';
                              }}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                            >
                              ×
                            </button>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPEG, JPG, or WebP (max 2MB)</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="internship-location">Location Type *</Label>
                      <Select value={internshipForm.location} onValueChange={(value) => handleInternshipFormChange("location", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="remote">Remote</SelectItem>
                          <SelectItem value="onsite">On-site</SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                        </SelectContent>
                      </Select>
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

                    <div className="space-y-2">
                      <Label htmlFor="internship-application-deadline">Application Deadline *</Label>
                      <Input
                        id="internship-application-deadline"
                        type="date"
                        value={internshipForm.applicationDeadline}
                        onChange={(e) => handleInternshipFormChange("applicationDeadline", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="internship-application-link">Application Link *</Label>
                      <Input
                        id="internship-application-link"
                        placeholder="https://company.com/apply"
                        value={internshipForm.applicationLink}
                        onChange={(e) => handleInternshipFormChange("applicationLink", e.target.value)}
                      />
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

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="internship-part-time"
                        checked={internshipForm.isPartTime}
                        onCheckedChange={(checked) => handleInternshipFormChange("isPartTime", checked)}
                      />
                      <Label htmlFor="internship-part-time">Part-time</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="internship-paid"
                        checked={internshipForm.isPaid}
                        onCheckedChange={(checked) => handleInternshipFormChange("isPaid", checked)}
                      />
                      <Label htmlFor="internship-paid">Paid internship</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="internship-certificate"
                        checked={internshipForm.certificateProvided}
                        onCheckedChange={(checked) => handleInternshipFormChange("certificateProvided", checked)}
                      />
                      <Label htmlFor="internship-certificate">Certificate provided</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="internship-mentorship"
                        checked={internshipForm.mentorshipIncluded}
                        onCheckedChange={(checked) => handleInternshipFormChange("mentorshipIncluded", checked)}
                      />
                      <Label htmlFor="internship-mentorship">Mentorship included</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="internship-active"
                        checked={internshipForm.isActive}
                        onCheckedChange={(checked) => handleInternshipFormChange("isActive", checked)}
                      />
                      <Label htmlFor="internship-active">Active internship posting</Label>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Eligibility - Qualifications</CardTitle>
                    <CardDescription>Required qualifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="e.g., B.Tech, M.Tech"
                        value={qualificationInput}
                        onChange={(e) => setQualificationInput(e.target.value)}
                        onKeyPress={(e: React.KeyboardEvent) => e.key === "Enter" && (e.preventDefault(), addQualification("internship"))}
                      />
                      <Button onClick={() => addQualification("internship")} size="sm">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {internshipForm.eligibility.qualifications.map((qualification, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {qualification}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => removeQualification(qualification, "internship")}
                          />
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Eligibility - Streams</CardTitle>
                    <CardDescription>Required academic streams</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="e.g., CSE, IT, ECE"
                        value={streamInput}
                        onChange={(e) => setStreamInput(e.target.value)}
                        onKeyPress={(e: React.KeyboardEvent) => e.key === "Enter" && (e.preventDefault(), addStream("internship"))}
                      />
                      <Button onClick={() => addStream("internship")} size="sm">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {internshipForm.eligibility.streams.map((stream, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {stream}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => removeStream(stream, "internship")}
                          />
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Eligibility - Passout Years</CardTitle>
                    <CardDescription>Eligible graduation years</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="e.g., 2023, 2024"
                        value={passoutYearInput}
                        onChange={(e) => setPassoutYearInput(e.target.value)}
                        onKeyPress={(e: React.KeyboardEvent) => e.key === "Enter" && (e.preventDefault(), addPassoutYear("internship"))}
                      />
                      <Button onClick={() => addPassoutYear("internship")} size="sm">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {internshipForm.eligibility.passoutYears.map((year, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {year}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => removePassoutYear(year, "internship")}
                          />
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="internship-min-cgpa">Minimum CGPA</Label>
                      <Input
                        id="internship-min-cgpa"
                        type="number"
                        step="0.1"
                        min="0"
                        max="10"
                        placeholder="e.g., 7.5"
                        value={internshipForm.eligibility.minCGPA || ""}
                        onChange={(e) => handleInternshipFormChange("eligibility.minCGPA", parseFloat(e.target.value) || 0)}
                      />
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
            <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
              <Button 
                variant="secondary" 
                onClick={loadTestData}
                className="bg-blue-100 hover:bg-blue-200 text-blue-700 border-blue-300"
              >
                Load Test Data
              </Button>
            </div>
            <Button 
              onClick={handleSubmit}
              disabled={isLoading || uploadingLogo}
              className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)]"
            >
              {uploadingLogo ? 'Uploading Logo...' : isLoading ? 'Creating...' : `Create ${activeTab === "job" ? "Job" : "Internship"}`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 