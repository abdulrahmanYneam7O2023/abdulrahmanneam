"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useParams, useRouter } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Target,
  TrendingUp,
  Award,
  Briefcase,
  CheckCircle,
  Star,
  Moon,
  Sun,
  Globe,
  Building,
  Clock,
  DollarSign,
  Code,
  Database,
  Server,
  Monitor,
  Zap,
  Shield,
  Mail,
  Link,
  Facebook,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const experienceData = {
  "az-international": {
    company: "AZ International - Engineering & Technical Consulting",
    position: "Full Stack Developer (Freelance)",
    period: "April 2025 - Present",
    location: "Remote, Egypt",
    type: "Freelance",
    status: "Current",
    duration: "12 months",
    teamSize: "Tow Developers",
    description:
      "Leading the development of a comprehensive digital platform for AZ International, a premier engineering consulting firm. This role involves creating innovative solutions for certificate verification, participant management, and corporate presentation systems.",
    longDescription:
      "As the lead developer for AZ International's digital transformation initiative, I'm responsible for architecting and implementing a full-stack web solution that serves multiple stakeholders. The platform combines corporate presentation with functional utility, featuring a sophisticated certificate verification system that streamlines the validation process for training participants and employers. This project demonstrates my ability to work independently while delivering enterprise-level solutions that meet complex business requirements.",
    responsibilities: [
      "Design and develop a comprehensive company website showcasing services and portfolio",
      "Implement secure certificate verification system with QR code integration",
      "Create participant search and validation functionality for training programs",
      "Develop admin dashboard for certificate management and participant tracking",
      "Ensure responsive design and optimal performance across all devices",
      "Integrate multi-language support for Arabic and English content",
      "Implement SEO optimization strategies for improved online visibility",
      "Maintain code quality and documentation standards throughout development",
    ],
    achievements: [
      "Successfully delivered MVP within 3 months of project initiation",
      "Implemented certificate verification system reducing manual validation time by 85%",
      "Achieved 98% uptime and optimal performance metrics",
      "Designed scalable architecture supporting future feature expansions",
      "Received excellent client feedback for user experience and functionality",
      "Established automated deployment pipeline for efficient updates",
    ],
    technologies: {
      backend: ["ASP.NET Core", "Web API", "Entity Framework Core", "SQL Server", "JWT Authentication"],
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      database: ["Microsoft SQL Server", "LINQ", "Stored Procedures"],
      tools: ["Git", "Visual Studio Code", "Azure DevOps", "Postman", "Figma"],
    },
    skills: [
      { name: "Full Stack Development", level: 95 },
      { name: "Client Communication", level: 90 },
      { name: "Project Management", level: 85 },
      { name: "Problem Solving", level: 92 },
      { name: "System Architecture", level: 88 },
    ],
    challenges: [
      "Implementing secure certificate verification without compromising user experience",
      "Designing intuitive interface for users with varying technical backgrounds",
      "Ensuring data security and privacy compliance for sensitive information",
      "Optimizing database performance for large-scale certificate searches",
      "Managing project timeline while maintaining high quality standards",
    ],
    learnings: [
      "Advanced certificate verification and QR code implementation techniques",
      "Enhanced skills in client requirement analysis and solution design",
      "Improved project management and solo development workflow",
      "Deepened understanding of security best practices for sensitive data",
      "Gained experience in multi-language web application development",
    ],
    companyInfo: {
      industry: "Engineering Consulting",
      size: "50-100 employees",
      founded: "2015",
      specialization: "Technical Training & Certification",
      website: null,
      email: null,
      facebook: null,
    },
  },
  "ewoks-it": {
    company: "Ewoks IT Solutions",
    position: "ERP Developer & Technical Support",
    period: "Nov 2023 – October 2024",
    location: "Cairo, Egypt",
    type: "Full-time",
    status: "Completed",
    duration: "11 months",
    teamSize: "5-8 members",
    description:
      "Specialized in streamlining business processes through ERP systems implementation and optimization. Analyzed organizational needs and configured ERP solutions to enhance operational efficiency across multiple client organizations.",
    longDescription:
      "During my tenure at Ewoks IT Solutions, I served as a bridge between complex ERP technologies and business requirements. My role encompassed analyzing existing business processes, identifying inefficiencies, and implementing tailored ERP solutions that transformed how organizations managed their operations. I worked closely with diverse teams and clients, gaining invaluable experience in enterprise software implementation and business process optimization.",
    responsibilities: [
      "Analyze existing business processes and identify optimization opportunities",
      "Configure and customize ERP modules based on client requirements",
      "Provide technical support and training to end-users across different departments",
      "Collaborate with cross-functional teams to ensure seamless system integration",
      "Document system configurations and create user manuals and training materials",
      "Troubleshoot technical issues and provide timely resolution to minimize downtime",
      "Conduct system testing and quality assurance before deployment",
      "Maintain ongoing client relationships and provide post-implementation support",
    ],
    achievements: [
      "Successfully implemented ERP solutions for 15+ client organizations",
      "Reduced average business process completion time by 40% across implementations",
      "Achieved 95% client satisfaction rating through effective support and training",
      "Developed standardized implementation methodology adopted by the team",
      "Trained over 200 end-users across various ERP modules and functionalities",
      "Contributed to 25% increase in team productivity through process improvements",
    ],
    technologies: {
      erp: ["SAP Business One", "Microsoft Dynamics", "Odoo", "Oracle NetSuite"],
      database: ["SQL Server", "MySQL", "PostgreSQL"],
      tools: ["Power BI", "Excel Advanced", "Project Management Tools", "Remote Support Tools"],
      integration: ["API Integration", "Data Migration Tools", "Reporting Systems"],
    },
    skills: [
      { name: "ERP Developer", level: 88 },
      { name: "Business Analysis", level: 85 },
      { name: "Client Relations", level: 90 },
      { name: "Technical Support", level: 92 },
      { name: "Process Optimization", level: 87 },
    ],
    challenges: [
      "Adapting ERP solutions to unique business processes of different industries",
      "Managing resistance to change during system implementation",
      "Ensuring data integrity during complex migration processes",
      "Balancing customization needs with system stability and maintainability",
      "Coordinating implementation timelines across multiple stakeholders",
    ],
    learnings: [
      "Comprehensive understanding of enterprise business processes",
      "Advanced skills in ERP system configuration and customization",
      "Enhanced ability to translate business requirements into technical solutions",
      "Improved client communication and change management skills",
      "Gained expertise in data migration and system integration practices",
    ],
    companyInfo: {
      industry: "IT Solutions & Consulting",
      size: "20-50 employees",
      founded: "2018",
      specialization: "ERP Implementation & Business Process Optimization",
      website: "https://eworks-eg.com/",
      email: "info@eworks-eg.com",
      facebook: "https://www.facebook.com/eworksitsolutions",
    },
  },
  "beta-integration": {
    company: "Beta Integration Company",
    position: "Software Developer",
    period: "Sep 2022 – April 2023",
    location: "Cairo, Egypt",
    type: "Full-time",
    status: "Completed",
    duration: "8 months",
    teamSize: "10-15 members",
    description:
      "Contributed to various software development projects as part of a dynamic development team. Focused on writing clean, maintainable code while gaining hands-on experience in professional software development practices and methodologies.",
    longDescription:
      "My role at Beta Integration Company marked the beginning of my professional software development career. As a junior developer, I was immersed in a collaborative environment where I contributed to multiple projects while learning industry best practices. This experience provided me with a solid foundation in software development lifecycle, team collaboration, and professional coding standards that continue to guide my work today.",
    responsibilities: [
      "Develop and maintain software applications using .NET technologies",
      "Write clean, well-documented, and testable code following company standards",
      "Participate in code reviews and contribute to team knowledge sharing",
      "Collaborate with senior developers and project managers on feature development",
      "Debug and resolve software issues reported by QA team and end-users",
      "Contribute to technical documentation and system architecture discussions",
      "Assist in database design and optimization for application performance",
      "Support deployment processes and participate in release management activities",
    ],
    achievements: [
      "Successfully delivered 5+ software modules within project deadlines",
      "Reduced bug count by 30% through implementation of thorough testing practices",
      "Contributed to team productivity improvement through code optimization",
      "Received recognition for quick learning and adaptation to new technologies",
      "Mentored 2 junior interns in coding best practices and development workflows",
      "Participated in successful deployment of 3 major software releases",
    ],
    technologies: {
      backend: ["C#", ".NET Framework", "ASP.NET", "Entity Framework", "SQL Server"],
      frontend: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
      database: ["SQL Server", "T-SQL", "Database Design"],
      tools: ["Visual Studio", "Git", "TFS", "Postman", "SQL Server Management Studio"],
    },
    skills: [
      { name: "Software Development", level: 80 },
      { name: "Team Collaboration", level: 88 },
      { name: "Problem Solving", level: 85 },
      { name: "Code Quality", level: 82 },
      { name: "Learning Agility", level: 95 },
    ],
    challenges: [
      "Adapting to professional development environment and coding standards",
      "Learning to work effectively within established team workflows",
      "Balancing code quality with delivery timelines in fast-paced environment",
      "Understanding complex business requirements and translating them to code",
      "Managing multiple tasks and priorities while maintaining focus on quality",
    ],
    learnings: [
      "Fundamental understanding of professional software development practices",
      "Experience with version control systems and collaborative development",
      "Knowledge of software testing methodologies and quality assurance",
      "Understanding of project management and agile development processes",
      "Foundation in database design and performance optimization techniques",
    ],
    companyInfo: {
      industry: "Software Development & Integration",
      size: "100-200 employees",
      founded: "2010",
      specialization: "Custom Software Solutions & System Integration",
      website: "https://betaintegration.com",
      email: "contact@betaintegration.com",
      facebook: "https://www.facebook.com/profile.php?id=100076229329138",
    },
    recommendation: {
      title: "Professional Recommendation Letter",
      content:
        "This official recommendation letter from Beta Integration Company highlights my exceptional performance as a Software Developer. The letter commends my dedication, technical expertise, and professional conduct during my tenure. It specifically mentions my ability to deliver high-quality code, collaborate effectively with team members, and consistently meet project deadlines. The recommendation serves as a testament to my strong work ethic and technical capabilities in software development.",
      author: "Beta Integration Company Management",
      image: "/images/beta-recommendation-letter.png",
    },
  },
}

const translations = {
  en: {
    backToExperience: "Back to Experience",
    experienceDetails: "Experience Details",
    overview: "Overview",
    responsibilities: "Key Responsibilities",
    achievements: "Major Achievements",
    technologies: "Technologies Used",
    skills: "Skills Developed",
    challenges: "Challenges Faced",
    learnings: "Key Learnings",
    companyInfo: "Company Information",
    position: "Position",
    duration: "Duration",
    location: "Location",
    type: "Employment Type",
    status: "Status",
    teamSize: "Team Size",
    industry: "Industry",
    companySize: "Company Size",
    founded: "Founded",
    specialization: "Specialization",
    backend: "Backend",
    frontend: "Frontend",
    database: "Database",
    tools: "Tools & Others",
    erp: "ERP Systems",
    integration: "Integration",
    website: "Website",
    email: "Email",
    facebook: "Facebook",
    recommendation: "Recommendation",
  },
  ar: {
    backToExperience: "العودة للخبرات",
    experienceDetails: "تفاصيل الخبرة",
    overview: "نظرة عامة",
    responsibilities: "المسؤوليات الرئيسية",
    achievements: "الإنجازات الرئيسية",
    technologies: "التقنيات المستخدمة",
    skills: "المهارات المطورة",
    challenges: "التحديات المواجهة",
    learnings: "التعلم الرئيسي",
    companyInfo: "معلومات الشركة",
    position: "المنصب",
    duration: "المدة",
    location: "الموقع",
    type: "نوع التوظيف",
    status: "الحالة",
    teamSize: "حجم الفريق",
    industry: "الصناعة",
    companySize: "حجم الشركة",
    founded: "تأسست",
    specialization: "التخصص",
    backend: "الخادم",
    frontend: "الواجهة",
    database: "قاعدة البيانات",
    tools: "الأدوات وأخرى",
    erp: "أنظمة تخطيط الموارد",
    integration: "التكامل",
    website: "الموقع",
    email: "البريد الإلكتروني",
    facebook: "فيسبوك",
    recommendation: "توصية",
  },
  de: {
    backToExperience: "Zurück zur Erfahrung",
    experienceDetails: "Erfahrungsdetails",
    overview: "Überblick",
    responsibilities: "Hauptverantwortlichkeiten",
    achievements: "Wichtige Erfolge",
    technologies: "Verwendete Technologien",
    skills: "Entwickelte Fähigkeiten",
    challenges: "Herausforderungen",
    learnings: "Wichtige Erkenntnisse",
    companyInfo: "Unternehmensinformationen",
    position: "Position",
    duration: "Dauer",
    location: "Standort",
    type: "Beschäftigungsart",
    status: "Status",
    teamSize: "Teamgröße",
    industry: "Branche",
    companySize: "Unternehmensgröße",
    founded: "Gegründet",
    specialization: "Spezialisierung",
    backend: "Backend",
    frontend: "Frontend",
    database: "Datenbank",
    tools: "Tools & Andere",
    erp: "ERP-Systeme",
    integration: "Integration",
    website: "Webseite",
    email: "E-Mail",
    facebook: "Facebook",
    recommendation: "Empfehlung",
  },
  fr: {
    backToExperience: "Retour à l'Expérience",
    experienceDetails: "Détails de l'Expérience",
    overview: "Aperçu",
    responsibilities: "Responsabilités Clés",
    achievements: "Réalisations Majeures",
    technologies: "Technologies Utilisées",
    skills: "Compétences Développées",
    challenges: "Défis Rencontrés",
    learnings: "Apprentissages Clés",
    companyInfo: "Informations sur l'Entreprise",
    position: "Poste",
    duration: "Durée",
    location: "Lieu",
    type: "Type d'Emploi",
    status: "Statut",
    teamSize: "Taille de l'Équipe",
    industry: "Industrie",
    companySize: "Taille de l'Entreprise",
    founded: "Fondée",
    specialization: "Spécialisation",
    backend: "Backend",
    frontend: "Frontend",
    database: "Base de Données",
    tools: "Outils & Autres",
    erp: "Systèmes ERP",
    integration: "Intégration",
    website: "Site Web",
    email: "E-mail",
    facebook: "Facebook",
    recommendation: "Recommandation",
  },
}

export default function ExperienceDetail() {
  const params = useParams()
  const router = useRouter()
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState<"en" | "ar" | "de" | "fr">("en")

  const slug = params.slug as string
  const experience = experienceData[slug as keyof typeof experienceData]
  const t = translations[language]

  useEffect(() => {
    // Get theme and language from localStorage
    const savedTheme = localStorage.getItem("theme")
    const savedLanguage = localStorage.getItem("language")

    if (savedTheme) setIsDark(savedTheme === "dark")
    if (savedLanguage) setLanguage(savedLanguage as "en" | "ar" | "de" | "fr")
  }, [])

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Experience Not Found</h1>
          <Button onClick={() => router.push("/#experience")}>Back to Experience</Button>
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
            <Button variant="ghost" onClick={() => router.push("/#experience")} className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>{t.backToExperience}</span>
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
          {/* Company Logo/Image */}
          {(slug === "az-international" || slug === "ewoks-it" || slug === "beta-integration") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <img
                  src={
                    slug === "az-international"
                      ? "/images/az.jpg"
                      : slug === "ewoks-it"
                        ? "/images/eworks-logo-full.png"
                        : "/images/beta-integration-logo-full.png"
                  }
                  alt={`${experience.company} Logo`}
                  className={`rounded-lg shadow-lg ${
                    slug === "az-international"
                      ? "w-full max-w-2xl h-48 object-cover"
                      : "w-48 h-48 object-contain bg-white p-4"
                  }`}
                />
              </div>
            </motion.div>
          )}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <Badge variant="outline" className="mb-4 text-xs sm:text-sm">
                {experience.type} • {experience.status}
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold mb-4 px-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {experience.position}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-lg sm:text-xl lg:text-2xl mb-4 px-4 ${isDark ? "text-blue-400" : "text-blue-600"}`}
            >
              {experience.company}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className={`flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm px-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="break-words">{experience.period}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{experience.duration}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Details */}
      <section className={`py-20 ${isDark ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className={`${isDark ? "bg-gray-700 border-gray-600" : "bg-white"}`}>
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      <Briefcase className="w-5 h-5" />
                      <span>{t.overview}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-lg leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {experience.description}
                    </p>
                    <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      {experience.longDescription}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Responsibilities */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className={`${isDark ? "bg-gray-700 border-gray-600" : "bg-white"}`}>
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      <Target className="w-5 h-5" />
                      <span>{t.responsibilities}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {experience.responsibilities.map((responsibility, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Achievements */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className={`${isDark ? "bg-gray-700 border-gray-600" : "bg-white"}`}>
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      <Award className="w-5 h-5" />
                      <span>{t.achievements}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {experience.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Technologies */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className={`${isDark ? "bg-gray-700 border-gray-600" : "bg-white"}`}>
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      <Code className="w-5 h-5" />
                      <span>{t.technologies}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {Object.entries(experience.technologies).map(([category, techs]) => (
                      <div key={category}>
                        <h4
                          className={`font-semibold mb-3 flex items-center space-x-2 ${isDark ? "text-gray-200" : "text-gray-800"}`}
                        >
                          {category === "backend" && <Server className="w-4 h-4" />}
                          {category === "frontend" && <Monitor className="w-4 h-4" />}
                          {category === "database" && <Database className="w-4 h-4" />}
                          {category === "erp" && <Building className="w-4 h-4" />}
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

              {/* Skills Developed */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className={`${isDark ? "bg-gray-700 border-gray-600" : "bg-white"}`}>
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      <TrendingUp className="w-5 h-5" />
                      <span>{t.skills}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {experience.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between">
                          <span className={`font-medium ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                            {skill.name}
                          </span>
                          <motion.span
                            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                        >
                          <Progress value={skill.level} className="h-2" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {experience.recommendation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className={`${isDark ? "bg-gray-700 border-gray-600" : "bg-white"}`}>
                    <CardHeader>
                      <CardTitle className={`flex items-center space-x-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                        <Star className="w-5 h-5" />
                        <span>{t.recommendation}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className={`font-semibold mb-3 ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                          {experience.recommendation.title}
                        </h4>
                        <p className={`text-lg leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                          {experience.recommendation.content}
                        </p>
                        <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          {experience.recommendation.author}
                        </p>
                      </div>

                      {experience.recommendation.image && (
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                          <img
                            src={experience.recommendation.image || "/placeholder.svg"}
                            alt="Professional Recommendation Letter"
                            className="w-full max-w-md mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                          />
                          <p className={`text-center text-sm mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                            Official recommendation letter highlighting professional performance and dedication
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Challenges & Learnings */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className={`${isDark ? "bg-gray-700 border-gray-600" : "bg-white"}`}>
                    <CardHeader>
                      <CardTitle className={`${isDark ? "text-white" : "text-gray-900"}`}>{t.challenges}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {experience.challenges.map((challenge, index) => (
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
                  <Card className={`${isDark ? "bg-gray-700 border-gray-600" : "bg-white"}`}>
                    <CardHeader>
                      <CardTitle className={`${isDark ? "text-white" : "text-gray-900"}`}>{t.learnings}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {experience.learnings.map((learning, index) => (
                          <li
                            key={index}
                            className={`flex items-start space-x-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}
                          >
                            <span className="text-green-500 mt-1">•</span>
                            <span>{learning}</span>
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
              {/* Experience Info */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Card className={`${isDark ? "bg-gray-700 border-gray-600" : "bg-white"}`}>
                  <CardHeader>
                    <CardTitle className={`${isDark ? "text-white" : "text-gray-900"}`}>
                      {t.experienceDetails}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { label: t.position, value: experience.position, icon: <Briefcase className="w-4 h-4" /> },
                      { label: t.duration, value: experience.duration, icon: <Clock className="w-4 h-4" /> },
                      { label: t.location, value: experience.location, icon: <MapPin className="w-4 h-4" /> },
                      { label: t.type, value: experience.type, icon: <DollarSign className="w-4 h-4" /> },
                      { label: t.status, value: experience.status, icon: <CheckCircle className="w-4 h-4" /> },
                      { label: t.teamSize, value: experience.teamSize, icon: <Users className="w-4 h-4" /> },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {item.icon}
                          <span className={`font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                            {item.label}:
                          </span>
                        </div>
                        <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Company Info */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Card className={`${isDark ? "bg-gray-700 border-gray-600" : "bg-white"}`}>
                  <CardHeader>
                    <CardTitle className={`${isDark ? "text-white" : "text-gray-900"}`}>{t.companyInfo}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        label: t.industry,
                        value: experience.companyInfo.industry,
                        icon: <Building className="w-4 h-4" />,
                      },
                      { label: t.companySize, value: experience.companyInfo.size, icon: <Users className="w-4 h-4" /> },
                      {
                        label: t.founded,
                        value: experience.companyInfo.founded,
                        icon: <Calendar className="w-4 h-4" />,
                      },
                      {
                        label: t.specialization,
                        value: experience.companyInfo.specialization,
                        icon: <Target className="w-4 h-4" />,
                      },
                      {
                        label: t.website,
                        value: experience.companyInfo.website,
                        icon: <Link className="w-4 h-4" />,
                      },
                      {
                        label: t.email,
                        value: experience.companyInfo.email,
                        icon: <Mail className="w-4 h-4" />,
                      },
                      {
                        label: t.facebook,
                        value: experience.companyInfo.facebook,
                        icon: <Facebook className="w-4 h-4" />,
                      },
                    ]
                      .filter((item) => item.value)
                      .map((item, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex items-center space-x-2">
                            {item.icon}
                            <span className={`font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                              {item.label}:
                            </span>
                          </div>
                          <p className={`text-sm ml-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                            {item.label === t.website ? (
                              <a
                                href={item.value}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                              >
                                {item.value}
                              </a>
                            ) : item.label === t.email ? (
                              <a href={`mailto:${item.value}`} className="text-blue-500 hover:underline">
                                {item.value}
                              </a>
                            ) : item.label === t.facebook ? (
                              <a
                                href={item.value}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                              >
                                {item.value}
                              </a>
                            ) : (
                              item.value
                            )}
                          </p>
                        </div>
                      ))}
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
