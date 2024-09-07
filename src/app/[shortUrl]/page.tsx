import { redirect }          from 'next/navigation';

import NotFound              from '@/app/not-found';
import { RedisCacheService } from '@/shared/lib/redis';
import { exists }            from '@/shared/lib/redis/commands/verify';

export default async function ShortURLPage( { params }: { params: { shortUrl: string } } )
{
	const urlHashSubstr = params.shortUrl;
	
	if ( !( await exists( urlHashSubstr ) ) )
		return <NotFound/>;

	return redirect( await RedisCacheService.genericWrapper( urlHashSubstr, async () => urlHashSubstr ) );
}