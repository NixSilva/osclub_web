﻿/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';

	//add syntaxhighlight
	/*
	config.extraPlugins = 'syntaxhighlight';
	config.toolbar_Full.push(['Code']);
	*/
	config.extraPlugins += (config.extraPlugins ? ',syntaxhighlight' : 'syntaxhighlight' );
	config.toolbar_Full.push(['Code']);
};