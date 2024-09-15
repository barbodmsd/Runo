import React from "react";
import { Box, Stack, Typography, Link, Divider } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "secondaryBg",
        color: "grey",
        py: 4,
        px: { xs: 2, md: 6 },
      }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        spacing={4}>
        {/* Left Section: About or Blog Info */}
        <Box>
          <Typography variant="h6" gutterBottom>
            My Awesome Blog
          </Typography>
          <Typography variant="body2">
            Sharing knowledge, ideas, and insights about tech, programming, and design. Follow us for regular updates on the latest trends and tutorials.
          </Typography>
        </Box>

        {/* Center Section: Links */}
        <Stack direction="row" spacing={4}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="/about" color="inherit" underline="hover">
                About
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
              <Link href="/privacy" color="inherit" underline="hover">
                Privacy Policy
              </Link>
              <Link href="/terms" color="inherit" underline="hover">
                Terms of Service
              </Link>
            </Stack>
          </Box>

          {/* Social Media Links */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Stack spacing={1}>
              <Link href="https://twitter.com" color="inherit" underline="hover">
                Twitter
              </Link>
              <Link href="https://facebook.com" color="inherit" underline="hover">
                Facebook
              </Link>
              <Link href="https://instagram.com" color="inherit" underline="hover">
                Instagram
              </Link>
              <Link href="https://linkedin.com" color="inherit" underline="hover">
                LinkedIn
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Stack>

      {/* Divider */}
      <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.3)" }} />

      {/* Copyright Section */}
      <Typography variant="body2" textAlign="center">
        © {new Date().getFullYear()} My Awesome Blog. All rights reserved.
      </Typography>
    </Box>
  );
}
