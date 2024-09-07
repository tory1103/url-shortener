'use client';

import {
	createContext,
	useContext,
	useState
} from 'react';

export const errorContext = createContext<{ value: string[], setValue: any }>
(
	{
		value   : [],
		setValue: () => {}
	}
);

export default function ErrorContextProvider
(
	{ children }
		: { children: any }
)
{
	const [ errorList, setErrorList ] = useState<string[]>( [] );

	return (
		<errorContext.Provider
			value=
				{
					{
						value   : errorList,
						setValue: ( value: string[] ) =>
						{
							setErrorList( value );
							setTimeout( () => setErrorList( [] ), 6000 );
						}
					}
				}
		>
			{ children }
		</errorContext.Provider>
	);
}

export function useErrorContext()
{
	return useContext( errorContext );
}