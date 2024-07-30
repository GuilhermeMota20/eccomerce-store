import { CreditCard, ShieldCheck, Truck } from "lucide-react";

const BarMarket = () => {
  return (
    <>
      <div className="py-2 px-4 sm:px-8 hidden md:flex items-center justify-center gap-8 border-b">
        <div className="flex items-center gap-2">
          <ShieldCheck size={24} />
          <span>100% de privacidade dos seus dados</span>
        </div>
        <div className="flex items-center gap-2">
          <Truck size={24} />
          <span>Entregas rapidas</span>
        </div>
        <div className="flex items-center gap-2">
          <CreditCard size={24} />
          <span>Compras 100% segura</span>
        </div>
      </div>
    </>
  )
};

export default BarMarket;