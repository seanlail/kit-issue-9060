import { building, dev } from '$app/environment';
import { env } from '$env/dynamic/private';

export const config = {
	nodeEnvironment: parseString('NODE_ENV'),
	privateEnvKey: parseString('PRIVATE_ENV_KEY'), // set in .env.local for dev
	prodOnlyKey: parseString('PROD_ONLY_KEY') // something NOT set in .env.local
};

function parseString(key: string): string {
	const value = env?.[key] || process?.env?.[key];
	if (value) {
		return value;
	}

	if (building || dev) {
		console.warn(`Private env var not defined: '${key}'`);
		return '';
	}

	throw new Error(`Private env var required: '${key}'`);
}
