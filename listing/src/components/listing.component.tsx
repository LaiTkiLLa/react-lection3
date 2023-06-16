import uuid from 'react-uuid'

export type Items = {
    listing_id: number;
    url: string;
    MainImage: { url_570xN: string };
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
    state: string
}

export const Listing = (props: {items: Items[]}) => {
    const newTitle = (title: string) => {
        if (title.length <= 50) return title
        return `${title.substring(0, 50)}...`

    }
    return (
        <div className="item-list">
                {props.items.map(item => (
                    item.state === 'removed' ? null :
                    <div className="item" key={uuid()}>
                        <div className="item-image" >
                            <a href={item.url}>
                                <img src={item.MainImage.url_570xN} alt=""/>
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title ellipsis">{newTitle(item.title)}</p>
                            <p className="item-price">{item.currency_code === 'USD' ? '$' : item.currency_code === 'EUR' ? '€' : item.currency_code}{item.price}</p>
                            <p className={`item-quantity ${item.quantity > 20 ? 'level-high' : item.quantity <= 20 && item.quantity > 10 ? 'level-medium' : 'level-low'}`}>{item.quantity} left</p>
                        </div>
                    </div>
                ))}
        </div>
    )
}