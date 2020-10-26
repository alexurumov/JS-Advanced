function ticket(description, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const tickets = description.reduce((acc, cur) => {
        let [destination, price, status] = cur.split('|');
        price = Number(price);
        const t = new Ticket(destination, price, status);
        acc = [...acc, t];
        return acc;
    }, [])

    let sorted;
    if (criteria === 'price') {
        sorted = tickets.sort((a, b) => a.price - b.price);
    } else {
        sorted = tickets.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }

    return sorted;
}

console.log(ticket( ['Philadelphia|94.20|available', 

'New York City|95.99|available', 

'New York City|95.99|sold', 

'Boston|126.20|departed'], 

'destination'  ));

