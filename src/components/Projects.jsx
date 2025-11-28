import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "مدونة React",
    desc: "مشروع تخرج من مسار تعلم React، تطبيق مدونة يستعرض مقالات صغيرة ومفيدة. تم تحويل تصميم Figma إلى مشروع حي باستخدام React مع واجهة مستخدم عصرية.",
    link: "https://myreact.shehri.space/",
    tags: ["React", "Figma to Code", "UI/UX"],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "ملخص React & TS",
    desc: "مرجع شامل يحتوي على ملخص أهم دروس React مع أمثلة عملية تطبيقية. يهدف لتسهيل فهم واستيعاب مفاهيم React و TypeScript بشكل عملي.",
    link: "https://react_ts.shehri.space",
    tags: ["React", "TypeScript", "Tutorial"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "CorpGate",
    desc: "نظام متكامل لإدارة أعمال الشركات، يسهل متابعة المهام والموظفين.",
    link: "https://corpgate.shehri.space",
    tags: ["Dashboard", "Management", "Fullstack"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "تحدي Testimonials - Frontend Mentor",
    desc: "تحدي تصميم CSS من Frontend Mentor لإنشاء شبكة شهادات متجاوبة باستخدام CSS Grid. يعرض شهادات طلاب في معسكر برمجة بتصميم عصري وجذاب.",
    link: "https://adulash.github.io/frontmentor-testimonial-challange/",
    tags: ["CSS", "Frontend Mentor", "Grid Layout"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
  },
  {
 
  {
    title: "موقع بروفايل - أبو سريع",
    desc: "تطوير موقع بروفايل احترافي للمطور محمد أبو سريع. يتضمن قسم المهارات، المشاريع، آراء العملاء، وإمكانية التبديل بين الثيمات الفاتحة والداكنة.",
    link: "https://adulash.github.io/profile-website-aboSarea/",
    tags: ["Web Development", "Portfolio", "Profile Website"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=80",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20" style={{ background: "rgba(255,255,255,0.02)" }}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">مشاريعي</h2>
          <p className="text-text-light mb-8" style={{ color: "var(--text-light)" }}>
            بعض من أحدث أعمالي البرمجية
          </p>
        </div>

        <div className="grid md-grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card">
              <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p
                className="text-text-light text-sm mb-4"
                style={{ flexGrow: 1, color: "var(--text-light)" }}>
                {project.desc}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full justify-center">
                زيارة المشروع
                <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
