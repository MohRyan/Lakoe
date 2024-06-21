/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Dot } from "lucide-react";
import { FC } from "react";
import { IProduct } from "./ContentProduct";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Switch,
  Typography,
} from "@mui/material";

interface IProps {
  data: IProduct;
  value: string;
  checked: boolean;
  setChecked: any;
  // handleCheked: () => void;
}

// const ProductCard: FC<IProps> = ({ data, checked, handleCheked }) => {
const ProductCard: FC<IProps> = ({ data, value, checked, setChecked }) => {
  // const [checked, setChecked] = useState(false);
  // const handleCheked = () => setChecked(!checked);
  return (
    <>
      {value === "semua" ? (
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "12px",
            border: "1px solid gray",
            boxShadow: "none",
            // py: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={data.image}
              alt={data.name_product}
              sx={{
                borderRadius: "12px",
                height: 112,
                width: 130,
                objectFit: "contain",
              }}
            />
          </Box>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              justifyContent: "center",
              mx: 2,
              width: "100%",
            }}
          >
            <Typography variant="body1" fontWeight="bold">
              {data.name_product}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body1" fontWeight="bold">
                Rp. {data.price}
              </Typography>
              <Typography variant="body2">Stok {data.stok}</Typography>
              <Typography variant="body2">SKU: {data.no_resi}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                sx={{
                  height: 35,
                  fontSize: 10,
                  color: "black",
                  borderColor: "black",
                  borderRadius: 5,
                }}
                variant="outlined"
              >
                Ubah Harga
              </Button>
              <Button
                sx={{
                  height: 35,
                  fontSize: 10,
                  color: "black",
                  borderColor: "black",
                  borderRadius: 5,
                }}
                variant="outlined"
              >
                Ubah Stok
              </Button>
              <Button
                sx={{
                  height: 35,
                  fontSize: 10,
                  color: "black",
                  borderColor: "black",
                  borderRadius: 5,
                }}
                variant="outlined"
              >
                Lihat Halaman
              </Button>

              <Typography
                sx={{
                  height: 35,
                  width: 35,
                  pt: 0.3,
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid black",
                  color: "black",
                  borderColor: "black",
                  borderRadius: "100%",
                }}
                variant="body2"
                fontWeight="bold"
              >
                ...
              </Typography>
            </Box>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
              pr: 2,
            }}
          >
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <Switch checked={data.isActive} />
          </Box>
        </Card>
      ) : value === "aktif" && data.isActive === true ? (
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "12px",
            border: "1px solid gray",
            boxShadow: "none",
            // py: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={data.image}
              alt={data.name_product}
              sx={{
                borderRadius: "12px",
                height: 112,
                width: 130,
                objectFit: "contain",
              }}
            />
          </Box>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              justifyContent: "center",
              mx: 2,
              width: "100%",
            }}
          >
            <Typography variant="body1" fontWeight="bold">
              {data.name_product}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body1" fontWeight="bold">
                Rp. {data.price}
              </Typography>
              <Typography variant="body2">Stok {data.stok}</Typography>
              <Typography variant="body2">SKU: {data.no_resi}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                sx={{
                  height: 35,
                  fontSize: 10,
                  color: "black",
                  borderColor: "black",
                  borderRadius: 5,
                }}
                variant="outlined"
              >
                Ubah Harga
              </Button>
              <Button
                sx={{
                  height: 35,
                  fontSize: 10,
                  color: "black",
                  borderColor: "black",
                  borderRadius: 5,
                }}
                variant="outlined"
              >
                Ubah Stok
              </Button>
              <Button
                sx={{
                  height: 35,
                  fontSize: 10,
                  color: "black",
                  borderColor: "black",
                  borderRadius: 5,
                }}
                variant="outlined"
              >
                Lihat Halaman
              </Button>

              <Typography
                sx={{
                  height: 35,
                  width: 35,
                  pt: 0.3,
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid black",
                  color: "black",
                  borderColor: "black",
                  borderRadius: "100%",
                }}
                variant="body2"
                fontWeight="bold"
              >
                ...
              </Typography>
            </Box>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
              pr: 2,
            }}
          >
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <Switch checked={data.isActive} />
          </Box>
        </Card>
      ) : value === "nonaktif" && data.isActive === false ? (
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "12px",
            border: "1px solid gray",
            boxShadow: "none",
            // py: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={data.image}
              alt={data.name_product}
              sx={{
                borderRadius: "12px",
                height: 112,
                width: 130,
                objectFit: "contain",
              }}
            />
          </Box>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              justifyContent: "center",
              mx: 2,
              width: "100%",
            }}
          >
            <Typography variant="body1" fontWeight="bold">
              {data.name_product}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body1" fontWeight="bold">
                Rp. {data.price}
              </Typography>
              <Typography variant="body2">Stok {data.stok}</Typography>
              <Typography variant="body2">SKU: {data.no_resi}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                sx={{
                  height: 35,
                  fontSize: 10,
                  color: "black",
                  borderColor: "black",
                  borderRadius: 5,
                }}
                variant="outlined"
              >
                Ubah Harga
              </Button>
              <Button
                sx={{
                  height: 35,
                  fontSize: 10,
                  color: "black",
                  borderColor: "black",
                  borderRadius: 5,
                }}
                variant="outlined"
              >
                Ubah Stok
              </Button>
              <Button
                sx={{
                  height: 35,
                  fontSize: 10,
                  color: "black",
                  borderColor: "black",
                  borderRadius: 5,
                }}
                variant="outlined"
              >
                Lihat Halaman
              </Button>

              <Typography
                sx={{
                  height: 35,
                  width: 35,
                  pt: 0.3,
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid black",
                  color: "black",
                  borderColor: "black",
                  borderRadius: "100%",
                }}
                variant="body2"
                fontWeight="bold"
              >
                ...
              </Typography>
            </Box>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
              pr: 2,
            }}
          >
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <Switch checked={data.isActive} />
          </Box>
        </Card>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductCard;
