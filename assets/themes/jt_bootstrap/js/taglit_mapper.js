var itinerary = [
    'jfk_airport',
    'madrid_airport',
    'old_jaffa_city',
    'tel_aviv_university',
    'kibbutz_tsuba',
    'kibbutz_tsuba',
    'yad_vashem',
    'mount_herzl',
    'mehane_yehuda_market',
    'avshalom_cave_and_dig',
    'bedouin_tents',
    'mount_masada',
    'dead_sea',
    'blue_bay_hotel',
    'agamon_hula',
    'kibbutz_ginosaur',
    'haifa',
    'blue_bay_hotel',
    'old_city_jerusalem',
];

var positionsGeoJSON = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon", 
                "coordinates": [
                    [ 
                        [-73.821945,40.648866],
                        [-73.770447,40.623855],
                        [-73.747787,40.641573],
                        [-73.794479,40.661369],
                        [-73.821945,40.648866]
                    ]
                ]
            },
            "properties": {
                "name": "JFK Airport",
                "machineName": "jfk_airport",
                "dates": [
                    {
                        "dateStart": new Date("December 16, 2012 14:00:00 GMT-0400"),
                        "dateEnd": new Date("December 16, 2012 23:15:00 GMT-0400"),
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon", 
                "coordinates": [
                    [ 
                        [-3.579826,40.456091],
                        [-3.575363,40.452172],
                        [-3.56472,40.456875],
                        [-3.553734,40.457397],
                        [-3.550644,40.45374],
                        [-3.545837,40.452695],
                        [-3.543434,40.459748],
                        [-3.540001,40.460271],
                        [-3.537598,40.454785],
                        [-3.526955,40.455307],
                        [-3.556824,40.499964],
                        [-3.558884,40.543548],
                        [-3.57811,40.535199],
                        [-3.57811,40.503358],
                        [-3.595963,40.502836],
                        [-3.596649,40.481948],
                        [-3.578796,40.480904],
                        [-3.57605,40.467323],
                        [-3.579826,40.456091]
                    ]
                ]
            },
            "properties": {
                "name": "Madrid Airport",
                "machineName": "madrid_airport",
                "dates": [
                    {
                        "dateStart": new Date("December 17, 2012 11:00:00 GMT+0100"),
                        "dateEnd": new Date("December 17, 2012 23:15:00 GMT+0100"),
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon", 
                "coordinates": [
                    [ 
                        [34.751955,32.053954],
                        [34.752803,32.053008],
                        [34.755453,32.054654],
                        [34.753661,32.055218],
                        [34.751955,32.053954]
                    ]
                ]
            },
            "properties": {
                "name": "Old Jaffa City",
                "machineName": "old_jaffa_city",
                "dates": [
                    {
                        "dateStart": new Date("December 18, 2012 10:00:00 GMT+0200"),
                        "dateEnd": new Date("December 18, 2012 15:00:00 GMT+0100"),
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon", 
                "coordinates": [
                    [ 
                        [34.803636,32.114949],
                        [34.801705,32.113967],
                        [34.801877,32.11095],
                        [34.806941,32.11075],
                        [34.807069,32.115658],
                        [34.803636,32.114949]
                    ]
                ]
            },
            "properties": {
                "name": "Tel Aviv University",
                "machineName": "tel_aviv_university",
                "dates": [
                    {
                        "dateStart": new Date("December 18, 2012 18:00:00 GMT+0100"),
                        "dateEnd": new Date("December 18, 2012 23:00:00 GMT+0100"),
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon", 
                "coordinates": [
                    [ 
                        [35.117739,31.784703],
                        [35.11765,31.784452],
                        [35.117876,31.784342],
                        [35.118047,31.78468],
                        [35.117739,31.784703]
                    ]
                ]
            },
            "properties": {
                "name": "Kibbutz Tzuba",
                "machineName": "kibbutz_tsuba",
                "dates": [
                    {
                        "dateStart": new Date("December 18, 2012 23:00:00 GMT+0100"),
                        "dateEnd": new Date("December 19, 2012 07:00:00 GMT+0100"),
                    },
                    {
                        "dateStart": new Date("December 19, 2012 23:00:00 GMT+0100"),
                        "dateEnd": new Date("December 20, 2012 07:00:00 GMT+0100"),
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon", 
                "coordinates": [
                    [ 
                        [35.175463,31.774068],
                        [35.17542,31.774032],
                        [35.17598,31.77363],
                        [35.17612,31.773722],
                        [35.175463,31.774068]
                    ]
                ]
            },
            "properties": {
                "name": "Yad Vashem Holocaust Museum",
                "machineName": "yad_vashem",
                "dates": [
                    {
                        "dateStart": new Date("December 19, 2012 07:00:00 GMT+0100"),
                        "dateEnd": new Date("December 19, 2012 14:00:00 GMT+0100"),
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon", 
                "coordinates": [
                    [ 
                        [35.182973,31.767047],
                        [35.18301,31.766539],
                        [35.183745,31.766607],
                        [35.183426,31.767198],
                        [35.182973,31.767047]
                    ]
                ]
            },
            "properties": {
                "name": "Mount Herzl",
                "machineName": "mount_herzl",
                "dates": [
                    {
                        "dateStart": new Date("December 19, 2012 14:00:00 GMT+0100"),
                        "dateEnd": new Date("December 19, 2012 19:00:00 GMT+0100"),
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon", 
                "coordinates": [
                    [ 
                        [35.212115,31.78579],
                        [35.212126,31.785334],
                        [35.212297,31.785339],
                        [35.212297,31.785792],
                        [35.212115,31.78579]
                    ]
                ]
            },
            "properties": {
                "name": "Mehane Yehuda Market",
                "machineName": "mehane_yehuda_market",
                "dates": [
                    {
                        "dateStart": new Date("December 19, 2012 19:00:00 GMT+0100"),
                        "dateEnd": new Date("December 19, 2012 23:15:00 GMT+0100"),
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon", 
                "coordinates": [
                    [ 
                        [35.022182,31.756379],
                        [35.021882,31.754627],
                        [35.025294,31.754609],
                        [35.02362,31.75689],
                        [35.022182,31.756379]
                    ]
                ]
            },
            "properties": {
                "name": "Avshalom Cave and Archeological Dig",
                "machineName": "avshalom_cave_and_dig",
                "dates": [
                    {
                        "dateStart": new Date("December 20, 2012 23:00:00 GMT+0100"),
                        "dateEnd": new Date("December 20, 2012 13:00:00 GMT+0100"),
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon", 
                "coordinates": [
                    [ 
                        [35.200195,31.280898],
                        [35.202255,31.266226],
                        [35.218048,31.281485],
                        [35.217361,31.292047],
                        [35.200195,31.280898]
                    ]
                ]
            },
            "properties": {
                "name": "Bedouin Tents, Kfar Hankdim",
                "machineName": "bedouin_tents",
                "dates": [
                    {
                        "dateStart": new Date("December 20, 2012 13:00:00 GMT+0100"),
                        "dateEnd": new Date("December 21, 2012 05:00:00 GMT+0100"),
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon", 
                "coordinates": [
                    [ 
                        [35.346622,31.319768],
                        [35.347052,31.317055],
                        [35.349026,31.317055],
                        [35.348511,31.320061],
                        [35.346622,31.319768]
                    ]
                ]
            },
            "properties": {
                "name": "Mount Masada",
                "machineName": "mount_masada",
                "dates": [
                    {
                        "dateStart": new Date("December 21, 2012 05:00:00 GMT+0100"),
                        "dateEnd": new Date("December 21, 2012 12:00:00 GMT+0100"),
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon", 
                "coordinates": [
                    [ 
                        [35.507813,31.760867],
                        [35.549011,31.753861],
                        [35.491333,31.325487],
                        [35.384216,31.316101],
                        [35.458374,31.739847],
                        [35.507813,31.760867]
                    ]
                ]
            },
            "properties": {
                "name": "Dead Sea",
                "machineName": "dead_sea",
                "dates": [
                    {
                        "dateStart": new Date("December 18, 2012 12:00:00 GMT+0100"),
                        "dateEnd": new Date("December 18, 2012 17:00:00 GMT+0100"),
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon", 
                "coordinates": [
                    [ 
                        [34.854255,32.352068],
                        [34.853311,32.348552],
                        [34.856336,32.348552],
                        [34.855971,32.352449],
                        [34.854255,32.352068]
                    ]
                ]
            },
            "properties": {
                "name": "Blue Bay Hotel, Netanya",
                "machineName": "blue_bay_hotel",
                "dates": [
                    {
                        "dateStart": new Date("December 21, 2012 17:00:00 GMT+0100"),
                        "dateEnd": new Date("December 22, 2012 18:00:00 GMT+0100"),
                    },
                    {
                        "dateStart": new Date("December 25, 2012 17:00:00 GMT+0100"),
                        "dateEnd": new Date("December 26, 2012 11:00:00 GMT+0100"),
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon", 
                "coordinates": [
                    [ 
                        [35.59021,33.108798],
                        [35.590553,33.095281],
                        [35.623169,33.092692],
                        [35.622826,33.109373],
                        [35.59021,33.108798]
                    ]
                ]
            },
            "properties": {
                "name": "Agamon Hula",
                "machineName": "agamon_hula",
                "dates": [
                    {
                        "dateStart": new Date("December 23, 2012 10:00:00 GMT+0100"),
                        "dateEnd": new Date("December 23, 2012 15:00:00 GMT+0100"),
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon", 
                "coordinates": [
                    [ 
                        [35.523005,32.850894],
                        [35.519571,32.844621],
                        [35.524721,32.843467],
                        [35.528069,32.849957],
                        [35.523005,32.850894]
                    ]
                ]
            },
            "properties": {
                "name": "Kibbutz Ginosaur",
                "machineName": "kibbutz_ginosaur",
                "dates": [
                    {
                        "dateStart": new Date("December 23, 2012 15:00:00 GMT+0100"),
                        "dateEnd": new Date("December 24, 2012 10:00:00 GMT+0100"),
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon", 
                "coordinates": [
                    [ 
                        [34.955063,32.823346],
                        [34.986992,32.83402],
                        [35.03231,32.783522],
                        [34.958496,32.776017],
                        [34.955063,32.823346]
                    ]
                ]
            },
            "properties": {
                "name": "Haifa",
                "machineName": "haifa",
                "dates": [
                    {
                        "dateStart": new Date("December 25, 2012 10:00:00 GMT+0100"),
                        "dateEnd": new Date("December 25, 2012 17:00:00 GMT+0100"),
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon", 
                "coordinates": [
                    [ 
                        [35.226288,31.779037],
                        [35.228004,31.772907],
                        [35.237617,31.776337],
                        [35.236673,31.783852],
                        [35.226288,31.779037]
                    ]
                ]
            },
            "properties": {
                "name": "Jerusalem, Old City",
                "machineName": "old_city_jerusalem",
                "dates": [
                    {
                        "dateStart": new Date("December 26, 2012 11:00:00 GMT+0100"),
                        "dateEnd": new Date("December 27, 2012 01:00:00 GMT+0100"),
                    }
                ]
            }
        }
    ]
};

var taglitMapper = {
    mapboxUrl: 'http://a.tiles.mapbox.com/v3/mrmaksimize.map-qn9b68nj.jsonp',
    flickKey: '5185b66b87a1345f857fc311b059f7a0',
    flickSecret: 'a2fa9fe8c981e97c',
    photoSetId: '72157632386151212',
    perPage: '500',
    clusterIconSize: 75,
    clusterIconSizeLarge: 100,
    clusterIconOpacityOn: 1,
    clusterIconOpacityOff: 0.7,
    markerIconSize: 30,
    markerIconSizeLarge: 50,
    markerIconOpacityOn: 1,
    markerIconOpacityOff: 0.7,

    center: {
        lat: 31.23788291430615,
        lng: 35.09799757967768,
        zoom: 8,
    },

    availableLineColors: [
        'blue',
        'red',
        'green',
        'orange',
    ],
    getFlickURL: function(page) {
        return 'http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=' + this.flickKey + '&photoset_id=' + this.photoSetId + '&page=' + page + '&per_page=' + this.perPage + '&extras=geo,date_taken,path_alias,url_sq,url_t,url_s,url_m,url_o&format=json&jsoncallback=?';
    },
    getRandom: function(min, max, round) {
        var result = Math.random() * (max - min) + min;
        if (round == true) {
            result = Math.round(result);
        }
        return result;
    },
    getRandomPosPolygon: function(polygon) {
        var bounds = polygon.getBounds();
        var center = bounds.getCenter();
        var latDeviator = this.getRandom(0, 0.049999999, false);
        var lngDeviator = this.getRandom(0, 0.049999999, false);
        center.lat = this.getRandom(center.lat, center.lat + latDeviator);
        center.lng = this.getRandom(center.lng, center.lng + lngDeviator);
        return center;
    },

    reverseCoordinateSet: function(coordSet) {
        var newCoordSet = [];
        for (var g = 0; g < coordSet.length; g++) {
            var coordinatePoint = coordSet[g];
            var newCoordinatePoint = [coordinatePoint[1], coordinatePoint[0]];
            newCoordSet.push(newCoordinatePoint);
        }
        return newCoordSet;
    },

    getLineBetweenTwoPolygons: function(polygonOne, polygonTwo) {
        var bounds = [polygonOne.getBounds(), polygonTwo.getBounds()];
        var line = [bounds[0].getCenter(), bounds[1].getCenter()];
        return line;
    },

    geocode: function(location) {
        var url = 'http://a.tiles.mapbox.com/v3/mrmaksimize.map-qn9b68nj/geocode/' + location +'.jsonp';
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'jsonp',
            error: function(xhr, status, error) {
                alert("error");
            },
            success: function(geoResult) {
                if (geoResult.results[0][0]) {
                    console.log(geoResult.results[0][0]);
                    /*var result = geoResult.results[0][0];
                    var marker = L.marker([result.lat, result.lon]).addTo(map);
                    var popupHtml = "<div style='text-align:center'><img src='" + locations[i].image + "' style='width:150px'></img><br/><a href='" + locations[i].link + "'>" +locations[i].title + "</a></div>";
                    
                    marker.bindPopup(popupHtml);*/
                }
            }
        });
    },
    getMetaByDate: function(dateTaken) {
        for ( var p = 0; p < this.geoJSON.features.length; p++ ) {
            for ( var d in this.geoJSON.features[p].properties.dates) {
                if (this.geoJSON.features[p].properties.dates[d]) {
                    //@todo fix this.
                    var dateStart = this.geoJSON.features[p].properties.dates[d].dateStart;
                    var dateStartUTC = Date.UTC(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate(), dateStart.getHours(), dateStart.getMinutes(), dateStart.getSeconds());
                    var dateEnd = this.geoJSON.features[p].properties.dates[d].dateEnd;
                    var dateEndUTC = Date.UTC(dateEnd.getFullYear(), dateEnd.getMonth(), dateEnd.getDate(), dateEnd.getHours(), dateEnd.getMinutes(), dateEnd.getSeconds());
                    var dateTakenUTC = Date.UTC(dateTaken.getFullYear(), dateTaken.getMonth(), dateTaken.getDate(), dateTaken.getHours(), dateTaken.getMinutes(), dateTaken.getSeconds());
                    if (dateStartUTC < dateTakenUTC && dateEndUTC > dateTakenUTC) {
                        var photoMeta = this.geoJSON.features[p];
                        photoMeta.properties.photoPos = this.getRandomPosPolygon(photoMeta.properties.polygon);
                        return photoMeta;
                    }
                }
            }
        }
        return null;
    },

    getItinerary: function(itinerary) {
        var polyItinerary = [];
        for (i = 0; i < itinerary.length; i++) {
            for ( var p = 0; p < this.geoJSON.features.length; p++ ) {
                if (this.geoJSON.features[p].properties.machineName == itinerary[i]){
                    polyItinerary.push(this.geoJSON.features[p].properties.polygon);
                }
            }
        }
        return polyItinerary;
    },

    generateLines: function() {
        var lines = [];
        for (var i = 1; i < this.polyItinerary.length; i++) {
            var colorCount = this.availableLineColors.length - 1;
            var colorPos = this.getRandom(0, colorCount, true);
            var color = this.availableLineColors[colorPos];
            var polyOne = this.polyItinerary[i - 1];
            var polyTwo = this.polyItinerary[i];
            var line = this.getLineBetweenTwoPolygons(polyOne, polyTwo);
            lines.push(line);
        }
        return lines;
    },

    openModal: function(callingElement) {
        console.log(callingElement);
        var datetaken = $(callingElement).data('date-taken');
        var locNear = $(callingElement).data('near');
        console.log(datetaken);
        //$('#image-modal .modal-label').html($(callingElement.data('date-taken')));
        $('#image-modal #modal-label').html('Near: ' + locNear);
        $('#image-modal .modal-body').html("<img src='" + $(callingElement).attr('href') + "'>");
        $('#image-modal .modal-footer').html(datetaken);
        $('#image-modal').modal('toggle');
    },

    makeCluster: function() {
        var uniqueId = taglitMapper.getRandom(0, 999999999999999, true);
            var createdCluster = new L.MarkerClusterGroup({
                disableClusteringAtZoom: 17, 
                showCoverageOnHover: false,
                iconCreateFunction: function(cluster) {
                    var allMarkers = cluster.getAllChildMarkers();
                    var randomMarkerPos = taglitMapper.getRandom(0, allMarkers.length - 1, true);
                    var clusterIconHtml = '<img class="cluster-' + cluster._leaflet_id + ' img-circle" src="' + allMarkers[randomMarkerPos].photoUrlSq +'" width="' + taglitMapper.clusterIconSize + 'px"></img>';
                    return new L.DivIcon({ 
                        html: clusterIconHtml, 
                        className: 'cluster-div-icon',
                        iconSize: taglitMapper.clusterIconSize
                    });
                }
            });
            createdCluster.on('clustermouseover', function(a) {
                var id = 'cluster-' + a.layer._leaflet_id;
                $('.' + id).animate({
                    width: taglitMapper.clusterIconSizeLarge + "px",
                    opacity: taglitMapper.clusterIconOpacityOn,
                });
            });
            createdCluster.on('clustermouseout', function(a) {
                var id = 'cluster-' + a.layer._leaflet_id;
                $('.' + id).animate({
                    width: taglitMapper.clusterIconSize + "px",
                    opacity: taglitMapper.clusterIconOpacityOff,
                });
            });
            createdCluster.on('mouseover', function(a) {
                var id = 'photo-' + a.layer.photo_id;
                $('.' + id).animate({
                    width: taglitMapper.markerIconSizeLarge + "px",
                    opacity: taglitMapper.markerIconOpacityOn,
                });
            });
            createdCluster.on('mouseout', function(a) {
                var id = 'photo-' + a.layer.photo_id;
                $('.' + id).animate({
                    width: taglitMapper.markerIconSize + "px",
                    opacity: taglitMapper.markerIconOpacityOff,
                });
            });
            return createdCluster;
    },

    prepPhoto: function(photo) {
        photo.dateTaken = new Date(photo.datetaken + " CST");
        photo.photoURL = 'http://www.flickr.com/photos/' + photo.pathalias + '/' + photo.id;
        // Get position based on photo date.
        photo.photoMeta = this.getMetaByDate(photo.dateTaken);
        if (photo.photoMeta) {
            photo.latitude = photo.photoMeta.properties.photoPos.lat;
            photo.longitude = photo.photoMeta.properties.photoPos.lng;
        }
        // Don't do any processing if the photo won't get mapped;
        if (photo.latitude == 0 && photo.longitude == 0) {
            return null;
        }
        return photo;
    },


    getPhotoMarker: function(photo) {
        var marker = new L.marker([photo.latitude, photo.longitude]);
        console.log(photo);
        console.log(photo.photoMeta.properties);
        photo.photoURL = 'http://www.flickr.com/photos/' + photo.pathalias + '/' + photo.id;
        if (photo.photoMeta) {
            var popupHtml = "<div style='text-align:center'><a id='map-image' class='map-image' href='" + photo.url_o + "' data-date-taken='" + photo.datetaken + "' data-near='" + photo.photoMeta.properties.name + "' onClick='taglitMapper.openModal(this); return false;'><img src='" + photo.url_s + "' style='width:180px'></img></a><br/><a href='" + photo.photoURL + "'>" + photo.datetaken + "</a></div>";
            var photoIconHtml = '<img class="photo-' + photo.id + ' img-circle" src="' + photo.url_sq +'" width="' + taglitMapper.markerIconSize + 'px"></img>';
            var photoIcon = L.divIcon({
                className: 'photo-div-icon', 
                html: photoIconHtml,
                iconSize: taglitMapper.markerIconSize,
            });
            marker.photo_id = photo.id;
            marker.setIcon(photoIcon);
            marker.bindPopup(popupHtml);
            marker.photoUrlSq = photo.url_sq;

            return marker;
        }
        return null;
    },

    mapFlickResult: function(flickResult) {
        console.log(flickResult);
        var photoMarkers = {};
        for ( var i = 0; i < flickResult.photoset.photo.length; i++ ) {
            var photo = this.prepPhoto(flickResult.photoset.photo[i]);
            if (photo && photo.photoMeta) {
                var photoMarker = this.getPhotoMarker(photo);
                if (photoMarker != null) {
                    if (!photoMarkers[photo.photoMeta.properties.machineName]) {
                        photoMarkers[photo.photoMeta.properties.machineName] = [];
                    }
                    photoMarkers[photo.photoMeta.properties.machineName].push(photoMarker);
                }
                
            }
        }
        for ( var pm in photoMarkers ) {
            if (photoMarkers[pm]) {
                this.cluster.addLayers(photoMarkers[pm]);
            }
        }
    },

    getFlickrPhotos: function(page) {
        var flickURL = this.getFlickURL(page);
        $.ajax({
            url: flickURL,
            type: 'GET',
            dataType: 'jsonp',
            error: function(xhr, status, error) {
                console.log(error);
            },
            success: function(flickResult) {
                taglitMapper.mapFlickResult(flickResult);
                if (page == 1) {
                    var pagesCount = (Math.round(flickResult.photoset.total / 500)) + 1;
                    console.log(pagesCount);
                    for (var i = 2; i < pagesCount; i++) {
                        console.log(page);
                        taglitMapper.getFlickrPhotos(i);
                    }
                }
                
            }
        });
    },

    processGeoJSON: function(geoJSON) {
        for (var f = 0; f < geoJSON.features.length; f++) {
            var featureCoordSet = geoJSON.features[f].geometry.coordinates;
            featureCoordSet[0] = this.reverseCoordinateSet(featureCoordSet[0]);
            geoJSON.features[f].properties.polygon = new L.Polygon(featureCoordSet);
        }
        return geoJSON;
    },

    boot: function(mapdiv) {
        this.map = new L.Map(mapdiv);
        wax.tilejson(taglitMapper.mapboxUrl, function(tilejson) {
            var leafConnector = new wax.leaf.connector(tilejson);
            taglitMapper.map.addLayer(leafConnector);
            taglitMapper.map.setView(new L.LatLng(taglitMapper.center.lat, taglitMapper.center.lng), taglitMapper.center.zoom);
            taglitMapper.cluster = taglitMapper.makeCluster();
            taglitMapper.map.addLayer(taglitMapper.cluster);
            taglitMapper.geoJSONLayer = L.geoJson(positionsGeoJSON, {
                style: function (feature) {
                    return {color: 'red'};
                },
                onEachFeature: function (feature, layer) {
                    layer.bindPopup(feature.properties.name);
                }
            }).addTo(taglitMapper.map);
            
            taglitMapper.geoJSON = taglitMapper.processGeoJSON(positionsGeoJSON);
            taglitMapper.polyItinerary = taglitMapper.getItinerary(itinerary);
            taglitMapper.getFlickrPhotos(1);
            var travelLines = taglitMapper.generateLines();

            taglitMapper.travelPolyLine = new L.MultiPolyline(travelLines, {
                color: 'red',
                id:'poly1'
            }).addTo(taglitMapper.map);

            var baseMaps = {
                "Base Map": leafConnector,
            };
            var overlays = {
                "Photos": taglitMapper.cluster,
                "Places": taglitMapper.geoJSONLayer,
                "Travels": taglitMapper.travelPolyLine
            };

            L.control.layers(baseMaps, overlays).addTo(taglitMapper.map);
        });
        


        
        

    }
};