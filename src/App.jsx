import React from "react";

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vaibhav-varshney-vv/" },
  { label: "GitHub", href: "https://github.com/VaibhaVarshney" },
  { label: "Old Portfolio", href: "https://varshney2vaibhav.carrd.co/" },
];

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        <aside className="md:col-span-1">
          <div className="card">
            <div className="flex items-center gap-4">
              <img src="/profile.jpg" alt="Vaibhav" className="w-20 h-20 rounded-full object-cover" />
              <div>
                <h1 className="text-xl font-bold">Vaibhav Varshney</h1>
                <p className="text-sm text-slate-500">MS in Data Science • Machine Learning & DevOps</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-700">
              I'm a data scientist & ML practitioner currently at the University of Maryland (MS Data Science). I build predictive models, deploy ML products, and convert data into actionable insights. Interested in ML systems, DevOps for ML, and applied research.
            </p>

            <div className="mt-4 space-y-2">
              <a className="inline-block text-sm font-medium" href="mailto:varshney2vaibhav@gmail.com">varshney2vaibhav@gmail.com</a>
              <div className="flex gap-3 mt-2">
                {social.map((s) => (
                  <a key={s.label} href={s.href} className="text-xs rounded-full px-3 py-1 border border-slate-200 hover:bg-slate-50">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-slate-600">Quick facts</h3>
              <ul className="mt-2 text-sm text-slate-700 space-y-1">
                <li>University of Maryland — MS Data Science (Aug 2025 - Present)</li>
                <li>B.Tech in CSE — Dr. Vishwanath Karad MIT WPU (2020–2024)</li>
                <li>Tech: Python, TensorFlow, PyTorch, AWS, SQL, PowerBI</li>
              </ul>
            </div>
          </div>

          <div className="card mt-6">
            <h3 className="font-semibold">Contact</h3>
            <p className="mt-2 text-sm">Phone: +1 (240) 960-6762</p>
            <a className="mt-2 inline-block text-sm" href="/Vaibhav Varshney Resume.pdf">Download Resume</a>
          </div>
        </aside>

        <main className="md:col-span-2 space-y-6">
          <section className="card">
            <h2 className="text-lg font-bold">Selected Projects</h2>
            <p className="text-sm text-slate-600 mt-1">Projects that demonstrate applied ML, deployment, and data engineering.</p>

            <div className="mt-4 space-y-4">
              <ProjectCard
                title="Plant Disease Detection"
                period="Mar 2024 - Apr 2024"
                bullets={[
                  "Led a team of 4 and improved the dataset to 70k+ images for multiple crops.",
                  "Built CNN models (transfer learning) with 97% accuracy; used augmentation and evaluated with confusion matrices.",
                  "Deployed a Streamlit demo to showcase predictions to stakeholders and farmers.",
                ]}
              />

              <ProjectCard
                title="Heart Failure Prediction"
                period="Jul 2023 - Aug 2023"
                bullets={[
                  "Built and compared models (SVM, Random Forest, XGBoost) using clinical features.",
                  "Achieved 86.4% accuracy with SVM and explored feature importance and ROC curves.",
                ]}
              />

              <ProjectCard
                title="ERP & CRM Customization — Mavio Solutions"
                period="Aug 2023 – Dec 2023"
                bullets={[
                  "Customized ERPNext with Frappe; handled data import/cleaning for 10k+ client assets.",
                  "Built Salesforce automation routines to improve customer workflows.",
                ]}
              />
            </div>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold">Education & Certifications</h2>
            <div className="mt-3 grid gap-3">
              <div>
                <div className="text-sm font-semibold">University of Maryland, College Park</div>
                <div className="text-xs text-slate-600">MS, Data Science — Aug 2025 - Present</div>
              </div>

              <div>
                <div className="text-sm font-semibold">Dr. Vishwanath Karad MIT WPU</div>
                <div className="text-xs text-slate-600">B.Tech, Computer Science — Jul 2020 - May 2024 • CGPA 8.59/10</div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h4 className="text-sm font-semibold">Selected Certifications</h4>
                <ul className="text-sm mt-2 text-slate-700 space-y-1">
                  <li>Data Science Fundamentals with Python & SQL — IBM</li>
                  <li>Python for Data Science, AI & Dev — IBM</li>
                  <li>Statistics for Data Science — IBM</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold">Publications & Presentations</h2>
            <p className="text-sm text-slate-700 mt-2">Paper: "Advancements in Plant Disease Detection Technologies" — YMER. Poster on SimCLR and self-supervised learning.</p>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold">Recommendations</h2>
            <p className="text-sm text-slate-700 mt-2">Below are recommendation letters and my resume.</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a className="px-4 py-2 rounded-full border" href="/Vaibhav Varshney Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
              <a className="px-4 py-2 rounded-full border" href="/LOR_1.pdf" target="_blank" rel="noreferrer">LOR — Dr. Pradnya Kulkarni</a>
              <a className="px-4 py-2 rounded-full border" href="/LOR_2.pdf" target="_blank" rel="noreferrer">LOR — Ms. Anita Gunjal</a>
              <a className="px-4 py-2 rounded-full border" href="/LOR_3.pdf" target="_blank" rel="noreferrer">LOR — Ms. Ketaki Kulkarni</a>
            </div>
          </section>

          <section className="card">
            <h2 className="text-lg font-bold">Get in touch</h2>
            <p className="text-sm text-slate-700 mt-2">Interested in collaborations or ML/DevOps roles. I’m open to internships and research opportunities.</p>
            <a className="mt-3 inline-block" href="mailto:varshney2vaibhav@gmail.com">Say hello</a>
          </section>
        </main>
      </div>
    </div>
  );
}

function ProjectCard({ title, period, bullets }) {
  return (
    <article className="p-4 rounded-lg border border-slate-100 bg-white">
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-semibold">{title}</h3>
        <span className="text-xs text-slate-500">{period}</span>
      </div>
      <ul className="mt-2 text-sm text-slate-700 list-disc pl-4 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
