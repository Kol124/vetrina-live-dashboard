import { useTheme, SxProps } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// assets
import { ReactComponent as DeviceIcon } from "../../assets/device.svg";
import { ReactComponent as AppleIcon } from "../../assets/apple.svg";
import { ReactComponent as GooglePlayIcon } from "../../assets/google-play.svg";

interface Props {
  sx?: SxProps;
}

export const SellYourProducts = ({ sx }: Props) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#F3A35C",
        p: theme.spacing(3),
        bordeRadius: 10,
        boxShadow:
          "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
        ...sx,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <section>
          <Typography
            variant="h6"
            sx={{
              mr: 4,
              fontSize: 22,
              lineHeight: "27px",
              color: theme.palette.primary.contrastText,
            }}
          >
            Sell your products on your exclusive APP published on the stores
          </Typography>
          <Stack mt={1} direction="row" alignItems="center">
            <Link
              variant="subtitle1"
              sx={{
                mr: 2,
                fontSize: 17,
                cursor: "pointer",
                color: theme.palette.primary.contrastText,
                textDecorationColor: theme.palette.primary.contrastText,
              }}
              underline="always"
            >
              Show More
            </Link>
            <ArrowForwardIcon
              sx={{
                height: 20,
                width: 20,
                color: theme.palette.primary.contrastText,
              }}
            />
          </Stack>
        </section>
        <SvgIcon
          component={DeviceIcon}
          inheritViewBox
          sx={{
            height: 226,
            width: 105,
            display: "none",
            [theme.breakpoints.up("sm")]: {
              display: "block",
            },
          }}
        />
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <SvgIcon
          component={AppleIcon}
          inheritViewBox
          sx={{
            mt: 1,
            height: 38,
            width: 123.8,
          }}
        />
        <SvgIcon
          component={GooglePlayIcon}
          inheritViewBox
          sx={{
            mt: 1,
            height: 40,
            width: 141,
          }}
        />
      </Stack>
    </Paper>
  );
};
