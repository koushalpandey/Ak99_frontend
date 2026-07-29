import { Box, Typography, Link} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import useDashboardProduct from "../../../store/homepageStores/dashboardStore";
import CategorySkeletonComponent from "../../../components/useFullcomponents/skeletons/Category-component/categorySkeleton";

const MotionBox = motion.create(Box);

export default function CategoryNav() {
  const navigate = useNavigate();

  const categories = useDashboardProduct((state) => state.categories);
  const loading = useDashboardProduct((state) => state.loading);
  const error = useDashboardProduct((state) => state.error);

  // Skeleton UI
  if (loading) {
    return (
     <CategorySkeletonComponent />
    );
  }

  if (error) return null;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        overflowX: "auto",
        backgroundColor: "#ffffff",
        width: "100%",
        gap: 5,
        py: 2,
        px: 1,
        "::-webkit-scrollbar": { display: "none" },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <AnimatePresence>
        {categories?.map((category, index) => {
          const categoryImage =
            category?.image?.original ||
            category?.image?.medium ||
            category?.image?.url ||
            "N/A";

          const categoryName = category?.name || "Category";

          return (
            <MotionBox
              key={category.id}
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
                scale: 1.06,
              }}
            >
              <Link
                underline="none"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                <MotionBox
                  onClick={() => navigate(`/categorie/${category?.slug}`)}
                  whileHover={{
                    rotate: [0, -3, 3, 0],
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  sx={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    border: "1px solid #000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    mb: "10px",
                    boxShadow: "0 3px 12px rgba(0,0,0,.08)",
                    bgcolor: "#fff",
                  }}
                >
                  <MotionBox
                    component="img"
                    src={categoryImage}
                    alt={categoryName}
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      scale: 1.12,
                    }}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </MotionBox>

                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "text.primary",
                    textAlign: "center",
                    fontSize: "12px",
                    lineHeight: 1.2,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: 104,
                  }}
                >
                  {categoryName}
                </Typography>
              </Link>
            </MotionBox>
          );
        })}
      </AnimatePresence>
    </Box>
  );
}