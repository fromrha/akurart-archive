export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black py-12 mt-20">
            <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">

                {/* Brand Column */}
                <div className="flex flex-col gap-4 max-w-sm">
                    <h2 className="font-display text-2xl font-bold tracking-tight text-white">
                        Akurart<span className="font-serif italic font-normal ml-1">Archive</span>
                    </h2>
                    <p className="text-zinc-400 font-serif italic">
                        Media budaya & sinema berbasis narasi, refleksi, dan pengalaman manusia.
                    </p>
                    <div className="text-sm text-zinc-600 mt-4">
                        &copy; {new Date().getFullYear()} Akurart Archive. All rights reserved.
                    </div>
                </div>

                {/* Links Column */}
                <div className="flex gap-12">
                    <div className="flex flex-col gap-3">
                        <h3 className="font-display text-lg text-white">Menu</h3>
                        <a href="/" className="text-zinc-400 hover:text-brand-orange transition-colors">Halaman Utama</a>
                        <a href="/archive" className="text-zinc-400 hover:text-brand-green transition-colors">Arsip</a>
                        <a href="/about" className="text-zinc-400 hover:text-brand-blue transition-colors">Tentang Kami</a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="font-display text-lg text-white">Sosial</h3>
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors">Email</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
