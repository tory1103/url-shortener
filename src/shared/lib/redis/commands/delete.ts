import tryCatchDecorator     from '@/shared/lib/decorators/tryCatchDecorator';
import { RedisCacheService } from '@/shared/lib/redis';

/*
 * Deletes all keys.
 * */
async function _flushAll()
{
	return await RedisCacheService
		.connect()
		.flushAll();
}

/*
 * Deletes a key and its associated value
 * */
async function _del( key: string )
{
	return await RedisCacheService
		.connect()
		.del( key );
}

/*
 * Deletes and returns the first element of the list with the specified key.
 * */
async function _lPop( key: string )
{
	return await RedisCacheService
		.connect()
		.lPop( key );
}

/*
 * Deletes and returns the last element of the list with the specified key.
 * */
async function _rPop( key: string )
{
	return await RedisCacheService
		.connect()
		.rPop( key );
}

/*
 * Deletes one or more elements from the set with the specified key.
 * */
async function _sRem( key: string, value: [ string ] )
{
	return await RedisCacheService
		.connect()
		.sRem( key, value );
}

/*
 * Deletes one or more fields and their associated values from the hash with the specified key.
 * */
async function _hDel( key: string, hash: [ string ] )
{
	return await RedisCacheService
		.connect()
		.hDel( key, hash );
}

/*
 * Exports the functions with the try/catch decorator.
 * */
export const
	flushAll = tryCatchDecorator( _flushAll ),
	del      = tryCatchDecorator( _del ),
	lPop     = tryCatchDecorator( _lPop ),
	rPop     = tryCatchDecorator( _rPop ),
	sRem     = tryCatchDecorator( _sRem ),
	hDel     = tryCatchDecorator( _hDel );