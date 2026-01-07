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
            <main className="flex min-h-screen w-full flex-col py-64 px-16 max-w-[1250px]">
                <h1 className="font-title text-5xl mb-6">{project?.title}</h1>
                <div className="text-2xl font-bold">
                    {t(project?.type || "")}
                </div>
                <div className="flex mt-24">
                    <div className="w-3/5 pr-16">
                        <h2 className="font-title text-3xl mb-12">
                            {t("recap")}
                        </h2>
                        <p className="whitespace-pre-line text-xl">
                            {t(project?.description || "")}
                        </p>
                    </div>
                    <div className="w-2/5">
                        <h2 className="font-title text-3xl mb-12">
                            {t("tags")}
                        </h2>
                        <ul className="space-y-2">
                            {project?.tags.map((tag) => (
                                <li
                                    className="flex items-start gap-3 text-xl"
                                    key={tag}
                                >
                                    {" "}
                                    <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                                    {t(tag)}
                                </li>
                            ))}
                        </ul>
                        <h2 className="font-title text-3xl my-12">
                            {t("stack")}
                        </h2>
                        <div className="bg-background-tertiary rounded-xl p-4">
                            <div className="grid grid-cols-2 w-full gap-6 opacity-100 max-w-[1250px] ">
                                {project?.stack.map((el) => {
                                    const Icon = StackIcon[el];
                                    return (
                                        <div
                                            key={el}
                                            className="flex  gap-4 items-center"
                                        >
                                            <div className="flex justify-center items-center bg-foreground text-background w-12 h-12 rounded-2xl">
                                                <Icon className="h-7 w-7" />
                                            </div>
                                            <div className="flex flex-col items-between">
                                                <div className="font-bold">
                                                    {t(el)}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="font-bold text-xl capitalize mt-12">
                            {t(project?.part || "")} / {project?.job}
                        </div>
                    </div>
                </div>
                <div className="font-title text-5xl text-center mb-24 mt-64">
                    {t("other_projects")}
                </div>
                <div className="grid grid-cols-3 w-full gap-8 opacity-100 max-w-[1250px] mb-24">
                    {getRandomThree(project?.id || 0).map((el) => (
                        <ProjectCard
                            title={el.title}
                            tags={el.tags}
                            image={el.image}
                            key={el.id}
                            href={`/${locale}/projects/${el.id}`}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
