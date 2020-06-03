const maps = document.querySelectorAll('.map-container__iran-map__svg g:not(.map-container__iran-map__border):not(.map-container__iran-map__sea):not(.map-container__iran-map__lake) path')
const mapItemInfo = document.querySelector('.map-container__iran-map__item-info')
const mapItemInfoPersianLocation = document.querySelector('#mapItemInfoPersianLocation')
const mapItemInfoSupermarketDetail = document.querySelector('#mapItemInfoSupermarketDetail')
const mapItemInfoPharmacyDetail = document.querySelector('#mapItemInfoPharmacyDetail')

maps.forEach(map => {
    map.addEventListener('click', e => {
        handleMapItemClick(e.target.classList[0])
    })
    map.addEventListener('mouseover', e => {
        getMapItemInfo(e.target.classList[0])
        mapItemInfo.style.display = 'block'
    })
    map.addEventListener('mouseout', () => {
        mapItemInfo.innerHTML = ''
        mapItemInfo.style.display = 'none'
    })
    map.addEventListener('mousemove', e => {
        getMapItemRelativeCoordinates(e)
    })
})

const getMapItemRelativeCoordinates = e => {
    const windowInnerWidthtOffset = window.innerWidth * 0.1
    const windowInnerHeightOffset = window.innerHeight * 0.1

    if (e.clientX - windowInnerWidthtOffset - mapItemInfo.clientWidth < window.innerWidth - 726) {
        mapItemInfo.style.left = e.clientX + 10 + 'px'
        mapItemInfo.style.right = ''
    } else if (e.clientX - windowInnerWidthtOffset - mapItemInfo.clientWidth < 0) {
        mapItemInfo.style.left = e.clientX + 10 + 'px'
        mapItemInfo.style.right = ''
    } else {
        mapItemInfo.style.right = window.innerWidth - e.clientX + 'px'
        mapItemInfo.style.left = ''
    }
    if (e.clientY + mapItemInfo.clientHeight > window.innerHeight - windowInnerHeightOffset) {
        mapItemInfo.style.top = e.clientY - mapItemInfo.clientHeight + 'px'
    } else {
        mapItemInfo.style.top = e.clientY + 10 + 'px'
    }
}