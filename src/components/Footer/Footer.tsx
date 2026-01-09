import { useLocale, useTranslations } from "next-intl";
import Button from "../Buttons/Button";
import FadeIn from "../Animations/FadeIn";

export default function Footer() {
    const t = useTranslations("Footer");
    const locale = useLocale();

    return (
        <div className=" my-32 lg:my-64 px-6">
            <FadeIn
                className="flex items-center justify-center"
                rotate={0}
                y={64}
            >
                <div className="bg-foreground text-background max-w-[1250px] w-full rounded-xl flex flex-col items-center gap-6 p-8 lg:p-24">
                    <div className="font-title flex-none">
                        <h1 className="flex flex-col gap-5 items-center">
                            <FadeIn delay={0.7}>
                                <div className="text-3xl text-center lg:text-start">
                                    {t("box_title_1")}
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.7}>
                                <div className="text-7xl text-center lg:text-start">
                                    {t("box_title_2")} ?
                                </div>
                            </FadeIn>
                        </h1>
                    </div>
                    <FadeIn delay={0.7}>
                        <h2 className="text-2xl max-w-xl text-center lg:text-start">
                            {t("box_desc")}
                        </h2>
                    </FadeIn>
                    <Button
                        label={t("contact_me")}
                        variant="secondary"
                        href={`/${locale}/contact`}
                    />
                </div>
            </FadeIn>
        </div>
    );
}
