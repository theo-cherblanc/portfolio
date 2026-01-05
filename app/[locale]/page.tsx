import LocaleSwitcher from "@/src/components/Switchers/LocaleSwitcher";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import LogoIcon from "@/src/assets/icon.svg";

export default async function Home({ params }: PageProps<"/[locale]">) {
    const { locale } = await params;

    // Enable static rendering
    setRequestLocale(locale as Locale);
    const t = await getTranslations("Home");

    return (
        <div className="flex min-h-screen items-center justify-center  font-sans">
            <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16">
                <div className="flex items-center justify-between ">
                    <div className="flex flex-col items-start gap-6 ">
                        <div className="font-title flex-none">
                            <h1 className="flex flex-col gap-5 items-start">
                                <div className="text-5xl">{t("title")}</div>
                                <div className="text-8xl">Theo Cherblanc</div>
                            </h1>
                        </div>
                        <h2 className="text-2xl max-w-xl">{t("subtitle")}</h2>
                    </div>
                    <div className="relative w-[800px] h-[800px] flex items-center justify-center">
                        <div className="absolute bg-white rounded-full w-[700px] h-[700px] z-1"></div>
                        <LogoIcon className="text-black z-2" />
                    </div>
                </div>
            </main>
        </div>
    );
}
