"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Code2,
  Download,
  Trophy,
  BookOpen,
  Send,
} from "lucide-react"

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border/50 shadow-lg shadow-primary/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Ashwani Kumar Tiwari
          </a>
          <div className="hidden md:flex items-center gap-1">
            <a
              href="#about"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
            >
              About
            </a>
            <a
              href="#experience"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
            >
              Skills
            </a>
            <a
              href="#resume"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="ml-2 px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 hover:scale-105"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-24 px-6 overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
          <img src="/hero-tech-background.jpg" alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Ashwani Kumar Tiwari</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl text-pretty">
                Software Engineer | Full-Stack Developer Intern specializing in MERN stack. Building scalable,
                high-performance applications with expertise in competitive programming. 1500+ problems solved across
                platforms.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="group" asChild>
                  <a href="#projects">
                    View Projects
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="group bg-transparent" asChild>
                  <a href="mailto:ashwani01t@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative md:justify-self-end">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />

                {/* Profile image with border */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                  <img
                    src="/images/whatsapp-20image-202025-12-19-20at-2018.jpeg"
                    alt="Ashwani Kumar Tiwari"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/10 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-muted/20 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">About Me</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  I'm a B.Tech IT student at Harcourt Butler Technical University (HBTU) with an 8.75 CGPA, passionate
                  about building robust, scalable applications that solve real-world problems.
                </p>
                <p>
                  My approach combines strong problem-solving fundamentals from competitive programming (Codeforces
                  Expert, CodeChef 3-Star) with practical full-stack development experience at Softsingh Ventures Pvt.
                  Ltd., where I boosted workflow efficiency by 25% and reduced API latency by 20%.
                </p>
                <p>
                  Whether it's optimizing database queries, implementing secure authentication with JWT and OAuth, or
                  solving complex algorithmic challenges, I bring a growth mindset and attention to detail to every
                  project.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="border-accent bg-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent">
                      <Code2 className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Technical Excellence</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Deep understanding of data structures, algorithms, and system design principles applied to
                        real-world development.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-accent bg-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent">
                      <Trophy className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Competitive Edge</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Proven problem-solving abilities through competitive programming achievements and consistent
                        practice.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-accent bg-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent">
                      <BookOpen className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Continuous Learning</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Always exploring new technologies, best practices, and software engineering patterns to deliver
                        better solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12">Experience</h2>
          <div className="space-y-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Software Development Intern</h3>
                    <p className="text-lg text-muted-foreground">Softsingh Ventures Pvt. Ltd.</p>
                  </div>
                  <div className="text-sm text-muted-foreground">Jun 2025 – Aug 2025</div>
                </div>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li className="flex gap-3">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>
                      Boosted workflow efficiency by 25% by developing and deploying full-stack features using React.js,
                      Node.js, Express.js, and MongoDB
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>
                      Reduced API latency by 20% through optimization of authentication, user management, and automation
                      REST APIs
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>
                      Enhanced platform security using JWT, Google OAuth, and Role-Based Access Control (RBAC)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>Improved database performance by 30% through MongoDB schema optimization and indexing</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>Integrated Cloudinary to deliver images and assets 18% faster</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>Worked via Git, GitHub PRs, and Agile sprints to deliver features ahead of deadlines</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">JWT</Badge>
                  <Badge variant="secondary">OAuth</Badge>
                  <Badge variant="secondary">Cloudinary</Badge>
                  <Badge variant="secondary">Git</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-muted/20 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 - Online Food Ordering Platform */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Online Food Ordering Platform</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A scalable MERN-based online food ordering platform supporting seamless browsing and real-time order
                  tracking with near-instant response times using Socket.IO.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Enabled real-time order updates with Socket.IO
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Integrated secure authentication with JWT and Google OAuth
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Reduced login failures by 40% with robust auth system
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Improved backend performance through MongoDB query optimization
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">React.js</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Express.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Socket.IO</Badge>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="group/btn bg-transparent" asChild>
                    <a href="https://github.com/Ashwanit101" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                      <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                  <Button size="sm" className="group/btn" asChild>
                    <a href="https://food-frontend-psi-khaki.vercel.app" target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 - Learning Management System */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Learning Management System</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A complete LMS using the MERN stack with dashboards for students, instructors, and administrators.
                  Features secure payment processing and optimized media delivery.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Developed scalable backend APIs for course management
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Integrated Razorpay for secure payment processing
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Used Cloudinary for optimized media and video delivery
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Implemented protected routing with JWT and Redux Toolkit
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">React.js</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Express.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Razorpay</Badge>
                  <Badge variant="outline">Cloudinary</Badge>
                  <Badge variant="outline">Redux</Badge>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="group/btn bg-transparent" asChild>
                    <a href="https://github.com/Ashwanit101" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                      <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                  <Button size="sm" className="group/btn" asChild>
                    <a href="https://learnify-frontend-xi-sand.vercel.app" target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 - Car Price Prediction */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Car Price Prediction | Machine Learning Project</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Built a predictive model to estimate car prices using features such as age, mileage, brand, fuel type,
                  and ownership history.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Implemented Linear Regression as a baseline model and optimized Random Forest using
                      cross-validation and hyperparameter tuning
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Evaluated model performance using MAE, MSE, and R2; achieved substantially higher accuracy with
                      Random Forest
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Conducted EDA and data preprocessing using Python (Scikit-Learn, Pandas, NumPy)
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Scikit-Learn</Badge>
                  <Badge variant="outline">Pandas</Badge>
                  <Badge variant="outline">NumPy</Badge>
                  <Badge variant="outline">Random Forest</Badge>
                  <Badge variant="outline">Linear Regression</Badge>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="group/btn bg-transparent" asChild>
                    <a
                      href="https://github.com/Ashwanit101/Car-Price-Prediction-using-Machine-Learning"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                      <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 - Hybrid Book Recommendation System */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Hybrid Book Recommendation System</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Developed a hybrid book recommender system combining SVD-based collaborative filtering and TF-IDF
                  content similarity.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Used the Book-Crossing dataset (1M+ ratings) to provide personalized book recommendations
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Reduced sparsity and cold-start issues through blended modeling
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Created an end-to-end ML pipeline for preprocessing, vectorization, similarity scoring, and Top-N
                      ranking
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Scikit-Learn</Badge>
                  <Badge variant="outline">SVD</Badge>
                  <Badge variant="outline">TF-IDF</Badge>
                  <Badge variant="outline">Pandas</Badge>
                  <Badge variant="outline">NumPy</Badge>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="group/btn bg-transparent" asChild>
                    <a
                      href="https://github.com/Ashwanit101/Book-recommender-System"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                      <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>C++</Badge>
                <Badge>JavaScript</Badge>
                <Badge>Python</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>React.js</Badge>
                <Badge>Redux Toolkit</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>HTML/CSS</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Backend & APIs</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Node.js</Badge>
                <Badge>Express.js</Badge>
                <Badge>REST APIs</Badge>
                <Badge>Socket.IO</Badge>
                <Badge>JWT</Badge>
                <Badge>OAuth</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>MongoDB</Badge>
                <Badge>MySQL</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Machine Learning & Data Science</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Scikit-learn</Badge>
                <Badge>Pandas</Badge>
                <Badge>NumPy</Badge>
                <Badge>Matplotlib</Badge>
                <Badge>Seaborn</Badge>
                <Badge>Random Forest</Badge>
                <Badge>Linear Regression</Badge>
                <Badge>SVD</Badge>
                <Badge>TF-IDF</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Cloud & Deployment</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>AWS (Basics)</Badge>
                <Badge>Vercel</Badge>
                <Badge>Netlify</Badge>
                <Badge>Cloudinary</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Tools & Practices</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Git</Badge>
                <Badge>CI/CD</Badge>
                <Badge>Microservices</Badge>
                <Badge>Agile</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Core Subjects</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>DSA</Badge>
                <Badge>Operating Systems</Badge>
                <Badge>OOP</Badge>
                <Badge>System Design</Badge>
                <Badge>Software Engineering</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-6 bg-muted/20 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-accent bg-accent/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent shrink-0">
                    <Trophy className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Codeforces Expert</h3>
                    <p className="text-muted-foreground mb-3">Peak Rating: 1640</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Ranked in top percentile globally. Achieved Rank 808 in Codeforces Round 1025 (Div 2) and Rank
                      1372 in Neowise Labs Contest 1.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent bg-accent/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent shrink-0">
                    <Trophy className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">CodeChef 3-Star</h3>
                    <p className="text-muted-foreground mb-3">Consistent Performance</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Regular participation in contests with focus on optimization and competitive coding techniques.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent bg-accent/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent shrink-0">
                    <Code2 className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1500+ Problems Solved</h3>
                    <p className="text-muted-foreground mb-3">LeetCode, Codeforces, CodeChef</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Top 1,000 ranks in multiple LeetCode contests. Comprehensive problem-solving practice across all
                      major DSA categories.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent bg-accent/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent shrink-0">
                    <Trophy className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Competitive Success</h3>
                    <p className="text-muted-foreground mb-3">Multiple Top Rankings</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Rank 600 in TCS CodeVita Round 2. Qualified JEE Advanced 2022 and JEE Main 2022 (AIR 30,435).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent bg-accent/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent shrink-0">
                    <BookOpen className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
                    <p className="text-muted-foreground mb-3">CGPA: 8.75/10</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      B.Tech in Information Technology from HBTU Kanpur (Nov 2022 – Jul 2026). Strong foundation in core
                      CS subjects.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent bg-accent/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent shrink-0">
                    <Trophy className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Academic Background</h3>
                    <p className="text-muted-foreground mb-3">96% in PCM</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Intermediate from Lucknow Public School (Apr 2020 – Mar 2021) with exceptional performance in
                      Physics, Chemistry, and Mathematics.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section id="coding-profiles" className="py-24 px-6 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12">Coding Profiles</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="https://github.com/Ashwanit101" target="_blank" rel="noopener noreferrer" className="group">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:border-accent">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="relative w-24 h-24 flex items-center justify-center bg-white rounded-full">
                    <img
                      src="/images/github-logo-f81c476af4b3a13c1f8facf3095b7d7e.png"
                      alt="GitHub"
                      className="w-20 h-20 object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="font-semibold block">GitHub</span>
                    <span className="text-xs text-muted-foreground">@Ashwanit101</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            </a>
            <a
              href="https://www.linkedin.com/in/ashwani-kumar-tiwari-3a2347258/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:border-accent">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <img
                      src="/images/linkedin-logo-578229-227.avif"
                      alt="LinkedIn"
                      className="w-20 h-20 object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="font-semibold block">LinkedIn</span>
                    <span className="text-xs text-muted-foreground">Connect</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            </a>
            <a
              href="https://www.codeforces.com/profile/sihare_123"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:border-accent">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <img
                      src="/images/https-dev-to-uploads.webp"
                      alt="Codeforces"
                      className="w-28 h-28 object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="font-semibold block">Codeforces</span>
                    <span className="text-xs text-muted-foreground">Expert • 1640</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            </a>
            <a
              href="https://leetcode.com/u/Sandeepkumar099/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:border-accent">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <img
                      src="/images/leetcode-logo-black-with-text.png"
                      alt="LeetCode"
                      className="w-28 h-28 object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="font-semibold block">LeetCode</span>
                    <span className="text-xs text-muted-foreground">1500+ Solved</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 px-6 bg-muted/20 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12">Resume</h2>
          <div className="bg-card rounded-2xl p-12 shadow-lg border border-border">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">Download My Resume</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Get a detailed overview of my experience, skills, projects, and achievements. Perfect for recruiters and
                hiring managers.
              </p>
            </div>
            <a
              href="/resume/Ashwani_Kumar_Tiwari_Resume.pdf"
              download="Ashwani_Kumar_Tiwari_Resume.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 font-semibold text-lg"
            >
              <Download className="h-6 w-6" />
              Download Resume (PDF)
            </a>
            <p className="text-sm text-muted-foreground mt-6">Last updated: December 2025</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Let's work together</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, internships, and collaborative projects.
                Whether you have a question or just want to connect, feel free to reach out!
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:ashwani01t@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>ashwani01t@gmail.com</span>
                </a>
                <a
                  href="tel:6387853524"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>6387853524</span>
                </a>
                <div className="flex gap-4 pt-4">
                  <a
                    href="https://github.com/Ashwanit101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ashwani-kumar-tiwari-3a2347258/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Ashwani Kumar Tiwari. Built with Next.js and Tailwind CSS.
          </p>
          <div className="flex gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
