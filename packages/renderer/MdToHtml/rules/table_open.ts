export default {
	plugin: (markdownIt: any) => {
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
			// if (precedentRule) {
			// 	return precedentRule(tokens, idx, options, env, self);
			// } else {
			// 	return self.renderToken(tokens, idx, options);
			// }
		};
	},
};
