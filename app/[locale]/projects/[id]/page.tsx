import LocaleSwitcher from "@/src/components/Switchers/LocaleSwitcher";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import LogoIcon from "@/src/assets/icon.svg";
import ProjectCard from "@/src/components/Cards/ProjectCard/ProjectCard";
import Button from "@/src/components/Buttons/Button";
import projectsData from "@/src/data/projects.json";
import ReactIcon from "@/src/assets/react.svg";
import RemixIcon from "@/src/assets/remix.svg";
import TailwindIcon from "@/src/assets/tailwind.svg";
import StorybookIcon from "@/src/assets/storybook.svg";
import DockerIcon from "@/src/assets/docker.svg";
import MobileIcon from "@/src/assets/mobile.svg";
import ThreeDIcon from "@/src/assets/3d.svg";
import NextjsIcon from "@/src/assets/nextjs.svg";
import PhpIcon from "@/src/assets/php.svg";
import HtmlIcon from "@/src/assets/html.svg";
import JsIcon from "@/src/assets/js.svg";
import DashboardIcon from "@/src/assets/dashboard.svg";
import VuejsIcon from "@/src/assets/vuejs.svg";
import { FC, SVGProps } from "react";
import FadeInOnLoad from "@/src/components/Animations/FadeInOnLoad";
import FadeIn from "@/src/components/Animations/FadeIn";
import FadeInGrid from "@/src/components/Animations/FadeInGrid";

const StackIcon: { [key: string]: FC<SVGProps<SVGSVGElement>> } = {
    react: ReactIcon,
    remix: RemixIcon,
    tailwind: TailwindIcon,
    storybook: StorybookIcon,
    docker: DockerIcon,
    ionic_capacitor: MobileIcon,
    vtkjs: ThreeDIcon,
    nextjs: NextjsIcon,
    php: PhpIcon,
    html: HtmlIcon,
    js: JsIcon,
    thelia: DashboardIcon,
    vuejs: VuejsIcon,
    expressjs: JsIcon,
};

export default async function Project({
    params,
}: PageProps<"/[locale]/projects/[id]">) {
    const { locale, id } = await params;

    setRequestLocale(locale as Locale);
    const t = await getTranslations("Project");

    const project = projectsData.projects.find((el) => el.id === Number(id));

    const getRandomThree = (excludeId: number) => {
        const filtered = projectsData.projects.filter(
            (item) => item.id !== excludeId
        );
        const shuffled = filtered.sort(() => 0.5 - Math.random());

        return shuffled.slice(0, 3);
    };

    return (
        <div className="flex min-h-screen items-center justify-center  font-sans">
            <main className="flex min-h-screen w-full flex-col pt-32 lg:py-64  lg:px-16 max-w-[1250px]">
                <FadeInOnLoad delay={0.5}>
                    <h1 className="font-title text-5xl mb-4 lg:mb-6 px-12 lg:px-0">
                        {project?.title}
                    </h1>
                </FadeInOnLoad>
                <FadeInOnLoad delay={0.7}>
                    <div className="text-2xl font-bold px-12 lg:px-0">
                        {t(project?.type || "")}
                    </div>
                </FadeInOnLoad>
                <div className="flex flex-col lg:flex-row mt-6 lg:mt-12 lg:mt-24 px-12 lg:px-0">
                    <div className="lg:w-3/5 lg:pr-16">
                        <FadeInOnLoad delay={0.9}>
                            <h2 className="font-title text-3xl mb-6 lg:mb-12">
                                {t("recap")}
                            </h2>
                        </FadeInOnLoad>
                        <FadeInOnLoad delay={1} rotate={0}>
                            <p className="whitespace-pre-line text-lg lg:text-xl">
                                {t(project?.description || "")}
                            </p>
                        </FadeInOnLoad>
                    </div>
                    <div className=" mt-24 lg:mt-0 lg:w-2/5">
                        <FadeIn delay={0.2}>
                            <h2 className="font-title text-3xl mb-6 lg:mb-12">
                                {t("tags")}
                            </h2>
                        </FadeIn>
                        <ul className="space-y-2">
                            {project?.tags.map((tag) => (
                                <FadeIn delay={0.5} key={tag}>
                                    <li className="flex items-start gap-3 text-xl">
                                        {" "}
                                        <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                                        {t(tag)}
                                    </li>
                                </FadeIn>
                            ))}
                        </ul>
                        <FadeIn delay={0.2}>
                            <h2 className="font-title text-3xl mt-24 mb-6 lg:my-12">
                                {t("stack")}
                            </h2>
                        </FadeIn>
                        <FadeIn
                            className="bg-background-tertiary rounded-xl p-4 w-full"
                            delay={0.3}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 opacity-100 max-w-[1250px] ">
                                {project?.stack.map((el) => {
                                    const Icon = StackIcon[el];
                                    return (
                                        <div
                                            key={el}
                                            className="flex  gap-4 items-center"
                                        >
                                            <FadeIn delay={0.9} rotate={0}>
                                                <div className="flex justify-center items-center bg-foreground text-background w-12 h-12 rounded-2xl">
                                                    <Icon className="h-7 w-7" />
                                                </div>
                                            </FadeIn>
                                            <FadeIn delay={1.1} rotate={0}>
                                                <div className="flex flex-col items-between">
                                                    <div className="font-bold">
                                                        {t(el)}
                                                    </div>
                                                </div>
                                            </FadeIn>
                                        </div>
                                    );
                                })}
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4} rotate={0}>
                            <div className="font-bold text-xl capitalize mt-12">
                                {t(project?.part || "")} / {project?.job}
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <div className="font-title text-5xl text-center mb-14 lg:mb-24 mt-32 lg:mt-64">
                    <FadeIn delay={0.2}>{t("other_projects")}</FadeIn>
                </div>

                <FadeInGrid className="grid grid-cols-1 lg:grid-cols-3 w-100 lg:w-full self-center gap-8 opacity-100 max-w-[1250px] lg:mb-24 px-6 lg:px-0">
                    {getRandomThree(project?.id || 0).map((el) => (
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
