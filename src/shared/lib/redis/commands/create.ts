import { SetOptions }        from 'redis';

import tryCatchDecorator     from '@/shared/lib/decorators/tryCatchDecorator';
import { RedisCacheService } from '@/shared/lib/redis';

/*
 * Inserts a value into the cache with the specified key.
 * */
async function _set( key: string, value: string, options ?: SetOptions )
{
	return await RedisCacheService
		.connect()
		.set( key, value, options );
}

/*
 * Inserts one or more elements at the beginning of the list with the specified key.
 * */
async function _lPush( key: string, list: [ string ] )
{
	return await RedisCacheService
		.connect()
		.lPush( key, list );
}

/*
 * Inserts one or more elements at the end of the list with the specified key.
 * */
async function _rPush( key: string, list: [ string ] )
{
	return await RedisCacheService
		.connect()
		.rPush( key, list );
}

/*
 * Adds one or more elements to the set with the specified key.
 * */
async function _sAdd( key: string, set: [ string ] )
{
	return await RedisCacheService
		.connect()
		.sAdd( key, set );
}

/*
 * Sets the value of a field (key) within the hash with the specified key.
 * */
async function _hSet( key: string, hash: { [key: string]: string | number } )
{
	return await RedisCacheService
		.connect()
		.hSet( key, hash );
}

/*
 * Exports the functions with the try/catch decorator.
 * */
export const
	set   = tryCatchDecorator( _set ),
	lPush = tryCatchDecorator( _lPush ),
	rPush = tryCatchDecorator( _rPush ),
	sAdd  = tryCatchDecorator( _sAdd ),
	hSet  = tryCatchDecorator( _hSet );