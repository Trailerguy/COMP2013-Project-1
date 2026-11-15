import ItemCard from "./ItemCard";
import type { ItemCardProps } from "./ItemCard";

export default function ItemsContainer({
    data,
}: ItemsContainerProps) {
    return (
        <div>
            {data.map((products))}
        </div>
    )
}