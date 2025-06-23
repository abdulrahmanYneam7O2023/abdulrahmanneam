"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Moon,
  Sun,
  Globe,
  Menu,
  X,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Calendar,
  Building,
  Code,
  Globe2,
  CheckCircle,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { generateCV } from "../utils/generateCV"

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      internships: "Internships",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Full Stack Developer",
      description:
        "I am a .NET developer with 2+ years of experience delivering high-quality software solutions. My journey spans freelance projects, teamwork, and corporate roles, showcasing expertise in ASP.NET Core, Entity Framework, and SQL Server.",
      hireMe: "Hire Me",
      downloadCV: "Download CV",
    },
    about: {
      title: "About Me",
      description:
        "As a Fullstack Developer with over 2 years of hands-on experience, I excel at solving complex coding challenges using .NET and delivering innovative, user-focused solutions. My professional journey is distinguished by strong leadership capabilities and exceptional communication skills. I served as Team Leader for the SolveSmart_AI graduation project at ITI, where I successfully coordinated a team of 4 developers to create an AI-powered programming solution. Additionally, I was honored to serve as Team Leader for my cohort and was recognized among the Top 10 students, reflecting my commitment to excellence and collaborative leadership approach. My ability to communicate complex technical concepts clearly, combined with my natural leadership qualities, enables me to bridge the gap between technical teams and stakeholders effectively.",
      education: "Education",
      degree: "Bachelor of Accounting and Financial Management",
      university: "Faculty of Commerce, Al-Azhar University",
      period: "Aug 2018 – June 2022",
    },
    experience: {
      title: "Work Experience",
      current: "Current",
      experiences: [
        {
          company: "AZ International - Engineering & Technical Consulting",
          position: "Full Stack Developer (Freelance)",
          period: "April 2025 - Present",
          description:
            "Developing a comprehensive website for engineering consulting services with certification verification system. Creating an overview of company services and implementing a mechanism for certificate verification and participant search functionality.",
        },
        {
          company: "Ewoks IT Solutions",
          position: "ERP Consultant & Technical Support",
          period: "Nov 2023 – October 2024",
          description:
            "Specialized in streamlining business processes through ERP systems implementation and optimization. Analyzed organizational needs and configured ERP solutions to enhance operational efficiency.",
        },
        {
          company: "Beta Integration Company",
          position: "Software Developer",
          period: "Sep 2022 – April 2023",
          description:
            "Wrote clean, clear and well-tested code for various projects. Managed software programming and documentation development. Verified and resolved bug reports and issues.",
        },
      ],
    },
    internships: {
      title: "Internships & Training",
      internships: [
        {
          organization: "Information Technology Institute (ITI)",
          program: "Full Stack Developer .NET Scholarship",
          period: "Nov 2024 – Mar 2025",
          duration: "4 months",
          description:
            "The Full Stack Developer .NET Scholarship by ITI (affiliated with Egypt's MCIT) is a prestigious 4-month program designed to bridge the gap between academia and industry. It offers intensive training in .NET full-stack development, soft skills, and real-world projects.",
          achievements: [
            "Team Leader for graduation project SolveSmart_AI",
            "Recognized as Top 10 student in the cohort",
            "Led team of 4 developers in AI-powered project development",
          ],
          certificate: "/images/iti-certificate.png",
        },
        {
          organization: "Digital Egypt Pioneers Initiative - DEPI",
          program: ".NET Web Development Diploma",
          period: "April 2024 – Nov 2024",
          duration: "6 months",
          description:
            "The Digital Egypt Youth (DEY) Scholarship by NTI and MCIT is a 6-month, fully-funded program offering training in high-demand ICT fields. With 288 technical hours, 132 soft skills hours, and 120 on-the-job training hours, it bridges the gap between academia and industry.",
          achievements: [
            "Team Leader for cohort coordination",
            "Completed comprehensive .NET development training",
            "Developed Qayimli rating platform as graduation project",
          ],
          certificate: "/images/depi-certificate.png",
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View Project",
      projects: [
        {
          title: "SolveSmart_AI",
          description:
            "An innovative AI-powered system that automatically generates programming problems and solutions using artificial intelligence.",
          tech: ["C#", ".NET Core", "SQL Server", "Angular", "OpenAI API"],
          type: "Graduation Project - ITI",
          slug: "solvesmart-ai",
          images: [
            "/images/solvesmart/home.png",
            "/images/solvesmart/problems.png",
            "/images/solvesmart/problem-details.png",
            "/images/solvesmart/solution.png",
            "/images/solvesmart/create-problem.png",
          ],
        },
        {
          title: "AZ International Website",
          description:
            "A comprehensive website for engineering consulting services with certification verification system.",
          tech: ["ASP.NET Core", "Next.js", "Tailwind CSS", "SQL Server"],
          type: "Freelance Project",
          slug: "az-international",
          images: [
            "/images/az-international/home.png",
            "/images/az-international/services.png",
            "/images/az-international/certificate-verification.png",
            "/images/az-international/admin-panel.png",
            "/images/az-international/search-results.png",
          ],
        },
        {
          title: "Qayimli Rating Platform",
          description:
            "A comprehensive platform for rating and reviewing products with JWT authentication and Google services integration.",
          tech: ["ASP.NET Core", "Angular", "SQL Server", "JWT"],
          type: "Graduation Project - DEBI",
          slug: "qayimli",
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      backend: "Backend Technologies",
      frontend: "Frontend Technologies",
      other: "Other Technologies",
    },
    contact: {
      title: "Get In Touch",
      description: "I'm always open to discussing new opportunities and interesting projects.",
      email: "Email Me",
      phone: "Call Me",
      location: "Cairo, Egypt",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "نبذة عني",
      experience: "الخبرة",
      internships: "التدريبات",
      projects: "المشاريع",
      skills: "المهارات",
      contact: "التواصل",
    },
    hero: {
      greeting: "مرحباً، أنا",
      role: "مطور ويب متكامل",
      description:
        "أنا مطور .NET مع أكثر من سنتين من الخبرة في تقديم حلول برمجية عالية الجودة. رحلتي تشمل مشاريع العمل الحر والعمل الجماعي والأدوار المؤسسية.",
      hireMe: "وظفني",
      downloadCV: "تحميل السيرة الذاتية",
    },
    about: {
      title: "نبذة عني",
      description:
        "كمطور ويب متكامل مع أكثر من سنتين من الخبرة العملية، أتفوق في حل التحديات البرمجية المعقدة باستخدام .NET وتقديم حلول مبتكرة تركز على المستخدم. تتميز رحلتي المهنية بقدرات قيادية قوية ومهارات تواصل استثنائية. شغلت منصب قائد الفريق لمشروع التخرج SolveSmart_AI في ITI، حيث نسقت بنجاح فريقاً من 4 مطورين لإنشاء حل برمجي مدعوم بالذكاء الاصطناعي. بالإضافة إلى ذلك، تشرفت بأن أكون قائد فريق للدفعة وتم تكريمي ضمن أفضل 10 طلاب، مما يعكس التزامي بالتميز ونهجي القيادي التعاوني. قدرتي على توصيل المفاهيم التقنية المعقدة بوضوح، إلى جانب صفاتي القيادية الطبيعية، تمكنني من سد الفجوة بين الفرق التقنية وأصحاب المصلحة بفعالية.",
      education: "التعليم",
      degree: "بكالوريوس المحاسبة والإدارة المالية",
      university: "كلية التجارة، جامعة الأزهر",
      period: "أغسطس 2018 – يونيو 2022",
    },
    experience: {
      title: "الخبرة العملية",
      current: "حالي",
      experiences: [
        {
          company: "AZ International - الاستشارات الهندسية والتقنية",
          position: "مطور ويب متكامل (عمل حر)",
          period: "أبريل 2025 - حالياً",
          description:
            "تطوير موقع شامل لخدمات الاستشارات الهندسية مع نظام التحقق من الشهادات. إنشاء نظرة عامة على خدمات الشركة وتنفيذ آلية للتحقق من الشهادات ووظائف البحث عن المشاركين.",
        },
        {
          company: "Ewoks IT Solutions",
          position: "استشاري ERP ودعم تقني",
          period: "نوفمبر 2023 – أكتوبر 2024",
          description: "متخصص في تبسيط العمليات التجارية من خلال تنفيذ وتحسين أنظمة تخطيط موارد المؤسسات.",
        },
        {
          company: "Beta Integration Company",
          position: "مطور برمجيات",
          period: "سبتمبر 2022 – أبريل 2023",
          description: "كتابة كود نظيف وواضح ومختبر جيداً لمشاريع متنوعة. إدارة برمجة البرمجيات وتطوير الوثائق.",
        },
      ],
    },
    internships: {
      title: "التدريبات والمنح",
      internships: [
        {
          organization: "معهد تكنولوجيا المعلومات (ITI)",
          program: "منحة مطور ويب متكامل .NET",
          period: "نوفمبر 2024 – مارس 2025",
          duration: "4 أشهر",
          description:
            "منحة مطور الويب المتكامل .NET من ITI (التابع لوزارة الاتصالات وتكنولوجيا المعلومات المصرية) هو برنامج مرموق لمدة 4 أشهر مصمم لسد الفجوة بين الأكاديمية والصناعة.",
          achievements: [
            "قائد فريق لمشروع التخرج SolveSmart_AI",
            "تم تكريمي كأحد أفضل 10 طلاب في الدفعة",
            "قدت فريق من 4 مطورين في تطوير مشروع مدعوم بالذكاء الاصطناعي",
          ],
          certificate: "/images/iti-certificate.png",
        },
        {
          organization: "مبادرة رواد مصر الرقمية - DEPI",
          program: "دبلوم تطوير الويب .NET",
          period: "أبريل 2024 – نوفمبر 2024",
          duration: "6 أشهر",
          description:
            "منحة شباب مصر الرقمية من NTI ووزارة الاتصالات هو برنامج ممول بالكامل لمدة 6 أشهر يقدم تدريباً في مجالات تكنولوجيا المعلومات عالية الطلب.",
          achievements: [
            "قائد فريق لتنسيق الدفعة",
            "أكملت تدريب شامل في تطوير .NET",
            "طورت منصة Qayimli للتقييم كمشروع تخرج",
          ],
          certificate: "/images/depi-certificate.png",
        },
      ],
    },
    projects: {
      title: "المشاريع المميزة",
      viewProject: "عرض المشروع",
      projects: [
        {
          title: "SolveSmart_AI",
          description: "نظام مبتكر مدعوم بالذكاء الاصطناعي ينتج مشاكل برمجية وحلولها تلقائياً.",
          tech: ["C#", ".NET Core", "SQL Server", "Angular", "OpenAI API"],
          type: "مشروع التخرج - ITI",
          slug: "solvesmart-ai",
          images: [
            "/images/solvesmart/home.png",
            "/images/solvesmart/problems.png",
            "/images/solvesmart/problem-details.png",
            "/images/solvesmart/solution.png",
            "/images/solvesmart/create-problem.png",
          ],
        },
        {
          title: "موقع AZ International",
          description: "موقع شامل لخدمات الاستشارات الهندسية مع نظام التحقق من الشهادات.",
          tech: ["ASP.NET Core", "Next.js", "Tailwind CSS", "SQL Server"],
          type: "مشروع حر",
          slug: "az-international",
          images: [
            "/images/az-international/home.png",
            "/images/az-international/services.png",
            "/images/az-international/certificate-verification.png",
            "/images/az-international/admin-panel.png",
            "/images/az-international/search-results.png",
          ],
        },
        {
          title: "منصة Qayimli للتقييم",
          description: "منصة شاملة لتقييم ومراجعة المنتجات مع مصادقة JWT وتكامل خدمات Google.",
          tech: ["ASP.NET Core", "Angular", "SQL Server", "JWT"],
          type: "مشروع التخرج - DEBI",
          slug: "qayimli",
        },
      ],
    },
    skills: {
      title: "المهارات التقنية",
      backend: "تقنيات الخادم",
      frontend: "تقنيات الواجهة",
      other: "تقنيات أخرى",
    },
    contact: {
      title: "تواصل معي",
      description: "أنا دائماً منفتح لمناقشة الفرص الجديدة والمشاريع المثيرة للاهتمام.",
      email: "راسلني",
      phone: "اتصل بي",
      location: "القاهرة، مصر",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über mich",
      experience: "Erfahrung",
      internships: "Praktika",
      projects: "Projekte",
      skills: "Fähigkeiten",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hallo, ich bin",
      role: "Full Stack Entwickler",
      description:
        "Ich bin ein .NET-Entwickler mit über 2 Jahren Erfahrung in der Bereitstellung hochwertiger Softwarelösungen. Meine Reise umfasst Freelance-Projekte, Teamarbeit und Unternehmensrollen.",
      hireMe: "Stellen Sie mich ein",
      downloadCV: "Lebenslauf herunterladen",
    },
    about: {
      title: "Über mich",
      description:
        "Als Fullstack-Entwickler mit über einem Jahr praktischer Erfahrung zeichne ich mich darin aus, komplexe Programmierherausforderungen mit .Net zu lösen und innovative, benutzerfokussierte Lösungen zu liefern. Meine professionelle Laufbahn zeichnet sich durch ausgeprägte Führungsqualitäten und außergewöhnliche Kommunikationsfähigkeiten aus. Ich war Teamleiter für das Abschlussprojekt SolveSmart_AI am ITI, wo ich erfolgreich ein Team von 4 Entwicklern koordinierte, um eine KI-gestützte Programmierlösung zu erstellen. Darüber hinaus wurde ich geehrt, als Teamleiter für meine Kohorte zu fungieren und wurde unter den Top 10 Studenten anerkannt, was mein Engagement für Exzellenz und meinen kollaborativen Führungsansatz widerspiegelt. Meine Fähigkeit, komplexe technische Konzepte klar zu kommunizieren, kombiniert mit meinen natürlichen Führungsqualitäten, ermöglicht es mir, die Kluft zwischen technischen Teams und Stakeholdern effektiv zu überbrücken.",
      education: "Bildung",
      degree: "Bachelor in Rechnungswesen und Finanzmanagement",
      university: "Fakultät für Handel, Al-Azhar Universität",
      period: "Aug 2018 – Juni 2022",
    },
    experience: {
      title: "Berufserfahrung",
      current: "Aktuell",
      experiences: [
        {
          company: "AZ International - Ingenieur- und Technische Beratung",
          position: "Full Stack Entwickler (Freelance)",
          period: "April 2025 - Gegenwart",
          description:
            "Entwicklung einer umfassenden Website für Ingenieurberatungsdienste mit Zertifizierungsverifizierungssystem. Erstellung einer Übersicht über Unternehmensdienstleistungen und Implementierung eines Mechanismus zur Zertifikatsverifizierung und Teilnehmersuchfunktionalität.",
        },
        {
          company: "Ewoks IT Solutions",
          position: "ERP-Berater & Technischer Support",
          period: "Nov 2023 – Oktober 2024",
          description:
            "Spezialisiert auf die Rationalisierung von Geschäftsprozessen durch Implementierung und Optimierung von ERP-Systemen.",
        },
        {
          company: "Beta Integration Company",
          position: "Software-Entwickler",
          period: "Sep 2022 – April 2023",
          description:
            "Schrieb sauberen, klaren und gut getesteten Code für verschiedene Projekte. Verwaltete Softwareprogrammierung und Dokumentationsentwicklung.",
        },
      ],
    },
    internships: {
      title: "Praktika & Ausbildung",
      internships: [
        {
          organization: "Information Technology Institute (ITI)",
          program: "Full Stack Developer .NET Stipendium",
          period: "Nov 2024 – Mar 2025",
          duration: "4 Monate",
          description:
            "Das Full Stack Developer .NET Stipendium von ITI ist ein prestigeträchtiges 4-monatiges Programm, das die Lücke zwischen Akademie und Industrie schließen soll.",
          achievements: [
            "Teamleiter für Abschlussprojekt SolveSmart_AI",
            "Als Top 10 Student der Kohorte anerkannt",
            "Leitete Team von 4 Entwicklern in KI-gestützter Projektentwicklung",
          ],
          certificate: "/images/iti-certificate.png",
        },
        {
          organization: "Digital Egypt Pioneers Initiative - DEPI",
          program: ".NET Web Development Diplom",
          period: "April 2024 – Nov 2024",
          duration: "6 Monate",
          description:
            "Das Digital Egypt Youth Stipendium ist ein 6-monatiges, vollfinanziertes Programm mit Training in gefragten IKT-Bereichen.",
          achievements: [
            "Teamleiter für Kohortenkoordination",
            "Abgeschlossene umfassende .NET-Entwicklungsschulung",
            "Entwickelte Qayimli-Bewertungsplattform als Abschlussprojekt",
          ],
          certificate: "/images/depi-certificate.png",
        },
      ],
    },
    projects: {
      title: "Ausgewählte Projekte",
      viewProject: "Projekt anzeigen",
      projects: [
        {
          title: "SolveSmart_AI",
          description:
            "Ein innovatives KI-gestütztes System, das automatisch Programmierprobleme und Lösungen mit künstlicher Intelligenz generiert.",
          tech: ["C#", ".NET Core", "SQL Server", "Angular", "OpenAI API"],
          type: "Abschlussprojekt - ITI",
          slug: "solvesmart-ai",
          images: [
            "/images/solvesmart/home.png",
            "/images/solvesmart/problems.png",
            "/images/solvesmart/problem-details.png",
            "/images/solvesmart/solution.png",
            "/images/solvesmart/create-problem.png",
          ],
        },
        {
          title: "AZ International Website",
          description: "Eine umfassende Website für Ingenieurberatungsdienste mit Zertifizierungsverifizierungssystem.",
          tech: ["ASP.NET Core", "Next.js", "Tailwind CSS", "SQL Server"],
          type: "Freelance-Projekt",
          slug: "az-international",
          images: [
            "/images/az-international/home.png",
            "/images/az-international/services.png",
            "/images/az-international/certificate-verification.png",
            "/images/az-international/admin-panel.png",
            "/images/az-international/search-results.png",
          ],
        },
        {
          title: "Qayimli Bewertungsplattform",
          description:
            "Eine umfassende Plattform zur Bewertung und Rezension von Produkten mit JWT-Authentifizierung und Google-Services-Integration.",
          tech: ["ASP.NET Core", "Angular", "SQL Server", "JWT"],
          type: "Abschlussprojekt - DEBI",
          slug: "qayimli",
        },
      ],
    },
    skills: {
      title: "Technische Fähigkeiten",
      backend: "Backend-Technologien",
      frontend: "Frontend-Technologien",
      other: "Andere Technologien",
    },
    contact: {
      title: "Kontakt aufnehmen",
      description: "Ich bin immer offen für Diskussionen über neue Möglichkeiten und interessante Projekte.",
      email: "E-Mail senden",
      phone: "Anrufen",
      location: "Kairo, Ägypten",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      experience: "Expérience",
      internships: "Stages",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
    },
    hero: {
      greeting: "Salut, je suis",
      role: "Développeur Full Stack",
      description:
        "Je suis un développeur .NET avec plus de 2 ans d'expérience dans la livraison de solutions logicielles de haute qualité. Mon parcours comprend des projets freelance, du travail d'équipe et des rôles d'entreprise.",
      hireMe: "Embauchez-moi",
      downloadCV: "Télécharger CV",
    },
    about: {
      title: "À propos de moi",
      description:
        "En tant que développeur Fullstack avec plus d'un an d'expérience pratique, j'excelle dans la résolution de défis de codage complexes en utilisant .Net et la livraison de solutions innovantes centrées sur l'utilisateur. Mon parcours professionnel se distingue par de fortes capacités de leadership et des compétences en communication exceptionnelles. J'ai été chef d'équipe pour le projet de fin d'études SolveSmart_AI à l'ITI, où j'ai coordonné avec succès une équipe de 4 développeurs pour créer une solution de programmation alimentée par l'IA. De plus, j'ai eu l'honneur d'être chef d'équipe pour ma promotion et j'ai été reconnu parmi les 10 meilleurs étudiants, ce qui reflète mon engagement envers l'excellence et mon approche de leadership collaborative. Ma capacité à communiquer clairement des concepts techniques complexes, combinée à mes qualités de leadership naturelles, me permet de combler efficacement le fossé entre les équipes techniques et les parties prenantes.",
      education: "Éducation",
      degree: "Licence en Comptabilité et Gestion Financière",
      university: "Faculté de Commerce, Université Al-Azhar",
      period: "Août 2018 – Juin 2022",
    },
    experience: {
      title: "Expérience Professionnelle",
      current: "Actuel",
      experiences: [
        {
          company: "AZ International - Conseil en Ingénierie et Technique",
          position: "Développeur Full Stack (Freelance)",
          period: "Avril 2025 - Présent",
          description:
            "Développement d'un site web complet pour les services de conseil en ingénierie avec système de vérification de certification. Création d'un aperçu des services de l'entreprise et implémentation d'un mécanisme de vérification des certificats et de fonctionnalité de recherche des participants.",
        },
        {
          company: "Ewoks IT Solutions",
          position: "Consultant ERP & Support Technique",
          period: "Nov 2023 – Octobre 2024",
          description:
            "Spécialisé dans la rationalisation des processus métier grâce à l'implémentation et l'optimisation des systèmes ERP.",
        },
        {
          company: "Beta Integration Company",
          position: "Développeur Logiciel",
          period: "Sep 2022 – Avril 2023",
          description:
            "Écrit du code propre, clair et bien testé pour divers projets. Géré la programmation logicielle et le développement de documentation.",
        },
      ],
    },
    internships: {
      title: "Stages & Formation",
      internships: [
        {
          organization: "Information Technology Institute (ITI)",
          program: "Bourse Développeur Full Stack .NET",
          period: "Nov 2024 – Mar 2025",
          duration: "4 mois",
          description:
            "La bourse Développeur Full Stack .NET d'ITI est un programme prestigieux de 4 mois conçu pour combler l'écart entre l'académie et l'industrie.",
          achievements: [
            "Chef d'équipe pour le projet de fin d'études SolveSmart_AI",
            "Reconnu comme étudiant Top 10 de la cohorte",
            "A dirigé une équipe de 4 développeurs dans le développement de projet alimenté par l'IA",
          ],
          certificate: "/images/iti-certificate.png",
        },
        {
          organization: "Digital Egypt Pioneers Initiative - DEPI",
          program: "Diplôme de Développement Web .NET",
          period: "Avril 2024 – Nov 2024",
          duration: "6 mois",
          description:
            "La bourse Digital Egypt Youth est un programme de 6 mois entièrement financé offrant une formation dans des domaines TIC très demandés.",
          achievements: [
            "Chef d'équipe pour la coordination de cohorte",
            "Formation complète en développement .NET terminée",
            "Développé la plateforme d'évaluation Qayimli comme projet de fin d'études",
          ],
          certificate: "/images/depi-certificate.png",
        },
      ],
    },
    projects: {
      title: "Projets en Vedette",
      viewProject: "Voir le Projet",
      projects: [
        {
          title: "SolveSmart_AI",
          description:
            "Un système innovant alimenté par l'IA qui génère automatiquement des problèmes de programmation et des solutions utilisant l'intelligence artificielle.",
          tech: ["C#", ".NET Core", "SQL Server", "Angular", "OpenAI API"],
          type: "Projet de Fin d'Études - ITI",
          slug: "solvesmart-ai",
          images: [
            "/images/solvesmart/home.png",
            "/images/solvesmart/problems.png",
            "/images/solvesmart/problem-details.png",
            "/images/solvesmart/solution.png",
            "/images/solvesmart/create-problem.png",
          ],
        },
        {
          title: "Site Web AZ International",
          description:
            "Un site web complet pour les services de conseil en ingénierie avec système de vérification de certification.",
          tech: ["ASP.NET Core", "Next.js", "Tailwind CSS", "SQL Server"],
          type: "Projet Freelance",
          slug: "az-international",
          images: [
            "/images/az-international/home.png",
            "/images/az-international/services.png",
            "/images/az-international/certificate-verification.png",
            "/images/az-international/admin-panel.png",
            "/images/az-international/search-results.png",
          ],
        },
        {
          title: "Plateforme d'Évaluation Qayimli",
          description:
            "Une plateforme complète pour évaluer et examiner les produits avec authentification JWT et intégration des services Google.",
          tech: ["ASP.NET Core", "Angular", "SQL Server", "JWT"],
          type: "Projet de Fin d'Études - DEBI",
          slug: "qayimli",
        },
      ],
    },
    skills: {
      title: "Compétences Techniques",
      backend: "Technologies Backend",
      frontend: "Technologies Frontend",
      other: "Autres Technologies",
    },
    contact: {
      title: "Entrer en Contact",
      description: "Je suis toujours ouvert à discuter de nouvelles opportunités et de projets intéressants.",
      email: "M'envoyer un Email",
      phone: "M'appeler",
      location: "Le Caire, Égypte",
    },
  },
}

const skillsData = {
  backend: [
    { name: "C#", level: 90 },
    { name: "ASP.NET Core", level: 85 },
    { name: "Entity Framework", level: 80 },
    { name: "SQL Server", level: 85 },
    { name: "Web API", level: 88 },
  ],
  frontend: [
    { name: "Angular", level: 75 },
    { name: "TypeScript", level: 70 },
    { name: "HTML5/CSS3", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "Bootstrap", level: 80 },
  ],
  other: [
    { name: "Git/GitHub", level: 80 },
    { name: "SOLID Principles", level: 85 },
    { name: "Design Patterns", level: 75 },
    { name: "AI API Integration", level: 70 },
  ],
}

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const slideInVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

const scaleInVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState<"en" | "ar" | "de" | "fr">("en")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const t = translations[language]

  useEffect(() => {
    // Save theme and language to localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light")
    localStorage.setItem("language", language)
  }, [isDark, language])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "internships", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Abdulrahman <span className="text-blue-600">Neam</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === key
                      ? "text-blue-600"
                      : isDark
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {value}
                  {activeSection === key && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as "en" | "ar" | "de" | "fr")}
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
              </div>

              {/* Theme Toggle */}
              <Button variant="ghost" size="sm" onClick={() => setIsDark(!isDark)} className="p-2">
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`md:hidden mt-4 py-4 border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}
              >
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === key
                        ? "text-blue-600"
                        : isDark
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className={`min-h-screen flex items-center pt-20 ${isDark ? "bg-gray-900" : "bg-gradient-to-br from-blue-50 to-indigo-100"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={language === "ar" ? "text-right" : "text-left"}
            >
              <motion.h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 px-4 ${isDark ? "text-white" : "text-gray-900"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {t.hero.greeting} <span className="text-blue-600">Abdulrahman</span>
              </motion.h1>
              <motion.h2
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 px-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {t.hero.role}
              </motion.h2>
              <motion.p
                className={`text-base sm:text-lg mb-8 leading-relaxed px-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {t.hero.description}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 justify-center px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                  {t.hero.hireMe}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => generateCV(language)}
                  className={`w-full sm:w-auto ${isDark ? "border-gray-600 text-white hover:bg-gray-800" : "border-gray-300"}`}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t.hero.downloadCV}
                </Button>
              </motion.div>

              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                {[
                  { icon: Github, href: "https://github.com/abdulrahmanneam" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/abdoneam" },
                  { icon: Instagram, href: "https://www.instagram.com/abdo.neam/" },
                  { icon: Twitter, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl">
                  <img src="/images/profile.jpg" alt="Abdulrahman Neam" className="w-full h-full object-cover" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-400 opacity-30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -inset-8 rounded-full border border-dotted border-blue-300 opacity-20"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDark ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2
              variants={itemVariants}
              className={`text-4xl lg:text-5xl font-bold text-center mb-16 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {t.about.title}
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div variants={itemVariants}>
                <Card className={`${isDark ? "bg-gray-700 border-gray-600" : "bg-white"}`}>
                  <CardContent className="p-6 lg:p-8">
                    <p
                      className={`text-base lg:text-lg leading-relaxed mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}
                    >
                      {t.about.description}
                    </p>

                    <Separator className="my-6" />

                    <div>
                      <h3 className={`text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                        {t.about.education}
                      </h3>
                      <div className="space-y-2">
                        <p className={`font-medium ${isDark ? "text-gray-200" : "text-gray-800"}`}>{t.about.degree}</p>
                        <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>{t.about.university}</p>
                        <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>{t.about.period}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Code, label: "Projects", value: "15+" },
                    { icon: Calendar, label: "Experience", value: "2+ Years" },
                    { icon: Building, label: "Companies", value: "3" },
                    { icon: Globe2, label: "Languages", value: "4" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={scaleInVariants}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        transition: { duration: 0.2 },
                      }}
                      className={`p-6 rounded-lg text-center cursor-pointer ${isDark ? "bg-gray-700" : "bg-gray-50"}`}
                    >
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                      >
                        <stat.icon className={`w-8 h-8 mx-auto mb-3 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                      </motion.div>
                      <motion.div
                        className={`text-2xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2
              variants={itemVariants}
              className={`text-4xl lg:text-5xl font-bold text-center mb-16 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {t.experience.title}
            </motion.h2>

            <div className="max-w-4xl mx-auto">
              {t.experience.experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants} className="relative">
                  <div
                    className={`flex items-start space-x-6 pb-12 ${index !== t.experience.experiences.length - 1 ? "border-l-2 border-blue-600 ml-6" : ""}`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center -ml-6 relative z-10">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <Card className={`flex-1 ${isDark ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
                      <CardHeader className="p-4 lg:p-6">
                        <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <CardTitle className={`text-lg lg:text-xl ${isDark ? "text-white" : "text-gray-900"}`}>
                              {exp.position}
                            </CardTitle>
                            <CardDescription
                              className={`text-base lg:text-lg font-medium ${isDark ? "text-blue-400" : "text-blue-600"}`}
                            >
                              {exp.company}
                            </CardDescription>
                          </div>
                          <Badge variant="secondary" className="text-xs lg:text-sm w-fit">
                            {exp.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 lg:p-6 pt-0">
                        <p className={`text-sm lg:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                          {exp.description}
                        </p>
                        <div className="mt-4">
                          <Link
                            href={`/experience/${exp.company.toLowerCase().includes("az") ? "az-international" : exp.company.toLowerCase().includes("ewoks") ? "ewoks-it" : "beta-integration"}`}
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="group-hover:bg-blue-600 group-hover:text-white transition-colors"
                            >
                              Learn More
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className={`py-20 ${isDark ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2
              variants={itemVariants}
              className={`text-4xl lg:text-5xl font-bold text-center mb-16 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {t.internships.title}
            </motion.h2>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              {t.internships.internships.map((internship, index) => (
                <motion.div key={index} variants={itemVariants} className="group">
                  <Card
                    className={`h-full ${isDark ? "bg-gray-700 border-gray-600" : "bg-white"} transition-all duration-300 group-hover:shadow-xl`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <CardTitle className={`text-xl mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                            {internship.program}
                          </CardTitle>
                          <CardDescription
                            className={`text-lg font-medium ${isDark ? "text-blue-400" : "text-blue-600"}`}
                          >
                            {internship.organization}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          {internship.duration}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-500 mb-4">{internship.period}</div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className={`leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        {internship.description}
                      </p>

                      <div>
                        <h4 className={`font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {internship.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                        <img
                          src={internship.certificate || "/placeholder.svg"}
                          alt={`${internship.organization} Certificate`}
                          className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Leadership Recognition */}
            <motion.div variants={itemVariants} className="mt-16 max-w-4xl mx-auto">
              <Card
                className={`${isDark ? "bg-gradient-to-r from-blue-900 to-purple-900 border-blue-700" : "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200"}`}
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                        Leadership Excellence
                      </h3>
                      <p className={`text-lg leading-relaxed mb-6 ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                        Recognized for outstanding leadership and exceptional contributions as Team Leader in the
                        Digital Egypt Pioneers Program. This achievement reflects my ability to inspire, coordinate, and
                        drive teams toward successful project completion.
                      </p>
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                          Team Leader
                        </Badge>
                        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                          Top 10 Student
                        </Badge>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="relative">
                        <img
                          src="/images/leadership-certificate.png"
                          alt="Leadership Certificate"
                          className="w-full max-w-sm rounded-lg shadow-xl"
                        />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                          <Star className="w-4 h-4 text-yellow-800" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Communication Skills Highlight */}
            <motion.div variants={itemVariants} className="mt-12 max-w-4xl mx-auto">
              <Card className={`${isDark ? "bg-gray-700 border-gray-600" : "bg-white"}`}>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                      <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                        Communication & Presentation Skills
                      </h3>
                      <p className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        My professional journey is enhanced by strong communication abilities and confident presentation
                        skills. I regularly deliver technical presentations, facilitate team meetings, and effectively
                        communicate complex concepts to diverse audiences. This image captures me during a business
                        development presentation, showcasing my comfort and professionalism in public speaking
                        environments.
                      </p>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center">
                      <img
                        src="/images/presentation-photo.png"
                        alt="Abdulrahman presenting"
                        className="w-full max-w-sm rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isDark ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2
              variants={itemVariants}
              className={`text-4xl lg:text-5xl font-bold text-center mb-16 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {t.projects.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.projects.projects.map((project, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} className="group">
                  <Card
                    className={`h-full ${isDark ? "bg-gray-700 border-gray-600" : "bg-white"} transition-all duration-300 group-hover:shadow-xl`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className={`${isDark ? "text-white" : "text-gray-900"}`}>{project.title}</CardTitle>
                        <ExternalLink
                          className={`w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-500"} group-hover:text-blue-600 transition-colors`}
                        />
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {project.type}
                      </Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Link href={`/projects/${project.slug}`}>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                        >
                          {t.projects.viewProject}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2
              variants={itemVariants}
              className={`text-4xl lg:text-5xl font-bold text-center mb-16 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {t.skills.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                <motion.div key={category} variants={itemVariants}>
                  <Card className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
                    <CardHeader>
                      <CardTitle className={`text-center ${isDark ? "text-white" : "text-gray-900"}`}>
                        {category === "backend"
                          ? t.skills.backend
                          : category === "frontend"
                            ? t.skills.frontend
                            : t.skills.other}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {skills.map((skill, index) => (
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
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDark ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2
              variants={itemVariants}
              className={`text-4xl lg:text-5xl font-bold text-center mb-8 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {t.contact.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className={`text-center text-lg mb-16 ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              {t.contact.description}
            </motion.p>

            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: Mail,
                  title: t.contact.email,
                  value: "abdulrahmanneam@gmail.com",
                  href: "mailto:abdulrahmanneam@gmail.com",
                },
                {
                  icon: Phone,
                  title: t.contact.phone,
                  value: "+20 102 692 4240",
                  href: "tel:+201026924240",
                },
                {
                  icon: MapPin,
                  title: t.contact.location,
                  value: "Cairo, Egypt",
                  href: "#",
                },
              ].map((contact, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.05 }} className="text-center">
                  <Card
                    className={`${isDark ? "bg-gray-700 border-gray-600" : "bg-white"} transition-all duration-300 hover:shadow-lg`}
                  >
                    <CardContent className="p-8">
                      <contact.icon
                        className={`w-12 h-12 mx-auto mb-4 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                      />
                      <h3 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                        {contact.title}
                      </h3>
                      <a
                        href={contact.href}
                        className={`${isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"} transition-colors duration-200`}
                      >
                        {contact.value}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 ${isDark ? "bg-gray-900 border-t border-gray-700" : "bg-gray-50 border-t border-gray-200"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            <motion.div
              className="flex space-x-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Github, href: "https://github.com/abdulrahmanneam" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/abdoneam" },
                { icon: Instagram, href: "https://www.instagram.com/abdo.neam/" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={slideInVariants}
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full ${isDark ? "bg-gray-800 text-gray-300 hover:text-white" : "bg-white text-gray-600 hover:text-gray-900"} transition-colors duration-300 shadow-md`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors duration-200`}
                >
                  {value}
                </button>
              ))}
            </div>

            <div className={`text-center text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>
              © 2025 Abdulrahman Yahia Neam. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
      {/* WhatsApp Float Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.a
          href="https://wa.me/201031075632"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  )
}
