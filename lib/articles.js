// Shared article content. Keeping this in one place means the homepage
// teaser and the /articles pages never fall out of sync.

export const articles = [
  {
    slug: "hospital-bag-checklist",
    title: "Have you packed your hospital bag yet?",
    desc: "Your go-to guide for everything you need to pack, from essentials for labour to the little comforts that make all the difference.",
    tag: "Pregnancy",
    read: "5 min read",
    image: "/images/community.jpg",
    body: [
      "Somewhere around week thirty, most parents-to-be feel the urge to pack a bag and leave it by the door, just in case. It is a good instinct. Labour rarely waits for a convenient moment, and a bag that is ready to grab saves you from hunting for your phone charger between contractions.",
      "Start with the practical layer. Pack your maternity notes, ID, and any paperwork the hospital has asked for. Add loose, comfortable clothes for labour, a couple of nightdresses or t-shirts you don't mind staining, and slip-on slippers for the ward. Pack more underwear than you think you need.",
      "For the baby, a few sleepsuits, vests, a hat, and a going-home outfit will cover the first day or two. Most hospitals provide nappies for the first change, but it is worth packing a small pack of your own along with cotton wool for cleaning.",
      "Do not forget the comfort items. A phone charger with a long cable, snacks that do not need a fridge, a water bottle with a straw, and a pillow from home can make a hospital stay feel a little less clinical. Pack a going-home outfit for yourself too, something loose and soft.",
      "Finally, pack a small bag for your birth partner. A change of clothes, snacks, and something to pass the time during a long labour go a long way. Once the bag is packed, leave it somewhere you will actually remember, by the front door works well for most people.",
    ],
  },
  {
    slug: "baby-hacks-parents-swear-by",
    title: "Top 5 baby hacks parents swear by",
    desc: "Brilliant, parent-approved tricks to make life with your little one easier.",
    tag: "Baby",
    read: "3 min read",
    image: "/images/newborn.jpg",
    body: [
      "Every generation of parents builds up a stock of small tricks that make the day run smoother. None of these need special equipment, just a shift in how you do something you were already doing.",
      "Warm the wipes between your hands before a night change. A cold wipe on warm skin is a reliable way to wake a baby who was almost back to sleep. A few seconds of warming can be the difference between a two minute change and a twenty minute resettle.",
      "Roll, don't fold, when you pack a changing bag. Rolled sleepsuits and vests take up less space, stay visible at a glance, and are easier to pull out one-handed while you are holding a baby with the other arm.",
      "Keep a change station on every floor of the house if you can. Even a small basket with wipes, a spare vest, and two nappies saves a lot of stair trips during the newborn stage, when accidents seem to happen the moment you sit down.",
      "White noise is worth trying before anything else when a baby will not settle. A fan, an extractor hood, or a dedicated white noise app can recreate the constant sound of the womb and help some babies drift off faster than rocking alone.",
      "Finally, keep a simple log for the first few weeks, feeds, naps, and nappy changes. You will not need it forever, but in the early days it answers the two questions everyone asks: when did they last feed, and when did they last sleep.",
    ],
  },
  {
    slug: "joys-of-pregnancy-you-wont-expect",
    title: "10 joys of pregnancy you won't expect",
    desc: "The surprising, heartwarming moments that catch you off guard.",
    tag: "Wellbeing",
    read: "4 min read",
    image: "/images/hero-mother.jpg",
    body: [
      "Pregnancy gets a lot of airtime for the harder parts, the tiredness, the nausea, the aches. Less is said about the small moments that genuinely take people by surprise, in a good way.",
      "There is the first flutter of movement, often described as butterflies or popcorn, long before anyone else can feel it. It is a strange, private thrill, a signal that someone else is genuinely in there.",
      "Strangers get kinder. Seats appear on trains, doors get held a beat longer, and people you have never met ask how you are doing with a warmth that catches you off guard.",
      "Your sense of smell sharpens to an almost superhuman level, for better and worse. Some people find themselves newly enchanted by the smell of fresh bread or clean laundry, months before the cravings even start.",
      "There is a quiet confidence that tends to build as the weeks pass, a growing trust in what your body is capable of. Many parents describe feeling stronger, not more fragile, by the third trimester.",
      "And then there is the nesting instinct, the sudden, almost comic urge to reorganise a cupboard at eleven at night. It rarely makes logical sense, but it usually leaves the house in better shape than you found it.",
    ],
  },
  {
    slug: "baby-myths-busted",
    title: "7 baby myths that are completely false",
    desc: "Let's clear up those baby myths you've heard, with the real scoop every parent should know.",
    tag: "Baby",
    read: "4 min read",
    image: "/images/community.jpg",
    body: [
      "Advice on babies arrives from every direction, and not all of it holds up. Here are a few of the most persistent myths, and what is actually going on.",
      "\"A big dinner will help them sleep through the night.\" There is little evidence that a full stomach at bedtime changes how long a baby sleeps. Sleep patterns are driven far more by age and development than by the size of the last feed.",
      "\"You'll spoil them if you pick them up too much.\" In the first months, responding to a crying baby builds trust and security, it does not create bad habits. Babies cannot be reasoned with, only comforted.",
      "\"Teething causes high fevers.\" Teething can cause mild discomfort, drooling, and a slightly raised temperature, but a genuine high fever usually points to something else. It is always worth checking with a health visitor or doctor rather than assuming it is just teeth.",
      "\"Walking early means a baby is more advanced.\" The age a baby takes their first steps varies hugely and says nothing about long term development. Some very early walkers and some later walkers grow up equally coordinated.",
      "\"Formula fed babies are automatically less healthy.\" Both breast milk and formula can support healthy growth. The right choice is the one that works for your family and your baby's needs, not a fixed rule.",
      "The common thread across most baby myths is that they turn one family's experience into a universal rule. Every baby is different, and it is always fine to check anything that worries you with a health professional rather than a rumour.",
    ],
  },
];

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug) || null;
}
