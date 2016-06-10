(function() {
	"use strict";

	document.onDeviceReady = new Promise( function( resolve, reject ) {
		document.addEventListener( "deviceready", resolver, false );

		function resolver() {
			document.removeEventListener( "deviceready", resolver );
			resolve();
		}
	} );
}());
