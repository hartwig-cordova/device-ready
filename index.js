(function() {
	"use strict";

	document.onDeviceReady = new Promise( function( resolve, reject ) {
		document.addEventListener( "deviceready", resolve, false );

		function resolver() {
			document.removeEventListener( "deviceready", resolver );
			resolve();
		}
	} );
}());
