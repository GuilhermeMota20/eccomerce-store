"use client";

import Container from "@/app/components/custom-ui/container";
import useCart from "@/hooks/use-cart";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";
import { useEffect, useState } from "react";
import { PackageOpen } from "lucide-react";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  };

  return (
    <>
      <div className="bg-white">
        <Container>
          <div className="px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl text-bold text-black">
              Shopping Cart
            </h1>

            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
              <div className="lg:col-span-7">
                {cart.items.length === 0 ? (
                  <div className="text-neutral-500 flex flex-col items-center justify-center">
                    <PackageOpen size={300} strokeWidth="0.5px" />
                    <p className="text-center">
                      No Items added to cart.
                    </p>
                  </div>
                ) : null}

                <ul>
                  {cart.items.map((item) => (
                    <CartItem
                      key={item.id}
                      data={item}
                    />
                  ))}
                </ul>
              </div>

              <Summary />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
};

export default CartPage;