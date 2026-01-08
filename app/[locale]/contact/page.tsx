import ContactForm from "@/src/components/Forms/ContactForm/ContactForm";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Contact({ params }: PageProps<"/[locale]">) {
    const { locale } = await params;

    setRequestLocale(locale as Locale);
    const t = await getTranslations("Contact");

    return (
        <div className="flex min-h-screen items-center justify-center  font-sans ">
            <main className="flex min-h-screen w-full flex-col py-64 px-16 max-w-[1250px]">
                <h1 className="font-title">
                    <div className="text-6xl">{t("me")}</div>
                    <div className="text-8xl">{t("contact_me")}</div>
                </h1>
                <p className="text-xl mt-16 whitespace-pre-line">
                    {t("description")}
                </p>
                <div className="bg-background-tertiary p-16 rounded-2xl mt-16">
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
                </div>
            </main>
        </div>
    );
}
