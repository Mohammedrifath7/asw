import { Box, Button, IconButton, Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import React from "react";
import Subscribe from "./Subscribe";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const pages = [
    { name: "Home", Link: "/" },
    { name: "About", Link: "About" },
    { name: "Shop", Link: "Shop" },
    { name: "Blog", Link: "Blog" },
    { name: "Contact", Link: "Contact" },
  ];
  const navigate = useNavigate();



  let decodedToken;
  const token = localStorage.getItem('token')

  if (token) {
    decodedToken = jwtDecode(token);
  }

  return (
    <>
    <Subscribe/>
      <Box sx={{ width: "100%", height: { xs: "500", md: "400px" } }}>
        <Box
          className="footer"
          sx={{
            display: "flex",
            flexDirection: "column ",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexDirection: { xs: "column", md: "row" },
              border: "1px solid gray",
              width: "97%",
              height: "70%",
            }}
          >
            <Box sx={{ m: "20px 60px", p: "10px", height: "180px" }}>
              <Typography variant="h6" sx={{ color: "white" }}>
                About Us
              </Typography>
              <Box sx={{ borderTop: "1px solid gray", width: "70px" }} />
              <Typography variant="p" sx={{ fontSize: "10px", color: "gray" }}>
                Etoshi is an exating contrmpotary brand
                <br />
                which focuses on high quality products
                <br />
                graphics with britich style
              </Typography>
              <Box sx={{ mt: "20px", display: "flex" }}>
                <MailIcon sx={{ color: "yellow" }} />
                <Typography sx={{ color: "#FFF", ml: "10px" }} variant="p">
                  dhakshinamoorthi.industries@gmail.com
                </Typography>
              </Box>

              <Box sx={{ mt: "20px", display: "flex" }}>
                <LocalPhoneIcon sx={{ color: "yellow" }} />
                <Typography sx={{ color: "#FFF", ml: "10px" }} variant="p">
                  +91 9994466787
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                padding: "20px",
                border: "1px solid gray",
                width: { xs: "80%", md: "35%" },
                height: "110px",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "100px" , cursor: "pointer" }}>
                <img
                  style={{ width: "100%", Height: "100%",borderRadius : "10px" }}
                  src="../../../Imgs/Logo.jpg"
                  alt="Furni Pro"
                  loading='lazy'
                />
              </Box>
              {/* <Box sx={{}}>
                <Typography
                  variant="p"
                  sx={{ color: "gray", marginRight: "10px" }}
                >
                  Follow Us
                </Typography>
                <IconButton  sx={{ color: "orange"}}>
                  <FacebookOutlinedIcon sx={{fontSize : {xs : "18px" , md : "20px"}}} />
                </IconButton>
                <IconButton  sx={{ color: "orange"}}>
                  <TwitterIcon sx={{fontSize : {xs : "18px" , md : "20px"}}} />
                </IconButton>{" "}
                <IconButton  sx={{ color: "orange" }}>
                  <PinterestIcon sx={{fontSize : {xs : "18px" , md : "20px"}}} />
                </IconButton>{" "}
                <IconButton  sx={{ color: "orange"}}>
                  <LinkedInIcon sx={{fontSize : {xs : "18px" , md : "20px"}}} />
                </IconButton>{" "}
                <IconButton  sx={{ color: "orange" }}>
                  <WhatsAppIcon sx={{fontSize : {xs : "18px" , md : "20px"}}} />
                </IconButton>
              </Box> */}

              <Box
                sx={{
                  mb: "10px",
                  display: "flex",
                  justifyContent : "center" , 
                  width : "100%" , 
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    sx={{
                      display: "block",
                      color: "gray",
                      fontSize: "10px",
                    }}
                    onClick={() => {
                      navigate(`${page.Link}`);
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
            </Box>

            <Box sx={{ height: "180px", m: "20px 60px", p: "10px" }}>
              <Typography variant="h6" sx={{ color: "white" }}>
                My Account
              </Typography>
              <Box sx={{ borderTop: "1px solid gray", width: "70px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  fontWeight: "100",
                }}
              >
                <Typography onClick={() => {decodedToken ? navigate("/profile") : navigate("/") }} variant="p" sx={{ color: "gray", m: "5px 0" , cursor : "pointer" }}>
                  My Order
                </Typography>
                <Typography variant="p" sx={{ color: "gray", m: "5px 0" ,  cursor : "pointer"}}>
                  My Credit
                </Typography>
                <Typography variant="p" onClick={() => { 
                  decodedToken ? navigate("/profile") : navigate("/")

                }} sx={{ color: "gray", m: "5px 0" ,  cursor : "pointer" }}>
                  My Adresses
                </Typography>
                <Typography variant="p" onClick={() => {decodedToken ? navigate("/profile") : navigate("/") }}  sx={{ color: "gray", m: "5px 0" , cursor : "pointer" }}>
                  My Personal Info
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: "97%", height: {xs : "fit-content" , md : "50px"}, border: "1px solid gray",
           display : "flex" , justifyContent : "center" , alignItems : "center"
           }}>
          <Box sx={{mt : {xs : "10px" , md : "0"} ,width : "70%" , display : "flex" , flexDirection : {xs : "column" , md : "row"} ,alignItems : "center" , justifyContent : "space-between" }}>
              <Box display="flex" justifyContent="space-between">
                  <Typography  variant="p" sx={{color : "gray" , fontSize : "13px"}} >Terms Of Service</Typography>
                  <Typography variant="p"  sx={{m : "0 20px" ,color : "gray", fontSize : "13px"}} >|</Typography>
                  <Typography variant="p"  sx={{color : "orange" , fontSize : "13px"}} >Privacy Policy</Typography>
              </Box>
              <Box>
            <IconButton>
                <img style={{width : "40px"}} src="../../../Imgs/paypal.png" loading='lazy' alt="paypal"/>
            </IconButton>
            <IconButton>
                <img style={{width : "40px"}} src="../../../Imgs/visa.png" loading='lazy' alt="visa"/>
            </IconButton>     <IconButton>
                <img style={{width : "40px"}} src="../../../Imgs/master card.png" loading='lazy' alt="card"/>
            </IconButton>
              </Box>
          </Box>
          </Box>

        </Box>
      </Box>
    </>
  );
};

export default Footer;
