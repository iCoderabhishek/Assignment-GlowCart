import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface UseProductsReturn {
  products: Product[];
  product: Product | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * useProducts
 * - If `id` is provided -> fetch single product
 * - If no `id` -> fetch all products
 */
export const useProducts = (id?: number): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      if (id) {
        // fetch single product
        const res = await axios.get<Product>(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(res.data);
        setProducts([]); // clear list when single product is fetched
      } else {
        // fetch all products
        const res = await axios.get<{ products: Product[] }>(
          "https://dummyjson.com/products"
        );
        setProducts(res.data.products);
        setProduct(null);
      }
    } catch (err: any) {
      setError(err?.message || "Failed to fetch data");
      setProducts([]);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { products, product, loading, error, refetch: fetchData };
};
