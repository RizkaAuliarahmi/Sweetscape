import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Order } from "../../app/models/order";
import OrderDetailed from "./OrderDetailed";
import { currencyFormat } from "../../app/util/utils";

export default function Orders() {
    const [orders, setOrders] = useState<Order[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedOrderNumber, setSelectedOrderNumber] = useState(0);
    const isMobile = useMediaQuery('(max-width: 600px)'); // Ganti dengan lebar layar yang sesuai

    const showTotalColumn = !isMobile;
    const showOrderDateColumn = !isMobile;

    useEffect(() => {
        agent.Orders.list()
            .then(orders => setOrders(orders))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, []);

    if (loading) return <LoadingComponent message="Loading orders..." />

    if (selectedOrderNumber > 0) return (
        <OrderDetailed
            order={orders?.find(o => o.id === selectedOrderNumber)!}
            setSelectedOrder={setSelectedOrderNumber}
        />
    )

    

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order Number</TableCell>
            {showTotalColumn && <TableCell>Total</TableCell>}
            {showOrderDateColumn && <TableCell>Order Date</TableCell>}
            <TableCell>Order Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((order) => (
            <TableRow key={order.id}>
              <TableCell component="th" scope="row">
                {order.id}
              </TableCell>
              {showTotalColumn && <TableCell>{currencyFormat(order.total)}</TableCell>}
              {showOrderDateColumn && <TableCell>{order.orderDate.split('T')[0]}</TableCell>}
              <TableCell>{order.orderStatus}</TableCell>
              <TableCell>
                <Button onClick={() => setSelectedOrderNumber(order.id)}>
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}