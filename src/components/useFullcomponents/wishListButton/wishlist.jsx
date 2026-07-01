import { useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AddWishList } from "../../../api/endpoint/api.endpoint";

const WishlistButton = ({ userId, productId, }) => {


    const [isWishlisted, setIsWishlisted] = useState(false);

    const handleWishlist = async () => {
        try {
            const payload = {
                userId,
                productId,
            };
            await AddWishList(payload);
            setIsWishlisted((prev) => !prev);
            console.log("Wishlist updated:", payload);
        } catch (error) {
            console.error("Failed to update wishlist:", error);


        }
    };
    return (
        <IconButton
            onClick={handleWishlist}
            sx={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "rgba(255,255,255,0.9)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                zIndex: 10,
                p: "6px",
                transition: "all 0.2s ease",
                "&:hover": {
                    backgroundColor: "#fff",
                    transform: "scale(1.05)",
                },
            }}
        >
            {isWishlisted ? (
                <FavoriteIcon sx={{ color: "#e74c3c", fontSize: 20 }} />
            ) : (
                <FavoriteBorderIcon sx={{ fontSize: 20 }} />
            )}
        </IconButton>
    );
};

export default WishlistButton;