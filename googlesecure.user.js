// ==UserScript==
// @name          Google Secure
// @description   Force Google Sites to be HTTPS
// @author        fobos
// @include       http://mail.google.com/*
// @include       http://www.google.com/calendar/*
// @include       http://docs.google.com/*
// @include       http://www.google.com/reader/*
// ==/UserScript==

window.location.href = window.location.href.replace(/^http:/, 'https:');
