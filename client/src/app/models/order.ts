export interface Order {
    id: number;
    buyerId: string;
    shippingAddress: ShippingAddress;
    orderDate: string;
    orderItems: OrderItem[];
    subtotal: number;
    deliveryFee: number;
    orderStatus: string;
    total: number;
  }
  
  export interface OrderItem {
    productId: number;
    name: string;
    pictureUrl: string;
    price: number;
    quantity: number;
  }
  
  export interface ShippingAddress {
    fullName: string;
    phoneNumber: string;
    address1: string;
    postalCode: string;
    district: string;
    city: string;
    province: string;
  }