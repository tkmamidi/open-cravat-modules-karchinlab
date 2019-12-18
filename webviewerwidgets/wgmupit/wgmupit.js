$.getScript('/result/widgetfile/wgmupit/3dmol.js', function () {});

widgetGenerators['mupit'] = {
	'variant': {
		'width': 280, 
		'height': 80, 
        'default_hidden': true,
		'function': function (div, row, tabName) {
			var link = getWidgetData(tabName, 'mupit', row, 'link');
			if (link == null) {
				link = 'None';
				addInfoLineText(div, 'Hit', link);
			} else {
				var novar = link.split('=')[0].split(',').length;
				addInfoLineLink(div, 'Hit', 'Yes', link, -1);
			}
		}
	},
	'gene': {
		'width': 280, 
		'height': 80, 
        'default_hidden': true,
		'function': function (div, row, tabName) {
			var link = getWidgetData(tabName, 'mupit', row, 'link');
			if (link == null) {
				link = 'None';
				addInfoLineText(div, 'Hit', link);
			} else {
				var novar = link.split('=')[0].split(',').length;
				addInfoLineLink(div, 'Hit', 'Yes', link, -1);
			}
		}
	}
}
