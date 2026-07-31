export function BuyerFooter() {
  return (
    <footer className="bg-surface border-t border-border-hairline py-12 mt-12">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <span className="font-display font-semibold text-h3 text-ink-900 lowercase">rihaish</span>
          <p className="text-caption text-ink-400">© 2026 Rihaish Real Estate. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <a className="text-caption text-ink-400 hover:text-brand-primary transition-colors" href="#">
            Terms of Service
          </a>
          <a className="text-caption text-ink-400 hover:text-brand-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="text-caption text-ink-400 hover:text-brand-primary transition-colors" href="#">
            Contact Support
          </a>
        </div>
      </div>
    </footer>
  );
}
