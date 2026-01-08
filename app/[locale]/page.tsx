import LocaleSwitcher from "@/src/components/Switchers/LocaleSwitcher";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import LogoIcon from "@/src/assets/icon.svg";
import ProjectCard from "@/src/components/Cards/ProjectCard/ProjectCard";
import Button from "@/src/components/Buttons/Button";
import projectData from "@/src/data/projects.json";

export default async function Home({ params }: PageProps<"/[locale]">) {
    const { locale } = await params;

    // Enable static rendering
    setRequestLocale(locale as Locale);
    const t = await getTranslations("Home");
    const tc = await getTranslations("Common");

    return (
        <div className="flex min-h-screen items-center justify-center  font-sans">
            <main className="flex min-h-screen w-full flex-col items-center justify-between pb-0 pt-32 lg:py-32 px-16">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-[1250px]">
                    <div className="flex flex-col items-center lg:items-start gap-6 mt-12 lg:mt-0">
                        <div className="font-title flex-none">
                            <h1 className="flex flex-col lg:gap-5 items-center lg:items-start">
                                <div className=" text-3xl lg:text-3xl text-center lg:text-start">
                                    {t("title")}
                                </div>
                                <div className="text-5xl lg:text-7xl text-center lg:text-start">
                                    Theo Cherblanc
                                </div>
                            </h1>
                        </div>
                        <h2 className="text-lg lg:text-2xl text-center lg:text-start max-w-xl">
                            {t("subtitle")}
                        </h2>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex flex-col lg:flex-row items-center gap-5">
                                <div className="flex justify-center items-center text-4xl bg-background-secondary text-white rounded-lg w-15 h-15">
                                    10
                                </div>
                                <div className="text-lg lg:text-xl">
                                    {t("completed_projects")}
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center gap-5">
                                <div className="flex justify-center items-center text-4xl bg-background-secondary text-white rounded-lg w-15 h-15">
                                    5
                                </div>
                                <div className="text-lg lg:text-xl">
                                    {t("years_experience")}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[350px] h-350px]  flex lg:hidden items-center justify-center mt-6 lg:mt-0">
                        <div className="absolute bg-white rounded-full w-[300px] h-[300px] z-1"></div>
                        <LogoIcon className="text-black z-2" />
                    </div>
                    <div className="relative w-[350px] h-[35Opx] lg:w-[500px] lg:h-[500px] xl:w-[1000px] xl:h-[1000px] hidden lg:flex items-center justify-center">
                        <div className="absolute bg-white rounded-full w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] z-1"></div>
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
                <div className="font-title text-5xl lg:text-6xl mb-14 lg:mb-24 lg:mt-32 xl:mt-0 mt-20">
                    {tc("projects")}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 w-100 lg:w-full gap-8 max-w-[1250px] mb-12 lg:mb-24 px-6 lg:px-0">
                    {projectData.projects.slice(0, 3).map((el) => (
                        <ProjectCard
                            title={el.title}
                            tags={el.tags}
                            image={el.image}
                            key={el.id}
                            href={`/${locale}/projects/${el.id}`}
                        />
                    ))}
                </div>
                <Button
                    label={t("all_projects")}
                    href={`/${locale}/projects`}
                />
                <div className="mt-32 lg:mt-64 flex flex-col items-start gap-12 max-w-[1250px] w-full ">
                    <div className="font-title flex-none">
                        <h1 className="flex flex-col gap-3 items-start">
                            <div className="text-3xl lg:text-3xl">
                                {t("need")}
                            </div>
                            <div className="text-6xl lg:text-7xl">
                                {t("interface")} ?
                            </div>
                        </h1>
                    </div>
                    <h2 className="text-xl lg:text-2xl max-w-xl">
                        {t("service_desc")}
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 w-100 lg:w-full gap-8 opacity-100 max-w-[1250px] px-6 lg:px-0 mb-12 mt-24 lg:my-24">
                    <div className="flex flex-col items-center gap-4 bg-background-tertiary py-12 px-4 rounded-xl">
                        <div>logo</div>
                        <div className="text-center text-3xl font-title">
                            {t("crafting_interactive_interfaces")}
                        </div>
                        <div className="flex flex-col gap-2 text-center">
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
                        <div className="flex flex-col gap-2 text-center">
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
                        <div className="flex flex-col gap-2 text-center">
                            <div>{t("api_microservices")}</div>
                            <div>{t("database_design")}</div>
                            <div>{t("authentication_security")}</div>
                            <div>Node.js / Javascript / SQL</div>
                        </div>
                    </div>
                </div>
                <Button label={t("about_me")} />
            </main>
        </div>
    );
}
