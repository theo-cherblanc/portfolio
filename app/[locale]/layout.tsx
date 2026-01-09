import type { Metadata } from "next";
import "../globals.css";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/src/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import NavBar from "@/src/components/NavBar/NavBar";
import Footer from "@/src/components/Footer/Footer";
import LenisProvider from "@/src/providers/LenisProvider";

// export const metadata: Metadata = {
//     title: "Theo CHERBLANC - Developer web",
//     description: "Theo CHERBLANC developer web portfolio",
// };

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    setRequestLocale(locale as Locale);
    const t = await getTranslations("Metadata");
    if (!hasLocale(routing.locales, locale)) notFound();

    return {
        title: t("layout_title"),
        description: t("layout_description"),
    };
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <html lang={locale}>
            <body>
                <LenisProvider>
                    <NextIntlClientProvider>
                        <NavBar />
                        {children}
                        <Footer />
                    </NextIntlClientProvider>
                </LenisProvider>
            </body>
        </html>
    );
}
