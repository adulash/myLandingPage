import { motion } from "framer-motion";
import { ArrowDown, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background Elements */}

      <div
        className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"
        style={{ background: "var(--primary)" }}></div>
      <div
        className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"
        style={{ background: "var(--accent)" }}></div>

      <div className="container grid md-grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text text-center md:text-right flex flex-col items-center md:items-start">
          <h2 className="text-accent font-bold text-xl mb-4">مرحباً، أنا المطور عبدالله 👋</h2>
          <h1>
            مطور تطبيقات <br />
            <span className="text-primary">Web Fullstack</span>
          </h1>
          <p
            className="text-text-light text-lg mb-8 max-w-2xl"
            style={{ color: "var(--text-light)" }}>
            أقوم ببناء تطبيقات ويب عصرية، متجاوبة، وعالية الأداء. شغفي يكمن في تحويل الأفكار إلى
            واقع رقمي متميز.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#projects" className="btn btn-primary">
              تصفح أعمالي
              <ArrowDown size={20} />
            </a>
            <a
              href="https://github.com/adulash"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline">
              <Github size={20} />
              Github
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center md:justify-end">
          <div className="hero-code-card w-full">
            <div className="flex gap-2 mb-4">
              <div
                className="w-3 h-3 rounded-full bg-red-500"
                style={{ width: 12, height: 12, background: "#ef4444" }}></div>
              <div
                className="w-3 h-3 rounded-full bg-yellow-500"
                style={{ width: 12, height: 12, background: "#eab308" }}></div>
              <div
                className="w-3 h-3 rounded-full bg-green-500"
                style={{ width: 12, height: 12, background: "#22c55e" }}></div>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <span className="code-line">
                <span className="keyword">const</span> <span className="property">developer</span> ={" "}
                <span className="bracket">{`{`}</span>
              </span>
              <span className="code-line" style={{ paddingLeft: "1.5rem" }}>
                <span className="property">name</span>:{" "}
                <span className="string">&apos;Abdullah&apos;</span>,
              </span>
              <span className="code-line" style={{ paddingLeft: "1.5rem" }}>
                <span className="property">role</span>:{" "}
                <span className="string">&apos;Web Fullstack Dev&apos;</span>,
              </span>
              <span className="code-line" style={{ paddingLeft: "1.5rem" }}>
                <span className="property">skills</span>: <span className="bracket">[</span>
              </span>
              <span className="code-line" style={{ paddingLeft: "3rem" }}>
                <span className="string">&apos;React&apos;</span>,{" "}
                <span className="string">&apos;Next.js&apos;</span>,
              </span>
              <span className="code-line" style={{ paddingLeft: "3rem" }}>
                <span className="string">&apos;TypeScript&apos;</span>,{" "}
                <span className="string">&apos;Node.js&apos;</span>,
              </span>
              <span className="code-line" style={{ paddingLeft: "3rem" }}>
                <span className="string">&apos;shadcn&apos;</span>,{" "}
                <span className="string">&apos;PostgreSQL&apos;</span>,
              </span>
              <span className="code-line" style={{ paddingLeft: "3rem" }}>
                <span className="string">&apos;Supabase&apos;</span>
              </span>
              <span className="code-line" style={{ paddingLeft: "1.5rem" }}>
                <span className="bracket">]</span>,
              </span>
              <span className="code-line" style={{ paddingLeft: "1.5rem" }}>
                <span className="property">hardWorker</span>: <span className="boolean">true</span>
              </span>
              <span className="code-line">
                <span className="bracket">{`}`}</span>;
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
