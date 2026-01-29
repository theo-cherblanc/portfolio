import { useLocale, useTranslations } from "next-intl";
import Button from "../Buttons/Button";
import FadeIn from "../Animations/FadeIn";
import LinkedinIcon from "@/src/assets/linkedin.svg";
import MaltIcon from "@/src/assets/malt.svg";
import Link from "next/link";

export default function Footer() {
    const t = useTranslations("Footer");
    const locale = useLocale();

    return (
        <div className=" my-32 lg:mt-64 px-6">
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
                        className="transition-transform duration-200 ease-out hover:scale-105"
                    />
                </div>
            </FadeIn>
            <div className="flex  justify-center w-full mt-32">
                <div className="max-w-[1250px] w-full flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-0">
                    <div className="flex gap-6">
                        <Link
                            href="https://www.linkedin.com/in/theo-cherblanc-812437193"
                            target="_blank"
                        >
                            <LinkedinIcon className="w-16 h-16" />
                        </Link>
                        <Link
                            href="https://www.malt.fr/profile/theocherblanc"
                            target="_blank"
                        >
                            <MaltIcon className="w-16 h-16" />
                        </Link>
                    </div>
                    <div className="flex flex-col items-center lg:items-end lg:text-lg">
                        <div className="text-center">{t("right")}</div>
                        <Link href="mentions" className="font-bold underline">
                            {t("mentions")}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
