import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Button from "@/src/components/Buttons/Button";

import ApiIcon from "@/src/assets/api.svg";
import AuthenticationIcon from "@/src/assets/authentication.svg";
import BookIcon from "@/src/assets/book.svg";
import CiIcon from "@/src/assets/ci.svg";
import ComIcon from "@/src/assets/communication.svg";
import CompassIcon from "@/src/assets/compass.svg";
import DashboardIcon from "@/src/assets/dashboard.svg";
import DockerIcon from "@/src/assets/docker.svg";
import FigmaIcon from "@/src/assets/figma.svg";
import GitIcon from "@/src/assets/git.svg";
import GraphqlIcon from "@/src/assets/graphql.svg";
import HtmlIcon from "@/src/assets/html.svg";
import JsIcon from "@/src/assets/js.svg";
import LightIcon from "@/src/assets/light.svg";
import MobileIcon from "@/src/assets/mobile.svg";
import ReactIcon from "@/src/assets/react.svg";
import RemixIcon from "@/src/assets/remix.svg";
import ResponsiveIcon from "@/src/assets/responsve.svg";
import TeamworkIcon from "@/src/assets/teamwork.svg";
import TerminalIcon from "@/src/assets/terminal.svg";
import ToolsIcon from "@/src/assets/tools.svg";
import WebappIcon from "@/src/assets/webapp.svg";
import TailwindIcon from "@/src/assets/tailwind.svg";

export default async function About({ params }: PageProps<"/[locale]">) {
    const { locale } = await params;

    setRequestLocale(locale as Locale);
    const t = await getTranslations("About");

    const skills = [
        {
            title: "skills_technologies",
            items: [
                { icon: JsIcon, name: t("js_ts"), description: t("advanced") },
                {
                    icon: HtmlIcon,
                    name: t("html_css"),
                    description: t("advanced"),
                },
                {
                    icon: ReactIcon,
                    name: t("react"),
                    description: t("advanced"),
                },
                {
                    icon: MobileIcon,
                    name: t("ionic_capacitor"),
                    description: t("intermediate"),
                },
                {
                    icon: RemixIcon,
                    name: t("next_remix"),
                    description: t("advanced"),
                },
                {
                    icon: TailwindIcon,
                    name: t("tailwind"),
                    description: t("advanced"),
                },
                { icon: GitIcon, name: t("git"), description: t("advanced") },
                {
                    icon: DockerIcon,
                    name: t("docker"),
                    description: t("basic"),
                },
            ],
        },
        {
            title: "tools_workflow",
            items: [
                { icon: CiIcon, name: t("ci_cd"), description: t("basic") },
                {
                    icon: TerminalIcon,
                    name: t("terminal_bash"),
                    description: t("intermediate"),
                },
                {
                    icon: FigmaIcon,
                    name: t("figma"),
                    description: t("intermediate"),
                },
            ],
        },
        {
            title: "api_integration",
            items: [
                {
                    icon: ApiIcon,
                    name: t("rest_api"),
                    description: t("intermediate"),
                },
                {
                    icon: GraphqlIcon,
                    name: t("graphql"),
                    description: t("basic"),
                },
                {
                    icon: AuthenticationIcon,
                    name: t("authentication"),
                    description: t("intermediate"),
                },
            ],
        },
        {
            title: "ux_design",
            items: [
                {
                    icon: MobileIcon,
                    name: t("responsive_design"),
                    description: t("advanced"),
                },
                {
                    icon: ResponsiveIcon,
                    name: t("ui_ux"),
                    description: t("advanced"),
                },
                {
                    icon: TerminalIcon,
                    name: t("debug_optimization"),
                    description: t("intermediate"),
                },
            ],
        },
        {
            title: "projects_type",
            items: [
                {
                    icon: WebappIcon,
                    name: t("web_apps"),
                    description: t("advanced"),
                },
                {
                    icon: MobileIcon,
                    name: t("mobile_apps"),
                    description: t("intermediate"),
                },
                {
                    icon: DashboardIcon,
                    name: t("dashboards"),
                    description: t("intermediate"),
                },
                {
                    icon: ToolsIcon,
                    name: t("internal_tools"),
                    description: t("intermediate"),
                },
            ],
        },
        {
            title: "skills_soft",
            items: [
                { icon: TeamworkIcon, name: t("teamwork"), description: "" },
                { icon: CompassIcon, name: t("autonomy"), description: "" },
                {
                    icon: LightIcon,
                    name: t("problem_solving"),
                    description: "",
                },
                { icon: ComIcon, name: t("communication"), description: "" },
                {
                    icon: BookIcon,
                    name: t("learning_quickly"),
                    description: "",
                },
            ],
        },
    ];

    return (
        <div className="flex min-h-screen items-center justify-center  font-sans ">
            <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 max-w-[1250px]">
                <div className="flex items-center gap-16  mt-32">
                    <Image
                        src="/pp.png"
                        width={400}
                        height={700}
                        alt="profil picture"
                        className="rounded-xl"
                    />
                    <div className="flex flex-col items-start gap-6 ">
                        <div className="font-title flex-none">
                            <h1 className="flex flex-col gap-5 items-start">
                                <div className="text-3xl">{t("title")}</div>
                                <div className="text-7xl">{t("subtitle")}</div>
                            </h1>
                        </div>
                        <div className="text-xl max-w-xl whitespace-pre-line flex flex-col gap-8">
                            <p>{t("description1")}</p>
                            <p>{t("description2")}</p>
                            <p>{t("description3")}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center my-12">
                    <Button label="Mon CV" />
                </div>
                <div className="flex flex-col items-start gap-6 w-full mt-32">
                    <div className="font-title">
                        <h1 className="flex flex-col gap-5 items-start">
                            <div className="text-3xl">{t("stack")}</div>
                            <div className="text-6xl">{t("skills")}</div>
                        </h1>
                    </div>
                    <h2 className="text-lg max-w-xl">{t("stack_desc")}</h2>
                </div>
                <div className="w-full flex flex-col gap-12 mt-16">
                    {skills.map((el) => (
                        <div
                            key={el.title}
                            className="bg-background-tertiary rounded-xl p-16"
                        >
                            <h2 className="font-title text-xl">
                                {t(el.title)}
                            </h2>
                            <div className="grid grid-cols-3 w-full gap-8 opacity-100 max-w-[1250px] mt-8 ">
                                {el.items.map((el) => {
                                    const Icon = el.icon;
                                    return (
                                        <div
                                            key={el.name}
                                            className="flex  gap-4 items-center"
                                        >
                                            <div className="flex justify-center items-center bg-foreground text-background w-16 h-16 rounded-2xl">
                                                <Icon className="h-10 w-10" />
                                            </div>
                                            <div className="flex flex-col items-between">
                                                <div className="font-title">
                                                    {el.name}
                                                </div>
                                                <div>{el.description}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center my-12">
                    <Button
                        label={t("all_projects")}
                        href={`/${locale}/projects`}
                    />
                </div>
            </main>
        </div>
    );
}
