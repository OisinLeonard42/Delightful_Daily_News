import { writable, derived } from 'svelte/store';

/**
 * Articles of resources promoting healthy, mindful, and disciplined living.
 * Each item is structured for use with Card and Modal components.
 */
const initialArticles = [
    {
        id: "1",
        title: "Aquarium Seal Loves His Rubber Duckie And Now Adorable Video Goes Viral.",
        description: "You didn’t know how much you wanted to see a video of a harbor seal playing with his rubber duckie—until now.",
        category: "",
        tags: ["Nature", "World", "Animals"],
        featured: false,
        image: "/images/articles/item-1.jpg"
    },
    {
        id: "2",
        title: "Nearby Star Seen ‘Blowing Bubbles’ for the First Time in New Image from Chandra Telescope",
        description: "This is the first image of an astrosphere astronomers have obtained around a star similar to the Sun. It shows slightly extended emission, rather than a single point of light as seen for other such stars.",
        category: "",
        tags: ["Space", "World"],
        featured: false,
        image: "/images/articles/item-5.jpg"
    },
    {
         id: "6",
        title: " Famous Youtuber Jacksepticeye Will Keep Bloodborne Movie's Tone As Close To The Game As Possible",
        description: "Last month, Sony Pictures announced an animated adaptation of Bloodborne created in collaboration with Lyrical Animation. A surprising twist in the tale came when it was announced that Jacksepticeye would be producing the film.",
        category: "",
        tags: ["Gaming"],
        featured: false,
        image: "/images/articles/item-12.jpg"
    },
    {
        id: "4",
        title: "Priceless Golden Helmet from 2,500 Years Ago Recovered After it Was Stolen from Museum in January",
        description: "On April 3rd in the city of Assen, police and officials at the Drents Museum unveiled the helmet, alongside 2 of the bracelets, which they said they recovered through a plea deal reached with 3 suspects arrested shorty after the January break-in.",
        category: "",
        tags: ["World"],
        featured: true,
        image: "/images/articles/item-3.jpg"
    },
    {
        id: "5",
        title: " Giant tortoises are returning to this Galápagos island nearly 150 years after they went extinct",
        description: "Nearly 150 years after the last giant tortoises were removed from Floreana Island in Ecuador’s Galápagos archipelago, the species made a comeback on 20 February, when dozens of juvenile hybrids were released to begin restoring the island’s depleted ecosystem.",
        category: "",
        tags: ["Nature", "World", "Animals"],
        featured: true,
        image: "/images/articles/item-2.jpg"
    },
    {
       id: "3",
        title: "Surfer Conquers Biggest Waves in the World Despite Only Having One Leg",
        description: "A father of three has travelled the world surfing, making it to some of the most famous big wave surfing spots in places like Indonesia, Hawaii, Australia, and Portugal. He’s also represented his country in a para-surfing championship, and pioneered some best practices in making prosthetic legs for surfers.",
        category: "",
        tags: ["World", "Nature", "Sports"],
        featured: true,
        image: "/images/articles/item-4.jpg"
    },
    {
        id: "7",
        title: "Native Americans Were Making Dice and Gaming Thousands of Years Before Anyone Else",
        description: "Tribal casinos in the US may seem a more natural fit, after hearing about new research showing that Native Americans were making dice for gaming thousands of years before anyone else in the world.",
        category: "",
        tags: ["Gaming", "World"],
        featured: false,
        image: "/images/articles/item-11.jpg"
    },
    {
        id: "8",
        title: "Plant Believed Extinct For 60 Years Reappears Thanks to Curious Nature Lover and iNaturalist",
        description: "A plant-lover who snapped a photo of an interesting shrub he found on a trip to the Outback inadvertently proved that it wasn’t, in fact, extinct, something which scientists had presumed.",
        category: "",
        tags: ["Nature", "World"],
        featured: false,
        image: "/images/articles/item-6.jpg"
    },
    {
        id: "9",
        title: "North America’s Largest Wildlife Overpass Opens for Animals to Safely Cross in Colorado",
        description: "Moose, elk, black bears, and mountain lions are now able to cross six lanes of interstate highway traffic along I-25 near Larkspur, Colorado, thanks to the opening of North America’s largest wildlife overpass.",
        category: "",
        tags: ["World", "Animals"],
        featured: false,
        image: "/images/articles/item-7.jpg"
    },
    {
        id: "10",
        title: "Tiny Ring Bearer Dozes Off in Mini Sports Car ‘Driving’ Down the Aisle During Wedding",
        description: "This is the adorable moment a young ring bearer fell asleep behind the wheel of a mini sports car while making his entrance at a wedding.",
        category: "",
        tags: ["Sports"],
        featured: false,
        image: "/images/articles/item-10.jpg"
    },
    {
        id: "11",
        title: "Endangered Cahow, One of the Rarest Seabirds in the World, Hatched on Nonsuch Island in Bermuda",
        description: "Though an event neither singular nor inaugural, the hatching of an endangered seabird and national icon of Bermuda is still being celebrated wildly by a special group of conservationists who’ve created a “living museum” on Nonsuch Island.",
        category: "",
        tags: ["World", "Nature", "Animals"],
        featured: false,
        image: "/images/articles/item-8.jpg"
    },
    {
        id: "12",
        title: "Malala Yousafzai and Billie Jean King Partner Up To Promote Women’s Sports, and Invest in WNBA and NWSL",
        description: "International activist Malala Yousafzai recently announced a new venture called Recess that will deploy a partnership with tennis legend Billie Jean King to promote women’s sports across the world, including some planned investment in basketball’s WNBA and the NWSL (National Women’s Soccer League).",
        category: "",
        tags: ["Sport", "World"],
        featured: false,
        image: "/images/articles/item-9.jpg"
    }, 
];


// Writable store
export const articles = writable(initialArticles);


// Derived store: unique categories
export const categories = derived(articles, $articles => {
    const set = new Set($articles.map(item => item.category));
    return Array.from(set).sort();
});


// Derived store: unique tags (flattened and sorted)
export const tags = derived(articles, $articles => {
    const allTags = $articles.flatMap(item => item.tags || []);
    const tagSet = new Set(allTags.map(tag => tag.trim().toLowerCase()));
    return Array.from(tagSet).sort();
});
