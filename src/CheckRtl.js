import React from 'react'

export default 

function checkRtl( character ) {
    var RTL = "/[\u0600-\u06FF]/";
    return RTL.indexOf( character ) > -1;

var divs = document.getElementsByTagName( 'div' );

for ( var index = 0; index < divs.length; index++ ) {
    if( checkRtl( divs[index].textContent[0] ) ) {
        divs[index].className = 'rtl';
    } else {
        divs[index].className = 'ltr';
    };
};

}
 var y = 'الكمية'; //nameOFinput AR or EN
function DoRTL( x ) {
    var RTL = ['ا','ء','ب','ت','ث','ج','ح','خ','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ک','ل','م','ن','و','ه','ی'];
    return RTL.indexOf(x) > -1;
    var divs = document.getElementsByTagName( 'div' );

    for ( var index = 0; index < RTL.length; index++ ) {
        if(checkRtl( x === RTL[index])){
            divs[index].className = 'rtl';
        }else {
        divs[index].className = 'ltr';
    };
        }
}

// /
// <input dir="auto" type="number" placeholder={checkRtl(y) ? 'الكمية': 'Quantité'  } style={ checkRtl(y) ? {textAlign:"right",direction: "rtl"} : {textAlign:"initial",direction: "auto"} } />
//                         <input dir="auto" type="text" placeholder={checkRtl(y) ? 'رسل': 'ok'  } style={ checkRtl(y) ? {textAlign:"right",direction: "rtl"} : {textAlign:"initial",direction: "auto"} } />
// / 

