import { Mail, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="card max-w-2xl mx-auto text-center p-8 md:p-12">
          <h2 className="section-title mb-4">تواصل معي</h2>
          <p className="text-text-light mb-8 text-lg" style={{color: 'var(--text-light)'}}>
            أنا متاح حالياً للعمل على مشاريع جديدة. إذا كان لديك فكرة مشروع وترغب بتحويله الى واقع، لا تتردد في التواصل معي.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="mailto:a.walidii@gmail.com" className="btn btn-primary justify-center">
              <Mail size={20} />
              a.walidii@gmail.com
            </a>
            <a href="https://github.com/adulash" target="_blank" rel="noopener noreferrer" className="btn btn-outline justify-center">
              <Github size={20} />
              github.com/adulash
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
