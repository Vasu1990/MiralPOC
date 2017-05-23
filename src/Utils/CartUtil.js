class CartUtil  {
        static calculateTotal(cartProducts=[] , shippingAmount) {
            let totalAmount = 0;

            cartProducts.forEach(function(product) {
                totalAmount +=  parseInt(product.price);
            });

            totalAmount += shippingAmount ? shippingAmount :this.calculateShipping(cartProducts);
            return totalAmount;
        }
        static  calculateShipping(cartProducts = []) {
            let totalAmount = 0;

            cartProducts.forEach(function (product) {
                totalAmount = totalAmount + parseInt(product.shipping ? product.shipping : 0);
            });

            return totalAmount;
        }
}

export default CartUtil;