import { hasLocale, Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import ProjectCard from "@/src/components/Cards/ProjectCard/ProjectCard";
import Button from "@/src/components/Buttons/Button";
import LogoIcon from "@/src/assets/icon.svg";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import ProjectData from "@/src/data/projects.json";
import FadeInOnLoad from "@/src/components/Animations/FadeInOnLoad";
import FadeInGrid from "@/src/components/Animations/FadeInGrid";

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
        title: t("projects_title"),
        description: t("projects_description"),
    };
}

export default async function Projects({ params }: PageProps<"/[locale]">) {
    const { locale } = await params;

    setRequestLocale(locale as Locale);
    const t = await getTranslations("Project");
    const tc = await getTranslations("Common");

    return (
        <div className="flex min-h-screen items-center justify-center  font-sans">
            <main className="flex min-h-screen w-full flex-col items-center justify-between  pb-0 pt-32 lg:py-64 px-16">
                <div className="flex items-center flex-col-reverse lg:flex-row justify-between max-w-[1250px] w-full">
                    <div className="flex flex-col items-start gap-6 ">
                        <div className="font-title flex-none">
                            <h1 className="flex flex-col lg:gap-2 items-start">
                                <FadeInOnLoad delay={0.5}>
                                    <div className="text-3xl lg:text-5xl">
                                        {t("my")}
                                    </div>
                                </FadeInOnLoad>
                                <FadeInOnLoad delay={0.7}>
                                    <div className="text-5xl lg:text-8xl">
                                        {t("projects")}
                                    </div>
                                </FadeInOnLoad>
                            </h1>
                        </div>
                        <FadeInOnLoad delay={0.9}>
                            <h2 className="text-lg lg:text-2xl max-w-xl">
                                {t("subtitle")}
                            </h2>
                        </FadeInOnLoad>
                    </div>
                    <FadeInOnLoad delay={0.2} rotate={0} y={64}>
                        <div className="relative w-[350px] h-[350px] lg:w-[350px] lg:h-[350px] xl:w-[600px] xl:h-[600px] flex items-center justify-center">
                            <div className="absolute bg-white rounded-lg w-[300px] h-[300px] xl:w-[600px] xl:h-[400px] z-1"></div>
                            <LogoIcon className="text-black z-2" />
                        </div>
                    </FadeInOnLoad>
                </div>
                <FadeInGrid
                    className="grid grid-cols-1 lg:grid-cols-3 w-100 lg:w-full gap-8 opacity-100 max-w-[1250px]  mt-32 px-6 lg:px-0"
                    y={50}
                    rotate={-8}
                    duration={0.5}
                    stagger={0.2}
                >
                    {ProjectData.projects.map((el) => (
                        <ProjectCard
                            title={el.title}
                            tags={el.tags}
                            image={el.image}
                            key={el.id}
                            href={`/${locale}/projects/${el.id}`}
                        />
                    ))}
                </FadeInGrid>
            </main>
        </div>
    );
}
