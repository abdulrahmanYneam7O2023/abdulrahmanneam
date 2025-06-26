"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useParams, useRouter } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  Code,
  ExternalLink,
  Github,
  Globe,
  Users,
  Zap,
  Database,
  Server,
  Monitor,
  Brain,
  Shield,
  CheckCircle,
  Star,
  Moon,
  Sun,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projectsData = {
  "solvesmart-ai": {
    title: "SolveSmart_AI",
    subtitle: "AI-Powered Programming Problem Generator",
    description:
      "An innovative system entirely powered by Artificial Intelligence that leverages AI to automatically generate programming problems based on user descriptions and uses AI to solve these problems, ensuring a fully automated and intelligent workflow for problem creation and resolution.",
    longDescription:
      "SolveSmart_AI represents a breakthrough in educational technology, combining the power of artificial intelligence with programming education. The system uses advanced AI algorithms to understand user requirements and generate contextually relevant programming challenges. What sets it apart is its dual AI approach - not only does it create problems, but it also provides intelligent solutions with detailed explanations.",
    category: "Graduation Project - ITI",
    duration: "6 months",
    team: "4 developers",
    role: "Full Stack Developer & AI Integration Specialist",
    status: "Completed",
    year: "2025",
    technologies: {
      backend: ["C#", ".NET Core", "ASP.NET Web API", "SQL Server", "Entity Framework"],
      frontend: ["Angular", "TypeScript", "Angular Material", "HTML5", "CSS3"],
      ai: ["OpenAI API", "DeepSeek API", "Natural Language Processing"],
      tools: ["Git", "Visual Studio", "Postman", "Azure DevOps"],
    },
    features: [
      "AI-powered problem generation based on difficulty levels",
      "Automatic solution generation with step-by-step explanations",
      "Multi-language programming support (C#, Python, JavaScript)",
      "Real-time code execution and testing",
      "Progress tracking and analytics dashboard",
      "User authentication and profile management",
      "Responsive design for all devices",
      "Advanced search and filtering capabilities",
    ],
    challenges: [
      "Integrating multiple AI APIs for optimal performance",
      "Ensuring generated problems are unique and educational",
      "Handling real-time code execution securely",
      "Optimizing AI response times for better user experience",
    ],
    outcomes: [
      "Successfully generated over 1000+ unique programming problems",
      "Achieved 95% accuracy in AI-generated solutions",
      "Reduced problem creation time by 80%",
      "Received excellent feedback from ITI instructors",
    ],
    images: [
      "/images/solvesmart-login.png",
      "/images/solvesmart-dashboard.png",
      "/images/solvesmart-statistics.png",
      "/placeholder.svg?height=400&width=600",
    ],
    links: {
      github: "https://github.com/abdulrahmanYneam7O2023?tab=repositories",
      linkedin: "https://www.linkedin.com/in/abdoneam",
      demo: "#",
    },
  },
  "az-international": {
    title: "AZ International Website",
    subtitle: "Engineering & Technical Consulting Platform",
    description:
      "A comprehensive website project for providing services to AZ International, designed to create an overview of the company, its services, and the certifications issued to participants who have enrolled in its programs.",
    longDescription:
      "The AZ International website serves as a digital gateway for one of the leading engineering consulting firms. The platform showcases the company's extensive portfolio of services while providing a sophisticated certification verification system. This project demonstrates the perfect blend of corporate presentation and functional utility, offering visitors both informational content and practical tools.",
    category: "Freelance Project",
    duration: "4 months",
    team: "Solo Developer",
    role: "Full Stack Developer",
    status: "In Progress",
    year: "2025",
    technologies: {
      backend: ["ASP.NET Core", "Web API", "SQL Server", "Entity Framework Core", "JWT Authentication"],
      frontend: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "TypeScript"],
      database: ["Microsoft SQL Server", "LINQ", "Stored Procedures"],
      tools: ["Git", "Visual Studio Code", "Figma", "Postman"],
    },
    features: [
      "Company portfolio and services showcase",
      "Certificate verification system with QR codes",
      "Participant search and validation",
      "Multi-language support (English/Arabic)",
      "Admin dashboard for certificate management",
      "Responsive design optimized for all devices",
      "SEO optimization for better visibility",
      "Contact forms with email integration",
    ],
    challenges: [
      "Implementing secure certificate verification system",
      "Designing intuitive user interface for diverse audiences",
      "Ensuring data security and privacy compliance",
      "Optimizing performance for large certificate databases",
    ],
    outcomes: [
      "Streamlined certificate verification process",
      "Improved company online presence",
      "Enhanced user experience for certificate holders",
      "Reduced manual verification workload by 70%",
    ],
    images: [
      "/images/az-homepage.png",
      "/images/az-admin-panel.png",
      "/images/az-search-results.png",
      "/placeholder.svg?height=400&width=600",
    ],
    links: {
      github: "https://github.com/abdulrahmanneam",
      linkedin:
        "https://www.linkedin.com/posts/abdoneam_freelanceproject-aspnetcore-nextjs-activity-7340948832588914688-jiWZ",
      demo: "https://azinternational-eg.com/",
    },
  },
  qayimli: {
    title: "Qayimli Rating Platform",
    subtitle: "Product Rating & Review System",
    description:
      "A comprehensive platform designed for rating and reviewing products, allowing users to add evaluations and vote on items. The project includes API development with JWT authentication, utilizing SQL Server for reliable database management.",
    longDescription:
      "Qayimli represents a modern approach to product evaluation and community-driven reviews. The platform empowers users to share their experiences with products while providing businesses with valuable feedback mechanisms. Built with scalability in mind, the system handles thousands of reviews while maintaining performance and data integrity.",
    category: "Graduation Project - DEBI",
    duration: "5 months",
    team: "3 developers",
    role: "Backend Lead Developer",
    status: "Completed",
    year: "2024",
    technologies: {
      backend: ["ASP.NET Core", "Web API", "SQL Server", "Entity Framework", "JWT Authentication"],
      frontend: ["Angular", "TypeScript", "Bootstrap", "HTML5", "CSS3"],
      integration: ["Google OAuth", "Email Services", "Payment Gateway"],
      tools: ["Git", "Visual Studio", "SQL Server Management Studio", "Postman"],
    },
    features: [
      "User registration and authentication system",
      "Product catalog with detailed information",
      "Rating and review system with moderation",
      "Advanced search and filtering capabilities",
      "User profile management and history",
      "Admin dashboard for content management",
      "Google Sign-In integration",
      "Email notifications and alerts",
    ],
    challenges: [
      "Implementing fair rating algorithms",
      "Preventing spam and fake reviews",
      "Ensuring scalable database design",
      "Integrating third-party authentication services",
    ],
    outcomes: [
      "Successfully handled 10,000+ product reviews",
      "Achieved 99.9% uptime during testing phase",
      "Implemented robust anti-spam measures",
      "Received recognition from DEBI program coordinators",
    ],
    images: [
      "/images/qayimli-logo.png",
      "/images/qayimli-dashboard.png",
      "/images/qayimli-loading.png",
      "/placeholder.svg?height=400&width=600",
    ],
    links: {
      github: "https://github.com/abdulrahmanneam",
      linkedin: "https://www.linkedin.com/posts/mostafapro_depi-mcit-edtech-ugcPost-7257395366193496064-9I-Z",
      demo: "https://qayimli.netlify.app/home",
    },
  },
}

const translations = {
  en: {
    backToProjects: "Back to Projects",
    projectDetails: "Project Details",
    overview: "Overview",
    technologies: "Technologies Used",
    features: "Key Features",
    challenges: "Challenges Faced",
    outcomes: "Project Outcomes",
    projectInfo: "Project Information",
    category: "Category",
    duration: "Duration",
    team: "Team Size",
    role: "My Role",
    status: "Status",
    year: "Year",
    viewCode: "View Code",
    viewDemo: "View Demo",
    viewLinkedIn: "LinkedIn Post",
    backend: "Backend",
    frontend: "Frontend",
    database: "Database",
    tools: "Tools & Others",
    ai: "AI & ML",
    integration: "Integration",
  },
  ar: {
    backToProjects: "العودة للمشاريع",
    projectDetails: "تفاصيل المشروع",
    overview: "نظرة عامة",
    technologies: "التقنيات المستخدمة",
    features: "المميزات الرئيسية",
    challenges: "التحديات المواجهة",
    outcomes: "نتائج المشروع",
    projectInfo: "معلومات المشروع",
    category: "الفئة",
    duration: "المدة",
    team: "حجم الفريق",
    role: "دوري",
    status: "الحالة",
    year: "السنة",
    viewCode: "عرض الكود",
    viewDemo: "عرض العرض التوضيحي",
    viewLinkedIn: "منشور لينكد إن",
    backend: "الخادم",
    frontend: "الواجهة",
    database: "قاعدة البيانات",
    tools: "الأدوات وأخرى",
    ai: "الذكاء الاصطناعي",
    integration: "التكامل",
  },
  de: {
    backToProjects: "Zurück zu Projekten",
    projectDetails: "Projektdetails",
    overview: "Überblick",
    technologies: "Verwendete Technologien",
    features: "Hauptmerkmale",
    challenges: "Herausforderungen",
    outcomes: "Projektergebnisse",
    projectInfo: "Projektinformationen",
    category: "Kategorie",
    duration: "Dauer",
    team: "Teamgröße",
    role: "Meine Rolle",
    status: "Status",
    year: "Jahr",
    viewCode: "Code anzeigen",
    viewDemo: "Demo anzeigen",
    viewLinkedIn: "LinkedIn-Post",
    backend: "Backend",
    frontend: "Frontend",
    database: "Datenbank",
    tools: "Tools & Andere",
    ai: "KI & ML",
    integration: "Integration",
  },
  fr: {
    backToProjects: "Retour aux Projets",
    projectDetails: "Détails du Projet",
    overview: "Aperçu",
    technologies: "Technologies Utilisées",
    features: "Fonctionnalités Clés",
    challenges: "Défis Rencontrés",
    outcomes: "Résultats du Projet",
    projectInfo: "Informations du Projet",
    category: "Catégorie",
    duration: "Durée",
    team: "Taille de l'Équipe",
    role: "Mon Rôle",
    status: "Statut",
    year: "Année",
    viewCode: "Voir le Code",
    viewDemo: "Voir la Démo",
    viewLinkedIn: "Post LinkedIn",
    backend: "Backend",
    frontend: "Frontend",
    database: "Base de Données",
    tools: "Outils & Autres",
    ai: "IA & ML",
    integration: "Intégration",
  },
}

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState<"en" | "ar" | "de" | "fr">("en")
  const [activeImage, setActiveImage] = useState(0)

  const slug = params.slug as string
  const project = projectsData[slug as keyof typeof projectsData]
  const t = translations[language]

  useEffect(() => {
    // Get theme and language from localStorage or parent
    const savedTheme = localStorage.getItem("theme")
    const savedLanguage = localStorage.getItem("language")

    if (savedTheme) setIsDark(savedTheme === "dark")
    if (savedLanguage) setLanguage(savedLanguage as "en" | "ar" | "de" | "fr")
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => router.push("/#projects")}>Back to Projects</Button>
        </div>
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-gray-900" : "bg-white"}`}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
          isDark ? "bg-gray-900/80 border-gray-700" : "bg-white/80 border-gray-200"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => router.push("/#projects")} className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>{t.backToProjects}</span>
            </Button>

            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <select
                  value={language}
                  onChange={(e) => {
                    const newLang = e.target.value as "en" | "ar" | "de" | "fr"
                    setLanguage(newLang)
                    localStorage.setItem("language", newLang)
                  }}
                  className={`bg-transparent border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[80px] ${
                    isDark ? "border-gray-600 text-white" : "border-gray-300 text-gray-900"
                  }`}
                >
                  <option value="en">English</option>
                  <option value="ar">العربية</option>
                  <option value="de">Deutsch</option>
                  <option value="fr">Français</option>
                </select>
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsDark(!isDark)
                  localStorage.setItem("theme", !isDark ? "dark" : "light")
                }}
                className="p-2"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className={`pt-24 pb-12 ${isDark ? "bg-gray-900" : "bg-gradient-to-br from-blue-50 to-indigo-100"}`}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <Badge variant="outline" className="mb-4">
                {project.category}
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold mb-4 px-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-lg sm:text-xl lg:text-2xl mb-8 px-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              {project.subtitle}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 px-4"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Github className="w-4 h-4 mr-2" />
                {t.viewCode}
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.viewDemo}
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.viewLinkedIn}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Images */}
      <section className={`py-12 ${isDark ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="mb-6 lg:mb-8">
              <img
                src={project.images[activeImage] || "/placeholder.svg"}
                alt={`${project.title} Screenshot ${activeImage + 1}`}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="flex justify-center space-x-2 lg:space-x-4 overflow-x-auto pb-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === index ? "border-blue-600 scale-110" : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={project.images[index] || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className={`py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      <Monitor className="w-5 h-5" />
                      <span>{t.overview}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-lg leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {project.description}
                    </p>
                    <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      {project.longDescription}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Technologies */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      <Code className="w-5 h-5" />
                      <span>{t.technologies}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {Object.entries(project.technologies).map(([category, techs]) => (
                      <div key={category}>
                        <h4
                          className={`font-semibold mb-3 flex items-center space-x-2 ${isDark ? "text-gray-200" : "text-gray-800"}`}
                        >
                          {category === "backend" && <Server className="w-4 h-4" />}
                          {category === "frontend" && <Monitor className="w-4 h-4" />}
                          {category === "database" && <Database className="w-4 h-4" />}
                          {category === "ai" && <Brain className="w-4 h-4" />}
                          {category === "tools" && <Zap className="w-4 h-4" />}
                          {category === "integration" && <Shield className="w-4 h-4" />}
                          <span>{t[category as keyof typeof t] || category}</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech, index) => (
                            <Badge key={index} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Features */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      <Star className="w-5 h-5" />
                      <span>{t.features}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Challenges & Outcomes */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
                    <CardHeader>
                      <CardTitle className={`${isDark ? "text-white" : "text-gray-900"}`}>{t.challenges}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {project.challenges.map((challenge, index) => (
                          <li
                            key={index}
                            className={`flex items-start space-x-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}
                          >
                            <span className="text-orange-500 mt-1">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
                    <CardHeader>
                      <CardTitle className={`${isDark ? "text-white" : "text-gray-900"}`}>{t.outcomes}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {project.outcomes.map((outcome, index) => (
                          <li
                            key={index}
                            className={`flex items-start space-x-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}
                          >
                            <span className="text-green-500 mt-1">•</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Card className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
                  <CardHeader>
                    <CardTitle className={`${isDark ? "text-white" : "text-gray-900"}`}>{t.projectInfo}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { label: t.category, value: project.category, icon: <Monitor className="w-4 h-4" /> },
                      { label: t.duration, value: project.duration, icon: <Calendar className="w-4 h-4" /> },
                      { label: t.team, value: project.team, icon: <Users className="w-4 h-4" /> },
                      { label: t.role, value: project.role, icon: <Code className="w-4 h-4" /> },
                      { label: t.status, value: project.status, icon: <CheckCircle className="w-4 h-4" /> },
                      { label: t.year, value: project.year, icon: <Calendar className="w-4 h-4" /> },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {item.icon}
                          <span className={`font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                            {item.label}:
                          </span>
                        </div>
                        <span className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Links */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Card className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
                  <CardHeader>
                    <CardTitle className={`${isDark ? "text-white" : "text-gray-900"}`}>Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {t.viewCode}
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t.viewDemo}
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t.viewLinkedIn}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
