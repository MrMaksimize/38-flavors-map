var positions = {
    jerusalem: {
        name: 'Jerusalem',
        machineName: 'jerusalem',
        polygon: new L.Polygon([
            [31.80656373188476, 35.20515678762774],
            [31.74254321506333, 35.15430889260418],
            [31.738536720784, 35.21488601416843], 
            [31.80218247254465, 35.24346597785095],
            [31.80656373188476, 35.20515678762774]
        ]),
        dateStart: new Date("December 18, 2012 11:13:00"),
        dateEnd: new Date("December 20, 2012 11:13:00"),
    },
    haifa: {
        name: 'Haifa',
        machineName: 'haifa',
        polygon: new L.Polygon([
            [32.7704724139624, 35.05054365559191],
            [32.81851770797227, 35.02096112107873],
            [32.83827756179425, 34.97950218671765], 
            [32.83548656522435, 34.95063739808254],
            [32.75472002694073, 34.94863778080404], 
            [32.7704724139624, 35.05054365559191],
        ]),
        dateStart: new Date("December 20, 2012 11:15:00"),
        dateEnd: new Date("December 25, 2012 11:15:00"),
    }
}

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

    //flickURL: 'http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=' + '5185b66b87a1345f857fc311b059f7a0' + '&photoset_id=72157632386151212&per_page=500&extras=geo,date_taken,path_alias,url_s,url_m,url_o&format=json&jsoncallback=?',
    center: {
        lat: 31.23788291430615,
        lng: 35.09799757967768,
        zoom: 8,
    },
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
    geocode: function(location) {
        var url = 'http://a.tiles.mapbox.com/v3/mrmaksimize.map-qn9b68nj/geocode/' + location +'.jsonp';
        console.log(url);
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
        for ( var p in positions ) {
            if (positions[p].dateStart < dateTaken && positions[p].dateEnd > dateTaken) {
                var photoMeta = positions[p];
                photoMeta.photoPos = this.getRandomPosPolygon(positions[p].polygon);
                return photoMeta;
            }
        }
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
    }
};