const Footer = () => {
  return (
    <footer
      className="py-8 border-t border-white/10 flex items-center justify-center"
      style={{ color: "var(--text-light)", borderColor: "rgba(255,255,255,0.1)" }}>
      <p className="m-0 text-center w-full flex justify-center">
        © {new Date().getFullYear()} المطور عبدالله. جميع الحقوق محفوظة.
      </p>
    </footer>
  );
};

export default Footer;
