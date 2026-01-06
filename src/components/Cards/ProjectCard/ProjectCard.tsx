import { useTranslations } from "next-intl";

import Image from "next/image";
import Icon from "@/src/assets/icon_small.svg";

type ProjectCardProps = {
    title: string;
    tags: string[];
    image: string;
};

export default function ProjectCard({ title, tags, image }: ProjectCardProps) {
    const t = useTranslations("Project");

    return (
        <div className="bg-background-tertiary p-3 rounded-xl">
            <Image
                width={400}
                height={600}
                src={image}
                alt="Project Image"
                className="rounded-xl "
                style={{ objectFit: "contain" }}
            />
            <div className="p-3">
                <div className="text-2xl text-bold mb-4">{title}</div>
                <div className="flex gap-2 gap-y-1 flex-wrap text-sm">
                    {tags.map((el) => (
                        <div key={el}>{t(el)}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}
