import React from "react";
import { Box, Stack, Typography, Link, Divider } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: "secondaryBg",
        color: "grey",
        py: 4,
        px: { xs: 2, md: 6 },
      }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent='space-between'
        spacing={4}>
        {/* Left Section: About or Blog Info */}
        <Stack alignItems={'end'}>
          <Typography variant='h6' gutterBottom>
            Runo
          </Typography>
          <Typography variant='body2'>
            به اشتراک گذاری دانش، ایده ها و بینش در مورد فناوری، برنامه نویسی و
            طراحی. ما را برای به روز رسانی منظم در مورد آخرین روندها و آموزش ها
            دنبال کنید.
          </Typography>
        </Stack>

        {/* Center Section: Links */}
        <Stack direction='row' spacing={4} justifyContent={"right"}>
          <Stack alignItems={'end'}>
            <Typography variant='h6' gutterBottom>
              منو
            </Typography>
            <Stack alignItems={'end'} spacing={1}>
              <Link href='/about' color='inherit' underline='hover'>
                درباره ما
              </Link>
              <Link href='/contact' color='inherit' underline='hover'>
                پشتیبانی
              </Link>
              <Link href='/terms' color='inherit' underline='hover'>
                قوانین و مقررات
              </Link>
            </Stack>
          </Stack>

          {/* Social Media Links */}
          <Stack alignItems={'end'}>
            <Typography variant='h6' gutterBottom>
              شبکه های اجنماعی 
            </Typography>
            <Stack alignItems={'end'}  spacing={1}>
              <Link
                href='https://twitter.com'
                color='inherit'
                underline='hover'>
                تویتر
              </Link>
              <Link
                href='https://facebook.com'
                color='inherit'
                underline='hover'>
                فیسبوک
              </Link>
              <Link
                href='https://instagram.com'
                color='inherit'
                underline='hover'>
                ایمستاگرام
              </Link>
              <Link
                href='https://linkedin.com'
                color='inherit'
                underline='hover'>
                لینکدین
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* Divider */}
      <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.3)" }} />

      {/* Copyright Section */}
      <Typography variant='body2' textAlign='center'>
        © {new Date().getFullYear()} My Awesome Blog. All rights reserved.
      </Typography>
    </Box>
  );
}
