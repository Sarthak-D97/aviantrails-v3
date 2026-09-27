// Guest words, from the testimonials on the old aviantrails.in (written 2016–2020).
// Quotes are verbatim apart from trimmed passages (marked …) and corrected spellings of place
// and species names. The three "Camp Milieu" notes describe the family's earlier camp near
// Chhoti Haldwani, before Milieu Villa Birding Lodge opened in 2022.

export type Review = {
  name: string;
  from: string;
  context?: string;
  pull: string;
  quote: string;
  camp?: boolean;
};

export const reviews: Review[] = [
  {
    name: "Vinod Sharma",
    from: "Mumbai",
    context: "Munsiyari, February 2019",
    pull: "He under promises and over delivers.",
    quote:
      "When heavy snow blocked our way out of Munsiyari and landslides limited the options of local birding, Rajesh changed tack to drive through the Madkote–Didihat to Chaukori where we got to see Goldcrest and some close up shots of many species. … We closed our memorable trip with a bird list of 144 with 10 lifers and seven new friends for life. Rajesh is the best bird guide I have come across in the five years of birding. He understands the terrain, habitat and the birds pretty well.",
  },
  {
    name: "Chandralata Raghukumar",
    from: "Goa",
    context: "Eight trips with Avian Trails",
    pull: "Considering my age he always helped me in sighting and sometimes even clicking rare and difficult birds.",
    quote:
      "I have done 8 birding trips with Rajesh, in which 2 of them had Sheela as a participant or should I say co-guide! Every single trip was a memorable one. … Accommodation and food have been always wonderful and well planned. My only regret is that Cheer Pheasant, the topmost in my wishlist, has been elusive during my 2 trips to Munsiyari with him.",
  },
  {
    name: "Shubhendu Banerjee",
    from: "Kolkata",
    pull: "Being in the 1000+ species category, I still feel that to start over again with Rajesh.",
    quote:
      "He is not only passionate towards his responsibility to show you what you want but also is extremely caring at tough weather and extreme situation. Photography is an art … and here Rajesh helps you too. Being in the 1000+ species category, I still feel that to start over again with Rajesh for all those species that I photographed and to end with Rajesh that are still pending.",
  },
  {
    name: "Kamal Hari Menon",
    from: "Bengaluru",
    pull: "You have very good birding, photography and interpersonal skills which is a deadly combination.",
    quote:
      "I would say best tour I ever attended. You have very good birding, photography and interpersonal skills which is a deadly combination for running this tours. I have got some negative feedback before joining your tour that you always gets best shots before the participants even find the bird, but I realised that it is not true and made by people who lacks spotting skills. So keep up your good work.",
  },
  {
    name: "Nitin Ghorpade",
    from: "Mumbai",
    context: "Seven or eight tours",
    pull: "His tours are perfectly planned. He gives 100% effort on the field.",
    quote:
      "Rajesh is wonderful person having deep knowledge of birds. I have done 7 to 8 tours with him. He is well aware of birds' locations. His tours are perfectly planned. He gives 100% effort on the field. … He goes beyond limits for his guest always.",
  },
  {
    name: "Jyotsna Gogte",
    from: "Mumbai",
    context: "Sunderbans, Sri Lanka and the Andamans",
    pull: "Rajesh sees to it that all the endemic species are covered.",
    quote:
      "Have done few but exclusive tours with Rajesh. Sunderbans, Sri Lanka and Andamans. All the tours very well arranged. Rajesh sees to it that all the endemic species are covered. Have seen him taking pains in searching for the same. His partner Sheela madam is equally enthusiastic in sighting for birds.",
  },
  {
    name: "Nitin Sevak",
    from: "Singapore",
    context: "Munsiyari 2016, Nagaland 2018",
    pull: "Never felt as a commercial tour.",
    quote:
      "Rajeshji is one of the wonderful person to be with for any birding tour. Never felt as a commercial tour. … Discussion about birds with afternoon tea with beautiful view of Panchachuli. The most memorable experience at Nagaland trip during 2018 with home made sweets from his life partner, and talk about his life journey from promoting home stay to birder.",
  },
  {
    name: "Kaajal Dasgupta",
    from: "Bareilly",
    context: "Known him for more than a decade",
    pull: "You get more lucky if you visit their home and meet Sheela.",
    quote:
      "He has worked very hard over the years to enhance his own knowledge on birds of Indian subcontinent through innumerable trips all over the country. He is a keen observer and always helps his guests to get good sightings and photos of the birds. … You get more lucky if you visit their home and meet Sheela, his wife, who is herself a good birdwatcher and a wonderful host.",
  },
  {
    name: "Pranjal J Saikia",
    from: "Oil India Limited",
    context: "Munsiyari, November 2019",
    pull: "They are wonderful souls, very modest and always eager to help.",
    quote:
      "It was a wonderful trip beautifully planned and managed by Rajesh ji. … He did show few special birds near Kaladhungi like Great Slaty Woodpecker, Brown-capped Pygmy Woodpecker etc. which happened to be my lifers then. … They are wonderful souls, very modest and always eager to help. Birding-wise they have immense knowledge on account of their passion for birds and extensive travels all over India, Sri Lanka, Bhutan and some countries abroad.",
  },
  {
    name: "Sunil Kini",
    from: "Ahmedabad",
    pull: "His rich field experience and knowledge is at a different level.",
    quote:
      "It's always been a great experience on every tour. Rajesh's passion for birding, his rich field experience and knowledge is at a different level. Please continue doing the same good work and we look forward to many more trips in our quest for great birding and experiences.",
  },
  {
    name: "Rutvik Trivedi",
    from: "Mumbai",
    context: "First birding trip, Goa",
    pull: "Gives correct direction to my hobby and passion of wildlife photography.",
    quote:
      "I did my first ever birding and bird photography trip with Rajesh Panwar at Goa, it was excellent experience with him. Rajesh has an excellent understanding of the avian species and behavioral aspects of birds and habitat. I had been to his camp near Chhoti Haldwani it was one of the best birding experience of Uttarakhand along with the arrangements provided at camp.",
  },
  {
    name: "Gurdyal Singh",
    from: "Bengaluru",
    context: "Camp Milieu, February 2017",
    camp: true,
    pull: "An amazing couple and so much warmth!",
    quote:
      "We met Rajesh and Sheela who own the place. An amazing couple and so much warmth! It is indeed rare to find such comfort in people you have just met. They are both passionate about what they do and the knowledge they bring in about wildlife is phenomenal. … Simple food that is wholesome and nutritious.",
  },
  {
    name: "Luke S",
    from: "Thailand",
    context: "Camp Milieu, January 2016",
    camp: true,
    pull: "For someone bored of sitting in the back of a Gypsy on safari … this was the perfect antidote.",
    quote:
      "There was leopard prints right in the car park of the camp and on our walks into the nearby forests we saw tiger footprints, scrape marks and scat. … For someone bored of sitting in the back of a Gypsy on safari waiting for the animals to show themselves then being here and being able to get out there on foot surrounded by the forest and its sights, smells and sounds this was the perfect antidote.",
  },
  {
    name: "Saurabh Pandey",
    from: "Gurgaon",
    context: "Camp Milieu, January 2017",
    camp: true,
    pull: "The wakeup call for you is the chirping sounds of the birds.",
    quote:
      "The wakeup call for you is the chirping sounds of the birds who stay in and around the camp. … Both Rajesh and his wife Sheela are avid birders and they guide you in the best possible fashion. As a birder, this place took care of each and every requirement which I had.",
  },
];
