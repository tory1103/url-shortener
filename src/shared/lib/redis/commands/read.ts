import tryCatchDecorator     from '@/shared/lib/decorators/tryCatchDecorator';
import { RedisCacheService } from '@/shared/lib/redis';

/*
 * Gets all keys that match the specified pattern.
 * */
async function _keys( pattern: string )
{
	return await RedisCacheService
		.connect()
		.keys( pattern );
}

/*
 * Gets the value associated with a key
 * */
async function _get( key: string )
{
	return await RedisCacheService
		.connect()
		.get( key );
}

/*
 * Gets a portion of the list with the specified key,
 * including the elements from the “start” index to the “stop” index.
 * */
async function _lRange( key: string, start: number, stop: number )
{
	return await RedisCacheService
		.connect()
		.lRange( key, start, stop );
}

/*
 * Gets the length (number of elements) of the list with the specified key.
 * */
async function _lLen( key: string )
{
	return await RedisCacheService
		.connect()
		.lLen( key );
}

/*
 * Gets the element at the specified index of the list with the specified key.
 * */
async function _lIndex( key: string, index: number )
{
	return await RedisCacheService
		.connect()
		.lIndex( key, index );
}

/*
 * Gets all elements of the set with the specified key.
 * */
async function _sMembers( key: string )
{
	return await RedisCacheService
		.connect()
		.sMembers( key );
}

/*
 * Gets the number of elements in the set with the specified key.
 * */
async function _sCard( key: string )
{
	return await RedisCacheService
		.connect()
		.sCard( key );
}

/*
 * Gets the value of a specific field within the hash with the specified key.
 * */
async function _hGet( key: string, hash: string )
{
	return await RedisCacheService
		.connect()
		.hGet( key, hash );
}

/*
 * Gets all fields and their values from the hash with the specified key.
 * */
async function _hGetAll( key: string )
{
	return await RedisCacheService
		.connect()
		.hGetAll( key );
}

/*
 * Gets all keys (fields) within the hash with the specified key.
 * */
async function _hKeys( key: string )
{
	return await RedisCacheService
		.connect()
		.hKeys( key );
}

/*
 * Exports the functions with the try/catch decorator.
 * */
export const
	keys     = tryCatchDecorator( _keys ),
	get      = tryCatchDecorator( _get ),
	lRange   = tryCatchDecorator( _lRange ),
	lLen     = tryCatchDecorator( _lLen ),
	lIndex   = tryCatchDecorator( _lIndex ),
	sMembers = tryCatchDecorator( _sMembers ),
	sCard    = tryCatchDecorator( _sCard ),
	hGet     = tryCatchDecorator( _hGet ),
	hGetAll  = tryCatchDecorator( _hGetAll ),
	hKeys    = tryCatchDecorator( _hKeys );