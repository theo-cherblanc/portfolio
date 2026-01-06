import LocaleSwitcher from "@/src/components/Switchers/LocaleSwitcher";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import LogoIcon from "@/src/assets/icon.svg";
import ProjectCard from "@/src/components/Cards/ProjectCard/ProjectCard";
import Button from "@/src/components/Buttons/Button";

export default async function Home({ params }: PageProps<"/[locale]">) {
    const { locale } = await params;

    // Enable static rendering
    setRequestLocale(locale as Locale);
    const t = await getTranslations("Home");
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
    ];

    return (
        <div className="flex min-h-screen items-center justify-center  font-sans">
            <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16">
                <div className="flex items-center justify-between max-w-[1250px]">
                    <div className="flex flex-col items-start gap-6 ">
                        <div className="font-title flex-none">
                            <h1 className="flex flex-col gap-5 items-start">
                                <div className="text-3xl">{t("title")}</div>
                                <div className="text-7xl">Theo Cherblanc</div>
                            </h1>
                        </div>
                        <h2 className="text-2xl max-w-xl">{t("subtitle")}</h2>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-5">
                                <div className="flex justify-center items-center text-4xl bg-background-secondary text-white rounded-lg w-15 h-15">
                                    10
                                </div>
                                <div className="text-xl">
                                    {t("completed_projects")}
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex justify-center items-center text-4xl bg-background-secondary text-white rounded-lg w-15 h-15">
                                    5
                                </div>
                                <div className="text-xl">
                                    {t("years_experience")}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[1000px] h-[1000px] flex items-center justify-center">
                        <div className="absolute bg-white rounded-full w-[500px] h-[500px] z-1"></div>
                        {/* <LogoIcon className="text-black z-2" /> */}
                        <Image
                            src="icon.gif"
                            alt="Ball animation"
                            width={2000}
                            height={2000}
                            unoptimized
                            className="z-2"
                        />
                    </div>
                </div>
                <div className="font-title text-6xl mb-24">
                    {tc("projects")}
                </div>
                <div className="grid grid-cols-3 w-full gap-8 opacity-100 max-w-[1250px] mb-24">
                    {projects.map((el) => (
                        <ProjectCard
                            title={el.title}
                            tags={el.tags}
                            image={el.image}
                            key={el.id}
                        />
                    ))}
                </div>
                <Button
                    label={t("all_projects")}
                    href={`/${locale}/projects`}
                />
                <div className="mt-64 flex flex-col items-start gap-6 max-w-[1250px] w-full">
                    <div className="font-title flex-none">
                        <h1 className="flex flex-col gap-5 items-start">
                            <div className="text-3xl">{t("need")}</div>
                            <div className="text-7xl">{t("interface")} ?</div>
                        </h1>
                    </div>
                    <h2 className="text-2xl max-w-xl">{t("service_desc")}</h2>
                </div>
                <div className="grid grid-cols-3 w-full gap-8 opacity-100 max-w-[1250px] my-24">
                    <div className="flex flex-col items-center gap-4 bg-background-tertiary py-12 px-4 rounded-xl">
                        <div>logo</div>
                        <div className="text-center text-3xl font-title">
                            {t("crafting_interactive_interfaces")}
                        </div>
                        <div className="flex flex-col gap-2">
                            <div>{t("responsive_designs")}</div>
                            <div>{t("animations_micro_interactions")}</div>
                            <div>{t("accessibility_approach")}</div>
                            <div>React / Vue.Js / React Frameworks</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 bg-background-tertiary py-12 px-4 rounded-xl">
                        <div>logo</div>
                        <div className="text-center text-3xl font-title">
                            {t("application_pwa")}
                        </div>
                        <div className="flex flex-col gap-2">
                            <div>{t("offline_fast")}</div>
                            <div>{t("push_notifications")}</div>
                            <div>{t("cross_platform")}</div>
                            <div>Ionic / Capacitor / React</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 bg-background-tertiary py-12 px-4 rounded-xl">
                        <div>logo</div>
                        <div className="text-center text-3xl font-title">
                            {t("back_end")}
                        </div>
                        <div className="flex flex-col gap-2">
                            <div>{t("api_microservices")}</div>
                            <div>{t("database_design")}</div>
                            <div>{t("authentication_security")}</div>
                            <div>Node.js / Javascript / SQL</div>
                        </div>
                    </div>
                </div>
                <Button label={t("about_me")} />
                <div className="bg-foreground text-background mt-64 max-w-[1250px] w-full rounded-xl flex flex-col items-center gap-6 p-24">
                    <div className="font-title flex-none">
                        <h1 className="flex flex-col gap-5 items-center">
                            <div className="text-3xl">{t("box_title_1")}</div>
                            <div className="text-7xl">{t("box_title_2")} ?</div>
                        </h1>
                    </div>
                    <h2 className="text-2xl max-w-xl">{t("box_desc")}</h2>
                    <Button label={t("contact_me")} variant="secondary" />
                </div>
            </main>
        </div>
    );
}
