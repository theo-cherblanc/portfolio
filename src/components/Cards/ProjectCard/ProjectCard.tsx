import { useTranslations } from "next-intl";

import Image from "next/image";
import Icon from "@/src/assets/icon_small.svg";
import Link from "next/link";
import FadeIn from "../../Animations/FadeIn";

type ProjectCardProps = {
    title: string;
    tags: string[];
    image: string;
    href: string;
};

export default function ProjectCard({
    title,
    tags,
    image,
    href,
}: ProjectCardProps) {
    const t = useTranslations("Project");

    return (
        <Link className="bg-background-tertiary p-3 rounded-xl" href={href}>
            <Image
                width={400}
                height={600}
                src={image}
                alt="Project Image"
                className="rounded-xl "
                style={{ objectFit: "contain" }}
            />
            <div className="p-3">
                <div className="text-2xl mb-4 font-title">{title}</div>

                <FadeIn delay={0.3}>
                    <div className="flex gap-3 gap-y-1 flex-wrap text-sm capitalize">
                        {tags.map((el) => (
                            <div key={el}>{t(el)}</div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </Link>
    );
}
