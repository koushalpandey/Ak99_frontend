import { Container } from "@mui/material";
import Subheader from "./subheader/subheader";
import SliderComponent from "./slider/slider";
import CategoryNav from "./categories/categories";
import TopDealsOfTheDay from "./offerDeals/topdeals";
import MarketingBannerZone from "../../components/Trust/ourtrust";
import SuperSaverBannerZone from "./supersaver/superSaver.component";
import ProductList from "./productListing/productlist";
import { useEffect, useState } from "react";
import { fetchProductListings } from "../../components/dummyData/productDummyData,";
import { fetchSpecialProduct } from "../../components/dummyData/specailTopProductDummyData";
import SpecailProductPicks from "../../components/useFullcomponents/DesignComponent/productCardDesign/specialproductDesign";
import { fetchCategories } from "../../components/dummyData/categoriDummyData";
import ProductCategory from "./specificCategories/productCategorie";

function Homepage() {

    const [productData, setProductData] = useState([])
    const [specailproductData, setSpecailproductData] = useState([])
    const [CategoryData, setCategoryData] = useState([])

    const getProduct = async () => {
        try {
            const res = await fetchProductListings()
            setProductData(res)
        } catch (error) {
            console.log(error.message);
        }

    }
    const getTopProduct = async () => {
        try {
            const res = await fetchSpecialProduct()
            setSpecailproductData(res?.data)
        } catch (error) {
            console.log(error.message);

        }

    }
    const getCategories = async () => {
        try {
            const res = await fetchCategories()
            setCategoryData(res?.data)
        } catch (error) {
            console.log(error.message);

        }

    }

    useEffect(() => {
        getProduct()
        getTopProduct()
        getCategories()
    }, []);




    return (
        <Container maxWidth="xl">
            <Subheader />
            <SliderComponent />
            <CategoryNav
                categoriesData={CategoryData}
            />
            <TopDealsOfTheDay />
            <MarketingBannerZone />
            <SuperSaverBannerZone />
            <ProductList
                productData={productData}
                backgroundColor={"backgroundPurpleSoft.main"}
            />
            <SpecailProductPicks
                productData={specailproductData}

            />
            <ProductCategory />
        </Container>

    );
}

export default Homepage;