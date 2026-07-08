import { Container } from "@mui/material";
import Subheader from "./subheader/subheader";
import SliderComponent from "./slider/slider";
import CategoryNav from "./categories/categories";
import TopDealsOfTheDay from "./offerDeals/topdeals";
import ProductList from "./productListing/productlist";
import { useEffect, useState } from "react";
import { fetchProductListings } from "../../components/dummyData/productDummyData,";
import { fetchCategories } from "../../components/dummyData/categoriDummyData";
import PromoBanners from "./promobanner";
import MarketingBannerZone from "../../components/Trust/ourtrust";



function Homepage() {

    const [productData, setProductData] = useState([])
    const [CategoryData, setCategoryData] = useState([])

    const getProduct = async () => {
        try {
            const res = await fetchProductListings()
            setProductData(res)
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
        getCategories()
    }, []);




    return (
        <Container maxWidth="xl" disableGutters>
            <Subheader />
            <SliderComponent />
            <MarketingBannerZone />

            <CategoryNav
                categoriesData={CategoryData}
            />
            <TopDealsOfTheDay />
            <PromoBanners />
            <ProductList
                productData={productData}
                backgroundColor={"backgroundPurpleSoft.main"}
            />


        </Container>

    );
}

export default Homepage;