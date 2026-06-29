// OrderReceiverDetails.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Stack,
  Button,
  Divider,
  InputAdornment,
  Grid
} from "@mui/material";
// Crucial for MUI v9: Import the correct modern Grid component

import PersonOutlineIcon from "@mui/icons-material/PersonOutlined"; // Changed Outline to Outlined
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

// Your strict predefined color configuration
export const COLORS = {
  primary: "#0D6EFD",
  primaryHover: "#0B5FD6",

  topDeal: "#FFF7ED",
  orange: "#F97316",

  black: "#000000",
  textPrimary: "#1F2937",
  textSecondary: "#6B7280",

  border: "#E5E7EB",

  // Background Colors
  background: "#FFFFFF",
  backgroundGray: "#F9FAFB",
  backgroundBlue: "#EFF6FF",
  backgroundSky: "#F0F9FF",
  backgroundIndigo: "#EEF2FF",
  backgroundPurple: "#F5F3FF",
  backgroundPink: "#FDF2F8",
  backgroundRose: "#FFF1F2",
  backgroundRed: "#FEF2F2",
  backgroundOrange: "#FFF7ED",
  backgroundAmber: "#FFFBEB",
  backgroundYellow: "#FEFCE8",
  backgroundLime: "#F7FEE7",
  backgroundGreen: "#ECFDF5",
  backgroundEmerald: "#ECFDF5",
  backgroundTeal: "#F0FDFA",
  backgroundCyan: "#ECFEFF",

  // Slightly Stronger Backgrounds
  backgroundBlueSoft: "#DBEAFE",
  backgroundPurpleSoft: "#EDE9FE",
  backgroundPinkSoft: "#FCE7F3",
  backgroundOrangeSoft: "#FED7AA",
  backgroundGreenSoft: "#D1FAE5",
};

export default function OrderReceiverDetails({ onSave }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    streetAddress: "",
    apartment: "",
    city: "",
    postalCode: "",
    deliveryNotes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave(formData);
    }
  };

  // Modern input styles leveraging the standard v9 structure
  const inputStyles = {
    backgroundColor: COLORS.backgroundGray,
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: COLORS.border, borderRadius: "8px" },
      "&:hover fieldset": { borderColor: COLORS.textSecondary },
      "&.Mui-focused fieldset": { borderColor: COLORS.primary },
    },
    "& .MuiInputLabel-root.Mui-focused": { color: COLORS.primary }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        maxWidth: "650px",
        mx: "auto",
        p: { xs: 3, md: 4 },
        backgroundColor: COLORS.background,
        borderRadius: "12px",
        border: `1px solid ${COLORS.border}`,
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Form Header */}
      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
        <Box
          sx={{
            p: 1,
            borderRadius: "8px",
            backgroundColor: COLORS.backgroundBlue,
            color: COLORS.primary,
            display: "flex",
            alignItems: "center"
          }}
        >
          <LocalShippingIcon fontSize="small" />
        </Box>
        <Box>
          <Typography variant="h5" fontWeight="700" sx={{ color: COLORS.textPrimary }}>
            Receiver Details
          </Typography>
          <Typography variant="body2" sx={{ color: COLORS.textSecondary }}>
            Specify who and where the shipping carrier should deliver your parcel.
          </Typography>
        </Box>
      </Stack>

      <Divider sx={{ my: 3, borderColor: COLORS.border }} />

      {/* Grid container matching clean MUI v9 syntax */}
      <Grid container spacing={2.5}>
        {/* Full Name */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="body2" fontWeight="600" sx={{ mb: 1, color: COLORS.textPrimary }}>
            Full Name *
          </Typography>
          <TextField
            fullWidth
            required
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            sx={inputStyles}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon sx={{ color: COLORS.textSecondary, fontSize: "1.2rem" }} />
                  </InputAdornment>
                ),
              }
            }}
          />
        </Grid>

        {/* Contact Number */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="body2" fontWeight="600" sx={{ mb: 1, color: COLORS.textPrimary }}>
            Phone Number *
          </Typography>
          <TextField
            fullWidth
            required
            type="tel"
            name="phoneNumber"
            placeholder="+1 (555) 000-0000"
            value={formData.phoneNumber}
            onChange={handleChange}
            sx={inputStyles}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneOutlinedIcon sx={{ color: COLORS.textSecondary, fontSize: "1.2rem" }} />
                  </InputAdornment>
                ),
              }
            }}
          />
        </Grid>

        {/* Street Address */}
        <Grid size={{ xs: 12 }}>
          <Typography variant="body2" fontWeight="600" sx={{ mb: 1, color: COLORS.textPrimary }}>
            Street Address *
          </Typography>
          <TextField
            fullWidth
            required
            name="streetAddress"
            placeholder="123 Main Street"
            value={formData.streetAddress}
            onChange={handleChange}
            sx={inputStyles}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <HomeOutlinedIcon sx={{ color: COLORS.textSecondary, fontSize: "1.2rem" }} />
                  </InputAdornment>
                ),
              }
            }}
          />
        </Grid>

        {/* Apartment/Suite */}
        <Grid size={{ xs: 12 }}>
          <Typography variant="body2" fontWeight="600" sx={{ mb: 1, color: COLORS.textPrimary }}>
            Apartment, Suite, Unit, etc. (Optional)
          </Typography>
          <TextField
            fullWidth
            name="apartment"
            placeholder="Apt 4B, 2nd Floor"
            value={formData.apartment}
            onChange={handleChange}
            sx={inputStyles}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <HomeOutlinedIcon sx={{ color: COLORS.textSecondary, fontSize: "1.2rem" }} />
                  </InputAdornment>
                ),
              }
            }}
          />
        </Grid>

        {/* City */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="body2" fontWeight="600" sx={{ mb: 1, color: COLORS.textPrimary }}>
            City *
          </Typography>
          <TextField
            fullWidth
            required
            name="city"
            placeholder="New York"
            value={formData.city}
            onChange={handleChange}
            sx={inputStyles}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationCityOutlinedIcon sx={{ color: COLORS.textSecondary, fontSize: "1.2rem" }} />
                  </InputAdornment>
                ),
              }
            }}
          />
        </Grid>

        {/* Postal/ZIP Code */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="body2" fontWeight="600" sx={{ mb: 1, color: COLORS.textPrimary }}>
            Postal / ZIP Code *
          </Typography>
          <TextField
            fullWidth
            required
            name="postalCode"
            placeholder="10001"
            value={formData.postalCode}
            onChange={handleChange}
            sx={inputStyles}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <MarkunreadMailboxOutlinedIcon sx={{ color: COLORS.textSecondary, fontSize: "1.2rem" }} />
                  </InputAdornment>
                ),
              }
            }}
          />
        </Grid>

        {/* Delivery Notes */}
        <Grid size={{ xs: 12 }}>
          <Typography variant="body2" fontWeight="600" sx={{ mb: 1, color: COLORS.textPrimary }}>
            Delivery Notes / Instructions (Optional)
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            name="deliveryNotes"
            placeholder="e.g., Leave package by the front gate, ring bell twice..."
            value={formData.deliveryNotes}
            onChange={handleChange}
            sx={inputStyles}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start" sx={{ alignSelf: "flex-start", mt: 1 }}>
                    <DescriptionOutlinedIcon sx={{ color: COLORS.textSecondary, fontSize: "1.2rem" }} />
                  </InputAdornment>
                ),
              }
            }}
          />
        </Grid>
      </Grid>

      {/* Action Button */}
      <Stack direction="row" justifyContent="flex-end" sx={{ mt: 4 }}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            px: 4,
            height: "46px",
            fontWeight: 600,
            textTransform: "none",
            borderRadius: "8px",
            backgroundColor: COLORS.primary,
            color: COLORS.background,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: COLORS.primaryHover,
              boxShadow: "none"
            },
            width: { xs: "100%", sm: "auto" }
          }}
        >
          Save & Continue
        </Button>
      </Stack>
    </Box>
  );
}