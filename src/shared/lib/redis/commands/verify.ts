import tryCatchDecorator     from '@/shared/lib/decorators/tryCatchDecorator';
import { RedisCacheService } from '@/shared/lib/redis';

/*
 * Verifica si una clave existe.
 * Verifies if a key exists.
 * */
async function _exists( key: string )
{
	return await RedisCacheService
		.connect()
		.exists( key );
}

/*
 * Verifica si un elemento específico está presente en el conjunto.
 * Verifies if a specific element is present in the set.
 * */
async function _sIsMember( key: string, value: string )
{
	return await RedisCacheService
		.connect()
		.sIsMember( key, value );
}

/*
 * Expira una clave en el tiempo especificado.
 * Expires a key in the specified time.
 * */
async function _expires( key: string, ttl: number )
{
	return await RedisCacheService
		.connect()
		.expire( key, ttl );
}

/*
 * Exports the functions with the try/catch decorator.
 * */
export const
	exists    = tryCatchDecorator( _exists ),
	sIsMember = tryCatchDecorator( _sIsMember ),
	expires   = tryCatchDecorator( _expires );