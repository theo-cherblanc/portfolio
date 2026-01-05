import { useLocale, useTranslations } from "next-intl";
import { routing } from "../../i18n/routing";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
    const t = useTranslations("locale");
    const locale = useLocale();

    return (
        <>
            <LocaleSwitcherSelect
                defaultValue={locale}
                items={routing.locales.map((cur) => ({
                    value: cur,
                    label: t(cur),
                }))}
            ></LocaleSwitcherSelect>
        </>
    );
}
