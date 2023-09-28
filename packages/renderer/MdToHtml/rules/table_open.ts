// import shim from '@joplin/lib/shim';

// const isDesktop = (platformName?: string) => {
// 	if (!platformName) {
// 		return false;
// 	}

// 	return ['darwin', 'linux', 'freebsd', 'win32'].includes(platformName);
// };

function pluginAssets() {
	// return isDesktop(shim.platformName()) ? [
	// 	{ name: 'jquery-3.7.1.min.js' },
	// 	{ name: 'jquery.ba-floatingscrollbar.js' },
	// ] : [];
	return [
		{ name: 'jquery.min.js' },
		{ name: 'jquery.ba-floatingscrollbar.js' },
	];
}


function tableOpenPlugin(markdownIt: any) {
	// const precedentRule = markdownIt.renderer.rules['table_open'];

	markdownIt.renderer.rules.table_open = function(tokens: any[], idx: number, options: any, env: any, self: any) {
		if (tokens[idx].map) {
			const line = tokens[idx].map[0];
			const lineEnd = tokens[idx].map[1];
			tokens[idx].attrJoin('class', 'maps-to-line');
			tokens[idx].attrSet('source-line', `${line}`);
			tokens[idx].attrSet('source-line-end', `${lineEnd}`);
		}
		const cur = String(self.renderToken(tokens, idx, options));
		return `<div class="joplin-table-div">\n${cur}`;
	};
}

export default {
	plugin: tableOpenPlugin,
	assets: pluginAssets,
};
