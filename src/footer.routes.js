// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoFkh from "assets/images/logos/rgb-logos/favicon.png";

export default {
  brand: {
    name: "Framtidens kårhus",
    image: logoFkh,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/framtidenskarhus/",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/framtidenskarhus/",
    },
  ],
  menus: [
    {
      name: "About us",
      items: [
        { name: "The Project Organization", href: "https://www.creative-tim.com/presentation" },
        { name: "The fundraising Team", href: "https://www.creative-tim.com/templates/free" },
        { name: "The Renovation Team", href: "https://www.creative-tim.com/templates/premium" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "Donations", href: "https://www.creative-tim.com/terms" },
        { name: "Gifts", href: "https://www.creative-tim.com/privacy" },
      ],
    },
    {
      name: "Press & Media",
      items: [{ name: "News", href: "https://www.creative-tim.com/terms" }],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Built by{" "}
      <MKTypography
        component="a"
        href="https://appalume.se"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Appalume AB
      </MKTypography>
      , based on a material made by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography>
      .
    </MKTypography>
  ),
};
