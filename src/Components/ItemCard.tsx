import type { Fit } from "../data/data";
import type { ClothingSize } from "../data/data";
import type { ClothingCategory } from "../data/data";
import type { ClothingProduct } from "../data/data";

export interface ItemCardProps extends ClothingProduct {

}

export default function ItemCard({
    id,
    name,
    image,
    fit,
    category,
    color,
    description,
    size,
    price,
    quantity,
    itemQuantity,
}: ClothingProduct) {
    return <div>
        <img src={image} alt="" height="100px" />
        <h2>{name}</h2>
        <br />
        <p>{description}</p>
        <h3>{`$${price}`}</h3>

    </div>
}