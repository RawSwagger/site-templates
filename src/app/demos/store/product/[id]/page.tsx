import content from "@/data/store-content.json";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
  return content.products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = content.products.find((p) => p.id === id) || null;

  return <ProductDetail product={product} />;
}
