import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Basket } from "../models/basket";

// Interface untuk nilai yang akan disediakan oleh context
interface StoreContextValue {
    basket: Basket | null;
    setBasket: (basket: Basket) => void;
    removeItem: (productId: number, quantity: number) => void;
}

// Membuat context dengan menggunakan Context API dari React
export const StoreContext = createContext<StoreContextValue | undefined>(undefined);

// Hook untuk menggunakan nilai dari StoreContext
export function useStoreContext() {
    let context = useContext(StoreContext);

    if (context === undefined){
        throw Error('Oops - We do not seem to be inside the provider')
    }
    return context;
}

// Komponen provider yang menggunakan useState untuk mengelola state keranjang belanja
export function StoreProvider({children}: PropsWithChildren<any>) {
    const [basket, setBasket] = useState<Basket | null>(null);

    // Fungsi untuk menghapus item dari keranjang belanja
    function removeItem(productId: number, quantity: number) {
        if (!basket) return;
        const items = [...basket.items] //new array of item
        const itemIndex = items.findIndex(i => i.productId === productId);
        if (itemIndex >= 0){
            items[itemIndex].quantity -= quantity;
            if (items[itemIndex].quantity === 0) items.splice(itemIndex, 1);
            setBasket(prevState => {
                return {...prevState!, items}
            })
        }
    }

    // Menyediakan nilai dan fungsi ke dalam context
    return (
        <StoreContext.Provider value={{basket, setBasket, removeItem}}>
            {children}
        </StoreContext.Provider>
    )
}
