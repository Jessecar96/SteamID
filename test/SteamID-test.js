var assert = require( 'assert' ),
    vows = require( 'vows' ),
    SteamID = require( '../' );

vows.describe( 'SteamID - set functions' ).addBatch(
{
	'Steam2 to CommunityID':
	{
		topic: new SteamID( ).SetSteam2( 'STEAM_0:1:6114628' ).GetCommunityID( ),
		'result should be valid': function( result )
		{
			assert.isString( result );
			assert.strictEqual( result, '76561197972494985' );
		}
	},
	'CommunityID to Steam2':
	{
		topic: new SteamID( ).SetCommunityID( '76561197972494985' ).GetSteam2( ),
		'result should be valid': function( result )
		{
			assert.isString( result );
			assert.strictEqual( result, 'STEAM_0:1:6114628' );
		}
	},
	'CommunityID to Steam3':
	{
		topic: new SteamID( ).SetCommunityID( '76561197972494985' ).GetSteam3( ),
		'result should be valid': function( result )
		{
			assert.isString( result );
			assert.strictEqual( result, '[U:1:12229257]' );
		}
	},
	'AccountID (numeric) to Steam2':
	{
		topic: new SteamID( ).SetAccountID( 12229257 ).GetSteam2( ),
		'result should be valid': function( result )
		{
			assert.isString( result );
			assert.strictEqual( result, 'STEAM_0:1:6114628' );
		}
	},
	'AccountID (string) to Steam2':
	{
		topic: new SteamID( ).SetAccountID( '12229257' ).GetSteam2( ),
		'result should be valid': function( result )
		{
			assert.isString( result );
			assert.strictEqual( result, 'STEAM_0:1:6114628' );
		}
	},
	'CommunityID to AccountID':
	{
		topic: new SteamID( ).SetCommunityID( '76561197972494985' ).GetAccountID( ),
		'result should be valid': function( result )
		{
			assert.isNumber( result );
			assert.strictEqual( result, 12229257 );
		}
	},
	'Set CommunityID as number':
	{
		topic: new SteamID( ).SetCommunityID( 76561197972494985 ),
		'result should be false': function( result )
		{
			assert.isFalse( result );
		}
	},
	'Set invalid Steam2':
	{
		topic: new SteamID( ).SetSteam2( 'STEAM_ID_PENDING' ),
		'result should be false': function( result )
		{
			assert.isFalse( result );
		}
	},
} ).export( module );
