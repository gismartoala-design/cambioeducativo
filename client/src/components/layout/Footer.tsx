export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Logo" className="h-8 w-auto brightness-0 invert opacity-70" />
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Email</a>
          </div>
          <div className="text-sm">
            © 2026.
          </div>
        </div>
      </div>
    </footer>
  );
};
