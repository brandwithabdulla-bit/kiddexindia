import React, { createContext, useState, useEffect } from 'react';
import { client, urlFor } from '../sanity/sanityClient';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        // Fetch products from Sanity
        const query = '*[_type == "product"]';
        const sanityProducts = await client.fetch(query);

        // Map the sanity data to the format expected by the frontend
        const formattedProducts = sanityProducts.map(product => {
          return {
            ...product,
            id: product._id,
            // Convert sanity image objects to URLs
            images: product.images ? product.images.map(image => urlFor(image).url()) : [],
            // Ensure defaults for arrays if they are undefined in sanity
            benefits: product.benefits || [],
            includes: product.includes || [],
            skills: product.skills || [],
            tags: product.tags || []
          };
        });

        setProducts(formattedProducts);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch products from Sanity:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, isLoading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};
