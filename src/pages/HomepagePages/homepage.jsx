import { Container } from "@mui/material";
import Subheader from "./subheader/subheader";
import SliderComponent from "./slider/slider";
import CategoryNav from "./categories/categories";
import ProductList from "./productListing/productlist";
import { useEffect } from "react";
import PromoBanners from "./promobanner";
import MarketingBannerZone from "../../components/Trust/ourtrust";
import useDashboardProduct from "../../store/homepageStores/dashboardStore";




function Homepage() {
    const CategoriesProduct = useDashboardProduct((state) => state?.Electronic)
    const fetchDashBoardProduct = useDashboardProduct((state) => state?.fetchDashBoardProduct)

    useEffect(() => {

        fetchDashBoardProduct()
    }, [fetchDashBoardProduct]);

    return (
        <Container maxWidth="xl" disableGutters>
            <Subheader />
            <SliderComponent />
            <MarketingBannerZone />

            <CategoryNav />
            <ProductList
                title={"Electronic"}
                data={CategoriesProduct}
                backgroundColor={"backgroundPurpleSoft.main"}
            />
            <PromoBanners />
            <ProductList
                title={"Electronic"}
                data={CategoriesProduct}
                backgroundColor={"backgroundPurpleSoft.main"}
            />


        </Container>

    );
}

export default Homepage;