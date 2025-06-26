import jsPDF from "jspdf"

export const generateCV = (language: "en" | "ar" | "de" | "fr" = "en") => {
  const doc = new jsPDF()

  // Set font
  doc.setFont("helvetica")

  // Header
  doc.setFontSize(24)
  doc.setTextColor(59, 130, 246) // Blue color
  doc.text("Abdulrahman Yahia Neam", 20, 30)

  doc.setFontSize(16)
  doc.setTextColor(75, 85, 99) // Gray color
  doc.text("Full Stack Developer", 20, 45)

  // Contact Information
  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  doc.text("Cairo, Egypt | +20 102 692 4240 | abdulrahmanneam@gmail.com", 20, 55)
  doc.text("LinkedIn: linkedin.com/in/abdoneam | GitHub: https://github.com/abdulrahmanYneam7O2023?tab=repositories", 20, 62)

  // Line separator
  doc.setLineWidth(0.5)
  doc.setDrawColor(59, 130, 246)
  doc.line(20, 70, 190, 70)

  let yPosition = 85

  // Objective
  doc.setFontSize(14)
  doc.setTextColor(59, 130, 246)
  doc.text("OBJECTIVE", 20, yPosition)
  yPosition += 10

  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  const objectiveText = `As a Fullstack Developer with over two years of hands-on experience, 
  I specialize in delivering innovative, user-focused solutions across the entire development stack. With three years of dedicated experience working with .NET as a Backend Developer, 
  I’ve built a strong foundation in crafting robust, scalable applications. Throughout my journey,
   I’ve successfully led and contributed to several impactful projects. 
  I’m recognized for my creative problem-solving abilities, meticulous attention to detail, and a passion for continuous learning. Always eager to grow, 
  I actively pursue opportunities to deepen my expertise and drive meaningful contributions to forward-thinking teams.
`

  const splitObjective = doc.splitTextToSize(objectiveText, 170)
  doc.text(splitObjective, 20, yPosition)
  yPosition += splitObjective.length * 5 + 10

  // Work Experience
  doc.setFontSize(14)
  doc.setTextColor(59, 130, 246)
  doc.text("WORK EXPERIENCE", 20, yPosition)
  yPosition += 15

  // Ewoks IT Solutions
  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)
  doc.setFont("helvetica", "bold")
  doc.text("Ewoks IT Solutions", 20, yPosition)
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.text("Nov 2023 - October 2024", 140, yPosition)
  yPosition += 7

  doc.setFont("helvetica", "italic")
  doc.text("ERP Developer & Technical Support", 20, yPosition)
  yPosition += 10

  doc.setFont("helvetica", "normal")
  const ewoksDescription = `• Specialized in streamlining business processes through the implementation and optimization of ERP systems
• Analyzed organizational needs and configured ERP solutions to enhance operational efficiency
• Ensured seamless integration and maximized resource utilization
• Offered technical support in resolving software issues, managed data protection and recovery`

  const splitEwoks = doc.splitTextToSize(ewoksDescription, 170)
  doc.text(splitEwoks, 20, yPosition)
  yPosition += splitEwoks.length * 5 + 10

  // Beta Integration
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("Beta Integration Company", 20, yPosition)
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.text("Sep 2022 - April 2023", 140, yPosition)
  yPosition += 7

  doc.setFont("helvetica", "italic")
  doc.text("Software Developer", 20, yPosition)
  yPosition += 10

  doc.setFont("helvetica", "normal")
  const betaDescription = `• Wrote clean, clear and well-tested code for various projects
• Managed software programming and documentation development
• Verified and resolved bug reports and issues
• Helped users with application usage and fixed their problems
• Increased productivity by using software to organize, track bug patches and add feature requests`

  const splitBeta = doc.splitTextToSize(betaDescription, 170)
  doc.text(splitBeta, 20, yPosition)
  yPosition += splitBeta.length * 5 + 15

  // Freelancing
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("Freelancing (Full Stack & Desktop Developer)", 20, yPosition)
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.text("Aug 2021 - Jul 2025", 140, yPosition)
  yPosition += 10

  doc.setFont("helvetica", "bold")
  doc.text("AZ INTERNATIONAL - Engineering & Technical Consulting", 20, yPosition)
  yPosition += 7

  doc.setFont("helvetica", "normal")
  const azDescription = `A website project for providing services to AZ International, designed to create an overview of the company,
its services, and the certifications issued to participants who have enrolled in its programs. Additionally, it offers
a mechanism for individuals who have received a certificate from the company to easily search and verify their
certification. Technologies: ASP.NET Core Web API, Microsoft SQL Server, Entity Framework Core, Next.js, Tailwind CSS`

  const splitAZ = doc.splitTextToSize(azDescription, 170)
  doc.text(splitAZ, 20, yPosition)
  yPosition += splitAZ.length * 5 + 15

  // Check if we need a new page
  if (yPosition > 250) {
    doc.addPage()
    yPosition = 30
  }

  // Internships
  doc.setFontSize(14)
  doc.setTextColor(59, 130, 246)
  doc.text("INTERNSHIPS", 20, yPosition)
  yPosition += 15

  // ITI
  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)
  doc.setFont("helvetica", "bold")
  doc.text("Information Technology Institute (ITI) - Full Stack Developer .NET", 20, yPosition)
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.text("Nov 2024 - May 2025", 140, yPosition)
  yPosition += 7

  doc.text("Graduation Project: SolveSmart_AI", 20, yPosition)
  yPosition += 5

  const solveSmartDesc = `An innovative system entirely powered by Artificial Intelligence that leverages AI to automatically generate
programming problems based on user descriptions and uses AI to solve these problems.
Technologies: C#, .NET Core, SQL Server, ASP.NET Web API, OpenAI API, DeepSeek API, Angular, TypeScript`

  const splitSolveSmart = doc.splitTextToSize(solveSmartDesc, 170)
  doc.text(splitSolveSmart, 20, yPosition)
  yPosition += splitSolveSmart.length * 5 + 10

  // DEPI
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text(".NET Web Development Diploma at Digital Egypt Builders Initiative - DEBI", 20, yPosition)
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.text("April 2024 - Nov 2024", 140, yPosition)
  yPosition += 7

  doc.text("Graduation Project: Qayimli", 20, yPosition)
  yPosition += 5

  const qayimliDesc = `A comprehensive platform designed for rating and reviewing products, allowing users to add evaluations and
vote on items. The project includes API development with JWT authentication, utilizing SQL Server for reliable
database management, and integrates Google services for easy sign-in.
Technologies: C#, .NET Core, SQL Server, ASP.NET Web API, Angular, TypeScript, Bootstrap`

  const splitQayimli = doc.splitTextToSize(qayimliDesc, 170)
  doc.text(splitQayimli, 20, yPosition)
  yPosition += splitQayimli.length * 5 + 15

  // Education
  doc.setFontSize(14)
  doc.setTextColor(59, 130, 246)
  doc.text("EDUCATION", 20, yPosition)
  yPosition += 15

  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)
  doc.setFont("helvetica", "bold")
  doc.text("Bachelor of Accounting and Financial Management", 20, yPosition)
  yPosition += 7

  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.text("Faculty of Commerce, Al-Azhar University", 20, yPosition)
  doc.text("Aug 2018 - June 2022", 140, yPosition)
  yPosition += 15

  // Skills
  doc.setFontSize(14)
  doc.setTextColor(59, 130, 246)
  doc.text("TECHNICAL SKILLS", 20, yPosition)
  yPosition += 15

  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  doc.setFont("helvetica", "bold")
  doc.text("Backend Technologies:", 20, yPosition)
  doc.setFont("helvetica", "normal")
  doc.text("C#, ASP.NET Core Web API, ASP.NET MVC, Entity Framework, LINQ, SQL Server", 70, yPosition)
  yPosition += 8

  doc.setFont("helvetica", "bold")
  doc.text("Frontend Technologies:", 20, yPosition)
  doc.setFont("helvetica", "normal")
  doc.text("HTML, CSS, JavaScript, Bootstrap, TypeScript, Angular", 70, yPosition)
  yPosition += 8

  doc.setFont("helvetica", "bold")
  doc.text("Other Technologies:", 20, yPosition)
  doc.setFont("helvetica", "normal")
  doc.text("OOP, Design Patterns, SOLID Principles, Git/GitHub, AI API Integration", 70, yPosition)
  yPosition += 15

  // Additional Information
  doc.setFontSize(14)
  doc.setTextColor(59, 130, 246)
  doc.text("ADDITIONAL INFORMATION", 20, yPosition)
  yPosition += 15

  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  doc.text("Military Service: Exempt", 20, yPosition)
  yPosition += 5
  doc.text("Language: English B1 - Berlitz Egypt Business English Track", 20, yPosition)
  yPosition += 5
  doc.text("Marital Status: Single", 20, yPosition)

  // Footer
  doc.setFontSize(8)
  doc.setTextColor(128, 128, 128)
  doc.text("Generated from abdulrahmanneam.dev", 20, 285)
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 140, 285)

  // Save the PDF
  doc.save("Abdulrahman_Neam_CV.pdf")
}
