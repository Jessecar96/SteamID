var assert = require( 'assert' ),
    vows = require( 'vows' ),
    SteamID = require( '../' );

vows.describe( 'SteamID' ).addBatch(
{
	'Steam2 to CommunityID':
	{
		topic: new SteamID( ).SetSteam2( 'STEAM_0:1:6114628' ).GetCommunityID( ),
		'result should be valid': function( result )
		{
			assert.isString( result );
			assert.equal( result, '76561197972494985' );
		}
	},
	'CommunityID to Steam2':
	{
		topic: new SteamID( ).SetCommunityID( '76561197972494985' ).GetCommunityID( ),
		'result should be valid': function( result )
		{
			assert.isString( result );
			assert.equal( result, 'STEAM_0:1:6114628' );
		}
	},
	'CommunityID to Steam3':
	{
		topic: new SteamID( ).SetCommunityID( '76561197972494985' ).GetSteam3( ),
		'result should be valid': function( result )
		{
			assert.isString( result );
			assert.equal( result, '[U:1:12229257]' );
		}
	},
	'AccountID to Steam2':
	{
		topic: new SteamID( ).SetAccountID( 12229257 ).GetSteam2( ),
		'result should be valid': function( result )
		{
			assert.isString( result );
			assert.equal( result, 'STEAM_0:1:6114628' );
		}
	}
} ).export( module );
