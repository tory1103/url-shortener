import {
	RedisClientType,
	SetOptions,
	createClient
}                 from 'redis';

import { set }    from '@/shared/lib/redis/commands/create';
import { get }    from '@/shared/lib/redis/commands/read';
import { exists } from '@/shared/lib/redis/commands/verify';

function onError()
{
	// ...
}

function onConnect()
{
	// ...
}

function onNotConnected()
{
	// ...
}

function onReady()
{
	// ...
}

function onEnd()
{
	// ...
}

export class RedisCacheService
{
	protected static redisConnection: RedisClientType;

	public static connect(): RedisClientType
	{
		if ( this.redisConnection )
			return this.redisConnection;

		this.redisConnection = createClient
		(
			{
				url: process.env.REDIS_URL
			}
		);

		this.redisConnection.on( 'error', onError );
		this.redisConnection.on( 'connect', onConnect );
		this.redisConnection.on( 'ready', onReady );
		this.redisConnection.on( 'end', onEnd );

		this.redisConnection
			.connect()
			.catch( onNotConnected );

		return this.redisConnection;
	}

	public static async genericWrapper<T>
	(
		key: string,
		onMissFunction: () => Promise<T>,
		options?: SetOptions
	): Promise<T>
	{
		let
			existsInCache = await exists( key ),
			returnValue: T;

		if ( !existsInCache )
		{
			returnValue = await onMissFunction();

			await set
			(
				key,
				JSON.stringify( returnValue ),
				options
			);

			return returnValue;
		}

		returnValue = JSON.parse( await get( key ) as string );
		return returnValue;
	}
}