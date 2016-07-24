var state = {
  beers: [],
  beer: 0,
  basket: [],
  malts: [],
  hops: [],
  savedHops: "",
  yeast: [],
  altHops: [],
  index: 0
}

var hops = {
     "currentPage": 1,
     "numberOfPages": 4,
     "totalResults": 195,
     "data": [
        {
             "id": 1976,
             "name": "#06300",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:41"
        },
        {
             "id": 1,
             "name": "Admiral",
             "description": "Bred at Wye as a replacement for Target and released in 1998, Admiral is a high-alpha variety considered to have a more pleasing, less harsh bitterness.",
             "countryOfOrigin": "GB",
             "alphaAcidMin": 13,
             "betaAcidMin": 4.8,
             "betaAcidMax": 6.1,
             "humuleneMin": 7,
             "humuleneMax": 26,
             "caryophylleneMin": 6,
             "caryophylleneMax": 8,
             "cohumuloneMin": 37,
             "cohumuloneMax": 45,
             "myrceneMin": 39,
             "myrceneMax": 48,
             "farneseneMin": 1.8,
             "farneseneMax": 2.2,
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:26",
             "updateDate": "2013-06-24 16:10:37",
             "country": {
                  "isoCode": "GB",
                  "name": "UNITED KINGDOM",
                  "displayName": "United Kingdom",
                  "isoThree": "GBR",
                  "numberCode": 826,
                  "createDate": "2012-01-03 02:41:33"
             }
        },
        {
             "id": 2,
             "name": "Aged / Debittered Hops (Lambic)",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:26"
        },
        {
             "id": 3,
             "name": "Ahtanum",
             "description": "An open-pollinated aroma variety developed in Washington, Ahtanum is used for its distinctive, somewhat Cascade-like aroma and for moderate bittering.",
             "countryOfOrigin": "US",
             "alphaAcidMin": 5.7,
             "betaAcidMin": 5,
             "betaAcidMax": 6.5,
             "humuleneMin": 16,
             "humuleneMax": 20,
             "caryophylleneMin": 9,
             "caryophylleneMax": 12,
             "cohumuloneMin": 30,
             "cohumuloneMax": 35,
             "myrceneMin": 50,
             "myrceneMax": 55,
             "farneseneMax": 1,
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:26",
             "updateDate": "2013-06-24 16:10:37",
             "country": {
                  "isoCode": "US",
                  "name": "UNITED STATES",
                  "displayName": "United States",
                  "isoThree": "USA",
                  "numberCode": 840,
                  "createDate": "2012-01-03 02:41:33"
             }
        },
        {
             "id": 1946,
             "name": "Alchemy",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:40"
        },
        {
             "id": 4,
             "name": "Amarillo",
             "description": "Amarillo is a privately grown and registered hop variety; it was introduced recently but has been extremely popular with brewers seeking a Cascade-type hop with a distinctive American character. It is considered by many to be ideal for dry hopping, but also gives a clean bitterness due to low cohumulone content. The flavor has citrus and floral notes, and something like a Cascade character, but with more bitterness. Amarillo is a registered trademark of Virgil Gamache Farms, Inc., where the hop was originally developed.",
             "countryOfOrigin": "US",
             "alphaAcidMin": 8,
             "betaAcidMin": 6,
             "betaAcidMax": 7,
             "humuleneMin": 9,
             "humuleneMax": 11,
             "caryophylleneMin": 2,
             "caryophylleneMax": 4,
             "cohumuloneMin": 21,
             "cohumuloneMax": 24,
             "myrceneMin": 68,
             "myrceneMax": 70,
             "farneseneMin": 2,
             "farneseneMax": 4,
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:26",
             "updateDate": "2013-06-24 16:10:37",
             "country": {
                  "isoCode": "US",
                  "name": "UNITED STATES",
                  "displayName": "United States",
                  "isoThree": "USA",
                  "numberCode": 840,
                  "createDate": "2012-01-03 02:41:33"
             }
        },
        {
             "id": 5,
             "name": "Amarillo Gold",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:26"
        },
        {
             "id": 6,
             "name": "Apollo",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:26"
        },
        {
             "id": 7,
             "name": "Aquila",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:26"
        },
        {
             "id": 1957,
             "name": "Aramis",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:40"
        },
        {
             "id": 8,
             "name": "Argentine Cascade",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:26"
        },
        {
             "id": 1960,
             "name": "Athanum",
             "description": "\r\n",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:40"
        },
        {
             "id": 9,
             "name": "Aurora",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:27"
        },
        {
             "id": 10,
             "name": "Auscha (Saaz)",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:27"
        },
        {
             "id": 2002,
             "name": "Australian Dr. Rudi",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2015-07-27 19:44:20"
        },
        {
             "id": 2013,
             "name": "Azacca",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2016-03-09 15:02:42"
        },
        {
             "id": 2003,
             "name": "Azzeca",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2015-08-06 15:25:54"
        },
        {
             "id": 12,
             "name": "Banner",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:27"
        },
        {
             "id": 1996,
             "name": "Belma",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2015-07-13 15:09:44"
        },
        {
             "id": 13,
             "name": "Boadicea",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:27"
        },
        {
             "id": 14,
             "name": "Bobek",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:27"
        },
        {
             "id": 15,
             "name": "Bor",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:27"
        },
        {
             "id": 1982,
             "name": "Bramling",
             "description": "An older variety of Golding, Bramling is rarely if ever available to home brewers under its own name. The original was selected from the field of a farmer named Musgrave Hilton who had a farm in the English town of Bramling. Bramling was once one of the most popular aroma hops in England, but gradually faded as higher-yielding varieties became available. Until recently, it was still grown in small amounts in England and in British Columbia, Canada, where it may be one of the cultivars sold as British Columbia Golding. Bramling also lent its name to one of its progeny, the rare but still available Bramling Cross cultivar.",
             "countryOfOrigin": "GB",
             "alphaAcidMin": 5,
             "alphaAcidMax": 5,
             "betaAcidMin": 2.3,
             "betaAcidMax": 3.2,
             "humuleneMin": 31,
             "humuleneMax": 31,
             "caryophylleneMin": 16,
             "caryophylleneMax": 16,
             "cohumuloneMin": 33,
             "cohumuloneMax": 35,
             "myrceneMin": 36,
             "myrceneMax": 36,
             "farneseneMax": 1,
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:10:37",
             "country": {
                  "isoCode": "GB",
                  "name": "UNITED KINGDOM",
                  "displayName": "United Kingdom",
                  "isoThree": "GBR",
                  "numberCode": 826,
                  "createDate": "2012-01-03 02:41:33"
             }
        },
        {
             "id": 16,
             "name": "Bramling Cross",
             "description": "Started in 1927 from a cross between a wild Manitoban male hop and a female Bramling hop, a variety of Golding. Used as a general-purpose bittering hop, lately this easy-growing hop has been used to provide a unique fruity, blackcurrant and lemon notes in traditional ales, especially in Christmas ales and cask-conditioned ales. Dry hopping can produce a very interesting effect. Bramling Cross is an under-appreciated hop.",
             "countryOfOrigin": "GB",
             "alphaAcidMin": 5,
             "betaAcidMin": 2.2,
             "betaAcidMax": 3.2,
             "humuleneMin": 28,
             "humuleneMax": 33,
             "caryophylleneMin": 14,
             "caryophylleneMax": 18,
             "cohumuloneMin": 26,
             "cohumuloneMax": 34,
             "myrceneMin": 35,
             "myrceneMax": 40,
             "farneseneMin": 0.2,
             "farneseneMax": 0.2,
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:27",
             "updateDate": "2013-06-24 16:10:37",
             "country": {
                  "isoCode": "GB",
                  "name": "UNITED KINGDOM",
                  "displayName": "United Kingdom",
                  "isoThree": "GBR",
                  "numberCode": 826,
                  "createDate": "2012-01-03 02:41:33"
             }
        },
        {
             "id": 17,
             "name": "Bravo",
             "description": "Bred in 2000 and released commercially for the first time in 2006, Bravo is a proprietary hop variety sold by S.S. Steiner. Bravo is a diploid high-alpha hop derived from a female Zeus and a male derived in part from Nugget. It is reported by Steiner to have excellent resistance to powdery mildew. Bravo has been used in Rogue's 20007 release of their Glen Ale, and was also the featured hop used in every beer in the 2007 Single Hop Festival hosted by Drake's Brewing Company.",
             "countryOfOrigin": "US",
             "alphaAcidMin": 14,
             "betaAcidMin": 3,
             "betaAcidMax": 4,
             "humuleneMin": 18,
             "humuleneMax": 20,
             "caryophylleneMin": 10,
             "caryophylleneMax": 12,
             "cohumuloneMin": 29,
             "cohumuloneMax": 34,
             "myrceneMin": 25,
             "myrceneMax": 50,
             "farneseneMin": 0.5,
             "farneseneMax": 0.5,
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:27",
             "updateDate": "2013-06-24 16:10:37",
             "country": {
                  "isoCode": "US",
                  "name": "UNITED STATES",
                  "displayName": "United States",
                  "isoThree": "USA",
                  "numberCode": 840,
                  "createDate": "2012-01-03 02:41:33"
             }
        },
        {
             "id": 18,
             "name": "Brewer's Gold",
             "description": "A seedling selected at Wye in 1919 from a wild Manitoban hop and released in 1934, Brewer's Gold was one an early bittering hop, grown in England and in the United States (see Brewer's Gold (American)), until the release of new high-alpha varieties in the 1970s and 1980s. It is also an ancestor of most modern high-alpha hops. Some Brewer's Gold is still grown in England, but there is no longer significant production in the United States. Brewer's Gold was never used as an aroma hop in England because of its intense flavors, but has been used experimentally as a dry hop by some American craft brewers.",
             "countryOfOrigin": "GB",
             "alphaAcidMin": 5.5,
             "betaAcidMin": 2.5,
             "betaAcidMax": 3.5,
             "humuleneMin": 29,
             "humuleneMax": 31,
             "caryophylleneMin": 7,
             "caryophylleneMax": 7.5,
             "cohumuloneMin": 40,
             "cohumuloneMax": 48,
             "myrceneMin": 37,
             "myrceneMax": 40,
             "farneseneMax": 1,
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:27",
             "updateDate": "2013-06-24 16:10:37",
             "country": {
                  "isoCode": "GB",
                  "name": "UNITED KINGDOM",
                  "displayName": "United Kingdom",
                  "isoThree": "GBR",
                  "numberCode": 826,
                  "createDate": "2012-01-03 02:41:33"
             }
        },
        {
             "id": 1983,
             "name": "Brewer's Gold (American)",
             "description": "A seedling selected at Wye in 1919 from a wild Manitoban hop and released in 1934, Brewer's Gold was one an early bittering hop, grown in England (see Brewer's Gold) and in the United States, until the release of new high-alpha varieties in the 1970s and 1980s. It is also an ancestor of most modern high-alpha hops. Some Brewer's Gold is still grown in England, but there is no longer significant production in the United States. Brewer's Gold was never used as an aroma hop in England because of its intense flavors, but has been used experimentally as a dry hop by some American craft brewers.",
             "countryOfOrigin": "US",
             "alphaAcidMin": 8,
             "alphaAcidMax": 8,
             "betaAcidMin": 3.5,
             "betaAcidMax": 4.5,
             "humuleneMin": 29,
             "humuleneMax": 31,
             "caryophylleneMin": 7,
             "caryophylleneMax": 7.5,
             "cohumuloneMin": 40,
             "cohumuloneMax": 48,
             "myrceneMin": 37,
             "myrceneMax": 40,
             "farneseneMax": 1,
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:10:37",
             "country": {
                  "isoCode": "US",
                  "name": "UNITED STATES",
                  "displayName": "United States",
                  "isoThree": "USA",
                  "numberCode": 840,
                  "createDate": "2012-01-03 02:41:33"
             }
        },
        {
             "id": 19,
             "name": "Bullion",
             "description": "One of the earliest bittering hops, Bullion was created in 1919 by an open pollinated cross between an unidentified English male and an wild Manitoba hop. Unlike modern bittering hops, Bullion has a strong, distinctive character which is perceptible, especially in additions later than 60 minutes. The aroma and flavor characteristics are strong, pungent and sometimes harsh or resiny, with elements of spiciness and a fruit character that has been described as black currant or raspberry. Bullion has become less popular with the wide availability of new bittering hops with better storage characteristics and a more neutral bittering character, but its unique flavor makes it worth considering for home and craft brewers.",
             "countryOfOrigin": "GB",
             "alphaAcidMin": 6,
             "betaAcidMin": 3.2,
             "betaAcidMax": 6,
             "humuleneMin": 12,
             "humuleneMax": 30,
             "caryophylleneMin": 9,
             "caryophylleneMax": 11,
             "cohumuloneMin": 35,
             "cohumuloneMax": 40,
             "myrceneMin": 45,
             "myrceneMax": 65,
             "farneseneMax": 1,
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:27",
             "updateDate": "2013-06-24 16:10:37",
             "country": {
                  "isoCode": "GB",
                  "name": "UNITED KINGDOM",
                  "displayName": "United Kingdom",
                  "isoThree": "GBR",
                  "numberCode": 826,
                  "createDate": "2012-01-03 02:41:33"
             }
        },
        {
             "id": 20,
             "name": "California Ivanhoe",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:28"
        },
        {
             "id": 21,
             "name": "Calypso",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:28"
        },
        {
             "id": 2018,
             "name": "Caramel Malt",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2016-06-30 19:30:33"
        },
        {
             "id": 22,
             "name": "Cascade",
             "description": "Cascade was created in the United States as an open-pollinated cross between Fuggle and Serebrianker. Its instantly recognizable grapefruit, floral aroma is characteristic of many American ales. Cascade is also one of the easiest hop varieties to grow; it can grow well under less than ideal conditions or in short growing seasons, and unlike most varieties, if started from a good rhizome a Cascade can produce a good crop even in its first growing season.",
             "countryOfOrigin": "US",
             "alphaAcidMin": 5.5,
             "betaAcidMin": 4.5,
             "betaAcidMax": 7,
             "humuleneMin": 13,
             "humuleneMax": 13,
             "caryophylleneMin": 4.5,
             "caryophylleneMax": 4.5,
             "cohumuloneMin": 33,
             "cohumuloneMax": 40,
             "myrceneMin": 45,
             "myrceneMax": 60,
             "farneseneMin": 6,
             "farneseneMax": 6,
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:28",
             "updateDate": "2013-06-24 16:10:37",
             "country": {
                  "isoCode": "US",
                  "name": "UNITED STATES",
                  "displayName": "United States",
                  "isoThree": "USA",
                  "numberCode": 840,
                  "createDate": "2012-01-03 02:41:33"
             }
        },
        {
             "id": 23,
             "name": "Celeia",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:28"
        },
        {
             "id": 24,
             "name": "Centennial",
             "description": "Sometimes called a super Cascade, Centennial was bred in 1974 but not released until 1990. It has a floral, citrus aroma and a clean spicy flavor; its heritage includes Brewer's Gold, Fuggle, and East Kent Golding. Popular among craft brewers, Centennial lends its distinctive character to, among others, Sierra Nevada Celebration Ale and Sierra Nevada Bigfoot Barleywine.",
             "countryOfOrigin": "US",
             "alphaAcidMin": 6,
             "betaAcidMin": 3.5,
             "betaAcidMax": 4.5,
             "humuleneMin": 10,
             "humuleneMax": 18,
             "caryophylleneMin": 4,
             "caryophylleneMax": 8,
             "cohumuloneMin": 28,
             "cohumuloneMax": 30,
             "myrceneMin": 45,
             "myrceneMax": 60,
             "farneseneMax": 1,
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:28",
             "updateDate": "2013-06-24 16:10:37",
             "country": {
                  "isoCode": "US",
                  "name": "UNITED STATES",
                  "displayName": "United States",
                  "isoThree": "USA",
                  "numberCode": 840,
                  "createDate": "2012-01-03 02:41:33"
             }
        },
        {
             "id": 25,
             "name": "Challenger",
             "description": "A granddaughter of Northern Brewer developed at Wye, Challenger is a classic true dual purpose hop and one of the most popular English hops of the 1980s and 1990s. It has a clean bittering from relatively high alpha acids and good aroma characteristics. It has a fine fruity aroma with spicy overtones. Like many other varieties developed at Wye, this hop is sometimes known as Wye Challenger, especially in older references. This simply indicates that it was developed at Wye, not necessarily anything about where it was grown.",
             "countryOfOrigin": "GB",
             "alphaAcidMin": 6.5,
             "betaAcidMin": 4,
             "betaAcidMax": 4.5,
             "humuleneMin": 25,
             "humuleneMax": 32,
             "caryophylleneMin": 8,
             "caryophylleneMax": 10,
             "cohumuloneMin": 20,
             "cohumuloneMax": 30,
             "myrceneMin": 30,
             "myrceneMax": 42,
             "farneseneMin": 1,
             "farneseneMax": 3,
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:28",
             "updateDate": "2013-06-24 16:10:37",
             "country": {
                  "isoCode": "GB",
                  "name": "UNITED KINGDOM",
                  "displayName": "United Kingdom",
                  "isoThree": "GBR",
                  "numberCode": 826,
                  "createDate": "2012-01-03 02:41:33"
             }
        },
        {
             "id": 26,
             "name": "Chinook",
             "description": "Released in 1985, Chinook is a strong bittering hop derived from Petham Golding, one of the English Golding hops. It is used in stouts and porters for its heavy spicy aroma.",
             "countryOfOrigin": "US",
             "alphaAcidMin": 12,
             "betaAcidMin": 3,
             "betaAcidMax": 4,
             "humuleneMin": 18,
             "humuleneMax": 25,
             "caryophylleneMin": 9,
             "caryophylleneMax": 11,
             "cohumuloneMin": 29,
             "cohumuloneMax": 35,
             "myrceneMin": 35,
             "myrceneMax": 40,
             "farneseneMax": 1,
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:28",
             "updateDate": "2013-06-24 16:10:37",
             "country": {
                  "isoCode": "US",
                  "name": "UNITED STATES",
                  "displayName": "United States",
                  "isoThree": "USA",
                  "numberCode": 840,
                  "createDate": "2012-01-03 02:41:33"
             }
        },
        {
             "id": 27,
             "name": "Citra",
             "description": "Comprised of Hallertau Mittelfrüh, US Tettnang, Brewer's Gold and East Kent Golding",
             "alphaAcidMin": 11,
             "alphaAcidMax": 13,
             "betaAcidMin": 3.5,
             "betaAcidMax": 4.5,
             "humuleneMin": 11,
             "humuleneMax": 13,
             "caryophylleneMin": 6,
             "caryophylleneMax": 8,
             "cohumuloneMin": 22,
             "cohumuloneMax": 24,
             "myrceneMin": 60,
             "myrceneMax": 65,
             "farneseneMax": 1,
             "isNoble": "N",
             "forBittering": "N",
             "forFlavor": "Y",
             "forAroma": "Y",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:28",
             "updateDate": "2015-09-24 13:38:05"
        },
        {
             "id": 28,
             "name": "Cluster",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:28"
        },
        {
             "id": 1970,
             "name": "Cobb",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:40"
        },
        {
             "id": 29,
             "name": "Columbia",
             "description": "Columbia was generally considered similar, but inferior, to its sister selection, Willamette, and is now no longer commercially grown in the United States.",
             "countryOfOrigin": "US",
             "alphaAcidMin": 7,
             "betaAcidMin": 3,
             "betaAcidMax": 5.5,
             "humuleneMin": 14,
             "humuleneMax": 20,
             "caryophylleneMin": 6,
             "caryophylleneMax": 10,
             "cohumuloneMin": 36,
             "cohumuloneMax": 43,
             "myrceneMin": 31,
             "myrceneMax": 68,
             "farneseneMin": 10,
             "farneseneMax": 30,
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:28",
             "updateDate": "2013-06-24 16:10:37",
             "country": {
                  "isoCode": "US",
                  "name": "UNITED STATES",
                  "displayName": "United States",
                  "isoThree": "USA",
                  "numberCode": 840,
                  "createDate": "2012-01-03 02:41:33"
             }
        },
        {
             "id": 30,
             "name": "Columbus",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:29"
        },
        {
             "id": 31,
             "name": "Columbus (Tomahawk)",
             "description": "This high alpha acid bittering hop was developed from the Centennial hop by the HopUnion breeding program. It is a low-cohumulone hop which gives a clean but long-lasting bitterness to beer. It can also be used as a dry hop in larger American beers, such as Pliny the Elder by Russian River Brewing. Tomahawk is a registered trademark of Yakima Chief Ranches, LLC, under which they sell a hop believed to be identical to Columbus.",
             "countryOfOrigin": "US",
             "alphaAcidMin": 14,
             "betaAcidMin": 4.5,
             "betaAcidMax": 5.8,
             "humuleneMin": 15,
             "humuleneMax": 25,
             "caryophylleneMin": 7,
             "caryophylleneMax": 12,
             "cohumuloneMin": 29,
             "cohumuloneMax": 35,
             "myrceneMin": 25,
             "myrceneMax": 45,
             "farneseneMax": 1,
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:29",
             "updateDate": "2013-06-24 16:10:37",
             "country": {
                  "isoCode": "US",
                  "name": "UNITED STATES",
                  "displayName": "United States",
                  "isoThree": "USA",
                  "numberCode": 840,
                  "createDate": "2012-01-03 02:41:33"
             }
        },
        {
             "id": 32,
             "name": "Comet",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:29"
        },
        {
             "id": 33,
             "name": "Crystal",
             "description": "A triploid released in 1993 as part of a program attempting to develop an American substitute for Hallertauer Mittelfr?h, Crystal was derived primarily from Hallertauer with contributions from Cascade, Brewer's Gold and Early Green. Also known as CJF-Hallertau. Sister hops from the same program include Liberty, Mount Hood, and Ultra. Crystal has a very mild character, clean and slightly spicy, and is generally used in lagers and pilsners.",
             "countryOfOrigin": "US",
             "alphaAcidMin": 3.5,
             "betaAcidMin": 4.5,
             "betaAcidMax": 6.7,
             "humuleneMin": 18,
             "humuleneMax": 24,
             "caryophylleneMin": 4,
             "caryophylleneMax": 8,
             "cohumuloneMin": 20,
             "cohumuloneMax": 26,
             "myrceneMin": 40,
             "myrceneMax": 65,
             "farneseneMin": 0.1,
             "farneseneMax": 0.1,
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:29",
             "updateDate": "2013-06-24 16:10:37",
             "country": {
                  "isoCode": "US",
                  "name": "UNITED STATES",
                  "displayName": "United States",
                  "isoThree": "USA",
                  "numberCode": 840,
                  "createDate": "2012-01-03 02:41:33"
             }
        },
        {
             "id": 1942,
             "name": "CTZ",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:40"
        },
        {
             "id": 35,
             "name": "Delta",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:29"
        },
        {
             "id": 36,
             "name": "East Kent Golding",
             "description": "The premier English aroma hop, an English landrace with a lineage going back to 1790. Ideal for bittering and finishing any kind of English ales, and also works well in lagers due to its delicate, slightly spicy aroma.",
             "countryOfOrigin": "GB",
             "alphaAcidMin": 4,
             "betaAcidMin": 1.9,
             "betaAcidMax": 2.8,
             "humuleneMin": 38,
             "humuleneMax": 45,
             "caryophylleneMin": 12,
             "caryophylleneMax": 16,
             "cohumuloneMin": 28,
             "cohumuloneMax": 32,
             "myrceneMin": 25,
             "myrceneMax": 25,
             "farneseneMin": 0.4,
             "farneseneMax": 0.4,
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:29",
             "updateDate": "2013-06-24 16:10:37",
             "country": {
                  "isoCode": "GB",
                  "name": "UNITED KINGDOM",
                  "displayName": "United Kingdom",
                  "isoThree": "GBR",
                  "numberCode": 826,
                  "createDate": "2012-01-03 02:41:33"
             }
        },
        {
             "id": 37,
             "name": "El Dorado",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2013-06-24 16:07:29"
        },
        {
             "id": 1999,
             "name": "Ella",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2015-07-27 19:35:34"
        },
        {
             "id": 2011,
             "name": "Enigma",
             "category": "hop",
             "categoryDisplay": "Hops",
             "createDate": "2015-12-11 14:39:17"
        }
     ],
     "status": "success"
}


var capitalize = function( string ) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

window.onload = function() {
  console.log( 'app started' );
  var url = "https://punkapi.com/api/v1/beers";

  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.setRequestHeader( 'Authorization','Basic ' + btoa('99fda1f72f51428aa5ab92b80c6e3878' ) );

  request.onload = function() {
    if (request.status === 200) {
      var jsonString = request.responseText;
      state.beers = JSON.parse(jsonString);
      localStorage.setItem( "saved_hops" , JSON.stringify( hops ) );

      main();
    };
    console.log( state.beers );
  };
  request.send(null);
};

var main = function() {

  state.savedHops = JSON.parse( localStorage.getItem( "saved_hops" ) ) || [];
  state.beer = JSON.parse( localStorage.getItem( "saved_beer" ) ) || [];
  console.log( state.savedHops.data )
  updateDisplay( state.beer );
  displayRecipe( state.beer );

  var beerSelect = document.getElementById( "beerSelect" );
  state.beers.forEach( function( beer, index ) {
    var option = document.createElement( 'option' );
    option.innerText = beer.name;
    option.value = index;
    beerSelect.appendChild( option );
    if( beer.name === state.beer.name ){
      state.index = index;
    };
  }) ;

  beerSelect.value = state.index;

  beerSelect.onchange = function( event ) {

    var index = event.target.value; 
    state.beer = state.beers[index];
    updateDisplay( state.beer );
    displayRecipe( state.beer );
    state.malts = [];
    state.hops = [];
    state.yeast = [];
    state.altHops = [];
  };
};

var updateDisplay = function ( beer ) {
  var tags = document.querySelectorAll('#info p');
  tags[0].innerHTML = "<b>Blurb: </b>" + beer.tagline;
  tags[1].innerHTML = "<b>Description: </b>" + beer.description;
  tags[2].innerHTML = "<b>ABV: </b>" + beer.abv + "%";
  localStorage.setItem( "saved_beer" , JSON.stringify( beer ) );
};

var displayRecipe = function( beer ) {
  var recipe = document.getElementById( 'recipe' );
  recipe.style.display = 'block';
  var malts = document.getElementById( 'malts' );
  malts.innerHTML = "";
  state.beer.ingredients.malt.forEach( function( malt, index ) {
    var p = document.createElement( 'p' );
    p.id = "malt";
    p.innerHTML = malt.name + ": " + malt.amount.value + "kg";
    malts.appendChild( p );
    state.hops.push( { name: malt.name, amount: malt.amount.value } );
  });

  var maltMap = state.beer.ingredients.malt.map( function( malt ) {
    return { name: malt.name, y: malt.amount.value, sliced: true };
  });
  new MaltChart( maltMap );


  var hops = document.getElementById( 'hops' );
  hops.innerHTML = "";
  state.beer.ingredients.hops.forEach( function( hop, index ) {
    hopSearch( hop )
    var p = document.createElement( 'p' );
    p.id = "hops";
    p.innerHTML = capitalize( hop.add ) + ": " + hop.amount.value + "g " + hop.name
    hops.appendChild( p );
    state.hops.push( { name: hop.name, amount: hop.amount.value } );
  });

  var hopMap = state.beer.ingredients.hops.map( function( hop ) {
    return { name: hop.name + ": " + capitalize( hop.add ), y: hop.amount.value, sliced: true };
  })

  new HopChart( hopMap );

  var yeast = document.getElementById( 'yeast' );
  yeast.innerHTML = "";
  var p = document.createElement( 'p' );
  p.id = "yeast";
  p.innerHTML = beer.ingredients.yeast;
  yeast.appendChild( p );
  state.yeast.push( { name: beer.ingredients.yeast } );

  var mashTemp = document.getElementById( 'mash-temp');
  mashTemp.innerHTML = "";
  var p = document.createElement( 'p' );
  p.id = "mashTemp";
  p.innerHTML = beer.method.mash_temp[0].temp.value + "&#x2103";
  mashTemp.appendChild( p );

  var mashTime = document.getElementById( 'mash-time');
  mashTime.innerHTML = "";
  var p = document.createElement( 'p' );
  p.id = "mashTime";

  if(beer.method.mash_temp[0].duration != null){
    p.innerHTML =  beer.method.mash_temp[0].duration + " Minutes";
  }else{
    p.innerHTML = "90 Minutes";
  }
  mashTime.appendChild( p );

  var oG = document.getElementById( 'oG' );
  oG.innerHTML = "";
  var p = document.createElement( 'p' );
  p.id = "oG";
  p.innerHTML = beer.target_og;
  oG.appendChild( p );

  var notes = document.getElementById( 'notes' );
  notes.innerHTML = "";
  var p = document.createElement( 'p' );
  p.id = "notes";
  p.innerHTML = beer.brewers_tips;
  notes.appendChild( p );

  if( beer.method.twist ) {
    var h = document.createElement( 'h4' );
    h.id = "twist-title";
    h.innerHTML = "Extra Twist";
    notes.appendChild( h );

    var p = document.createElement( 'p' );
    p.id = "twist";
    p.innerHTML = beer.method.twist;
    notes.appendChild( p );
  };
};

var hopSearch = function( hopToSearch ) {
  var hopDisplay = document.getElementById( 'alternative-hops' );
  hopDisplay.style.display = 'none';    
  for( searchHop of state.savedHops.data ) {
    if( hopToSearch.name === searchHop.name ) {
      console.log("hello")
      searchAlpha( searchHop )
    } 
  } 
}


var searchAlpha = function( hopToSearch ) {
  var altHops = document.getElementById('altHops');
  altHops.innerHTML = ""
  for( alphaSearch of state.savedHops.data ) {
    if( (hopToSearch.alphaAcidMin < ( alphaSearch.alphaAcidMin + 2 )) && (hopToSearch.alphaAcidMin > ( alphaSearch.alphaAcidMin - 2 ))) {
      if( alphaSearch.name != hopToSearch.name){
        var resultHop = alphaSearch
        var p = document.createElement( 'p' );
        p.innerHTML = resultHop.name + " instead of " + hopToSearch.name
        altHops.appendChild( p )
        var hopDisplay = document.getElementById( 'alternative-hops' );
        hopDisplay.style.display = 'block';
      }
    }
  }
}










