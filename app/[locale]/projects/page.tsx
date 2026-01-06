import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import ProjectCard from "@/src/components/Cards/ProjectCard/ProjectCard";
import Button from "@/src/components/Buttons/Button";
import LogoIcon from "@/src/assets/icon.svg";

export default async function Projects({ params }: PageProps<"/[locale]">) {
    const { locale } = await params;

    setRequestLocale(locale as Locale);
    const t = await getTranslations("Project");
    const tc = await getTranslations("Common");

    const projects = [
        {
            id: "1",
            title: "ARS Normandie",
            tags: [
                "web_app",
                "frontend",
                "payroll",
                "business_application",
                "react",
            ],
            image: "/ARS1.png",
        },
        {
            id: "2",
            title: "Omnitrans",
            tags: ["mobile_app", "pwa", "tool", "companion_app", "frontend"],
            image: "/omnitrans.png",
        },
        {
            id: "3",
            title: "Solveo",
            tags: [
                "web_app",
                "frontend",
                "backoffice",
                "business_application",
                "react",
            ],
            image: "/solveo.png",
        },
        {
            id: "4",
            title: "Atelier 3s",
            tags: ["mobile_app", "pwa", "companion_app", "frontend"],
            image: "/atelier3s.png",
        },
        {
            id: "5",
            title: "APHP",
            tags: [
                "web_app",
                "frontend",
                "3d_visualization",
                "tool",
                "business_application",
                "react",
            ],
            image: "/aphp.png",
        },
        {
            id: "6",
            title: "Osteobrioude",
            tags: ["showcase_website", "next.js"],
            image: "/osteobrioude.png",
        },
        {
            id: "7",
            title: "Billaudot",
            tags: ["e-commerce", "frontend", "thelia"],
            image: "/billaudot.png",
        },
        {
            id: "8",
            title: "Jardin de mado",
            tags: ["e-commerce", "frontend", "thelia"],
            image: "/jardinmado1.png",
        },
        {
            id: "9",
            title: "Kalkin Tourisme",
            tags: ["web_app", "backoffice", "companion_app", "fullstack"],
            image: "/kalkin1.png",
        },
        {
            id: "10",
            title: "Kalkin Tools",
            tags: [
                "web_app",
                "backoffice",
                "companion_app",
                "fullstack",
                "tool",
            ],
            image: "/kalkin.png",
        },
    ];

    return (
        <div className="flex min-h-screen items-center justify-center  font-sans">
            <main className="flex min-h-screen w-full flex-col items-center justify-between py-64 px-16">
                <div className="flex items-center justify-between max-w-[1250px] w-full">
                    <div className="flex flex-col items-start gap-6 ">
                        <div className="font-title flex-none">
                            <h1 className="flex flex-col gap-5 items-start">
                                <div className="text-5xl">{t("my")}</div>
                                <div className="text-8xl">{t("projects")}</div>
                            </h1>
                        </div>
                        <h2 className="text-2xl max-w-xl">{t("subtitle")}</h2>
                    </div>
                    <div className="relative w-[600px] h-600px] flex items-center justify-center">
                        <div className="absolute bg-white rounded-lg w-[600px] h-[400px] z-1"></div>
                        <LogoIcon className="text-black z-2" />
                    </div>
                </div>
                <div className="grid grid-cols-3 w-full gap-8 opacity-100 max-w-[1250px] mb-24 mt-32">
                    {projects.map((el) => (
                        <ProjectCard
                            title={el.title}
                            tags={el.tags}
                            image={el.image}
                            key={el.id}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
