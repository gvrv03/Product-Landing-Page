import LandingPage from "@/components/LandingPage";
import Services from "@/components/Services";
export default function Home() {
  return (
    <>
      <LandingPage />
      <Services />
      <div className="container m-auto" >
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz-551-ANC-product-highlights_Desktop.jpg?v=1698995120" className="w-full" />
      </div>
    </>
  );
}
