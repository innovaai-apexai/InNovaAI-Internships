import { useState } from "react";

export default function InNovaAIInternships() {
  const [activeRole, setActiveRole] = useState(null);

  const compensationNote =
    "*Please note: Following a successful 20-hour unpaid performance evaluation period, selected interns may become eligible for compensated project participation at a rate of $16/hour for each paid, enrolled student engagement.";
  const sdrCompensationNote =
    "*Please note: SDR interns may become eligible for a 6% performance-based commission for each paid, enrolled student successfully onboarded through approved outreach and enrollment initiatives.";

  const roles = [
    {
      title: "Forward AI Deployment Engineer Intern",
      category: "AI Engineering",
      icon: "⚡",
      color: { bg: "#EFF6FF", accent: "#1D4ED8", badge: "#DBEAFE", badgeText: "#1E40AF" },
      description: [
        "Assist in deploying AI copilots, agents, and workflow automation systems for client environments.",
        "Support prompt engineering, API integrations, model orchestration, and lightweight debugging workflows.",
        "Collaborate with cross-functional teams to optimize AI system usability, scalability, and deployment speed.",
        "Participate in testing LLM outputs, AI evaluation frameworks, and production readiness assessments.",
        "Document deployment pipelines, troubleshooting methods, and optimization recommendations.",
      ],
      skills: [
        "Python or JavaScript fundamentals",
        "Understanding of APIs and cloud platforms",
        "Familiarity with OpenAI/Gemini/Claude ecosystems",
        "Prompt engineering and debugging mindset",
        "Strong analytical thinking and adaptability",
      ],
    },
    {
      title: "AI Facilitator & Workshop Mentor Intern",
      category: "Education & Enablement",
      icon: "🎤",
      color: { bg: "#F0FDF4", accent: "#15803D", badge: "#DCFCE7", badgeText: "#166534" },
      description: [
        "Support live AI workshops, bootcamps, and upskilling sessions for students and professionals.",
        "Guide participants through practical AI tool adoption and mini-project development.",
        "Assist in creating challenge sessions, tutorials, and interactive learning exercises.",
        "Monitor learner engagement and provide mentorship on AI workflows and productivity tools.",
        "Contribute to workshop content modernization aligned with emerging AI trends.",
      ],
      skills: [
        "Strong communication and presentation abilities",
        "Knowledge of AI productivity tools and generative AI platforms",
        "Public speaking confidence",
        "Collaborative mindset and mentoring ability",
        "Content creation and instructional design awareness",
      ],
    },
    {
      title: "AI Solutions Consultant Intern",
      category: "Consulting",
      icon: "🧠",
      color: { bg: "#FAF5FF", accent: "#7E22CE", badge: "#F3E8FF", badgeText: "#6B21A8" },
      description: [
        "Assist in identifying client pain points and mapping AI-powered workflow solutions.",
        "Participate in discovery sessions and requirement gathering meetings.",
        "Create presentations, workflow diagrams, and automation recommendations.",
        "Research emerging enterprise AI use cases and industry trends.",
        "Support proposal drafting and client-facing documentation.",
      ],
      skills: [
        "Business analysis and communication skills",
        "Understanding of enterprise AI workflows",
        "Presentation and storytelling abilities",
        "Research and strategic thinking",
        "Professional client interaction",
      ],
    },
    {
      title: "Generative AI Content Strategist Intern",
      category: "Content & Branding",
      icon: "✍️",
      color: { bg: "#FFF7ED", accent: "#C2410C", badge: "#FFEDD5", badgeText: "#9A3412" },
      description: [
        "Develop AI-focused newsletters, LinkedIn posts, educational articles, and campaign content.",
        "Research emerging AI innovations, startups, and enterprise adoption trends.",
        "Collaborate with design and marketing teams to create engaging multi-format content.",
        "Optimize content for SEO, readability, and audience engagement.",
        "Support thought leadership positioning for InNova AI.",
      ],
      skills: [
        "Excellent writing and editing skills",
        "Understanding of AI industry trends",
        "SEO and digital content optimization",
        "Creative storytelling",
        "Research proficiency",
      ],
    },
    {
      title: "AI Automation Operations Intern",
      category: "Operations",
      icon: "🔄",
      color: { bg: "#ECFDF5", accent: "#0F766E", badge: "#CCFBF1", badgeText: "#0F766E" },
      description: [
        "Assist in automating repetitive workflows using AI-powered tools and no-code platforms.",
        "Support internal productivity optimization initiatives.",
        "Monitor automation pipelines and identify efficiency improvements.",
        "Document standard operating procedures and AI-assisted workflows.",
        "Contribute to AI operations scaling strategies.",
      ],
      skills: [
        "No-code/low-code platform familiarity",
        "Process optimization mindset",
        "Attention to detail",
        "Problem-solving abilities",
        "Organizational skills",
      ],
    },
    {
      title: "Prompt Engineering Research Intern",
      category: "AI Research",
      icon: "🧪",
      color: { bg: "#EFF6FF", accent: "#0369A1", badge: "#E0F2FE", badgeText: "#0369A1" },
      description: [
        "Experiment with advanced prompting frameworks and AI interaction strategies.",
        "Evaluate LLM outputs for reliability, consistency, and user experience.",
        "Assist in building reusable prompt libraries and AI evaluation matrices.",
        "Conduct comparative benchmarking across AI models.",
        "Document findings and optimization methodologies.",
      ],
      skills: [
        "Critical thinking and experimentation",
        "Understanding of LLM ecosystems",
        "Analytical documentation skills",
        "Curiosity-driven research mindset",
        "Strong written communication",
      ],
    },
    {
      title: "AI Product Experience Intern",
      category: "Product & UX",
      icon: "🎨",
      color: { bg: "#FFF1F2", accent: "#BE123C", badge: "#FFE4E6", badgeText: "#9F1239" },
      description: [
        "Support AI product interface design and user journey optimization.",
        "Conduct usability evaluations and heuristic assessments.",
        "Assist in wireframing AI workflows and interaction patterns.",
        "Collaborate with engineering and design teams for feature improvements.",
        "Gather user feedback and contribute to iterative product enhancements.",
      ],
      skills: [
        "UI/UX fundamentals",
        "Figma or design tool familiarity",
        "User-centered thinking",
        "Communication and teamwork",
        "Attention to design consistency",
      ],
    },
    {
      title: "AI Growth & Community Intern",
      category: "Community",
      icon: "🌐",
      color: { bg: "#F0FDF4", accent: "#15803D", badge: "#DCFCE7", badgeText: "#166534" },
      description: [
        "Grow AI-focused communities through events, engagement campaigns, and outreach.",
        "Manage workshop registrations, newsletters, and digital communities.",
        "Coordinate collaboration opportunities with student clubs and organizations.",
        "Support social media engagement and community retention strategies.",
        "Track growth analytics and engagement performance.",
      ],
      skills: [
        "Community management abilities",
        "Social media and branding awareness",
        "Event coordination skills",
        "Relationship-building mindset",
        "Data-driven thinking",
      ],
    },
    {
      title: "Sales Development Representative (SDR) Intern",
      category: "Sales",
      icon: "📈",
      color: { bg: "#FDF2F8", accent: "#BE185D", badge: "#FCE7F3", badgeText: "#9D174D" },
      description: [
        "Identify potential leads and outreach opportunities across startups, institutions, and enterprises.",
        "Assist in building outreach campaigns for AI workshops and consulting services.",
        "Conduct market research and maintain CRM records.",
        "Schedule discovery calls, onboarding discussions, and coordinate sales pipelines.",
        "Prepare proposals, follow-ups, and presentation materials for prospective clients.",
        "Support lead qualification, relationship management, and business expansion efforts.",
      ],
      skills: [
        "Professional communication skills",
        "CRM and outreach familiarity",
        "Confidence in networking",
        "Research and organization",
        "Growth-oriented mindset",
      ],
    },
    {
      title: "AI Visual Media & Motion Design Intern",
      category: "Creative Media",
      icon: "🎬",
      color: { bg: "#FFF7ED", accent: "#B45309", badge: "#FEF3C7", badgeText: "#92400E" },
      description: [
        "Create AI-themed visual assets, promotional videos, and workshop branding materials.",
        "Design social media graphics, brochures, and motion animations.",
        "Collaborate on immersive storytelling and campaign aesthetics.",
        "Support website visuals and interactive presentation design.",
        "Experiment with AI-assisted design tools and workflows.",
      ],
      skills: [
        "Graphic design fundamentals",
        "Adobe Creative Suite or Canva familiarity",
        "Motion graphics awareness",
        "Creative storytelling",
        "Visual branding consistency",
      ],
    },
    {
      title: "AI Data Intelligence Intern",
      category: "Data & Analytics",
      icon: "📊",
      color: { bg: "#EFF6FF", accent: "#1D4ED8", badge: "#DBEAFE", badgeText: "#1E40AF" },
      description: [
        "Support data-driven decision-making for workshops, marketing, and AI services.",
        "Analyze engagement metrics and operational performance trends.",
        "Assist in dashboard creation and reporting workflows.",
        "Contribute to data cleaning and visualization tasks.",
        "Identify actionable insights for organizational growth.",
      ],
      skills: [
        "Excel, SQL, or analytics basics",
        "Data visualization awareness",
        "Analytical thinking",
        "Attention to detail",
        "Problem-solving mindset",
      ],
    },
  ];

  const benefits = [
    {
      num: "1",
      title: "Professional Letter of Recommendation",
      desc: "High-performing interns may receive a professional recommendation letter aligned with their role-specific industry domain and demonstrated contributions.",
      icon: "🏆",
      color: "#2563EB",
    },
    {
      num: "2",
      title: "Certificate of Accomplishment",
      desc: "Receive formal recognition validating practical AI, innovation, collaboration, and project-based learning achievements.",
      icon: "📜",
      color: "#7C3AED",
    },
    {
      num: "3",
      title: "Real-World Experience & Portfolio Building",
      desc: "Work on live projects, gain hands-on experience, and build a portfolio that sets you apart.",
      icon: "📈",
      color: "#0891B2",
    },
    {
      num: "4",
      title: "Fiscal Incentive (Performance-Based)",
      desc: "Earn $16/hr (after assessment) or 6% commission based on role-specific performance for each paid, enrolled student.",
      icon: "💰",
      color: "#D97706",
    },
  ];

  const whyJoin = [
    { icon: "🤖", label: "Work on impactful AI projects" },
    { icon: "👥", label: "Learn from industry professionals" },
    { icon: "🌍", label: "Flexible, remote first culture" },
    { icon: "⚡", label: "Build future-ready skills" },
    { icon: "🚀", label: "Be part of a mission driven team" },
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", background: "#F8FAFC", minHeight: "100vh", color: "#0F172A" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', 'Segoe UI', sans-serif; }
        .nav-link { text-decoration: none; color: #334155; font-size: 13px; font-weight: 500; display: flex; flex-direction: column; align-items: center; gap: 4px; }
        .nav-link:hover { color: #2563EB; }
        .nav-icon { font-size: 18px; }
        .btn-primary { background: #2563EB; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 14px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; transition: background 0.2s; }
        .btn-primary:hover { background: #1D4ED8; }
        .btn-outline { background: white; color: #334155; border: 1.5px solid #CBD5E1; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 14px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; transition: border-color 0.2s; }
        .btn-outline:hover { border-color: #2563EB; color: #2563EB; }
        .role-card { background: white; border: 1.5px solid #E2E8F0; border-radius: 16px; padding: 28px; transition: all 0.25s ease; cursor: default; }
        .role-card:hover { border-color: #93C5FD; box-shadow: 0 8px 30px rgba(37,99,235,0.1); transform: translateY(-2px); }
        .skill-tag { display: inline-block; background: #F1F5F9; border: 1px solid #E2E8F0; color: #475569; font-size: 12px; font-weight: 500; padding: 5px 12px; border-radius: 20px; }
        .benefit-card { background: white; border: 1.5px solid #E2E8F0; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; align-items: flex-start; gap: 12px; }
        .why-pill { background: white; border: 1.5px solid #E2E8F0; border-radius: 40px; padding: 12px 20px; display: flex; align-items: center; gap: 10px; font-size: 14px; font-weight: 500; color: #334155; }
        .section-label { color: #2563EB; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px; }
        .divider { width: 48px; height: 4px; background: linear-gradient(90deg, #2563EB, #7C3AED); border-radius: 2px; margin: 16px 0; }
      `}</style>

      {/* HEADER */}
      <header style={{ background: "white", borderBottom: "1px solid #E2E8F0", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "12px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          {/* LOGO TEXT — modification #1 */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 16 }}>N</div>
            <span style={{ fontWeight: 800, fontSize: 18, color: "#0F172A", letterSpacing: "-0.01em" }}>InNova AI's Accelerator AI</span>
          </div>

          {/* NAV */}
          <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <a href="#" className="nav-link"><span className="nav-icon">🔬</span>AI RESEARCH</a>
            <a href="#" className="nav-link"><span className="nav-icon">💡</span>INNOVATION</a>
            <a href="#" className="nav-link"><span className="nav-icon">📊</span>INTELLIGENCE</a>
            <a href="#" className="nav-link"><span className="nav-icon">🎯</span>IMPACT</a>
          </nav>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="https://forms.gle/odz71EemirwK5iUa6" target="_blank" rel="noopener noreferrer" className="btn-primary">
              ✈ Apply for Internships
            </a>
            <a href="https://apex-ai-accelerator-program.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-outline">
              ⊞ Explore Workshops ↗
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: "white", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <p className="section-label">InNova AI</p>
            <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.15, color: "#0F172A", marginBottom: 16, letterSpacing: "-0.02em" }}>
              Empowering the Next<br />Generation of{" "}
              <span style={{ color: "#2563EB" }}>AI</span> Innovators
            </h1>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#334155", marginBottom: 16 }}>Build. Learn. Impact. The Future.</p>
            <p style={{ color: "#64748B", lineHeight: 1.7, marginBottom: 28, fontSize: 15 }}>
              InNova AI is an AI-enabled innovation and workforce transformation organization focused on equipping students, professionals, startups, and enterprises with practical, future-ready AI capabilities. Through applied learning, enterprise-oriented AI systems, workshops, consulting, and innovation ecosystems, InNova AI is building pathways for professionals to thrive in the rapidly evolving AI economy.
            </p>

            {/* APEX Box */}
            <div style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", borderRadius: 14, padding: 24, marginBottom: 28 }}>
              <h3 style={{ fontSize: 20, fontWeight: 800 }}>
                <span style={{ color: "#2563EB" }}>APEX AI</span> Accelerator
              </h3>
              <p style={{ fontWeight: 700, color: "#334155", fontSize: 14, marginTop: 4 }}>A Career-Transforming AI Upskilling System</p>
              <p style={{ color: "#64748B", fontSize: 14, marginTop: 6, marginBottom: 16 }}>
                At the core of this mission is the APEX AI Accelerator — built for the professionals who will shape the next decade of industry. The accelerator combines hands-on AI implementation, agentic workflow development, enterprise AI adoption strategies, mentorship, and practical deployment experience.
              </p>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {[["🤖", "Industry-Relevant AI Skills"], ["🔧", "Hands-on Projects"], ["📈", "Career Acceleration"]].map(([ic, lb]) => (
                  <div key={lb} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: "#334155" }}>
                    <span style={{ fontSize: 18 }}>{ic}</span>{lb}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 440 }}>
              <div style={{ background: "#EFF6FF", border: "1.5px solid #BFDBFE", borderRadius: 12, padding: 20 }}>
                <h3 style={{ fontSize: 28, fontWeight: 800, color: "#2563EB" }}>12+</h3>
                <p style={{ color: "#475569", fontSize: 14, marginTop: 4 }}>Emerging Internship Tracks</p>
              </div>
              <div style={{ background: "#FAF5FF", border: "1.5px solid #DDD6FE", borderRadius: 12, padding: 20 }}>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#7C3AED" }}>AI-First</h3>
                <p style={{ color: "#475569", fontSize: 14, marginTop: 4 }}>Industry-Oriented Experience</p>
              </div>
            </div>
          </div>

          {/* Right side hero panel */}
          <div style={{ background: "#F1F5F9", borderRadius: 20, overflow: "hidden", border: "1.5px solid #E2E8F0" }}>
            <div style={{ padding: "32px 32px 0" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#64748B", marginBottom: 4 }}>Agentic AI. Real Impact. Smarter Workflows.</p>
              <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, marginBottom: 20 }}>
                Experience the future of work with AI agents that collaborate, learn, and deliver.
              </p>
            </div>
            <div style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 50%, #EFF6FF 100%)", margin: "0 32px 32px", borderRadius: 16, padding: 32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 320 }}>
              <div style={{ background: "white", borderRadius: 16, padding: 24, width: "100%", maxWidth: 340, boxShadow: "0 4px 24px rgba(37,99,235,0.12)", border: "1px solid #E2E8F0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🤖</div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 15, color: "#0F172A" }}>Agentic AI Workspace</p>
                    <p style={{ fontSize: 12, color: "#64748B" }}>Enterprise AI Coordination</p>
                  </div>
                </div>
                {[["AI Agent Orchestration", "ACTIVE", "#EFF6FF", "#2563EB"], ["Workflow Automation", "SYNCED", "#F5F3FF", "#7C3AED"], ["Enterprise Intelligence", "OPTIMIZED", "#F0FDF4", "#15803D"]].map(([label, status, bg, col]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: bg, borderRadius: 10, padding: "10px 14px", marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 500, color: "#334155" }}>{label}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: col }}>{status}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, width: "100%", maxWidth: 340 }}>
                {[["Hands-on AI Projects", "Live Client Exposure"], ["Mentorship & Workshops", "Industry Collaboration"], ["AI Skill Development", "Career Acceleration"]].map(([l, r]) => (
                  <div key={l} style={{ display: "flex", justifyContent: "space-between", background: "white", border: "1px solid #E2E8F0", borderRadius: 10, padding: "10px 14px", marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: "#475569" }}>{l}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#2563EB" }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNSHIP ROLES */}
      <section style={{ padding: "64px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="section-label">Internship Opportunities</p>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Kickstart Your Career in <span style={{ color: "#2563EB" }}>AI</span>
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
              Real-world exposure. Meaningful impact. Mentorship that accelerates growth.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
            {roles.map((role, index) => (
              <div key={index} className="role-card" style={{ borderTop: `4px solid ${role.color.accent}` }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: role.color.badge, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                    {role.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 700, color: role.color.accent, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{role.category}</p>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0F172A", lineHeight: 1.3 }}>{role.title}</h3>
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: "#64748B", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Role Responsibilities</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                    {role.description.map((item, idx) => (
                      <li key={idx} style={{ display: "flex", gap: 8, fontSize: 13, color: "#475569", lineHeight: 1.5 }}>
                        <span style={{ color: role.color.accent, marginTop: 2, flexShrink: 0 }}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {role.title === "Sales Development Representative (SDR) Intern" ? (
                  <div style={{ background: "#FDF2F8", border: "1px solid #FBCFE8", borderRadius: 10, padding: "12px 14px", marginBottom: 14 }}>
                    <p style={{ fontSize: 12, color: "#BE185D", lineHeight: 1.6, fontWeight: 500 }}>{sdrCompensationNote}</p>
                  </div>
                ) : (
                  <div style={{ background: "#F0F9FF", border: "1px solid #BAE6FD", borderRadius: 10, padding: "12px 14px", marginBottom: 14 }}>
                    <p style={{ fontSize: 12, color: "#0369A1", lineHeight: 1.6, fontWeight: 500 }}>{compensationNote}</p>
                  </div>
                )}

                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: "#64748B", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Skills</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {role.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag" style={{ background: role.color.badge, color: role.color.badgeText, border: `1px solid ${role.color.badge}` }}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNSHIP BENEFITS — no extra spacing before Why Join */}
      <section style={{ background: "white", borderTop: "1px solid #E2E8F0", padding: "64px 32px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="section-label">Internship Benefits</p>
            <h2 style={{ fontSize: 38, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em" }}>
              What You Gain From <span style={{ color: "#2563EB" }}>The Experience</span>
            </h2>
            <div className="divider" style={{ margin: "16px auto" }}></div>
            <p style={{ color: "#64748B", maxWidth: 560, margin: "0 auto", fontSize: 15, lineHeight: 1.7 }}>
              Beyond technical exposure, InNova AI internships are structured to create measurable professional growth, practical AI experience, and industry-ready career acceleration.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20, marginBottom: 0 }}>
            {benefits.map((b) => (
              <div key={b.num} className="benefit-card">
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${b.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>
                  {b.icon}
                </div>
                <p style={{ fontSize: 13, fontWeight: 700, color: b.color }}>{b.num}.</p>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0F172A", lineHeight: 1.3 }}>{b.title}</h3>
                <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.65 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JOIN — immediately after benefits, modification #2 */}
      <section style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 50%, #EFF6FF 100%)", borderTop: "1px solid #E2E8F0", padding: "64px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="section-label">Why Join InNova AI?</p>
            <h2 style={{ fontSize: 38, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em" }}>
              More Than an Internship. It's a <span style={{ color: "#2563EB" }}>Launchpad.</span>
            </h2>
            <div className="divider" style={{ margin: "16px auto" }}></div>
            <p style={{ color: "#64748B", maxWidth: 600, margin: "0 auto", fontSize: 15, lineHeight: 1.7 }}>
              Our internship ecosystem is designed to create future-ready professionals equipped with practical AI implementation, consulting, communication, automation, and innovation skills.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginBottom: 40 }}>
            {whyJoin.map((item) => (
              <div key={item.label} className="why-pill">
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16, marginBottom: 40 }}>
            {[
              { title: "Real-World Exposure", desc: "Work on AI-driven initiatives, workshops, enterprise workflows, and innovation ecosystems.", color: "#2563EB" },
              { title: "Collaborative Culture", desc: "Partner with mentors, creators, developers, strategists, and AI innovators.", color: "#7C3AED" },
              { title: "Career Acceleration", desc: "Develop modern AI-first competencies aligned with emerging global workforce demands.", color: "#0891B2" },
              { title: "Innovation-Driven Learning", desc: "Experiment with generative AI, automation, AI deployment systems, and modern digital tools.", color: "#15803D" },
            ].map((item) => (
              <div key={item.title} style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 14, padding: 24, borderTop: `3px solid ${item.color}` }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: item.color, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <a href="https://innova-ai.base44.app/" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: "inline-flex", padding: "14px 32px", fontSize: 15, borderColor: "#CBD5E1", borderRadius: 10 }}>
              Learn more about InNova AI ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "white", borderTop: "1px solid #E2E8F0", padding: "40px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 14 }}>N</div>
              <span style={{ fontWeight: 800, fontSize: 17, color: "#0F172A" }}>InNova AI</span>
            </div>
            <p style={{ color: "#64748B", fontSize: 14, maxWidth: 440, lineHeight: 1.65 }}>
              Empowering future-ready professionals through applied AI innovation, enterprise transformation, and human-centered technological advancement.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="https://forms.gle/odz71EemirwK5iUa6" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Apply for Internships
            </a>
            <a href="https://apex-ai-accelerator-program.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Explore Workshops
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
