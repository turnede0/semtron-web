import React from "react";
import { useTranslations } from "next-intl";
import PageLayout from "@src/components/PageLayout";
import ProductOverlay from "@src/components/Product/ProductOverlay";
import ProductDescriptionOverlay from "@src/components/Product/ProductDescriptionOverlay";
import ProductReviewOverlay from "@src/components/Product/ProductReviewOverlay";

export default function ProductPage() {
  const t = useTranslations("ProductPage");

  return (
    <PageLayout title={t("title")}>
      <ProductOverlay />
      <ProductReviewOverlay />
      <ProductDescriptionOverlay />
    </PageLayout>
  );
}
