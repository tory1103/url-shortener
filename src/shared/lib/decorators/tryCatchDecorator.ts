export default function tryCatchDecorator<T extends ( ...args: any[] ) => any>( functionToDecorate: T ): ( ...args: Parameters<T> ) => Promise<ReturnType<T> | false>
{
	return async function ( ...args: Parameters<T> ): Promise<ReturnType<T> | false>
	{
		try
		{
			return await functionToDecorate( ...args );
		}
		catch ( error )
		{
			console.log( `[TRY/CATCH] ${ JSON.stringify( error ) }` );
			return false;
		}
	};
}