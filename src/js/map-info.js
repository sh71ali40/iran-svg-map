// use mapItems to search through items and pass them to map.js
const mapItems = []

// create your own MapItem calss
class MapItem {
    constructor(mapLocation, city, address) {
        // must at least declare province/island name as mapLocation property which is a search index
        this.mapLocation = mapLocation,

        // optional properties
        this.city = city,
        this.address = address

        mapItems.push(this)
    }
    getMapItemInfo() {
        // decide how you want to show mapItemInfo
        return `<p>city: ${this.city}</p><p>address: ${this.address}</p>`
    }
}

// create as many instance as you want
// province/island name must be as the same as below map guide
const tehran = new MapItem('tehran', 'tehran', 'sample address', 'sample link')
const fars = new MapItem('fars', 'shiraz', 'sample address', 'sample link')
const kish = new MapItem('kish', 'kish', 'sample address', 'sample link')

const getMapItemInfo = (mapLocation) => {
    const mapItem = mapItems.find(mapItem => {
        return mapItem.mapLocation === mapLocation
    })
    if (mapItem) {
        mapItemInfo.innerHTML = mapItem.getMapItemInfo()
    } else {
        // you can use custom string template to set as the default value
        mapItemInfo.innerHTML = mapLocation
    }
}

// map guide:
//     Province:
//         1- alborz
//         2- ardabil
//         3- east-azerbaijan
//         4- west-azerbaijan
//         5- bushehr
//         6- chahar-mahaal-bakhtiari
//         7- fars
//         8- gilan
//         9- golestan
//         10- hamadan
//         11- hormozgan
//         12- ilam
//         13- isfahan
//         14- kerman
//         15- kermanshah
//         16- north-khorasan
//         17- khorasan-razavi
//         18- south-khorasan
//         19- khuzestan
//         20- kohgiluyeh-boyer-ahmad
//         21- kurdistan
//         22- lorestan
//         23- markazi
//         24- mazandaran
//         25- qazvin
//         26- qom
//         27- semnan
//         28- sistan-baluchestan
//         29- tehran
//         30- yazd
//         31- zanjan
//     Sea:
//         1- caspian
//         2- persian-gulf
//     Lake:
//         1- jazmourian
//         2- qom
//         3- urmia
//     Island:
//         1- abu-musa
//         2- lesser-faror
//         3- hendorabi
//         4- hengam
//         5- hormoz
//         6- khark
//         7- kish
//         8- lark
//         9- lavan
//         10- qeshm
//         11- siri
//         12- greater-tunb
//         13- lesser-tunb