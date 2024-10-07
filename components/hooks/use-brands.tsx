import { Brands } from "@prisma/client";
import React from "react";
import { Api } from "../services/api-client";

type Props = {};

const useBrands = () => {
  const [brands, setBrands] = React.useState<Brands[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchBrands = async () => {
      try {
        setLoading(true);
        const ingredients = await Api.brandsAll();
        setBrands(ingredients);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  return { brands, loading };
};

export default useBrands;
