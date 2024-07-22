import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/app/components/custom-ui/billboard";
import Container from "@/app/components/custom-ui/container";
import ProductList from "@/app/components/custom-ui/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboards("71f1666f-7db1-44e7-9b9d-bd3a29dfe738");

  return (
    <>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard
            data={billboard}
          />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList
              title="Featured Products"
              data={products}
            />
          </div>
        </div>
      </Container>
    </>
  )
};

export default HomePage;