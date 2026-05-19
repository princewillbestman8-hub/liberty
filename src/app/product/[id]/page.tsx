import { notFound } from 'next/navigation';
import { getProductById, getRelatedProducts, products } from '@/data/products';
import { ProductDetailView } from '@/components/product-detail-view';

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.category, product.id);

  return <ProductDetailView product={product} relatedProducts={relatedProducts} />;
}
