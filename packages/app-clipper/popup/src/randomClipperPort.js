function randomClipperPort(state, env) {
	if (!state) {
		state = { offset: 0 };
	} else {
		state.offset++;
	}

	state.port = startPort(env) + state.offset;

	return state;
}

function startPort(env) {
	const startPorts = {
		prod: 41184,
		// dev: 27583,
		dev: 41184,
	};

	return env === 'prod' ? startPorts.prod : startPorts.dev;
}

module.exports = { randomClipperPort, startPort };
