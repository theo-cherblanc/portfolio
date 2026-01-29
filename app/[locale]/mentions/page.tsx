import FadeInOnLoad from "@/src/components/Animations/FadeInOnLoad";
import ContactForm from "@/src/components/Forms/ContactForm/ContactForm";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Mentions({ params }: PageProps<"/[locale]">) {
    const { locale } = await params;

    setRequestLocale(locale as Locale);
    const t = await getTranslations("Mentions");

    return (
        <div className="flex min-h-screen items-center justify-center  font-sans ">
            <main className="flex min-h-screen w-full flex-col py-32 lg:pt-64  px-0 lg:px-16 max-w-[1250px]">
                <h1 className="font-title px-12 lg:px-0">
                    <FadeInOnLoad delay={0.5}>
                        <div className="text-3xl lg:text-6xl">{t("legal")}</div>
                    </FadeInOnLoad>
                    <FadeInOnLoad delay={0.6}>
                        <div className="text-5xl lg:text-8xl">
                            {t("notice")}
                        </div>
                    </FadeInOnLoad>
                </h1>
                <FadeInOnLoad delay={0.7} rotate={0}>
                    <p className="font-title  text-xl lg:text-4xl mt-10 lg:mt-16 whitespace-pre-line px-12 lg:px-0 mb-8">
                        {t("publisher")}
                    </p>
                </FadeInOnLoad>
                <FadeInOnLoad delay={0.7} rotate={0}>
                    <div className="flex flex-col gap-2 px-12 lg:px-0 ">
                        <span>{t("name")} : Theo Cherblanc</span>
                        <span>{t("status")} : Micro-entrepreneur</span>
                        <span>{t("activity")} : Web developer</span>
                        <span>
                            {t("address")} : 1 place de la resistance, 43100
                            Brioude
                        </span>
                        <span>{t("email")} : theocherblanc@gmail.com</span>
                        <span>{t("phone")} : 0689157007</span>
                    </div>
                </FadeInOnLoad>
                <FadeInOnLoad delay={0.7} rotate={0}>
                    <p className="font-title  text-xl lg:text-4xl mt-10 lg:mt-16 whitespace-pre-line px-12 lg:px-0 mb-8">
                        {t("hosting")}
                    </p>
                </FadeInOnLoad>
                <FadeInOnLoad delay={0.7} rotate={0}>
                    <div className="flex flex-col gap-2 px-12 lg:px-0 ">
                        <span>{t("hosted_by")} : Vercel Inc.</span>
                        <span>
                            440 N Barranca Ave #4133 Covina, CA 91723 États-Unis
                        </span>
                        <span>{t("website")} : https://vercel.com</span>
                    </div>
                </FadeInOnLoad>
                <FadeInOnLoad delay={0.7} rotate={0}>
                    <p className="font-title  text-xl lg:text-4xl mt-10 lg:mt-16 whitespace-pre-line px-12 lg:px-0 mb-8">
                        {t("intellectual_property")}
                    </p>
                </FadeInOnLoad>
                <FadeInOnLoad delay={0.7} rotate={0}>
                    <div className="whitespace-pre-line px-12 lg:px-0 ">
                        {t("intellectual_property_text")}
                    </div>
                </FadeInOnLoad>
                <FadeInOnLoad delay={0.7} rotate={0}>
                    <p className="font-title  text-xl lg:text-4xl mt-10 lg:mt-16 whitespace-pre-line px-12 lg:px-0 mb-8">
                        {t("cookies")}
                    </p>
                </FadeInOnLoad>
                <FadeInOnLoad delay={0.7} rotate={0}>
                    <div className="whitespace-pre-line px-12 lg:px-0 ">
                        {t("cookies_text")}
                    </div>
                </FadeInOnLoad>
            </main>
        </div>
    );
}
