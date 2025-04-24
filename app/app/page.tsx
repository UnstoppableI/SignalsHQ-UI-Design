import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  AlertTriangle,
  Activity,
  FileCheck,
  CreditCard,
  Users,
  BarChart3,
  Lock,
  CheckCircle2,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SearchIcon, NetworkIcon } from "@/components/ui/icons"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight">SignalsHQ</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
                How It Works
              </Link>
              <Link href="#for-auditors" className="text-sm font-medium transition-colors hover:text-primary">
                For Auditors
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="#contact">Contact Us</Link>
            </Button>
            <Button asChild className="hidden md:flex">
              <Link href="#schedule">Schedule a Meeting</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-dot-pattern py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/90"></div>
          <div className="container relative">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    <span className="block text-gray-900">AI-Powered</span>
                    <span className="block text-blue-600">Auditing</span>
                    <span className="block text-gray-500 text-3xl sm:text-4xl mt-2">for the Modern CPA</span>
                  </h1>
                  <p className="mt-6 text-lg text-gray-600 max-w-xl">
                    Automate document processes end-to-end, ensuring accuracy, efficiency, and compliance across
                    critical business operations.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 md:gap-6">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <Shield className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Reduce Risk</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <Clock className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Save Time</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                    </div>
                    <span>Ensure Compliance</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Link href="#schedule" className="flex items-center gap-2">
                      Schedule a Meeting <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline">
                    <Link href="#features">Discover Features</Link>
                  </Button>
                </div>
              </div>

              <div className="relative rounded-2xl bg-white p-6 shadow-xl border border-gray-100">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold">AI does the work, you decide</h2>
                    <p className="text-gray-600 mt-1">Deploy AI Risk Agents to streamline audit processes</p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="rounded-xl bg-blue-50 p-4 transition-all hover:shadow-md">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                        <AlertTriangle className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="font-medium">Anomaly Detection</h3>
                      <p className="text-sm text-gray-600 mt-1">Spot outliers before they escalate</p>
                    </div>

                    <div className="rounded-xl bg-purple-50 p-4 transition-all hover:shadow-md">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                        <Activity className="h-5 w-5 text-purple-600" />
                      </div>
                      <h3 className="font-medium">Receipt Matching</h3>
                      <p className="text-sm text-gray-600 mt-1">Automate verification processes</p>
                    </div>

                    <div className="rounded-xl bg-green-50 p-4 transition-all hover:shadow-md">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                        <FileCheck className="h-5 w-5 text-green-600" />
                      </div>
                      <h3 className="font-medium">SOX Validation</h3>
                      <p className="text-sm text-gray-600 mt-1">Ensure regulatory compliance</p>
                    </div>

                    <div className="rounded-xl bg-amber-50 p-4 transition-all hover:shadow-md">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                        <CreditCard className="h-5 w-5 text-amber-600" />
                      </div>
                      <h3 className="font-medium">Expense Audits</h3>
                      <p className="text-sm text-gray-600 mt-1">Streamline approval processes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <a
              href="#explore"
              className="flex items-center justify-center p-4 text-sm text-gray-500 hover:text-gray-900"
            >
              Explore Below
              <ChevronDown className="ml-1 h-4 w-4 animate-bounce" />
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern-light"></div>
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600 mb-4">
                Powerful Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Everything you need for modern auditing
              </h2>
              <p className="text-gray-600 text-lg">
                Our AI-powered platform provides comprehensive tools to streamline your auditing workflow, reduce manual
                effort, and ensure compliance.
              </p>
            </div>

            <Tabs defaultValue="risk" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-2xl grid-cols-4">
                  <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
                  <TabsTrigger value="automation">Automation</TabsTrigger>
                  <TabsTrigger value="compliance">Compliance</TabsTrigger>
                  <TabsTrigger value="reporting">Reporting</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="risk" className="mt-0">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="rounded-xl bg-gray-50 p-6 shadow-lg border border-gray-100 aspect-square flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src="/images/riskassessment2.jpeg"
                        alt="Advanced Risk Assessment"
                        width={400}
                        height={300}
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Advanced Risk Assessment</h3>
                    <p className="text-gray-600">
                      Our AI algorithms analyze your data to identify potential risks and anomalies, allowing you to
                      focus your audit efforts where they matter most.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Real-time risk scoring and prioritization",
                        "Automated anomaly detection across transactions",
                        "Pattern recognition to identify potential fraud",
                        "Customizable risk thresholds and alerts",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="mt-4">
                      Learn more about risk assessment <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="automation" className="mt-0">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="rounded-xl bg-gray-50 p-6 shadow-lg border border-gray-100 aspect-square flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src="/images/automation.jpeg"
                        alt="Intelligent Workflow Automation"
                        width={400}
                        height={300}
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Intelligent Workflow Automation</h3>
                    <p className="text-gray-600">
                      Eliminate manual tasks and streamline your audit workflow with our intelligent automation tools
                      that handle repetitive processes.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Automated document processing and data extraction",
                        "Smart workflow routing and approvals",
                        "Scheduled audits and continuous monitoring",
                        "Integration with existing accounting systems",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="mt-4">
                      Explore automation capabilities <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="compliance" className="mt-0">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="rounded-xl bg-gray-50 p-6 shadow-lg border border-gray-100 aspect-square flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src="/images/compliance.jpeg"
                        alt="Comprehensive Compliance Management"
                        width={400}
                        height={300}
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Comprehensive Compliance Management</h3>
                    <p className="text-gray-600">
                      Stay compliant with regulatory requirements and industry standards with our built-in compliance
                      frameworks and controls.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "SOX compliance validation and documentation",
                        "Regulatory updates and compliance tracking",
                        "Audit trail and evidence collection",
                        "Control testing and remediation tracking",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="mt-4">
                      View compliance features <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reporting" className="mt-0">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="rounded-xl bg-gray-50 p-6 shadow-lg border border-gray-100 aspect-square flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src="/images/reporting.webp"
                        alt="Advanced Reporting & Analytics"
                        width={400}
                        height={300}
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Advanced Reporting & Analytics</h3>
                    <p className="text-gray-600">
                      Generate comprehensive reports and gain valuable insights with our powerful analytics and
                      visualization tools.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Customizable dashboards and reporting templates",
                        "Real-time analytics and trend analysis",
                        "Executive summaries and detailed audit reports",
                        "Export capabilities for stakeholder presentations",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="mt-4">
                      Discover reporting tools <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern-light"></div>
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600 mb-4">
                Simple Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How SignalsHQ Works</h2>
              <p className="text-gray-600 text-lg">
                Our platform simplifies the auditing process with AI-powered automation, allowing you to focus on
                strategic decision-making.
              </p>
            </div>

            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

              <div className="space-y-12 relative">
                {/* Step 1 */}
                <div className="grid md:grid-cols-2 gap-8 items-center relative">
                  <div className="md:text-right space-y-4 md:pr-12">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Step 1</div>
                    <h3 className="text-2xl font-bold">Connect Your Data</h3>
                    <p className="text-gray-600">
                      Easily integrate with your existing accounting systems and data sources. Our platform supports all
                      major financial software and can import data in various formats.
                    </p>
                  </div>

                  <div className="md:pl-12 relative">
                    {/* Circle connector */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
                      <span className="text-white font-bold">1</span>
                    </div>

                    <div className="rounded-xl bg-white p-6 shadow-lg border border-gray-100">
                      <div className="relative w-full aspect-video flex items-center justify-center">
                        <NetworkIcon className="w-32 h-32 text-blue-600 opacity-90 feature-icon" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="grid md:grid-cols-2 gap-8 items-center relative">
                  <div className="order-last md:order-first md:pl-12 relative">
                    {/* Circle connector */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
                      <span className="text-white font-bold">2</span>
                    </div>

                    <div className="rounded-xl bg-white p-6 shadow-lg border border-gray-100">
                      <div className="relative w-full aspect-video flex items-center justify-center">
                        <SearchIcon className="w-32 h-32 text-purple-600 opacity-90 feature-icon" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 md:pl-12">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Step 2</div>
                    <h3 className="text-2xl font-bold">AI-Powered Analysis</h3>
                    <p className="text-gray-600">
                      Our AI algorithms analyze your data to identify patterns, anomalies, and potential risks. The
                      system automatically flags items that require attention based on your defined criteria.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="grid md:grid-cols-2 gap-8 items-center relative">
                  <div className="md:text-right space-y-4 md:pr-12">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Step 3</div>
                    <h3 className="text-2xl font-bold">Review & Approve</h3>
                    <p className="text-gray-600">
                      Review the AI-generated findings and make informed decisions. Our platform provides detailed
                      explanations and evidence for each flagged item, allowing you to quickly assess and approve or
                      investigate further.
                    </p>
                  </div>

                  <div className="md:pl-12 relative">
                    {/* Circle connector */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
                      <span className="text-white font-bold">3</span>
                    </div>

                    <div className="rounded-xl bg-white p-6 shadow-lg border border-gray-100">
                      <div className="relative w-full aspect-video flex items-center justify-center">
                        <Image
                          src="/images/review-and-approve.webp"
                          alt="Review and Approve"
                          width={400}
                          height={250}
                          className="object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="grid md:grid-cols-2 gap-8 items-center relative">
                  <div className="order-last md:order-first md:pl-12 relative">
                    {/* Circle connector */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
                      <span className="text-white font-bold">4</span>
                    </div>

                    <div className="rounded-xl bg-white p-6 shadow-lg border border-gray-100">
                      <div className="relative w-full aspect-video flex items-center justify-center">
                        <Image
                          src="/images/generate-reports.webp"
                          alt="Generate Reports"
                          width={400}
                          height={250}
                          className="object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 md:pl-12">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Step 4</div>
                    <h3 className="text-2xl font-bold">Generate Reports</h3>
                    <p className="text-gray-600">
                      Create comprehensive audit reports with just a few clicks. Our platform generates detailed
                      documentation, including findings, evidence, and recommendations, ready for presentation to
                      stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="#schedule" className="flex items-center gap-2">
                  Get Started Today <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* For Auditors Section */}
        <section id="for-auditors" className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern-light"></div>
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600 mb-4">
                For Auditors
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Designed for Modern Auditing Professionals
              </h2>
              <p className="text-gray-600 text-lg">
                Our platform empowers auditors with AI-powered tools to enhance efficiency, accuracy, and compliance in
                their daily workflows.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>For Audit Managers</CardTitle>
                  <CardDescription>Oversee audit processes with confidence</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Comprehensive audit planning and resource allocation",
                      "Real-time progress tracking and team management",
                      "Risk-based approach to optimize audit coverage",
                      "Standardized methodology across all engagements",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 mb-4">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>For Staff Auditors</CardTitle>
                  <CardDescription>Streamline your daily audit tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Automated data collection and analysis",
                      "AI-assisted testing and sampling",
                      "Guided workflows for consistent execution",
                      "Digital evidence collection and documentation",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 mb-4">
                    <Lock className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>For Compliance Officers</CardTitle>
                  <CardDescription>Ensure regulatory compliance with ease</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Automated compliance checks and validations",
                      "Regulatory updates and compliance tracking",
                      "Comprehensive audit trails for regulators",
                      "Risk assessment and remediation tracking",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern-light"></div>
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600 mb-4">
                Testimonials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Trusted by Leading Firms</h2>
              <p className="text-gray-600 text-lg">
                See what our clients have to say about how SignalsHQ has transformed their auditing processes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "SignalsHQ has revolutionized our audit process. We've reduced our audit time by 40% while improving accuracy and compliance.",
                  author: "Sarah Johnson",
                  title: "Audit Director, Big Four Firm",
                  image: "/placeholder.svg?height=80&width=80",
                },
                {
                  quote:
                    "The AI-powered anomaly detection has been a game-changer for our risk assessment process. We're catching issues we would have missed before.",
                  author: "Michael Chen",
                  title: "Partner, Regional Accounting Firm",
                  image: "/placeholder.svg?height=80&width=80",
                },
                {
                  quote:
                    "Implementation was seamless, and the ROI was immediate. Our team can now focus on strategic analysis instead of manual data processing.",
                  author: "Jessica Williams",
                  title: "CFO, Fortune 500 Company",
                  image: "/placeholder.svg?height=80&width=80",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button variant="outline" size="lg">
                View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern-light"></div>
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600 mb-4">Pricing</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Flexible Plans for Every Firm</h2>
              <p className="text-gray-600 text-lg">
                Choose the plan that fits your firm's needs, from small practices to large enterprises.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "$499",
                  description: "Perfect for small accounting firms",
                  features: [
                    "Up to 5 users",
                    "Basic AI anomaly detection",
                    "Standard reporting templates",
                    "Email support",
                    "1 integration",
                  ],
                  cta: "Get Started",
                  popular: false,
                },
                {
                  name: "Professional",
                  price: "$999",
                  description: "Ideal for growing firms",
                  features: [
                    "Up to 20 users",
                    "Advanced AI risk assessment",
                    "Custom reporting",
                    "Priority support",
                    "5 integrations",
                    "Compliance management",
                  ],
                  cta: "Get Started",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "For large organizations",
                  features: [
                    "Unlimited users",
                    "Full AI capabilities",
                    "Advanced analytics",
                    "Dedicated support",
                    "Unlimited integrations",
                    "Custom workflows",
                    "API access",
                  ],
                  cta: "Contact Sales",
                  popular: false,
                },
              ].map((plan, i) => (
                <Card
                  key={i}
                  className={`border ${plan.popular ? "border-blue-200 shadow-lg ring-1 ring-blue-500" : "border-gray-200 shadow-sm"} relative`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                      <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-gray-500">/month</span>}
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}>
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern-light"></div>
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600 mb-4">FAQ</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg">
                Find answers to common questions about SignalsHQ and our AI-powered auditing platform.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How does SignalsHQ's AI technology work?",
                    answer:
                      "SignalsHQ uses advanced machine learning algorithms to analyze financial data, identify patterns, and detect anomalies. Our AI models are trained on vast datasets of financial transactions and continuously learn from user feedback to improve accuracy over time.",
                  },
                  {
                    question: "Is SignalsHQ compliant with industry regulations?",
                    answer:
                      "Yes, SignalsHQ is designed with compliance in mind. Our platform adheres to industry standards and regulations, including SOX, GAAP, and IFRS. We regularly update our compliance frameworks to ensure you stay current with regulatory changes.",
                  },
                  {
                    question: "How secure is my data with SignalsHQ?",
                    answer:
                      "Security is our top priority. SignalsHQ employs bank-level encryption, secure data centers, and strict access controls to protect your sensitive financial information. We are SOC 2 Type II certified and conduct regular security audits.",
                  },
                  {
                    question: "Can SignalsHQ integrate with my existing accounting software?",
                    answer:
                      "Yes, SignalsHQ offers seamless integration with popular accounting and ERP systems, including QuickBooks, Xero, SAP, Oracle, and many others. Our API also allows for custom integrations with proprietary systems.",
                  },
                  {
                    question: "How long does implementation take?",
                    answer:
                      "Implementation time varies depending on your firm's size and requirements. Typically, small to medium firms can be up and running within 2-4 weeks. Enterprise implementations may take 4-8 weeks. Our dedicated implementation team will guide you through the entire process.",
                  },
                  {
                    question: "Do you offer training and support?",
                    answer:
                      "Absolutely. All plans include comprehensive training and ongoing support. We offer live training sessions, on-demand videos, documentation, and a dedicated support team to ensure your success with our platform.",
                  },
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="schedule" className="py-20 bg-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
          <div className="container relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Ready to transform your auditing process?
                </h2>
                <p className="text-blue-100 text-lg">
                  Schedule a personalized demo to see how SignalsHQ can help your firm reduce risk, save time, and
                  ensure compliance with AI-powered auditing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    Schedule a Meeting <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="rounded-xl bg-blue-500 p-6 shadow-xl">
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-blue-100">
                        First Name
                      </label>
                      <input
                        id="first-name"
                        className="w-full rounded-md border-blue-400 bg-blue-500 text-white placeholder-blue-300 focus:border-white focus:ring-white"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-blue-100">
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        className="w-full rounded-md border-blue-400 bg-blue-500 text-white placeholder-blue-300 focus:border-white focus:ring-white"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-blue-100">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border-blue-400 bg-blue-500 text-white placeholder-blue-300 focus:border-white focus:ring-white"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-blue-100">
                      Company
                    </label>
                    <input
                      id="company"
                      className="w-full rounded-md border-blue-400 bg-blue-500 text-white placeholder-blue-300 focus:border-white focus:ring-white"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-blue-100">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full rounded-md border-blue-400 bg-blue-500 text-white placeholder-blue-300 focus:border-white focus:ring-white"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                    Request Demo
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-900 text-gray-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
        <div className="container py-12 md:py-16 relative">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-xl font-bold text-white mb-4">SignalsHQ</div>
              <p className="text-gray-400 mb-4">
                AI-powered auditing solutions for modern CPAs. Streamline your audit process with advanced technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Updates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Webinars
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} SignalsHQ. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

