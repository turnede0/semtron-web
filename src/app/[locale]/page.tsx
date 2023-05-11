import React from "react";
import { useTranslations } from "next-intl";
import PageLayout from "@/components/PageLayout";

export default function IndexPage() {
  const t = useTranslations("IndexPage");

  return (
    <PageLayout title={t("title")}>
      <p className="max-w-[590px]">
        {t.rich("description", {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          ),
        })}
      </p>
    </PageLayout>
  );
}