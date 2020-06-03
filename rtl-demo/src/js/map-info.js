const mapItems = []

class MapItem {
    constructor(englishMapLocation, persianMapLocation, supermarketDetail, pharmacyDetail) {
        // must at least declare province/island name as englishMapLocation property which is a search index
        this.englishMapLocation = englishMapLocation,

        // optional properties
        this.persianMapLocation = persianMapLocation,
        this.supermarketDetail = supermarketDetail,
        this.pharmacyDetail = pharmacyDetail

        mapItems.push(this)
    }
    getMapItemInfo() {
        // decide how you want to show mapItemInfo in a tooltip
        return `
            <div>
                <div class="map-container__iran-map__item-info__location">${this.persianMapLocation}</div>
                <div class="map-container__iran-map__item-info__container">
                    <div class="map-container__iran-map__item-info__container-supermarket">
                        <p class="map-container__iran-map__item-info__container__title">لاین سوپرمارکت</p>
                        <p class="map-container__iran-map__item-info__container__subtitle">${this.supermarketDetail}</p>
                    </div>
                    <div class="map-container__iran-map__item-info__container-pharmacy">
                        <p class="map-container__iran-map__item-info__container__title">لاین داروخانه</p>
                        <p class="map-container__iran-map__item-info__container__subtitle">${this.pharmacyDetail}</p>
                    </div>
                </div>
            </div>
        `
    }
}

// create as many instances as you want
// province/island name must be as the same as below map guide
const alborz = new MapItem('alborz', 'استان البرز', 'موجود نمی باشد', 'موجود نمی باشد')
const ardabil = new MapItem('ardabil', 'استان اردبیل', 'موجود نمی باشد', 'موجود نمی باشد')
const eastAzerbaijan = new MapItem('east-azerbaijan', 'استان آذربایجان شرقی', 'موجود نمی باشد', 'موجود نمی باشد')
const westAzerbaijan = new MapItem('west-azerbaijan', 'استان آذربایجان غربی', 'موجود نمی باشد', 'موجود نمی باشد')
const bushehr = new MapItem('bushehr', 'استان بوشهر', 'موجود نمی باشد', 'موجود نمی باشد')
const chaharMahaalBakhtiari = new MapItem('alborz', 'استان چهارمحال بختیاری', 'موجود نمی باشد', 'موجود نمی باشد')
const fars = new MapItem('fars', 'استان فارس', 'اطلاعات تست سوپرمارکت 2', 'اطلاعات تست داروخانه 2')
const gilan = new MapItem('gilan', 'استان گیلان', 'موجود نمی باشد', 'موجود نمی باشد')
const golestan = new MapItem('golestan', 'استان گلستان', 'موجود نمی باشد', 'موجود نمی باشد')
const hamadan = new MapItem('hamadan', 'استان همدان', 'موجود نمی باشد', 'موجود نمی باشد')
const hormozgan = new MapItem('hormozgan', 'استان هرمزگان', 'موجود نمی باشد', 'موجود نمی باشد')
const ilam = new MapItem('ilam', 'استان ایلام', 'موجود نمی باشد', 'موجود نمی باشد')
const isfahan = new MapItem('isfahan', 'استان اصفهان', 'اطلاعات تست سوپرمارکت 4', 'اطلاعات تست داروخانه 4')
const kerman = new MapItem('kerman', 'استان کرمان', 'موجود نمی باشد', 'موجود نمی باشد')
const kermanshah = new MapItem('kermanshah', 'استان کرمانشاه', 'موجود نمی باشد', 'موجود نمی باشد')
const northKhorasan = new MapItem('north-khorasan', 'استان خراسان شمالی', 'موجود نمی باشد', 'موجود نمی باشد')
const khorasanRazavi = new MapItem('khorasan-razavi', 'استان خراسان رضوی', 'موجود نمی باشد', 'موجود نمی باشد')
const southKhorasan = new MapItem('south-khorasan', 'استان خراسان جنوبی', 'موجود نمی باشد', 'موجود نمی باشد')
const khuzestan = new MapItem('khuzestan', 'استان خوزستان', 'موجود نمی باشد', 'موجود نمی باشد')
const kohgiluyehBoyerAhmad = new MapItem('kohgiluyeh-boyer-ahmad', 'استان کهگیلویه و بویراحمد', 'موجود نمی باشد', 'موجود نمی باشد')
const kurdistan = new MapItem('kurdistan', 'استان کردستان', 'موجود نمی باشد', 'موجود نمی باشد')
const lorestan = new MapItem('lorestan', 'استان لرستان', 'موجود نمی باشد', 'موجود نمی باشد')
const markazi = new MapItem('markazi', 'استان مرکزی', 'موجود نمی باشد', 'موجود نمی باشد')
const mazandaran = new MapItem('mazandaran', 'استان مازندران', 'موجود نمی باشد', 'موجود نمی باشد')
const qazvin = new MapItem('qazvin', 'استان قزوین', 'موجود نمی باشد', 'موجود نمی باشد')
const qom = new MapItem('qom', 'استان قم', 'موجود نمی باشد', 'موجود نمی باشد')
const semnan = new MapItem('semnan', 'استان سمنان', 'اطلاعات تست سوپرمارکت 3', 'اطلاعات تست داروخانه 3')
const sistanBaluchestan = new MapItem('sistan-baluchestan', 'استان سیستان بلوچستان', 'موجود نمی باشد', 'موجود نمی باشد')
const tehran = new MapItem('tehran', 'استان تهران', 'اطلاعات تست سوپرمارکت', 'اطلاعات تست داروخانه')
const yazd = new MapItem('yazd', 'استان یزد', 'موجود نمی باشد', 'موجود نمی باشد')
const zanjan = new MapItem('zanjan', 'استان زنجان', 'موجود نمی باشد', 'موجود نمی باشد')
const abuMusa = new MapItem('abu-musa', 'جزیره ابوموسی', 'موجود نمی باشد', 'موجود نمی باشد')
const lesserFaror = new MapItem('lesser-faror', 'جزیره فارور', 'موجود نمی باشد', 'موجود نمی باشد')
const hendorabi = new MapItem('hendorabi', 'جزیره هندورابی', 'موجود نمی باشد', 'موجود نمی باشد')
const hengam = new MapItem('hengam', 'جزیره هنگام', 'موجود نمی باشد', 'موجود نمی باشد')
const hormoz = new MapItem('hormoz', 'جزیره هرمز', 'موجود نمی باشد', 'موجود نمی باشد')
const khark = new MapItem('khark', 'جزیره خارک', 'موجود نمی باشد', 'موجود نمی باشد')
const kish = new MapItem('kish', 'جزیره کیش', 'موجود نمی باشد', 'موجود نمی باشد')
const lark = new MapItem('lark', 'جزیره لارک', 'موجود نمی باشد', 'موجود نمی باشد')
const lavan = new MapItem('lavan', 'جزیره لاوان', 'موجود نمی باشد', 'موجود نمی باشد')
const qeshm = new MapItem('qeshm', 'جزیره قشم', 'موجود نمی باشد', 'موجود نمی باشد')
const siri = new MapItem('siri', 'جزیره سیری', 'موجود نمی باشد', 'موجود نمی باشد')
const greaterTunb = new MapItem('greater-tunb', 'جزیره تنب بزرگ', 'موجود نمی باشد', 'موجود نمی باشد')
const lesserTunb = new MapItem('lesser-tunb', 'جزیره تنب کوچک', 'موجود نمی باشد', 'موجود نمی باشد')

const getMapItemInfo = englishMapLocation => {
    const mapItem = mapItems.find(mapItem => {
        return mapItem.englishMapLocation === englishMapLocation
    })
    if (mapItem) {
        mapItemInfo.innerHTML = mapItem.getMapItemInfo()
    } else {
        // you can use custom string template to set as the default value
        mapItemInfo.innerHTML = englishMapLocation
    }
}

const handleMapItemClick = englishMapLocation => {
    // handle what you want to do when a user clicked an item
    const mapItem = mapItems.find(mapItem => {
        return mapItem.englishMapLocation === englishMapLocation
    })
    if (mapItem) {
        document.querySelector('.map-container__info__container').style.display = 'block'
        mapItemInfoPersianLocation.innerHTML = mapItem.persianMapLocation
        mapItemInfoSupermarketDetail.innerHTML = mapItem.supermarketDetail
        mapItemInfoPharmacyDetail.innerHTML = mapItem.pharmacyDetail
    } else {
        // you can use custom string template to set as the default value
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