"use client";

import MainNavbar from "@/components/mainNavbar";
import { useState, useEffect } from "react";
import JobCard from "@/components/JobCard";
import FiltersSidebar from "@/components/FiltersSidebar";
import CategoryMenu from "@/components/CategoryMenu";
import { mockInternships, type Internship } from "@/lib/mockData";

// TypeScript Interfaces for Internships
export interface InternshipFilterOptions {
  jobType: string;
  employmentType: string;
  skills: string;
  location: string;
  duration: string;
  stipendRange: string;
  companyType: string;
  isPaid: string;
}

export interface Category {
  id: number;
  name: string;
  count: number;
  slug: string;
}

// Categories for Internships
const mockCategories: Category[] = [
  { id: 1, name: "All Internships", count: 8247, slug: "all" },
  {
    id: 2,
    name: "Software Development",
    count: 2821,
    slug: "software-development",
  },
  { id: 3, name: "Data Science & AI", count: 1456, slug: "data-science" },
  { id: 4, name: "UI/UX Design", count: 876, slug: "ui-ux-design" },
  { id: 5, name: "Digital Marketing", count: 1234, slug: "digital-marketing" },
  { id: 6, name: "Content Writing", count: 987, slug: "content-writing" },
  { id: 7, name: "Mobile Development", count: 743, slug: "mobile-development" },
  { id: 8, name: "DevOps & Cloud", count: 456, slug: "devops" },
  { id: 9, name: "Product Management", count: 378, slug: "product-management" },
  { id: 10, name: "Business Analysis", count: 645, slug: "business-analysis" },
  { id: 11, name: "Quality Assurance", count: 534, slug: "quality-assurance" },
  { id: 12, name: "Human Resources", count: 423, slug: "human-resources" },
];

export default function InternshipsPage() {
  const [internships, setInternships] = useState<Internship[]>(mockInternships);
  const [filteredInternships, setFilteredInternships] =
    useState<Internship[]>(mockInternships);
  const [categories] = useState<Category[]>(mockCategories);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filters, setFilters] = useState<InternshipFilterOptions>({
    jobType: "",
    employmentType: "",
    skills: "",
    location: "",
    duration: "",
    stipendRange: "",
    companyType: "",
    isPaid: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [sortBy, setSortBy] = useState("relevance");
  const [visibleInternships, setVisibleInternships] = useState(6);

  // Enhanced filter logic for internships
  useEffect(() => {
    let filtered = internships;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (internship) =>
          internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          internship.company
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          internship.skills.some((skill) =>
            skill.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      );
    }

    // Filter by search location
    if (searchLocation) {
      filtered = filtered.filter((internship) =>
        internship.location
          .toLowerCase()
          .includes(searchLocation.toLowerCase()),
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      const categoryMap: { [key: string]: string[] } = {
        "software-development": [
          "Frontend Development Intern",
          "Backend Development Intern",
          "Mobile App Development Intern",
        ],

        "data-science": ["Data Science Intern", "AI/ML Research Intern"],
        "ui-ux-design": ["UI/UX Design Intern"],
        "digital-marketing": ["Digital Marketing Intern"],
        "content-writing": ["Content Writing Intern"],
        "mobile-development": ["Mobile App Development Intern"],
        devops: ["DevOps Intern"],
        "product-management": ["Product Management Intern"],
        "business-analysis": ["Business Analyst Intern"],
        "quality-assurance": ["Quality Assurance Intern"],
        "human-resources": ["HR Intern"],
      };
      filtered = filtered.filter(
        (internship) =>
          categoryMap[selectedCategory]?.includes(internship.title) ||
          internship.industry
            ?.toLowerCase()
            .includes(selectedCategory.replace("-", " ")),
      );
    }

    // Apply other filters
    if (filters.duration) {
      filtered = filtered.filter(
        (internship) => internship.duration === filters.duration,
      );
    }

    if (filters.skills) {
      const skillsArray = filters.skills
        .toLowerCase()
        .split(",")
        .map((s) => s.trim());
      filtered = filtered.filter((internship) =>
        skillsArray.some((skill) =>
          internship.skills.some((internshipSkill) =>
            internshipSkill.toLowerCase().includes(skill),
          ),
        ),
      );
    }

    if (filters.location) {
      filtered = filtered.filter((internship) =>
        internship.location
          .toLowerCase()
          .includes(filters.location.toLowerCase()),
      );
    }

    if (filters.stipendRange) {
      filtered = filtered.filter((internship) => {
        if (!internship.stipend) return false;
        const stipendNum = parseInt(internship.stipend.replace(/[^0-9]/g, ""));
        switch (filters.stipendRange) {
          case "0-15":
            return stipendNum <= 15000;
          case "15-25":
            return stipendNum >= 15000 && stipendNum <= 25000;
          case "25-35":
            return stipendNum >= 25000 && stipendNum <= 35000;
          case "35+":
            return stipendNum >= 35000;
          default:
            return true;
        }
      });
    }

    if (filters.companyType) {
      filtered = filtered.filter(
        (internship) => internship.companyType === filters.companyType,
      );
    }

    if (filters.isPaid) {
      filtered = filtered.filter((internship) =>
        filters.isPaid === "paid" ? internship.isPaid : !internship.isPaid,
      );
    }

    // Sort filtered results
    switch (sortBy) {
      case "date":
        filtered.sort(
          (a, b) =>
            new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime(),
        );
        break;
      case "stipend":
        filtered.sort((a, b) => {
          const stipendA = a.stipend
            ? parseInt(a.stipend.replace(/[^0-9]/g, ""))
            : 0;
          const stipendB = b.stipend
            ? parseInt(b.stipend.replace(/[^0-9]/g, ""))
            : 0;
          return stipendB - stipendA;
        });
        break;
      case "duration":
        filtered.sort((a, b) => {
          const durationA = parseInt(a.duration.replace(/[^0-9]/g, ""));
          const durationB = parseInt(b.duration.replace(/[^0-9]/g, ""));
          return durationB - durationA;
        });
        break;
      case "company":
        filtered.sort((a, b) => a.company.localeCompare(b.company));
        break;
      default: // relevance
        filtered.sort((a, b) => {
          const scoreA =
            (a.isFeatured ? 10 : 0) +
            (a.isUrgent ? 5 : 0) +
            (a.applicantCount || 0) / 100;
          const scoreB =
            (b.isFeatured ? 10 : 0) +
            (b.isUrgent ? 5 : 0) +
            (b.applicantCount || 0) / 100;
          return scoreB - scoreA;
        });
    }

    setFilteredInternships(filtered);
  }, [
    internships,
    selectedCategory,
    filters,
    searchQuery,
    searchLocation,
    sortBy,
  ]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
  };

  const resetFilters = () => {
    setFilters({
      jobType: "",
      employmentType: "",
      skills: "",
      location: "",
      duration: "",
      stipendRange: "",
      companyType: "",
      isPaid: "",
    });
    setSelectedCategory("all");
    setSearchQuery("");
    setSearchLocation("");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by useEffect
  };

  const loadMoreInternships = () => {
    setVisibleInternships((prev) => prev + 6);
  };

  // Convert internship to job format for JobCard component
  const convertInternshipToJob = (internship: Internship) => ({
    ...internship,
    experienceRequired: "Fresher",
    salary: internship.stipend,
  });

  return (
    <div
      className="min-h-screen bg-white text-gray-800 font-sans"
      data-oid="70kbucj"
    >
      {/* Navbar */}
      <MainNavbar data-oid="k5qnfet" />

      {/* Enhanced Hero Section with Search */}
      <section
        className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white relative overflow-hidden py-20"
        data-oid="z-whinz"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden" data-oid="nzxbmj1">
          <div
            className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob"
            data-oid="upfcx6q"
          ></div>
          <div
            className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-2000"
            data-oid="ohsjkfx"
          ></div>
          <div
            className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-4000"
            data-oid="ehfie81"
          ></div>
        </div>

        {/* Frosted glass overlay */}
        <div
          className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"
          data-oid="v.tiwy:"
        ></div>

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          data-oid="ti2svp_"
        >
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-md"
            data-oid="nbzepoz"
          >
            Find Your Dream Internship
          </h1>
          <p
            className="text-xl md:text-2xl mb-2 text-blue-100"
            data-oid="gil78ge"
          >
            Launch Your Career Journey
          </p>
          <p
            className="text-lg text-blue-200 max-w-2xl mx-auto mb-8"
            data-oid="vxu23lr"
          >
            Discover thousands of internship opportunities from top Indian
            companies
          </p>

          {/* Advanced Search Bar */}
          <form
            onSubmit={handleSearch}
            className="max-w-4xl mx-auto"
            data-oid="chiehvm"
          >
            <div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              data-oid="d_dpr3w"
            >
              <div className="grid md:grid-cols-3 gap-4" data-oid="_t9-:x1">
                {/* Internship Title Search */}
                <div className="relative" data-oid="ug267p.">
                  <div
                    className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    data-oid="impj:xy"
                  >
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="zmz.18f"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        data-oid="r6ak:2p"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Internship title, skills, or company"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                    data-oid=":06vijz"
                  />
                </div>

                {/* Location Search */}
                <div className="relative" data-oid="mhq9y7c">
                  <div
                    className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    data-oid="tn0q1ak"
                  >
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="hm4u4iw"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        data-oid="f.pe.1b"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        data-oid="39tk4z_"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Location or Remote"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                    data-oid="cdi57ie"
                  />
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="px-8 py-3 bg-white text-[hsl(196,80%,45%)] rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                  data-oid="n:z:l.m"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="_mho2d4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      data-oid="2koksh0"
                    />
                  </svg>
                  Search Internships
                </button>
              </div>

              {/* Quick Search Tags */}
              <div
                className="flex flex-wrap gap-2 mt-4 justify-center"
                data-oid="b--ge0o"
              >
                {[
                  "Frontend Intern",
                  "Data Science Intern",
                  "UI/UX Intern",
                  "Marketing Intern",
                  "Content Writing",
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full hover:bg-white/30 transition-all duration-300"
                    data-oid="kq8lezy"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Category Menu */}
      <section
        className="bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)] py-8"
        data-oid="ys9kbgr"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="tup7hp4"
        >
          <CategoryMenu
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            data-oid="hh-s-pk"
          />

          {/* Internships Count Badge */}
          <div className="text-center mt-6" data-oid="yel9tqu">
            <div
              className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-[hsl(210,30%,95%)]"
              data-oid="r1orn:w"
            >
              <svg
                className="h-5 w-5 text-[hsl(196,80%,45%)] mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-oid="vvnccsv"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  data-oid="d_rq-gc"
                />
              </svg>
              <span
                className="text-lg font-bold text-gray-800"
                data-oid="h3uqwfx"
              >
                {filteredInternships.length.toLocaleString()}+ INTERNSHIPS FOUND
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section
        className="py-12 bg-gradient-to-b from-[hsl(196,60%,95%)] to-white"
        data-oid="4gn0u0:"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="92tr10:"
        >
          <div className="grid lg:grid-cols-4 gap-8" data-oid="61vtquc">
            {/* Filters Sidebar */}
            <div
              className="lg:col-span-1 order-2 lg:order-1"
              data-oid="lwbzkjo"
            >
              <FiltersSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={resetFilters}
                isInternshipPage={true}
                data-oid="1j0sgwy"
              />
            </div>

            {/* Internship Listings */}
            <div
              className="lg:col-span-3 order-1 lg:order-2"
              data-oid="2x_d86h"
            >
              {/* Toolbar */}
              <div
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] p-6 mb-6"
                data-oid="i.8z99d"
              >
                <div
                  className="flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                  data-oid=":yq:23e"
                >
                  {/* Results Counter */}
                  <div
                    className="flex flex-col sm:flex-row sm:items-center gap-2"
                    data-oid="--:9q4l"
                  >
                    <span
                      className="text-xl font-bold text-gray-800"
                      data-oid="qqg:e55"
                    >
                      {filteredInternships.length.toLocaleString()} Internships
                      Found
                    </span>
                    {(searchQuery || searchLocation) && (
                      <span
                        className="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full"
                        data-oid="5w:y3l1"
                      >
                        for "{searchQuery}"{" "}
                        {searchLocation && `in ${searchLocation}`}
                      </span>
                    )}
                  </div>

                  <div
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                    data-oid="pt0q7mt"
                  >
                    {/* Sort Options */}
                    <div className="flex items-center gap-2" data-oid="5svqo3u">
                      <label
                        className="text-sm font-medium text-gray-700 whitespace-nowrap"
                        data-oid=".e425u9"
                      >
                        Sort by:
                      </label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent bg-white min-w-[120px]"
                        data-oid="lrh6pn6"
                      >
                        <option value="relevance" data-oid="c-q:rjb">
                          Relevance
                        </option>
                        <option value="date" data-oid="7ngggsa">
                          Date Posted
                        </option>
                        <option value="stipend" data-oid="417b0ch">
                          Stipend
                        </option>
                        <option value="duration" data-oid="yebvky6">
                          Duration
                        </option>
                        <option value="company" data-oid="ws5ao:w">
                          Company
                        </option>
                      </select>
                    </div>

                    {/* View Toggle */}
                    <div
                      className="flex items-center bg-gray-100 rounded-lg p-1"
                      data-oid="ugjj4k-"
                    >
                      <button
                        onClick={() => setViewMode("list")}
                        className={`p-2 rounded-md transition-all duration-200 ${
                          viewMode === "list"
                            ? "bg-white text-[hsl(196,80%,45%)] shadow-sm"
                            : "text-gray-600 hover:text-gray-800"
                        }`}
                        title="List View"
                        data-oid="v_z2rwq"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="ylzbn45"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                            data-oid="ywun8ea"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => setViewMode("grid")}
                        className={`p-2 rounded-md transition-all duration-200 ${
                          viewMode === "grid"
                            ? "bg-white text-[hsl(196,80%,45%)] shadow-sm"
                            : "text-gray-600 hover:text-gray-800"
                        }`}
                        title="Grid View"
                        data-oid="g7t:04c"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="qo2gnxa"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            data-oid="u6j0m5d"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Internship Alerts Section */}
              <div
                className="bg-gradient-to-r from-[hsl(196,80%,45%)]/10 to-[hsl(175,70%,41%)]/10 backdrop-blur-sm rounded-xl border border-[hsl(196,80%,45%)]/20 p-6 mb-8"
                data-oid="ro7gfl2"
              >
                <div
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  data-oid="ztgy_ax"
                >
                  <div className="flex items-start gap-4" data-oid="vc6am5-">
                    <div
                      className="bg-[hsl(196,80%,45%)] p-3 rounded-full flex-shrink-0"
                      data-oid="qokezza"
                    >
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="huj7acb"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 15h8v-2H4v2zM4 11h10V9H4v2zM4 7h12V5H4v2z"
                          data-oid=":h_g.or"
                        />
                      </svg>
                    </div>
                    <div data-oid="uaxm4l-">
                      <h3
                        className="text-lg font-semibold text-gray-800 mb-1"
                        data-oid="16epa4a"
                      >
                        Get Internship Alerts
                      </h3>
                      <p className="text-gray-600 text-sm" data-oid="znd4n:5">
                        Never miss an internship opportunity that matches your
                        profile
                      </p>
                    </div>
                  </div>
                  <button
                    className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                    data-oid="3n2kj:8"
                  >
                    Create Alert
                  </button>
                </div>
              </div>

              {/* Internship Cards Container */}
              <div className="space-y-6" data-oid="err0m92">
                {isLoading ? (
                  <div className="text-center py-16" data-oid="sb50f4a">
                    <div
                      className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(196,80%,45%)] mx-auto"
                      data-oid="h:m1ddc"
                    ></div>
                    <p className="mt-4 text-gray-600" data-oid="3m..18t">
                      Loading internships...
                    </p>
                  </div>
                ) : filteredInternships.length > 0 ? (
                  <>
                    {/* Internship Cards Grid/List */}
                    <div
                      className={`${
                        viewMode === "grid"
                          ? "grid grid-cols-1 xl:grid-cols-2 gap-6"
                          : "space-y-6"
                      }`}
                      role="list"
                      data-oid="uq.0lwe"
                    >
                      {filteredInternships
                        .slice(0, visibleInternships)
                        .map((internship) => (
                          <JobCard
                            key={internship.id}
                            job={convertInternshipToJob(internship)}
                            viewMode={viewMode}
                            isInternship={true}
                            data-oid="jn2cb.1"
                          />
                        ))}
                    </div>

                    {/* Load More Button */}
                    {visibleInternships < filteredInternships.length && (
                      <div className="text-center py-8" data-oid="dlu-3uv">
                        <button
                          onClick={loadMoreInternships}
                          className="px-8 py-3 bg-white border-2 border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-lg font-medium hover:bg-[hsl(196,80%,45%)] hover:text-white transition-all duration-300 transform hover:scale-105"
                          data-oid=":p8sqvn"
                        >
                          Load More Internships (
                          {filteredInternships.length - visibleInternships}{" "}
                          remaining)
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-16" data-oid="fcep.1n">
                    <div
                      className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      data-oid="czbe18_"
                    >
                      <svg
                        className="h-12 w-12 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="4sde_l7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          data-oid="ytghav7"
                        />
                      </svg>
                    </div>
                    <h3
                      className="text-xl font-medium text-gray-900 mb-2"
                      data-oid="tg7ndh9"
                    >
                      No internships found
                    </h3>
                    <p className="text-gray-600 mb-6" data-oid="gn8ja7f">
                      Try adjusting your filters or search criteria
                    </p>
                    <button
                      onClick={resetFilters}
                      className="px-6 py-3 bg-[hsl(196,80%,45%)] text-white rounded-lg hover:bg-[hsl(196,80%,40%)] transition-colors duration-200 font-medium"
                      data-oid="c--vn5v"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
