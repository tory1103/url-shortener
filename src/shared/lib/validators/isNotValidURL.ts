import { isURL } from 'validator';

export default function isNotValidURL( url: string )
{
	return !isURL( url )
		|| url.length > 2048
		|| url.length < 1;
}