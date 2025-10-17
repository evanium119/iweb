// Created by iWeb 3.0.1 local-build-20251016

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,128),url:'Welcome_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Welcome_files/stroke_1.png'},{rect:new IWRect(2,-2,128,4),url:'Welcome_files/stroke_2.png'},{rect:new IWRect(130,-2,4,4),url:'Welcome_files/stroke_3.png'},{rect:new IWRect(130,2,4,128),url:'Welcome_files/stroke_4.png'},{rect:new IWRect(130,130,4,4),url:'Welcome_files/stroke_5.png'},{rect:new IWRect(2,130,128,4),url:'Welcome_files/stroke_6.png'},{rect:new IWRect(-2,130,4,4),url:'Welcome_files/stroke_7.png'}],new IWSize(132,132))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');detectBrowser();Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
