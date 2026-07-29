import { Grid, Container } from "@mui/material";
import { useParams } from "react-router-dom";

import ProductImages from "./productDetails/productImages";
import ProductInformation from "./productDetails/productimformation";
import Specification from "./productDetails/specification";
import ReviewSection from "../../components/useFullcomponents/DesignComponent/reviewDesign/userReview";
import ProductBreadcrumb from "../../components/useFullcomponents/breadcrumb/productBreadcrumb";
import AddReviewComponent from "./reviewDetailes/add.review";
import { useProductDetailQuery } from "../../quries/products/useProductDetailQuery.js";

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const { data } = useProductDetailQuery(slug);

  const ProductDetail = data?.data;
  return (
    <Container maxWidth="xl" disableGutters sx={{ p: 0 }}>
      <Grid container spacing={0} sx={{ minHeight: "100vh" }}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            position: { xs: "none", md: "sticky" },
            top: { xs: "none", md: "1px" },
            height: { xs: "none", md: "fit-content" },
          }}
        >
          <ProductBreadcrumb
            categorieName={ProductDetail?.category?.slug}
            productName={ProductDetail?.slug}
          />

          <ProductImages

            productId={ProductDetail?.id}
            Productimages={ProductDetail?.images}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <ProductInformation productData={ProductDetail} />

          <Specification />

          <ReviewSection />

          <AddReviewComponent productId={ProductDetail?.id} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailsPage;