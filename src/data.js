import kuroiler from './images/kuroiler.png'
import kadaknath from './images/kadaknath.png'
import broiler from './images/broiler.png'
import broilerParent from './images/broiler-parent.png'

const PRODUCT_DATA = [
    {
        id: 1,
        name: "Kurolier",
        imageUrl: kuroiler,
        description: "1..Fresh chicken with high nutrition value good for your health.",
        base_price: 120,
        selling_price: 100,
        unit: "Kg",
        min_order_qty: 1,
        max_order_qty: null,
        order_qty_multiplier: 1,
        is_available: true
    },
        {
        id: 2,
        name: "Kadaknath",
        imageUrl: kadaknath,
        description: "2..Fresh chicken with high nutrition value good for your health.",
        base_price: 150,
        selling_price: 150,
        unit: "Kg",
        min_order_qty: 1,
        max_order_qty: null,
        order_qty_multiplier: 1,
        is_available: true
    },
        {
        id: 3,
        name: "Brolier",
        imageUrl: broiler,
        description: "3..Fresh chicken with high nutrition value good for your health.",
        base_price: 110,
        selling_price: 100,
        unit: "Kg",
        min_order_qty: 1,
        max_order_qty: null,
        order_qty_multiplier: 1,
        is_available: true
    },
        {
        id: 4,
        name: "Brolier Parent",
        imageUrl: broilerParent,
        description: "4..Fresh chicken with high nutrition value good for your health.",
        base_price: 200,
        selling_price: 200,
        unit: "Kg",
        min_order_qty: 1,
        max_order_qty: null,
        order_qty_multiplier: 1,
        is_available: true
    }

]

export default PRODUCT_DATA