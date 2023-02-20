import { building, dev } from '$app/environment';
import { env } from '$env/dynamic/public';

export const config = {
	publicEnvVar: parseString('PUBLIC_ENV_VAR')
};

function parseString(key: `PUBLIC_${string}`): string {
	const value = env?.[key];
	if (value) {
		return value;
	}

	if (building || dev) {
		console.warn(`Public env var not defined: '${key}'`);
		return '';
	}

	throw new Error(`Public env var required: '${key}'`);
}
