import { useLocale, useTranslations } from "next-intl";
import { routing } from "../../i18n/routing";
import LocaleSwitcher from "../Switchers/LocaleSwitcher";
import Image from "next/image";
import ThemeSwitcher from "../Switchers/ThemeSwitcher";
import Icon from "@/src/assets/icon_small.svg";

export default function NavBar() {
    const t = useTranslations("Common");
    const locale = useLocale();

    return (
        <div className="fixed p-8 flex justify-between items-center w-full">
            <div className="flex gap-8 items-center text-2xl">
                <div className="bg-primary rounded-lg p-2">
                    <Icon className="w-16 h-16 text-black" />
                </div>
                <div>{t("projects")}</div>
                <div>{t("about")}</div>
                <div>{t("contact")}</div>
            </div>
            <div className="flex gap-8 items-center">
                <div>
                    <LocaleSwitcher />
                </div>
                <div>
                    <ThemeSwitcher />
                </div>
            </div>
        </div>
    );
}
