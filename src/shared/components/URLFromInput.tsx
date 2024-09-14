'use client';

import {
	ArrowTurnDownLeftIcon,
	LinkIcon
}                          from '@heroicons/react/24/outline';
import { useState }        from 'react';

import createShortUrl      from '@/shared/actions/createShortUrl';
import ErrorsContainer     from '@/shared/components/ErrorsContainer';
import { useErrorContext } from '@/shared/context/errorContext';
import isNotValidURL       from '@/shared/lib/validators/isNotValidURL';

export default function URLFromInput()
{
	async function copyUrlToClipboard()
	{
		await navigator.clipboard.writeText( urlHash );
		errorContext.setValue( [ 'URL copied to clipboard!' ] );
	}

	async function formDataWrapper( formData: FormData )
	{
		setUrlHash
		(
			`${ window.location.origin }/${
				await createShortUrl
				(
					formData.get( 'url' ) as string
				)
			}`
		);
	}

	const errorContext = useErrorContext();

	const
		[ urlHash, setUrlHash ] = useState<string>( '' ),
		[ url, setUrl ]         = useState<string>( '' );

	return (
		<div className={ 'flex flex-col items-center gap-4' }>
			<ErrorsContainer errorList={ errorContext.value }/>

			<form className={ 'flex flex-row gap-4' } action={ formDataWrapper }>
				<div className={ 'flex flex-row justify-evenly items-center gap-2 bg-white rounded-lg border-2 border-red-500 p-2' }>
					<LinkIcon className={ 'size-5' }/>
					<input
						type={ 'text' }
						name={ 'url' }
						className={ 'md:w-96 focus:outline-none' }
						placeholder={ 'https://google.com' }
						autoComplete={ 'off' }
						required
						onChange={ ( e ) => setUrl( e.currentTarget.value ) }
					/>
				</div>

				<button
					type={ 'submit' }
					className={ 'bg-red-500 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-75' }
					disabled={ isNotValidURL( url ) }
				>
					<ArrowTurnDownLeftIcon className={ 'size-5' }/>
				</button>
			</form>

			{
				urlHash &&
				<p
					className={ 'text-center text-lg md:text-xl underline underline-offset-4 cursor-pointer' }
					onClick={ copyUrlToClipboard }
				>
					Click to copy to clipboard: { urlHash }
				</p>
			}
		</div>
	);
}