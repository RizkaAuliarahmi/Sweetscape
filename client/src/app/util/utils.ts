export function getCookie(key: string){
    const b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
}

export function currencyFormat(amount: number){
const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `Rp. ${formattedAmount}`;
}
