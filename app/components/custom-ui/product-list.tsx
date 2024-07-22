import { Product } from "@/types";
import NoResults from "./no-results";
import ProductCard from "./product-card";

interface ProductListProps {
  title: string;
  data: Product[];
};

const ProductList: React.FC<ProductListProps> = ({
  title,
  data,
}) => {
  return (
    <>
      <div className="space-y-4">
        <h3 className="font-bold text-3xl">
          {title}
        </h3>

        {data.length === 0 && <NoResults />}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <ProductCard
              key={item.id}
              data={item}
            />
          ))}
        </div>
      </div>
    </>
  )
};

export default ProductList;