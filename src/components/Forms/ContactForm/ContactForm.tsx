"use client";

import { useState } from "react";
import Button from "../../Buttons/Button";
import { toast, Toaster } from "sonner";

type ContactFormProps = {
    label: {
        name: string;
        mail: string;
        message: string;
        validation: string;
        send: string;
        success: string;
        error: string;
        sending: string;
    };
};

export default function ContactForm({ label }: ContactFormProps) {
    const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL!;

    const [status, setStatus] = useState<
        "idle" | "sending" | "success" | "error"
    >("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const res = await fetch(FORMSPREE_URL, {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            if (!res.ok) throw new Error();

            setStatus("success");
            toast.success(label.success);
            form.reset();
        } catch {
            toast.error(label.error);
            setStatus("error");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <Toaster richColors position="top-right" />
            <div className="flex flex-col lg:flex-row gap-6">
                <input
                    type="text"
                    name="name"
                    placeholder={label.name}
                    required
                    className="border p-4 lg:w-2/3 rounded-xl text-foreground"
                />
                <input
                    type="email"
                    name="email"
                    placeholder={label.mail}
                    required
                    className="border p-4 lg:w-2/3 rounded-xl text-foreground"
                />
            </div>

            <textarea
                name="message"
                placeholder={label.message}
                rows={5}
                required
                className="border p-4 w-full rounded-xl text-foreground"
            />

            <div className="flex items-start gap-3">
                <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    required
                    className="mt-1 accent-primary"
                />

                <label htmlFor="consent" className="">
                    {label.validation}
                </label>
            </div>

            <input type="text" name="_gotcha" className="hidden" />
            <div className="flex justify-center">
                <Button
                    type="submit"
                    disabled={status === "sending"}
                    label={
                        status === "sending"
                            ? `${label.sending}...`
                            : label.send
                    }
                />
            </div>
        </form>
    );
}
