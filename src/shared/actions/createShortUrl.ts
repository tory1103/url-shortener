'use server';

import { hash }              from 'bcrypt';
import { isURL }             from 'validator';

import { RedisCacheService } from '@/shared/lib/redis';
import { exists }            from '@/shared/lib/redis/commands/verify';

export default async function createShortUrl( url: string )
{
	if ( !isURL( url ) ) return ':)'; // Someone tried to break the system by sending a non-URL string.

	let
		urlHash       = url,
		urlHashSubstr = '';

	// If the hash already exists or the hash is the same as the url or the hash contains a slash, generate a new hash.
	while ( await exists( urlHashSubstr ) || urlHash === url || urlHashSubstr.includes( '/' ) )
	{
		urlHash = ( await hash( urlHash, 10 ) ).toLowerCase();
		urlHashSubstr = urlHash.substring( 29, 35 );
	}

	await RedisCacheService.genericWrapper
	(
		urlHashSubstr,
		async () => url,
		{
			EX: 60 * 60 * 24 * 7 // 1 week
		}
	);

	return urlHashSubstr;
}