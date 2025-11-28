const Footer = () => {
  return (
    <footer className="py-8 text-center text-text-light border-t border-white/10" style={{color: 'var(--text-light)', borderColor: 'rgba(255,255,255,0.1)'}}>
      <p>© {new Date().getFullYear()} المطور عبدالله. جميع الحقوق محفوظة.</p>
    </footer>
  );
};

export default Footer;
