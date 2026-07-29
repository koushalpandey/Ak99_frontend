import { useEffect, useState } from "react";
import {
  Box,
  Button,
  InputBase,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { searchProduct } from "../../../../api/endpoint/api.endpoint.js";
import SearchResultDropdown from "./SearchResultDropdown";

function HeaderSearch() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!search.trim()) {
      setProducts([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const res = await searchProduct(search);
        setProducts(res?.data?.products || []);
      } catch (err) {
        console.log(err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #e0e0e0",
          borderRadius: "10px",
          overflow: "hidden",
          height: 45,
          bgcolor: "#fff",
        }}
      >
        <Box
          sx={{
            minWidth: 160,
            pl: 3,
            pr: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRight: "1px solid #e0e0e0",
            cursor: "pointer",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
            }}
          >
            All Categories
          </Typography>

          <KeyboardArrowDownIcon />
        </Box>

        <InputBase
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for products..."
          sx={{
            flex: 1,
            px: 3,
          }}
        />

        <Button
          variant="contained"
          disableElevation
          sx={{
            mr: .5,
            borderRadius: 2,
            textTransform: "none",
            px: 4,
          }}
        >
          Search
        </Button>
      </Box>

      <SearchResultDropdown
        loading={loading}
        products={products}
        search={search}
        onClose={() => setSearch("")}
      />
    </Box>
  );
}

export default HeaderSearch;