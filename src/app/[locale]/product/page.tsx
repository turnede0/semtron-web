import React from "react";
import PageLayout from "@src/components/PageLayout";
import ProductHomeOverlay from "@src/components/Product/ProductHomeOverlay";
import ProductFeatureOverlay from "@src/components/Product/ProductFeatureOverlay";
import ProductPCBOverlay from "@src/components/Product/ProductPCBOverlay";
import ProductItemOverlay from "@src/components/Product/ProductItemOverlay";
import ProductScreenOverlay from "@src/components/Product/ProductScreenOverlay";
import ProductHighlightOverlay from "@src/components/Product/ProductHighlightOverlay";
import ProductConclusionOverlay from "@src/components/Product/ProductConclusionOverlay";

export default function ProductPage() {
  return (
    <PageLayout>
      <ProductHomeOverlay />
      <ProductFeatureOverlay />
      <ProductPCBOverlay />
      <ProductItemOverlay />
      <ProductScreenOverlay />
      <ProductHighlightOverlay />
      <ProductConclusionOverlay />
    </PageLayout>
  );
}
