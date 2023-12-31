// import { Remove, Add, Delete } from "@mui/icons-material";
// import { LoadingButton } from "@mui/lab";
// import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Box } from "@mui/material";
// import { removeBasketItemAsync, addBasketItemAsync } from "./basketSlice";
// import { BasketItem } from "../../app/models/basket";
// import { useAppDispatch, useAppSelector } from "../../app/store/ConfigureStore";
// import { currencyFormat } from "../../app/util/utils";

// interface Props {
//     items: BasketItem[],
//     isBasket?: boolean;
// }

// export default function BasketTable({items, isBasket = true}: Props){
//   const {status} = useAppSelector(state => state.basket);
//   const dispatch = useAppDispatch();

//     return (
//       <TableContainer component={Box} sx={{ overflowX: 'auto' }}>
//         <Table sx={{ minWidth: 650 }}>
//           <TableHead>
//             <TableRow>
//               <TableCell>Product</TableCell>
//               <TableCell align="center">Price</TableCell>
//               <TableCell align="center">Quantity</TableCell>
//               <TableCell align="right">Sub Total</TableCell>
//               {isBasket && <TableCell align="right"></TableCell>}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {items.map((item) => (
//               <TableRow
//                 key={item.productId}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   <Box display='flex' alignItems='center'>
//                     <img 
//                       src={item.pictureUrl} 
//                       alt={item.name} 
//                       style={{ height: 50, marginRight: 20 }} 
//                     />
//                     <span>{item.name}</span>
//                   </Box>
//                 </TableCell>
//                 <TableCell align="center">
//                   {currencyFormat(item.price)}
//                 </TableCell>
//                 <TableCell align="center">
//                   {isBasket && (
//                     <Box display='flex' alignItems='left'>
//                       <LoadingButton
//                         loading={status === 'pendingRemoveItem' + item.productId + 'rem'}
//                         onClick={() => dispatch(removeBasketItemAsync({
//                           productId: item.productId, quantity: 1, name: 'rem'
//                         }))}
//                         sx={{ padding: '10px', color: '#d3979f' }}
//                       >
//                         <Remove />
//                       </LoadingButton>
//                       <span>{item.quantity}</span>
//                       <LoadingButton
//                         loading={status === 'pendingAddItem' + item.productId}
//                         onClick={() => dispatch(addBasketItemAsync({ productId: item.productId }))}
//                         sx={{ padding: '10px', color: '#d3979f' }}
//                       >
//                         <Add />
//                       </LoadingButton>
//                     </Box>
//                   )}
//                   {!isBasket && <span>{item.quantity}</span>}
//                 </TableCell>
//                 <TableCell align="right">
//                   {currencyFormat(item.price * item.quantity)}
//                 </TableCell>
//                 {isBasket && (
//                   <TableCell align="right">
//                     <LoadingButton
//                       loading={status === 'pendingRemoveItem' + item.productId + 'del'}
//                       onClick={() => {
//                         const shouldDelete = window.confirm("Are you sure you want to delete this item?");
//                         if (shouldDelete) {
//                           dispatch(removeBasketItemAsync({
//                             productId: item.productId, quantity: item.quantity, name: 'del'
//                           }));
//                         }
//                       }}
//                       color='error'
//                     >
//                       <Delete />
//                     </LoadingButton>
//                   </TableCell>
//                 )}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     )
// }
export {}