/*global kakao*/
/* eslint-disable no-unused-vars */

/** @class kakao maps wrapping class. */
class Map {
    latitude;
    longitude;
    mapId;
    level;    
    map;

    /**
     * Creates an instance of kakao maps.
     *
     * @constructor
     * @param {number} latitude 위도
     * @param {number} longitude 경도
     * @param {string} mapId 지도 표시할 Element ID
     * @param {number} level 지도 확대 레벨
     */
    constructor(latitude, longitude, mapId = "map", level = 3) {
        /** @private */ this.latitude = latitude;
        /** @private */ this.longitude = longitude;
        /** @private */ this.mapId = mapId;
        /** @private */ this.level = level;

        var container = document.getElementById(mapId);
        var options = {
            center: new kakao.maps.LatLng(latitude, longitude),
            level: level
        };
        this.map = new kakao.maps.Map(container, options);        
    }

    /**
     * 이동할 위도 경도 위치를 생성합니다. 지도 중심을 이동 시킵니다.
     */    
    setCenter(latitude, longitude) {
        var moveLatLon = new kakao.maps.LatLng(latitude, longitude);
        this.map.setCenter(moveLatLon);
    }
    
    /**
     * 이동할 위도 경도 위치를 생성합니다. 지도 중심을 부드럽게 이동시킵니다. 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다.
     */        
    panTo(latitude, longitude) {
        var moveLatLon = new kakao.maps.LatLng(latitude, longitude);
        this.map.panTo(moveLatLon);
    }        
}
