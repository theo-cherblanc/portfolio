import { useTranslations } from "next-intl";
import Button from "../Buttons/Button";

export default function Footer() {
    const t = useTranslations("Footer");

    return (
        <div className="flex items-center justify-center my-32 lg:my-64 px-6">
            <div className="bg-foreground text-background max-w-[1250px] w-full rounded-xl flex flex-col items-center gap-6 p-8 lg:p-24">
                <div className="font-title flex-none">
                    <h1 className="flex flex-col gap-5 items-center">
                        <div className="text-3xl text-center lg:text-start">
                            {t("box_title_1")}
                        </div>
                        <div className="text-7xl text-center lg:text-start">
                            {t("box_title_2")} ?
                        </div>
                    </h1>
                </div>
                <h2 className="text-2xl max-w-xl text-center lg:text-start">
                    {t("box_desc")}
                </h2>
                <Button label={t("contact_me")} variant="secondary" />
            </div>
        </div>
    );
}
