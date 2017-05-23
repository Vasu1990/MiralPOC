class CartUtil  {
        static calculateTotal(cartProducts=[] , shippingAmount) {
            let totalAmount = 0;

            cartProducts.forEach(function(product) {
                totalAmount +=  parseInt(product.price , 10);
            });

            totalAmount += shippingAmount ? shippingAmount :this.calculateShipping(cartProducts);
            return totalAmount;
        }
        static  calculateShipping(cartProducts = []) {
            let totalAmount = 0;

            cartProducts.forEach(function (product) {
                totalAmount += parseInt(product.shipping ? product.shipping : 0 , 10);
            });

            return totalAmount;
        }
}

export default CartUtil;