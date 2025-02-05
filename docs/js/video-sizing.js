// originally copied from:
// https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php
$(function() {
	// Find all YouTube videos
	var $allVideos = $("iframe[src^='https://player.vimeo.com'], iframe[src^='http://player.vimeo.com'], iframe[src^='//www.youtube.com']"),
		$fluidEl = $("div.post-content").first() // The element that is fluid width
	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {
		$(this)
			.data('aspectRatio', this.height / this.width)
			// and remove the hard coded width/height
			.removeAttr('height')
			.removeAttr('width');
	});
	// When the window is resized
	$(window).resize(function() {
		var newWidth = $fluidEl.width();
		// Resize all videos according to their own aspect ratio
		$allVideos.each(function() {
			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));
		});
		// Kick off one resize to fix all videos on page load
	}).resize();
})