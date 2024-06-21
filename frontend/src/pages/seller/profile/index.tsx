// import { Box, Grid, Typography } from "@mui/material";
// import { RootState, useAppDispatch, useAppSelector } from "@/redux";
// import  { FC, useEffect } from "react";
// import { getStoreDetail } from "@/redux/async/storeAsync";

// interface IProps {
//   profile: IProfileStores;
// }

// const Profile: FC<IProps> = () => {
//   const profile = useAppSelector((state: RootState) => state.profileStore.profileStore);
//   const dispatch = useAppDispatch();
//   console.log("profile from component: ", profile);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       dispatch(getStoreDetail(token));
//     }
//   }, []);

//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           height: "100vh",
//           width: "100%",
//           p: 2,
//           px: 3,
//           position: "fixed",
//           bgcolor: "white",
//         }}
//         border={"1px solid black"}
//         padding={2}
//       >
//         <Box border={"1px solid black"} padding={2} marginTop={5}>
//           <Box borderBottom={"1px solid gray"} width={"70%"}>
//             <Typography>My Profile</Typography>
//             <Typography variant="caption">Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun</Typography>
//           </Box>
//           <Box marginTop={4}>
//             <Grid container gap={2}>
//               <Grid item xs={1}>
//                 <Box display={"flex"} flexDirection={"column"} gap={5} textAlign={"right"}>
//                   <Typography variant="subtitle1">Nama</Typography>
//                   <Typography variant="subtitle1">Username</Typography>
//                   <Typography variant="subtitle1">Email</Typography>
//                   <Typography variant="subtitle1">Phone</Typography>
//                   <Typography variant="subtitle1">Nama Toko</Typography>
//                 </Box>
//               </Grid>
//               <Grid item xs={5}>
//                 <Box display={"flex"} flexDirection={"column"} gap={5}>
//                   <Typography variant="subtitle1">{profile?.name}</Typography>
//                   <Typography variant="subtitle1">{profile?.slogan}</Typography>
//                   <Typography variant="subtitle1">{profile?.description}</Typography>
//                   <Typography variant="subtitle1">{profile?.domain}</Typography>
//                   <Typography variant="subtitle1">{profile?.logoAttachment}</Typography>
//                   <Typography variant="subtitle1">Cek</Typography>
//                 </Box>
//               </Grid>
//               <Grid item>cek</Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Profile;
