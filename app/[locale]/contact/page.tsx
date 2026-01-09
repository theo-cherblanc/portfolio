import FadeInOnLoad from "@/src/components/Animations/FadeInOnLoad";
import ContactForm from "@/src/components/Forms/ContactForm/ContactForm";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Contact({ params }: PageProps<"/[locale]">) {
    const { locale } = await params;

    setRequestLocale(locale as Locale);
    const t = await getTranslations("Contact");

    return (
        <div className="flex min-h-screen items-center justify-center  font-sans ">
            <main className="flex min-h-screen w-full flex-col pt-32 lg:py-64 px-0 lg:px-16 max-w-[1250px]">
                <h1 className="font-title px-12 lg:px-0">
                    <FadeInOnLoad delay={0.5}>
                        <div className="text-3xl lg:text-6xl">{t("me")}</div>
                    </FadeInOnLoad>
                    <FadeInOnLoad delay={0.6}>
                        <div className="text-5xl lg:text-8xl">
                            {t("contact_me")}
                        </div>
                    </FadeInOnLoad>
                </h1>
                <FadeInOnLoad delay={0.7} rotate={0}>
                    <p className="text-lg lg:text-xl mt-10 lg:mt-16 whitespace-pre-line px-12 lg:px-0">
                        {t("description")}
                    </p>
                </FadeInOnLoad>
                <FadeInOnLoad className="bg-background-tertiary p-4 lg:p-16 mx-6 lg:mx-0 rounded-2xl mt-12 lg:mt-16">
                    <ContactForm
                        label={{
                            name: t("name"),
                            mail: t("mail"),
                            message: t("message"),
                            validation: t("validation"),
                            send: t("send"),
                            success: t("success"),
                            error: t("error"),
                            sending: t("sending"),
                        }}
                    />
                </FadeInOnLoad>
            </main>
        </div>
    );
}
