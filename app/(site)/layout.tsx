import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScrollWrapper from "../components/SmoothScrollWrapper";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <SmoothScrollWrapper>
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </SmoothScrollWrapper>
        </>
    );
}
