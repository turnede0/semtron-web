import React from "react";
import PageLayout from "@src/components/PageLayout";
import ProductOverlay from "@src/components/Product/ProductOverlay";
import ProductDescriptionOverlay from "@src/components/Product/ProductDescriptionOverlay";
import ProductReviewOverlay from "@src/components/Product/ProductReviewOverlay";
import ProductionGameOverlay from "@src/components/Product/ProductionGameOverlay";

export default function ProductPage() {
  return (
    <PageLayout>
      <ProductOverlay />
      <ProductReviewOverlay />
      <ProductDescriptionOverlay />
      <ProductionGameOverlay />
    </PageLayout>
  );
}
