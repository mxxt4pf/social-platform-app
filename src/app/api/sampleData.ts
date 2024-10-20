import { Timestamp } from "firebase/firestore";

export const sampleData = [
    {
        id: '1',
        title: 'Trip to San Francisco 200',
        date: Timestamp.fromDate(new Date(Date.now() + 30 * 86400000)),
        category: 'culture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'SF, USA',
        venue: 'San Francisco Bay Area, SF, California',
        hostedBy: 'Meet',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        attendees: [
            {
                id: 'a',
                name: 'Meet',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            },
            {
                id: 'b',
                name: 'Devang',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            }
        ]
    },
    {
        id: '2',
        title: 'Trip to Vancouver',
        date: Timestamp.fromDate(new Date(Date.now() + 60 * 86400000)),
        category: 'drinks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'Vancouver, Canada',
        venue: 'Canada Place, Vancouver, BC, Canada',
        hostedBy: 'Elon',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        attendees: [
            {
                id: 'a',
                name: 'Elon',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            },
            {
                id: 'b',
                name: 'Jerry',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            }
        ]
    }
];
