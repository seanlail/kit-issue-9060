import { config } from '../config.server';
import type { LayoutServerLoadEvent } from './$types';

export async function load(event: LayoutServerLoadEvent) {
	return {
		nodeEnvironment: config.nodeEnvironment,
		privateEnvKey: config.privateEnvKey,
		prodOnlyKey: config.prodOnlyKey
	};
}
