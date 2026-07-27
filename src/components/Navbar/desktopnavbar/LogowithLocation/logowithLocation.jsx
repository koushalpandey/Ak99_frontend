import { Box, Typography } from "@mui/material";
import logo from "../../../../assets/ak99-logo.png";
import { useNavigate } from "react-router-dom";
import useLocationStore from "../../../../store/userLoactionStore/store";
import { useEffect } from "react";
import axios from "axios";

function HeaderTop() {
  const navigate = useNavigate();

  const location = useLocationStore((state) => state?.location);
  const address = useLocationStore((state) => state?.address);
  const setAddress = useLocationStore((state) => state?.setAddress);
  useEffect(() => {
    if (!location?.latitude || !location?.longitude) return;

    const CACHE_TTL = 24 * 60 * 60 * 1000; // 24h

    // Try cache first
    const cachedRaw = localStorage.getItem("userAddress");
    if (cachedRaw) {
      try {
        const parsedCache = JSON.parse(cachedRaw);
        const isStale =
          !parsedCache?.cachedAt ||
          Date.now() - parsedCache.cachedAt > CACHE_TTL;

        if (parsedCache?.data && !isStale) {
          setAddress(parsedCache.data);
          return;
        }
      } catch (error) {
        console.error("Corrupted cache:", error);
      }
      localStorage.removeItem("userAddress");
    }

    const fetchLocation = async () => {
      try {
        const response = await axios.get(
          "https://nominatim.openstreetmap.org/reverse",
          {
            params: {
              lat: location.latitude,
              lon: location.longitude,
              format: "jsonv2",
            },
            headers: {
              Accept: "application/json",
            },
          }
        );

        const fetchedAddress = response?.data?.address;

        if (!fetchedAddress) {
          console.error("No address in response:", response?.data);
          return;
        }

        setAddress(fetchedAddress);
        localStorage.setItem(
          "userAddress",
          JSON.stringify({
            data: fetchedAddress,
            cachedAt: Date.now(),
          })
        );
      } catch (error) {
        console.error("Location fetch failed:", error?.message);
        if (error?.response) {
          console.error("Status:", error.response.status, "Data:", error.response.data);
        }
      }
    };

    fetchLocation();
  }, [location, setAddress]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="logo"
        onClick={() => navigate("/")}
        sx={{
          height: 80,
          cursor: "pointer",
        }}
      />

      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              color: "white.main",
              fontSize: 14,
            }}
          >
            {address?.country}
          </Typography>

          {address?.country_code && (
            <img
              src={`https://flagcdn.com/24x18/${address.country_code.toLowerCase()}.png`}
              alt={address.country}
              width={24}
              height={18}
            />
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "white.main",
              fontSize: 12.5,
            }}
          >
            {address?.state}
          </Typography>

          <Typography
            sx={{
              color: "secondary.main",
              fontSize: 12,
            }}
          >
            ({address?.state_district})
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "white.main",
              fontSize: 12.5,
            }}
          >
            {address?.suburb ||
              address?.village ||
              address?.town ||
              address?.city}
          </Typography>

          <Typography
            sx={{
              color: "secondary.main",
              fontSize: 12,
            }}
          >
            ({address?.postcode})
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderTop;