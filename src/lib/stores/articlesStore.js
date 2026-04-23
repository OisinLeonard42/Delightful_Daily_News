
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
        news:"The New England Aquarium may call it an enrichment activity designed to stimulate its resident Atlantic harbor seals, but we call it adorable fun., The New England Aquarium may call it an enrichment activity designed to stimulate its resident Atlantic harbor seals, but we call it adorable fun. And, soon after posting a video on social media of Reggae, a 33-year-old seal playing with its beloved yellow duck, a new ‘influencer’ was born. The post shared to Instagram and Facebook by the aquarium in Boston, tallied 80,000 Likes from viewers melting over the seal kissing and hugging the floaty toy.Rebekah Miller, the aquarium’s manager overseeing the Atlantic harbor seals and California sea lions, told the Associated Press that the toys serve a purpose.“It’s a great way to challenge our animals…and really allow them to use those problem-solving skills that they have.”The facility is home to five seals, all of which were born in captivity, and all of which are curious by nature. So placing unusual items around their habitat, which is built to resemble a rocky New England coast, helps keep them engaged and mentally stimulated.",
        category: "",
        tags: ["Nature", "World", "Animals"],
        featured: false,
        image: "/images/articles/item-1.jpg"
    },
    {
        id: "2",
        title: "Nearby Star Seen ‘Blowing Bubbles’ for the First Time in New Image from Chandra Telescope",
        description: "This is the first image of an astrosphere astronomers have obtained around a star similar to the Sun. It shows slightly extended emission, rather than a single point of light as seen for other such stars.",
        news:"The bubble—called an astrosphere—completely surrounds the juvenile star. Winds from the star’s surface are blowing up the bubble and filling it with hot gas as it expands into much cooler galactic gas and dust surrounding the star. This is the first image of an astrosphere astronomers have obtained around a star similar to the Sun. It shows slightly extended emission, rather than a single point of light as seen for other such stars. “We have been studying our Sun’s astrosphere for decades, but we can’t see it from the outside,” said Carey Lisse of Johns Hopkins University in Baltimore, who led the study which was recently published in The Astrophysical Journal. “This new Chandra result about a similar star’s astrosphere teaches us about the shape of the Sun’s, and how it has changed over billions of years as the Sun evolves and moves through the galaxy.” The star is called HD 61005 and is located about 120 light-years from Earth, making it relatively close. HD 61005 has roughly the same mass and temperature as the Sun, but it is much younger with an age of about 100 million years, compared to the Sun’s age of about 5 billion years.",
        category: "",
        tags: ["Space", "World"],
        featured: false,
        image: "/images/articles/item-5.jpg"
    },
    {
         id: "6",
        title: " Famous Youtuber Jacksepticeye Will Keep Bloodborne Movie's Tone As Close To The Game As Possible",
        description: "Last month, Sony Pictures announced an animated adaptation of Bloodborne created in collaboration with Lyrical Animation. A surprising twist in the tale came when it was announced that Jacksepticeye would be producing the film.",
         news:"At the time of the announcement, McLoughlin acknowledged the gigantic honour he had in adapting one of his favourite video games; one that he has over 700 hours invested in and calls top of the top. In a recent interview with IGN at the Gayming Awards, McLoughlin further clarified his role on the production, which is as an advocate for the tone and feel of the original game, i.e. to ensure the adaptation is as faithful as possible to FromSoftware's beloved game. McLoughlin is aware of the mixed response to his involvement, acknowledging the concerns of the fans about how damaging a botched adaptation could be for the future of the franchise. I've seen all the memes, and they're hilarious where people are posting pictures of me, like ruining the franchise and everything, I think they're really funny, but it just shows how into Bloodborne they are, how passionate they are. I'm approaching it as a fan of it, not as like... I want to make a thing to make money",
        category: "",
        tags: ["Gaming"],
        featured: false,
        image: "/images/articles/item-12.jpg"
    },
    {
        id: "4",
        title: "Priceless Golden Helmet from 2,500 Years Ago Recovered After it Was Stolen from Museum in January",
        description: "On April 3rd in the city of Assen, police and officials at the Drents Museum unveiled the helmet, alongside 2 of the bracelets, which they said they recovered through a plea deal reached with 3 suspects arrested shorty after the January break-in.",
        news:"A museum director sought to demonstrate the value of Romanian history by loaning the national treasure to a Dutch museum as part of a 6-month-long exhibition, but disaster struck when thieves broke into the museum, stole the helmet, and a trio of golden bracelets. The theft shocked the European art world and caused a diplomatic incident, with incensed Romanian officials breathing down the neck of Dutch police, urging them to stop at nothing to recover it. Called the Helmet of Coțofenești, it was manufactured out of gold during the Dacia civilization in the decade around 450 BCE. Dacia left no written history, so only finds like the Coțofenești Helmet bear witness to their capabilities and identity. Embossed with mythical scenes and studs atop the cranium, a panel covered the eyes meant to shield the wearer, it’s believed, from bad luck. On April 3rd in the city of Assen, police and officials at the Drents Museum unveiled the helmet, alongside 2 of the bracelets, which they said they recovered through a plea deal reached with 3 suspects arrested shorty after the January break-in.",
        category: "",
        tags: ["World"],
        featured: true,
        image: "/images/articles/item-3.jpg"
    },
    {
        id: "5",
        title: " Giant tortoises are returning to this Galápagos island nearly 150 years after they went extinct",
        description: "Nearly 150 years after the last giant tortoises were removed from Floreana Island in Ecuador’s Galápagos archipelago, the species made a comeback on 20 February, when dozens of juvenile hybrids were released to begin restoring the island’s depleted ecosystem.",
        news:"The 158 newcomers, aged 8 to 13, have begun exploring the habitat they are destined to reshape over the coming years. Their release was perfectly timed with the arrival of the season’s first winter rains. They are large enough to be released and can defend themselves against introduced animals such as rats and cats,  said the  director of the Galápagos National Park breeding centre on Santa Cruz Island, noting that the best specimens with the strongest lineage were selected specifically for Floreana.",
        category: "",
        tags: ["Nature", "World", "Animals"],
        featured: true,
        image: "/images/articles/item-2.jpg"
    },
    {
       id: "3",
        title: "Surfer Conquers Biggest Waves in the World Despite Only Having One Leg",
        description: "A father of three has travelled the world surfing, making it to some of the most famous big wave surfing spots in places like Indonesia, Hawaii, Australia, and Portugal. He’s also represented his country in a para-surfing championship, and pioneered some best practices in making prosthetic legs for surfers.",
        news:"Bennett was born with the ankle of his left leg missing and his foot looking twisted and mangled. At the hospital, his parents were given the choice of amputation—which the doctors said would actually ensure he had better quality of living. 'The ocean is my happy place,” said Bennett, who legally changed his name to Pegleg—a childhood nickname—in 2016. “When I’m riding a wave nothing else matters, nothing else is there—it is just me and that wave and feeling that glide and that ride.'",
        category: "",
        tags: ["World", "Nature", "Sports"],
        featured: true,
        image: "/images/articles/item-4.jpg"
    },
    {
        id: "7",
        title: "Native Americans Were Making Dice and Gaming Thousands of Years Before Anyone Else",
        description: "Tribal casinos in the US may seem a more natural fit, after hearing about new research showing that Native Americans were making dice for gaming thousands of years before anyone else in the world.",
        news:"Evidence revealed that the earliest known dice in human history were made and used by hunter-gatherers on the western Great Plains more than 12,000 years ago, at the end of the last Ice Age. That was thousands of years before the earliest known dice from Bronze Age societies in Europe, Africa and Asia, according to scientists. The new study, published in the journal American Antiquity, indicates that dice and games of chance have been a “persistent” feature of Native American culture for at least the last 12,000 years. The earliest examples were from 12,800 years ago, discovered at archaeological sites from the Late Pleistocene Folsom era in Wyoming, Colorado, and New Mexico—and the artifacts predate the earliest known Old World dice by more than 6,000 years.",
        category: "",
        tags: ["Gaming", "World"],
        featured: false,
        image: "/images/articles/item-11.jpg"
    },
    {
        id: "8",
        title: "Plant Believed Extinct For 60 Years Reappears Thanks to Curious Nature Lover and iNaturalist",
        description: "A plant-lover who snapped a photo of an interesting shrub he found on a trip to the Outback inadvertently proved that it wasn’t, in fact, extinct, something which scientists had presumed.",
        news:"With 60 years having passed without a confirmed sighting of the plant, it was chalked up as a casualty. It’s becoming more and more clear within university ecology departments that the citizen science platform iNaturalist can act as a catalyst for major new discoveries, and that it, and other platforms like it, are actually becoming crucial to the work of scientists. To people like Thomas Mesaglio, a botanist at the Queensland Herbarium, who, constrained by the vastness and diversity of a place as big as Australia, can’t be everywhere at once, the platform allows diligent hikers and nature lovers to act as his eyes and ears.",
        category: "",
        tags: ["Nature", "World"],
        featured: false,
        image: "/images/articles/item-6.jpg"
    },
    {
        id: "9",
        title: "North America’s Largest Wildlife Overpass Opens for Animals to Safely Cross in Colorado",
        description: "Moose, elk, black bears, and mountain lions are now able to cross six lanes of interstate highway traffic along I-25 near Larkspur, Colorado, thanks to the opening of North America’s largest wildlife overpass.",
        news:"The Greenland Wildlife Overpass swoops over Interstate 25 near Larkspur, located between Denver and Colorado Springs. About 100,000 vehicles travel in the remote area each day, the Colorado Department of Transportation said in a Dec. 16 news release. The Greenland overpass allows elk, mule deer, black bears, mountain lions and other wildlife to safely cross on dirt and vegetation above six lanes of traffic. The overpass, costing around $15 million, connects 39,000 acres of wildlife habitats separated by I-25, in an area known for high movement of large game, according to a project description.",
        category: "",
        tags: ["World", "Animals"],
        featured: false,
        image: "/images/articles/item-7.jpg"
    },
    {
        id: "10",
        title: "Tiny Ring Bearer Dozes Off in Mini Sports Car ‘Driving’ Down the Aisle During Wedding",
        description: "This is the adorable moment a young ring bearer fell asleep behind the wheel of a mini sports car while making his entrance at a wedding.",
        news:"The wholesome scene left guests giggling on September 23 in Heilongjiang, China. Video footage shows the little boy, fast asleep with his head tilted back, being driven by remote control up the aisle in a toy car. Laughs rang out as the car slowly approached and the tot was supposed to deliver the rings to the bride and groom. The clip ended with the groom gently waking the boy. He reportedly was blinking in confusion before being scooped up and carried off the stage—to cheers and applause from the amused guests.",
        category: "",
        tags: ["World"],
        featured: false,
        image: "/images/articles/item-10.jpg"
    },
    {
        id: "11",
        title: "Endangered Cahow, One of the Rarest Seabirds in the World, Hatched on Nonsuch Island in Bermuda",
        description: "Though an event neither singular nor inaugural, the hatching of an endangered seabird and national icon of Bermuda is still being celebrated wildly by a special group of conservationists who’ve created a “living museum” on Nonsuch Island.",
        news:"Measuring just 14 acres and found in the northeast corner of the Bermuda island chain, Nonsuch Island is the only place the world’s 3rd-rarest seabird, known locally as the cahow, comes to breed. The fact that it is breeding at all is nearly a miracle, as the cahow was believed to be extinct for a period of 300 years that started in the early days of British colonial governance and extended all the way to the second-half of the 20th century.",
        category: "",
        tags: ["World", "Nature", "Animals"],
        featured: false,
        image: "/images/articles/item-8.jpg"
    },
    {
        id: "12",
        title: "Malala Yousafzai and Billie Jean King Partner Up To Promote Women’s Sports, and Invest in WNBA and NWSL",
        description: "International activist Malala Yousafzai recently announced a new venture called Recess that will deploy a partnership with tennis legend Billie Jean King to promote women’s sports across the world, including some planned investment in basketball’s WNBA and the NWSL (National Women’s Soccer League).",
        news:"Yousafzai, who survived a gunshot wound from the Taliban at 15 and won the Nobel Peace Prize just a few years later, is a huge sports fan who recognizes the power of athletics to pull people together. (We are capable of dialogue, we are capable of coming together, and sports—in history and in the current times—have proven to be that powerful way of bringing communities together) ",
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
