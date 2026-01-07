import { useLocale, useTranslations } from "next-intl";
import { routing } from "../../i18n/routing";
import LocaleSwitcher from "../Switchers/LocaleSwitcher";
import Image from "next/image";
import ThemeSwitcher from "../Switchers/ThemeSwitcher";
import Icon from "@/src/assets/icon_small.svg";
import Link from "next/link";
import Button from "../Buttons/Button";

export default function Footer() {
    const t = useTranslations("Footer");
    const locale = useLocale();

    return (
        <div className="flex items-center justify-center my-64 ">
            <div className="bg-foreground text-background max-w-[1250px] w-full rounded-xl flex flex-col items-center gap-6 p-24">
                <div className="font-title flex-none">
                    <h1 className="flex flex-col gap-5 items-center">
                        <div className="text-3xl">{t("box_title_1")}</div>
                        <div className="text-7xl">{t("box_title_2")} ?</div>
                    </h1>
                </div>
                <h2 className="text-2xl max-w-xl">{t("box_desc")}</h2>
                <Button label={t("contact_me")} variant="secondary" />
            </div>
        </div>
    );
}
