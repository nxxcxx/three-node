var G = require( './globals.js' );
var scene = require( './scene.js' );
var gui = require( './gui.js' );

function setup() {

	// ---- grid & axis helper
		var gridHelper = new THREE.GridHelper( 600, 50 );
		gridHelper.setColors( 0x00aaff, 0xffffff );
		gridHelper.material.opacity = 0.1;
		gridHelper.material.transparent = true;
		gridHelper.position.y = -300;
		scene.add( gridHelper );

		var axisHelper = new THREE.AxisHelper( 50 );
		scene.add( axisHelper );

		global.toggleHelpers = function() {

			gridHelper.visible = !!G.settings.enableGridHelper;
			axisHelper.visible = !!G.settings.enableAxisHelper;

		};

		toggleHelpers();

	// ---- GUI
		gui.init();


}

module.exports = setup;
