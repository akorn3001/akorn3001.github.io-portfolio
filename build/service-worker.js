"use strict";var precacheConfig=[["/index.html","a57e91b2014fbb743efa7af196233178"],["/static/css/main.34c65605.css","a458a1c098bd23dabea4872360400d31"],["/static/js/main.c00dbb0d.js","89bb68aceab265a9802b0097b12dd161"],["/static/media/4096.1040ccd1.png","1040ccd10488ff27f8c8ba1648f64f72"],["/static/media/CWS.c42acde1.png","c42acde11f57d0866be5d7839e21e6b6"],["/static/media/DOMinos_picture.d34216be.png","d34216be8435fd2d82ac50130c115bc1"],["/static/media/alex_pic.b13f32dd.png","b13f32dd12d437d5cfa07d4d7109dc38"],["/static/media/atom-icon.b579a62e.svg","b579a62eada448fa1204a7df952c485b"],["/static/media/aws-icon.0589ea93.svg","0589ea93433b4850338f4ba8fd10ed2c"],["/static/media/css3-icon.2ca88453.svg","2ca884530d6e08f8540700e76c3a63cb"],["/static/media/django-icon.065785de.svg","065785dea61b9a5be14f23998236d3c5"],["/static/media/full-bloom.c614347a.png","c614347ab1c7c0ae96b267c57f666aef"],["/static/media/git-icon.66e06c06.svg","66e06c06b4b40acff6a6595e710b5006"],["/static/media/github-icon.fff79394.svg","fff793948eaad4a21b6fb5712888d62d"],["/static/media/heroku-icon.239bab29.svg","239bab29d025a58b280c0986471ad6bb"],["/static/media/html5-icon.eb0bfe64.svg","eb0bfe64ddcaa0b4c3be19b19541b584"],["/static/media/javascript-icon.de79c8f1.svg","de79c8f14c2b0d692ae215d7e6eccd54"],["/static/media/jquery-icon.8ec9bacf.svg","8ec9bacf8bc78b8ad161b5e9a2a16e87"],["/static/media/npm-icon.e83e60b3.svg","e83e60b310396562d703c9ccff616b91"],["/static/media/postgresql-icon.9474528e.svg","9474528ec861c5d35b9efd498ddef326"],["/static/media/python-icon.72bbce5b.svg","72bbce5b3b0d6ad88c2491a4cb82a6de"],["/static/media/rails-icon.afe59a88.svg","afe59a882d0f6a3b7996cc2fa555d04f"],["/static/media/react-icon.fadd9c95.svg","fadd9c9566ccc46c6b0e73caca5860de"],["/static/media/redux-icon.b4e23a50.png","b4e23a502e44692d9f3c8b427ac23e01"],["/static/media/resume.75537ca3.pdf","75537ca3b047f4fce0bb74961a0947ce"],["/static/media/ruby-icon.94f0a51e.svg","94f0a51e261e69eca56da09234414b06"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});