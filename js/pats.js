/*********************************************************************
======================================================================
                        Personal Access Tokens
======================================================================
**********************************************************************/

// IP Info (obtain token from https://ipinfo.io/account)
var ipinfoAccessToken = '';

// Open Weather Map (obtain API Key from https://home.openweathermap.org/api_keys)
var owmAppId = '';

// Google Maps API Key (obtain API Key from https://console.cloud.google.com/apis/dashboard)
var googleMapsApiKey = '';

/*********************************************************************
======================================================================
                   Internal Process - Do Not Modify
======================================================================
**********************************************************************/

localStorage.setItem("ipinfoAccessTokenLS", ipinfoAccessToken);
localStorage.setItem("owmAppIdLS", owmAppId);
localStorage.setItem("googleMapsApiKeyLS", googleMapsApiKey);
