var assert = require( 'assert' ),
    vows = require( 'vows' ),
    SteamID = require( '../' );

vows.describe( 'SteamID' ).addBatch(
{
	'SteamID to CommunityID':
	{
		topic: new SteamID( ).SetSteam2( 'STEAM_0:1:6114628' ).GetCommunityID( ),
		'result should be valid': function( result )
		{
			assert.isString( result );
			assert.equal( result, '76561197972494985' );
		}
	},
	'CommunityID to SteamID':
	{
		topic: new SteamID( ).SetSteam2( '76561197972494985' ).GetCommunityID( ),
		'result should be valid': function( result )
		{
			assert.isString( result );
			assert.equal( result, 'STEAM_0:1:6114628' );
		}
	}
} ).export( module );
