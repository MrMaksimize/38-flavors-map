var playControl = L.Control.extend({
    options: {
        position: 'topLeft',
    },

    initialize: function (map, geoJSON, options) {
        this._map = map;
        this._geoJSON = geoJSON;
        this._position = this._getCurrentPosition();
        this._positionCount = null;
        L.Util.setOptions(this, options);
    },

    onAdd: function (map) {
        console.log(map);
        this._container = L.DomUtil.create('div', 'leaflet-play-control');
        console.log(map.getPanes());
        /*L.DomEvent.disableClickPropagation(this._container);

        map
            .on('layeradd', this._onLayerAdd, this)
            .on('layerremove', this._onLayerRemove, this);
        */
        this._update();

        return this._container;
    },

    onRemove: function (map) {
        /*map
            .off('layeradd', this._onLayerAdd)
            .off('layerremove', this._onLayerRemove);*/

    },

    _update: function() {
        if (!this._map) {
            return;
        }
 
        this._container.innerHTML = '';
        this._makeControls();
    },

    _getCurrentPosition: function() {
        var position = {
            center: this._map.getCenter(),
            bounds: this._map.getBounds(),
            zoom: this._map.getZoom()
        };
        return position;
    },

    _getGeoJSONPosition: function(positionCount) {
        if (positionCount == null) {
            return null;
        }
        var position = this._geoJSON.features[positionCount];
        console.log(position);
        //Reverse Coordinates
        position.geometry.coordinates = this._reverseCoordinateSet(position.geometry.coordinates);
        return position;
    },
    
    _reverseCoordinateSet: function(coordSet) {
        // @todo switch coord set type, only polygons now.
        var newCoordSet = [];
        for (var g = 0; g < coordSet.length; g++) {
            var coordinatePoint = coordSet[g];
            var newCoordinatePoint = [coordinatePoint[1], coordinatePoint[0]];
            newCoordSet.push(newCoordinatePoint);
        }
        return newCoordSet;
    },

    _goToPosition: function(position) {
        // @todo account for non - poly
        // @todo - move to overall map view on pos null
        console.log(position);
        if (position == null) {
            this._map.fitWorld();
        }
        var polygon = new L.Polygon(position.geometry.coordinates);
        var bounds = polygon.getBounds();
        var center = bounds.getCenter();
        var offset = this._map._getNewTopLeftPoint(center).subtract(this._map._getTopLeftPoint());
        this._map.panBy(offset);
        this._map.fitBounds(bounds);
    },

    _onForwardClick: function() {
        var nextPosition;
        if (this._positionCount == null) {
            nextPosition = 0;
        }
        else {
            nextPosition = this._positionCount + 1;
        }
        console.log(nextPosition);
        var newPosition = this._getGeoJSONPosition(nextPosition);
        this._goToPosition(newPosition);
        this._positionCount = nextPosition;

    },

    _onBackwardClick: function() {
        var prevPosition;
        if (this._positionCount === null) {
            return false;
        }
        else if (this._positionCount === 0) {
            prevPosition = null;
        }
        else {
            prevPosition = this._positionCount - 1;
        }
        console.log(prevPosition);
        var newPosition = this._getGeoJSONPosition(prevPosition);
        this._goToPosition(newPosition);
        this._positionCount = prevPosition;

    },

    _makeControls: function() {
        var backwardContainer = L.DomUtil.create('a', 'backward', this._container);
        var forwardContainer = L.DomUtil.create('a', 'forward', this._container);
        L.DomUtil.create('i', 'icon-backward', backwardContainer);
        L.DomUtil.create('i', 'icon-forward', forwardContainer);
        backwardContainer.setAttribute('href', '#');
        forwardContainer.setAttribute('href', '#');
        L.DomEvent
            .addListener(backwardContainer, 'click', L.DomEvent.stop)
            .addListener(backwardContainer, 'click', this._onBackwardClick, this)
            .addListener(forwardContainer, 'click', L.DomEvent.stop)
            .addListener(forwardContainer, 'click', this._onForwardClick, this);
        L.DomEvent.disableClickPropagation(backwardContainer);
        L.DomEvent.disableClickPropagation(forwardContainer);
    }

    
});