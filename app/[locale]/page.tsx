import LocaleSwitcher from "@/src/components/Switchers/LocaleSwitcher";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import LogoIcon from "@/src/assets/icon.svg";
import ProjectCard from "@/src/components/Cards/ProjectCard/ProjectCard";
import Button from "@/src/components/Buttons/Button";
import projectData from "@/src/data/projects.json";
import FadeIn from "@/src/components/Animations/FadeIn";
import FadeInGrid from "@/src/components/Animations/FadeInGrid";
import FadeInOnLoad from "@/src/components/Animations/FadeInOnLoad";
import { ParallaxY } from "@/src/components/Animations/ParallaxY";
import FrontendIcon from "@/src/assets/front-end.svg";
import PhoneIcon from "@/src/assets/phone.svg";
import ServerIcon from "@/src/assets/server.svg";

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
                                <FadeInOnLoad delay={0.5}>
                                    <div className=" text-3xl lg:text-3xl text-center lg:text-start">
                                        {t("title")}
                                    </div>
                                </FadeInOnLoad>
                                <FadeInOnLoad delay={0.7}>
                                    <div className="text-5xl lg:text-7xl text-center lg:text-start">
                                        Theo Cherblanc
                                    </div>
                                </FadeInOnLoad>
                            </h1>
                        </div>
                        <FadeInOnLoad delay={0.9}>
                            <h2 className="text-lg lg:text-2xl text-center lg:text-start max-w-xl">
                                {t("subtitle")}
                            </h2>
                        </FadeInOnLoad>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex flex-col lg:flex-row items-center gap-5">
                                <FadeInOnLoad delay={1}>
                                    <div className="flex justify-center items-center text-4xl bg-background-secondary text-white rounded-lg w-15 h-15">
                                        10
                                    </div>
                                </FadeInOnLoad>
                                <FadeInOnLoad delay={1.2}>
                                    <div className="text-lg lg:text-xl">
                                        {t("completed_projects")}
                                    </div>
                                </FadeInOnLoad>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center gap-5">
                                <FadeInOnLoad delay={1}>
                                    <div className="flex justify-center items-center text-4xl bg-background-secondary text-white rounded-lg w-15 h-15">
                                        5
                                    </div>
                                </FadeInOnLoad>
                                <FadeInOnLoad delay={1.2}>
                                    <div className="text-lg lg:text-xl">
                                        {t("years_experience")}
                                    </div>
                                </FadeInOnLoad>
                            </div>
                        </div>
                    </div>
                    <FadeInOnLoad delay={0.2} rotate={0} y={64}>
                        <div className="relative w-[350px] h-350px]  flex lg:hidden items-center justify-center mt-6 lg:mt-0">
                            <div className="absolute bg-white rounded-full w-[300px] h-[300px] z-1"></div>
                            <LogoIcon className="text-black z-2" />
                        </div>
                    </FadeInOnLoad>
                    <FadeInOnLoad delay={0.2} rotate={0} y={64}>
                        <div className="relative w-[350px] h-[35Opx] lg:w-[500px] lg:h-[500px] xl:w-[800px] xl:h-[800px] hidden lg:flex items-center justify-center">
                            <div className="absolute bg-white rounded-full w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[550px] z-1"></div>

                            <Image
                                src="icon.gif"
                                alt="Ball animation"
                                width={2000}
                                height={2000}
                                unoptimized
                                className="z-2"
                            />
                        </div>
                    </FadeInOnLoad>
                </div>
                <FadeIn>
                    <div className="font-title text-5xl lg:text-6xl mb-14 lg:mb-24 lg:mt-32 xl:mt-64 mt-20">
                        {tc("projects")}
                    </div>
                </FadeIn>

                <FadeInGrid
                    className="grid grid-cols-1 lg:grid-cols-3 w-100 lg:w-full gap-8 max-w-[1250px] mb-12 lg:mb-24 px-6 lg:px-0"
                    y={50}
                    rotate={-8}
                    duration={0.5}
                    stagger={0.2}
                >
                    {projectData.projects.slice(0, 3).map((el) => (
                        <ProjectCard
                            title={el.title}
                            tags={el.tags}
                            image={el.image}
                            key={el.id}
                            href={`/${locale}/projects/${el.id}`}
                        />
                    ))}
                </FadeInGrid>

                <Button
                    label={t("all_projects")}
                    href={`/${locale}/projects`}
                    className="transition-transform duration-200 ease-out hover:scale-105"
                />

                <div className="mt-32 lg:mt-64 flex flex-col items-start gap-12 max-w-[1250px] w-full ">
                    <div className="font-title flex-none">
                        <h1 className="flex flex-col gap-3 items-start">
                            <FadeIn>
                                <div className="text-3xl lg:text-3xl">
                                    {t("need")}
                                </div>
                            </FadeIn>
                            <FadeIn>
                                <div className="text-6xl lg:text-7xl">
                                    {t("interface")} ?
                                </div>
                            </FadeIn>
                        </h1>
                    </div>
                    <FadeIn>
                        <h2 className="text-xl lg:text-2xl max-w-xl">
                            {t("service_desc")}
                        </h2>
                    </FadeIn>
                </div>
                <FadeInGrid className="grid grid-cols-1 lg:grid-cols-3 w-100 lg:w-full gap-8 opacity-100 max-w-[1250px] px-6 lg:px-0 mb-12 mt-24 lg:my-24">
                    <div className="flex flex-col items-center gap-4 bg-background-tertiary py-12 px-4 rounded-xl">
                        <FadeIn>
                            <FrontendIcon className="w-32 h-32" />
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <div className="text-center text-3xl font-title">
                                {t("crafting_interactive_interfaces")}
                            </div>
                        </FadeIn>
                        <div className="flex flex-col gap-2 text-center">
                            <FadeIn>
                                <div>{t("responsive_designs")}</div>
                            </FadeIn>
                            <FadeIn>
                                <div>{t("animations_micro_interactions")}</div>
                            </FadeIn>
                            <FadeIn>
                                <div>{t("accessibility_approach")}</div>
                            </FadeIn>
                            <FadeIn>
                                <div>React / Vue.Js / React Frameworks</div>
                            </FadeIn>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 bg-background-tertiary py-12 px-4 rounded-xl">
                        <FadeIn>
                            <PhoneIcon className="w-32 h-32" />
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <div className="text-center text-3xl font-title">
                                {t("application_pwa")}
                            </div>
                        </FadeIn>
                        <div className="flex flex-col gap-2 text-center">
                            <FadeIn>
                                <div>{t("offline_fast")}</div>
                            </FadeIn>
                            <FadeIn>
                                <div>{t("push_notifications")}</div>
                            </FadeIn>
                            <FadeIn>
                                <div>{t("cross_platform")}</div>
                            </FadeIn>
                            <FadeIn>
                                <div>Ionic / Capacitor / React</div>
                            </FadeIn>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 bg-background-tertiary py-12 px-4 rounded-xl">
                        <FadeIn>
                            <ServerIcon className="w-32 h-32" />
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <div className="text-center text-3xl font-title">
                                {t("back_end")}
                            </div>
                        </FadeIn>
                        <div className="flex flex-col gap-2 text-center">
                            <FadeIn>
                                <div>{t("api_microservices")}</div>
                            </FadeIn>
                            <FadeIn>
                                <div>{t("database_design")}</div>
                            </FadeIn>
                            <FadeIn>
                                <div>{t("authentication_security")}</div>
                            </FadeIn>
                            <FadeIn>
                                <div>Node.js / Javascript / SQL</div>
                            </FadeIn>
                        </div>
                    </div>
                </FadeInGrid>
                <Button
                    label={t("about_me")}
                    className="transition-transform duration-200 ease-out hover:scale-105"
                />
            </main>
        </div>
    );
}
