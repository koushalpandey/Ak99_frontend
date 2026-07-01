import { Grid, Container } from "@mui/material";
import ProductImages from "./productDetails/productImages";
import ProductInformation from "./productDetails/productimformation";
import Specification from "./productDetails/specification";
import ProductCategory from "../HomepagePages/specificCategories/productCategorie";
import ReviewSection from "../../components/useFullcomponents/DesignComponent/reviewDesign/userReview";
import ProductBreadcrumb from "../../components/useFullcomponents/breadcrumb/productBreadcrumb";
import useProductDetailStore from "../../store/productDetailStores/store.js";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const ProductDetailsPage = () => {
  const ProductDetail = useProductDetailStore((state) => state?.Data)
  const fetchProductDetail = useProductDetailStore((state) => state?.fetchProductDetail)
  const { slug } = useParams();
  useEffect(() => {
    fetchProductDetail(slug)
  }, [fetchProductDetail, slug])

return (
    <Container maxWidth="xl" disableGutters sx={{ p: 0 }}>
      <Grid container spacing={0} sx={{ minHeight: "100vh" }}>

        <Grid size={{ xs: 12, md: 6 }} sx={{
          position: { xs: "none", md: 'sticky' },
          top: { xs: "none", md: "1px" },
          height: { xs: "none", md: "fit-content" },
        }}>
          <ProductBreadcrumb
          categorieName={ProductDetail?.category?.slug}
          productName={ProductDetail?.slug}

          />
          <ProductImages
            Productimages={ProductDetail?.images}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <ProductInformation
          productData = {ProductDetail}
          />
          <Specification />
          <ReviewSection />
        </Grid>
      </Grid>

      <ProductCategory />
    </Container>
  );
};

export default ProductDetailsPage;