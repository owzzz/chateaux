module.exports = {
	isMobile: function() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			return true;
		} else {
			return false;
		}
	},
	isDesktop: function() {
	}
};