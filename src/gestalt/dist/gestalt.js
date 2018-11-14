(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'classnames'], factory) :
	(factory((global.gestalt = {}),global.React,global.PropTypes,global.classnames));
}(this, (function (exports,React,PropTypes,classnames) { 'use strict';

PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
classnames = classnames && classnames.hasOwnProperty('default') ? classnames['default'] : classnames;

var styles = { "box": "_0 _25 _2s", "xsDisplayNone": "_1", "xsDisplayFlex": "_2", "xsDisplayBlock": "_3", "xsDisplayInlineBlock": "_4", "smDisplayNone": "_5", "smDisplayFlex": "_6", "smDisplayBlock": "_7", "smDisplayInlineBlock": "_8", "mdDisplayNone": "_9", "mdDisplayFlex": "_a", "mdDisplayBlock": "_b", "mdDisplayInlineBlock": "_c", "lgDisplayNone": "_d", "lgDisplayFlex": "_e", "lgDisplayBlock": "_f", "lgDisplayInlineBlock": "_g", "xsDirectionRow": "_h", "xsDirectionColumn": "_i", "smDirectionRow": "_j", "smDirectionColumn": "_k", "mdDirectionRow": "_l", "mdDirectionColumn": "_m", "lgDirectionRow": "_n", "lgDirectionColumn": "_o", "xsCol0": "_p", "xsCol1": "_q _3p", "xsCol2": "_r _3q", "xsCol3": "_s _3r", "xsCol4": "_t _3s", "xsCol5": "_u _3t", "xsCol6": "_v _3u", "xsCol7": "_w _3v", "xsCol8": "_x _3w", "xsCol9": "_y _3x", "xsCol10": "_z _3y", "xsCol11": "_10 _3z", "xsCol12": "_11 _40", "smCol0": "_12", "smCol1": "_13 _41", "smCol2": "_14 _42", "smCol3": "_15 _43", "smCol4": "_16 _44", "smCol5": "_17 _45", "smCol6": "_18 _46", "smCol7": "_19 _47", "smCol8": "_1a _48", "smCol9": "_1b _49", "smCol10": "_1c _4a", "smCol11": "_1d _4b", "smCol12": "_1e _4c", "mdCol0": "_1f", "mdCol1": "_1g _4d", "mdCol2": "_1h _4e", "mdCol3": "_1i _4f", "mdCol4": "_1j _4g", "mdCol5": "_1k _4h", "mdCol6": "_1l _4i", "mdCol7": "_1m _4j", "mdCol8": "_1n _4k", "mdCol9": "_1o _4l", "mdCol10": "_1p _4m", "mdCol11": "_1q _4n", "mdCol12": "_1r _4o", "lgCol0": "_1s", "lgCol1": "_1t _4p", "lgCol2": "_1u _4q", "lgCol3": "_1v _4r", "lgCol4": "_1w _4s", "lgCol5": "_1x _4t", "lgCol6": "_1y _4u", "lgCol7": "_1z _4v", "lgCol8": "_20 _4w", "lgCol9": "_21 _4x", "lgCol10": "_22 _4y", "lgCol11": "_23 _4z", "lgCol12": "_24 _50" };

var borders = { "border": "_51", "borderTop": "_52", "borderRight": "_53", "borderBottom": "_54", "borderLeft": "_55", "square": "_56", "circle": "_57", "pill": "_58", "rounded": "_59", "roundedTop": "_5a", "roundedRight": "_5b", "roundedBottom": "_5c", "roundedLeft": "_5d", "noBorder": "_5e" };

var colors = { "red": "_5f", "redBg": "_5g", "white": "_5h", "whiteBg": "_5i", "lightGray": "_5j", "lightGrayBg": "_5k", "gray": "_5l", "grayBg": "_5m", "darkGray": "_5n", "darkGrayBg": "_5o", "green": "_5p", "greenBg": "_5q", "pine": "_5r", "pineBg": "_5s", "olive": "_5t", "oliveBg": "_5u", "blue": "_5v", "blueBg": "_5w", "navy": "_5x", "navyBg": "_5y", "midnight": "_5z", "midnightBg": "_60", "purple": "_61", "purpleBg": "_62", "orchid": "_63", "orchidBg": "_64", "eggplant": "_65", "eggplantBg": "_66", "maroon": "_67", "maroonBg": "_68", "watermelon": "_69", "watermelonBg": "_6a", "orange": "_6b", "orangeBg": "_6c", "transparentBg": "_6d", "lightWashBg": "_6e", "darkWashBg": "_6f" };

var layout = { "block": "_27", "inline": "_28", "inlineBlock": "_29", "table": "_2a", "overflowHidden": "_2b", "overflowScroll": "_2c", "overflowScrollX": "_2d", "overflowScrollY": "_2e", "overflowAuto": "_2f", "fit": "_2g", "relative": "_2h", "fixed": "_2i", "absolute": "_2j", "sticky": "_2k", "top0": "_2l", "right0": "_2m", "bottom0": "_2n", "left0": "_2o", "small": "_2p", "medium": "_2q", "large": "_2r", "borderBox": "_2s", "-webkit-box-flex": "_2t", "-webkit-flex": "_2t", "-ms-flex": "_2t", "flex": "_2t", "smFlex": "_2u", "mdFlex": "_2v", "lgFlex": "_2w", "flexColumn": "_2x", "flexWrap": "_2y", "itemsStart": "_2z", "itemsEnd": "_30", "itemsCenter": "_31", "itemsBaseline": "_32", "itemsStretch": "_33", "selfStart": "_34", "selfEnd": "_35", "selfCenter": "_36", "selfBaseline": "_37", "selfStretch": "_38", "justifyStart": "_39", "justifyEnd": "_3a", "justifyCenter": "_3b", "justifyBetween": "_3c", "justifyAround": "_3d", "contentStart": "_3e", "contentEnd": "_3f", "contentCenter": "_3g", "contentBetween": "_3h", "contentAround": "_3i", "contentStretch": "_3j", "flexGrow": "_3k", "flexNone": "_3l", "orderFirst": "_3m", "orderLast": "_3n" };

var whitespace = { "marginStart1": "_6g", "marginEnd1": "_6h", "marginStartN1": "_6i", "marginEndN1": "_6j", "marginTop1": "_6k", "marginRight1": "_6l", "marginBottom1": "_6m", "marginLeft1": "_6n", "marginTopN1": "_6o", "marginRightN1": "_6p", "marginBottomN1": "_6q", "marginLeftN1": "_6r", "paddingY1": "_6s", "paddingX1": "_6t", "marginStart2": "_6u", "marginEnd2": "_6v", "marginStartN2": "_6w", "marginEndN2": "_6x", "marginTop2": "_6y", "marginRight2": "_6z", "marginBottom2": "_70", "marginLeft2": "_71", "marginTopN2": "_72", "marginRightN2": "_73", "marginBottomN2": "_74", "marginLeftN2": "_75", "paddingY2": "_76", "paddingX2": "_77", "marginStart3": "_78", "marginEnd3": "_79", "marginStartN3": "_7a", "marginEndN3": "_7b", "marginTop3": "_7c", "marginRight3": "_7d", "marginBottom3": "_7e", "marginLeft3": "_7f", "marginTopN3": "_7g", "marginRightN3": "_7h", "marginBottomN3": "_7i", "marginLeftN3": "_7j", "paddingY3": "_7k", "paddingX3": "_7l", "marginStart4": "_7m", "marginEnd4": "_7n", "marginStartN4": "_7o", "marginEndN4": "_7p", "marginTop4": "_7q", "marginRight4": "_7r", "marginBottom4": "_7s", "marginLeft4": "_7t", "marginTopN4": "_7u", "marginRightN4": "_7v", "marginBottomN4": "_7w", "marginLeftN4": "_7x", "paddingY4": "_7y", "paddingX4": "_7z", "marginStart5": "_80", "marginEnd5": "_81", "marginStartN5": "_82", "marginEndN5": "_83", "marginTop5": "_84", "marginRight5": "_85", "marginBottom5": "_86", "marginLeft5": "_87", "marginTopN5": "_88", "marginRightN5": "_89", "marginBottomN5": "_8a", "marginLeftN5": "_8b", "paddingY5": "_8c", "paddingX5": "_8d", "marginStart6": "_8e", "marginEnd6": "_8f", "marginStartN6": "_8g", "marginEndN6": "_8h", "marginTop6": "_8i", "marginRight6": "_8j", "marginBottom6": "_8k", "marginLeft6": "_8l", "marginTopN6": "_8m", "marginRightN6": "_8n", "marginBottomN6": "_8o", "marginLeftN6": "_8p", "paddingY6": "_8q", "paddingX6": "_8r", "marginStart7": "_8s", "marginEnd7": "_8t", "marginStartN7": "_8u", "marginEndN7": "_8v", "marginTop7": "_8w", "marginRight7": "_8x", "marginBottom7": "_8y", "marginLeft7": "_8z", "marginTopN7": "_90", "marginRightN7": "_91", "marginBottomN7": "_92", "marginLeftN7": "_93", "paddingY7": "_94", "paddingX7": "_95", "marginStart8": "_96", "marginEnd8": "_97", "marginStartN8": "_98", "marginEndN8": "_99", "marginTop8": "_9a", "marginRight8": "_9b", "marginBottom8": "_9c", "marginLeft8": "_9d", "marginTopN8": "_9e", "marginRightN8": "_9f", "marginBottomN8": "_9g", "marginLeftN8": "_9h", "paddingY8": "_9i", "paddingX8": "_9j", "marginStart9": "_9k", "marginEnd9": "_9l", "marginStartN9": "_9m", "marginEndN9": "_9n", "marginTop9": "_9o", "marginRight9": "_9p", "marginBottom9": "_9q", "marginLeft9": "_9r", "marginTopN9": "_9s", "marginRightN9": "_9t", "marginBottomN9": "_9u", "marginLeftN9": "_9v", "paddingY9": "_9w", "paddingX9": "_9x", "marginStart10": "_9y", "marginEnd10": "_9z", "marginStartN10": "_a0", "marginEndN10": "_a1", "marginTop10": "_a2", "marginRight10": "_a3", "marginBottom10": "_a4", "marginLeft10": "_a5", "marginTopN10": "_a6", "marginRightN10": "_a7", "marginBottomN10": "_a8", "marginLeftN10": "_a9", "paddingY10": "_aa", "paddingX10": "_ab", "marginStart11": "_ac", "marginEnd11": "_ad", "marginStartN11": "_ae", "marginEndN11": "_af", "marginTop11": "_ag", "marginRight11": "_ah", "marginBottom11": "_ai", "marginLeft11": "_aj", "marginTopN11": "_ak", "marginRightN11": "_al", "marginBottomN11": "_am", "marginLeftN11": "_an", "paddingY11": "_ao", "paddingX11": "_ap", "marginStart12": "_aq", "marginEnd12": "_ar", "marginStartN12": "_as", "marginEndN12": "_at", "marginTop12": "_au", "marginRight12": "_av", "marginBottom12": "_aw", "marginLeft12": "_ax", "marginTopN12": "_ay", "marginRightN12": "_az", "marginBottomN12": "_b0", "marginLeftN12": "_b1", "paddingY12": "_b2", "paddingX12": "_b3", "smMarginStart1": "_b4", "smMarginEnd1": "_b5", "smMarginStartN1": "_b6", "smMarginEndN1": "_b7", "smMarginTop1": "_b8", "smMarginRight1": "_b9", "smMarginBottom1": "_ba", "smMarginLeft1": "_bb", "smMarginTopN1": "_bc", "smMarginRightN1": "_bd", "smMarginBottomN1": "_be", "smMarginLeftN1": "_bf", "smPaddingY1": "_bg", "smPaddingX1": "_bh", "smMarginStart2": "_bi", "smMarginEnd2": "_bj", "smMarginStartN2": "_bk", "smMarginEndN2": "_bl", "smMarginTop2": "_bm", "smMarginRight2": "_bn", "smMarginBottom2": "_bo", "smMarginLeft2": "_bp", "smMarginTopN2": "_bq", "smMarginRightN2": "_br", "smMarginBottomN2": "_bs", "smMarginLeftN2": "_bt", "smPaddingY2": "_bu", "smPaddingX2": "_bv", "smMarginStart3": "_bw", "smMarginEnd3": "_bx", "smMarginStartN3": "_by", "smMarginEndN3": "_bz", "smMarginTop3": "_c0", "smMarginRight3": "_c1", "smMarginBottom3": "_c2", "smMarginLeft3": "_c3", "smMarginTopN3": "_c4", "smMarginRightN3": "_c5", "smMarginBottomN3": "_c6", "smMarginLeftN3": "_c7", "smPaddingY3": "_c8", "smPaddingX3": "_c9", "smMarginStart4": "_ca", "smMarginEnd4": "_cb", "smMarginStartN4": "_cc", "smMarginEndN4": "_cd", "smMarginTop4": "_ce", "smMarginRight4": "_cf", "smMarginBottom4": "_cg", "smMarginLeft4": "_ch", "smMarginTopN4": "_ci", "smMarginRightN4": "_cj", "smMarginBottomN4": "_ck", "smMarginLeftN4": "_cl", "smPaddingY4": "_cm", "smPaddingX4": "_cn", "smMarginStart5": "_co", "smMarginEnd5": "_cp", "smMarginStartN5": "_cq", "smMarginEndN5": "_cr", "smMarginTop5": "_cs", "smMarginRight5": "_ct", "smMarginBottom5": "_cu", "smMarginLeft5": "_cv", "smMarginTopN5": "_cw", "smMarginRightN5": "_cx", "smMarginBottomN5": "_cy", "smMarginLeftN5": "_cz", "smPaddingY5": "_d0", "smPaddingX5": "_d1", "smMarginStart6": "_d2", "smMarginEnd6": "_d3", "smMarginStartN6": "_d4", "smMarginEndN6": "_d5", "smMarginTop6": "_d6", "smMarginRight6": "_d7", "smMarginBottom6": "_d8", "smMarginLeft6": "_d9", "smMarginTopN6": "_da", "smMarginRightN6": "_db", "smMarginBottomN6": "_dc", "smMarginLeftN6": "_dd", "smPaddingY6": "_de", "smPaddingX6": "_df", "smMarginStart7": "_dg", "smMarginEnd7": "_dh", "smMarginStartN7": "_di", "smMarginEndN7": "_dj", "smMarginTop7": "_dk", "smMarginRight7": "_dl", "smMarginBottom7": "_dm", "smMarginLeft7": "_dn", "smMarginTopN7": "_do", "smMarginRightN7": "_dp", "smMarginBottomN7": "_dq", "smMarginLeftN7": "_dr", "smPaddingY7": "_ds", "smPaddingX7": "_dt", "smMarginStart8": "_du", "smMarginEnd8": "_dv", "smMarginStartN8": "_dw", "smMarginEndN8": "_dx", "smMarginTop8": "_dy", "smMarginRight8": "_dz", "smMarginBottom8": "_e0", "smMarginLeft8": "_e1", "smMarginTopN8": "_e2", "smMarginRightN8": "_e3", "smMarginBottomN8": "_e4", "smMarginLeftN8": "_e5", "smPaddingY8": "_e6", "smPaddingX8": "_e7", "smMarginStart9": "_e8", "smMarginEnd9": "_e9", "smMarginStartN9": "_ea", "smMarginEndN9": "_eb", "smMarginTop9": "_ec", "smMarginRight9": "_ed", "smMarginBottom9": "_ee", "smMarginLeft9": "_ef", "smMarginTopN9": "_eg", "smMarginRightN9": "_eh", "smMarginBottomN9": "_ei", "smMarginLeftN9": "_ej", "smPaddingY9": "_ek", "smPaddingX9": "_el", "smMarginStart10": "_em", "smMarginEnd10": "_en", "smMarginStartN10": "_eo", "smMarginEndN10": "_ep", "smMarginTop10": "_eq", "smMarginRight10": "_er", "smMarginBottom10": "_es", "smMarginLeft10": "_et", "smMarginTopN10": "_eu", "smMarginRightN10": "_ev", "smMarginBottomN10": "_ew", "smMarginLeftN10": "_ex", "smPaddingY10": "_ey", "smPaddingX10": "_ez", "smMarginStart11": "_f0", "smMarginEnd11": "_f1", "smMarginStartN11": "_f2", "smMarginEndN11": "_f3", "smMarginTop11": "_f4", "smMarginRight11": "_f5", "smMarginBottom11": "_f6", "smMarginLeft11": "_f7", "smMarginTopN11": "_f8", "smMarginRightN11": "_f9", "smMarginBottomN11": "_fa", "smMarginLeftN11": "_fb", "smPaddingY11": "_fc", "smPaddingX11": "_fd", "smMarginStart12": "_fe", "smMarginEnd12": "_ff", "smMarginStartN12": "_fg", "smMarginEndN12": "_fh", "smMarginTop12": "_fi", "smMarginRight12": "_fj", "smMarginBottom12": "_fk", "smMarginLeft12": "_fl", "smMarginTopN12": "_fm", "smMarginRightN12": "_fn", "smMarginBottomN12": "_fo", "smMarginLeftN12": "_fp", "smPaddingY12": "_fq", "smPaddingX12": "_fr", "mdMarginStart1": "_fs", "mdMarginEnd1": "_ft", "mdMarginStartN1": "_fu", "mdMarginEndN1": "_fv", "mdMarginTop1": "_fw", "mdMarginRight1": "_fx", "mdMarginBottom1": "_fy", "mdMarginLeft1": "_fz", "mdMarginTopN1": "_g0", "mdMarginRightN1": "_g1", "mdMarginBottomN1": "_g2", "mdMarginLeftN1": "_g3", "mdPaddingY1": "_g4", "mdPaddingX1": "_g5", "mdMarginStart2": "_g6", "mdMarginEnd2": "_g7", "mdMarginStartN2": "_g8", "mdMarginEndN2": "_g9", "mdMarginTop2": "_ga", "mdMarginRight2": "_gb", "mdMarginBottom2": "_gc", "mdMarginLeft2": "_gd", "mdMarginTopN2": "_ge", "mdMarginRightN2": "_gf", "mdMarginBottomN2": "_gg", "mdMarginLeftN2": "_gh", "mdPaddingY2": "_gi", "mdPaddingX2": "_gj", "mdMarginStart3": "_gk", "mdMarginEnd3": "_gl", "mdMarginStartN3": "_gm", "mdMarginEndN3": "_gn", "mdMarginTop3": "_go", "mdMarginRight3": "_gp", "mdMarginBottom3": "_gq", "mdMarginLeft3": "_gr", "mdMarginTopN3": "_gs", "mdMarginRightN3": "_gt", "mdMarginBottomN3": "_gu", "mdMarginLeftN3": "_gv", "mdPaddingY3": "_gw", "mdPaddingX3": "_gx", "mdMarginStart4": "_gy", "mdMarginEnd4": "_gz", "mdMarginStartN4": "_h0", "mdMarginEndN4": "_h1", "mdMarginTop4": "_h2", "mdMarginRight4": "_h3", "mdMarginBottom4": "_h4", "mdMarginLeft4": "_h5", "mdMarginTopN4": "_h6", "mdMarginRightN4": "_h7", "mdMarginBottomN4": "_h8", "mdMarginLeftN4": "_h9", "mdPaddingY4": "_ha", "mdPaddingX4": "_hb", "mdMarginStart5": "_hc", "mdMarginEnd5": "_hd", "mdMarginStartN5": "_he", "mdMarginEndN5": "_hf", "mdMarginTop5": "_hg", "mdMarginRight5": "_hh", "mdMarginBottom5": "_hi", "mdMarginLeft5": "_hj", "mdMarginTopN5": "_hk", "mdMarginRightN5": "_hl", "mdMarginBottomN5": "_hm", "mdMarginLeftN5": "_hn", "mdPaddingY5": "_ho", "mdPaddingX5": "_hp", "mdMarginStart6": "_hq", "mdMarginEnd6": "_hr", "mdMarginStartN6": "_hs", "mdMarginEndN6": "_ht", "mdMarginTop6": "_hu", "mdMarginRight6": "_hv", "mdMarginBottom6": "_hw", "mdMarginLeft6": "_hx", "mdMarginTopN6": "_hy", "mdMarginRightN6": "_hz", "mdMarginBottomN6": "_i0", "mdMarginLeftN6": "_i1", "mdPaddingY6": "_i2", "mdPaddingX6": "_i3", "mdMarginStart7": "_i4", "mdMarginEnd7": "_i5", "mdMarginStartN7": "_i6", "mdMarginEndN7": "_i7", "mdMarginTop7": "_i8", "mdMarginRight7": "_i9", "mdMarginBottom7": "_ia", "mdMarginLeft7": "_ib", "mdMarginTopN7": "_ic", "mdMarginRightN7": "_id", "mdMarginBottomN7": "_ie", "mdMarginLeftN7": "_if", "mdPaddingY7": "_ig", "mdPaddingX7": "_ih", "mdMarginStart8": "_ii", "mdMarginEnd8": "_ij", "mdMarginStartN8": "_ik", "mdMarginEndN8": "_il", "mdMarginTop8": "_im", "mdMarginRight8": "_in", "mdMarginBottom8": "_io", "mdMarginLeft8": "_ip", "mdMarginTopN8": "_iq", "mdMarginRightN8": "_ir", "mdMarginBottomN8": "_is", "mdMarginLeftN8": "_it", "mdPaddingY8": "_iu", "mdPaddingX8": "_iv", "mdMarginStart9": "_iw", "mdMarginEnd9": "_ix", "mdMarginStartN9": "_iy", "mdMarginEndN9": "_iz", "mdMarginTop9": "_j0", "mdMarginRight9": "_j1", "mdMarginBottom9": "_j2", "mdMarginLeft9": "_j3", "mdMarginTopN9": "_j4", "mdMarginRightN9": "_j5", "mdMarginBottomN9": "_j6", "mdMarginLeftN9": "_j7", "mdPaddingY9": "_j8", "mdPaddingX9": "_j9", "mdMarginStart10": "_ja", "mdMarginEnd10": "_jb", "mdMarginStartN10": "_jc", "mdMarginEndN10": "_jd", "mdMarginTop10": "_je", "mdMarginRight10": "_jf", "mdMarginBottom10": "_jg", "mdMarginLeft10": "_jh", "mdMarginTopN10": "_ji", "mdMarginRightN10": "_jj", "mdMarginBottomN10": "_jk", "mdMarginLeftN10": "_jl", "mdPaddingY10": "_jm", "mdPaddingX10": "_jn", "mdMarginStart11": "_jo", "mdMarginEnd11": "_jp", "mdMarginStartN11": "_jq", "mdMarginEndN11": "_jr", "mdMarginTop11": "_js", "mdMarginRight11": "_jt", "mdMarginBottom11": "_ju", "mdMarginLeft11": "_jv", "mdMarginTopN11": "_jw", "mdMarginRightN11": "_jx", "mdMarginBottomN11": "_jy", "mdMarginLeftN11": "_jz", "mdPaddingY11": "_k0", "mdPaddingX11": "_k1", "mdMarginStart12": "_k2", "mdMarginEnd12": "_k3", "mdMarginStartN12": "_k4", "mdMarginEndN12": "_k5", "mdMarginTop12": "_k6", "mdMarginRight12": "_k7", "mdMarginBottom12": "_k8", "mdMarginLeft12": "_k9", "mdMarginTopN12": "_ka", "mdMarginRightN12": "_kb", "mdMarginBottomN12": "_kc", "mdMarginLeftN12": "_kd", "mdPaddingY12": "_ke", "mdPaddingX12": "_kf", "lgMarginStart1": "_kg", "lgMarginEnd1": "_kh", "lgMarginStartN1": "_ki", "lgMarginEndN1": "_kj", "lgMarginTop1": "_kk", "lgMarginRight1": "_kl", "lgMarginBottom1": "_km", "lgMarginLeft1": "_kn", "lgMarginTopN1": "_ko", "lgMarginRightN1": "_kp", "lgMarginBottomN1": "_kq", "lgMarginLeftN1": "_kr", "lgPaddingY1": "_ks", "lgPaddingX1": "_kt", "lgMarginStart2": "_ku", "lgMarginEnd2": "_kv", "lgMarginStartN2": "_kw", "lgMarginEndN2": "_kx", "lgMarginTop2": "_ky", "lgMarginRight2": "_kz", "lgMarginBottom2": "_l0", "lgMarginLeft2": "_l1", "lgMarginTopN2": "_l2", "lgMarginRightN2": "_l3", "lgMarginBottomN2": "_l4", "lgMarginLeftN2": "_l5", "lgPaddingY2": "_l6", "lgPaddingX2": "_l7", "lgMarginStart3": "_l8", "lgMarginEnd3": "_l9", "lgMarginStartN3": "_la", "lgMarginEndN3": "_lb", "lgMarginTop3": "_lc", "lgMarginRight3": "_ld", "lgMarginBottom3": "_le", "lgMarginLeft3": "_lf", "lgMarginTopN3": "_lg", "lgMarginRightN3": "_lh", "lgMarginBottomN3": "_li", "lgMarginLeftN3": "_lj", "lgPaddingY3": "_lk", "lgPaddingX3": "_ll", "lgMarginStart4": "_lm", "lgMarginEnd4": "_ln", "lgMarginStartN4": "_lo", "lgMarginEndN4": "_lp", "lgMarginTop4": "_lq", "lgMarginRight4": "_lr", "lgMarginBottom4": "_ls", "lgMarginLeft4": "_lt", "lgMarginTopN4": "_lu", "lgMarginRightN4": "_lv", "lgMarginBottomN4": "_lw", "lgMarginLeftN4": "_lx", "lgPaddingY4": "_ly", "lgPaddingX4": "_lz", "lgMarginStart5": "_m0", "lgMarginEnd5": "_m1", "lgMarginStartN5": "_m2", "lgMarginEndN5": "_m3", "lgMarginTop5": "_m4", "lgMarginRight5": "_m5", "lgMarginBottom5": "_m6", "lgMarginLeft5": "_m7", "lgMarginTopN5": "_m8", "lgMarginRightN5": "_m9", "lgMarginBottomN5": "_ma", "lgMarginLeftN5": "_mb", "lgPaddingY5": "_mc", "lgPaddingX5": "_md", "lgMarginStart6": "_me", "lgMarginEnd6": "_mf", "lgMarginStartN6": "_mg", "lgMarginEndN6": "_mh", "lgMarginTop6": "_mi", "lgMarginRight6": "_mj", "lgMarginBottom6": "_mk", "lgMarginLeft6": "_ml", "lgMarginTopN6": "_mm", "lgMarginRightN6": "_mn", "lgMarginBottomN6": "_mo", "lgMarginLeftN6": "_mp", "lgPaddingY6": "_mq", "lgPaddingX6": "_mr", "lgMarginStart7": "_ms", "lgMarginEnd7": "_mt", "lgMarginStartN7": "_mu", "lgMarginEndN7": "_mv", "lgMarginTop7": "_mw", "lgMarginRight7": "_mx", "lgMarginBottom7": "_my", "lgMarginLeft7": "_mz", "lgMarginTopN7": "_n0", "lgMarginRightN7": "_n1", "lgMarginBottomN7": "_n2", "lgMarginLeftN7": "_n3", "lgPaddingY7": "_n4", "lgPaddingX7": "_n5", "lgMarginStart8": "_n6", "lgMarginEnd8": "_n7", "lgMarginStartN8": "_n8", "lgMarginEndN8": "_n9", "lgMarginTop8": "_na", "lgMarginRight8": "_nb", "lgMarginBottom8": "_nc", "lgMarginLeft8": "_nd", "lgMarginTopN8": "_ne", "lgMarginRightN8": "_nf", "lgMarginBottomN8": "_ng", "lgMarginLeftN8": "_nh", "lgPaddingY8": "_ni", "lgPaddingX8": "_nj", "lgMarginStart9": "_nk", "lgMarginEnd9": "_nl", "lgMarginStartN9": "_nm", "lgMarginEndN9": "_nn", "lgMarginTop9": "_no", "lgMarginRight9": "_np", "lgMarginBottom9": "_nq", "lgMarginLeft9": "_nr", "lgMarginTopN9": "_ns", "lgMarginRightN9": "_nt", "lgMarginBottomN9": "_nu", "lgMarginLeftN9": "_nv", "lgPaddingY9": "_nw", "lgPaddingX9": "_nx", "lgMarginStart10": "_ny", "lgMarginEnd10": "_nz", "lgMarginStartN10": "_o0", "lgMarginEndN10": "_o1", "lgMarginTop10": "_o2", "lgMarginRight10": "_o3", "lgMarginBottom10": "_o4", "lgMarginLeft10": "_o5", "lgMarginTopN10": "_o6", "lgMarginRightN10": "_o7", "lgMarginBottomN10": "_o8", "lgMarginLeftN10": "_o9", "lgPaddingY10": "_oa", "lgPaddingX10": "_ob", "lgMarginStart11": "_oc", "lgMarginEnd11": "_od", "lgMarginStartN11": "_oe", "lgMarginEndN11": "_of", "lgMarginTop11": "_og", "lgMarginRight11": "_oh", "lgMarginBottom11": "_oi", "lgMarginLeft11": "_oj", "lgMarginTopN11": "_ok", "lgMarginRightN11": "_ol", "lgMarginBottomN11": "_om", "lgMarginLeftN11": "_on", "lgPaddingY11": "_oo", "lgPaddingX11": "_op", "lgMarginStart12": "_oq", "lgMarginEnd12": "_or", "lgMarginStartN12": "_os", "lgMarginEndN12": "_ot", "lgMarginTop12": "_ou", "lgMarginRight12": "_ov", "lgMarginBottom12": "_ow", "lgMarginLeft12": "_ox", "lgMarginTopN12": "_oy", "lgMarginRightN12": "_oz", "lgMarginBottomN12": "_p0", "lgMarginLeftN12": "_p1", "lgPaddingY12": "_p2", "lgPaddingX12": "_p3" };

var whitespace$1 = { "mlAuto": "_p4", "mrAuto": "_p5", "m0": "_p6", "mt0": "_p7", "mr0": "_p8", "mb0": "_p9", "ml0": "_pa", "p0": "_pb", "px0": "_pc", "py0": "_pd", "m1": "_pe", "mt1": "_pf", "mr1": "_pg", "mb1": "_ph", "ml1": "_pi", "mn1": "_pj", "mtn1": "_pk", "mbn1": "_pl", "mln1": "_pm", "mrn1": "_pn", "mxn1": "_po", "myn1": "_pp", "p1": "_pq", "px1": "_pr", "py1": "_ps", "m2": "_pt", "mt2": "_pu", "mr2": "_pv", "mb2": "_pw", "ml2": "_px", "mn2": "_py", "mtn2": "_pz", "mbn2": "_q0", "mln2": "_q1", "mrn2": "_q2", "mxn2": "_q3", "myn2": "_q4", "p2": "_q5", "px2": "_q6", "py2": "_q7", "m3": "_q8", "mt3": "_q9", "mr3": "_qa", "mb3": "_qb", "ml3": "_qc", "mn3": "_qd", "mtn3": "_qe", "mbn3": "_qf", "mln3": "_qg", "mrn3": "_qh", "mxn3": "_qi", "myn3": "_qj", "p3": "_qk", "px3": "_ql", "py3": "_qm", "m4": "_qn", "mt4": "_qo", "mr4": "_qp", "mb4": "_qq", "ml4": "_qr", "mn4": "_qs", "mtn4": "_qt", "mbn4": "_qu", "mln4": "_qv", "mrn4": "_qw", "mxn4": "_qx", "myn4": "_qy", "p4": "_qz", "px4": "_r0", "py4": "_r1", "m5": "_r2", "mt5": "_r3", "mr5": "_r4", "mb5": "_r5", "ml5": "_r6", "mn5": "_r7", "mtn5": "_r8", "mbn5": "_r9", "mln5": "_ra", "mrn5": "_rb", "mxn5": "_rc", "myn5": "_rd", "p5": "_re", "px5": "_rf", "py5": "_rg", "m6": "_rh", "mt6": "_ri", "mr6": "_rj", "mb6": "_rk", "ml6": "_rl", "mn6": "_rm", "mtn6": "_rn", "mbn6": "_ro", "mln6": "_rp", "mrn6": "_rq", "mxn6": "_rr", "myn6": "_rs", "p6": "_rt", "px6": "_ru", "py6": "_rv" };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var identity = function identity() {
  return {
    className: new Set(),
    inlineStyle: {}
  };
};

/*

Style is a monoid that capture the "to-be-applied" styles (inline and classes)
for a Box. It's basically set that is closed under an associative binary
operation and has an identity element such that for all HA HA HA. Yes, it's a
monoid, which sounds scary but it's not really and actually super useful. All
that means is that basically you can do two things with it:

    1. concat(concat(a, b), c) === concat(a, concat(b, c));
    2. concat(identity(), a) === concat(a, identity()) === a;

What that means is that it's really easy to compose styles together and the
order in which you do so doesn't really matter.

*/

// TODO: This type should be opaque, however the Babel parser doesn't support
//       the opaque syntax yet.


var fromClassName = function fromClassName() {
  for (var _len = arguments.length, classNames = Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  return {
    className: new Set(classNames),
    inlineStyle: {}
  };
};

var fromInlineStyle = function fromInlineStyle(inlineStyle) {
  return {
    className: new Set(),
    inlineStyle: inlineStyle
  };
};

var concat = function concat(styles) {
  return styles.reduce(function (_ref, _ref2) {
    var classNameA = _ref.className,
        inlineStyleA = _ref.inlineStyle;
    var classNameB = _ref2.className,
        inlineStyleB = _ref2.inlineStyle;
    return {
      className: new Set([].concat(toConsumableArray(classNameA), toConsumableArray(classNameB))),
      inlineStyle: _extends({}, inlineStyleA, inlineStyleB)
    };
  }, identity());
};

var mapClassName = function mapClassName(fn) {
  return function (_ref3) {
    var className = _ref3.className,
        inlineStyle = _ref3.inlineStyle;
    return {
      className: new Set(Array.from(className).map(fn)),
      inlineStyle: inlineStyle
    };
  };
};

var toProps = function toProps(_ref4) {
  var className = _ref4.className,
      inlineStyle = _ref4.inlineStyle;

  var props = {};

  if (className.size > 0) {
    // Sorting here ensures that classNames are always stable, reducing diff
    // churn. Box usually has a small number of properties so it's not a perf
    // concern.
    props.className = Array.from(className).sort().join(' ');
  }

  if (Object.keys(inlineStyle).length > 0) {
    props.style = inlineStyle;
  }

  return props;
};

/*

Transforms

These are a collection of a few functors that take values and returns Style's. OMG, I used the word functor - it's really just a fancy word for function.

*/

// Adds a classname when a property is present.
//
//     <Box top />
//
var toggle = function toggle() {
  for (var _len = arguments.length, classNames = Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  return function (val) {
    return val ? fromClassName.apply(undefined, classNames) : identity();
  };
};

// Maps string values to classes
//
//     <Box alignItems="center" />
//
var mapping = function mapping(map) {
  return function (val) {
    return Object.prototype.hasOwnProperty.call(map, val) ? fromClassName(map[val]) : identity();
  };
};

// Maps a range of integers to a range of classnames
//
//     <Box padding={1} />
//
var range = function range(scale) {
  return function (n) {
    return fromClassName('' + scale + (n < 0 ? 'N' + Math.abs(n) : n));
  };
};

// Like `range`, maps a range of integers to a range of classnames, excluding
// zero values.
//
//     <Box padding={0} />
var rangeWithoutZero = function rangeWithoutZero(scale) {
  return function (n) {
    return n === 0 ? identity() : range(scale)(n);
  };
};

// Binds a string classname to the value in an object. Useful when interacting
// with ranges that need to come dynamically from a style object. This is
// similar to the NPM package 'classnames/bind'.
var bind = function bind(fn, scope) {
  return function (val) {
    return mapClassName(function (name) {
      return scope[name];
    })(fn(val));
  };
};

// This takes a series of the previously defined functors, runs them all
// against a value and returns the set of their classnames.
var union = function union() {
  for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function (val) {
    return concat(fns.map(function (fn) {
      return fn(val);
    }));
  };
};

/*

# ProTypes

Box's type definition is exhaustive. With the exception of `dangerouslySetInlineStyle`, values shouldn't be ambigious. That means that we have to type out things like boints, but that's also where Box's magic lies. Also, by putting in extra effort around type definitions here, we can skip extra runtime typechecks in the transformers for performance.

*/

// --

/*

# Transformers

This is where the meat and the bones of Box's transforms are. You can read more about the DSL in `./transforms.js`, but basically they are a small declarative way of specifying how a property (i.e. `marginTop={4}`) gets turned into a CSS class (`marginTop4`).

There's a little preamble here, but it culminates in a big object mapping the actual property names to the transformer values.

*/

var marginStart = bind(rangeWithoutZero('marginStart'), whitespace);
var marginEnd = bind(rangeWithoutZero('marginEnd'), whitespace);
var marginTop = bind(rangeWithoutZero('marginTop'), whitespace);
var marginRight = bind(rangeWithoutZero('marginRight'), whitespace);
var marginBottom = bind(rangeWithoutZero('marginBottom'), whitespace);
var marginLeft = bind(rangeWithoutZero('marginLeft'), whitespace);
var margin = union(marginTop, marginBottom, marginLeft, marginRight);

var smMarginTop = bind(rangeWithoutZero('smMarginTop'), whitespace);
var smMarginRight = bind(rangeWithoutZero('smMarginRight'), whitespace);
var smMarginBottom = bind(rangeWithoutZero('smMarginBottom'), whitespace);
var smMarginLeft = bind(rangeWithoutZero('smMarginLeft'), whitespace);
var smMargin = union(smMarginTop, smMarginBottom, smMarginLeft, smMarginRight);

var mdMarginTop = bind(rangeWithoutZero('mdMarginTop'), whitespace);
var mdMarginRight = bind(rangeWithoutZero('mdMarginRight'), whitespace);
var mdMarginBottom = bind(rangeWithoutZero('mdMarginBottom'), whitespace);
var mdMarginLeft = bind(rangeWithoutZero('mdMarginLeft'), whitespace);
var mdMargin = union(mdMarginTop, mdMarginBottom, mdMarginLeft, mdMarginRight);

var lgMarginTop = bind(rangeWithoutZero('lgMarginTop'), whitespace);
var lgMarginRight = bind(rangeWithoutZero('lgMarginRight'), whitespace);
var lgMarginBottom = bind(rangeWithoutZero('lgMarginBottom'), whitespace);
var lgMarginLeft = bind(rangeWithoutZero('lgMarginLeft'), whitespace);
var lgMargin = union(lgMarginTop, lgMarginBottom, lgMarginLeft, lgMarginRight);

var paddingX = bind(rangeWithoutZero('paddingX'), whitespace);
var paddingY = bind(rangeWithoutZero('paddingY'), whitespace);
var padding = union(paddingX, paddingY);

var smPaddingX = bind(rangeWithoutZero('smPaddingX'), whitespace);
var smPaddingY = bind(rangeWithoutZero('smPaddingY'), whitespace);
var smPadding = union(smPaddingX, smPaddingY);

var mdPaddingX = bind(rangeWithoutZero('mdPaddingX'), whitespace);
var mdPaddingY = bind(rangeWithoutZero('mdPaddingY'), whitespace);
var mdPadding = union(mdPaddingX, mdPaddingY);

var lgPaddingX = bind(rangeWithoutZero('lgPaddingX'), whitespace);
var lgPaddingY = bind(rangeWithoutZero('lgPaddingY'), whitespace);
var lgPadding = union(lgPaddingX, lgPaddingY);

/*

These functions are legacy. I'd like to get rid of most of this file's dependency on importing `./style.js` directly once these are removed.

*/

var prefix = function prefix(pre) {
  return mapClassName(function (name) {
    return '' + pre + name;
  });
};
var display = function display(value) {
  switch (value) {
    case 'flex':
      return fromClassName('DisplayFlex', 'DirectionRow');
    case 'flexColumn':
      return fromClassName('DisplayFlex', 'DirectionColumn');
    case 'inlineBlock':
      return fromClassName('DisplayInlineBlock');
    case false:
      return fromClassName('DisplayNone');
    default:
      /* block */
      return fromClassName('DisplayBlock');
  }
};
var column = range('Col');

var formatIntBoint = function formatIntBoint(x) {
  return x < 0 ? 'n' + Math.abs(x) : x.toString();
};

/*

It's preferable to put new properties into that object directly just so it's easier to read.

*/

var propToFn = {
  xs: function xs(value) {
    if (!value) {
      return identity();
    }
    return mapClassName(function (c) {
      return styles[c];
    })(prefix('xs')(concat([value.column ? column(value.column) : identity(), typeof value.display !== 'undefined' ? display(value.display) : identity()])));
  },
  sm: function sm(value) {
    if (!value) {
      return identity();
    }
    return mapClassName(function (c) {
      return styles[c];
    })(prefix('sm')(concat([value.column ? column(value.column) : identity(), typeof value.display !== 'undefined' ? display(value.display) : identity()])));
  },
  md: function md(value) {
    if (!value) {
      return identity();
    }
    return mapClassName(function (c) {
      return styles[c];
    })(prefix('md')(concat([value.column ? column(value.column) : identity(), typeof value.display !== 'undefined' ? display(value.display) : identity()])));
  },
  lg: function lg(value) {
    if (!value) {
      return identity();
    }
    return mapClassName(function (c) {
      return styles[c];
    })(prefix('lg')(concat([value.column ? column(value.column) : identity(), typeof value.display !== 'undefined' ? display(value.display) : identity()])));
  },

  display: mapping({
    none: styles.xsDisplayNone,
    flex: styles.xsDisplayFlex,
    block: styles.xsDisplayBlock,
    inlineBlock: styles.xsDisplayInlineBlock
  }),
  column: bind(range('xsCol'), styles),
  direction: mapping({
    row: styles.xsDirectionRow,
    column: styles.xsDirectionColumn
  }),

  smDisplay: mapping({
    none: styles.smDisplayNone,
    flex: styles.smDisplayFlex,
    block: styles.smDisplayBlock,
    inlineBlock: styles.smDisplayInlineBlock
  }),
  smColumn: bind(range('smCol'), styles),
  smDirection: mapping({
    row: styles.smDirectionRow,
    column: styles.smDirectionColumn
  }),

  mdDisplay: mapping({
    none: styles.mdDisplayNone,
    flex: styles.mdDisplayFlex,
    block: styles.mdDisplayBlock,
    inlineBlock: styles.mdDisplayInlineBlock
  }),
  mdColumn: bind(range('mdCol'), styles),
  mdDirection: mapping({
    row: styles.mdDirectionRow,
    column: styles.mdDirectionColumn
  }),

  lgDisplay: mapping({
    none: styles.lgDisplayNone,
    flex: styles.lgDisplayFlex,
    block: styles.lgDisplayBlock,
    inlineBlock: styles.lgDisplayInlineBlock
  }),
  lgColumn: bind(range('lgCol'), styles),
  lgDirection: mapping({
    row: styles.lgDirectionRow,
    column: styles.lgDirectionColumn
  }),

  alignContent: mapping({
    start: layout.contentStart,
    end: layout.contentEnd,
    center: layout.contentCenter,
    between: layout.contentBetween,
    around: layout.contentAround
    // default: stretch
  }),
  alignItems: mapping({
    start: layout.itemsStart,
    end: layout.itemsEnd,
    center: layout.itemsCenter,
    baseline: layout.itemsBaseline
    // default: stretch
  }),
  alignSelf: mapping({
    start: layout.selfStart,
    end: layout.selfEnd,
    center: layout.selfCenter,
    baseline: layout.selfBaseline,
    stretch: layout.selfStretch
    // default: auto
  }),
  bottom: toggle(layout.bottom0),
  color: mapping({
    blue: colors.blueBg,
    darkGray: colors.darkGrayBg,
    pine: colors.pineBg,
    gray: colors.grayBg,
    red: colors.redBg,
    olive: colors.oliveBg,
    lightGray: colors.lightGrayBg,
    white: colors.whiteBg,
    orange: colors.orangeBg,
    green: colors.greenBg,
    navy: colors.navyBg,
    midnight: colors.midnightBg,
    purple: colors.purpleBg,
    orchid: colors.orchidBg,
    eggplant: colors.eggplantBg,
    maroon: colors.maroonBg,
    watermelon: colors.watermelonBg,
    lightWash: colors.lightWashBg,
    darkWash: colors.darkWashBg
    // default: transparent
  }),
  fit: toggle(layout.fit),
  flex: mapping({
    grow: layout.flexGrow,
    none: layout.flexNone
    // default: shrink
  }),
  height: function (_height) {
    function height(_x) {
      return _height.apply(this, arguments);
    }

    height.toString = function () {
      return _height.toString();
    };

    return height;
  }(function (height) {
    return fromInlineStyle({ height: height });
  }),
  justifyContent: mapping({
    end: layout.justifyEnd,
    center: layout.justifyCenter,
    between: layout.justifyBetween,
    around: layout.justifyAround
    // default: start
  }),
  left: toggle(layout.left0),
  deprecatedMargin: function deprecatedMargin(value) {
    var mt = identity();
    var mb = identity();
    var ml = identity();
    var mr = identity();
    switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
      case 'number':
        return fromClassName(whitespace$1['m' + formatIntBoint(value)]);
      case 'object':
        if (value.top) {
          mt = fromClassName(whitespace$1['mt' + formatIntBoint(value.top)]);
        }

        if (value.bottom) {
          mb = fromClassName(whitespace$1['mb' + formatIntBoint(value.bottom)]);
        }

        if (value.left) {
          ml = fromClassName(value.left === 'auto' ? whitespace$1.mlAuto : whitespace$1['ml' + formatIntBoint(value.left)]);
        }

        if (value.right) {
          mr = fromClassName(value.right === 'auto' ? whitespace$1.mrAuto : whitespace$1['mr' + formatIntBoint(value.right)]);
        }
        return concat([mt, mb, ml, mr]);
      default:
        return identity();
    }
  },
  marginStart: marginStart,
  marginEnd: marginEnd,
  margin: margin,
  marginTop: marginTop,
  marginRight: marginRight,
  marginBottom: marginBottom,
  marginLeft: marginLeft,
  smMargin: smMargin,
  smMarginTop: smMarginTop,
  smMarginRight: smMarginRight,
  smMarginBottom: smMarginBottom,
  smMarginLeft: smMarginLeft,
  mdMargin: mdMargin,
  mdMarginTop: mdMarginTop,
  mdMarginRight: mdMarginRight,
  mdMarginBottom: mdMarginBottom,
  mdMarginLeft: mdMarginLeft,
  lgMargin: lgMargin,
  lgMarginTop: lgMarginTop,
  lgMarginRight: lgMarginRight,
  lgMarginBottom: lgMarginBottom,
  lgMarginLeft: lgMarginLeft,
  maxHeight: function (_maxHeight) {
    function maxHeight(_x2) {
      return _maxHeight.apply(this, arguments);
    }

    maxHeight.toString = function () {
      return _maxHeight.toString();
    };

    return maxHeight;
  }(function (maxHeight) {
    return fromInlineStyle({ maxHeight: maxHeight });
  }),
  maxWidth: function (_maxWidth) {
    function maxWidth(_x3) {
      return _maxWidth.apply(this, arguments);
    }

    maxWidth.toString = function () {
      return _maxWidth.toString();
    };

    return maxWidth;
  }(function (maxWidth) {
    return fromInlineStyle({ maxWidth: maxWidth });
  }),
  minHeight: function (_minHeight) {
    function minHeight(_x4) {
      return _minHeight.apply(this, arguments);
    }

    minHeight.toString = function () {
      return _minHeight.toString();
    };

    return minHeight;
  }(function (minHeight) {
    return fromInlineStyle({ minHeight: minHeight });
  }),
  minWidth: function (_minWidth) {
    function minWidth(_x5) {
      return _minWidth.apply(this, arguments);
    }

    minWidth.toString = function () {
      return _minWidth.toString();
    };

    return minWidth;
  }(function (minWidth) {
    return fromInlineStyle({ minWidth: minWidth });
  }),
  overflow: mapping({
    hidden: layout.overflowHidden,
    scroll: layout.overflowScroll,
    auto: layout.overflowAuto,
    scrollX: layout.overflowScrollX,
    scrollY: layout.overflowScrollY
    // default: visible
  }),
  deprecatedPadding: function deprecatedPadding(value) {
    switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
      case 'number':
        return fromClassName(whitespace$1['p' + value]);
      case 'object':
        return concat([value.x ? fromClassName(whitespace$1['px' + value.x]) : identity(), value.y ? fromClassName(whitespace$1['py' + value.y]) : identity()]);
      default:
        return identity();
    }
  },
  padding: padding,
  paddingX: paddingX,
  paddingY: paddingY,
  smPadding: smPadding,
  smPaddingX: smPaddingX,
  smPaddingY: smPaddingY,
  mdPadding: mdPadding,
  mdPaddingX: mdPaddingX,
  mdPaddingY: mdPaddingY,
  lgPadding: lgPadding,
  lgPaddingX: lgPaddingX,
  lgPaddingY: lgPaddingY,
  position: mapping({
    absolute: layout.absolute,
    relative: layout.relative,
    fixed: layout.fixed
    // default: static
  }),
  right: toggle(layout.right0),
  shape: mapping({
    circle: borders.circle,
    pill: borders.pill,
    rounded: borders.rounded,
    roundedBottom: borders.roundedBottom,
    roundedLeft: borders.roundedLeft,
    roundedRight: borders.roundedRight,
    roundedTop: borders.roundedTop
    // default: square
  }),
  top: toggle(layout.top0),
  width: function (_width) {
    function width(_x6) {
      return _width.apply(this, arguments);
    }

    width.toString = function () {
      return _width.toString();
    };

    return width;
  }(function (width) {
    return fromInlineStyle({ width: width });
  }),
  wrap: toggle(layout.flexWrap),
  dangerouslySetInlineStyle: function dangerouslySetInlineStyle(value) {
    return (
      /* eslint-disable-next-line no-underscore-dangle */
      value && value.__style ? fromInlineStyle(value.__style) : identity()
    );
  }
};

/*

# The Component

*/

var contains = function contains(key, arr) {
  return arr.indexOf(key) >= 0;
};
var omit = function omit(keys, obj) {
  return Object.keys(obj).reduce(function (acc, k) {
    if (contains(k, keys)) {
      return acc;
    }
    return _extends({}, acc, defineProperty({}, k, obj[k]));
  }, {});
};

function Box(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);

  // Flow can't reason about the constant nature of Object.keys so we can't use
  // a functional (reduce) style here.

  // Box is a "pass-through" component, meaning that if you pass properties to
  // it that it doesn't know about (`aria-label` for instance) it passes
  // directly back to the underlying `<div/>`. That's generally useful, but
  // we'd also like to strip out a few naughty properties that break style
  // encapsulation (className, style) or accessibility (onClick).
  var blacklist = ['onClick', 'className', 'style'];

  // All Box's are box-sized by default, so we start off building up the styles
  // to be applied with a Box base class.
  var s = fromClassName(styles.box);

  // This loops through each property and if it exists in the previously
  // defined transform map, concatentes the resulting styles to the base
  // styles. If there's a match, we also don't pass through that property. This
  // means Box's runtime is only dependent on the number of properties passed
  // to it (which is typically small) instead of the total number of possible
  // properties (~30 or so). While it may ~feel~ like Box is innefficient, its
  // biggest performance impact is on startup time because there's so much code
  // here.

  // eslint-disable-next-line no-restricted-syntax
  for (var prop in props) {
    if (Object.prototype.hasOwnProperty.call(propToFn, prop)) {
      var fn = propToFn[prop];
      var value = props[prop];
      blacklist = blacklist.concat(prop);
      s = concat([s, fn(value)]);
    }
  }

  // And... magic!
  return React.createElement(
    'div',
    _extends({}, omit(blacklist, props), toProps(s)),
    children
  );
}

/*

# PropTypes

And we're done here :)

*/

var ColumnPropType = PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

var MarginPropType = PropTypes.oneOf([-12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

var PaddingPropType = PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

Box.propTypes = {
  children: PropTypes.node,
  dangerouslySetInlineStyle: PropTypes.exact({
    __style: PropTypes.object
  }),

  xs: PropTypes.exact({
    display: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['flex', 'flexColumn', 'inlineBlock'])]),
    column: PropTypes.number
  }),
  sm: PropTypes.exact({
    display: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['flex', 'flexColumn', 'inlineBlock'])]),
    column: PropTypes.number
  }),
  md: PropTypes.exact({
    display: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['flex', 'flexColumn', 'inlineBlock'])]),
    column: PropTypes.number
  }),
  lg: PropTypes.exact({
    display: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['flex', 'flexColumn', 'inlineBlock'])]),
    column: PropTypes.number
  }),
  deprecatedMargin: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])])
  })]),
  deprecatedPadding: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })]),

  display: PropTypes.oneOf(['none', 'flex', 'block', 'inlineBlock']),
  direction: PropTypes.oneOf(['row', 'column']),
  column: ColumnPropType,

  smDisplay: PropTypes.oneOf(['none', 'flex', 'block', 'inlineBlock']),
  smDirection: PropTypes.oneOf(['row', 'column']),
  smColumn: ColumnPropType,

  mdDisplay: PropTypes.oneOf(['none', 'flex', 'block', 'inlineBlock']),
  mdDirection: PropTypes.oneOf(['row', 'column']),
  mdColumn: ColumnPropType,

  lgDisplay: PropTypes.oneOf(['none', 'flex', 'block', 'inlineBlock']),
  lgDirection: PropTypes.oneOf(['row', 'column']),
  lgColumn: ColumnPropType,

  alignContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'stretch']),
  alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  alignSelf: PropTypes.oneOf(['auto', 'start', 'end', 'center', 'baseline', 'stretch']),
  bottom: PropTypes.bool,
  color: PropTypes.oneOf(['blue', 'darkGray', 'darkWash', 'eggplant', 'gray', 'green', 'lightGray', 'lightWash', 'maroon', 'midnight', 'navy', 'olive', 'orange', 'orchid', 'pine', 'purple', 'red', 'transparent', 'watermelon', 'white']),
  fit: PropTypes.bool,
  flex: PropTypes.oneOf(['grow', 'shrink', 'none']),
  grow: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
  left: PropTypes.bool,

  marginStart: MarginPropType,
  marginEnd: MarginPropType,

  margin: MarginPropType,
  marginTop: MarginPropType,
  marginRight: MarginPropType,
  marginBottom: MarginPropType,
  marginLeft: MarginPropType,

  smMargin: MarginPropType,
  smMarginTop: MarginPropType,
  smMarginRight: MarginPropType,
  smMarginBottom: MarginPropType,
  smMarginLeft: MarginPropType,

  mdMargin: MarginPropType,
  mdMarginTop: MarginPropType,
  mdMarginRight: MarginPropType,
  mdMarginBottom: MarginPropType,
  mdMarginLeft: MarginPropType,

  lgMargin: MarginPropType,
  lgMarginTop: MarginPropType,
  lgMarginRight: MarginPropType,
  lgMarginBottom: MarginPropType,
  lgMarginLeft: MarginPropType,

  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  overflow: PropTypes.oneOf(['visible', 'hidden', 'scroll', 'scrollX', 'scrollY', 'auto']),

  padding: PaddingPropType,
  paddingX: PaddingPropType,
  paddingY: PaddingPropType,

  smPadding: PaddingPropType,
  smPaddingX: PaddingPropType,
  smPaddingY: PaddingPropType,

  mdPadding: PaddingPropType,
  mdPaddingX: PaddingPropType,
  mdPaddingY: PaddingPropType,

  lgPadding: PaddingPropType,
  lgPaddingX: PaddingPropType,
  lgPaddingY: PaddingPropType,

  position: PropTypes.oneOf(['static', 'absolute', 'relative', 'fixed']),
  right: PropTypes.bool,
  shape: PropTypes.oneOf(['square', 'rounded', 'pill', 'circle', 'roundedTop', 'roundedBottom', 'roundedLeft', 'roundedRight']),
  top: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  wrap: PropTypes.bool
};

var styles$1 = { "icon": "_rw", "iconBlock": "_rx _27" };

var add = 'M22.00,10.00 L14.00,10.00 L14.00,2.00 C14.00,0.90 13.10,0.00 12.00,0.00 C10.90,0.00 10.00,0.90 10.00,2.00 L10.00,10.00 L2.00,10.00 C0.90,10.00 0.00,10.90 0.00,12.00 C0.00,13.10 0.90,14.00 2.00,14.00 L10.00,14.00 L10.00,22.00 C10.00,23.10 10.90,24.00 12.00,24.00 C13.10,24.00 14.00,23.10 14.00,22.00 L14.00,14.00 L22.00,14.00 C23.10,14.00 24.00,13.10 24.00,12.00 C24.00,10.90 23.10,10.00 22.00,10.00';

var addCircle = 'M17.75,13.25 L13.25,13.25 L13.25,17.75 C13.25,18.44 12.69,19.00 12.00,19.00 C11.31,19.00 10.75,18.44 10.75,17.75 L10.75,13.25 L6.25,13.25 C5.56,13.25 5.00,12.69 5.00,12.00 C5.00,11.31 5.56,10.75 6.25,10.75 L10.75,10.75 L10.75,6.25 C10.75,5.56 11.31,5.00 12.00,5.00 C12.69,5.00 13.25,5.56 13.25,6.25 L13.25,10.75 L17.75,10.75 C18.44,10.75 19.00,11.31 19.00,12.00 C19.00,12.69 18.44,13.25 17.75,13.25 M12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00';

var addPin = 'M21.50,8.69 C22.99,9.56 24.00,11.15 24.00,13.00 L20.00,13.00 L20.00,20.96 L19.00,23.00 L18.00,20.96 L18.00,13.00 L14.00,13.00 C14.00,11.15 15.01,9.56 16.50,8.69 L16.50,2.93 C15.64,2.71 15.00,1.93 15.00,1.00 L23.00,1.00 C23.00,1.93 22.36,2.71 21.50,2.93 L21.50,8.69 Z M10.25,9.50 C10.94,9.50 11.50,10.06 11.50,10.75 C11.50,11.44 10.94,12.00 10.25,12.00 L7.00,12.00 L7.00,15.25 C7.00,15.94 6.44,16.50 5.75,16.50 C5.06,16.50 4.50,15.94 4.50,15.25 L4.50,12.00 L1.25,12.00 C0.56,12.00 0.00,11.44 0.00,10.75 C0.00,10.06 0.56,9.50 1.25,9.50 L4.50,9.50 L4.50,6.25 C4.50,5.56 5.06,5.00 5.75,5.00 C6.44,5.00 7.00,5.56 7.00,6.25 L7.00,9.50 L10.25,9.50 Z';

var angledPin = 'M13.988,19.153 C15.485,17.656 15.985,15.446 15.481,13.537 L19.740,9.074 L22.662,8.807 L22.645,8.789 C22.739,8.804 22.837,8.780 22.909,8.708 C23.030,8.587 23.031,8.391 22.910,8.271 L15.730,1.090 C15.609,0.970 15.413,0.970 15.292,1.091 C15.220,1.163 15.197,1.262 15.211,1.356 L15.194,1.338 L14.927,4.261 L10.463,8.520 C8.554,8.015 6.344,8.516 4.847,10.012 L8.656,13.821 L3.324,19.153 C2.562,19.915 0.711,22.108 1.039,22.962 C1.892,23.290 4.086,21.438 4.847,20.676 C5.609,19.915 10.179,15.344 10.179,15.344 L13.988,19.153 Z';

var arrowBack = 'M17.28,24.00 C16.71,24.00 16.14,23.78 15.70,23.34 L4.50,12.00 L15.70,0.66 C16.57,-0.22 17.98,-0.22 18.85,0.66 C19.72,1.54 19.72,2.96 18.85,3.84 L10.79,12.00 L18.85,20.16 C19.72,21.04 19.72,22.46 18.85,23.34 C18.41,23.78 17.85,24.00 17.28,24.00';

var arrowCircleForward = 'M12.94,16.07 C12.45,16.55 11.66,16.55 11.17,16.07 C10.68,15.58 10.68,14.79 11.17,14.30 L12.23,13.23 L8.25,13.23 C7.56,13.23 7.00,12.67 7.00,11.98 C7.00,11.29 7.56,10.73 8.25,10.73 L12.20,10.73 L11.17,9.70 C10.68,9.21 10.68,8.42 11.17,7.93 C11.66,7.45 12.45,7.45 12.94,7.93 L17.00,12.00 L12.94,16.07 Z M12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00 L12.00,0.00 Z';

var arrowCircleDown = 'M0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 Z M10.77,8.25 C10.77,7.56 11.33,7.00 12.02,7.00 C12.71,7.00 13.27,7.56 13.27,8.25 L13.27,12.20 L14.30,11.17 C14.79,10.68 15.58,10.68 16.07,11.17 C16.55,11.66 16.55,12.45 16.07,12.94 L12.00,17.00 L7.93,12.94 C7.45,12.45 7.45,11.66 7.93,11.17 C8.42,10.68 9.21,10.68 9.70,11.17 L10.77,12.23 L10.77,8.25 Z';

var arrowDown = 'M12.00,19.50 L0.66,8.29 C-0.22,7.43 -0.22,6.02 0.66,5.15 C1.54,4.28 2.96,4.28 3.84,5.15 L12.00,13.21 L20.16,5.15 C21.04,4.28 22.46,4.28 23.34,5.15 C24.22,6.02 24.22,7.43 23.34,8.29 L12.00,19.50 Z';

var arrowForward = 'M6.72,24.00 C7.29,24.00 7.86,23.78 8.29,23.34 L19.50,12.00 L8.29,0.66 C7.43,-0.22 6.02,-0.22 5.15,0.66 C4.28,1.54 4.28,2.96 5.15,3.84 L13.21,12.00 L5.15,20.16 C4.28,21.04 4.28,22.46 5.15,23.34 C5.58,23.78 6.15,24.00 6.72,24.00';

var arrowUp = 'M21.75,19.50 C21.17,19.50 20.60,19.28 20.16,18.85 L12.00,10.79 L3.84,18.85 C2.96,19.72 1.54,19.72 0.66,18.85 C-0.22,17.98 -0.22,16.57 0.66,15.70 L12.00,4.50 L23.34,15.70 C24.22,16.57 24.22,17.98 23.34,18.85 C22.90,19.28 22.33,19.50 21.75,19.50';

var arrowUpRight = 'M4.9283,1 C3.6273,1 2.5713,2.054 2.5713,3.357 C2.5713,4.66 3.6273,5.714 4.9283,5.714 L14.9523,5.714 L1.6893,18.976 C0.7703,19.896 0.7703,21.389 1.6893,22.31 C2.1503,22.771 2.7533,23 3.3573,23 C3.9603,23 4.5633,22.771 5.0243,22.31 L18.2853,9.047 L18.2853,19.071 C18.2853,20.374 19.3413,21.429 20.6433,21.429 C21.9443,21.429 23.0003,20.374 23.0003,19.071 L23.0003,1 L4.9283,1 Z';

var bell = 'M12.00,24.00 C10.34,24.00 9.00,22.66 9.00,21.00 L15.00,21.00 C15.00,22.66 13.66,24.00 12.00,24.00 Z M19.00,13.17 C20.58,14.69 21.67,16.72 22.00,19.00 L2.00,19.00 C2.33,16.72 3.42,14.69 5.00,13.17 L5.00,7.00 C5.00,3.13 8.13,0.00 12.00,0.00 C15.87,0.00 19.00,3.13 19.00,7.00 L19.00,13.17 Z';

var camera = 'M6.36,4.99 L8.56,2.00 L15.44,2.00 L17.64,4.99 L20.73,4.99 C22.53,4.99 24.00,6.48 24.00,8.32 L24.00,18.67 C24.00,20.51 22.53,22.00 20.73,22.00 L3.27,22.00 C1.47,22.00 0.00,20.51 0.00,18.67 L0.00,8.32 C0.00,6.48 1.47,4.99 3.27,4.99 L6.36,4.99 Z M12.00,7.22 C8.83,7.22 6.26,9.79 6.26,12.96 C6.26,16.13 8.83,18.70 12.00,18.70 C15.17,18.70 17.74,16.13 17.74,12.96 C17.74,9.79 15.17,7.22 12.00,7.22 M12.00,9.95 C13.66,9.95 15.01,11.30 15.01,12.96 C15.01,14.62 13.66,15.97 12.00,15.97 C10.34,15.97 8.99,14.62 8.99,12.96 C8.99,11.30 10.34,9.95 12.00,9.95';

var cancel = 'M15.18,12.00 L22.34,4.84 C23.22,3.96 23.22,2.54 22.34,1.66 C21.46,0.78 20.04,0.78 19.16,1.66 L12.00,8.82 L4.84,1.66 C3.96,0.78 2.54,0.78 1.66,1.66 C0.78,2.54 0.78,3.96 1.66,4.84 L8.82,12.00 L1.66,19.16 C0.78,20.04 0.78,21.46 1.66,22.34 C2.10,22.78 2.67,23.00 3.25,23.00 C3.83,23.00 4.40,22.78 4.84,22.34 L12.00,15.18 L19.16,22.34 C19.60,22.78 20.17,23.00 20.75,23.00 C21.33,23.00 21.90,22.78 22.34,22.34 C23.22,21.46 23.22,20.04 22.34,19.16 L15.18,12.00 Z';

var check = 'M9.17,21.75 L0.73,12.79 C-0.24,11.75 -0.24,10.08 0.73,9.04 C1.71,8.01 3.28,8.01 4.26,9.04 L9.17,14.26 L19.74,3.03 C20.72,1.99 22.29,1.99 23.27,3.03 C24.24,4.06 24.24,5.74 23.27,6.77 L9.17,21.75 Z';

var checkCircle = 'M18.88,9.88 L10.22,18.55 L5.10,13.42 C4.61,12.93 4.61,12.14 5.10,11.65 C5.58,11.16 6.38,11.16 6.86,11.65 L10.22,15.01 L17.12,8.12 C17.61,7.63 18.40,7.63 18.88,8.12 C19.37,8.61 19.37,9.40 18.88,9.88 M12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00';

var circleOutline = 'M12.00,0.00 C5.40,0.00 0.00,5.40 0.00,12.00 C0.00,18.60 5.40,24.00 12.00,24.00 C18.60,24.00 24.00,18.60 24.00,12.00 C24.00,5.40 18.60,0.00 12.00,0.00 L12.00,0.00 Z M12.00,22.20 C6.45,22.20 1.80,17.70 1.80,12.00 C1.80,6.30 6.30,1.80 12.00,1.80 C17.70,1.80 22.20,6.30 22.20,12.00 C22.20,17.70 17.55,22.20 12.00,22.20 L12.00,22.20 Z';

var clear = 'M15.18,16.95 L12.00,13.77 L8.82,16.95 C8.33,17.44 7.54,17.44 7.05,16.95 C6.56,16.46 6.56,15.67 7.05,15.18 L10.23,12.00 L7.05,8.82 C6.56,8.33 6.56,7.54 7.05,7.05 C7.54,6.56 8.33,6.56 8.82,7.05 L12.00,10.23 L15.18,7.05 C15.67,6.56 16.46,6.56 16.95,7.05 C17.44,7.54 17.44,8.33 16.95,8.82 L13.77,12.00 L16.95,15.18 C17.44,15.67 17.44,16.46 16.95,16.95 C16.46,17.44 15.67,17.44 15.18,16.95 M24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00';

var clock = 'M17.83,17.83 C17.46,18.19 16.98,18.38 16.50,18.38 C16.02,18.38 15.54,18.19 15.17,17.83 L10.13,12.78 L10.13,6.00 C10.13,4.96 10.96,4.13 12.00,4.13 C13.04,4.13 13.88,4.96 13.88,6.00 L13.88,11.22 L17.83,15.17 C18.56,15.91 18.56,17.09 17.83,17.83 M12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00';

var cog = 'M12.00,15.95 C9.79,15.95 8.00,14.16 8.00,11.95 C8.00,9.74 9.79,7.95 12.00,7.95 C14.21,7.95 16.00,9.74 16.00,11.95 C16.00,14.16 14.21,15.95 12.00,15.95 L12.00,15.95 Z M12.00,0.50 L2.00,6.25 L2.00,17.75 L12.00,23.50 L22.00,17.75 L22.00,6.25 L12.00,0.50 Z';

var compass = 'M12.87,12.90 C13.36,12.41 13.36,11.62 12.87,11.13 C12.38,10.64 11.59,10.64 11.10,11.13 C10.61,11.62 10.61,12.41 11.10,12.90 C11.59,13.39 12.38,13.39 12.87,12.90 M15.14,14.03 C14.93,14.55 14.52,14.96 14.00,15.16 L5.62,18.38 L8.84,10.00 C9.04,9.48 9.45,9.07 9.97,8.86 L18.58,5.42 L15.14,14.03 Z M20.49,3.51 C15.80,-1.17 8.20,-1.17 3.51,3.51 C-1.17,8.20 -1.17,15.80 3.51,20.49 C8.20,25.17 15.80,25.17 20.49,20.49 C25.17,15.80 25.17,8.20 20.49,3.51 L20.49,3.51 Z';

var dash = 'M20.00,16.00 L4.00,16.00 C1.80,16.00 0.00,14.20 0.00,12.00 C0.00,9.80 1.80,8.00 4.00,8.00 L20.00,8.00 C22.20,8.00 24.00,9.80 24.00,12.00 C24.00,14.20 22.20,16.00 20.00,16.00';

var edit = 'M13.39,6.02 L17.98,10.61 L7.10,21.50 L1.00,23.00 L2.50,16.90 L13.39,6.02 Z M22.05,1.95 C23.32,3.22 23.32,5.28 22.05,6.55 L19.75,8.85 L15.15,4.25 L17.45,1.95 C18.72,0.68 20.78,0.68 22.05,1.95 Z';

var ellipsis = 'M12.00,9.00 C10.34,9.00 9.00,10.34 9.00,12.00 C9.00,13.66 10.34,15.00 12.00,15.00 C13.66,15.00 15.00,13.66 15.00,12.00 C15.00,10.34 13.66,9.00 12.00,9.00 M3.00,9.00 C4.66,9.00 6.00,10.34 6.00,12.00 C6.00,13.66 4.66,15.00 3.00,15.00 C1.34,15.00 0.00,13.66 0.00,12.00 C0.00,10.34 1.34,9.00 3.00,9.00 Z M21.00,9.00 C22.66,9.00 24.00,10.34 24.00,12.00 C24.00,13.66 22.66,15.00 21.00,15.00 C19.34,15.00 18.00,13.66 18.00,12.00 C18.00,10.34 19.34,9.00 21.00,9.00 Z';

var ellipsisCircleOutline = 'M12.00,10.50 C12.90,10.50 13.50,11.10 13.50,12.00 C13.50,12.90 12.90,13.50 12.00,13.50 C11.10,13.50 10.50,12.90 10.50,12.00 C10.50,11.10 11.10,10.50 12.00,10.50 L12.00,10.50 Z M7.50,10.50 C8.40,10.50 9.00,11.10 9.00,12.00 C9.00,12.90 8.40,13.50 7.50,13.50 C6.60,13.50 6.00,12.90 6.00,12.00 C6.00,11.10 6.60,10.50 7.50,10.50 L7.50,10.50 Z M16.50,10.50 C17.40,10.50 18.00,11.10 18.00,12.00 C18.00,12.90 17.40,13.50 16.50,13.50 C15.60,13.50 15.00,12.90 15.00,12.00 C15.00,11.10 15.60,10.50 16.50,10.50 L16.50,10.50 Z M12.00,0.00 C5.40,0.00 0.00,5.40 0.00,12.00 C0.00,18.60 5.40,24.00 12.00,24.00 C18.60,24.00 24.00,18.60 24.00,12.00 C24.00,5.40 18.60,0.00 12.00,0.00 L12.00,0.00 Z M12.00,22.20 C6.45,22.20 1.80,17.70 1.80,12.00 C1.80,6.30 6.30,1.80 12.00,1.80 C17.70,1.80 22.20,6.30 22.20,12.00 C22.20,17.70 17.55,22.20 12.00,22.20 L12.00,22.20 Z';

var eye = 'M10,12 C10,13.105 10.895,14 12,14 C13.105,14 14,13.105 14,12 C14,10.895 13.105,10 12,10 C10.895,10 10,10.895 10,12 Z M12,17 C9.239,17 7,14.761 7,12 C7,9.239 9.239,7 12,7 C14.761,7 17,9.239 17,12 C17,14.761 14.761,17 12,17 M12,3.5 C6.455,3.5 1.751,7.051 0,12 C1.751,16.949 6.455,20.5 12,20.5 C17.545,20.5 22.249,16.949 24,12 C22.249,7.051 17.545,3.5 12,3.5';

var facebook = 'M16.63,24.00 L16.63,14.74 L19.73,14.74 C19.89,13.51 20.04,12.32 20.21,11.08 C20.04,11.06 19.89,11.04 19.75,11.04 C18.82,11.03 17.90,11.02 16.97,11.04 C16.68,11.04 16.59,10.95 16.60,10.66 C16.63,9.84 16.60,9.02 16.67,8.20 C16.74,7.49 17.18,7.12 17.91,7.08 C18.59,7.05 19.27,7.05 19.96,7.06 C20.24,7.06 20.34,6.97 20.34,6.68 C20.32,5.80 20.33,4.92 20.33,4.04 C20.33,3.88 20.35,3.72 20.10,3.70 C18.74,3.58 17.38,3.40 16.03,3.75 C14.24,4.20 13.17,5.40 12.91,7.20 C12.75,8.29 12.81,9.41 12.78,10.52 C12.76,11.03 12.77,11.03 12.26,11.03 C11.51,11.03 10.75,11.04 10.00,11.03 C9.71,11.02 9.62,11.12 9.62,11.41 C9.64,12.41 9.63,13.40 9.62,14.40 C9.62,14.65 9.70,14.74 9.96,14.74 C10.78,14.72 11.60,14.74 12.43,14.73 C12.67,14.72 12.78,14.77 12.78,15.05 C12.77,17.93 12.77,20.81 12.78,23.70 C12.78,23.91 12.71,24.00 12.48,24.00 C8.75,23.99 5.02,24.00 1.29,23.99 C0.58,23.99 0.03,23.42 0.01,22.71 C-0.01,22.32 0.00,21.94 0.00,21.56 C0.00,14.88 0.00,8.20 0.00,1.51 C0.00,0.51 0.52,0.00 1.52,0.00 C8.51,-0.00 15.51,-0.00 22.50,0.00 C23.48,0.00 24.00,0.52 24.00,1.50 C24.00,8.50 24.00,15.51 24.00,22.52 C24.00,23.47 23.47,24.00 22.52,24.00 C20.69,24.00 18.86,24.00 17.03,24.00 L16.63,24.00 Z';

var faceHappy = 'M16.46,10.88 C15.54,10.88 14.79,10.13 14.79,9.21 C14.79,8.28 15.54,7.53 16.46,7.53 C17.39,7.53 18.14,8.28 18.14,9.21 C18.14,10.13 17.39,10.88 16.46,10.88 M12.02,20.71 C9.08,20.71 6.64,18.75 6.67,15.81 C6.68,13.69 8.39,15.27 12.00,15.26 C15.60,15.25 17.32,13.62 17.32,15.81 C17.33,18.76 14.97,20.71 12.02,20.71 M6.09,9.21 C6.09,8.28 6.84,7.53 7.77,7.53 C8.69,7.53 9.44,8.28 9.44,9.21 C9.44,10.13 8.69,10.88 7.77,10.88 C6.84,10.88 6.09,10.13 6.09,9.21 M24.00,11.99 C23.99,5.37 18.62,0.00 12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.62,24.00 23.99,18.63 24.00,12.01 C24.00,12.01 24.00,12.00 24.00,12.00 C24.00,12.00 24.00,11.99 24.00,11.99';

var faceSad = 'M16.46,10.88 C15.54,10.88 14.79,10.13 14.79,9.21 C14.79,8.28 15.54,7.53 16.46,7.53 C17.39,7.53 18.14,8.28 18.14,9.21 C18.14,10.13 17.39,10.88 16.46,10.88 L16.46,10.88 Z M17.09,17.84 C16.81,18.44 16.09,18.70 15.49,18.42 C15.41,18.38 15.16,18.30 14.75,18.20 C14.01,18.04 13.10,17.93 12.00,17.93 C10.90,17.93 9.99,18.04 9.25,18.20 C8.84,18.30 8.59,18.38 8.51,18.42 C7.91,18.70 7.19,18.44 6.91,17.84 C6.63,17.24 6.89,16.53 7.49,16.25 C7.73,16.14 8.14,15.99 8.72,15.86 C9.63,15.66 10.72,15.53 12.00,15.53 C13.28,15.53 14.37,15.66 15.28,15.86 C15.86,15.99 16.27,16.14 16.51,16.25 C17.11,16.53 17.37,17.24 17.09,17.84 L17.09,17.84 Z M6.09,9.21 C6.09,8.28 6.84,7.53 7.77,7.53 C8.69,7.53 9.44,8.28 9.44,9.21 C9.44,10.13 8.69,10.88 7.77,10.88 C6.84,10.88 6.09,10.13 6.09,9.21 L6.09,9.21 Z M24.00,11.99 C24.00,5.37 18.62,0.00 12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.62,24.00 24.00,18.63 24.00,12.01 L24.00,12.00 L24.00,11.99 Z';

var faceSmiley = 'M16.50,11.00 C15.67,11.00 15.00,10.33 15.00,9.50 C15.00,8.67 15.67,8.00 16.50,8.00 C17.33,8.00 18.00,8.67 18.00,9.50 C18.00,10.33 17.33,11.00 16.50,11.00 M16.95,16.95 C15.63,18.27 13.87,19.00 12.00,19.00 C10.13,19.00 8.37,18.27 7.05,16.95 C6.66,16.56 6.66,15.93 7.05,15.54 C7.44,15.15 8.07,15.15 8.47,15.54 C9.41,16.48 10.66,17.00 12.00,17.00 C13.34,17.00 14.59,16.48 15.54,15.54 C15.93,15.14 16.56,15.15 16.95,15.54 C17.34,15.93 17.34,16.56 16.95,16.95 M6.00,9.50 C6.00,8.67 6.67,8.00 7.50,8.00 C8.33,8.00 9.00,8.67 9.00,9.50 C9.00,10.33 8.33,11.00 7.50,11.00 C6.67,11.00 6.00,10.33 6.00,9.50 M12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00';

var filter = 'M24.00,3.50 C24.00,2.40 23.10,1.50 22.00,1.50 L2.00,1.50 C0.90,1.50 0.00,2.40 0.00,3.50 C0.00,4.05 0.22,4.55 0.58,4.91 L0.58,4.91 L9.00,13.46 L9.00,22.50 L15.00,20.50 L15.00,13.45 L23.37,4.95 C23.76,4.59 24.00,4.07 24.00,3.50';

var flag = 'M17.00,7.50 L22.00,0.00 L2.00,0.00 L2.00,22.00 C2.00,23.10 2.90,24.00 4.00,24.00 C5.10,24.00 6.00,23.10 6.00,22.00 L6.00,15.00 L22.00,15.00 L17.00,7.50 Z';

var flashlight = 'M18.00,19.00 C18.55,19.00 19.00,18.55 19.00,18.00 L19.00,14.00 L14.00,14.00 L14.00,19.00 L18.00,19.00 Z M18.00,24.00 L14.00,24.00 L14.00,14.00 L24.00,14.00 L24.00,18.00 C24.00,21.31 21.31,24.00 18.00,24.00 L18.00,24.00 Z M6.00,19.00 L10.00,19.00 L10.00,14.00 L5.00,14.00 L5.00,18.00 C5.00,18.55 5.45,19.00 6.00,19.00 L6.00,19.00 Z M6.00,24.00 C2.69,24.00 0.00,21.31 0.00,18.00 L0.00,14.00 L10.00,14.00 L10.00,24.00 L6.00,24.00 Z M18.00,5.00 L14.00,5.00 L14.00,10.00 L19.00,10.00 L19.00,6.00 C19.00,5.45 18.55,5.00 18.00,5.00 L18.00,5.00 Z M18.00,0.00 C21.31,0.00 24.00,2.69 24.00,6.00 L24.00,10.00 L14.00,10.00 L14.00,0.00 L18.00,0.00 Z M6.00,5.00 C5.45,5.00 5.00,5.45 5.00,6.00 L5.00,10.00 L10.00,10.00 L10.00,5.00 L6.00,5.00 Z M6.00,0.00 L10.00,0.00 L10.00,10.00 L0.00,10.00 L0.00,6.00 C0.00,2.69 2.69,0.00 6.00,0.00 L6.00,0.00 Z';

var gif = 'M19.50,3.00 L4.50,3.00 C2.02,3.00 -0.00,5.03 -0.00,7.50 L-0.00,16.50 C-0.00,18.98 2.02,21.00 4.50,21.00 L19.50,21.00 C21.97,21.00 24.00,18.98 24.00,16.50 L24.00,7.50 C24.00,5.03 21.97,3.00 19.50,3.00 L19.50,3.00 Z M12.09,15.88 L12.09,8.08 L13.68,8.08 L13.68,15.88 L12.09,15.88 Z M15.54,8.08 L21.12,8.08 L21.12,9.42 L17.12,9.42 L17.12,11.30 L20.51,11.30 L20.51,12.65 L17.12,12.65 L17.12,15.88 L15.54,15.88 L15.54,8.08 Z M4.14,14.91 C3.81,14.54 3.56,14.12 3.38,13.63 C3.21,13.14 3.12,12.60 3.12,12.01 C3.12,11.35 3.23,10.75 3.45,10.21 C3.67,9.66 3.98,9.20 4.40,8.82 C4.72,8.53 5.08,8.31 5.50,8.16 C5.91,8.01 6.38,7.93 6.90,7.93 C7.39,7.93 7.83,7.99 8.22,8.12 C8.61,8.25 8.94,8.43 9.22,8.66 C9.49,8.89 9.72,9.17 9.89,9.49 C10.06,9.81 10.18,10.16 10.24,10.53 L8.69,10.53 C8.61,10.16 8.42,9.85 8.13,9.60 C7.84,9.36 7.44,9.24 6.94,9.24 C6.57,9.24 6.24,9.31 5.97,9.45 C5.70,9.59 5.47,9.79 5.28,10.04 C5.10,10.29 4.96,10.58 4.87,10.92 C4.78,11.26 4.74,11.62 4.74,12.01 C4.74,12.41 4.79,12.78 4.89,13.11 C4.99,13.45 5.14,13.74 5.32,13.99 C5.51,14.23 5.74,14.42 6.01,14.56 C6.28,14.70 6.58,14.77 6.91,14.77 C7.22,14.77 7.50,14.72 7.74,14.61 C7.99,14.51 8.20,14.38 8.38,14.21 C8.55,14.04 8.69,13.85 8.78,13.64 C8.88,13.43 8.92,13.22 8.92,13.00 L8.92,12.96 L7.05,12.96 L7.05,11.74 L10.33,11.74 L10.33,15.88 L9.14,15.88 L9.09,14.83 L9.06,14.83 C8.79,15.28 8.48,15.60 8.12,15.77 C7.75,15.95 7.34,16.04 6.87,16.04 C6.28,16.04 5.76,15.94 5.31,15.74 C4.85,15.54 4.46,15.26 4.14,14.91 Z';

var globe = 'M15.49,20.83 C16.36,18.82 16.86,16.08 16.97,13.25 L21.41,13.25 C20.95,16.71 18.63,19.58 15.49,20.83 L15.49,20.83 Z M2.59,13.25 L7.03,13.25 C7.14,16.08 7.64,18.82 8.52,20.83 C5.37,19.58 3.05,16.71 2.59,13.25 L2.59,13.25 Z M8.52,3.17 C7.64,5.18 7.14,7.92 7.03,10.75 L2.59,10.75 C3.05,7.29 5.37,4.42 8.52,3.17 L8.52,3.17 Z M9.53,10.75 C9.76,5.43 11.40,2.54 12.00,2.50 L12.01,2.50 C12.68,2.56 14.25,5.51 14.47,10.75 L9.53,10.75 Z M12.01,21.50 C12.01,21.50 12.01,21.50 12.00,21.50 C11.40,21.46 9.76,18.57 9.53,13.25 L14.47,13.25 C14.25,18.49 12.68,21.44 12.01,21.50 L12.01,21.50 Z M21.41,10.75 L16.97,10.75 C16.86,7.92 16.36,5.18 15.49,3.17 C18.63,4.42 20.95,7.29 21.41,10.75 L21.41,10.75 Z M24.00,12.00 C24.00,5.39 18.62,0.01 12.01,0.00 C12.01,0.00 12.01,0.00 12.01,0.00 L12.00,0.00 L12.00,0.00 C5.38,0.00 0.00,5.38 0.00,12.00 C0.00,18.62 5.38,24.00 12.00,24.00 L12.00,24.00 L12.01,24.00 C12.01,24.00 12.01,24.00 12.01,24.00 C18.62,24.00 24.00,18.61 24.00,12.00 L24.00,12.00 Z';

var graphBar = 'M9.50,24.00 L9.50,4.50 C9.50,3.12 10.62,2.00 12.00,2.00 C13.38,2.00 14.50,3.12 14.50,4.50 L14.50,24.00 L9.50,24.00 Z M18.00,10.50 C18.00,9.12 19.12,8.00 20.50,8.00 C21.88,8.00 23.00,9.12 23.00,10.50 L23.00,24.00 L18.00,24.00 L18.00,10.50 Z M1.00,24.00 L1.00,13.50 C1.00,12.12 2.12,11.00 3.50,11.00 C4.88,11.00 6.00,12.12 6.00,13.50 L6.00,24.00 L1.00,24.00 Z';

var knoop = 'M15.00,10.50 C14.17,10.50 13.50,9.83 13.50,9.00 C13.50,8.17 14.17,7.50 15.00,7.50 C15.83,7.50 16.50,8.17 16.50,9.00 C16.50,9.83 15.83,10.50 15.00,10.50 M15.00,16.50 C14.17,16.50 13.50,15.83 13.50,15.00 C13.50,14.17 14.17,13.50 15.00,13.50 C15.83,13.50 16.50,14.17 16.50,15.00 C16.50,15.83 15.83,16.50 15.00,16.50 M9.00,10.50 C8.17,10.50 7.50,9.83 7.50,9.00 C7.50,8.17 8.17,7.50 9.00,7.50 C9.83,7.50 10.50,8.17 10.50,9.00 C10.50,9.83 9.83,10.50 9.00,10.50 M9.00,16.50 C8.17,16.50 7.50,15.83 7.50,15.00 C7.50,14.17 8.17,13.50 9.00,13.50 C9.83,13.50 10.50,14.17 10.50,15.00 C10.50,15.83 9.83,16.50 9.00,16.50 M12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00';

var lightbulb = 'M20.00,8.00 C20.00,10.23 19.09,12.24 17.61,13.70 L17.63,13.70 C16.64,14.67 16.03,16.01 16.00,17.50 L16.00,17.50 L16.00,19.00 L8.00,19.00 L8.00,17.50 L8.00,17.50 C7.97,16.00 7.35,14.65 6.36,13.67 C4.90,12.22 4.00,10.22 4.00,8.00 C4.00,3.58 7.58,0.00 12.00,0.00 C16.42,0.00 20.00,3.58 20.00,8.00 Z M8.00,22.50 L8.00,21.00 L16.00,21.00 L16.00,22.50 C16.00,23.33 15.33,24.00 14.50,24.00 L9.50,24.00 C8.67,24.00 8.00,23.33 8.00,22.50 Z';

var handle = 'M3.00,15.00 L21.00,15.00 C21.55,15.00 22.00,15.45 22.00,16.00 C22.00,16.55 21.55,17.00 21.00,17.00 L3.00,17.00 C2.45,17.00 2.00,16.55 2.00,16.00 C2.00,15.45 2.45,15.00 3.00,15.00 Z M3.00,11.00 L21.00,11.00 C21.55,11.00 22.00,11.45 22.00,12.00 C22.00,12.55 21.55,13.00 21.00,13.00 L3.00,13.00 C2.45,13.00 2.00,12.55 2.00,12.00 C2.00,11.45 2.45,11.00 3.00,11.00 Z M3.00,7.00 L21.00,7.00 C21.55,7.00 22.00,7.45 22.00,8.00 C22.00,8.55 21.55,9.00 21.00,9.00 L3.00,9.00 C2.45,9.00 2.00,8.55 2.00,8.00 C2.00,7.45 2.45,7.00 3.00,7.00 Z';

var handPointing = 'M17.776,22.390 C13.775,23.978 9.246,22.359 7.219,18.770 C7.040,18.503 6.860,18.218 6.688,17.910 C5.132,15.163 3.028,13.782 2.588,13.581 C2.149,13.378 0.595,12.613 1.100,11.692 C1.381,11.180 2.163,10.801 2.878,10.726 C4.000,10.481 5.897,11.034 7.772,12.222 L4.054,3.419 C3.741,2.677 3.989,1.850 4.609,1.379 C4.612,1.376 4.616,1.373 4.621,1.369 C4.676,1.327 4.734,1.289 4.796,1.253 C4.810,1.247 4.821,1.239 4.835,1.231 C4.901,1.195 4.970,1.160 5.042,1.132 C5.044,1.131 5.044,1.131 5.045,1.131 C5.045,1.131 5.045,1.131 5.047,1.129 C5.119,1.101 5.193,1.079 5.267,1.060 C5.281,1.057 5.295,1.054 5.309,1.049 C5.380,1.035 5.449,1.021 5.518,1.013 C5.525,1.013 5.529,1.011 5.534,1.011 C6.317,0.928 7.093,1.347 7.406,2.088 L9.592,7.261 C9.643,6.623 10.055,6.035 10.709,5.776 C11.633,5.410 12.689,5.839 13.069,6.734 C13.071,6.742 13.074,6.752 13.077,6.759 C13.143,6.136 13.552,5.565 14.191,5.312 C15.117,4.946 16.173,5.373 16.551,6.271 C16.567,6.305 16.578,6.341 16.591,6.379 C16.680,5.784 17.079,5.249 17.695,5.006 C18.619,4.640 19.619,4.970 19.999,5.867 L20.001,5.872 C20.001,5.872 21.115,8.039 22.366,11.651 C22.413,11.791 22.457,11.931 22.495,12.072 C24.027,16.161 21.967,20.728 17.776,22.390';

var heart = 'M11.98,22.25 L1.82,11.95 C-0.28,9.83 -0.65,6.40 1.18,4.03 C3.37,1.19 7.44,1.00 9.88,3.47 L11.98,5.61 L13.93,3.63 C16.03,1.50 19.41,1.13 21.75,2.98 C24.55,5.21 24.74,9.33 22.30,11.80 L11.98,22.25 Z';

var heartBroken = 'M11.98,22.25 L1.82,11.95 C-0.28,9.83 -0.65,6.40 1.18,4.03 C3.37,1.19 7.44,1.00 9.88,3.47 L11.98,5.61 L13.93,3.63 C16.03,1.50 19.41,1.13 21.75,2.98 C24.55,5.21 24.74,9.33 22.30,11.80 L11.98,22.25 Z M15.30,9.54 C15.70,9.14 15.70,8.48 15.30,8.08 C14.90,7.68 14.25,7.68 13.85,8.08 L12.00,9.94 L10.15,8.08 C9.75,7.68 9.10,7.68 8.70,8.08 C8.30,8.48 8.30,9.14 8.70,9.54 L10.55,11.40 L8.70,13.26 C8.30,13.66 8.30,14.31 8.70,14.71 C9.10,15.11 9.75,15.12 10.15,14.71 L12.00,12.85 L13.85,14.71 C14.25,15.12 14.90,15.12 15.30,14.71 C15.70,14.31 15.70,13.66 15.30,13.26 L13.45,11.40 L15.30,9.54 Z';

var link = 'M21.00,15.05 C22.10,15.05 23.00,15.95 23.00,17.05 L23.00,21.00 C23.00,22.10 22.10,23.00 21.00,23.00 L3.00,23.00 C1.90,23.00 1.00,22.10 1.00,21.00 L1.00,3.00 C1.00,1.90 1.90,1.00 3.00,1.00 L7.00,1.00 C8.10,1.00 9.00,1.90 9.00,3.00 C9.00,4.11 8.10,5.00 7.00,5.00 L5.00,5.00 L5.00,19.00 L19.00,19.00 L19.00,17.05 C19.00,15.95 19.90,15.05 21.00,15.05 Z M12.00,14.00 C11.49,14.00 10.98,13.80 10.59,13.41 C9.80,12.63 9.80,11.37 10.59,10.59 L16.16,5.00 L14.00,5.01 L14.00,5.01 C12.90,5.01 12.00,4.11 12.00,3.01 C12.00,1.90 12.89,1.01 14.00,1.01 L20.99,1.00 L21.00,1.00 L22.99,1.00 L22.99,3.00 L22.99,3.00 L23.00,10.00 C23.00,11.10 22.11,12.00 21.00,12.00 L21.00,12.00 C19.90,12.00 19.00,11.11 19.00,10.00 L19.00,7.83 L13.41,13.41 C13.02,13.80 12.51,14.00 12.00,14.00 Z';

var location = 'M12.00,4.50 C13.66,4.50 15.00,5.84 15.00,7.50 C15.00,9.16 13.66,10.50 12.00,10.50 C10.34,10.50 9.00,9.16 9.00,7.50 C9.00,5.84 10.34,4.50 12.00,4.50 M19.50,7.50 C19.50,3.36 16.14,0.00 12.00,0.00 C7.86,0.00 4.50,3.36 4.50,7.50 C4.50,8.80 4.86,10.00 5.44,11.06 L5.40,11.06 L12.00,24.00 L18.60,11.06 L18.56,11.06 C19.14,10.00 19.50,8.80 19.50,7.50';

var lock = 'M8.00,10.00 L8.00,7.00 C8.00,4.79 9.79,3.00 12.00,3.00 C14.21,3.00 16.00,4.79 16.00,7.00 L16.00,10.00 L8.00,10.00 Z M19.00,10.02 L19.00,7.00 C19.00,3.14 15.86,0.00 12.00,0.00 C8.14,0.00 5.00,3.14 5.00,7.00 L5.00,10.02 C3.91,11.48 3.25,13.29 3.25,15.25 C3.25,20.08 7.17,24.00 12.00,24.00 C16.83,24.00 20.75,20.08 20.75,15.25 C20.75,13.29 20.09,11.48 19.00,10.02 L19.00,10.02 Z';

var maximize = 'M11.00,2.25 C11.00,2.94 10.44,3.50 9.75,3.50 L5.27,3.50 L10.63,8.87 C11.12,9.35 11.12,10.15 10.63,10.63 C10.15,11.12 9.35,11.12 8.87,10.63 L3.50,5.27 L3.50,9.75 C3.50,10.44 2.94,11.00 2.25,11.00 C1.56,11.00 1.00,10.44 1.00,9.75 L1.00,1.00 L9.75,1.00 C10.44,1.00 11.00,1.56 11.00,2.25 Z M21.75,13.00 C22.44,13.00 23.00,13.56 23.00,14.25 L23.00,23.00 L14.25,23.00 C13.56,23.00 13.00,22.44 13.00,21.75 C13.00,21.06 13.56,20.50 14.25,20.50 L18.73,20.50 L13.37,15.13 C12.88,14.65 12.88,13.85 13.37,13.37 C13.85,12.88 14.65,12.88 15.13,13.37 L20.50,18.73 L20.50,14.25 C20.50,13.56 21.06,13.00 21.75,13.00 Z';

var menu = 'M21.50,9.50 C22.88,9.50 24.00,10.63 24.00,12.00 C24.00,13.38 22.88,14.50 21.50,14.50 L2.50,14.50 C1.13,14.50 0.00,13.38 0.00,12.00 C0.00,10.63 1.13,9.50 2.50,9.50 L21.50,9.50 Z M2.50,6.50 C1.13,6.50 0.00,5.38 0.00,4.00 C0.00,2.63 1.13,1.50 2.50,1.50 L21.50,1.50 C22.88,1.50 24.00,2.63 24.00,4.00 C24.00,5.38 22.88,6.50 21.50,6.50 L2.50,6.50 Z M21.50,17.50 C22.88,17.50 24.00,18.63 24.00,20.00 C24.00,21.38 22.88,22.50 21.50,22.50 L2.50,22.50 C1.13,22.50 0.00,21.38 0.00,20.00 C0.00,18.63 1.13,17.50 2.50,17.50 L21.50,17.50 Z';

var minimize = 'M1.00,9.75 C1.00,9.06 1.56,8.50 2.25,8.50 L6.73,8.50 L1.37,3.13 C0.88,2.65 0.88,1.85 1.37,1.37 C1.85,0.88 2.65,0.88 3.13,1.37 L8.50,6.73 L8.50,2.25 C8.50,1.56 9.06,1.00 9.75,1.00 C10.44,1.00 11.00,1.56 11.00,2.25 L11.00,11.00 L2.25,11.00 C1.56,11.00 1.00,10.44 1.00,9.75 Z M14.25,23.00 C13.56,23.00 13.00,22.44 13.00,21.75 L13.00,13.00 L21.75,13.00 C22.44,13.00 23.00,13.56 23.00,14.25 C23.00,14.94 22.44,15.50 21.75,15.50 L17.27,15.50 L22.63,20.87 C23.12,21.35 23.12,22.15 22.63,22.63 C22.15,23.12 21.35,23.12 20.87,22.63 L15.50,17.27 L15.50,21.75 C15.50,22.44 14.94,23.00 14.25,23.00 Z';

var move = 'M14.30,18.17 C14.79,17.68 15.58,17.68 16.07,18.17 C16.56,18.66 16.56,19.45 16.07,19.93 L12.00,24.00 L7.93,19.93 C7.45,19.45 7.45,18.66 7.93,18.17 C8.42,17.68 9.21,17.68 9.70,18.17 L10.75,19.21 L10.75,15.25 C10.75,14.56 11.31,14.00 12.00,14.00 C12.69,14.00 13.25,14.56 13.25,15.25 L13.25,19.21 L14.30,18.17 Z M4.79,13.25 L5.83,14.30 C6.32,14.79 6.32,15.58 5.83,16.07 C5.35,16.55 4.55,16.55 4.07,16.07 L0.00,12.00 L4.07,7.93 C4.55,7.45 5.35,7.45 5.83,7.93 C6.32,8.42 6.32,9.21 5.83,9.70 L4.79,10.75 L8.75,10.75 C9.44,10.75 10.00,11.31 10.00,12.00 C10.00,12.69 9.44,13.25 8.75,13.25 L4.79,13.25 Z M19.93,7.93 L24.00,12.00 L19.93,16.07 C19.45,16.55 18.66,16.55 18.17,16.07 C17.68,15.58 17.68,14.79 18.17,14.30 L19.21,13.25 L15.25,13.25 C14.56,13.25 14.00,12.69 14.00,12.00 C14.00,11.31 14.56,10.75 15.25,10.75 L19.21,10.75 L18.17,9.70 C17.68,9.21 17.68,8.42 18.17,7.93 C18.66,7.45 19.45,7.45 19.93,7.93 Z M9.70,5.83 C9.21,6.32 8.42,6.32 7.93,5.83 C7.45,5.34 7.45,4.55 7.93,4.07 L12.00,-0.00 L16.07,4.07 C16.56,4.55 16.56,5.34 16.07,5.83 C15.58,6.32 14.79,6.32 14.30,5.83 L13.25,4.79 L13.25,8.75 C13.25,9.44 12.69,10.00 12.00,10.00 C11.31,10.00 10.75,9.44 10.75,8.75 L10.75,4.79 L9.70,5.83 Z';

var mute = 'M5.00,7.94 L5.00,7.96 L12.00,1.00 L12.00,23.00 L5.00,16.91 L5.00,16.94 L2.00,16.94 C0.90,16.94 0.00,16.04 0.00,14.94 L0.00,9.94 C0.00,8.83 0.90,7.94 2.00,7.94 L5.00,7.94 Z M23.63,14.12 C24.12,14.60 24.12,15.39 23.63,15.88 C23.15,16.37 22.35,16.37 21.87,15.88 L19.75,13.77 L17.63,15.88 C17.15,16.37 16.35,16.37 15.87,15.88 C15.38,15.39 15.38,14.60 15.87,14.12 L17.98,12.00 L15.87,9.88 C15.38,9.39 15.38,8.60 15.87,8.12 C16.35,7.63 17.15,7.63 17.63,8.12 L19.75,10.23 L21.86,8.12 C22.35,7.63 23.15,7.63 23.63,8.12 C24.12,8.60 24.12,9.40 23.63,9.88 L21.52,12.00 L23.63,14.12 Z';

var pause = 'M7.00,0.00 C8.65,0.00 10.00,1.35 10.00,3.00 L10.00,21.00 C10.00,22.65 8.65,24.00 7.00,24.00 C5.35,24.00 4.00,22.65 4.00,21.00 L4.00,3.00 C4.00,1.35 5.35,0.00 7.00,0.00 Z M17.00,0.00 C18.65,0.00 20.00,1.35 20.00,3.00 L20.00,21.00 C20.00,22.65 18.65,24.00 17.00,24.00 C15.35,24.00 14.00,22.65 14.00,21.00 L14.00,3.00 C14.00,1.35 15.35,0.00 17.00,0.00 Z';

var people = 'M18.00,14.00 C21.31,14.00 24.00,16.69 24.00,20.00 L24.00,22.00 L0.00,22.00 L0.00,19.50 C0.00,15.36 3.36,12.00 7.50,12.00 C10.22,12.00 12.59,13.45 13.91,15.62 C14.98,14.62 16.42,14.00 18.00,14.00 Z M7.50,11.00 C5.01,11.00 3.00,8.98 3.00,6.50 C3.00,4.01 5.01,2.00 7.50,2.00 C9.98,2.00 12.00,4.01 12.00,6.50 C12.00,8.98 9.98,11.00 7.50,11.00 Z M18.00,13.00 C16.34,13.00 15.00,11.66 15.00,10.00 C15.00,8.34 16.34,7.00 18.00,7.00 C19.66,7.00 21.00,8.34 21.00,10.00 C21.00,11.66 19.66,13.00 18.00,13.00 Z';

var person = 'M12.00,12.00 C6.62,12.00 2.25,16.48 2.25,22.00 L2.25,24.00 L21.75,24.00 L21.75,22.00 C21.75,16.48 17.39,12.00 12.00,12.00 M12.00,10.00 C14.69,10.00 16.88,7.76 16.88,5.00 C16.88,2.24 14.69,0.00 12.00,0.00 C9.31,0.00 7.13,2.24 7.13,5.00 C7.13,7.76 9.31,10.00 12.00,10.00';

var personAdd = 'M16.50,11.50 C14.02,11.50 12.00,9.48 12.00,7.00 C12.00,4.51 14.02,2.50 16.50,2.50 C18.98,2.50 21.00,4.51 21.00,7.00 C21.00,9.48 18.98,11.50 16.50,11.50 Z M9.25,12.50 L6.50,12.50 L6.50,15.25 C6.50,15.94 5.94,16.50 5.25,16.50 C4.56,16.50 4.00,15.94 4.00,15.25 L4.00,12.50 L1.25,12.50 C0.56,12.50 0.00,11.94 0.00,11.25 C0.00,10.56 0.56,10.00 1.25,10.00 L4.00,10.00 L4.00,7.25 C4.00,6.56 4.56,6.00 5.25,6.00 C5.94,6.00 6.50,6.56 6.50,7.25 L6.50,10.00 L9.25,10.00 C9.94,10.00 10.50,10.56 10.50,11.25 C10.50,11.94 9.94,12.50 9.25,12.50 Z M16.50,12.50 C20.64,12.50 24.00,15.86 24.00,20.00 L24.00,21.50 L9.00,21.50 L9.00,20.00 C9.00,15.86 12.36,12.50 16.50,12.50 Z';

var pin = 'M18.00,13.50 C18.00,11.28 16.79,9.35 15.00,8.31 L15.00,2.45 C16.14,2.22 17.00,1.21 17.00,0.00 L7.00,0.00 C7.00,1.21 7.86,2.22 9.00,2.45 L9.00,8.31 C7.21,9.35 6.00,11.28 6.00,13.50 L11.00,13.50 L11.00,21.96 L12.00,24.00 L13.00,21.96 L13.00,13.50 L18.00,13.50 Z';

var pinHide = 'M9.13,6.37 C9.62,6.85 9.62,7.64 9.13,8.13 L6.52,10.75 L9.13,13.37 C9.62,13.85 9.62,14.64 9.13,15.13 C8.65,15.62 7.86,15.62 7.37,15.13 L4.75,12.52 L2.13,15.13 C1.65,15.62 0.85,15.62 0.37,15.13 C-0.12,14.64 -0.12,13.85 0.37,13.37 L2.98,10.75 L0.37,8.13 C-0.12,7.64 -0.12,6.85 0.37,6.37 C0.85,5.88 1.65,5.88 2.13,6.37 L4.75,8.98 L7.37,6.37 C7.86,5.88 8.65,5.88 9.13,6.37 Z M20.50,8.69 C21.99,9.56 23.00,11.15 23.00,13.00 L19.00,13.00 L19.00,20.96 L18.00,23.00 L17.00,20.96 L17.00,13.00 L13.00,13.00 C13.00,11.15 14.01,9.56 15.50,8.69 L15.50,2.93 C14.64,2.71 14.00,1.93 14.00,1.00 L22.00,1.00 C22.00,1.93 21.36,2.71 20.50,2.93 L20.50,8.69 Z';

var pinterest = 'M0.00,12.00 C0.00,17.12 3.21,21.50 7.73,23.22 C7.62,22.28 7.50,20.74 7.75,19.65 C7.97,18.72 9.16,13.71 9.16,13.71 C9.16,13.71 8.80,13.00 8.80,11.94 C8.80,10.28 9.76,9.04 10.96,9.04 C11.98,9.04 12.47,9.80 12.47,10.72 C12.47,11.75 11.82,13.28 11.48,14.70 C11.20,15.89 12.08,16.86 13.25,16.86 C15.37,16.86 17.01,14.62 17.01,11.39 C17.01,8.53 14.95,6.53 12.02,6.53 C8.62,6.53 6.62,9.08 6.62,11.71 C6.62,12.74 7.02,13.84 7.51,14.44 C7.61,14.56 7.62,14.66 7.59,14.78 C7.50,15.16 7.30,15.97 7.26,16.14 C7.21,16.35 7.09,16.40 6.86,16.30 C5.37,15.60 4.44,13.42 4.44,11.67 C4.44,7.90 7.18,4.44 12.33,4.44 C16.48,4.44 19.70,7.39 19.70,11.34 C19.70,15.46 17.10,18.77 13.50,18.77 C12.29,18.77 11.15,18.14 10.76,17.40 C10.76,17.40 10.16,19.68 10.02,20.24 C9.73,21.32 8.95,22.69 8.47,23.47 C9.58,23.82 10.77,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00';

var play = 'M20.62,9.48 L6.63,0.48 C4.63,-0.80 2.00,0.63 2.00,3.00 L2.00,3.06 L2.00,21.00 C2.00,23.37 4.63,24.80 6.63,23.52 L20.62,14.52 C22.46,13.34 22.46,10.66 20.62,9.48';

var questionMark = 'M14.34,21.20 C14.34,22.77 13.15,24.00 11.56,24.00 C9.98,24.00 8.79,22.77 8.79,21.20 C8.79,19.63 9.98,18.40 11.56,18.40 C13.15,18.40 14.34,19.63 14.34,21.20 M11.81,10.32 C13.22,9.09 15.11,8.27 15.11,6.45 C15.11,5.00 13.87,4.09 12.16,4.09 C10.04,4.09 8.64,5.57 8.61,7.52 L3.75,7.52 C3.88,3.30 6.96,0.00 12.34,0.00 C17.20,0.00 20.25,2.52 20.25,6.32 C20.25,8.68 19.16,10.13 17.95,11.10 C16.27,12.43 15.11,12.99 14.46,13.71 C13.96,14.28 13.84,14.75 13.81,15.66 L9.45,15.66 C9.45,13.02 10.10,11.76 11.81,10.32';

var remove = 'M17.75,13.25 L6.25,13.25 C5.56,13.25 5.00,12.69 5.00,12.00 C5.00,11.31 5.56,10.75 6.25,10.75 L17.75,10.75 C18.44,10.75 19.00,11.31 19.00,12.00 C19.00,12.69 18.44,13.25 17.75,13.25 M12.00,0.00 C5.37,0.00 0.00,5.37 0.00,12.00 C0.00,18.63 5.37,24.00 12.00,24.00 C18.63,24.00 24.00,18.63 24.00,12.00 C24.00,5.37 18.63,0.00 12.00,0.00';

var report = 'M7.91,18.89 C9.11,19.60 10.51,20.01 12.00,20.01 C16.42,20.01 20.01,16.42 20.01,12.00 C20.01,10.51 19.60,9.11 18.89,7.91 L7.91,18.89 Z M5.09,16.06 L16.06,5.09 C14.87,4.39 13.48,3.99 12.00,3.99 C7.58,3.99 3.99,7.58 3.99,12.00 C3.99,13.48 4.39,14.87 5.09,16.06 Z M12.00,24.00 C5.37,24.00 0.00,18.63 0.00,12.00 C0.00,5.37 5.37,0.00 12.00,0.00 C18.63,0.00 24.00,5.37 24.00,12.00 C24.00,18.63 18.63,24.00 12.00,24.00 Z';

var search = 'M10.00,16.00 C6.69,16.00 4.00,13.31 4.00,10.00 C4.00,6.69 6.69,4.00 10.00,4.00 C13.31,4.00 16.00,6.69 16.00,10.00 C16.00,13.31 13.31,16.00 10.00,16.00 M23.12,18.88 L18.86,14.62 C19.59,13.24 20.00,11.67 20.00,10.00 C20.00,4.48 15.52,0.00 10.00,0.00 C4.48,0.00 0.00,4.48 0.00,10.00 C0.00,15.52 4.48,20.00 10.00,20.00 C11.67,20.00 13.24,19.59 14.62,18.86 L18.88,23.12 C20.05,24.29 21.95,24.29 23.12,23.12 C24.29,21.95 24.29,20.05 23.12,18.88';

var send = 'M6.00 6.00 L0.00 12.00 L7.67 14.56 L21.00 3.00 L9.44 16.34 L12.00 24.00 L18.00 18.00 L24.00 0.00 ';

var share = 'M21.00,14.00 C22.10,14.00 23.00,14.90 23.00,16.00 L23.00,22.00 C23.00,23.10 22.10,24.00 21.00,24.00 L3.00,24.00 C1.90,24.00 1.00,23.10 1.00,22.00 L1.00,16.00 C1.00,14.90 1.90,14.00 3.00,14.00 C4.10,14.00 5.00,14.90 5.00,16.00 L5.00,20.00 L19.00,20.00 L19.00,16.00 C19.00,14.90 19.90,14.00 21.00,14.00 Z M8.82,8.84 C8.04,9.62 6.77,9.63 5.99,8.84 C5.21,8.06 5.20,6.80 5.98,6.02 L11.99,0.00 L18.01,6.01 C18.79,6.79 18.80,8.06 18.02,8.84 C17.24,9.62 15.97,9.63 15.19,8.84 L13.99,7.65 L13.99,13.83 C13.99,14.93 13.10,15.83 11.99,15.83 C10.89,15.83 9.99,14.93 9.99,13.83 L9.99,7.66 L8.82,8.84 Z';

var shoppingBag = 'M9.50,5.00 C9.50,3.62 10.62,2.50 12.00,2.50 C13.38,2.50 14.50,3.62 14.50,5.00 L14.50,7.00 L9.50,7.00 L9.50,5.00 Z M17.00,7.00 L17.00,5.00 C17.00,2.24 14.76,0.00 12.00,0.00 C9.24,0.00 7.00,2.24 7.00,5.00 L7.00,7.00 L2.00,7.00 L2.00,22.00 C2.00,23.10 2.90,24.00 4.00,24.00 L20.00,24.00 C21.10,24.00 22.00,23.10 22.00,22.00 L22.00,7.00 L17.00,7.00 Z';

var smiley = 'M12.03,19.29 L11.97,19.29 C8.49,19.26 7.05,16.98 6.99,16.88 C6.74,16.47 6.85,15.92 7.26,15.66 C7.65,15.39 8.18,15.51 8.43,15.92 C8.49,16.00 9.49,17.50 12.00,17.51 C14.51,17.50 15.52,15.91 15.56,15.84 C15.81,15.43 16.34,15.30 16.74,15.56 C17.13,15.82 17.26,16.36 17.02,16.77 C16.96,16.87 15.52,19.26 12.03,19.29 Z M18.00,9.43 C18.00,10.38 17.23,11.14 16.29,11.14 C15.34,11.14 14.57,10.38 14.57,9.43 C14.57,8.48 15.34,7.71 16.29,7.71 C17.23,7.71 18.00,8.48 18.00,9.43 Z M6.00,9.43 C6.00,8.48 6.77,7.71 7.71,7.71 C8.66,7.71 9.43,8.48 9.43,9.43 C9.43,10.38 8.66,11.14 7.71,11.14 C6.77,11.14 6.00,10.38 6.00,9.43 Z';

var smileyOutline = 'M12.03,19.29 L11.97,19.29 C8.49,19.26 7.05,16.98 6.99,16.88 C6.74,16.47 6.85,15.92 7.26,15.66 C7.65,15.39 8.18,15.51 8.43,15.92 C8.49,16.00 9.49,17.50 12.00,17.51 C14.51,17.50 15.52,15.91 15.56,15.84 C15.81,15.43 16.34,15.30 16.74,15.56 C17.13,15.82 17.26,16.36 17.02,16.77 C16.96,16.87 15.52,19.26 12.03,19.29 Z M18.00,9.43 C18.00,10.38 17.23,11.14 16.29,11.14 C15.34,11.14 14.57,10.38 14.57,9.43 C14.57,8.48 15.34,7.71 16.29,7.71 C17.23,7.71 18.00,8.48 18.00,9.43 Z M6.00,9.43 C6.00,8.48 6.77,7.71 7.71,7.71 C8.66,7.71 9.43,8.48 9.43,9.43 C9.43,10.38 8.66,11.14 7.71,11.14 C6.77,11.14 6.00,10.38 6.00,9.43 Z M12.00,0.00 C5.40,0.00 0.00,5.40 0.00,12.00 C0.00,18.60 5.40,24.00 12.00,24.00 C18.60,24.00 24.00,18.60 24.00,12.00 C24.00,5.40 18.60,0.00 12.00,0.00 L12.00,0.00 Z M12.00,22.20 C6.45,22.20 1.80,17.70 1.80,12.00 C1.80,6.30 6.30,1.80 12.00,1.80 C17.70,1.80 22.20,6.30 22.20,12.00 C22.20,17.70 17.55,22.20 12.00,22.20 L12.00,22.20 Z';

var sound = 'M20.48,3.51 C22.75,5.78 24.00,8.79 24.00,12.00 C24.00,15.20 22.75,18.22 20.49,20.48 C20.24,20.73 19.92,20.85 19.60,20.85 C19.28,20.85 18.96,20.73 18.72,20.48 C18.23,20.00 18.23,19.21 18.72,18.72 C20.51,16.92 21.50,14.54 21.50,12.00 C21.50,9.46 20.51,7.07 18.71,5.28 C18.23,4.79 18.23,4.00 18.71,3.51 C19.20,3.02 19.99,3.02 20.48,3.51 Z M5.00,7.94 L5.00,7.96 L12.00,1.00 L12.00,23.00 L5.00,16.91 L5.00,16.94 L2.00,16.94 C0.90,16.94 0.00,16.04 0.00,14.94 L0.00,9.94 C0.00,8.83 0.90,7.94 2.00,7.94 L5.00,7.94 Z M16.95,7.05 C18.27,8.37 19.00,10.13 19.00,12.00 C19.00,13.87 18.27,15.63 16.95,16.95 C16.71,17.19 16.39,17.31 16.07,17.31 C15.75,17.31 15.43,17.19 15.18,16.95 C14.69,16.46 14.69,15.67 15.18,15.18 C16.03,14.33 16.50,13.20 16.50,12.00 C16.50,10.80 16.03,9.67 15.18,8.82 C14.69,8.33 14.69,7.54 15.18,7.05 C15.67,6.56 16.46,6.56 16.95,7.05 Z';

var speech = 'M12.00,0.00 C5.85,0.00 0.75,4.94 0.75,11.08 C0.75,13.78 1.65,16.32 3.45,18.27 L2.10,23.51 C1.95,23.81 2.40,24.11 2.70,23.96 L7.95,21.41 C9.30,21.86 10.65,22.16 12.00,22.16 C18.15,22.16 23.25,17.22 23.25,11.08 C23.25,4.94 18.15,0.00 12.00,0.00';

var speechEllipsis = 'M18.00,12.50 C17.17,12.50 16.50,11.83 16.50,11.00 C16.50,10.17 17.17,9.50 18.00,9.50 C18.83,9.50 19.50,10.17 19.50,11.00 C19.50,11.83 18.83,12.50 18.00,12.50 M12.00,12.50 C11.17,12.50 10.50,11.83 10.50,11.00 C10.50,10.17 11.17,9.50 12.00,9.50 C12.83,9.50 13.50,10.17 13.50,11.00 C13.50,11.83 12.83,12.50 12.00,12.50 M6.00,12.50 C5.17,12.50 4.50,11.83 4.50,11.00 C4.50,10.17 5.17,9.50 6.00,9.50 C6.83,9.50 7.50,10.17 7.50,11.00 C7.50,11.83 6.83,12.50 6.00,12.50 M12.00,0.00 C5.92,0.00 1.00,4.92 1.00,11.00 C1.00,13.65 1.94,16.09 3.50,17.99 L2.00,24.00 L7.34,20.95 C8.75,21.62 10.33,22.00 12.00,22.00 C18.07,22.00 23.00,17.07 23.00,11.00 C23.00,4.92 18.07,0.00 12.00,0.00';

var tag = 'M6.00,8.00 C7.10,8.00 8.00,7.10 8.00,6.00 C8.00,4.90 7.10,4.00 6.00,4.00 C4.90,4.00 4.00,4.90 4.00,6.00 C4.00,7.10 4.90,8.00 6.00,8.00 M13.36,1.80 L22.20,10.64 C23.27,11.70 23.27,13.43 22.20,14.49 L14.49,22.20 C13.43,23.27 11.70,23.27 10.64,22.20 L1.80,13.36 C1.29,12.85 1.00,12.16 1.00,11.44 L1.00,3.73 C1.00,2.22 2.22,1.00 3.73,1.00 L11.44,1.00 C12.16,1.00 12.85,1.29 13.36,1.80';

var icons = {
  add: add,
  'add-circle': addCircle,
  'add-pin': addPin,
  'angled-pin': angledPin,
  'arrow-back': arrowBack,
  'arrow-circle-down': arrowCircleDown,
  'arrow-circle-forward': arrowCircleForward,
  'arrow-down': arrowDown,
  'arrow-forward': arrowForward,
  'arrow-up': arrowUp,
  'arrow-up-right': arrowUpRight,
  bell: bell,
  camera: camera,
  cancel: cancel,
  check: check,
  'check-circle': checkCircle,
  'circle-outline': circleOutline,
  clear: clear,
  clock: clock,
  cog: cog,
  compass: compass,
  dash: dash,
  edit: edit,
  ellipsis: ellipsis,
  'ellipsis-circle-outline': ellipsisCircleOutline,
  eye: eye,
  facebook: facebook,
  'face-happy': faceHappy,
  'face-sad': faceSad,
  'face-smiley': faceSmiley,
  filter: filter,
  flag: flag,
  flashlight: flashlight,
  gif: gif,
  globe: globe,
  'graph-bar': graphBar,
  handle: handle,
  'hand-pointing': handPointing,
  heart: heart,
  'heart-broken': heartBroken,
  knoop: knoop,
  lightbulb: lightbulb,
  link: link,
  location: location,
  lock: lock,
  maximize: maximize,
  menu: menu,
  minimize: minimize,
  move: move,
  mute: mute,
  pause: pause,
  people: people,
  person: person,
  'person-add': personAdd,
  pin: pin,
  'pin-hide': pinHide,
  pinterest: pinterest,
  play: play,
  'question-mark': questionMark,
  remove: remove,
  report: report,
  search: search,
  'shopping-bag': shoppingBag,
  smiley: smiley,
  'smiley-outline': smileyOutline,
  send: send,
  share: share,
  sound: sound,
  speech: speech,
  'speech-ellipsis': speechEllipsis,
  tag: tag
};

var IconNames = Object.keys(icons);

function Icon(props) {
  var accessibilityLabel = props.accessibilityLabel,
      _props$color = props.color,
      color = _props$color === undefined ? 'gray' : _props$color,
      icon = props.icon,
      inline = props.inline,
      _props$size = props.size,
      size = _props$size === undefined ? 16 : _props$size,
      dangerouslySetSvgPath = props.dangerouslySetSvgPath;


  var cs = classnames(styles$1.icon, colors[color], defineProperty({}, styles$1.iconBlock, !inline));

  var path = void 0;
  if (icon) {
    path = icons[icon];
  } else if (dangerouslySetSvgPath) {
    /* eslint-disable-next-line no-underscore-dangle */
    path = dangerouslySetSvgPath.__path;
  } else {
    path = '';
  }

  var ariaHidden = accessibilityLabel === '' ? true : null;

  return React.createElement(
    'svg',
    {
      className: cs,
      height: size,
      width: size,
      viewBox: '0 0 24 24',
      'aria-hidden': ariaHidden,
      'aria-label': accessibilityLabel,
      role: 'img'
    },
    React.createElement(
      'title',
      null,
      accessibilityLabel
    ),
    React.createElement('path', { d: path })
  );
}

Icon.icons = IconNames;

Icon.propTypes = {
  accessibilityLabel: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['blue', 'darkGray', 'eggplant', 'gray', 'green', 'lightGray', 'maroon', 'midnight', 'navy', 'olive', 'orange', 'orchid', 'pine', 'purple', 'red', 'watermelon', 'white']),
  dangerouslySetSvgPath: PropTypes.shape({
    __path: PropTypes.string
  }),
  icon: PropTypes.oneOf(IconNames),
  inline: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

var styles$2 = { "img": "_ry _27 _40 _2j", "scaled-img": "_rz _2h", "contain": "_s0 _rz _2h", "cover": "_s1 _rz _2h" };

var shouldScaleImage = function shouldScaleImage(fit) {
  return fit === 'cover' || fit === 'contain';
};

var Image = function (_React$PureComponent) {
  inherits(Image, _React$PureComponent);

  function Image() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Image);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref, [this].concat(args))), _this), _this.handleLoad = function () {
      if (_this.props.onLoad) {
        _this.props.onLoad();
      }
    }, _this.handleError = function () {
      if (_this.props.onError) {
        _this.props.onError();
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Image, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (shouldScaleImage(this.props.fit)) {
        this.loadImage();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          fit = _props.fit,
          src = _props.src;

      if (shouldScaleImage(fit) && prevProps.src !== src) {
        this.loadImage();
      }
    }
  }, {
    key: 'loadImage',
    value: function loadImage() {
      if (typeof window !== 'undefined') {
        var image = new window.Image();
        image.onload = this.handleLoad;
        image.onerror = this.handleError;
        image.src = this.props.src;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          alt = _props2.alt,
          color = _props2.color,
          children = _props2.children,
          fit = _props2.fit,
          naturalHeight = _props2.naturalHeight,
          naturalWidth = _props2.naturalWidth,
          sizes = _props2.sizes,
          src = _props2.src,
          srcSet = _props2.srcSet;


      var isScaledImage = shouldScaleImage(fit);
      var childContent = children ? React.createElement(
        Box,
        { position: 'absolute', top: true, left: true, bottom: true, right: true, overflow: 'hidden' },
        children
      ) : null;

      return isScaledImage ? React.createElement(
        'div',
        {
          'aria-label': alt,
          className: styles$2[fit],
          style: {
            backgroundColor: color,
            backgroundImage: 'url(\'' + src + '\')'
          },
          role: 'img'
        },
        childContent
      ) : React.createElement(
        Box,
        {
          position: 'relative',
          dangerouslySetInlineStyle: {
            __style: {
              backgroundColor: color,
              paddingBottom: naturalHeight / naturalWidth * 100 + '%'
            }
          }
        },
        React.createElement('img', {
          alt: alt,
          className: styles$2.img,
          onError: this.handleError,
          onLoad: this.handleLoad,
          sizes: sizes,
          src: src,
          srcSet: srcSet
        }),
        childContent
      );
    }
  }]);
  return Image;
}(React.PureComponent);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  children: PropTypes.node,
  color: PropTypes.string,
  fit: PropTypes.oneOf(['contain', 'cover', 'none']),
  naturalHeight: PropTypes.number.isRequired,
  naturalWidth: PropTypes.number.isRequired,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  sizes: PropTypes.string,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string
};
Image.defaultProps = {
  color: 'transparent',
  fit: 'none'
};

var styles$3 = { "Mask": "_s2 _2b _2h", "square": "_s3 _56", "rounded": "_s4 _59", "circle": "_s5 _57", "wash": "_s6 _2j _2n _2o _2m _2l" };

function Mask(props) {
  var children = props.children,
      _props$shape = props.shape,
      shape = _props$shape === undefined ? 'square' : _props$shape,
      width = props.width,
      height = props.height,
      _props$wash = props.wash,
      wash = _props$wash === undefined ? false : _props$wash;

  return React.createElement(
    'div',
    { className: classnames(styles$3.Mask, styles$3[shape]), style: { width: width, height: height } },
    children,
    wash && React.createElement('div', { className: styles$3.wash })
  );
}

Mask.propTypes = {
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  shape: PropTypes.oneOf(['circle', 'rounded', 'square']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  wash: PropTypes.bool
};

var typography = { "antialiased": "_s7", "sansSerif": "_s8", "letterSpacing": "_s9", "leadingShort": "_sa", "leadingTall": "_sb", "fontWeightNormal": "_sc", "fontWeightBold": "_sd", "fontStyleRegular": "_se", "fontStyleItalic": "_sf", "underline": "_sg", "noUnderline": "_sh", "breakWord": "_si", "truncate": "_sj", "alignRight": "_sk", "alignRight": "_sl", "alignCenter": "_sm", "textJustify": "_sn" };

var Square = function Square(props) {
  return React.createElement(
    Box,
    _extends({}, props, { position: 'relative' }),
    React.createElement(Box, {
      dangerouslySetInlineStyle: { __style: { paddingBottom: '100%' } },
      position: 'relative'
    }),
    React.createElement(
      Box,
      { position: 'absolute', top: true, left: true, bottom: true, right: true },
      props.children
    )
  );
};

var DefaultAvatar = function DefaultAvatar(_ref) {
  var name = _ref.name;

  var firstInitial = [].concat(toConsumableArray(name))[0].toUpperCase();
  return React.createElement(
    Square,
    { color: 'gray', shape: 'circle' },
    React.createElement(
      'svg',
      {
        width: '100%',
        viewBox: '-50 -50 100 100',
        version: '1.1',
        preserveAspectRatio: 'xMidYMid meet',
        xmlns: 'http://www.w3.org/2000/svg'
      },
      React.createElement(
        'title',
        null,
        name
      ),
      React.createElement(
        'text',
        {
          fontSize: '50px',
          fill: '#fff',
          dominantBaseline: 'central',
          textAnchor: 'middle',
          className: [typography.antialiased, typography.sansSerif, typography.leadingSmall, typography.fontWeightBold].join(' ')
        },
        firstInitial
      )
    )
  );
};

var sizes = {
  sm: 24,
  md: 40,
  lg: 72
};

var Avatar = function (_React$PureComponent) {
  inherits(Avatar, _React$PureComponent);

  function Avatar() {
    var _ref2;

    var _temp, _this, _ret;

    classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref2 = Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      isImageLoaded: true
    }, _this.handleImageError = function () {
      return _this.setState({ isImageLoaded: false });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Avatar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          outline = _props.outline,
          size = _props.size,
          src = _props.src,
          verified = _props.verified;
      var isImageLoaded = this.state.isImageLoaded;

      var width = size ? sizes[size] : '100%';
      var height = size ? sizes[size] : '';
      return React.createElement(
        Box,
        _extends({
          color: 'white'
        }, outline ? {
          dangerouslySetInlineStyle: {
            __style: {
              boxShadow: '0 0 0 2px #fff'
            }
          }
        } : {}, {
          width: width,
          height: height,
          position: 'relative',
          shape: 'circle'
        }),
        src && isImageLoaded ? React.createElement(
          Mask,
          { shape: 'circle', wash: true },
          React.createElement(Image, {
            alt: name,
            color: '#EFEFEF',
            naturalHeight: 1,
            naturalWidth: 1,
            src: src,
            onError: this.handleImageError
          })
        ) : React.createElement(DefaultAvatar, { name: name }),
        verified && React.createElement(
          Box,
          {
            position: 'absolute',
            width: '20%',
            height: '20%',
            minWidth: 8,
            minHeight: 8,
            dangerouslySetInlineStyle: {
              __style: {
                bottom: '4%',
                right: '4%'
              }
            }
          },
          React.createElement(
            Box,
            {
              color: 'white',
              width: '100%',
              height: '100%',
              shape: 'circle',
              dangerouslySetInlineStyle: {
                __style: {
                  boxShadow: '0 0 0 2px #fff'
                }
              }
            },
            React.createElement(Icon, {
              color: 'red',
              icon: 'check-circle',
              accessibilityLabel: '',
              size: '100%'
            })
          )
        )
      );
    }
  }]);
  return Avatar;
}(React.PureComponent);

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  src: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  verified: PropTypes.bool
};

var styles$4 = { "button": "_so _2s", "solid": "_sp _5e", "enabled": "_sq _25 _t2", "sm": "_sr _2p", "md": "_ss _2q", "lg": "_st _2r", "block": "_su _40 _27", "inline": "_sv _29", "disabled": "_sw _5k", "gray": "_sx _5k", "red": "_sy _5g", "blue": "_sz _5w", "transparent": "_t0 _6d", "white": "_t1 _5i" };

var styles$5 = { "Text": "_ta _s7 _s8 _s9", "fontSize1": "_tb", "fontSize2": "_tc", "fontSize3": "_td", "fontSize4": "_te", "fontSize5": "_tf", "smFontSize1": "_tg", "smFontSize2": "_th", "smFontSize3": "_ti", "smFontSize4": "_tj", "smFontSize5": "_tk", "mdFontSize1": "_tl", "mdFontSize2": "_tm", "mdFontSize3": "_tn", "mdFontSize4": "_to", "mdFontSize5": "_tp", "lgFontSize1": "_tq", "lgFontSize2": "_tr", "lgFontSize3": "_ts", "lgFontSize4": "_tt", "lgFontSize5": "_tu" };

var SIZE_SCALE = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5
};

function Text(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === undefined ? 'right' : _ref$align,
      _ref$bold = _ref.bold,
      bold = _ref$bold === undefined ? false : _ref$bold,
      children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'darkGray' : _ref$color,
      _ref$inline = _ref.inline,
      inline = _ref$inline === undefined ? false : _ref$inline,
      _ref$italic = _ref.italic,
      italic = _ref$italic === undefined ? false : _ref$italic,
      _ref$overflow = _ref.overflow,
      overflow = _ref$overflow === undefined ? 'breakWord' : _ref$overflow,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 'md' : _ref$size,
      smSize = _ref.smSize,
      mdSize = _ref.mdSize,
      lgSize = _ref.lgSize,
      _ref$leading = _ref.leading,
      leading = _ref$leading === undefined ? 'short' : _ref$leading,
      _ref$truncate = _ref.truncate,
      truncate = _ref$truncate === undefined ? false : _ref$truncate,
      _ref$__dangerouslyInc = _ref.__dangerouslyIncreaseLineHeight,
      __dangerouslyIncreaseLineHeight = _ref$__dangerouslyInc === undefined ? false : _ref$__dangerouslyInc;

  var scale = SIZE_SCALE[size];
  var smScale = SIZE_SCALE[smSize];
  var mdScale = SIZE_SCALE[mdSize];
  var lgScale = SIZE_SCALE[lgSize];

  var cs = classnames(styles$5.Text, styles$5['fontSize' + scale], lgSize && styles$5['lgFontSize' + lgScale], mdSize && styles$5['mdFontSize' + mdScale], smSize && styles$5['smFontSize' + smScale], color === 'blue' && colors.blue, color === 'darkGray' && colors.darkGray, color === 'eggplant' && colors.eggplant, color === 'gray' && colors.gray, color === 'green' && colors.green, color === 'lightGray' && colors.lightGray, color === 'maroon' && colors.maroon, color === 'midnight' && colors.midnight, color === 'navy' && colors.navy, color === 'olive' && colors.olive, color === 'orange' && colors.orange, color === 'orchid' && colors.orchid, color === 'pine' && colors.pine, color === 'purple' && colors.purple, color === 'red' && colors.red, color === 'watermelon' && colors.watermelon, color === 'white' && colors.white, leading === 'short' && typography.leadingShort, (leading === 'tall' || __dangerouslyIncreaseLineHeight) && typography.leadingTall, align === 'center' && typography.alignCenter, align === 'justify' && typography.alignJustify, align === 'left' && typography.alignLeft, align === 'right' && typography.alignRight, overflow === 'breakWord' && typography.breakWord, italic && typography.fontStyleItalic, !italic && typography.fontStyleNormal, bold && typography.fontWeightBold, !bold && typography.fontWeightNormal, truncate && typography.truncate);
  var Tag = inline ? 'span' : 'div';

  return React.createElement(
    Tag,
    _extends({
      className: cs
    }, truncate && typeof children === 'string' ? { title: children } : null),
    children
  );
}

Text.propTypes = {
  __dangerouslyIncreaseLineHeight: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
  bold: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.oneOf(['green', 'pine', 'olive', 'blue', 'navy', 'midnight', 'purple', 'orchid', 'eggplant', 'maroon', 'watermelon', 'orange', 'darkGray', 'gray', 'lightGray', 'red', 'white']),
  inline: PropTypes.bool,
  italic: PropTypes.bool,
  leading: PropTypes.oneOf(['tall', 'short']),
  lgSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  mdSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  overflow: PropTypes.oneOf(['normal', 'breakWord']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  smSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  truncate: PropTypes.bool
};

function Button(props) {
  var _classnames;

  var accessibilityExpanded = props.accessibilityExpanded,
      accessibilityHaspopup = props.accessibilityHaspopup,
      accessibilityLabel = props.accessibilityLabel,
      _props$color = props.color,
      color = _props$color === undefined ? 'gray' : _props$color,
      _props$disabled = props.disabled,
      disabled = _props$disabled === undefined ? false : _props$disabled,
      _props$inline = props.inline,
      inline = _props$inline === undefined ? false : _props$inline,
      name = props.name,
      onClick = props.onClick,
      _props$size = props.size,
      size = _props$size === undefined ? 'md' : _props$size,
      text = props.text,
      _props$type = props.type,
      type = _props$type === undefined ? 'button' : _props$type;


  var textColor = {
    blue: 'white',
    gray: 'darkGray',
    red: 'white',
    transparent: 'white',
    white: 'darkGray'
  };

  var classes = classnames(styles$4.button, (_classnames = {}, defineProperty(_classnames, styles$4.sm, size === 'sm'), defineProperty(_classnames, styles$4.md, size === 'md'), defineProperty(_classnames, styles$4.lg, size === 'lg'), defineProperty(_classnames, styles$4.solid, color !== 'transparent'), defineProperty(_classnames, styles$4[color], !disabled), defineProperty(_classnames, styles$4.disabled, disabled), defineProperty(_classnames, styles$4.enabled, !disabled), defineProperty(_classnames, styles$4.inline, inline), defineProperty(_classnames, styles$4.block, !inline), _classnames));

  return React.createElement(
    'button',
    {
      'aria-expanded': accessibilityExpanded,
      'aria-haspopup': accessibilityHaspopup,
      'aria-label': accessibilityLabel,
      className: classes,
      disabled: disabled,
      name: name,
      onClick: function (_onClick) {
        function onClick(_x) {
          return _onClick.apply(this, arguments);
        }

        onClick.toString = function () {
          return _onClick.toString();
        };

        return onClick;
      }(function (event) {
        return onClick && onClick({ event: event });
      }),
      type: type
    },
    React.createElement(
      Text,
      {
        align: 'center',
        bold: true,
        color: disabled ? 'gray' : textColor[color],
        overflow: 'normal',
        size: size
      },
      text
    )
  );
}

Button.propTypes = {
  accessibilityExpanded: PropTypes.bool,
  accessibilityHaspopup: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'gray', 'red', 'transparent', 'white']),
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit'])
};

var styles$6 = { "card": "_tv _2j _59 _2l _2m _2n _2o", "hover": "_tw", "animateIn": "_tx" };

var Card = function (_React$Component) {
  inherits(Card, _React$Component);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseEnter = function (event) {
      var onMouseEnter = _this.props.onMouseEnter;

      _this.setState({ hovered: true }, onMouseEnter && function () {
        return onMouseEnter({ event: event });
      });
    }, _this.handleMouseLeave = function (event) {
      var onMouseLeave = _this.props.onMouseLeave;

      _this.setState({ hovered: false }, onMouseLeave && function () {
        return onMouseLeave({ event: event });
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Card, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          image = _props.image;
      var hovered = this.state.hovered;


      var classes = classnames(styles$6.card, defineProperty({}, styles$6.hover, active || active == null && hovered));

      return React.createElement(
        Box,
        {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          position: 'relative'
        },
        image && React.createElement(
          Box,
          { marginBottom: 1 },
          image
        ),
        React.createElement(
          Box,
          null,
          children
        ),
        React.createElement('div', { className: classes })
      );
    }
  }]);
  return Card;
}(React.Component);

Card.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  image: PropTypes.node,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

var styles$7 = { "check": "_ty _27 _2s _2t _31 _3b", "checkEnabled": "_tz _t2", "checkDarkGray": "_u0 _5o", "checkGray": "_u1 _5m", "checkLightGray": "_u2 _5k", "checkWhite": "_u3 _5i", "checkFocused": "_u4 _26", "checkSm": "_u5", "checkMd": "_u6", "input": "_u7 _2j _p6", "inputEnabled": "_u8 _t2", "inputSm": "_u9", "inputMd": "_ua" };

var Checkbox = function (_React$Component) {
  inherits(Checkbox, _React$Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false
    }, _this.handleChange = function (event) {
      var checked = event.target.checked;

      _this.props.onChange({ event: event, checked: checked });
    }, _this.handleBlur = function () {
      return _this.setState({ focused: false });
    }, _this.handleFocus = function () {
      return _this.setState({ focused: true });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Checkbox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.indeterminate) {
        this.setIndeterminate(!!this.props.indeterminate);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(previousProps) {
      if (previousProps.indeterminate !== this.props.indeterminate) {
        this.setIndeterminate(!!this.props.indeterminate);
      }
    }
  }, {
    key: 'setIndeterminate',
    value: function setIndeterminate(indeterminate) {
      if (this.input) {
        this.input.indeterminate = indeterminate;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _this2 = this,
          _classnames2;

      var _props = this.props,
          checked = _props.checked,
          disabled = _props.disabled,
          id = _props.id,
          indeterminate = _props.indeterminate,
          name = _props.name,
          size = _props.size;

      return React.createElement(
        Box,
        { position: 'relative' },
        React.createElement('input', {
          checked: checked,
          className: classnames(styles$7.input, (_classnames = {}, defineProperty(_classnames, styles$7.inputEnabled, !disabled), defineProperty(_classnames, styles$7.indeterminate, indeterminate), defineProperty(_classnames, styles$7.inputSm, size === 'sm'), defineProperty(_classnames, styles$7.inputMd, size === 'md'), _classnames)),
          disabled: disabled,
          id: id,
          name: name,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          ref: function ref(el) {
            _this2.input = el;
          },
          type: 'checkbox'
        }),
        React.createElement(
          'div',
          {
            className: classnames(styles$7.check,
            // eslint-disable-next-line no-nested-ternary
            disabled ? checked || indeterminate ? styles$7.checkGray : styles$7.checkLightGray : checked || indeterminate ? styles$7.checkDarkGray : styles$7.checkWhite, (_classnames2 = {}, defineProperty(_classnames2, styles$7.checkEnabled, !disabled), defineProperty(_classnames2, styles$7.checkFocused, this.state.focused), defineProperty(_classnames2, styles$7.checkMd, size === 'md'), defineProperty(_classnames2, styles$7.checkSm, size === 'sm'), _classnames2))
          },
          (checked || indeterminate) && React.createElement(Icon, {
            accessibilityLabel: '',
            color: 'white',
            icon: indeterminate ? 'dash' : 'check',
            size: size === 'sm' ? 8 : 12
          })
        )
      );
    }
  }]);
  return Checkbox;
}(React.Component);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  indeterminate: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['sm', 'md'])
};
Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  indeterminate: false,
  size: 'md'
};

var Collection = function (_React$PureComponent) {
  inherits(Collection, _React$PureComponent);

  function Collection() {
    classCallCheck(this, Collection);
    return possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).apply(this, arguments));
  }

  createClass(Collection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Item = _props.Item,
          layout$$1 = _props.layout,
          _props$viewportTop = _props.viewportTop,
          viewportTop = _props$viewportTop === undefined ? 0 : _props$viewportTop,
          _props$viewportLeft = _props.viewportLeft,
          viewportLeft = _props$viewportLeft === undefined ? 0 : _props$viewportLeft;

      // Calculate the full dimensions of the item layer

      var width = Math.max.apply(Math, toConsumableArray(layout$$1.map(function (item) {
        return item.left + item.width;
      })));
      var height = Math.max.apply(Math, toConsumableArray(layout$$1.map(function (item) {
        return item.top + item.height;
      })));

      // Default the viewport to being the full width of the content layer
      var _props2 = this.props,
          _props2$viewportWidth = _props2.viewportWidth,
          viewportWidth = _props2$viewportWidth === undefined ? width : _props2$viewportWidth,
          _props2$viewportHeigh = _props2.viewportHeight,
          viewportHeight = _props2$viewportHeigh === undefined ? height : _props2$viewportHeigh;

      // Calculates which items from the item layer to render in the viewport
      // layer.

      var items = layout$$1.reduce(function (acc, position, idx) {
        if (position.top + position.height > viewportTop && position.top < viewportHeight + viewportTop && position.left < viewportWidth + viewportLeft && position.left + position.width > viewportLeft) {
          acc.push(_extends({ idx: idx }, position));
        }
        return acc;
      }, []);

      return React.createElement(
        'div',
        { className: layout.relative, style: { width: width, height: height } },
        items.map(function (_ref) {
          var idx = _ref.idx,
              style = objectWithoutProperties(_ref, ['idx']);
          return React.createElement(
            'div',
            { key: idx, className: layout.absolute, style: style },
            React.createElement(Item, { idx: idx })
          );
        })
      );
    }
  }]);
  return Collection;
}(React.PureComponent);

Collection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  Item: PropTypes.any,
  layout: PropTypes.arrayOf(PropTypes.exact({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired),
  viewportHeight: PropTypes.number,
  viewportLeft: PropTypes.number,
  viewportTop: PropTypes.number,
  viewportWidth: PropTypes.number
};
Collection.defaultProps = {
  layout: [],
  viewportLeft: 0,
  viewportTop: 0
};

var styles$8 = { "deprecatedColumn": "_ub", "xsCol0": "_uc", "xsCol1": "_ud _3p", "xsCol2": "_ue _3q", "xsCol3": "_uf _3r", "xsCol4": "_ug _3s", "xsCol5": "_uh _3t", "xsCol6": "_ui _3u", "xsCol7": "_uj _3v", "xsCol8": "_uk _3w", "xsCol9": "_ul _3x", "xsCol10": "_um _3y", "xsCol11": "_un _3z", "xsCol12": "_uo _40", "smCol0": "_up", "smCol1": "_uq _41", "smCol2": "_ur _42", "smCol3": "_us _43", "smCol4": "_ut _44", "smCol5": "_uu _45", "smCol6": "_uv _46", "smCol7": "_uw _47", "smCol8": "_ux _48", "smCol9": "_uy _49", "smCol10": "_uz _4a", "smCol11": "_v0 _4b", "smCol12": "_v1 _4c", "mdCol0": "_v2", "mdCol1": "_v3 _4d", "mdCol2": "_v4 _4e", "mdCol3": "_v5 _4f", "mdCol4": "_v6 _4g", "mdCol5": "_v7 _4h", "mdCol6": "_v8 _4i", "mdCol7": "_v9 _4j", "mdCol8": "_va _4k", "mdCol9": "_vb _4l", "mdCol10": "_vc _4m", "mdCol11": "_vd _4n", "mdCol12": "_ve _4o", "lgCol0": "_vf", "lgCol1": "_vg _4p", "lgCol2": "_vh _4q", "lgCol3": "_vi _4r", "lgCol4": "_vj _4s", "lgCol5": "_vk _4t", "lgCol6": "_vl _4u", "lgCol7": "_vm _4v", "lgCol8": "_vn _4w", "lgCol9": "_vo _4x", "lgCol10": "_vp _4y", "lgCol11": "_vq _4z", "lgCol12": "_vr _50" };

function Column(props) {
  var children = props.children;

  var cs = classnames((props.xs || props.sm || props.md || props.lg) && styles$8.deprecatedColumn, props.xs && styles$8['xsCol' + props.xs], props.sm && styles$8['smCol' + props.sm], props.md && styles$8['mdCol' + props.md], props.lg && styles$8['lgCol' + props.lg], props.span != null && styles$8['xsCol' + props.span], props.smSpan != null && styles$8['smCol' + props.smSpan], props.mdSpan != null && styles$8['mdCol' + props.mdSpan], props.lgSpan != null && styles$8['lgCol' + props.lgSpan]);
  return React.createElement(
    'div',
    { className: cs },
    children
  );
}

Column.propTypes = {
  children: PropTypes.node,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  span: PropTypes.number,
  smSpan: PropTypes.number,
  mdSpan: PropTypes.number,
  lgSpan: PropTypes.number
};

function Container(props) {
  var children = props.children;

  return React.createElement(
    Box,
    { justifyContent: 'center', display: 'flex' },
    React.createElement(
      Box,
      { maxWidth: 200, width: '100%' },
      children
    )
  );
}

Container.propTypes = {
  children: PropTypes.node
};

var styles$9 = { "divider": "_vs _27 _52 _p6" };

function Divider() {
  return React.createElement('hr', { className: styles$9.divider });
}

function Caret(props) {
  var direction = props.direction;

  var path = void 0;
  switch (direction) {
    case 'up':
      path = 'M0 0 L12 12 L24 0';
      break;
    case 'right':
      path = 'M24 0 L12 12 L24 24';
      break;
    case 'down':
      path = 'M0 24 L12 12 L24 24';
      break;
    case 'left':
      path = 'M0 0 L12 12 L0 24';
      break;
    default:
  }

  return React.createElement(
    'svg',
    { width: '24', height: '24' },
    React.createElement('path', { d: path })
  );
}

Caret.propTypes = {
  direction: PropTypes.oneOf(['up', 'right', 'down', 'left'])
};

var styles$10 = { "container": "_vt _2j", "contents": "_vu _2j _27 _2s _59", "dimensions": "_vv", "innerContents": "_vw _2t _2f _59", "caret": "_vx _2j" };

/* Needed until this Flow issue is fixed: https://github.com/facebook/flow/issues/380 */
/* eslint quote-props: 0 */
var SPACES_INDEX_MAP = {
  '0': 'up',
  '1': 'right',
  '2': 'down',
  '3': 'left'
};

var DIR_INDEX_MAP = {
  up: 0,
  right: 1,
  down: 2,
  left: 3
};

var MARGIN = 24;
var CARET_HEIGHT = 24;
var CARET_OFFSET_FROM_SIDE = 24;
var BORDER_RADIUS = 8;

/**
 * Determines the main direction the flyout opens
 */
function getMainDir(flyoutSize, idealDirection, triggerRect, windowSize) {
  // Calculates the available space if we were to place the flyout in the 4 main directions
  // to determine which 'quadrant' to position the flyout inside of
  var up = triggerRect.top - flyoutSize.height - CARET_HEIGHT;
  var right = windowSize.width - flyoutSize.width - CARET_HEIGHT - triggerRect.right;
  var down = windowSize.height - flyoutSize.height - CARET_HEIGHT - triggerRect.bottom;
  var left = triggerRect.left - flyoutSize.width - CARET_HEIGHT;

  // overrides available space when the trigger is close to the edge of the screen
  // trigger is too close to top/bottom of screen for left & right flyouts
  if (triggerRect.top < BORDER_RADIUS || windowSize.height - triggerRect.bottom < BORDER_RADIUS) {
    left = 0;
    right = 0;
  }

  // trigger is too close to the left/right of screen for up & down flyouts
  if (triggerRect.left < BORDER_RADIUS || windowSize.width - triggerRect.right < BORDER_RADIUS) {
    up = 0;
    down = 0;
  }

  var spaces = [up, right, down, left];

  // Identify best direction of available spaces
  var max = Math.max.apply(Math, spaces);

  // Chose the main direction for the flyout based on available spaces & user preference
  var mainDir = void 0;
  if (idealDirection && spaces[DIR_INDEX_MAP[idealDirection]] > 0) {
    // user pref
    mainDir = idealDirection;
  } else {
    // If no direction pref, chose the direction in which there is the most space available
    mainDir = SPACES_INDEX_MAP[spaces.indexOf(max)];
  }
  return mainDir;
}

/**
 * Determines the sub direction of how the flyout is positioned within the main dir
 */
function getSubDir(flyoutSize, mainDir, triggerRect, windowSize) {
  // Now that we have the main direction, chose from 3 caret placements for that direction
  var offset = void 0;
  var triggerMid = void 0;
  var windowSpaceAvailable = void 0;

  if (mainDir === 'right' || mainDir === 'left') {
    offset = flyoutSize.height / 2;
    triggerMid = triggerRect.top + (triggerRect.bottom - triggerRect.top) / 2;
    windowSpaceAvailable = windowSize.height;
  } else {
    // (mainDir === 'up' || mainDir === 'down')
    offset = flyoutSize.width / 2;
    triggerMid = triggerRect.left + (triggerRect.right - triggerRect.left) / 2;
    windowSpaceAvailable = windowSize.width;
  }

  var aboveOrLeft = triggerMid - offset - MARGIN;
  var belowOrRight = windowSpaceAvailable - triggerMid - offset - MARGIN;
  var subDir = void 0;
  if (aboveOrLeft > 0 && belowOrRight > 0) {
    // caret should go in middle b/c it can
    subDir = 'middle';
  } else if (belowOrRight > 0) {
    // caret should go at top for left/right and left for up/down
    subDir = mainDir === 'left' || mainDir === 'right' ? 'up' : 'left';
  } else {
    // caret should go at bottom for left/right and right for up/down
    subDir = mainDir === 'left' || mainDir === 'right' ? 'down' : 'right';
  }
  return subDir;
}

/**
 * Calculates the amount the flyout & caret need to shift over to align with designs
 */
function calcEdgeShifts(subDir, triggerRect, windowSize) {
  // Target values for flyout and caret shifts
  var flyoutVerticalShift = CARET_OFFSET_FROM_SIDE - (triggerRect.height - CARET_HEIGHT) / 2;
  var flyoutHorizontalShift = CARET_OFFSET_FROM_SIDE - (triggerRect.width - CARET_HEIGHT) / 2;
  var caretVerticalShift = CARET_HEIGHT;
  var caretHorizontalShift = CARET_HEIGHT;

  // Covers edge case where trigger is in a corner and we need to adjust the offset of the caret
  // to something smaller than normal in order
  var isCloseVertically = triggerRect.top - flyoutVerticalShift < 0 || triggerRect.bottom + flyoutVerticalShift > windowSize.height;
  var isCloseHorizontally = triggerRect.left - flyoutHorizontalShift < 0 || triggerRect.right + flyoutHorizontalShift > windowSize.width;
  if (isCloseVertically) {
    flyoutVerticalShift = BORDER_RADIUS - (triggerRect.height - CARET_HEIGHT) / 2;
    caretVerticalShift = BORDER_RADIUS;
  }
  if (isCloseHorizontally) {
    flyoutHorizontalShift = BORDER_RADIUS - (triggerRect.width - CARET_HEIGHT) / 2;
    caretHorizontalShift = BORDER_RADIUS;
  }

  return {
    flyout: {
      x: flyoutHorizontalShift,
      y: flyoutVerticalShift
    },
    caret: {
      x: caretHorizontalShift,
      y: caretVerticalShift
    }
  };
}

/**
 * Calculates flyout and caret offsets for styling
 */
function adjustOffsets(base, edgeShift, flyoutSize, mainDir, subDir, triggerRect) {
  var flyoutLeft = base.left;
  var flyoutTop = base.top;

  var caretTop = mainDir === 'down' ? -CARET_HEIGHT : null;
  var caretRight = mainDir === 'left' ? -CARET_HEIGHT : null;
  var caretBottom = null;
  var caretLeft = mainDir === 'right' ? -CARET_HEIGHT : null;

  if (subDir === 'up') {
    flyoutTop = base.top - edgeShift.flyout.y;
    caretTop = edgeShift.caret.y;
  } else if (subDir === 'down') {
    flyoutTop = base.top - flyoutSize.height + triggerRect.height + edgeShift.flyout.y;
    caretBottom = edgeShift.caret.y;
  } else if (subDir === 'left') {
    flyoutLeft = base.left - edgeShift.flyout.x;
    caretLeft = edgeShift.caret.x;
  } else if (subDir === 'right') {
    flyoutLeft = base.left - flyoutSize.width + triggerRect.width + edgeShift.flyout.x;
    caretRight = edgeShift.caret.x;
  } else if (subDir === 'middle') {
    if (mainDir === 'left' || mainDir === 'right') {
      var triggerMid = flyoutTop + triggerRect.height / 2;
      flyoutTop = triggerMid - flyoutSize.height / 2;
      caretTop = (flyoutSize.height - CARET_HEIGHT) / 2;
    }
    if (mainDir === 'up' || mainDir === 'down') {
      var _triggerMid = flyoutLeft + triggerRect.width / 2;
      flyoutLeft = _triggerMid - flyoutSize.width / 2;
      caretLeft = (flyoutSize.width - CARET_HEIGHT) / 2;
    }
  }

  return {
    flyoutOffset: {
      top: flyoutTop,
      left: flyoutLeft
    },
    caretOffset: {
      top: caretTop,
      right: caretRight,
      bottom: caretBottom,
      left: caretLeft
    }
  };
}

/* Calculates baseline top and left offset for flyout */
function baseOffsets(relativeOffset, flyoutSize, mainDir, triggerRect, windowSize) {
  var HALF_CARET = CARET_HEIGHT / 2;
  // TOP OFFSET
  var top = void 0;
  if (mainDir === 'down') {
    top = windowSize.scrollY + triggerRect.bottom + HALF_CARET;
  } else if (mainDir === 'up') {
    top = windowSize.scrollY + (triggerRect.top - flyoutSize.height - HALF_CARET);
  } else {
    // left and right
    top = windowSize.scrollY + triggerRect.top;
  }

  // LEFT OFFSET
  var left = void 0;
  if (mainDir === 'left') {
    left = windowSize.scrollX + (triggerRect.left - flyoutSize.width - HALF_CARET);
  } else if (mainDir === 'right') {
    left = windowSize.scrollX + triggerRect.right + HALF_CARET;
  } else {
    // down and up
    left = windowSize.scrollX + triggerRect.left;
  }

  // Adjusts for the relative parent container
  top -= relativeOffset.y;
  left -= relativeOffset.x;
  return { top: top, left: left };
}

var Contents = function (_React$Component) {
  inherits(Contents, _React$Component);

  function Contents() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Contents);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Contents.__proto__ || Object.getPrototypeOf(Contents)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      flyoutOffset: {
        top: undefined,
        right: undefined,
        bottom: undefined,
        left: undefined
      },
      caretOffset: {
        top: undefined,
        right: undefined,
        bottom: undefined,
        left: undefined
      },
      mainDir: null
    }, _this.setFlyoutPosition = function (props) {
      var relativeOffset = props.relativeOffset,
          idealDirection = props.idealDirection,
          positionRelativeToAnchor = props.positionRelativeToAnchor,
          triggerRect = props.triggerRect,
          width = props.width;

      // Scroll not needed for relative elements
      // We can't use window.scrollX / window.scrollY since it's not supported by IE11

      var scrollX = positionRelativeToAnchor ? 0 : window.pageXOffset || document.documentElement && document.documentElement.scrollLeft || 0;
      var scrollY = positionRelativeToAnchor ? 0 : window.pageYOffset || document.documentElement && document.documentElement.scrollTop || 0;

      var windowSize = {
        height: window.innerHeight,
        width: window.innerWidth,
        scrollX: scrollX,
        scrollY: scrollY
      };

      var flyoutSize = {
        height: _this.flyout ? _this.flyout.clientHeight : 0,
        width: width
      };

      // First choose one of 4 main direction
      var mainDir = getMainDir(flyoutSize, idealDirection, triggerRect, windowSize);

      // Now that we have the main direction, chose from 3 caret placements for that direction
      var subDir = getSubDir(flyoutSize, mainDir, triggerRect, windowSize);

      // Gets the base offset that positions the flyout based on the main direction only
      var base = baseOffsets(relativeOffset, flyoutSize, mainDir, triggerRect, windowSize);

      // Gets the edge shifts for the flyout
      var edgeShifts = calcEdgeShifts(subDir, triggerRect, windowSize);

      // Adjusts for the subdirection of the caret

      var _adjustOffsets = adjustOffsets(base, edgeShifts, flyoutSize, mainDir, subDir, triggerRect),
          flyoutOffset = _adjustOffsets.flyoutOffset,
          caretOffset = _adjustOffsets.caretOffset;

      _this.setState({
        caretOffset: caretOffset,
        flyoutOffset: flyoutOffset,
        mainDir: mainDir
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Contents, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.setFlyoutPosition(this.props);
      setTimeout(function () {
        if (_this2.props.shouldFocus && _this2.flyout) {
          _this2.flyout.focus();
        }
      });
      document.addEventListener('click', this.props.onClick, true);
      window.addEventListener('resize', this.props.onResize);
      window.addEventListener('keydown', this.props.onKeyDown);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setFlyoutPosition(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.props.onClick, true);
      window.removeEventListener('resize', this.props.onResize);
      window.removeEventListener('keydown', this.props.onKeyDown);
    }

    /**
     * Determines the main direciton, sub direction, and corresponding offsets needed
     * to correctly position the offset
     */

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          bgColor = _props.bgColor,
          children = _props.children,
          width = _props.width;

      // Needed to prevent UI thrashing

      var visibility = this.state.mainDir === null ? 'hidden' : 'visible';
      var background = bgColor + 'Bg';
      var stroke = bgColor === 'white' ? '#efefef' : null;
      var borderColor = bgColor === 'white' ? 'lightGray' : bgColor;

      return React.createElement(
        'div',
        {
          className: styles$10.container,
          style: _extends({ stroke: stroke, visibility: visibility }, this.state.flyoutOffset)
        },
        React.createElement(
          'div',
          {
            className: classnames(colors[background], colors[borderColor], styles$10.dimensions, styles$10.contents),
            ref: function ref(c) {
              _this3.flyout = c;
            },
            tabIndex: -1
          },
          React.createElement(
            'div',
            {
              className: classnames(styles$10.dimensions, styles$10.innerContents),
              style: { width: width }
            },
            children
          ),
          React.createElement(
            'div',
            {
              className: classnames(colors[bgColor], styles$10.caret),
              style: _extends({}, this.state.caretOffset)
            },
            React.createElement(Caret, { direction: this.state.mainDir })
          )
        )
      );
    }
  }]);
  return Contents;
}(React.Component);
Contents.propTypes = {
  bgColor: PropTypes.oneOf(['darkGray', 'white', 'orange']),
  children: PropTypes.node,
  idealDirection: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onResize: PropTypes.func.isRequired,
  relativeOffset: PropTypes.exact({ x: PropTypes.number, y: PropTypes.number }),
  positionRelativeToAnchor: PropTypes.bool,
  shouldFocus: PropTypes.bool,
  triggerRect: PropTypes.exact({
    bottom: PropTypes.number,
    height: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
    width: PropTypes.number
  }),
  width: PropTypes.number
};

var SIZE_WIDTH_MAP = {
  xs: 185,
  sm: 230,
  md: 284,
  lg: 320,
  xl: 375
};

var ESCAPE_KEY_CODE = 27;

var Controller = function (_React$Component) {
  inherits(Controller, _React$Component);

  function Controller() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Controller);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Controller.__proto__ || Object.getPrototypeOf(Controller)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      relativeOffset: {
        x: 0,
        y: 0
      },
      triggerBoundingRect: {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0
      }
    }, _this.handleKeyDown = function (event) {
      if (event.keyCode === ESCAPE_KEY_CODE) {
        _this.props.onDismiss();
      }
    }, _this.handlePageClick = function (event) {
      if (event.target instanceof Node && _this.props.anchor && !_this.props.anchor.contains(event.target) && _this.contents && !_this.contents.contains(event.target)) {
        _this.props.onDismiss();
      }
    }, _this.handleResize = function () {
      _this.updateTriggerRect(_this.props);
    }, _this.updateTriggerRect = function (props) {
      var anchor = props.anchor,
          positionRelativeToAnchor = props.positionRelativeToAnchor;

      var triggerBoundingRect = void 0;
      var relativeOffset = void 0;
      if (anchor) {
        triggerBoundingRect = anchor.getBoundingClientRect();

        // Needed for correct positioning within Contents.js
        relativeOffset = {
          x: positionRelativeToAnchor ? triggerBoundingRect.left - anchor.offsetLeft : 0,
          y: positionRelativeToAnchor ? triggerBoundingRect.top - anchor.offsetTop : 0
        };
      }

      _this.setState({ relativeOffset: relativeOffset, triggerBoundingRect: triggerBoundingRect });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Controller, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateTriggerRect(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updateTriggerRect(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          anchor = _props.anchor,
          bgColor = _props.bgColor,
          children = _props.children,
          idealDirection = _props.idealDirection,
          positionRelativeToAnchor = _props.positionRelativeToAnchor,
          shouldFocus = _props.shouldFocus;

      if (!anchor) {
        return null;
      }
      var size = this.props.size ? this.props.size : 'sm';
      var width = typeof size === 'string' ? SIZE_WIDTH_MAP[size] : size;
      return React.createElement(
        Box,
        null,
        React.createElement(
          'div',
          {
            ref: function ref(c) {
              _this2.contents = c;
            }
          },
          this.contents ? React.createElement(
            Contents,
            {
              bgColor: bgColor,
              idealDirection: idealDirection,
              onClick: this.handlePageClick,
              onKeyDown: this.handleKeyDown,
              onResize: this.handleResize,
              positionRelativeToAnchor: positionRelativeToAnchor,
              relativeOffset: this.state.relativeOffset,
              shouldFocus: shouldFocus,
              triggerRect: this.state.triggerBoundingRect,
              width: width
            },
            children
          ) : null
        )
      );
    }
  }]);
  return Controller;
}(React.Component);


Controller.propTypes = {
  anchor: PropTypes.shape({
    contains: PropTypes.func,
    getBoundingClientRect: PropTypes.func
  }),
  bgColor: PropTypes.oneOf(['darkGray', 'white', 'orange']),
  children: PropTypes.node,
  idealDirection: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  onDismiss: PropTypes.func.isRequired,
  positionRelativeToAnchor: PropTypes.bool,
  shouldFocus: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])] // default: sm
  )
};

function ErrorFlyout(props) {
  var anchor = props.anchor,
      id = props.id,
      idealDirection = props.idealDirection,
      message = props.message,
      onDismiss = props.onDismiss,
      _props$positionRelati = props.positionRelativeToAnchor,
      positionRelativeToAnchor = _props$positionRelati === undefined ? true : _props$positionRelati,
      size = props.size;


  if (!anchor) {
    return null;
  }

  return React.createElement(
    Controller,
    {
      anchor: anchor,
      bgColor: 'orange',
      idealDirection: idealDirection,
      onDismiss: onDismiss,
      positionRelativeToAnchor: positionRelativeToAnchor,
      size: size
    },
    React.createElement(
      Box,
      { padding: 3 },
      React.createElement(
        Text,
        { bold: true, color: 'white' },
        React.createElement(
          'span',
          { id: id },
          message
        )
      )
    )
  );
}

ErrorFlyout.propTypes = {
  anchor: PropTypes.shape({
    contains: PropTypes.func,
    getBoundingClientRect: PropTypes.func
  }),
  idealDirection: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  message: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  positionRelativeToAnchor: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

var Flyout = function (_React$PureComponent) {
  inherits(Flyout, _React$PureComponent);

  function Flyout() {
    classCallCheck(this, Flyout);
    return possibleConstructorReturn(this, (Flyout.__proto__ || Object.getPrototypeOf(Flyout)).apply(this, arguments));
  }

  createClass(Flyout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          anchor = _props.anchor,
          children = _props.children,
          idealDirection = _props.idealDirection,
          _props$positionRelati = _props.positionRelativeToAnchor,
          positionRelativeToAnchor = _props$positionRelati === undefined ? true : _props$positionRelati,
          onDismiss = _props.onDismiss,
          size = _props.size;


      if (!anchor) {
        return null;
      }

      return React.createElement(
        Controller,
        {
          anchor: anchor,
          bgColor: 'white',
          idealDirection: idealDirection,
          onDismiss: onDismiss,
          positionRelativeToAnchor: positionRelativeToAnchor,
          shouldFocus: true,
          size: size
        },
        children
      );
    }
  }]);
  return Flyout;
}(React.PureComponent);


Flyout.propTypes = {
  anchor: PropTypes.shape({
    contains: PropTypes.func,
    getBoundingClientRect: PropTypes.func
  }),
  children: PropTypes.node,
  idealDirection: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  onDismiss: PropTypes.func.isRequired,
  positionRelativeToAnchor: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])] // default: sm
  )
};

var styles$11 = { "wash": "_vy _2j _2l _2o _2m _2n" };

var BORDER_WIDTH = 2;

var AVATAR_SIZES = {
  sm: 24,
  md: 40,
  lg: 72
};

var DEFAULT_AVATAR_TEXT_SIZES = {
  sm: 7,
  md: 11,
  lg: 21
};

var avatarLayout = function avatarLayout(n, size) {
  switch (n) {
    case 0:
    case 1:
      return [{ top: 0, left: 0, width: size, height: size }];
    case 2:
      return [{
        top: 0,
        left: 0,
        width: size / 2 - BORDER_WIDTH / 2,
        height: size
      }, {
        top: 0,
        left: size / 2 + BORDER_WIDTH / 2,
        width: size / 2 - BORDER_WIDTH / 2,
        height: size
      }];
    default:
      return [{
        top: 0,
        left: 0,
        width: size / 2 - BORDER_WIDTH / 2,
        height: size
      }, {
        top: 0,
        left: size / 2 + BORDER_WIDTH / 2,
        width: size / 2,
        height: size / 2 - BORDER_WIDTH / 2
      }, {
        top: size / 2 + BORDER_WIDTH / 2,
        left: size / 2 + BORDER_WIDTH / 2,
        width: size / 2,
        height: size / 2 - BORDER_WIDTH / 2
      }];
  }
};

var degToRad = function degToRad(deg) {
  return deg * (Math.PI / 180);
};

var DefaultAvatar$1 = function DefaultAvatar(props) {
  var fontSize = props.fontSize,
      height = props.height,
      name = props.name,
      textLayout = props.textLayout;

  var size = AVATAR_SIZES[props.size];

  var quarterPadding = Math.floor((size / 2 - fontSize) / 2 * Math.sin(degToRad(45)));

  var initial = React.createElement(
    Text,
    { bold: true, color: 'white' },
    React.createElement(
      Box,
      {
        dangerouslySetInlineStyle: {
          __style: {
            fontSize: fontSize,
            lineHeight: fontSize + 'px'
          }
        }
      },
      [].concat(toConsumableArray(name))[0].toUpperCase()
    )
  );

  switch (textLayout) {
    case 'bottomLeft':
      return React.createElement(
        Box,
        {
          'aria-label': name,
          color: 'gray',
          height: height,
          display: 'flex',
          alignItems: 'end',
          dangerouslySetInlineStyle: {
            __style: {
              padding: quarterPadding
            }
          }
        },
        initial
      );
    case 'topLeft':
      return React.createElement(
        Box,
        {
          'aria-label': name,
          color: 'gray',
          height: height,
          display: 'flex',
          alignItems: 'start',
          dangerouslySetInlineStyle: {
            __style: {
              padding: quarterPadding
            }
          }
        },
        initial
      );
    default:
      return React.createElement(
        Box,
        {
          'aria-label': name,
          color: 'gray',
          height: height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        initial
      );
  }
};

function GroupAvatar(props) {
  var collaborators = props.collaborators,
      outline = props.outline,
      size = props.size;

  var layout = avatarLayout(collaborators.length, AVATAR_SIZES[size]);
  var avatarSize = AVATAR_SIZES[size];
  return React.createElement(
    Box,
    {
      color: 'white',
      height: avatarSize,
      overflow: 'hidden',
      shape: 'circle',
      width: avatarSize,
      dangerouslySetInlineStyle: {
        __style: _extends({}, outline ? { boxShadow: '0 0 0 2px #fff' } : {}, {
          // willChange: transform fixes a strange behavior where the border of the children
          // are not properly trimmed even though overflow: hidden is set
          willChange: 'transform'
        })
      }
    },
    React.createElement(Collection, {
      layout: layout,
      Item: function Item(_ref) {
        var idx = _ref.idx;

        var fontSize = collaborators.length <= 1 ? DEFAULT_AVATAR_TEXT_SIZES[props.size] * 2 : DEFAULT_AVATAR_TEXT_SIZES[props.size];

        if (!collaborators[idx]) {
          return React.createElement(DefaultAvatar$1, {
            name: ' ',
            fontSize: fontSize,
            textLayout: 'center',
            height: layout[0].height,
            size: size
          });
        }

        var _collaborators$idx = collaborators[idx],
            name = _collaborators$idx.name,
            src = _collaborators$idx.src;
        var _layout$idx = layout[idx],
            width = _layout$idx.width,
            height = _layout$idx.height;

        if (!src) {
          return React.createElement(DefaultAvatar$1, {
            name: name,
            fontSize: fontSize,
            textLayout: collaborators.length >= 3 ? ['center', 'bottomLeft', 'topLeft'][idx] : 'center',
            height: height,
            size: size
          });
        }
        return React.createElement(
          Box,
          { position: 'relative', width: width, height: height },
          React.createElement(Image, {
            alt: name,
            color: '#EFEFEF',
            src: src,
            naturalWidth: 1,
            naturalHeight: 1,
            fit: 'cover'
          }),
          React.createElement('div', { className: styles$11.wash })
        );
      }
    })
  );
}

GroupAvatar.propTypes = {
  collaborators: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    src: PropTypes.string
  })).isRequired,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired
};

var styles$12 = { "Heading": "_vz _s7 _s8 _s9 _sa", "fontSize1": "_w0", "fontSize2": "_w1", "fontSize3": "_w2", "fontSize4": "_w3", "fontSize5": "_w4", "smFontSize1": "_w5", "smFontSize2": "_w6", "smFontSize3": "_w7", "smFontSize4": "_w8", "smFontSize5": "_w9", "mdFontSize1": "_wa", "mdFontSize2": "_wb", "mdFontSize3": "_wc", "mdFontSize4": "_wd", "mdFontSize5": "_we", "lgFontSize1": "_wf", "lgFontSize2": "_wg", "lgFontSize3": "_wh", "lgFontSize4": "_wi", "lgFontSize5": "_wj" };

var defaultHeadingLevels = {
  xs: 5,
  sm: 4,
  md: 3,
  lg: 2,
  xl: 1
};

var SIZE_SCALE$1 = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5
};

function Heading(props) {
  var accessibilityLevel = props.accessibilityLevel,
      children = props.children,
      _props$color = props.color,
      color = _props$color === undefined ? 'darkGray' : _props$color,
      _props$id = props.id,
      id = _props$id === undefined ? null : _props$id,
      lgSize = props.lgSize,
      mdSize = props.mdSize,
      _props$overflow = props.overflow,
      overflow = _props$overflow === undefined ? 'breakWord' : _props$overflow,
      _props$size = props.size,
      size = _props$size === undefined ? 'md' : _props$size,
      smSize = props.smSize,
      _props$truncate = props.truncate,
      truncate = _props$truncate === undefined ? false : _props$truncate;


  var cs = classnames(styles$12.Heading, styles$12['fontSize' + SIZE_SCALE$1[size]], smSize && styles$12['smFontSize' + SIZE_SCALE$1[smSize]], mdSize && styles$12['mdFontSize' + SIZE_SCALE$1[mdSize]], lgSize && styles$12['lgFontSize' + SIZE_SCALE$1[lgSize]], colors[color], overflow === 'breakWord' && typography.breakWord, truncate && typography.truncate);

  var headingLevel = accessibilityLevel || defaultHeadingLevels[size];
  return React.createElement('h' + headingLevel, _extends({
    className: cs,
    id: id
  }, truncate && typeof children === 'string' ? { title: children } : null), children);
}

Heading.propTypes = {
  accessibilityLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node,
  color: PropTypes.oneOf(['blue', 'darkGray', 'eggplant', 'gray', 'green', 'lightGray', 'maroon', 'midnight', 'navy', 'olive', 'orange', 'orchid', 'pine', 'purple', 'red', 'watermelon', 'white']),
  id: PropTypes.string,
  overflow: PropTypes.oneOf(['normal', 'breakWord']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  smSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  mdSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  lgSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  truncate: PropTypes.bool
};

var styles$13 = { "button": "_wk _27 _5e _pb _t2" };

var styles$14 = { "pog": "_wl _57 _2t _31 _3b", "focused": "_wm _26", "transparent": "_wn _6d", "hovered": "_wo", "white": "_wp _5i", "active": "_wq", "lightGray": "_wr _5k" };

var SIZE_NAME_TO_PIXEL = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56
};

var defaultIconButtonIconColors = {
  transparent: 'gray',
  lightGray: 'gray',
  white: 'gray'
};

function Pog(props) {
  var _classnames;

  var _props$active = props.active,
      active = _props$active === undefined ? false : _props$active,
      _props$bgColor = props.bgColor,
      bgColor = _props$bgColor === undefined ? 'transparent' : _props$bgColor,
      _props$focused = props.focused,
      focused = _props$focused === undefined ? false : _props$focused,
      _props$hovered = props.hovered,
      hovered = _props$hovered === undefined ? false : _props$hovered,
      _props$iconColor = props.iconColor,
      iconColor = _props$iconColor === undefined ? defaultIconButtonIconColors[bgColor] : _props$iconColor,
      icon = props.icon,
      _props$size = props.size,
      size = _props$size === undefined ? 'md' : _props$size;


  var iconSize = SIZE_NAME_TO_PIXEL[size] / 2;

  var inlineStyle = {
    height: SIZE_NAME_TO_PIXEL[size],
    width: SIZE_NAME_TO_PIXEL[size]
  };

  var classes = classnames(styles$14.pog, styles$14[bgColor], (_classnames = {}, defineProperty(_classnames, styles$14.active, active), defineProperty(_classnames, styles$14.focused, focused), defineProperty(_classnames, styles$14.hovered, hovered && !focused && !active), _classnames));

  return React.createElement(
    'div',
    { className: classes, style: inlineStyle },
    React.createElement(
      Box,
      { shape: 'circle' },
      React.createElement(Icon, {
        color: iconColor,
        icon: icon,
        size: iconSize,
        accessibilityLabel: ''
      })
    )
  );
}

Pog.propTypes = {
  active: PropTypes.bool,
  bgColor: PropTypes.oneOf(['transparent', 'lightGray', 'white']),
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  iconColor: PropTypes.oneOf(['gray', 'darkGray', 'red', 'blue', 'white']),
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.oneOf(Object.keys(SIZE_NAME_TO_PIXEL))
};

var IconButton = function (_React$Component) {
  inherits(IconButton, _React$Component);

  function IconButton() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, IconButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = IconButton.__proto__ || Object.getPrototypeOf(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: false,
      focused: false,
      hovered: false
    }, _this.handleBlur = function () {
      return _this.setState({ focused: false });
    }, _this.handleFocus = function () {
      _this.setState({ focused: true });
    }, _this.handleMouseDown = function () {
      _this.setState({ active: true });
    }, _this.handleMouseEnter = function () {
      _this.setState({ hovered: true });
    }, _this.handleMouseLeave = function () {
      _this.setState({
        active: false,
        hovered: false
      });
    }, _this.handleMouseUp = function () {
      _this.setState({ active: false });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(IconButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          accessibilityExpanded = _props.accessibilityExpanded,
          accessibilityHaspopup = _props.accessibilityHaspopup,
          accessibilityLabel = _props.accessibilityLabel,
          bgColor = _props.bgColor,
          iconColor = _props.iconColor,
          icon = _props.icon,
          size = _props.size,
          onClick = _props.onClick;
      var _state = this.state,
          active = _state.active,
          focused = _state.focused,
          hovered = _state.hovered;


      return React.createElement(
        'button',
        {
          'aria-expanded': accessibilityExpanded,
          'aria-haspopup': accessibilityHaspopup,
          'aria-label': accessibilityLabel,
          className: styles$13.button,
          onBlur: this.handleBlur,
          onClick: function (_onClick) {
            function onClick(_x) {
              return _onClick.apply(this, arguments);
            }

            onClick.toString = function () {
              return _onClick.toString();
            };

            return onClick;
          }(function (event) {
            return onClick && onClick({ event: event });
          }),
          onFocus: this.handleFocus,
          onMouseDown: this.handleMouseDown,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onMouseUp: this.handleMouseUp,
          type: 'button'
        },
        React.createElement(Pog, {
          active: active,
          bgColor: bgColor,
          focused: focused,
          hovered: hovered,
          iconColor: iconColor,
          icon: icon,
          size: size
        })
      );
    }
  }]);
  return IconButton;
}(React.Component);

IconButton.propTypes = {
  accessibilityExpanded: PropTypes.bool,
  accessibilityHaspopup: PropTypes.bool,
  accessibilityLabel: PropTypes.string.isRequired,
  bgColor: PropTypes.oneOf(['transparent', 'lightGray', 'white']),
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  iconColor: PropTypes.oneOf(['gray', 'darkGray', 'red', 'blue', 'white']),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

var styles$15 = { "label": "_ws _27 _t2" };

function Label(props) {
  var children = props.children,
      htmlFor = props.htmlFor;


  return React.createElement(
    'label',
    { className: styles$15.label, htmlFor: htmlFor },
    children
  );
}

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string.isRequired
};

/*
  Much of the math and understanding about this component comes from @vjeaux's
  excellent blog post on image resizing.

  http://blog.vjeux.com/2013/image/css-container-and-cover.html

  I highly recommend you read that first before continuing on reading.
*/

var aspectRatio = function aspectRatio(width, height) {
  return width / height;
};

function Letterbox(_ref) {
  var children = _ref.children,
      contentAspectRatio = _ref.contentAspectRatio,
      height = _ref.height,
      width = _ref.width;

  var viewportAspectRatio = aspectRatio(width, height);

  var contentHeight = void 0;
  var contentWidth = void 0;

  if (contentAspectRatio < viewportAspectRatio) {
    contentWidth = width;
    contentHeight = width / contentAspectRatio;
  } else {
    contentWidth = height * contentAspectRatio;
    contentHeight = height;
  }

  var offsetTop = (contentHeight - height) / -2;
  var offsetLeft = (contentWidth - width) / -2;

  return React.createElement(
    Mask,
    { width: width, height: height },
    React.createElement(
      'div',
      { style: { marginTop: offsetTop, marginLeft: offsetLeft } },
      React.createElement(
        Mask,
        { width: contentWidth, height: contentHeight },
        children
      )
    )
  );
}

Letterbox.propTypes = {
  children: PropTypes.node,
  contentAspectRatio: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

var styles$16 = { "link": "_wt _sh", "accessibleFocusStyle": "_wu _25", "block": "_wv _27" };

var TAB_KEY_CODE = 9;

var Link = function (_React$Component) {
  inherits(Link, _React$Component);

  function Link() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      enableFocusStyles: true
    }, _this.handleClick = function (event) {
      var _this$props = _this.props,
          href = _this$props.href,
          onClick = _this$props.onClick;

      if (onClick && href) {
        onClick({ event: event });
      }
    }, _this.handleMouseDown = function () {
      var _this$props2 = _this.props,
          href = _this$props2.href,
          target = _this$props2.target;

      if (target === 'blank' && href) {
        _this.setState({ enableFocusStyles: false });
      }
    }, _this.handleKeyUp = function (event) {
      var _this$props3 = _this.props,
          href = _this$props3.href,
          target = _this$props3.target;

      if (target === 'blank' && event.keyCode === TAB_KEY_CODE && href) {
        _this.setState({ enableFocusStyles: true });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Link, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          _props$inline = _props.inline,
          inline = _props$inline === undefined ? false : _props$inline,
          _props$target = _props.target,
          target = _props$target === undefined ? null : _props$target,
          href = _props.href;

      var rel = target === 'blank' ? 'noopener noreferrer' : null;
      var linkTarget = target ? '_' + target : null;

      return React.createElement(
        'a',
        {
          className: classnames(styles$16.link, this.state.enableFocusStyles ? styles$16.accessibleFocusStyle : '', inline ? '' : styles$16.block),
          href: href,
          onMouseDown: this.handleMouseDown,
          onKeyUp: this.handleKeyUp,
          onClick: this.handleClick,
          rel: rel,
          target: linkTarget
        },
        children
      );
    }
  }]);
  return Link;
}(React.Component);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  onClick: PropTypes.func,
  target: PropTypes.oneOf([null, 'self', 'blank'])
};

/**
 * debounce prevents a particular function from being called until after a given
 * cooldown period (default 100ms). Every time the function is called, it resets
 * the cooldown.
 */

function debounce(fn) {
  var threshhold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  var deferTimer = null;

  var debounced = function debounced() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (deferTimer) {
      clearTimeout(deferTimer);
    }

    deferTimer = setTimeout(function () {
      deferTimer = null;
      fn.apply(undefined, toConsumableArray(args));
    }, threshhold);
  };

  debounced.clearTimeout = function () {
    if (deferTimer) {
      clearTimeout(deferTimer);
    }
  };

  return debounced;
}

/**
 * FetchItems is a logic component that renders no content itself. Its job
 * is to manage when the given fetchMore method should be called based on
 * the given scroll/size props.
 *
 * While no element is actually passed to FetchItems, it is intended to be used
 * in conjunction with a large scroll container that uses async fetching to
 * load and render additional data. Based on the height of this container and
 * its current scroll position, FetchItems is responsible for triggering future
 * fetch calls.
 */

var FetchItems = function (_React$PureComponent) {
  inherits(FetchItems, _React$PureComponent);

  function FetchItems() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, FetchItems);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FetchItems.__proto__ || Object.getPrototypeOf(FetchItems)).call.apply(_ref, [this].concat(args))), _this), _this.check = function () {
      var _this$props = _this.props,
          containerHeight = _this$props.containerHeight,
          isAtEnd = _this$props.isAtEnd,
          isFetching = _this$props.isFetching,
          fetchMore = _this$props.fetchMore,
          scrollHeight = _this$props.scrollHeight,
          scrollTop = _this$props.scrollTop;


      if (isAtEnd || isFetching || !fetchMore) {
        return;
      }
      var scrollBuffer = containerHeight * 3;

      if (scrollTop + scrollBuffer > scrollHeight) {
        fetchMore();
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(FetchItems, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      setTimeout(this.check);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.check();
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return FetchItems;
}(React.PureComponent);

FetchItems.propTypes = {
  containerHeight: PropTypes.number.isRequired,
  isAtEnd: PropTypes.bool,
  isFetching: PropTypes.bool.isRequired,
  fetchMore: PropTypes.func,
  scrollHeight: PropTypes.number.isRequired,
  scrollTop: PropTypes.number.isRequired
};

var styles$17 = { "Masonry": "_ww _2h", "Masonry__Item": "_wx _2j", "Masonry__Item__Mounted": "_wy" };

/**
 * ScrollContainer is a pass-through component that simply sets up an onScroll
 * handler on the given scrollContainer element (or the element that is
 * returned as result of calling the scrollContainer method). This allows for
 * the event listener subscription of the scrollContainer to be managed inside
 * the React lifecycle without adding bloat to Masonry or other onScroll
 * subscribers.
 *
 * Note that this Component renders its children without creating any
 * additional content. Also note that, while the component is built to manage
 * onScroll inside of the React lifecycle, it doesn't change onScroll events
 * or the API at all, so it could easily be adapted to other event types.
 */

function getScrollContainer(scrollContainer) {
  return typeof scrollContainer === 'function' ? scrollContainer() : scrollContainer;
}

var ScrollContainer = function (_React$Component) {
  inherits(ScrollContainer, _React$Component);

  function ScrollContainer() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ScrollContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ScrollContainer.__proto__ || Object.getPrototypeOf(ScrollContainer)).call.apply(_ref, [this].concat(args))), _this), _this.getScrollContainerRef = function () {
      return _this.scrollContainer;
    }, _this.handleScroll = function (event) {
      _this.props.onScroll(event);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ScrollContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var scrollContainer = getScrollContainer(this.props.scrollContainer);
      if (scrollContainer) {
        this.updateScrollContainer(scrollContainer);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var nextScrollContainer = getScrollContainer(this.props.scrollContainer);
      if (nextScrollContainer && nextScrollContainer !== this.scrollContainer) {
        this.updateScrollContainer(nextScrollContainer);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.scrollContainer) {
        this.scrollContainer.removeEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: 'updateScrollContainer',
    value: function updateScrollContainer(scrollContainer) {
      if (this.scrollContainer) {
        // cleanup existing scroll container if it exists
        this.scrollContainer.removeEventListener('scroll', this.handleScroll);
      }
      this.scrollContainer = scrollContainer;
      this.scrollContainer.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.Children.only(this.props.children);
    }
  }]);
  return ScrollContainer;
}(React.Component);

ScrollContainer.propTypes = {
  children: PropTypes.element.isRequired,
  onScroll: PropTypes.func.isRequired,
  scrollContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
};

/**
 * throttle limits the number of times a function can be called to a
 * given threshhold (100ms by default). The function is always called
 * on the leading and trailing edge.
 */

function throttle(fn) {
  var threshhold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  var last = void 0;
  var deferTimer = void 0;
  var throttled = function throttled() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var now = Date.now();
    if (last && now - last < threshhold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(undefined, toConsumableArray(args));
      }, threshhold - (now - last));
    } else {
      last = now;
      fn.apply(undefined, toConsumableArray(args));
    }
  };

  throttled.clearTimeout = function () {
    if (deferTimer) {
      clearTimeout(deferTimer);
    }
  };

  return throttled;
}

var MeasurementStore = function () {
  function MeasurementStore() {
    classCallCheck(this, MeasurementStore);
    this.map = new WeakMap();
  }

  createClass(MeasurementStore, [{
    key: 'get',
    value: function get$$1(key) {
      return this.map.get(key);
    }
  }, {
    key: 'has',
    value: function has(key) {
      return this.map.has(key);
    }
  }, {
    key: 'set',
    value: function set$$1(key, value) {
      this.map.set(key, value);
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.map = new WeakMap();
    }
  }]);
  return MeasurementStore;
}();

/**
 * Measuring scroll positions, element heights, etc is different between
 * different browsers and the window object vs other DOM nodes. These
 * utils abstract away these differences.
 */

function getElementHeight(element) {
  return element === window ? window.innerHeight : element.clientHeight;
}

function getWindowScrollPos() {
  if (window.scrollY !== undefined) {
    // Modern browser
    return window.scrollY;
  } else if (document.documentElement && document.documentElement.scrollTop !== undefined) {
    // IE support.
    return document.documentElement.scrollTop;
  }
  return 0;
}

function getRelativeScrollTop(element) {
  return element === window ? getWindowScrollPos() : element.scrollTop - element.getBoundingClientRect().top;
}

function getScrollHeight(element) {
  return element === window && document.documentElement ? document.documentElement.scrollHeight : element.scrollHeight;
}

function getScrollPos(element) {
  return element === window ? getWindowScrollPos() : element.scrollTop;
}

var DefaultLayoutSymbol = Symbol('default');
var UniformRowLayoutSymbol = Symbol('uniformRow');

var mindex = function mindex(arr) {
  var idx = 0;
  for (var i = 0; i < arr.length; i += 1) {
    if (arr[i] < arr[idx]) {
      idx = i;
    }
  }
  return idx;
};

var offscreen = function offscreen(width) {
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
  return {
    top: -9999,
    left: -9999,
    width: width,
    height: height
  };
};

var defaultLayout = (function (_ref) {
  var cache = _ref.cache,
      _ref$columnWidth = _ref.columnWidth,
      columnWidth = _ref$columnWidth === undefined ? 236 : _ref$columnWidth,
      _ref$gutter = _ref.gutter,
      gutter = _ref$gutter === undefined ? 14 : _ref$gutter,
      _ref$minCols = _ref.minCols,
      minCols = _ref$minCols === undefined ? 2 : _ref$minCols,
      width = _ref.width;
  return function (items) {
    if (width == null) {
      return items.map(function () {
        return offscreen(columnWidth);
      });
    }

    var columnWidthAndGutter = columnWidth + gutter;
    var columnCount = Math.max(Math.floor((width + gutter) / columnWidthAndGutter), minCols);
    // the total height of each column
    var heights = new Array(columnCount).fill(0);
    var centerOffset = Math.max(Math.floor((width - columnWidthAndGutter * columnCount + gutter) / 2), 0);

    return items.reduce(function (acc, item) {
      var positions = acc;
      // $FlowFixMe
      var height = cache.get(item);
      var position = void 0;

      if (height == null) {
        position = offscreen(columnWidth);
      } else {
        var heightAndGutter = height + gutter;
        var col = mindex(heights);
        var _top = heights[col];
        var _left = col * columnWidthAndGutter + centerOffset;

        heights[col] += heightAndGutter;
        position = { top: _top, left: _left, width: columnWidth, height: height };
      }
      positions.push(position);
      return positions;
    }, []);
  };
});

var offscreen$1 = function offscreen(width) {
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
  return {
    top: -9999,
    left: -9999,
    width: width,
    height: height
  };
};

var uniformRowLayout = (function (_ref) {
  var cache = _ref.cache,
      _ref$columnWidth = _ref.columnWidth,
      columnWidth = _ref$columnWidth === undefined ? 236 : _ref$columnWidth,
      _ref$gutter = _ref.gutter,
      gutter = _ref$gutter === undefined ? 14 : _ref$gutter,
      width = _ref.width,
      _ref$minCols = _ref.minCols,
      minCols = _ref$minCols === undefined ? 3 : _ref$minCols;
  return function (items) {
    if (width == null) {
      return items.map(function () {
        return offscreen$1(columnWidth);
      });
    }

    var columnWidthAndGutter = columnWidth + gutter;
    var columnCount = Math.max(Math.floor((width + gutter) / columnWidthAndGutter), minCols);

    var positions = [];
    var heights = [];

    for (var i = 0; i < items.length; i += 1) {
      var position = void 0;
      var _height = cache.get(items[i]);

      if (_height == null) {
        position = offscreen$1(columnWidth);
      } else {
        var column = i % columnCount;
        var row = Math.floor(i / columnCount);

        if (column === 0 || _height > heights[row]) {
          heights[row] = _height;
        }

        var _top = row > 0 ? heights.slice(0, row).reduce(function (sum, y) {
          return sum + y + gutter;
        }, 0) : 0;

        position = {
          top: _top,
          left: column * columnWidthAndGutter,
          width: columnWidth,
          height: _height
        };
      }
      positions.push(position);
    }
    return positions;
  };
});

var mindex$1 = function mindex(arr) {
  var idx = 0;
  for (var i = 0; i < arr.length; i += 1) {
    if (arr[i] < arr[idx]) {
      idx = i;
    }
  }
  return idx;
};

var fullWidthLayout = (function (_ref) {
  var _ref$gutter = _ref.gutter,
      gutter = _ref$gutter === undefined ? 0 : _ref$gutter,
      cache = _ref.cache,
      _ref$minCols = _ref.minCols,
      minCols = _ref$minCols === undefined ? 2 : _ref$minCols,
      _ref$idealColumnWidth = _ref.idealColumnWidth,
      idealColumnWidth = _ref$idealColumnWidth === undefined ? 240 : _ref$idealColumnWidth,
      width = _ref.width;

  if (width == null) {
    return function (items) {
      return items.map(function () {
        return {
          top: Infinity,
          left: Infinity,
          width: Infinity,
          height: Infinity
        };
      });
    };
  }

  // "This is kind of crazy!" - you
  // Yes, indeed. The "guessing" here is meant to replicate the pass that the
  // original implementation takes with CSS.
  var colguess = Math.floor(width / idealColumnWidth);
  var columnCount = Math.max(Math.floor((width - colguess * gutter) / idealColumnWidth), minCols);
  var columnWidth = Math.floor(width / columnCount);

  return function (items) {
    // the total height of each column
    var heights = new Array(columnCount).fill(0);

    return items.reduce(function (acc, item) {
      var positions = acc;
      var height = cache.get(item);
      var position = void 0;

      if (height == null) {
        position = {
          top: Infinity,
          left: Infinity,
          width: columnWidth,
          height: Infinity
        };
      } else {
        var col = mindex$1(heights);
        var _top = heights[col];
        var _left = col * columnWidth + gutter / 2;

        heights[col] += height;
        position = {
          top: _top,
          left: _left,
          width: columnWidth - gutter,
          height: height
        };
      }

      positions.push(position);
      return positions;
    }, []);
  };
});

var MasonryLayout = function MasonryLayout() {
  classCallCheck(this, MasonryLayout);
};

var UniformRowLayout = function UniformRowLayout() {
  classCallCheck(this, UniformRowLayout);
};

var RESIZE_DEBOUNCE = 300;
// Multiplied against container height.
// The amount of extra buffer space for populating visible items.
var VIRTUAL_BUFFER_FACTOR = 0.7;

var layoutNumberToCssDimension = function layoutNumberToCssDimension(n) {
  return n !== Infinity ? n : undefined;
};

var Masonry = function (_React$Component) {
  inherits(Masonry, _React$Component);
  createClass(Masonry, null, [{
    key: 'createMeasurementStore',
    value: function createMeasurementStore() {
      return new MeasurementStore();
    }
  }, {
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      var items = props.items,
          measurementStore = props.measurementStore;
      // whenever we're receiving new props, determine whether any items need to be measured
      // TODO - we should treat items as immutable

      var hasPendingMeasurements = items.some(function (item) {
        return !measurementStore.has(item);
      });

      // Shallow compare all items, if any change reflow the grid.
      for (var i = 0; i < items.length; i += 1) {
        // We've reached the end of our current props and everything matches.
        // If we hit this case it means we need to insert new items.
        if (state.items[i] === undefined) {
          return {
            hasPendingMeasurements: hasPendingMeasurements,
            items: items,
            isFetching: false
          };
        }

        // Reset grid items when:
        if (
        // An item object ref does not match.
        items[i] !== state.items[i] ||
        // Or less items than we currently have are passed in.
        items.length < state.items.length) {
          return {
            hasPendingMeasurements: hasPendingMeasurements,
            items: items,
            isFetching: false
          };
        }
      }

      // Reset items if new items array is empty.
      if (items.length === 0 && state.items.length > 0) {
        return {
          hasPendingMeasurements: hasPendingMeasurements,
          items: items,
          isFetching: false
        };
      } else if (hasPendingMeasurements !== state.hasPendingMeasurements) {
        // make sure we always update hasPendingMeasurements
        return {
          hasPendingMeasurements: hasPendingMeasurements,
          items: items
        };
      }

      // Return null to indicate no change to state.
      return null;
    }
  }]);

  function Masonry(props) {
    classCallCheck(this, Masonry);

    var _this = possibleConstructorReturn(this, (Masonry.__proto__ || Object.getPrototypeOf(Masonry)).call(this, props));

    _this.setGridWrapperRef = function (ref) {
      _this.gridWrapper = ref;
    };

    _this.setScrollContainerRef = function (ref) {
      _this.scrollContainer = ref;
    };

    _this.handleResize = debounce(function () {
      if (_this.gridWrapper) {
        _this.setState({ width: _this.gridWrapper.clientWidth });
      }
    }, RESIZE_DEBOUNCE);
    _this.updateScrollPosition = throttle(function () {
      if (!_this.scrollContainer) {
        return;
      }
      var scrollContainer = _this.scrollContainer.getScrollContainerRef();

      if (!scrollContainer) {
        return;
      }

      _this.setState({
        scrollTop: getScrollPos(scrollContainer)
      });
    });
    _this.measureContainerAsync = debounce(function () {
      _this.measureContainer();
    }, 0);

    _this.fetchMore = function () {
      var loadItems = _this.props.loadItems;

      if (loadItems && typeof loadItems === 'function') {
        _this.setState({
          isFetching: true
        }, function () {
          return loadItems({ from: _this.props.items.length });
        });
      }
    };

    _this.renderMasonryComponent = function (itemData, idx, position) {
      var _this$props = _this.props,
          Component = _this$props.comp,
          virtualize = _this$props.virtualize;
      var top = position.top,
          left = position.left,
          width = position.width,
          height = position.height;


      var isVisible = void 0;
      if (_this.props.scrollContainer) {
        var virtualBuffer = _this.containerHeight * VIRTUAL_BUFFER_FACTOR;
        var offsetScrollPos = _this.state.scrollTop - _this.containerOffset;
        var viewportTop = offsetScrollPos - virtualBuffer;
        var viewportBottom = offsetScrollPos + _this.containerHeight + virtualBuffer;

        isVisible = !(position.top + position.height < viewportTop || position.top > viewportBottom);
      } else {
        // if no scroll container is passed in, items should always be visible
        isVisible = true;
      }

      var itemComponent = React.createElement(
        'div',
        {
          key: 'item-' + idx,
          className: [styles$17.Masonry__Item, styles$17.Masonry__Item__Mounted].join(' '),
          'data-grid-item': true,
          style: {
            top: 0,
            left: 0,
            transform: 'translateX(' + left + 'px) translateY(' + top + 'px)',
            WebkitTransform: 'translateX(' + left + 'px) translateY(' + top + 'px)',
            width: layoutNumberToCssDimension(width),
            height: layoutNumberToCssDimension(height)
          }
        },
        React.createElement(Component, { data: itemData, itemIdx: idx, isMeasuring: false })
      );

      return virtualize ? isVisible && itemComponent || null : itemComponent;
    };

    _this.containerHeight = 0;
    _this.containerOffset = 0;

    _this.state = {
      hasPendingMeasurements: props.items.some(function (item) {
        return !!item && !props.measurementStore.has(item);
      }),
      isFetching: false,
      // eslint-disable-next-line react/no-unused-state
      items: props.items,
      scrollTop: 0,
      width: undefined
    };
    return _this;
  }

  /**
   * Adds hooks after the component mounts.
   */


  createClass(Masonry, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleResize);

      var width = this.gridWrapper ? this.gridWrapper.clientWidth : this.state.width;

      this.measureContainer();

      var scrollTop = this.state.scrollTop;

      if (this.scrollContainer != null) {
        var _scrollContainer = this.scrollContainer.getScrollContainerRef();
        if (_scrollContainer) {
          scrollTop = getScrollPos(_scrollContainer);
        }
      }

      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ scrollTop: scrollTop, width: width });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          measurementStore = _props.measurementStore;


      this.measureContainerAsync();

      if (prevState.width != null && this.state.width !== prevState.width) {
        measurementStore.reset();
      }
      // calculate whether we still have pending measurements
      var hasPendingMeasurements = items.some(function (item) {
        return !!item && !measurementStore.has(item);
      });
      if (hasPendingMeasurements || hasPendingMeasurements !== this.state.hasPendingMeasurements || prevState.width == null) {
        this.insertAnimationFrame = requestAnimationFrame(function () {
          _this2.setState({
            hasPendingMeasurements: hasPendingMeasurements
          });
        });
      }
    }

    /**
     * Remove listeners when unmounting.
     */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.insertAnimationFrame) {
        cancelAnimationFrame(this.insertAnimationFrame);
      }

      // Make sure async methods are cancelled.
      this.measureContainerAsync.clearTimeout();
      this.handleResize.clearTimeout();
      this.updateScrollPosition.clearTimeout();

      window.removeEventListener('resize', this.handleResize);
    }

    /**
     * Delays resize handling in case the scroll container is still being resized.
     */

  }, {
    key: 'measureContainer',
    value: function measureContainer() {
      if (this.scrollContainer != null) {
        var _scrollContainer2 = this.scrollContainer;

        var scrollContainerRef = _scrollContainer2.getScrollContainerRef();
        if (scrollContainerRef) {
          this.containerHeight = getElementHeight(scrollContainerRef);
          var el = this.gridWrapper;
          if (el instanceof HTMLElement) {
            var relativeScrollTop = getRelativeScrollTop(scrollContainerRef);
            this.containerOffset = el.getBoundingClientRect().top + relativeScrollTop;
          }
        }
      }
    }

    /**
     * Clear measurements/positions and force a reflow of the entire grid.
     * Only use this if absolutely necessary - ex: We need to reflow items if the
     * number of columns we would display should change after a resize.
     */

  }, {
    key: 'reflow',
    value: function reflow() {
      this.props.measurementStore.reset();
      this.measureContainer();
      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          columnWidth = _props2.columnWidth,
          Component = _props2.comp,
          flexible = _props2.flexible,
          gutter = _props2.gutterWidth,
          measurementStore = _props2.measurementStore,
          items = _props2.items,
          minCols = _props2.minCols;
      var _state = this.state,
          hasPendingMeasurements = _state.hasPendingMeasurements,
          width = _state.width;


      var layout = void 0;
      if (flexible && width !== null) {
        layout = fullWidthLayout({
          gutter: gutter,
          cache: measurementStore,
          minCols: minCols,
          idealColumnWidth: columnWidth,
          width: width
        });
      } else if (this.props.layout === UniformRowLayoutSymbol || this.props.layout instanceof UniformRowLayout) {
        layout = uniformRowLayout({
          cache: measurementStore,
          columnWidth: columnWidth,
          gutter: gutter,
          minCols: minCols,
          width: width
        });
      } else {
        layout = defaultLayout({
          cache: measurementStore,
          columnWidth: columnWidth,
          gutter: gutter,
          minCols: minCols,
          width: width
        });
      }

      var gridBody = void 0;
      if (width == null && hasPendingMeasurements) {
        // When hyrdating from a server render, we don't have the width of the grid
        // and the measurement store is empty
        gridBody = React.createElement(
          'div',
          {
            className: styles$17.Masonry,
            style: { height: 0, width: '100%' },
            ref: this.setGridWrapperRef
          },
          items.filter(function (item) {
            return item;
          }).map(function (item, i) {
            return React.createElement(
              'div',
              { // keep this in sync with renderMasonryComponent
                className: 'static',
                'data-grid-item': true,
                key: i,
                style: {
                  top: 0,
                  left: 0,
                  transform: 'translateX(0px) translateY(0px)',
                  WebkitTransform: 'translateX(0px) translateY(0px)',
                  width: flexible ? undefined : layoutNumberToCssDimension(columnWidth) // we can't set a width for server rendered flexible items
                },
                ref: function ref(el) {
                  if (el && !flexible) {
                    // only measure flexible items on client
                    measurementStore.set(item, el.clientHeight);
                  }
                }
              },
              React.createElement(Component, { data: item, itemIdx: i, isMeasuring: false })
            );
          })
        );
      } else if (width == null) {
        // When the width is empty (usually after a re-mount) render an empty
        // div to collect the width for layout
        gridBody = React.createElement('div', { style: { width: '100%' }, ref: this.setGridWrapperRef });
      } else {
        // Full layout is possible
        var itemsToRender = items.filter(function (item) {
          return item && measurementStore.has(item);
        });
        var itemsToMeasure = items.filter(function (item) {
          return item && !measurementStore.has(item);
        }).slice(0, minCols);

        var positions = layout(itemsToRender);
        var measuringPositions = layout(itemsToMeasure);
        // Math.max() === -Infinity when there are no positions
        var height = positions.length ? Math.max.apply(Math, toConsumableArray(positions.map(function (pos) {
          return pos.top + pos.height;
        }))) : 0;
        gridBody = React.createElement(
          'div',
          { style: { width: '100%' }, ref: this.setGridWrapperRef },
          React.createElement(
            'div',
            { className: styles$17.Masonry, style: { height: height, width: width } },
            itemsToRender.map(function (item, i) {
              return _this3.renderMasonryComponent(item, i, positions[i]);
            })
          ),
          React.createElement(
            'div',
            { className: styles$17.Masonry, style: { width: width } },
            itemsToMeasure.map(function (data, i) {
              var position = measuringPositions[i];
              return React.createElement(
                'div',
                {
                  key: 'measuring-' + i,
                  style: {
                    visibility: 'hidden',
                    position: 'absolute',
                    top: layoutNumberToCssDimension(position.top),
                    left: layoutNumberToCssDimension(position.left),
                    width: layoutNumberToCssDimension(position.width),
                    height: layoutNumberToCssDimension(position.height)
                  },
                  ref: function ref(el) {
                    if (el) {
                      measurementStore.set(data, el.clientHeight);
                    }
                  }
                },
                React.createElement(Component, { data: data, itemIdx: i, isMeasuring: true })
              );
            })
          ),
          this.scrollContainer && React.createElement(FetchItems, {
            containerHeight: this.containerHeight,
            fetchMore: this.fetchMore,
            isFetching: this.state.isFetching || this.state.hasPendingMeasurements,
            scrollHeight: height,
            scrollTop: this.state.scrollTop
          })
        );
      }

      return this.props.scrollContainer ? React.createElement(
        ScrollContainer,
        {
          ref: this.setScrollContainerRef,
          onScroll: this.updateScrollPosition,
          scrollContainer: this.props.scrollContainer
        },
        gridBody
      ) : gridBody;
    }
  }]);
  return Masonry;
}(React.Component);

Masonry.propTypes = {
  /**
   * The preferred/target item width. If `flexible` is set, the item width will
   * grow to fill column space, and shrink to fit if below min columns.
   */
  columnWidth: PropTypes.number,

  /**
   * The component to render.
   */
  /* eslint react/no-unused-prop-types: 0 */
  comp: PropTypes.func.isRequired,

  /**
   * The preferred/target item width. Item width will grow to fill
   * column space, and shrink to fit if below min columns.
   */
  flexible: PropTypes.bool,

  /**
   * The amount of space between each item.
   */
  gutterWidth: PropTypes.number,

  /**
   * An array of all objects to display in the grid.
   */
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,

  /**
   * Measurement Store
   */
  measurementStore: PropTypes.instanceOf(MeasurementStore),

  /**
   * A callback which the grid calls when we need to load more items as the user scrolls.
   * The callback should update the state of the items, and pass those in as props
   * to this component.
   */
  loadItems: PropTypes.func,

  /**
   * Minimum number of columns to display.
   */
  minCols: PropTypes.number,

  /**
   * Function that the grid calls to get the scroll container.
   * This is required if the grid is expected to be scrollable.
   */
  scrollContainer: PropTypes.func,

  /**
   * Whether or not to use actual virtualization
   */
  virtualize: PropTypes.bool
};
Masonry.defaultProps = {
  columnWidth: 236,
  measurementStore: new MeasurementStore(),
  minCols: 3,
  layout: DefaultLayoutSymbol,
  loadItems: function loadItems() {},
  virtualize: false
};

var styles$18 = { "overlay": "_wz", "container": "_x0", "wrapper": "_x1" };

var sm = "(min-width: 576px)";
var md = "(min-width: 768px)";
var lg = "(min-width: 1312px)";
var breakpoints = {
	sm: sm,
	md: md,
	lg: lg
};

var column$1 = { "col": "_3o", "xsCol1": "_3p", "xsCol2": "_3q", "xsCol3": "_3r", "xsCol4": "_3s", "xsCol5": "_3t", "xsCol6": "_3u", "xsCol7": "_3v", "xsCol8": "_3w", "xsCol9": "_3x", "xsCol10": "_3y", "xsCol11": "_3z", "xsCol12": "_40", "smCol1": "_41", "smCol2": "_42", "smCol3": "_43", "smCol4": "_44", "smCol5": "_45", "smCol6": "_46", "smCol7": "_47", "smCol8": "_48", "smCol9": "_49", "smCol10": "_4a", "smCol11": "_4b", "smCol12": "_4c", "mdCol1": "_4d", "mdCol2": "_4e", "mdCol3": "_4f", "mdCol4": "_4g", "mdCol5": "_4h", "mdCol6": "_4i", "mdCol7": "_4j", "mdCol8": "_4k", "mdCol9": "_4l", "mdCol10": "_4m", "mdCol11": "_4n", "mdCol12": "_4o", "lgCol1": "_4p", "lgCol2": "_4q", "lgCol3": "_4r", "lgCol4": "_4s", "lgCol5": "_4t", "lgCol6": "_4u", "lgCol7": "_4v", "lgCol8": "_4w", "lgCol9": "_4x", "lgCol10": "_4y", "lgCol11": "_4z", "lgCol12": "_50" };

var cursor = { "pointer": "_t2", "zoomIn": "_t3", "zoomOut": "_t4", "copy": "_t5", "move": "_t6", "noDrop": "_t7", "grab": "_t8", "grabbing": "_t9" };

var SIZE_WIDTH_MAP$1 = {
  sm: 414,
  md: 544,
  lg: 804
};

var ESCAPE_KEY_CODE$1 = 27;

var Modal = function (_React$Component) {
  inherits(Modal, _React$Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      breakpoint: 'xs',
      windowHeight: undefined
    }, _this.getCurrentBreakpoint = function () {
      var size = 'xs';
      Object.keys(breakpoints).forEach(function (point) {
        if (window.matchMedia(breakpoints[point]).matches) {
          size = point;
        }
      });
      return size;
    }, _this.handleClose = function () {
      _this.props.onDismiss();
    }, _this.handlePageClick = function (event) {
      if (event.target instanceof Node && _this.container && _this.container.contains(event.target) && _this.modal && !_this.modal.contains(event.target)) {
        _this.handleClose();
      }
    }, _this.handleKeyDown = function (event) {
      if (event.keyCode === ESCAPE_KEY_CODE$1) {
        _this.handleClose();
      }
    }, _this.updateBreakpoint = function () {
      var size = _this.getCurrentBreakpoint();
      if (size !== _this.state.breakpoint || window.innerHeight !== _this.state.windowHeight) {
        _this.setState({ breakpoint: size, windowHeight: window.innerHeight });
      }
    }, _this.restrictFocus = function (event) {
      if (event.target instanceof Node && _this.modal && !_this.modal.contains(event.target)) {
        _this.modal.focus();
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this.handlePageClick);
      window.addEventListener('keydown', this.handleKeyDown);
      window.addEventListener('resize', this.updateBreakpoint);
      document.addEventListener('focus', this.restrictFocus, true);
      this.priorFocus = document.activeElement;
      this.updateBreakpoint();
      if (document.body) {
        document.body.style.overflow = 'hidden'; // Prevents background scrolling
      }
      if (this.modal && this.modal.focus) {
        // Checking this.modal.focus to address a bug in IE11
        // Though the modal exists, this.modal.focus may be null
        // See http://www.mkyong.com/javascript/focus-is-not-working-in-ie-solution/
        this.modal.focus();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handlePageClick);
      window.removeEventListener('keydown', this.handleKeyDown);
      window.removeEventListener('resize', this.updateBreakpoint);
      document.removeEventListener('focus', this.restrictFocus, true);

      if (document.body) {
        document.body.style.overflow = ''; // Reenables background scrolling
      }
      if (this.priorFocus && this.priorFocus.focus) {
        // Checking this.priorFocus.focus to address a bug in IE11
        this.priorFocus.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          accessibilityCloseLabel = _props.accessibilityCloseLabel,
          accessibilityModalLabel = _props.accessibilityModalLabel,
          children = _props.children,
          footer = _props.footer,
          heading = _props.heading,
          _props$role = _props.role,
          role = _props$role === undefined ? 'dialog' : _props$role,
          _props$size = _props.size,
          size = _props$size === undefined ? 'sm' : _props$size;

      var width = SIZE_WIDTH_MAP$1[size];

      var container = [layout.fixed, layout.borderBox, layout.flex, layout.justifyCenter, layout.left0, layout.top0];
      var containerClasses = this.state.breakpoint === 'xs' ? classnames(container, layout.itemsEnd, layout.bottom0, column$1.xsCol12) : classnames(container, layout.itemsCenter, column$1.xsCol12, styles$18.container);

      var wrapper = [layout.fit, layout.relative];
      var wrapperClasses = this.state.breakpoint === 'xs' ? classnames(wrapper, colors.whiteBg, whitespace$1.m0, layout.selfEnd) : classnames(wrapper, colors.whiteBg, borders.rounded, styles$18.wrapper);

      var overlay = [layout.absolute, layout.left0, layout.top0, cursor.zoomOut];
      var overlayClasses = classnames(overlay, styles$18.overlay, colors.darkGrayBg, column$1.xsCol12);

      return React.createElement(
        'div',
        {
          'aria-label': accessibilityModalLabel,
          className: containerClasses,
          ref: function ref(c) {
            _this2.container = c;
          },
          role: role
        },
        React.createElement('div', { className: overlayClasses }),
        React.createElement(
          'div',
          {
            className: wrapperClasses,
            ref: function ref(c) {
              _this2.modal = c;
            },
            tabIndex: -1,
            style: { width: width }
          },
          React.createElement(
            Box,
            {
              maxHeight: '90vh',
              position: 'relative',
              xs: { display: 'flexColumn' }
            },
            React.createElement(
              Box,
              { fit: true },
              role === 'dialog' ? React.createElement(
                Box,
                {
                  dangerouslySetInlineStyle: {
                    __style: { paddingLeft: 50, paddingRight: 50 }
                  },
                  display: 'flex',
                  justifyContent: 'center',
                  paddingY: 5
                },
                React.createElement(
                  Heading,
                  { size: 'xs', accessibilityLevel: 1 },
                  heading
                )
              ) : React.createElement(
                Box,
                { display: 'flex', padding: 4 },
                React.createElement(
                  Heading,
                  { size: 'sm', accessibilityLevel: 1 },
                  heading
                )
              ),
              role === 'dialog' && React.createElement(
                Box,
                { padding: 2, position: 'absolute', top: true, right: true },
                React.createElement(IconButton, {
                  accessibilityLabel: accessibilityCloseLabel,
                  icon: 'cancel',
                  onClick: this.handleClose
                })
              ),
              role === 'dialog' && React.createElement(Divider, null)
            ),
            React.createElement(
              Box,
              { flex: 'grow', overflow: 'auto', position: 'relative' },
              children
            ),
            React.createElement(
              Box,
              { fit: true },
              footer && React.createElement(
                Box,
                null,
                role === 'dialog' && React.createElement(Divider, null),
                React.createElement(
                  Box,
                  { padding: 4 },
                  footer
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Modal;
}(React.Component);


Modal.propTypes = {
  children: PropTypes.node,
  accessibilityCloseLabel: PropTypes.string.isRequired,
  footer: PropTypes.node,
  heading: PropTypes.string.isRequired,
  accessibilityModalLabel: PropTypes.string.isRequired,
  onDismiss: PropTypes.func,
  role: PropTypes.oneOf(['alertdialog', 'dialog']),
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

var styles$19 = { "innerCircle": "_x2 _2s", "PulseAnimation": "_x3", "outerCircle": "_x4", "AppearAnimation": "_x5" };

function Pulsar(props) {
  var paused = props.paused,
      _props$size = props.size,
      size = _props$size === undefined ? 135 : _props$size;


  return React.createElement(
    Box,
    {
      dangerouslySetInlineStyle: {
        __style: {
          animationIterationCount: paused ? 0 : 'infinite',
          outline: 'none',
          boxShadow: 'none'
        }
      },
      display: paused ? 'none' : 'block',
      height: size,
      position: 'relative',
      width: size
    },
    React.createElement(
      'div',
      { className: styles$19.innerCircle },
      React.createElement('div', { className: styles$19.outerCircle })
    )
  );
}

Pulsar.propTypes = {
  paused: PropTypes.bool,
  size: PropTypes.number
};

var styles$20 = { "RadioButton": "_x6 _27 _2s _57 _2t _31 _3b", "RadioButtonSm": "_x7", "RadioButtonMd": "_x8", "RadioButtonIsFocused": "_x9 _26", "RadioButtonWhiteBg": "_xa _5i", "RadioButtonLightGrayBg": "_xb _5k", "Input": "_xc _2j _p6", "InputEnabled": "_xd _t2", "InputSm": "_xe", "InputMd": "_xf", "Check": "_xg _57", "CheckEnabled": "_xh _5o", "CheckDisabled": "_xi _5m" };

var RadioButton = function (_React$Component) {
  inherits(RadioButton, _React$Component);

  function RadioButton() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, RadioButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false
    }, _this.handleChange = function (event) {
      var checked = event.target.checked;

      _this.props.onChange({ checked: checked, event: event });
    }, _this.handleBlur = function () {
      return _this.setState({ focused: false });
    }, _this.handleFocus = function () {
      _this.setState({ focused: true });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(RadioButton, [{
    key: 'render',
    value: function render() {
      var _classnames, _classnames2, _classnames3;

      var _props = this.props,
          checked = _props.checked,
          disabled = _props.disabled,
          id = _props.id,
          name = _props.name,
          size = _props.size,
          value = _props.value;

      return React.createElement(
        'div',
        {
          className: classnames(styles$20.RadioButton, (_classnames = {}, defineProperty(_classnames, styles$20.RadioButtonIsFocused, this.state.focused), defineProperty(_classnames, styles$20.RadioButtonSm, size === 'sm'), defineProperty(_classnames, styles$20.RadioButtonMd, size === 'md'), defineProperty(_classnames, styles$20.RadioButtonWhiteBg, !disabled || checked), defineProperty(_classnames, styles$20.RadioButtonLightGrayBg, disabled && !checked), _classnames))
        },
        React.createElement('input', {
          checked: checked,
          className: classnames(styles$20.Input, (_classnames2 = {}, defineProperty(_classnames2, styles$20.InputEnabled, !disabled), defineProperty(_classnames2, styles$20.InputSm, size === 'sm'), defineProperty(_classnames2, styles$20.InputMd, size === 'md'), _classnames2)),
          disabled: disabled,
          id: id,
          name: name,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          type: 'radio',
          value: value
        }),
        checked && React.createElement('div', {
          className: classnames(styles$20.Check, (_classnames3 = {}, defineProperty(_classnames3, styles$20.CheckSm, size === 'sm'), defineProperty(_classnames3, styles$20.CheckMd, size === 'md'), defineProperty(_classnames3, styles$20.CheckEnabled, !disabled), defineProperty(_classnames3, styles$20.CheckDisabled, disabled), _classnames3))
        })
      );
    }
  }]);
  return RadioButton;
}(React.Component);

RadioButton.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md'])
};
RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  size: 'md'
};

var ScrollFetch = function (_React$PureComponent) {
  inherits(ScrollFetch, _React$PureComponent);

  function ScrollFetch() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ScrollFetch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ScrollFetch.__proto__ || Object.getPrototypeOf(ScrollFetch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      containerHeight: 0,
      scrollHeight: 0,
      scrollTop: 0
    }, _this.getScrollHeight = function () {
      var container = _this.props.container;

      if (!container) {
        return 0;
      }
      return getScrollHeight(container);
    }, _this.updatePosition = throttle(function () {
      _this.setState(_this.getScrollState());
    }), _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ScrollFetch, [{
    key: 'componentDidMount',


    /**
     * Adds scroll listener after the component mounts.
     */
    value: function componentDidMount() {
      var _this2 = this;

      var container = this.props.container;

      if (!container) {
        return;
      }
      setTimeout(function () {
        _this2.setState(_extends({
          containerHeight: getElementHeight(container)
        }, _this2.getScrollState()));
      });
    }

    /**
     * Update scroll buffer and check after the component updates.
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // setTimeout so the parent component can calculate renderHeight().
      this.updatePosition();
    }

    /**
     * Returns the scrollable content height.
     */

  }, {
    key: 'getScrollState',
    value: function getScrollState() {
      var _props = this.props,
          container = _props.container,
          renderHeight = _props.renderHeight;

      if (!container) {
        return null;
      }
      var scrollHeight = renderHeight || this.getScrollHeight;

      return {
        scrollHeight: scrollHeight(),
        scrollTop: getScrollPos(container)
      };
    }

    /**
     * Fetches additional items if needed.
     */

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          containerHeight = _state.containerHeight,
          scrollHeight = _state.scrollHeight,
          scrollTop = _state.scrollTop;
      var _props2 = this.props,
          container = _props2.container,
          fetchMore = _props2.fetchMore,
          isAtEnd = _props2.isAtEnd,
          isFetching = _props2.isFetching;


      var props = {
        containerHeight: containerHeight,
        fetchMore: fetchMore,
        isAtEnd: isAtEnd,
        isFetching: isFetching,
        scrollHeight: scrollHeight,
        scrollTop: scrollTop
      };

      if (!container || isAtEnd) {
        return null;
      }
      return React.createElement(
        ScrollContainer,
        {
          onScroll: this.updatePosition,
          scrollContainer: container
        },
        React.createElement(FetchItems, props)
      );
    }
  }]);
  return ScrollFetch;
}(React.PureComponent);


ScrollFetch.propTypes = {
  /**
   * The scroll container to use. Defaults to window.
   */
  container: PropTypes.shape({
    addEventListener: PropTypes.func,
    removeEventListener: PropTypes.func
  }),
  renderHeight: PropTypes.func,
  isAtEnd: PropTypes.bool,
  isFetching: PropTypes.bool,
  fetchMore: PropTypes.func
};

ScrollFetch.defaultProps = {
  container: typeof window !== 'undefined' ? window : null
};

var styles$21 = { "input": "_xj _25 _51 _2s _2q _5n _ta _s7 _s8 _s9 _td _sd _5k _40", "clear": "_xk _5e _t2 _7l _7k _2h" };

var SearchField = function (_React$Component) {
  inherits(SearchField, _React$Component);

  function SearchField() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, SearchField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = SearchField.__proto__ || Object.getPrototypeOf(SearchField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false,
      hovered: false
    }, _this.handleChange = function (event) {
      _this.props.onChange({
        value: event.currentTarget.value,
        syntheticEvent: event
      });
    }, _this.handleClear = function (event) {
      _this.props.onChange({
        value: '',
        syntheticEvent: event
      });
    }, _this.handleMouseEnter = function () {
      return _this.setState({ hovered: true });
    }, _this.handleMouseLeave = function () {
      return _this.setState({ hovered: false });
    }, _this.handleFocus = function (event) {
      _this.setState({ focused: true });

      if (_this.props.onFocus) {
        _this.props.onFocus({
          value: event.currentTarget.value,
          syntheticEvent: event
        });
      }
    }, _this.handleBlur = function (event) {
      _this.setState({ focused: false });

      if (_this.props.onBlur) {
        _this.props.onBlur({ event: event });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(SearchField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          accessibilityLabel = _props.accessibilityLabel,
          id = _props.id,
          placeholder = _props.placeholder,
          value = _props.value;

      // This mirrors the built in browser behavior. If there's a value, show the
      // clear button if you're hovering or if you've focused on the field

      var showClear = (this.state.focused || this.state.hovered) && value && value.length > 0;

      return React.createElement(
        Box,
        {
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          color: 'white'
        },
        React.createElement(
          Box,
          {
            dangerouslySetInlineStyle: {
              __style: {
                pointerEvents: 'none',
                // Added the following lines for Safari support
                top: '50%',
                transform: 'translateY(-50%)'
              }
            },
            position: 'absolute',
            left: true,
            paddingX: 4
          },
          React.createElement(Icon, { icon: 'search', accessibilityLabel: '' })
        ),
        React.createElement('input', {
          'aria-label': accessibilityLabel,
          className: styles$21.input,
          id: id,
          onChange: this.handleChange,
          placeholder: placeholder,
          role: 'searchbox',
          type: 'search',
          value: value
        }),
        showClear && React.createElement(
          Box,
          { position: 'absolute', right: true, top: true },
          React.createElement(
            'button',
            {
              className: styles$21.clear,
              onClick: this.handleClear,
              tabIndex: -1,
              type: 'button'
            },
            React.createElement(Icon, { icon: 'clear', accessibilityLabel: '' })
          )
        )
      );
    }
  }]);
  return SearchField;
}(React.Component);

SearchField.propTypes = {
  accessibilityLabel: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

var styles$22 = { "SegmentedControl": "_xl _2s _5k _2t _3c", "md": "_xm _2q", "lg": "_xn _2r", "item": "_xo _25 _3k _p6 _5e _t2", "itemIsNotSelected": "_xp", "itemIsSelected": "_xq _5i" };

function SegmentedControl(props) {
  var _classnames;

  var items = props.items,
      onChange = props.onChange,
      selectedItemIndex = props.selectedItemIndex,
      _props$size = props.size,
      size = _props$size === undefined ? 'md' : _props$size;

  return React.createElement(
    'div',
    {
      className: classnames(styles$22.SegmentedControl, (_classnames = {}, defineProperty(_classnames, styles$22.md, size === 'md'), defineProperty(_classnames, styles$22.lg, size === 'lg'), _classnames)),
      role: 'tablist'
    },
    items.map(function (item, i) {
      var _classnames2;

      var isSelected = i === selectedItemIndex;
      var cs = classnames(styles$22.item, (_classnames2 = {}, defineProperty(_classnames2, styles$22.itemIsNotSelected, !isSelected), defineProperty(_classnames2, styles$22.itemIsSelected, isSelected), _classnames2));
      return React.createElement(
        'button',
        {
          'aria-selected': isSelected,
          className: cs,
          key: i,
          onClick: function onClick(e) {
            return onChange({ event: e, activeIndex: i });
          },
          role: 'tab'
        },
        typeof item === 'string' ? React.createElement(
          Text,
          {
            bold: true,
            color: isSelected ? 'darkGray' : 'gray',
            align: 'center',
            size: size
          },
          item
        ) : React.createElement(
          Box,
          { display: 'flex', justifyContent: 'center' },
          item
        )
      );
    })
  );
}

SegmentedControl.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedItemIndex: PropTypes.number.isRequired
};

var styles$23 = { "select": "_xr _25 _ta _s7 _s8 _s9 _td _5n _t2 _2h _2q _6d _40", "normal": "_xs", "errored": "_xt", "enabled": "_xu _5n _5i", "disabled": "_xv _5l _5k" };

var SelectList = function (_React$Component) {
  inherits(SelectList, _React$Component);

  function SelectList() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, SelectList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = SelectList.__proto__ || Object.getPrototypeOf(SelectList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false,
      errorIsOpen: false
    }, _this.handleOnChange = function (event) {
      if (event.target instanceof HTMLSelectElement && _this.props.value !== event.target.value) {
        _this.props.onChange({ event: event, value: event.target.value });

        if (_this.props.errorMessage) {
          _this.setState({ errorIsOpen: false });
        }
      }
    }, _this.handleBlur = function () {
      if (_this.props.errorMessage) {
        _this.setState({ errorIsOpen: false });
      }
    }, _this.handleFocus = function () {
      if (_this.props.errorMessage) {
        _this.setState({ errorIsOpen: true });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(SelectList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          disabled = _props.disabled,
          errorMessage = _props.errorMessage,
          id = _props.id,
          idealErrorDirection = _props.idealErrorDirection,
          name = _props.name,
          options = _props.options,
          placeholder = _props.placeholder,
          value = _props.value;


      var classes = classnames(styles$23.select, disabled ? styles$23.disabled : styles$23.enabled, errorMessage ? styles$23.errored : styles$23.normal);

      return React.createElement(
        Box,
        {
          color: disabled ? 'lightGray' : 'white',
          dangerouslySetInlineStyle: { __style: { borderRadius: 4 } },
          display: 'flex',
          position: 'relative',
          width: '100%'
        },
        React.createElement(
          Box,
          {
            alignItems: 'center',
            bottom: true,
            dangerouslySetInlineStyle: {
              __style: { paddingRight: 14, paddingTop: 2 }
            },
            display: 'flex',
            position: 'absolute',
            right: true,
            top: true
          },
          React.createElement(Icon, {
            icon: 'arrow-down',
            size: 12,
            color: disabled ? 'gray' : 'darkGray',
            accessibilityLabel: ''
          })
        ),
        React.createElement(
          'select',
          {
            'aria-describedby': errorMessage && this.state.focused ? id + '-gestalt-error' : null,
            'aria-invalid': errorMessage ? 'true' : 'false',
            className: classes,
            disabled: disabled,
            id: id,
            name: name,
            onBlur: this.handleBlur,
            onFocus: this.handleFocus,
            onChange: this.handleOnChange,
            ref: function ref(c) {
              _this2.select = c;
            },
            value: value
          },
          placeholder && !value && React.createElement(
            'option',
            { selected: true, disabled: true, value: true, hidden: true },
            placeholder
          ),
          options.map(function (option) {
            return React.createElement(
              'option',
              { key: option.value, value: option.value },
              option.label
            );
          })
        ),
        errorMessage && this.state.errorIsOpen && React.createElement(ErrorFlyout, {
          anchor: this.select,
          id: id + '-gestalt-error',
          idealDirection: idealErrorDirection,
          message: errorMessage,
          onDismiss: function onDismiss() {
            return _this2.setState({ errorIsOpen: false });
          },
          size: 'sm'
        })
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      if (props.errorMessage !== state.errorMessage) {
        return {
          errorIsOpen: !!props.errorMessage,
          errorMessage: props.errorMessage
        };
      }

      return null;
    }
  }]);
  return SelectList;
}(React.Component);

SelectList.propTypes = {
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  idealErrorDirection: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.exact({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  placeholder: PropTypes.string,
  value: PropTypes.string
};
SelectList.defaultProps = {
  disabled: false,
  idealErrorDirection: 'right',
  options: []
};

var styles$24 = { "icon": "_xw _27", "spin": "_xx" };

var SIZE = 40;

function Spinner(_ref) {
  var accessibilityLabel = _ref.accessibilityLabel,
      show = _ref.show;

  return show ? React.createElement(
    Box,
    { xs: { display: 'flex' }, justifyContent: 'around', overflow: 'hidden' },
    React.createElement(
      'div',
      { className: styles$24.icon },
      React.createElement(Icon, {
        icon: 'knoop',
        accessibilityLabel: accessibilityLabel,
        size: SIZE
      })
    )
  ) : React.createElement('div', null);
}

Spinner.propTypes = {
  show: PropTypes.bool.isRequired,
  accessibilityLabel: PropTypes.string.isRequired
};

function Sticky(props) {
  var _props$dangerouslySet = props.dangerouslySetZIndex,
      dangerouslySetZIndex = _props$dangerouslySet === undefined ? { __zIndex: 1 } : _props$dangerouslySet,
      children = props.children;

  var style = {
    top: props.top != null ? props.top : undefined,
    left: props.left != null ? props.left : undefined,
    right: props.right != null ? props.right : undefined,
    bottom: props.bottom != null ? props.bottom : undefined,
    // eslint-disable-next-line no-underscore-dangle
    zIndex: dangerouslySetZIndex.__zIndex
  };
  return React.createElement(
    'div',
    { className: layout.sticky, style: style },
    children
  );
}

Sticky.propTypes = {
  children: PropTypes.node,
  dangerouslySetZIndex: PropTypes.exact({
    __zIndex: PropTypes.number
  }),
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

var styles$25 = { "switch": "_xy _27 _2s _2h", "focused": "_xz _26", "switchDarkGray": "_y0 _5o", "switchGray": "_y1 _5m", "switchLightGray": "_y2 _5k", "switchWhite": "_y3 _5i", "slider": "_y4 _2s _2j _5i _57", "sliderRight": "_y5", "sliderLeft": "_y6", "sliderDark": "_y7", "sliderLight": "_y8", "checkbox": "_y9 _2j _40 _p6 _5e _pb", "checkboxEnabled": "_ya _t2" };

var Switch = function (_React$Component) {
  inherits(Switch, _React$Component);

  function Switch() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Switch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false
    }, _this.handleBlur = function () {
      return _this.setState({ focused: false });
    }, _this.handleChange = function (event) {
      var checked = event.target.checked;

      _this.props.onChange({
        event: event,
        value: checked
      });
    }, _this.handleFocus = function () {
      _this.setState({ focused: true });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Switch, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          id = _props.id,
          name = _props.name,
          switched = _props.switched;


      var switchStyles = classnames(styles$25.switch, defineProperty({}, styles$25.focused, this.state.focused),
      // eslint-disable-next-line no-nested-ternary
      disabled ? switched ? styles$25.switchGray : styles$25.switchLightGray : switched ? styles$25.switchDarkGray : styles$25.switchWhite);

      var sliderStyles = classnames(styles$25.slider, switched ? styles$25.sliderRight : styles$25.sliderLeft, switched && !disabled ? styles$25.sliderDark : styles$25.sliderLight);

      var inputStyles = classnames(styles$25.checkbox, defineProperty({}, styles$25.checkboxEnabled, !disabled));

      return React.createElement(
        'div',
        { className: switchStyles },
        React.createElement('input', {
          checked: switched,
          className: inputStyles,
          disabled: disabled,
          id: id,
          name: name,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          type: 'checkbox'
        }),
        React.createElement('div', { className: sliderStyles })
      );
    }
  }]);
  return Switch;
}(React.Component);

Switch.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  switched: PropTypes.bool
};
Switch.defaultProps = {
  disabled: false,
  switched: false
};

var styles$26 = { "Tabs": "_yb _2t", "tab": "_yc _25 _2s _2q _2t _2x undefined _3b _5e _58 _p6 _t2", "tabIsNotActive": "_yd _6d _5l", "tabIsActive": "_ye _5k _5n" };

var Tabs = function (_React$Component) {
  inherits(Tabs, _React$Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focusedTabIndex: undefined,
      hoveredTabIndex: undefined
    }, _this.handleTabClick = function (i, e) {
      var onChange = _this.props.onChange;

      onChange({ activeTabIndex: i, event: e });
    }, _this.handleTabFocus = function (i) {
      return _this.setState({ focusedTabIndex: i });
    }, _this.handleTabBlur = function () {
      return _this.setState({ focusedTabIndex: undefined });
    }, _this.handleTabMouseEnter = function (i) {
      return _this.setState({ hoveredTabIndex: i });
    }, _this.handleTabMouseLeave = function () {
      return _this.setState({ hoveredTabIndex: undefined });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Tabs, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          tabs = _props.tabs,
          activeTabIndex = _props.activeTabIndex;
      var _state = this.state,
          focusedTabIndex = _state.focusedTabIndex,
          hoveredTabIndex = _state.hoveredTabIndex;

      return React.createElement(
        'div',
        { className: styles$26.Tabs, role: 'tablist' },
        tabs.map(function (_ref2, i) {
          var _classnames;

          var text = _ref2.text,
              href = _ref2.href;

          var isActive = i === activeTabIndex;
          var isHovered = i === hoveredTabIndex;
          var isFocused = i === focusedTabIndex;
          var cs = classnames(styles$26.tab, (_classnames = {}, defineProperty(_classnames, styles$26.tabIsNotActive, !isActive), defineProperty(_classnames, styles$26.tabIsActive, isActive), _classnames));
          return React.createElement(
            'a',
            {
              'aria-selected': isActive,
              className: cs,
              href: href,
              key: i,
              onClick: function onClick(e) {
                return _this2.handleTabClick(i, e);
              },
              onFocus: function onFocus() {
                return _this2.handleTabFocus(i);
              },
              onBlur: _this2.handleTabBlur,
              onMouseEnter: function onMouseEnter() {
                return _this2.handleTabMouseEnter(i);
              },
              onMouseLeave: _this2.handleTabMouseLeave,
              role: 'tab'
            },
            React.createElement(
              Text,
              {
                bold: true,
                color: isActive || isHovered || isFocused ? 'darkGray' : 'gray',
                size: 'md'
              },
              text
            )
          );
        })
      );
    }
  }]);
  return Tabs;
}(React.Component);

Tabs.propTypes = {
  activeTabIndex: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.exact({
    text: PropTypes.node,
    href: PropTypes.string
  })).isRequired,
  onChange: PropTypes.func.isRequired
};

var styles$27 = { "textArea": "_yf _25 _2s _ta _s7 _s8 _s9 _td _sb _40", "normal": "_yg", "errored": "_yh", "enabled": "_yi _5n _5i", "disabled": "_yj _5l _5k" };

var TextArea = function (_React$Component) {
  inherits(TextArea, _React$Component);

  function TextArea() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TextArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false,
      errorIsOpen: false
    }, _this.handleChange = function (event) {
      if (event.target instanceof HTMLTextAreaElement) {
        _this.props.onChange({
          event: event,
          value: event.target.value
        });

        if (_this.props.errorMessage) {
          _this.setState({ errorIsOpen: true });
        }
      }
    }, _this.handleBlur = function (event) {
      if (_this.props.errorMessage) {
        _this.setState({ errorIsOpen: false });
      }
      if (event.target instanceof HTMLTextAreaElement && _this.props.onBlur) {
        _this.props.onBlur({
          event: event,
          value: event.target.value
        });
      }
    }, _this.handleFocus = function (event) {
      if (_this.props.errorMessage) {
        _this.setState({ errorIsOpen: true });
      }
      if (event.target instanceof HTMLTextAreaElement && _this.props.onFocus) {
        _this.props.onFocus({
          event: event,
          value: event.target.value
        });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TextArea, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          disabled = _props.disabled,
          errorMessage = _props.errorMessage,
          id = _props.id,
          idealErrorDirection = _props.idealErrorDirection,
          name = _props.name,
          placeholder = _props.placeholder,
          rows = _props.rows,
          value = _props.value;


      var classes = classnames(styles$27.textArea, disabled ? styles$27.disabled : styles$27.enabled, errorMessage ? styles$27.errored : styles$27.normal);

      return React.createElement(
        'span',
        null,
        React.createElement('textarea', {
          'aria-describedby': errorMessage && this.state.focused ? id + '-gestalt-error' : null,
          'aria-invalid': errorMessage ? 'true' : 'false',
          className: classes,
          disabled: disabled,
          id: id,
          name: name,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          placeholder: placeholder,
          ref: function ref(c) {
            _this2.textarea = c;
          },
          rows: rows,
          value: value
        }),
        errorMessage && this.state.errorIsOpen ? React.createElement(ErrorFlyout, {
          anchor: this.textarea,
          id: id + '-gestalt-error',
          idealDirection: idealErrorDirection,
          message: errorMessage,
          onDismiss: function onDismiss() {
            return _this2.setState({ errorIsOpen: false });
          },
          size: 'sm'
        }) : null
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      if (props.errorMessage !== state.errorMessage) {
        return {
          errorIsOpen: !!props.errorMessage,
          errorMessage: props.errorMessage
        };
      }

      return null;
    }
  }]);
  return TextArea;
}(React.Component);

TextArea.propTypes = {
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  idealErrorDirection: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string
};
TextArea.defaultProps = {
  disabled: false,
  idealErrorDirection: 'right',
  rows: 3
};

var styles$28 = { "textField": "_yk _25 _2s _2q _ta _s7 _s8 _s9 _td _40", "normal": "_yl", "errored": "_ym", "enabled": "_yn _5n _5i", "disabled": "_yo _5l _5k" };

var TextField = function (_React$Component) {
  inherits(TextField, _React$Component);

  function TextField() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TextField.__proto__ || Object.getPrototypeOf(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false,
      errorIsOpen: false
    }, _this.handleChange = function (event) {
      if (event.target instanceof HTMLInputElement) {
        _this.props.onChange({
          event: event,
          value: event.target.value
        });
      }
    }, _this.handleBlur = function (event) {
      if (_this.props.errorMessage) {
        _this.setState({ errorIsOpen: false });
      }
      if (event.target instanceof HTMLInputElement && _this.props.onBlur) {
        _this.props.onBlur({
          event: event,
          value: event.target.value
        });
      }
    }, _this.handleFocus = function (event) {
      if (_this.props.errorMessage) {
        _this.setState({ errorIsOpen: true });
      }
      if (event.target instanceof HTMLInputElement && _this.props.onFocus) {
        _this.props.onFocus({
          event: event,
          value: event.target.value
        });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TextField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          autoComplete = _props.autoComplete,
          disabled = _props.disabled,
          errorMessage = _props.errorMessage,
          hasError = _props.hasError,
          id = _props.id,
          idealErrorDirection = _props.idealErrorDirection,
          name = _props.name,
          placeholder = _props.placeholder,
          type = _props.type,
          value = _props.value;


      var classes = classnames(styles$28.textField, disabled ? styles$28.disabled : styles$28.enabled, hasError || errorMessage ? styles$28.errored : styles$28.normal);

      // type='number' doesn't work on ios safari without a pattern
      // https://stackoverflow.com/questions/14447668/input-type-number-is-not-showing-a-number-keypad-on-ios
      var pattern = type === 'number' ? '\\d*' : undefined;

      return React.createElement(
        'span',
        null,
        React.createElement('input', {
          'aria-describedby': errorMessage && this.state.focused ? id + '-gestalt-error' : null,
          'aria-invalid': errorMessage || hasError ? 'true' : 'false',
          autoComplete: autoComplete,
          className: classes,
          disabled: disabled,
          id: id,
          name: name,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          pattern: pattern,
          placeholder: placeholder,
          ref: function ref(c) {
            _this2.textfield = c;
          },
          type: type,
          value: value
        }),
        errorMessage && this.state.errorIsOpen && React.createElement(ErrorFlyout, {
          anchor: this.textfield,
          id: id + '-gestalt-error',
          idealDirection: idealErrorDirection,
          message: errorMessage,
          onDismiss: function onDismiss() {
            return _this2.setState({ errorIsOpen: false });
          },
          size: 'sm'
        })
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      if (props.errorMessage !== state.errorMessage) {
        return {
          errorIsOpen: !!props.errorMessage,
          errorMessage: props.errorMessage
        };
      }

      return null;
    }
  }]);
  return TextField;
}(React.Component);

TextField.propTypes = {
  autoComplete: PropTypes.oneOf(['current-password', 'on', 'off', 'username']),
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  id: PropTypes.string.isRequired,
  idealErrorDirection: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['date', 'email', 'number', 'password', 'text', 'url']),
  value: PropTypes.string
};
TextField.defaultProps = {
  disabled: false,
  hasError: false,
  idealErrorDirection: 'right',
  type: 'text'
};

function Toast(props) {
  var _props$color = props.color,
      color = _props$color === undefined ? 'darkGray' : _props$color,
      icon = props.icon,
      thumbnail = props.thumbnail,
      text = props.text;


  var contents = void 0;
  // Confirmation Toasts
  if (text instanceof Array && text.length > 1) {
    contents = React.createElement(
      Box,
      { xs: { display: 'flex' } },
      React.createElement(
        Box,
        { xs: { display: 'flexColumn' }, flex: 'none', justifyContent: 'center' },
        thumbnail ? React.createElement(
          Mask,
          { shape: 'rounded', height: 48, width: 48 },
          thumbnail
        ) : null
      ),
      React.createElement(
        Box,
        {
          xs: { display: 'flexColumn' },
          justifyContent: 'center',
          dangerouslySetInlineStyle: { __style: { paddingLeft: 10 } }
        },
        React.createElement(
          Box,
          {
            dangerouslySetInlineStyle: { __style: { fontWeight: 'normal' } }
          },
          React.createElement(
            Text,
            { color: 'white', size: 'lg' },
            text[0]
          )
        ),
        React.createElement(
          Text,
          { bold: true, color: 'white', size: 'lg' },
          text[1]
        )
      )
    );
  } else {
    // Toasts as Guides
    contents = React.createElement(
      Box,
      {
        xs: { display: 'flex' },
        justifyContent: 'between',
        alignItems: 'center'
      },
      React.createElement(
        Text,
        { bold: true, color: 'white', size: 'lg' },
        text
      ),
      icon && React.createElement(
        Box,
        { dangerouslySetInlineStyle: { __style: { paddingLeft: 24 } } },
        React.createElement(Icon, { accessibilityLabel: '', color: 'white', icon: icon, size: 36 })
      )
    );
  }

  return React.createElement(
    Box,
    { marginBottom: 3, paddingX: 4, maxWidth: 376, width: '100vw' },
    React.createElement(
      Box,
      { color: color, fit: true, paddingX: 8, paddingY: 5, shape: 'pill' },
      contents
    )
  );
}

Toast.propTypes = {
  color: PropTypes.oneOf(['darkGray', 'orange']),
  icon: PropTypes.oneOf(['arrow-circle-forward']), // leaving open to additional icons in the future
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  thumbnail: PropTypes.element
};

function Tooltip(props) {
  var anchor = props.anchor,
      children = props.children,
      idealDirection = props.idealDirection,
      onDismiss = props.onDismiss,
      _props$positionRelati = props.positionRelativeToAnchor,
      positionRelativeToAnchor = _props$positionRelati === undefined ? true : _props$positionRelati,
      _props$size = props.size,
      size = _props$size === undefined ? 'md' : _props$size;


  if (!anchor) {
    return null;
  }

  return React.createElement(
    Controller,
    {
      anchor: anchor,
      bgColor: 'darkGray',
      idealDirection: idealDirection,
      positionRelativeToAnchor: positionRelativeToAnchor,
      onDismiss: onDismiss,
      size: size
    },
    React.createElement(
      Box,
      { column: 12, padding: 3 },
      children
    )
  );
}

Tooltip.propTypes = {
  anchor: PropTypes.shape({
    contains: PropTypes.func,
    getBoundingClientRect: PropTypes.func
  }),
  children: PropTypes.node,
  idealDirection: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  onDismiss: PropTypes.func.isRequired,
  positionRelativeToAnchor: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

var styles$29 = { "touchable": "_yp _25", "fullHeight": "_yq", "fullWidth": "_yr _40", "square": "_ys _56", "circle": "_yt _57", "rounded": "_yu _59", "roundedTop": "_yv _5a", "roundedRight": "_yw _5b", "roundedBottom": "_yx _5c", "roundedLeft": "_yy _5d", "pill": "_yz _58", "pointer": "_z0 _t2", "zoomIn": "_z1 _t3", "zoomOut": "_z2 _t4", "copy": "_z3 _t5", "move": "_z4 _t6", "noDrop": "_z5 _t7", "grab": "_z6 _t8", "grabbing": "_z7 _t9" };

var SPACE_CHAR_CODE = 32;
var ENTER_CHAR_CODE = 13;

var Touchable = function (_React$Component) {
  inherits(Touchable, _React$Component);

  function Touchable() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Touchable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Touchable.__proto__ || Object.getPrototypeOf(Touchable)).call.apply(_ref, [this].concat(args))), _this), _this.handleKeyPress = function (event) {
      var onTouch = _this.props.onTouch;
      // Check to see if space or enter were pressed

      if (onTouch && (event.charCode === SPACE_CHAR_CODE || event.charCode === ENTER_CHAR_CODE)) {
        // Prevent the default action to stop scrolling when space is pressed
        event.preventDefault();
        onTouch({ event: event });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Touchable, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          children = _props.children,
          _props$fullWidth = _props.fullWidth,
          fullWidth = _props$fullWidth === undefined ? true : _props$fullWidth,
          fullHeight = _props.fullHeight,
          _props$mouseCursor = _props.mouseCursor,
          mouseCursor = _props$mouseCursor === undefined ? 'pointer' : _props$mouseCursor,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          onTouch = _props.onTouch,
          _props$shape = _props.shape,
          shape = _props$shape === undefined ? 'square' : _props$shape;


      var classes = classnames(styles$29.touchable, styles$29[mouseCursor], styles$29[shape], (_classnames = {}, defineProperty(_classnames, styles$29.fullHeight, fullHeight), defineProperty(_classnames, styles$29.fullWidth, fullWidth), _classnames));

      return React.createElement(
        'div',
        {
          className: classes,
          onClick: function onClick(event) {
            return onTouch && onTouch({ event: event });
          },
          onMouseEnter: function (_onMouseEnter) {
            function onMouseEnter(_x) {
              return _onMouseEnter.apply(this, arguments);
            }

            onMouseEnter.toString = function () {
              return _onMouseEnter.toString();
            };

            return onMouseEnter;
          }(function (event) {
            return onMouseEnter && onMouseEnter({ event: event });
          }),
          onMouseLeave: function (_onMouseLeave) {
            function onMouseLeave(_x2) {
              return _onMouseLeave.apply(this, arguments);
            }

            onMouseLeave.toString = function () {
              return _onMouseLeave.toString();
            };

            return onMouseLeave;
          }(function (event) {
            return onMouseLeave && onMouseLeave({ event: event });
          }),
          onKeyPress: this.handleKeyPress,
          role: 'button',
          tabIndex: '0'
        },
        children
      );
    }
  }]);
  return Touchable;
}(React.Component);


Touchable.propTypes = {
  children: PropTypes.node,
  fullHeight: PropTypes.bool,
  fullWidth: PropTypes.bool,
  mouseCursor: PropTypes.oneOf(['copy', 'grab', 'grabbing', 'move', 'noDrop', 'pointer', 'zoomIn', 'zoomOut']),
  onTouch: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  shape: PropTypes.oneOf(['square', 'rounded', 'pill', 'circle', 'roundedTop', 'roundedBottom', 'roundedLeft', 'roundedRight'])
};

var styles$30 = { "video": "_z8 _27 _2j _40", "player": "_z9 _2h _40", "playhead": "_za _2t _31 _40 _t2" };

var VideoPlayhead = function (_React$PureComponent) {
  inherits(VideoPlayhead, _React$PureComponent);

  function VideoPlayhead() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, VideoPlayhead);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = VideoPlayhead.__proto__ || Object.getPrototypeOf(VideoPlayhead)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      seeking: false
    }, _this.setPlayheadRef = function (ref) {
      _this.playhead = ref;
    }, _this.seek = function (clientX) {
      if (_this.playhead) {
        var _this$props = _this.props,
            _duration = _this$props.duration,
            _seek = _this$props.seek;

        var _this$playhead$getBou = _this.playhead.getBoundingClientRect(),
            left = _this$playhead$getBou.left,
            width = _this$playhead$getBou.width;

        var percent = Math.max(0, Math.min((clientX - left) / width, 1));
        var newTime = percent * _duration;
        _seek(newTime);
      }
    }, _this.stopClick = function (event) {
      return event.stopPropagation();
    }, _this.handleMouseDown = function (event) {
      _this.setState({ seeking: true });
      _this.seek(event.clientX);
    }, _this.handleMouseMove = function (event) {
      var seeking = _this.state.seeking;

      if (seeking) {
        _this.seek(event.clientX);
      }
    }, _this.handleMouseUp = function () {
      _this.setState({ seeking: false });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(VideoPlayhead, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentTime = _props.currentTime,
          duration = _props.duration;

      var width = Math.floor(currentTime * 10000 / duration) / 100 + '%';
      return React.createElement(
        Box,
        {
          position: 'relative',
          display: 'flex',
          flex: 'grow',
          alignItems: 'center',
          height: 16
        },
        React.createElement(
          'div',
          {
            'aria-valuemax': duration,
            'aria-valuemin': '0',
            'aria-valuenow': currentTime,
            className: styles$30.playhead,
            onClick: this.stopClick,
            onKeyPress: this.stopClick,
            onMouseDown: this.handleMouseDown,
            onMouseMove: this.handleMouseMove,
            onMouseUp: this.handleMouseUp,
            ref: this.setPlayheadRef,
            role: 'progressbar',
            tabIndex: '-1'
          },
          React.createElement(
            Box,
            {
              left: true,
              right: true,
              position: 'absolute',
              color: 'lightGray',
              shape: 'rounded',
              height: 4
            },
            React.createElement(Box, { color: 'white', shape: 'rounded', height: '100%', width: width })
          ),
          React.createElement(
            Box,
            {
              position: 'absolute',
              shape: 'rounded',
              height: 4,
              dangerouslySetInlineStyle: { __style: { left: width } }
            },
            React.createElement(Box, {
              shape: 'circle',
              width: 16,
              height: 16,
              color: 'white',
              marginLeft: -2,
              dangerouslySetInlineStyle: { __style: { marginTop: -6 } }
            })
          )
        )
      );
    }
  }]);
  return VideoPlayhead;
}(React.PureComponent);

VideoPlayhead.propTypes = {
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  seek: PropTypes.func.isRequired
};

var fullscreenEnabled = function fullscreenEnabled() {
  return (
    // $FlowIssue - vendor prefix missing from Flow
    document.fullscreenEnabled ||
    // $FlowIssue - vendor prefix missing from Flow
    document.webkitFullscreenEnabled ||
    // $FlowIssue - vendor prefix missing from Flow
    document.mozFullScreenEnabled ||
    // $FlowIssue - vendor prefix missing from Flow
    document.msFullscreenEnabled
  );
};

var timeToString = function timeToString(time) {
  var rounded = Math.floor(time || 0);
  var minutes = Math.floor(rounded / 60);
  var seconds = rounded - minutes * 60;
  var minutesStr = minutes < 10 ? '0' + minutes : minutes;
  var secondsStr = seconds < 10 ? '0' + seconds : seconds;
  return minutesStr + ':' + secondsStr;
};

var VideoControls = function (_React$Component) {
  inherits(VideoControls, _React$Component);

  function VideoControls() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, VideoControls);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = VideoControls.__proto__ || Object.getPrototypeOf(VideoControls)).call.apply(_ref, [this].concat(args))), _this), _this.handleFullscreenChange = function (_ref2) {
      var event = _ref2.event;
      var onFullscreenChange = _this.props.onFullscreenChange;

      event.stopPropagation();
      onFullscreenChange();
    }, _this.handlePlayingChange = function (_ref3) {
      var event = _ref3.event;
      var _this$props = _this.props,
          playing = _this$props.playing,
          onPause = _this$props.onPause,
          onPlay = _this$props.onPlay;

      if (playing) {
        onPause(event);
      } else {
        onPlay(event);
      }
    }, _this.handleVolumeChange = function (_ref4) {
      var event = _ref4.event;
      var onVolumeChange = _this.props.onVolumeChange;

      onVolumeChange(event);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(VideoControls, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          accessibilityMaximizeLabel = _props.accessibilityMaximizeLabel,
          accessibilityMinimizeLabel = _props.accessibilityMinimizeLabel,
          accessibilityMuteLabel = _props.accessibilityMuteLabel,
          accessibilityPauseLabel = _props.accessibilityPauseLabel,
          accessibilityPlayLabel = _props.accessibilityPlayLabel,
          accessibilityUnmuteLabel = _props.accessibilityUnmuteLabel,
          currentTime = _props.currentTime,
          duration = _props.duration,
          fullscreen = _props.fullscreen,
          playing = _props.playing,
          seek = _props.seek,
          volume = _props.volume;

      var muted = volume === 0;
      var showFullscreenButton = typeof document !== 'undefined' && !!fullscreenEnabled();
      return React.createElement(
        Box,
        {
          position: 'absolute',
          bottom: true,
          left: true,
          right: true,
          column: 12,
          padding: 2,
          display: 'flex',
          alignItems: 'center'
        },
        React.createElement(
          Box,
          { padding: 2 },
          React.createElement(
            Touchable,
            { onTouch: this.handlePlayingChange, fullWidth: false },
            React.createElement(Icon, {
              accessibilityLabel: playing ? accessibilityPauseLabel : accessibilityPlayLabel,
              color: 'white',
              icon: playing ? 'pause' : 'play',
              size: 20
            })
          )
        ),
        React.createElement(
          Box,
          { width: 50, padding: 2 },
          React.createElement(
            Text,
            { color: 'white', align: 'right', size: 'xs' },
            timeToString(currentTime)
          )
        ),
        React.createElement(
          Box,
          { padding: 2, flex: 'grow' },
          React.createElement(VideoPlayhead, {
            currentTime: currentTime,
            duration: duration,
            seek: seek
          })
        ),
        React.createElement(
          Box,
          { width: 50, padding: 2 },
          React.createElement(
            Text,
            { color: 'white', align: 'right', size: 'xs' },
            timeToString(duration)
          )
        ),
        React.createElement(
          Box,
          { padding: 2 },
          React.createElement(
            Touchable,
            { onTouch: this.handleVolumeChange, fullWidth: false },
            React.createElement(Icon, {
              accessibilityLabel: muted ? accessibilityUnmuteLabel : accessibilityMuteLabel,
              color: 'white',
              icon: muted ? 'mute' : 'sound',
              size: 20
            })
          )
        ),
        showFullscreenButton && React.createElement(
          Box,
          { padding: 2 },
          React.createElement(
            Touchable,
            { onTouch: this.handleFullscreenChange, fullWidth: false },
            React.createElement(Icon, {
              accessibilityLabel: fullscreen ? accessibilityMinimizeLabel : accessibilityMaximizeLabel,
              color: 'white',
              icon: fullscreen ? 'minimize' : 'maximize',
              size: 20
            })
          )
        )
      );
    }
  }]);
  return VideoControls;
}(React.Component);

VideoControls.propTypes = {
  accessibilityMaximizeLabel: PropTypes.string.isRequired,
  accessibilityMinimizeLabel: PropTypes.string.isRequired,
  accessibilityMuteLabel: PropTypes.string.isRequired,
  accessibilityPauseLabel: PropTypes.string.isRequired,
  accessibilityPlayLabel: PropTypes.string.isRequired,
  accessibilityUnmuteLabel: PropTypes.string.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  fullscreen: PropTypes.bool.isRequired,
  onFullscreenChange: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onVolumeChange: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
  seek: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired
};

// For more information on fullscreen and vendor prefixes see
// https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API

var requestFullscreen = function requestFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
    // $FlowIssue - vendor prefix missing from Flow
  } else if (element.webkitRequestFullscreen) {
    // $FlowIssue - vendor prefix missing from Flow
    element.webkitRequestFullscreen();
    // $FlowIssue - vendor prefix missing from Flow
  } else if (element.mozRequestFullScreen) {
    // $FlowIssue - vendor prefix missing from Flow
    element.mozRequestFullScreen();
    // $FlowIssue - vendor prefix missing from Flow
  } else if (element.msRequestFullscreen) {
    // $FlowIssue - vendor prefix missing from Flow
    element.msRequestFullscreen();
  }
};

var exitFullscreen = function exitFullscreen() {
  // $FlowIssue - vendor prefix missing from Flow
  if (document.exitFullscreen) {
    // $FlowIssue - vendor prefix missing from Flow
    document.exitFullscreen();
    // $FlowIssue - vendor prefix missing from Flow
  } else if (document.webkitExitFullscreen) {
    // $FlowIssue - vendor prefix missing from Flow
    document.webkitExitFullscreen();
    // $FlowIssue - vendor prefix missing from Flow
  } else if (document.mozCancelFullScreen) {
    // $FlowIssue - vendor prefix missing from Flow
    document.mozCancelFullScreen();
    // $FlowIssue - vendor prefix missing from Flow
  } else if (document.msExitFullscreen) {
    // $FlowIssue - vendor prefix missing from Flow
    document.msExitFullscreen();
  }
};

// Normally document.fullscreen suffices here as a flag, but IE11 does not
// have a vendor specific version so we must instead use the actual element
var isFullscreen = function isFullscreen() {
  return (
    // $FlowIssue - vendor prefix missing from Flow
    document.fullscreenElement ||
    // $FlowIssue - vendor prefix missing from Flow
    document.webkitFullscreenElement ||
    // $FlowIssue - vendor prefix missing from Flow
    document.mozFullScreenElement ||
    // $FlowIssue - vendor prefix missing from Flow
    document.msFullscreenElement
  );
};

var addFullscreenEventListener = function addFullscreenEventListener(handler) {
  document.addEventListener('fullscreenchange', handler);
  document.addEventListener('webkitfullscreenchange', handler);
  document.addEventListener('mozfullscreenchange', handler);
  document.addEventListener('MSFullscreenChange', handler);
};

var removeFullscreenEventListener = function removeFullscreenEventListener(handler) {
  document.removeEventListener('fullscreenchange', handler);
  document.removeEventListener('webkitfullscreenchange', handler);
  document.removeEventListener('mozfullscreenchange', handler);
  document.removeEventListener('MSFullscreenChange', handler);
};

var isNewSource = function isNewSource(oldSource, newSource) {
  if ((typeof oldSource === 'undefined' ? 'undefined' : _typeof(oldSource)) !== (typeof newSource === 'undefined' ? 'undefined' : _typeof(newSource))) {
    // If the source type changed from string to Array
    // or vice versa, we have a new source
    return true;
  } else if (Array.isArray(newSource)) {
    if (oldSource.length !== newSource.length) {
      // If the sources are both an Array, and the lengths
      // do not match we evaluate as a new source
      return true;
    }
    // If the sources are both an Array and the same length,
    // verify every element stayed the same
    return newSource.some(function (source, index) {
      return !Array.isArray(oldSource) || source.type !== oldSource[index].type || source.src !== oldSource[index].src;
    });
  }
  // If the sources are both a string, simply compare
  // the new with the old
  return newSource !== oldSource;
};

var Video = function (_React$PureComponent) {
  inherits(Video, _React$PureComponent);

  function Video() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentTime: 0,
      duration: 0,
      fullscreen: false
    }, _this.setPlayerRef = function (ref) {
      _this.player = ref;
    }, _this.setVideoRef = function (ref) {
      _this.video = ref;
    }, _this.setPlaybackRate = function (playbackRate) {
      if (_this.video) {
        _this.video.playbackRate = playbackRate;
      }
    }, _this.setVolume = function (volume) {
      if (_this.video) {
        _this.video.volume = volume;
      }
    }, _this.load = function () {
      if (_this.video) {
        _this.video.load();
      }
    }, _this.pause = function () {
      if (_this.video) {
        _this.video.pause();
      }
    }, _this.play = function () {
      if (_this.video) {
        _this.video.play();
      }
    }, _this.seek = function (time) {
      if (_this.video) {
        _this.video.currentTime = time;
      }
    }, _this.toggleFullscreen = function () {
      if (isFullscreen()) {
        exitFullscreen();
      } else if (_this.player) {
        requestFullscreen(_this.player);
      }
    }, _this.handleCanPlay = function (event) {
      var _this$props = _this.props,
          onReady = _this$props.onReady,
          playbackRate = _this$props.playbackRate,
          playing = _this$props.playing;
      // Simulate an autoplay effect if the component was mounted with
      // playing set to true

      if (playing) {
        _this.play();
      }
      // Set the initial playback rate when video is raedy to play
      _this.setPlaybackRate(playbackRate);

      if (onReady) {
        onReady({ event: event });
      }
    }, _this.handleDurationChange = function (event) {
      var onDurationChange = _this.props.onDurationChange;

      var duration = _this.video && _this.video.duration || 0;
      _this.setState({ duration: duration });

      if (onDurationChange) {
        onDurationChange({ event: event, duration: duration });
      }
    }, _this.handleEnded = function (event) {
      var onEnded = _this.props.onEnded;


      if (onEnded) {
        onEnded({ event: event });
      }
    }, _this.handleFullscreenChange = function (event) {
      var onFullscreenChange = _this.props.onFullscreenChange;

      var fullscreen = !!isFullscreen();
      _this.setState({ fullscreen: fullscreen });

      if (onFullscreenChange) {
        onFullscreenChange({ event: event, fullscreen: fullscreen });
      }
    }, _this.handlePlay = function (event) {
      var onPlay = _this.props.onPlay;


      if (onPlay) {
        onPlay({ event: event });
      }
    }, _this.handlePause = function (event) {
      var onPause = _this.props.onPause;


      if (onPause) {
        onPause({ event: event });
      }
    }, _this.handleProgress = function (event) {
      var onLoadedChange = _this.props.onLoadedChange;

      var _ref2 = _this.video || {},
          buffered = _ref2.buffered;

      var loaded = buffered && buffered.length > 0 ? buffered.end(buffered.length - 1) : 0;

      if (onLoadedChange) {
        onLoadedChange({ event: event, loaded: loaded });
      }
    }, _this.handleSeek = function (event) {
      var onSeek = _this.props.onSeek;


      if (onSeek) {
        onSeek({ event: event });
      }
    }, _this.handleTimeUpdate = function (event) {
      var onTimeChange = _this.props.onTimeChange;

      var currentTime = _this.video && _this.video.currentTime || 0;
      _this.setState({ currentTime: currentTime });

      if (onTimeChange) {
        onTimeChange({ event: event, time: currentTime });
      }
    }, _this.handleVolumeChange = function (event) {
      var onVolumeChange = _this.props.onVolumeChange;

      var muted = _this.video && _this.video.muted || false;

      if (onVolumeChange) {
        onVolumeChange({ event: event, volume: muted ? 1 : 0 });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Video, [{
    key: 'componentDidMount',


    /**
     * React lifecycle hooks pertinent to Video
     */

    value: function componentDidMount() {
      // Set up event listeners to catch backdoors in fullscreen
      // changes such as using the ESC key to exit
      if (typeof document !== 'undefined') {
        addFullscreenEventListener(this.handleFullscreenChange);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // If the video source changed, reload the video
      if (isNewSource(prevProps.src, this.props.src)) {
        this.load();
      }
      // If the volume changed, set the new volume
      if (prevProps.volume !== this.props.volume) {
        this.setVolume(this.props.volume);
      }
      // If the playback rate changed, set the new rate
      if (prevProps.playbackRate !== this.props.playbackRate) {
        this.setPlaybackRate(this.props.playbackRate);
      }
      // If the playback changed, play or pause the video
      if (prevProps.playing !== this.props.playing) {
        if (this.props.playing) {
          this.play();
        } else {
          this.pause();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      removeFullscreenEventListener(this.handleFullscreenChange);
    }

    /**
     * DOM reference housekeeping that is needed for functionality
     */

    // The player element encapsulates the actual video DOM
    // element as well as the controls to bring both fullscreen


    // The actual reference to the video HTML DOM element


    /**
     * Functions that directly interact with the HTML video element
     */

    // Set the video to the desired playback rate: 1 (normal)


    // Set the video to the desired volume: 0 (muted) -> 1 (max)


    // Change the video source and re-load the video


    // Pause the video


    // Play the video


    // Seek the video to the desired time


    // Enter/exit fullscreen video player mode


    /**
     * Handlers for various media events on the video
     */

    // Sent when enough data is available that the media can be played


    // The metadata has loaded or changed, indicating a change in
    // duration of the media


    // Sent when playback completes.


    // Sent when the video is switched to/out-of fullscreen mode


    // Sent when playback of the media starts after having been paused.


    // Sent when playback is paused.


    // Sent periodically to inform interested parties of progress downloading the media


    // Sent when a seek operation completes.


    // The time indicated by the element's currentTime attribute has changed


    // Sent when the audio volume changes

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          aspectRatio = _props.aspectRatio,
          captions = _props.captions,
          loop = _props.loop,
          playing = _props.playing,
          playsInline = _props.playsInline,
          poster = _props.poster,
          preload = _props.preload,
          src = _props.src,
          volume = _props.volume;
      var _state = this.state,
          currentTime = _state.currentTime,
          duration = _state.duration,
          fullscreen = _state.fullscreen;


      var paddingBottom = fullscreen && '0' || 1 / aspectRatio * 100 + '%';

      return React.createElement(
        'div',
        {
          ref: this.setPlayerRef,
          className: styles$30.player,
          style: { paddingBottom: paddingBottom, height: fullscreen ? '100%' : 0 }
        },
        React.createElement(
          'video',
          {
            autoPlay: playing,
            loop: loop,
            muted: volume === 0,
            playsInline: playsInline,
            poster: poster,
            preload: preload,
            src: typeof src === 'string' ? src : undefined,
            ref: this.setVideoRef,
            className: styles$30.video,
            onCanPlay: this.handleCanPlay,
            onDurationChange: this.handleDurationChange,
            onEnded: this.handleEnded,
            onSeeked: this.handleSeek,
            onTimeUpdate: this.handleTimeUpdate,
            onProgress: this.handleProgress
          },
          Array.isArray(src) && src.map(function (source) {
            return React.createElement('source', { key: source.src, src: source.src, type: source.type });
          }),
          React.createElement('track', { kind: 'captions', src: captions })
        ),
        this.props.controls && React.createElement(VideoControls, {
          accessibilityMaximizeLabel: this.props.accessibilityMaximizeLabel,
          accessibilityMinimizeLabel: this.props.accessibilityMinimizeLabel,
          accessibilityMuteLabel: this.props.accessibilityMuteLabel,
          accessibilityPauseLabel: this.props.accessibilityPauseLabel,
          accessibilityPlayLabel: this.props.accessibilityPlayLabel,
          accessibilityUnmuteLabel: this.props.accessibilityUnmuteLabel,
          currentTime: currentTime,
          duration: duration,
          fullscreen: fullscreen,
          onPlay: this.handlePlay,
          onPause: this.handlePause,
          onFullscreenChange: this.toggleFullscreen,
          onVolumeChange: this.handleVolumeChange,
          playing: playing,
          seek: this.seek,
          volume: volume
        })
      );
    }
  }]);
  return Video;
}(React.PureComponent);

Video.propTypes = {
  accessibilityMaximizeLabel: PropTypes.string,
  accessibilityMinimizeLabel: PropTypes.string,
  accessibilityMuteLabel: PropTypes.string,
  accessibilityPauseLabel: PropTypes.string,
  accessibilityPlayLabel: PropTypes.string,
  accessibilityUnmuteLabel: PropTypes.string,
  aspectRatio: PropTypes.number.isRequired,
  captions: PropTypes.string.isRequired,
  controls: PropTypes.bool,
  loop: PropTypes.bool,
  onDurationChange: PropTypes.func,
  onEnded: PropTypes.func,
  onFullscreenChange: PropTypes.func,
  onLoadedChange: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onReady: PropTypes.func,
  onSeek: PropTypes.func,
  onTimeChange: PropTypes.func,
  onVolumeChange: PropTypes.func,
  playbackRate: PropTypes.number,
  playing: PropTypes.bool,
  playsInline: PropTypes.bool,
  poster: PropTypes.string,
  preload: PropTypes.oneOf(['auto', 'metadata', 'none']),
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['video/m3u8', 'video/mp4', 'video/ogg']).isRequired,
    src: PropTypes.string.isRequired
  }))]).isRequired,
  volume: PropTypes.number
};
Video.defaultProps = {
  playbackRate: 1,
  playing: false,
  preload: 'auto',
  volume: 1
};

exports.Avatar = Avatar;
exports.Box = Box;
exports.Button = Button;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.Collection = Collection;
exports.Column = Column;
exports.Container = Container;
exports.Divider = Divider;
exports.ErrorFlyout = ErrorFlyout;
exports.Flyout = Flyout;
exports.GroupAvatar = GroupAvatar;
exports.Heading = Heading;
exports.Icon = Icon;
exports.IconButton = IconButton;
exports.Image = Image;
exports.Label = Label;
exports.Letterbox = Letterbox;
exports.Link = Link;
exports.Mask = Mask;
exports.Masonry = Masonry;
exports.MasonryDefaultLayout = MasonryLayout;
exports.MasonryUniformRowLayout = UniformRowLayout;
exports.Modal = Modal;
exports.Pog = Pog;
exports.Pulsar = Pulsar;
exports.RadioButton = RadioButton;
exports.ScrollFetch = ScrollFetch;
exports.SearchField = SearchField;
exports.SegmentedControl = SegmentedControl;
exports.SelectList = SelectList;
exports.Spinner = Spinner;
exports.Sticky = Sticky;
exports.Switch = Switch;
exports.Tabs = Tabs;
exports.Text = Text;
exports.TextArea = TextArea;
exports.TextField = TextField;
exports.Toast = Toast;
exports.Tooltip = Tooltip;
exports.Touchable = Touchable;
exports.Video = Video;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdGFsdC5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL0JveC9zdHlsZS5qcyIsIi4uL3NyYy9Cb3gvdHJhbnNmb3Jtcy5qcyIsIi4uL3NyYy9Cb3gvQm94LmpzIiwiLi4vc3JjL0ljb24vaWNvbnMvaW5kZXguanMiLCIuLi9zcmMvSWNvbi9JY29uLmpzIiwiLi4vc3JjL0ltYWdlL0ltYWdlLmpzIiwiLi4vc3JjL01hc2svTWFzay5qcyIsIi4uL3NyYy9BdmF0YXIvQXZhdGFyLmpzIiwiLi4vc3JjL1RleHQvVGV4dC5qcyIsIi4uL3NyYy9CdXR0b24vQnV0dG9uLmpzIiwiLi4vc3JjL0NhcmQvQ2FyZC5qcyIsIi4uL3NyYy9DaGVja2JveC9DaGVja2JveC5qcyIsIi4uL3NyYy9Db2xsZWN0aW9uL0NvbGxlY3Rpb24uanMiLCIuLi9zcmMvQ29sdW1uL0NvbHVtbi5qcyIsIi4uL3NyYy9Db250YWluZXIvQ29udGFpbmVyLmpzIiwiLi4vc3JjL0RpdmlkZXIvRGl2aWRlci5qcyIsIi4uL3NyYy9GbHlvdXRVdGlscy9DYXJldC5qcyIsIi4uL3NyYy9GbHlvdXRVdGlscy9Db250ZW50cy5qcyIsIi4uL3NyYy9GbHlvdXRVdGlscy9Db250cm9sbGVyLmpzIiwiLi4vc3JjL0Vycm9yRmx5b3V0L0Vycm9yRmx5b3V0LmpzIiwiLi4vc3JjL0ZseW91dC9GbHlvdXQuanMiLCIuLi9zcmMvR3JvdXBBdmF0YXIvR3JvdXBBdmF0YXIuanMiLCIuLi9zcmMvSGVhZGluZy9IZWFkaW5nLmpzIiwiLi4vc3JjL1BvZy9Qb2cuanMiLCIuLi9zcmMvSWNvbkJ1dHRvbi9JY29uQnV0dG9uLmpzIiwiLi4vc3JjL0xhYmVsL0xhYmVsLmpzIiwiLi4vc3JjL0xldHRlcmJveC9MZXR0ZXJib3guanMiLCIuLi9zcmMvTGluay9MaW5rLmpzIiwiLi4vc3JjL2RlYm91bmNlLmpzIiwiLi4vc3JjL1Njcm9sbEZldGNoL0ZldGNoSXRlbXMuanMiLCIuLi9zcmMvU2Nyb2xsRmV0Y2gvU2Nyb2xsQ29udGFpbmVyLmpzIiwiLi4vc3JjL3Rocm90dGxlLmpzIiwiLi4vc3JjL01hc29ucnkvTWVhc3VyZW1lbnRTdG9yZS5qcyIsIi4uL3NyYy9TY3JvbGxGZXRjaC9zY3JvbGxVdGlscy5qcyIsIi4uL3NyYy9NYXNvbnJ5L2xlZ2FjeUxheW91dFN5bWJvbHMuanMiLCIuLi9zcmMvTWFzb25yeS9kZWZhdWx0TGF5b3V0LmpzIiwiLi4vc3JjL01hc29ucnkvdW5pZm9ybVJvd0xheW91dC5qcyIsIi4uL3NyYy9NYXNvbnJ5L2Z1bGxXaWR0aExheW91dC5qcyIsIi4uL3NyYy9NYXNvbnJ5L2xheW91dC9tYXNvbnJ5LmpzIiwiLi4vc3JjL01hc29ucnkvbGF5b3V0L3VuaWZvcm1Sb3cuanMiLCIuLi9zcmMvTWFzb25yeS9NYXNvbnJ5LmpzIiwiLi4vc3JjL01vZGFsL01vZGFsLmpzIiwiLi4vc3JjL1B1bHNhci9QdWxzYXIuanMiLCIuLi9zcmMvUmFkaW9CdXR0b24vUmFkaW9CdXR0b24uanMiLCIuLi9zcmMvU2Nyb2xsRmV0Y2gvU2Nyb2xsRmV0Y2guanMiLCIuLi9zcmMvU2VhcmNoRmllbGQvU2VhcmNoRmllbGQuanMiLCIuLi9zcmMvU2VnbWVudGVkQ29udHJvbC9TZWdtZW50ZWRDb250cm9sLmpzIiwiLi4vc3JjL1NlbGVjdExpc3QvU2VsZWN0TGlzdC5qcyIsIi4uL3NyYy9TcGlubmVyL1NwaW5uZXIuanMiLCIuLi9zcmMvU3RpY2t5L1N0aWNreS5qcyIsIi4uL3NyYy9Td2l0Y2gvU3dpdGNoLmpzIiwiLi4vc3JjL1RhYnMvVGFicy5qcyIsIi4uL3NyYy9UZXh0QXJlYS9UZXh0QXJlYS5qcyIsIi4uL3NyYy9UZXh0RmllbGQvVGV4dEZpZWxkLmpzIiwiLi4vc3JjL1RvYXN0L1RvYXN0LmpzIiwiLi4vc3JjL1Rvb2x0aXAvVG9vbHRpcC5qcyIsIi4uL3NyYy9Ub3VjaGFibGUvVG91Y2hhYmxlLmpzIiwiLi4vc3JjL1ZpZGVvL1ZpZGVvUGxheWhlYWQuanMiLCIuLi9zcmMvVmlkZW8vVmlkZW9Db250cm9scy5qcyIsIi4uL3NyYy9WaWRlby9WaWRlby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xuXG4vKlxuXG5TdHlsZSBpcyBhIG1vbm9pZCB0aGF0IGNhcHR1cmUgdGhlIFwidG8tYmUtYXBwbGllZFwiIHN0eWxlcyAoaW5saW5lIGFuZCBjbGFzc2VzKVxuZm9yIGEgQm94LiBJdCdzIGJhc2ljYWxseSBzZXQgdGhhdCBpcyBjbG9zZWQgdW5kZXIgYW4gYXNzb2NpYXRpdmUgYmluYXJ5XG5vcGVyYXRpb24gYW5kIGhhcyBhbiBpZGVudGl0eSBlbGVtZW50IHN1Y2ggdGhhdCBmb3IgYWxsIEhBIEhBIEhBLiBZZXMsIGl0J3MgYVxubW9ub2lkLCB3aGljaCBzb3VuZHMgc2NhcnkgYnV0IGl0J3Mgbm90IHJlYWxseSBhbmQgYWN0dWFsbHkgc3VwZXIgdXNlZnVsLiBBbGxcbnRoYXQgbWVhbnMgaXMgdGhhdCBiYXNpY2FsbHkgeW91IGNhbiBkbyB0d28gdGhpbmdzIHdpdGggaXQ6XG5cbiAgICAxLiBjb25jYXQoY29uY2F0KGEsIGIpLCBjKSA9PT0gY29uY2F0KGEsIGNvbmNhdChiLCBjKSk7XG4gICAgMi4gY29uY2F0KGlkZW50aXR5KCksIGEpID09PSBjb25jYXQoYSwgaWRlbnRpdHkoKSkgPT09IGE7XG5cbldoYXQgdGhhdCBtZWFucyBpcyB0aGF0IGl0J3MgcmVhbGx5IGVhc3kgdG8gY29tcG9zZSBzdHlsZXMgdG9nZXRoZXIgYW5kIHRoZVxub3JkZXIgaW4gd2hpY2ggeW91IGRvIHNvIGRvZXNuJ3QgcmVhbGx5IG1hdHRlci5cblxuKi9cblxuLy8gVE9ETzogVGhpcyB0eXBlIHNob3VsZCBiZSBvcGFxdWUsIGhvd2V2ZXIgdGhlIEJhYmVsIHBhcnNlciBkb2Vzbid0IHN1cHBvcnRcbi8vICAgICAgIHRoZSBvcGFxdWUgc3ludGF4IHlldC5cbnR5cGUgU3R5bGUgPSB7fFxuICBjbGFzc05hbWU6IFNldDxzdHJpbmc+LFxuICBpbmxpbmVTdHlsZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbnx9O1xuXG5leHBvcnQgY29uc3QgaWRlbnRpdHkgPSAoKTogU3R5bGUgPT4gKHtcbiAgY2xhc3NOYW1lOiBuZXcgU2V0KCksXG4gIGlubGluZVN0eWxlOiB7fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZnJvbUNsYXNzTmFtZSA9ICguLi5jbGFzc05hbWVzOiBBcnJheTxzdHJpbmc+KTogU3R5bGUgPT4gKHtcbiAgY2xhc3NOYW1lOiBuZXcgU2V0KGNsYXNzTmFtZXMpLFxuICBpbmxpbmVTdHlsZToge30sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZyb21JbmxpbmVTdHlsZSA9IChpbmxpbmVTdHlsZToge1xuICBba2V5OiBzdHJpbmddOiBhbnksXG59KTogU3R5bGUgPT4gKHtcbiAgY2xhc3NOYW1lOiBuZXcgU2V0KCksXG4gIGlubGluZVN0eWxlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjb25jYXQgPSAoc3R5bGVzOiBBcnJheTxTdHlsZT4pOiBTdHlsZSA9PlxuICBzdHlsZXMucmVkdWNlKFxuICAgIChcbiAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVBLCBpbmxpbmVTdHlsZTogaW5saW5lU3R5bGVBIH0sXG4gICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lQiwgaW5saW5lU3R5bGU6IGlubGluZVN0eWxlQiB9XG4gICAgKSA9PiAoe1xuICAgICAgY2xhc3NOYW1lOiBuZXcgU2V0KFsuLi5jbGFzc05hbWVBLCAuLi5jbGFzc05hbWVCXSksXG4gICAgICBpbmxpbmVTdHlsZTogeyAuLi5pbmxpbmVTdHlsZUEsIC4uLmlubGluZVN0eWxlQiB9LFxuICAgIH0pLFxuICAgIGlkZW50aXR5KClcbiAgKTtcblxuZXhwb3J0IGNvbnN0IG1hcENsYXNzTmFtZSA9IChmbjogKHg6IHN0cmluZykgPT4gc3RyaW5nKSA9PiAoe1xuICBjbGFzc05hbWUsXG4gIGlubGluZVN0eWxlLFxufTogU3R5bGUpOiBTdHlsZSA9PiAoe1xuICBjbGFzc05hbWU6IG5ldyBTZXQoQXJyYXkuZnJvbShjbGFzc05hbWUpLm1hcChmbikpLFxuICBpbmxpbmVTdHlsZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdG9Qcm9wcyA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgaW5saW5lU3R5bGUsXG59OiBTdHlsZSk6IHsgY2xhc3NOYW1lOiBzdHJpbmcsIHN0eWxlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IH0gPT4ge1xuICBjb25zdCBwcm9wcyA9IHt9O1xuXG4gIGlmIChjbGFzc05hbWUuc2l6ZSA+IDApIHtcbiAgICAvLyBTb3J0aW5nIGhlcmUgZW5zdXJlcyB0aGF0IGNsYXNzTmFtZXMgYXJlIGFsd2F5cyBzdGFibGUsIHJlZHVjaW5nIGRpZmZcbiAgICAvLyBjaHVybi4gQm94IHVzdWFsbHkgaGFzIGEgc21hbGwgbnVtYmVyIG9mIHByb3BlcnRpZXMgc28gaXQncyBub3QgYSBwZXJmXG4gICAgLy8gY29uY2Vybi5cbiAgICBwcm9wcy5jbGFzc05hbWUgPSBBcnJheS5mcm9tKGNsYXNzTmFtZSlcbiAgICAgIC5zb3J0KClcbiAgICAgIC5qb2luKCcgJyk7XG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoaW5saW5lU3R5bGUpLmxlbmd0aCA+IDApIHtcbiAgICBwcm9wcy5zdHlsZSA9IGlubGluZVN0eWxlO1xuICB9XG5cbiAgcmV0dXJuIHByb3BzO1xufTtcbiIsImltcG9ydCB7IGNvbmNhdCwgZnJvbUNsYXNzTmFtZSwgaWRlbnRpdHksIG1hcENsYXNzTmFtZSB9IGZyb20gJy4vc3R5bGUnO1xuXG4vKlxuXG5UcmFuc2Zvcm1zXG5cblRoZXNlIGFyZSBhIGNvbGxlY3Rpb24gb2YgYSBmZXcgZnVuY3RvcnMgdGhhdCB0YWtlIHZhbHVlcyBhbmQgcmV0dXJucyBTdHlsZSdzLiBPTUcsIEkgdXNlZCB0aGUgd29yZCBmdW5jdG9yIC0gaXQncyByZWFsbHkganVzdCBhIGZhbmN5IHdvcmQgZm9yIGZ1bmN0aW9uLlxuXG4qL1xuXG4vLyBBZGRzIGEgY2xhc3NuYW1lIHdoZW4gYSBwcm9wZXJ0eSBpcyBwcmVzZW50LlxuLy9cbi8vICAgICA8Qm94IHRvcCAvPlxuLy9cbmV4cG9ydCBjb25zdCB0b2dnbGUgPSAoLi4uY2xhc3NOYW1lcykgPT4gdmFsID0+XG4gIHZhbCA/IGZyb21DbGFzc05hbWUoLi4uY2xhc3NOYW1lcykgOiBpZGVudGl0eSgpO1xuXG4vLyBNYXBzIHN0cmluZyB2YWx1ZXMgdG8gY2xhc3Nlc1xuLy9cbi8vICAgICA8Qm94IGFsaWduSXRlbXM9XCJjZW50ZXJcIiAvPlxuLy9cbmV4cG9ydCBjb25zdCBtYXBwaW5nID0gbWFwID0+IHZhbCA9PlxuICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWFwLCB2YWwpXG4gICAgPyBmcm9tQ2xhc3NOYW1lKG1hcFt2YWxdKVxuICAgIDogaWRlbnRpdHkoKTtcblxuLy8gTWFwcyBhIHJhbmdlIG9mIGludGVnZXJzIHRvIGEgcmFuZ2Ugb2YgY2xhc3NuYW1lc1xuLy9cbi8vICAgICA8Qm94IHBhZGRpbmc9ezF9IC8+XG4vL1xuZXhwb3J0IGNvbnN0IHJhbmdlID0gc2NhbGUgPT4gbiA9PlxuICBmcm9tQ2xhc3NOYW1lKGAke3NjYWxlfSR7biA8IDAgPyBgTiR7TWF0aC5hYnMobil9YCA6IG59YCk7XG5cbi8vIExpa2UgYHJhbmdlYCwgbWFwcyBhIHJhbmdlIG9mIGludGVnZXJzIHRvIGEgcmFuZ2Ugb2YgY2xhc3NuYW1lcywgZXhjbHVkaW5nXG4vLyB6ZXJvIHZhbHVlcy5cbi8vXG4vLyAgICAgPEJveCBwYWRkaW5nPXswfSAvPlxuZXhwb3J0IGNvbnN0IHJhbmdlV2l0aG91dFplcm8gPSBzY2FsZSA9PiBuID0+XG4gIG4gPT09IDAgPyBpZGVudGl0eSgpIDogcmFuZ2Uoc2NhbGUpKG4pO1xuXG4vLyBCaW5kcyBhIHN0cmluZyBjbGFzc25hbWUgdG8gdGhlIHZhbHVlIGluIGFuIG9iamVjdC4gVXNlZnVsIHdoZW4gaW50ZXJhY3Rpbmdcbi8vIHdpdGggcmFuZ2VzIHRoYXQgbmVlZCB0byBjb21lIGR5bmFtaWNhbGx5IGZyb20gYSBzdHlsZSBvYmplY3QuIFRoaXMgaXNcbi8vIHNpbWlsYXIgdG8gdGhlIE5QTSBwYWNrYWdlICdjbGFzc25hbWVzL2JpbmQnLlxuZXhwb3J0IGNvbnN0IGJpbmQgPSAoZm4sIHNjb3BlKSA9PiB2YWwgPT5cbiAgbWFwQ2xhc3NOYW1lKG5hbWUgPT4gc2NvcGVbbmFtZV0pKGZuKHZhbCkpO1xuXG4vLyBUaGlzIHRha2VzIGEgc2VyaWVzIG9mIHRoZSBwcmV2aW91c2x5IGRlZmluZWQgZnVuY3RvcnMsIHJ1bnMgdGhlbSBhbGxcbi8vIGFnYWluc3QgYSB2YWx1ZSBhbmQgcmV0dXJucyB0aGUgc2V0IG9mIHRoZWlyIGNsYXNzbmFtZXMuXG5leHBvcnQgY29uc3QgdW5pb24gPSAoLi4uZm5zKSA9PiB2YWwgPT4gY29uY2F0KGZucy5tYXAoZm4gPT4gZm4odmFsKSkpO1xuIiwiLy8gQGZsb3dcblxuLypcblxuIyBXZWxjb21lIHRvIEJveCFcblxuVGhpcyBndWlkZSB3aWxsIGhlbHAgeW91IG5hdmlnYXRlIGFuZCB1bmRlcnN0YW5kIGl0cyBkZXNpZ24uIFRoaXMgZmlsZSBpcyByb3VnaGx5IG9yZ2FuaXplZCBsaWtlOlxuXG4gIDEuIEZsb3cgVHlwZXNcbiAgMi4gUHJvcCB0cmFuc2Zvcm1lcnNcbiAgMy4gQm94IGl0c2VsZlxuICA0LiBQcm9wVHlwZXNcblxuSSdsbCBleHBsYWluIGVhY2ggcGFydCBhcyB3ZSBnbyB0aHJvdWdoLiBKdXN0IHJlbWVtYmVyLCBpZiB5b3Ugd2FudCB0byBtYWtlIHVwZGF0ZXMsIFBMRUFTRSBQTEVBU0UgUExFQVNFIHVwZGF0ZSB0aGUgRmxvdyBUeXBlcyAmIFByb3BUeXBlcyAoZXZlbiB0aG91Z2ggdGhleSBsb29rIHNjYXJ5KS5cblxuKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Cb3guY3NzJztcbmltcG9ydCBib3JkZXJzIGZyb20gJy4uL0JvcmRlcnMuY3NzJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vQ29sb3JzLmNzcyc7XG5pbXBvcnQgbGF5b3V0IGZyb20gJy4uL0xheW91dC5jc3MnO1xuaW1wb3J0IHdoaXRlc3BhY2UgZnJvbSAnLi93aGl0ZXNwYWNlLmNzcyc7XG5pbXBvcnQgd2hpdGVzcGFjZUxlZ2FjeSBmcm9tICcuLi9XaGl0ZXNwYWNlLmNzcyc7XG5pbXBvcnQge1xuICBjb25jYXQsXG4gIGZyb21DbGFzc05hbWUsXG4gIGZyb21JbmxpbmVTdHlsZSxcbiAgaWRlbnRpdHksXG4gIG1hcENsYXNzTmFtZSxcbiAgdG9Qcm9wcyxcbn0gZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQge1xuICB1bmlvbixcbiAgYmluZCxcbiAgcmFuZ2UsXG4gIHRvZ2dsZSxcbiAgbWFwcGluZyxcbiAgcmFuZ2VXaXRob3V0WmVybyxcbn0gZnJvbSAnLi90cmFuc2Zvcm1zJztcblxuLypcblxuIyBQcm9UeXBlc1xuXG5Cb3gncyB0eXBlIGRlZmluaXRpb24gaXMgZXhoYXVzdGl2ZS4gV2l0aCB0aGUgZXhjZXB0aW9uIG9mIGBkYW5nZXJvdXNseVNldElubGluZVN0eWxlYCwgdmFsdWVzIHNob3VsZG4ndCBiZSBhbWJpZ2lvdXMuIFRoYXQgbWVhbnMgdGhhdCB3ZSBoYXZlIHRvIHR5cGUgb3V0IHRoaW5ncyBsaWtlIGJvaW50cywgYnV0IHRoYXQncyBhbHNvIHdoZXJlIEJveCdzIG1hZ2ljIGxpZXMuIEFsc28sIGJ5IHB1dHRpbmcgaW4gZXh0cmEgZWZmb3J0IGFyb3VuZCB0eXBlIGRlZmluaXRpb25zIGhlcmUsIHdlIGNhbiBza2lwIGV4dHJhIHJ1bnRpbWUgdHlwZWNoZWNrcyBpbiB0aGUgdHJhbnNmb3JtZXJzIGZvciBwZXJmb3JtYW5jZS5cblxuKi9cblxudHlwZSBOYXRCb2ludCA9IDEgfCAyIHwgMyB8IDQgfCA1IHwgNjtcbnR5cGUgSW50Qm9pbnQgPSAtNiB8IC01IHwgLTQgfCAtMyB8IC0yIHwgLTEgfCBOYXRCb2ludDtcbnR5cGUgRGlzcGxheSA9ICdub25lJyB8ICdmbGV4JyB8ICdibG9jaycgfCAnaW5saW5lQmxvY2snO1xudHlwZSBEaXJlY3Rpb24gPSAncm93JyB8ICdjb2x1bW4nO1xudHlwZSBDb2x1bW4gPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xudHlwZSBSZXNwb25zaXZlUHJvcHMgPSB7XG4gIGNvbHVtbj86IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMixcbiAgZGlzcGxheT86IGJvb2xlYW4gfCAnZmxleCcgfCAnZmxleENvbHVtbicgfCAnaW5saW5lQmxvY2snLFxufTtcbnR5cGUgTWFyZ2luID1cbiAgfCAtMTJcbiAgfCAtMTFcbiAgfCAtMTBcbiAgfCAtOVxuICB8IC04XG4gIHwgLTdcbiAgfCAtNlxuICB8IC01XG4gIHwgLTRcbiAgfCAtM1xuICB8IC0yXG4gIHwgLTFcbiAgfCAwXG4gIHwgMVxuICB8IDJcbiAgfCAzXG4gIHwgNFxuICB8IDVcbiAgfCA2XG4gIHwgN1xuICB8IDhcbiAgfCA5XG4gIHwgMTBcbiAgfCAxMVxuICB8IDEyO1xudHlwZSBQYWRkaW5nID0gMCB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMjtcbnR5cGUgUHJvcFR5cGUgPSB7XG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT86IHsgX19zdHlsZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB9LFxuXG4gIHhzPzogUmVzcG9uc2l2ZVByb3BzLFxuICBzbT86IFJlc3BvbnNpdmVQcm9wcyxcbiAgbWQ/OiBSZXNwb25zaXZlUHJvcHMsXG4gIGxnPzogUmVzcG9uc2l2ZVByb3BzLFxuICBkZXByZWNhdGVkUGFkZGluZz86IE5hdEJvaW50IHwgeyB4PzogTmF0Qm9pbnQsIHk/OiBOYXRCb2ludCB9LFxuICBkZXByZWNhdGVkTWFyZ2luPzpcbiAgICB8IEludEJvaW50XG4gICAgfCB7XG4gICAgICAgIHRvcD86IEludEJvaW50LFxuICAgICAgICByaWdodD86IEludEJvaW50IHwgJ2F1dG8nLFxuICAgICAgICBib3R0b20/OiBJbnRCb2ludCxcbiAgICAgICAgbGVmdD86IEludEJvaW50IHwgJ2F1dG8nLFxuICAgICAgfSxcblxuICBkaXNwbGF5PzogRGlzcGxheSxcbiAgY29sdW1uPzogQ29sdW1uLFxuICBkaXJlY3Rpb24/OiBEaXJlY3Rpb24sXG4gIHNtRGlzcGxheT86IERpc3BsYXksXG4gIHNtQ29sdW1uPzogQ29sdW1uLFxuICBzbURpcmVjdGlvbj86IERpcmVjdGlvbixcbiAgbWREaXNwbGF5PzogRGlzcGxheSxcbiAgbWRDb2x1bW4/OiBDb2x1bW4sXG4gIG1kRGlyZWN0aW9uPzogRGlyZWN0aW9uLFxuICBsZ0Rpc3BsYXk/OiBEaXNwbGF5LFxuICBsZ0NvbHVtbj86IENvbHVtbixcbiAgbGdEaXJlY3Rpb24/OiBEaXJlY3Rpb24sXG5cbiAgYWxpZ25Db250ZW50PzogJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnYmV0d2VlbicgfCAnYXJvdW5kJyB8ICdzdHJldGNoJyxcbiAgYWxpZ25JdGVtcz86ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ2Jhc2VsaW5lJyB8ICdzdHJldGNoJyxcbiAgYWxpZ25TZWxmPzogJ2F1dG8nIHwgJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnYmFzZWxpbmUnIHwgJ3N0cmV0Y2gnLFxuICBib3R0b20/OiBib29sZWFuLFxuICBjb2xvcj86XG4gICAgfCAnYmx1ZSdcbiAgICB8ICdkYXJrR3JheSdcbiAgICB8ICdkYXJrV2FzaCdcbiAgICB8ICdlZ2dwbGFudCdcbiAgICB8ICdncmF5J1xuICAgIHwgJ2dyZWVuJ1xuICAgIHwgJ2xpZ2h0R3JheSdcbiAgICB8ICdsaWdodFdhc2gnXG4gICAgfCAnbWFyb29uJ1xuICAgIHwgJ21pZG5pZ2h0J1xuICAgIHwgJ25hdnknXG4gICAgfCAnb2xpdmUnXG4gICAgfCAnb3JhbmdlJ1xuICAgIHwgJ29yY2hpZCdcbiAgICB8ICdwaW5lJ1xuICAgIHwgJ3B1cnBsZSdcbiAgICB8ICdyZWQnXG4gICAgfCAndHJhbnNwYXJlbnQnXG4gICAgfCAnd2F0ZXJtZWxvbidcbiAgICB8ICd3aGl0ZScsXG4gIGZpdD86IGJvb2xlYW4sXG4gIGZsZXg/OiAnZ3JvdycgfCAnc2hyaW5rJyB8ICdub25lJyxcbiAgaGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nLFxuICBqdXN0aWZ5Q29udGVudD86ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ2JldHdlZW4nIHwgJ2Fyb3VuZCcsXG4gIGxlZnQ/OiBib29sZWFuLFxuXG4gIG1hcmdpblN0YXJ0PzogTWFyZ2luLFxuICBtYXJnaW5FbmQ/OiBNYXJnaW4sXG5cbiAgbWFyZ2luPzogTWFyZ2luLFxuICBtYXJnaW5Ub3A/OiBNYXJnaW4sXG4gIG1hcmdpblJpZ2h0PzogTWFyZ2luLFxuICBtYXJnaW5Cb3R0b20/OiBNYXJnaW4sXG4gIG1hcmdpbkxlZnQ/OiBNYXJnaW4sXG5cbiAgc21NYXJnaW4/OiBNYXJnaW4sXG4gIHNtTWFyZ2luVG9wPzogTWFyZ2luLFxuICBzbU1hcmdpblJpZ2h0PzogTWFyZ2luLFxuICBzbU1hcmdpbkJvdHRvbT86IE1hcmdpbixcbiAgc21NYXJnaW5MZWZ0PzogTWFyZ2luLFxuXG4gIG1kTWFyZ2luPzogTWFyZ2luLFxuICBtZE1hcmdpblRvcD86IE1hcmdpbixcbiAgbWRNYXJnaW5SaWdodD86IE1hcmdpbixcbiAgbWRNYXJnaW5Cb3R0b20/OiBNYXJnaW4sXG4gIG1kTWFyZ2luTGVmdD86IE1hcmdpbixcblxuICBsZ01hcmdpbj86IE1hcmdpbixcbiAgbGdNYXJnaW5Ub3A/OiBNYXJnaW4sXG4gIGxnTWFyZ2luUmlnaHQ/OiBNYXJnaW4sXG4gIGxnTWFyZ2luQm90dG9tPzogTWFyZ2luLFxuICBsZ01hcmdpbkxlZnQ/OiBNYXJnaW4sXG5cbiAgbWF4SGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nLFxuICBtYXhXaWR0aD86IG51bWJlciB8IHN0cmluZyxcbiAgbWluSGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nLFxuICBtaW5XaWR0aD86IG51bWJlciB8IHN0cmluZyxcblxuICBvdmVyZmxvdz86ICd2aXNpYmxlJyB8ICdoaWRkZW4nIHwgJ3Njcm9sbCcgfCAnc2Nyb2xsWCcgfCAnc2Nyb2xsWScgfCAnYXV0bycsXG5cbiAgcGFkZGluZz86IFBhZGRpbmcsXG4gIHNtUGFkZGluZz86IFBhZGRpbmcsXG4gIG1kUGFkZGluZz86IFBhZGRpbmcsXG4gIGxnUGFkZGluZz86IFBhZGRpbmcsXG5cbiAgcGFkZGluZ1g/OiBQYWRkaW5nLFxuICBzbVBhZGRpbmdYPzogUGFkZGluZyxcbiAgbWRQYWRkaW5nWD86IFBhZGRpbmcsXG4gIGxnUGFkZGluZ1g/OiBQYWRkaW5nLFxuXG4gIHBhZGRpbmdZPzogUGFkZGluZyxcbiAgc21QYWRkaW5nWT86IFBhZGRpbmcsXG4gIG1kUGFkZGluZ1k/OiBQYWRkaW5nLFxuICBsZ1BhZGRpbmdZPzogUGFkZGluZyxcblxuICBwb3NpdGlvbj86ICdzdGF0aWMnIHwgJ2Fic29sdXRlJyB8ICdyZWxhdGl2ZScgfCAnZml4ZWQnLFxuICByaWdodD86IGJvb2xlYW4sXG4gIHNoYXBlPzpcbiAgICB8ICdzcXVhcmUnXG4gICAgfCAncm91bmRlZCdcbiAgICB8ICdwaWxsJ1xuICAgIHwgJ2NpcmNsZSdcbiAgICB8ICdyb3VuZGVkVG9wJ1xuICAgIHwgJ3JvdW5kZWRCb3R0b20nXG4gICAgfCAncm91bmRlZExlZnQnXG4gICAgfCAncm91bmRlZFJpZ2h0JyxcbiAgc2hyaW5rPzogYm9vbGVhbixcbiAgdG9wPzogYm9vbGVhbixcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmcsXG4gIHdyYXA/OiBib29sZWFuLFxufTtcblxuLy8gLS1cblxuLypcblxuIyBUcmFuc2Zvcm1lcnNcblxuVGhpcyBpcyB3aGVyZSB0aGUgbWVhdCBhbmQgdGhlIGJvbmVzIG9mIEJveCdzIHRyYW5zZm9ybXMgYXJlLiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGUgRFNMIGluIGAuL3RyYW5zZm9ybXMuanNgLCBidXQgYmFzaWNhbGx5IHRoZXkgYXJlIGEgc21hbGwgZGVjbGFyYXRpdmUgd2F5IG9mIHNwZWNpZnlpbmcgaG93IGEgcHJvcGVydHkgKGkuZS4gYG1hcmdpblRvcD17NH1gKSBnZXRzIHR1cm5lZCBpbnRvIGEgQ1NTIGNsYXNzIChgbWFyZ2luVG9wNGApLlxuXG5UaGVyZSdzIGEgbGl0dGxlIHByZWFtYmxlIGhlcmUsIGJ1dCBpdCBjdWxtaW5hdGVzIGluIGEgYmlnIG9iamVjdCBtYXBwaW5nIHRoZSBhY3R1YWwgcHJvcGVydHkgbmFtZXMgdG8gdGhlIHRyYW5zZm9ybWVyIHZhbHVlcy5cblxuKi9cblxuY29uc3QgbWFyZ2luU3RhcnQgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ21hcmdpblN0YXJ0JyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWFyZ2luRW5kID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtYXJnaW5FbmQnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBtYXJnaW5Ub3AgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ21hcmdpblRvcCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IG1hcmdpblJpZ2h0ID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtYXJnaW5SaWdodCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IG1hcmdpbkJvdHRvbSA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbWFyZ2luQm90dG9tJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWFyZ2luTGVmdCA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbWFyZ2luTGVmdCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IG1hcmdpbiA9IHVuaW9uKG1hcmdpblRvcCwgbWFyZ2luQm90dG9tLCBtYXJnaW5MZWZ0LCBtYXJnaW5SaWdodCk7XG5cbmNvbnN0IHNtTWFyZ2luVG9wID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdzbU1hcmdpblRvcCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IHNtTWFyZ2luUmlnaHQgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ3NtTWFyZ2luUmlnaHQnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBzbU1hcmdpbkJvdHRvbSA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnc21NYXJnaW5Cb3R0b20nKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBzbU1hcmdpbkxlZnQgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ3NtTWFyZ2luTGVmdCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IHNtTWFyZ2luID0gdW5pb24oXG4gIHNtTWFyZ2luVG9wLFxuICBzbU1hcmdpbkJvdHRvbSxcbiAgc21NYXJnaW5MZWZ0LFxuICBzbU1hcmdpblJpZ2h0XG4pO1xuXG5jb25zdCBtZE1hcmdpblRvcCA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbWRNYXJnaW5Ub3AnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBtZE1hcmdpblJpZ2h0ID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtZE1hcmdpblJpZ2h0JyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWRNYXJnaW5Cb3R0b20gPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ21kTWFyZ2luQm90dG9tJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWRNYXJnaW5MZWZ0ID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtZE1hcmdpbkxlZnQnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBtZE1hcmdpbiA9IHVuaW9uKFxuICBtZE1hcmdpblRvcCxcbiAgbWRNYXJnaW5Cb3R0b20sXG4gIG1kTWFyZ2luTGVmdCxcbiAgbWRNYXJnaW5SaWdodFxuKTtcblxuY29uc3QgbGdNYXJnaW5Ub3AgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ2xnTWFyZ2luVG9wJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbGdNYXJnaW5SaWdodCA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbGdNYXJnaW5SaWdodCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IGxnTWFyZ2luQm90dG9tID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdsZ01hcmdpbkJvdHRvbScpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IGxnTWFyZ2luTGVmdCA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbGdNYXJnaW5MZWZ0JyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbGdNYXJnaW4gPSB1bmlvbihcbiAgbGdNYXJnaW5Ub3AsXG4gIGxnTWFyZ2luQm90dG9tLFxuICBsZ01hcmdpbkxlZnQsXG4gIGxnTWFyZ2luUmlnaHRcbik7XG5cbmNvbnN0IHBhZGRpbmdYID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdwYWRkaW5nWCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IHBhZGRpbmdZID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdwYWRkaW5nWScpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IHBhZGRpbmcgPSB1bmlvbihwYWRkaW5nWCwgcGFkZGluZ1kpO1xuXG5jb25zdCBzbVBhZGRpbmdYID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdzbVBhZGRpbmdYJyksIHdoaXRlc3BhY2UpO1xuY29uc3Qgc21QYWRkaW5nWSA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnc21QYWRkaW5nWScpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IHNtUGFkZGluZyA9IHVuaW9uKHNtUGFkZGluZ1gsIHNtUGFkZGluZ1kpO1xuXG5jb25zdCBtZFBhZGRpbmdYID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtZFBhZGRpbmdYJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWRQYWRkaW5nWSA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbWRQYWRkaW5nWScpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IG1kUGFkZGluZyA9IHVuaW9uKG1kUGFkZGluZ1gsIG1kUGFkZGluZ1kpO1xuXG5jb25zdCBsZ1BhZGRpbmdYID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdsZ1BhZGRpbmdYJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbGdQYWRkaW5nWSA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbGdQYWRkaW5nWScpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IGxnUGFkZGluZyA9IHVuaW9uKGxnUGFkZGluZ1gsIGxnUGFkZGluZ1kpO1xuXG4vKlxuXG5UaGVzZSBmdW5jdGlvbnMgYXJlIGxlZ2FjeS4gSSdkIGxpa2UgdG8gZ2V0IHJpZCBvZiBtb3N0IG9mIHRoaXMgZmlsZSdzIGRlcGVuZGVuY3kgb24gaW1wb3J0aW5nIGAuL3N0eWxlLmpzYCBkaXJlY3RseSBvbmNlIHRoZXNlIGFyZSByZW1vdmVkLlxuXG4qL1xuXG5jb25zdCBwcmVmaXggPSAocHJlOiBzdHJpbmcpID0+IG1hcENsYXNzTmFtZShuYW1lID0+IGAke3ByZX0ke25hbWV9YCk7XG5jb25zdCBkaXNwbGF5ID0gdmFsdWUgPT4ge1xuICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgY2FzZSAnZmxleCc6XG4gICAgICByZXR1cm4gZnJvbUNsYXNzTmFtZSgnRGlzcGxheUZsZXgnLCAnRGlyZWN0aW9uUm93Jyk7XG4gICAgY2FzZSAnZmxleENvbHVtbic6XG4gICAgICByZXR1cm4gZnJvbUNsYXNzTmFtZSgnRGlzcGxheUZsZXgnLCAnRGlyZWN0aW9uQ29sdW1uJyk7XG4gICAgY2FzZSAnaW5saW5lQmxvY2snOlxuICAgICAgcmV0dXJuIGZyb21DbGFzc05hbWUoJ0Rpc3BsYXlJbmxpbmVCbG9jaycpO1xuICAgIGNhc2UgZmFsc2U6XG4gICAgICByZXR1cm4gZnJvbUNsYXNzTmFtZSgnRGlzcGxheU5vbmUnKTtcbiAgICBkZWZhdWx0OlxuICAgICAgLyogYmxvY2sgKi9cbiAgICAgIHJldHVybiBmcm9tQ2xhc3NOYW1lKCdEaXNwbGF5QmxvY2snKTtcbiAgfVxufTtcbmNvbnN0IGNvbHVtbiA9IHJhbmdlKCdDb2wnKTtcblxuY29uc3QgZm9ybWF0SW50Qm9pbnQgPSB4ID0+ICh4IDwgMCA/IGBuJHtNYXRoLmFicyh4KX1gIDogeC50b1N0cmluZygpKTtcblxuLypcblxuSXQncyBwcmVmZXJhYmxlIHRvIHB1dCBuZXcgcHJvcGVydGllcyBpbnRvIHRoYXQgb2JqZWN0IGRpcmVjdGx5IGp1c3Qgc28gaXQncyBlYXNpZXIgdG8gcmVhZC5cblxuKi9cblxuY29uc3QgcHJvcFRvRm4gPSB7XG4gIHhzOiB2YWx1ZSA9PiB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlkZW50aXR5KCk7XG4gICAgfVxuICAgIHJldHVybiBtYXBDbGFzc05hbWUoYyA9PiBzdHlsZXNbY10pKFxuICAgICAgcHJlZml4KCd4cycpKFxuICAgICAgICBjb25jYXQoW1xuICAgICAgICAgIHZhbHVlLmNvbHVtbiA/IGNvbHVtbih2YWx1ZS5jb2x1bW4pIDogaWRlbnRpdHkoKSxcbiAgICAgICAgICB0eXBlb2YgdmFsdWUuZGlzcGxheSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gZGlzcGxheSh2YWx1ZS5kaXNwbGF5KVxuICAgICAgICAgICAgOiBpZGVudGl0eSgpLFxuICAgICAgICBdKVxuICAgICAgKVxuICAgICk7XG4gIH0sXG4gIHNtOiB2YWx1ZSA9PiB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlkZW50aXR5KCk7XG4gICAgfVxuICAgIHJldHVybiBtYXBDbGFzc05hbWUoYyA9PiBzdHlsZXNbY10pKFxuICAgICAgcHJlZml4KCdzbScpKFxuICAgICAgICBjb25jYXQoW1xuICAgICAgICAgIHZhbHVlLmNvbHVtbiA/IGNvbHVtbih2YWx1ZS5jb2x1bW4pIDogaWRlbnRpdHkoKSxcbiAgICAgICAgICB0eXBlb2YgdmFsdWUuZGlzcGxheSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gZGlzcGxheSh2YWx1ZS5kaXNwbGF5KVxuICAgICAgICAgICAgOiBpZGVudGl0eSgpLFxuICAgICAgICBdKVxuICAgICAgKVxuICAgICk7XG4gIH0sXG4gIG1kOiB2YWx1ZSA9PiB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlkZW50aXR5KCk7XG4gICAgfVxuICAgIHJldHVybiBtYXBDbGFzc05hbWUoYyA9PiBzdHlsZXNbY10pKFxuICAgICAgcHJlZml4KCdtZCcpKFxuICAgICAgICBjb25jYXQoW1xuICAgICAgICAgIHZhbHVlLmNvbHVtbiA/IGNvbHVtbih2YWx1ZS5jb2x1bW4pIDogaWRlbnRpdHkoKSxcbiAgICAgICAgICB0eXBlb2YgdmFsdWUuZGlzcGxheSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gZGlzcGxheSh2YWx1ZS5kaXNwbGF5KVxuICAgICAgICAgICAgOiBpZGVudGl0eSgpLFxuICAgICAgICBdKVxuICAgICAgKVxuICAgICk7XG4gIH0sXG4gIGxnOiB2YWx1ZSA9PiB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlkZW50aXR5KCk7XG4gICAgfVxuICAgIHJldHVybiBtYXBDbGFzc05hbWUoYyA9PiBzdHlsZXNbY10pKFxuICAgICAgcHJlZml4KCdsZycpKFxuICAgICAgICBjb25jYXQoW1xuICAgICAgICAgIHZhbHVlLmNvbHVtbiA/IGNvbHVtbih2YWx1ZS5jb2x1bW4pIDogaWRlbnRpdHkoKSxcbiAgICAgICAgICB0eXBlb2YgdmFsdWUuZGlzcGxheSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gZGlzcGxheSh2YWx1ZS5kaXNwbGF5KVxuICAgICAgICAgICAgOiBpZGVudGl0eSgpLFxuICAgICAgICBdKVxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgZGlzcGxheTogbWFwcGluZyh7XG4gICAgbm9uZTogc3R5bGVzLnhzRGlzcGxheU5vbmUsXG4gICAgZmxleDogc3R5bGVzLnhzRGlzcGxheUZsZXgsXG4gICAgYmxvY2s6IHN0eWxlcy54c0Rpc3BsYXlCbG9jayxcbiAgICBpbmxpbmVCbG9jazogc3R5bGVzLnhzRGlzcGxheUlubGluZUJsb2NrLFxuICB9KSxcbiAgY29sdW1uOiBiaW5kKHJhbmdlKCd4c0NvbCcpLCBzdHlsZXMpLFxuICBkaXJlY3Rpb246IG1hcHBpbmcoe1xuICAgIHJvdzogc3R5bGVzLnhzRGlyZWN0aW9uUm93LFxuICAgIGNvbHVtbjogc3R5bGVzLnhzRGlyZWN0aW9uQ29sdW1uLFxuICB9KSxcblxuICBzbURpc3BsYXk6IG1hcHBpbmcoe1xuICAgIG5vbmU6IHN0eWxlcy5zbURpc3BsYXlOb25lLFxuICAgIGZsZXg6IHN0eWxlcy5zbURpc3BsYXlGbGV4LFxuICAgIGJsb2NrOiBzdHlsZXMuc21EaXNwbGF5QmxvY2ssXG4gICAgaW5saW5lQmxvY2s6IHN0eWxlcy5zbURpc3BsYXlJbmxpbmVCbG9jayxcbiAgfSksXG4gIHNtQ29sdW1uOiBiaW5kKHJhbmdlKCdzbUNvbCcpLCBzdHlsZXMpLFxuICBzbURpcmVjdGlvbjogbWFwcGluZyh7XG4gICAgcm93OiBzdHlsZXMuc21EaXJlY3Rpb25Sb3csXG4gICAgY29sdW1uOiBzdHlsZXMuc21EaXJlY3Rpb25Db2x1bW4sXG4gIH0pLFxuXG4gIG1kRGlzcGxheTogbWFwcGluZyh7XG4gICAgbm9uZTogc3R5bGVzLm1kRGlzcGxheU5vbmUsXG4gICAgZmxleDogc3R5bGVzLm1kRGlzcGxheUZsZXgsXG4gICAgYmxvY2s6IHN0eWxlcy5tZERpc3BsYXlCbG9jayxcbiAgICBpbmxpbmVCbG9jazogc3R5bGVzLm1kRGlzcGxheUlubGluZUJsb2NrLFxuICB9KSxcbiAgbWRDb2x1bW46IGJpbmQocmFuZ2UoJ21kQ29sJyksIHN0eWxlcyksXG4gIG1kRGlyZWN0aW9uOiBtYXBwaW5nKHtcbiAgICByb3c6IHN0eWxlcy5tZERpcmVjdGlvblJvdyxcbiAgICBjb2x1bW46IHN0eWxlcy5tZERpcmVjdGlvbkNvbHVtbixcbiAgfSksXG5cbiAgbGdEaXNwbGF5OiBtYXBwaW5nKHtcbiAgICBub25lOiBzdHlsZXMubGdEaXNwbGF5Tm9uZSxcbiAgICBmbGV4OiBzdHlsZXMubGdEaXNwbGF5RmxleCxcbiAgICBibG9jazogc3R5bGVzLmxnRGlzcGxheUJsb2NrLFxuICAgIGlubGluZUJsb2NrOiBzdHlsZXMubGdEaXNwbGF5SW5saW5lQmxvY2ssXG4gIH0pLFxuICBsZ0NvbHVtbjogYmluZChyYW5nZSgnbGdDb2wnKSwgc3R5bGVzKSxcbiAgbGdEaXJlY3Rpb246IG1hcHBpbmcoe1xuICAgIHJvdzogc3R5bGVzLmxnRGlyZWN0aW9uUm93LFxuICAgIGNvbHVtbjogc3R5bGVzLmxnRGlyZWN0aW9uQ29sdW1uLFxuICB9KSxcblxuICBhbGlnbkNvbnRlbnQ6IG1hcHBpbmcoe1xuICAgIHN0YXJ0OiBsYXlvdXQuY29udGVudFN0YXJ0LFxuICAgIGVuZDogbGF5b3V0LmNvbnRlbnRFbmQsXG4gICAgY2VudGVyOiBsYXlvdXQuY29udGVudENlbnRlcixcbiAgICBiZXR3ZWVuOiBsYXlvdXQuY29udGVudEJldHdlZW4sXG4gICAgYXJvdW5kOiBsYXlvdXQuY29udGVudEFyb3VuZCxcbiAgICAvLyBkZWZhdWx0OiBzdHJldGNoXG4gIH0pLFxuICBhbGlnbkl0ZW1zOiBtYXBwaW5nKHtcbiAgICBzdGFydDogbGF5b3V0Lml0ZW1zU3RhcnQsXG4gICAgZW5kOiBsYXlvdXQuaXRlbXNFbmQsXG4gICAgY2VudGVyOiBsYXlvdXQuaXRlbXNDZW50ZXIsXG4gICAgYmFzZWxpbmU6IGxheW91dC5pdGVtc0Jhc2VsaW5lLFxuICAgIC8vIGRlZmF1bHQ6IHN0cmV0Y2hcbiAgfSksXG4gIGFsaWduU2VsZjogbWFwcGluZyh7XG4gICAgc3RhcnQ6IGxheW91dC5zZWxmU3RhcnQsXG4gICAgZW5kOiBsYXlvdXQuc2VsZkVuZCxcbiAgICBjZW50ZXI6IGxheW91dC5zZWxmQ2VudGVyLFxuICAgIGJhc2VsaW5lOiBsYXlvdXQuc2VsZkJhc2VsaW5lLFxuICAgIHN0cmV0Y2g6IGxheW91dC5zZWxmU3RyZXRjaCxcbiAgICAvLyBkZWZhdWx0OiBhdXRvXG4gIH0pLFxuICBib3R0b206IHRvZ2dsZShsYXlvdXQuYm90dG9tMCksXG4gIGNvbG9yOiBtYXBwaW5nKHtcbiAgICBibHVlOiBjb2xvcnMuYmx1ZUJnLFxuICAgIGRhcmtHcmF5OiBjb2xvcnMuZGFya0dyYXlCZyxcbiAgICBwaW5lOiBjb2xvcnMucGluZUJnLFxuICAgIGdyYXk6IGNvbG9ycy5ncmF5QmcsXG4gICAgcmVkOiBjb2xvcnMucmVkQmcsXG4gICAgb2xpdmU6IGNvbG9ycy5vbGl2ZUJnLFxuICAgIGxpZ2h0R3JheTogY29sb3JzLmxpZ2h0R3JheUJnLFxuICAgIHdoaXRlOiBjb2xvcnMud2hpdGVCZyxcbiAgICBvcmFuZ2U6IGNvbG9ycy5vcmFuZ2VCZyxcbiAgICBncmVlbjogY29sb3JzLmdyZWVuQmcsXG4gICAgbmF2eTogY29sb3JzLm5hdnlCZyxcbiAgICBtaWRuaWdodDogY29sb3JzLm1pZG5pZ2h0QmcsXG4gICAgcHVycGxlOiBjb2xvcnMucHVycGxlQmcsXG4gICAgb3JjaGlkOiBjb2xvcnMub3JjaGlkQmcsXG4gICAgZWdncGxhbnQ6IGNvbG9ycy5lZ2dwbGFudEJnLFxuICAgIG1hcm9vbjogY29sb3JzLm1hcm9vbkJnLFxuICAgIHdhdGVybWVsb246IGNvbG9ycy53YXRlcm1lbG9uQmcsXG4gICAgbGlnaHRXYXNoOiBjb2xvcnMubGlnaHRXYXNoQmcsXG4gICAgZGFya1dhc2g6IGNvbG9ycy5kYXJrV2FzaEJnLFxuICAgIC8vIGRlZmF1bHQ6IHRyYW5zcGFyZW50XG4gIH0pLFxuICBmaXQ6IHRvZ2dsZShsYXlvdXQuZml0KSxcbiAgZmxleDogbWFwcGluZyh7XG4gICAgZ3JvdzogbGF5b3V0LmZsZXhHcm93LFxuICAgIG5vbmU6IGxheW91dC5mbGV4Tm9uZSxcbiAgICAvLyBkZWZhdWx0OiBzaHJpbmtcbiAgfSksXG4gIGhlaWdodDogaGVpZ2h0ID0+IGZyb21JbmxpbmVTdHlsZSh7IGhlaWdodCB9KSxcbiAganVzdGlmeUNvbnRlbnQ6IG1hcHBpbmcoe1xuICAgIGVuZDogbGF5b3V0Lmp1c3RpZnlFbmQsXG4gICAgY2VudGVyOiBsYXlvdXQuanVzdGlmeUNlbnRlcixcbiAgICBiZXR3ZWVuOiBsYXlvdXQuanVzdGlmeUJldHdlZW4sXG4gICAgYXJvdW5kOiBsYXlvdXQuanVzdGlmeUFyb3VuZCxcbiAgICAvLyBkZWZhdWx0OiBzdGFydFxuICB9KSxcbiAgbGVmdDogdG9nZ2xlKGxheW91dC5sZWZ0MCksXG4gIGRlcHJlY2F0ZWRNYXJnaW46IHZhbHVlID0+IHtcbiAgICBsZXQgbXQgPSBpZGVudGl0eSgpO1xuICAgIGxldCBtYiA9IGlkZW50aXR5KCk7XG4gICAgbGV0IG1sID0gaWRlbnRpdHkoKTtcbiAgICBsZXQgbXIgPSBpZGVudGl0eSgpO1xuICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICByZXR1cm4gZnJvbUNsYXNzTmFtZSh3aGl0ZXNwYWNlTGVnYWN5W2BtJHtmb3JtYXRJbnRCb2ludCh2YWx1ZSl9YF0pO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKHZhbHVlLnRvcCkge1xuICAgICAgICAgIG10ID0gZnJvbUNsYXNzTmFtZShcbiAgICAgICAgICAgIHdoaXRlc3BhY2VMZWdhY3lbYG10JHtmb3JtYXRJbnRCb2ludCh2YWx1ZS50b3ApfWBdXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5ib3R0b20pIHtcbiAgICAgICAgICBtYiA9IGZyb21DbGFzc05hbWUoXG4gICAgICAgICAgICB3aGl0ZXNwYWNlTGVnYWN5W2BtYiR7Zm9ybWF0SW50Qm9pbnQodmFsdWUuYm90dG9tKX1gXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVmdCkge1xuICAgICAgICAgIG1sID0gZnJvbUNsYXNzTmFtZShcbiAgICAgICAgICAgIHZhbHVlLmxlZnQgPT09ICdhdXRvJ1xuICAgICAgICAgICAgICA/IHdoaXRlc3BhY2VMZWdhY3kubWxBdXRvXG4gICAgICAgICAgICAgIDogd2hpdGVzcGFjZUxlZ2FjeVtgbWwke2Zvcm1hdEludEJvaW50KHZhbHVlLmxlZnQpfWBdXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5yaWdodCkge1xuICAgICAgICAgIG1yID0gZnJvbUNsYXNzTmFtZShcbiAgICAgICAgICAgIHZhbHVlLnJpZ2h0ID09PSAnYXV0bydcbiAgICAgICAgICAgICAgPyB3aGl0ZXNwYWNlTGVnYWN5Lm1yQXV0b1xuICAgICAgICAgICAgICA6IHdoaXRlc3BhY2VMZWdhY3lbYG1yJHtmb3JtYXRJbnRCb2ludCh2YWx1ZS5yaWdodCl9YF1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25jYXQoW210LCBtYiwgbWwsIG1yXSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gaWRlbnRpdHkoKTtcbiAgICB9XG4gIH0sXG4gIG1hcmdpblN0YXJ0LFxuICBtYXJnaW5FbmQsXG4gIG1hcmdpbixcbiAgbWFyZ2luVG9wLFxuICBtYXJnaW5SaWdodCxcbiAgbWFyZ2luQm90dG9tLFxuICBtYXJnaW5MZWZ0LFxuICBzbU1hcmdpbixcbiAgc21NYXJnaW5Ub3AsXG4gIHNtTWFyZ2luUmlnaHQsXG4gIHNtTWFyZ2luQm90dG9tLFxuICBzbU1hcmdpbkxlZnQsXG4gIG1kTWFyZ2luLFxuICBtZE1hcmdpblRvcCxcbiAgbWRNYXJnaW5SaWdodCxcbiAgbWRNYXJnaW5Cb3R0b20sXG4gIG1kTWFyZ2luTGVmdCxcbiAgbGdNYXJnaW4sXG4gIGxnTWFyZ2luVG9wLFxuICBsZ01hcmdpblJpZ2h0LFxuICBsZ01hcmdpbkJvdHRvbSxcbiAgbGdNYXJnaW5MZWZ0LFxuICBtYXhIZWlnaHQ6IG1heEhlaWdodCA9PiBmcm9tSW5saW5lU3R5bGUoeyBtYXhIZWlnaHQgfSksXG4gIG1heFdpZHRoOiBtYXhXaWR0aCA9PiBmcm9tSW5saW5lU3R5bGUoeyBtYXhXaWR0aCB9KSxcbiAgbWluSGVpZ2h0OiBtaW5IZWlnaHQgPT4gZnJvbUlubGluZVN0eWxlKHsgbWluSGVpZ2h0IH0pLFxuICBtaW5XaWR0aDogbWluV2lkdGggPT4gZnJvbUlubGluZVN0eWxlKHsgbWluV2lkdGggfSksXG4gIG92ZXJmbG93OiBtYXBwaW5nKHtcbiAgICBoaWRkZW46IGxheW91dC5vdmVyZmxvd0hpZGRlbixcbiAgICBzY3JvbGw6IGxheW91dC5vdmVyZmxvd1Njcm9sbCxcbiAgICBhdXRvOiBsYXlvdXQub3ZlcmZsb3dBdXRvLFxuICAgIHNjcm9sbFg6IGxheW91dC5vdmVyZmxvd1Njcm9sbFgsXG4gICAgc2Nyb2xsWTogbGF5b3V0Lm92ZXJmbG93U2Nyb2xsWSxcbiAgICAvLyBkZWZhdWx0OiB2aXNpYmxlXG4gIH0pLFxuICBkZXByZWNhdGVkUGFkZGluZzogdmFsdWUgPT4ge1xuICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICByZXR1cm4gZnJvbUNsYXNzTmFtZSh3aGl0ZXNwYWNlTGVnYWN5W2BwJHt2YWx1ZX1gXSk7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gY29uY2F0KFtcbiAgICAgICAgICB2YWx1ZS54XG4gICAgICAgICAgICA/IGZyb21DbGFzc05hbWUod2hpdGVzcGFjZUxlZ2FjeVtgcHgke3ZhbHVlLnh9YF0pXG4gICAgICAgICAgICA6IGlkZW50aXR5KCksXG4gICAgICAgICAgdmFsdWUueVxuICAgICAgICAgICAgPyBmcm9tQ2xhc3NOYW1lKHdoaXRlc3BhY2VMZWdhY3lbYHB5JHt2YWx1ZS55fWBdKVxuICAgICAgICAgICAgOiBpZGVudGl0eSgpLFxuICAgICAgICBdKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBpZGVudGl0eSgpO1xuICAgIH1cbiAgfSxcbiAgcGFkZGluZyxcbiAgcGFkZGluZ1gsXG4gIHBhZGRpbmdZLFxuICBzbVBhZGRpbmcsXG4gIHNtUGFkZGluZ1gsXG4gIHNtUGFkZGluZ1ksXG4gIG1kUGFkZGluZyxcbiAgbWRQYWRkaW5nWCxcbiAgbWRQYWRkaW5nWSxcbiAgbGdQYWRkaW5nLFxuICBsZ1BhZGRpbmdYLFxuICBsZ1BhZGRpbmdZLFxuICBwb3NpdGlvbjogbWFwcGluZyh7XG4gICAgYWJzb2x1dGU6IGxheW91dC5hYnNvbHV0ZSxcbiAgICByZWxhdGl2ZTogbGF5b3V0LnJlbGF0aXZlLFxuICAgIGZpeGVkOiBsYXlvdXQuZml4ZWQsXG4gICAgLy8gZGVmYXVsdDogc3RhdGljXG4gIH0pLFxuICByaWdodDogdG9nZ2xlKGxheW91dC5yaWdodDApLFxuICBzaGFwZTogbWFwcGluZyh7XG4gICAgY2lyY2xlOiBib3JkZXJzLmNpcmNsZSxcbiAgICBwaWxsOiBib3JkZXJzLnBpbGwsXG4gICAgcm91bmRlZDogYm9yZGVycy5yb3VuZGVkLFxuICAgIHJvdW5kZWRCb3R0b206IGJvcmRlcnMucm91bmRlZEJvdHRvbSxcbiAgICByb3VuZGVkTGVmdDogYm9yZGVycy5yb3VuZGVkTGVmdCxcbiAgICByb3VuZGVkUmlnaHQ6IGJvcmRlcnMucm91bmRlZFJpZ2h0LFxuICAgIHJvdW5kZWRUb3A6IGJvcmRlcnMucm91bmRlZFRvcCxcbiAgICAvLyBkZWZhdWx0OiBzcXVhcmVcbiAgfSksXG4gIHRvcDogdG9nZ2xlKGxheW91dC50b3AwKSxcbiAgd2lkdGg6IHdpZHRoID0+IGZyb21JbmxpbmVTdHlsZSh7IHdpZHRoIH0pLFxuICB3cmFwOiB0b2dnbGUobGF5b3V0LmZsZXhXcmFwKSxcbiAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZTogdmFsdWUgPT5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbiAgICB2YWx1ZSAmJiB2YWx1ZS5fX3N0eWxlID8gZnJvbUlubGluZVN0eWxlKHZhbHVlLl9fc3R5bGUpIDogaWRlbnRpdHkoKSxcbn07XG5cbi8qXG5cbiMgVGhlIENvbXBvbmVudFxuXG4qL1xuXG5jb25zdCBjb250YWlucyA9IChrZXksIGFycikgPT4gYXJyLmluZGV4T2Yoa2V5KSA+PSAwO1xuY29uc3Qgb21pdCA9IChrZXlzLCBvYmopID0+XG4gIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChhY2MsIGspID0+IHtcbiAgICBpZiAoY29udGFpbnMoaywga2V5cykpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5hY2MsXG4gICAgICBba106IG9ialtrXSxcbiAgICB9O1xuICB9LCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJveCh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBQcm9wVHlwZSkge1xuICAvLyBGbG93IGNhbid0IHJlYXNvbiBhYm91dCB0aGUgY29uc3RhbnQgbmF0dXJlIG9mIE9iamVjdC5rZXlzIHNvIHdlIGNhbid0IHVzZVxuICAvLyBhIGZ1bmN0aW9uYWwgKHJlZHVjZSkgc3R5bGUgaGVyZS5cblxuICAvLyBCb3ggaXMgYSBcInBhc3MtdGhyb3VnaFwiIGNvbXBvbmVudCwgbWVhbmluZyB0aGF0IGlmIHlvdSBwYXNzIHByb3BlcnRpZXMgdG9cbiAgLy8gaXQgdGhhdCBpdCBkb2Vzbid0IGtub3cgYWJvdXQgKGBhcmlhLWxhYmVsYCBmb3IgaW5zdGFuY2UpIGl0IHBhc3Nlc1xuICAvLyBkaXJlY3RseSBiYWNrIHRvIHRoZSB1bmRlcmx5aW5nIGA8ZGl2Lz5gLiBUaGF0J3MgZ2VuZXJhbGx5IHVzZWZ1bCwgYnV0XG4gIC8vIHdlJ2QgYWxzbyBsaWtlIHRvIHN0cmlwIG91dCBhIGZldyBuYXVnaHR5IHByb3BlcnRpZXMgdGhhdCBicmVhayBzdHlsZVxuICAvLyBlbmNhcHN1bGF0aW9uIChjbGFzc05hbWUsIHN0eWxlKSBvciBhY2Nlc3NpYmlsaXR5IChvbkNsaWNrKS5cbiAgbGV0IGJsYWNrbGlzdCA9IFsnb25DbGljaycsICdjbGFzc05hbWUnLCAnc3R5bGUnXTtcblxuICAvLyBBbGwgQm94J3MgYXJlIGJveC1zaXplZCBieSBkZWZhdWx0LCBzbyB3ZSBzdGFydCBvZmYgYnVpbGRpbmcgdXAgdGhlIHN0eWxlc1xuICAvLyB0byBiZSBhcHBsaWVkIHdpdGggYSBCb3ggYmFzZSBjbGFzcy5cbiAgbGV0IHMgPSBmcm9tQ2xhc3NOYW1lKHN0eWxlcy5ib3gpO1xuXG4gIC8vIFRoaXMgbG9vcHMgdGhyb3VnaCBlYWNoIHByb3BlcnR5IGFuZCBpZiBpdCBleGlzdHMgaW4gdGhlIHByZXZpb3VzbHlcbiAgLy8gZGVmaW5lZCB0cmFuc2Zvcm0gbWFwLCBjb25jYXRlbnRlcyB0aGUgcmVzdWx0aW5nIHN0eWxlcyB0byB0aGUgYmFzZVxuICAvLyBzdHlsZXMuIElmIHRoZXJlJ3MgYSBtYXRjaCwgd2UgYWxzbyBkb24ndCBwYXNzIHRocm91Z2ggdGhhdCBwcm9wZXJ0eS4gVGhpc1xuICAvLyBtZWFucyBCb3gncyBydW50aW1lIGlzIG9ubHkgZGVwZW5kZW50IG9uIHRoZSBudW1iZXIgb2YgcHJvcGVydGllcyBwYXNzZWRcbiAgLy8gdG8gaXQgKHdoaWNoIGlzIHR5cGljYWxseSBzbWFsbCkgaW5zdGVhZCBvZiB0aGUgdG90YWwgbnVtYmVyIG9mIHBvc3NpYmxlXG4gIC8vIHByb3BlcnRpZXMgKH4zMCBvciBzbykuIFdoaWxlIGl0IG1heSB+ZmVlbH4gbGlrZSBCb3ggaXMgaW5uZWZmaWNpZW50LCBpdHNcbiAgLy8gYmlnZ2VzdCBwZXJmb3JtYW5jZSBpbXBhY3QgaXMgb24gc3RhcnR1cCB0aW1lIGJlY2F1c2UgdGhlcmUncyBzbyBtdWNoIGNvZGVcbiAgLy8gaGVyZS5cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9wVG9GbiwgcHJvcCkpIHtcbiAgICAgIGNvbnN0IGZuID0gcHJvcFRvRm5bcHJvcF07XG4gICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BdO1xuICAgICAgYmxhY2tsaXN0ID0gYmxhY2tsaXN0LmNvbmNhdChwcm9wKTtcbiAgICAgIHMgPSBjb25jYXQoW3MsIGZuKHZhbHVlKV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFuZC4uLiBtYWdpYyFcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5vbWl0KGJsYWNrbGlzdCwgcHJvcHMpfSB7Li4udG9Qcm9wcyhzKX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8qXG5cbiMgUHJvcFR5cGVzXG5cbkFuZCB3ZSdyZSBkb25lIGhlcmUgOilcblxuKi9cblxuY29uc3QgQ29sdW1uUHJvcFR5cGUgPSBQcm9wVHlwZXMub25lT2YoW1xuICAwLFxuICAxLFxuICAyLFxuICAzLFxuICA0LFxuICA1LFxuICA2LFxuICA3LFxuICA4LFxuICA5LFxuICAxMCxcbiAgMTEsXG4gIDEyLFxuXSk7XG5cbmNvbnN0IE1hcmdpblByb3BUeXBlID0gUHJvcFR5cGVzLm9uZU9mKFtcbiAgLTEyLFxuICAtMTEsXG4gIC0xMCxcbiAgLTksXG4gIC04LFxuICAtNyxcbiAgLTYsXG4gIC01LFxuICAtNCxcbiAgLTMsXG4gIC0yLFxuICAtMSxcbiAgMCxcbiAgMSxcbiAgMixcbiAgMyxcbiAgNCxcbiAgNSxcbiAgNixcbiAgNyxcbiAgOCxcbiAgOSxcbiAgMTAsXG4gIDExLFxuICAxMixcbl0pO1xuXG5jb25zdCBQYWRkaW5nUHJvcFR5cGUgPSBQcm9wVHlwZXMub25lT2YoW1xuICAwLFxuICAxLFxuICAyLFxuICAzLFxuICA0LFxuICA1LFxuICA2LFxuICA3LFxuICA4LFxuICA5LFxuICAxMCxcbiAgMTEsXG4gIDEyLFxuXSk7XG5cbkJveC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZTogUHJvcFR5cGVzLmV4YWN0KHtcbiAgICBfX3N0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9KSxcblxuICB4czogUHJvcFR5cGVzLmV4YWN0KHtcbiAgICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnZmxleCcsICdmbGV4Q29sdW1uJywgJ2lubGluZUJsb2NrJ10pLFxuICAgIF0pLFxuICAgIGNvbHVtbjogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIHNtOiBQcm9wVHlwZXMuZXhhY3Qoe1xuICAgIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydmbGV4JywgJ2ZsZXhDb2x1bW4nLCAnaW5saW5lQmxvY2snXSksXG4gICAgXSksXG4gICAgY29sdW1uOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgbWQ6IFByb3BUeXBlcy5leGFjdCh7XG4gICAgZGlzcGxheTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2ZsZXgnLCAnZmxleENvbHVtbicsICdpbmxpbmVCbG9jayddKSxcbiAgICBdKSxcbiAgICBjb2x1bW46IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxuICBsZzogUHJvcFR5cGVzLmV4YWN0KHtcbiAgICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnZmxleCcsICdmbGV4Q29sdW1uJywgJ2lubGluZUJsb2NrJ10pLFxuICAgIF0pLFxuICAgIGNvbHVtbjogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIGRlcHJlY2F0ZWRNYXJnaW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHRvcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGJvdHRvbTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGxlZnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSldKSxcbiAgICAgIHJpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pXSksXG4gICAgfSksXG4gIF0pLFxuICBkZXByZWNhdGVkUGFkZGluZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgeDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgfSksXG4gIF0pLFxuXG4gIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZihbJ25vbmUnLCAnZmxleCcsICdibG9jaycsICdpbmxpbmVCbG9jayddKSxcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydyb3cnLCAnY29sdW1uJ10pLFxuICBjb2x1bW46IENvbHVtblByb3BUeXBlLFxuXG4gIHNtRGlzcGxheTogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdmbGV4JywgJ2Jsb2NrJywgJ2lubGluZUJsb2NrJ10pLFxuICBzbURpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsncm93JywgJ2NvbHVtbiddKSxcbiAgc21Db2x1bW46IENvbHVtblByb3BUeXBlLFxuXG4gIG1kRGlzcGxheTogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdmbGV4JywgJ2Jsb2NrJywgJ2lubGluZUJsb2NrJ10pLFxuICBtZERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsncm93JywgJ2NvbHVtbiddKSxcbiAgbWRDb2x1bW46IENvbHVtblByb3BUeXBlLFxuXG4gIGxnRGlzcGxheTogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdmbGV4JywgJ2Jsb2NrJywgJ2lubGluZUJsb2NrJ10pLFxuICBsZ0RpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsncm93JywgJ2NvbHVtbiddKSxcbiAgbGdDb2x1bW46IENvbHVtblByb3BUeXBlLFxuXG4gIGFsaWduQ29udGVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnc3RhcnQnLFxuICAgICdlbmQnLFxuICAgICdjZW50ZXInLFxuICAgICdiZXR3ZWVuJyxcbiAgICAnYXJvdW5kJyxcbiAgICAnc3RyZXRjaCcsXG4gIF0pLFxuICBhbGlnbkl0ZW1zOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdzdGFydCcsXG4gICAgJ2VuZCcsXG4gICAgJ2NlbnRlcicsXG4gICAgJ2Jhc2VsaW5lJyxcbiAgICAnc3RyZXRjaCcsXG4gIF0pLFxuICBhbGlnblNlbGY6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ2F1dG8nLFxuICAgICdzdGFydCcsXG4gICAgJ2VuZCcsXG4gICAgJ2NlbnRlcicsXG4gICAgJ2Jhc2VsaW5lJyxcbiAgICAnc3RyZXRjaCcsXG4gIF0pLFxuICBib3R0b206IFByb3BUeXBlcy5ib29sLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnYmx1ZScsXG4gICAgJ2RhcmtHcmF5JyxcbiAgICAnZGFya1dhc2gnLFxuICAgICdlZ2dwbGFudCcsXG4gICAgJ2dyYXknLFxuICAgICdncmVlbicsXG4gICAgJ2xpZ2h0R3JheScsXG4gICAgJ2xpZ2h0V2FzaCcsXG4gICAgJ21hcm9vbicsXG4gICAgJ21pZG5pZ2h0JyxcbiAgICAnbmF2eScsXG4gICAgJ29saXZlJyxcbiAgICAnb3JhbmdlJyxcbiAgICAnb3JjaGlkJyxcbiAgICAncGluZScsXG4gICAgJ3B1cnBsZScsXG4gICAgJ3JlZCcsXG4gICAgJ3RyYW5zcGFyZW50JyxcbiAgICAnd2F0ZXJtZWxvbicsXG4gICAgJ3doaXRlJyxcbiAgXSksXG4gIGZpdDogUHJvcFR5cGVzLmJvb2wsXG4gIGZsZXg6IFByb3BUeXBlcy5vbmVPZihbJ2dyb3cnLCAnc2hyaW5rJywgJ25vbmUnXSksXG4gIGdyb3c6IFByb3BUeXBlcy5ib29sLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAganVzdGlmeUNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3N0YXJ0JyxcbiAgICAnZW5kJyxcbiAgICAnY2VudGVyJyxcbiAgICAnYmV0d2VlbicsXG4gICAgJ2Fyb3VuZCcsXG4gIF0pLFxuICBsZWZ0OiBQcm9wVHlwZXMuYm9vbCxcblxuICBtYXJnaW5TdGFydDogTWFyZ2luUHJvcFR5cGUsXG4gIG1hcmdpbkVuZDogTWFyZ2luUHJvcFR5cGUsXG5cbiAgbWFyZ2luOiBNYXJnaW5Qcm9wVHlwZSxcbiAgbWFyZ2luVG9wOiBNYXJnaW5Qcm9wVHlwZSxcbiAgbWFyZ2luUmlnaHQ6IE1hcmdpblByb3BUeXBlLFxuICBtYXJnaW5Cb3R0b206IE1hcmdpblByb3BUeXBlLFxuICBtYXJnaW5MZWZ0OiBNYXJnaW5Qcm9wVHlwZSxcblxuICBzbU1hcmdpbjogTWFyZ2luUHJvcFR5cGUsXG4gIHNtTWFyZ2luVG9wOiBNYXJnaW5Qcm9wVHlwZSxcbiAgc21NYXJnaW5SaWdodDogTWFyZ2luUHJvcFR5cGUsXG4gIHNtTWFyZ2luQm90dG9tOiBNYXJnaW5Qcm9wVHlwZSxcbiAgc21NYXJnaW5MZWZ0OiBNYXJnaW5Qcm9wVHlwZSxcblxuICBtZE1hcmdpbjogTWFyZ2luUHJvcFR5cGUsXG4gIG1kTWFyZ2luVG9wOiBNYXJnaW5Qcm9wVHlwZSxcbiAgbWRNYXJnaW5SaWdodDogTWFyZ2luUHJvcFR5cGUsXG4gIG1kTWFyZ2luQm90dG9tOiBNYXJnaW5Qcm9wVHlwZSxcbiAgbWRNYXJnaW5MZWZ0OiBNYXJnaW5Qcm9wVHlwZSxcblxuICBsZ01hcmdpbjogTWFyZ2luUHJvcFR5cGUsXG4gIGxnTWFyZ2luVG9wOiBNYXJnaW5Qcm9wVHlwZSxcbiAgbGdNYXJnaW5SaWdodDogTWFyZ2luUHJvcFR5cGUsXG4gIGxnTWFyZ2luQm90dG9tOiBNYXJnaW5Qcm9wVHlwZSxcbiAgbGdNYXJnaW5MZWZ0OiBNYXJnaW5Qcm9wVHlwZSxcblxuICBtYXhIZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgbWF4V2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgbWluSGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIG1pbldpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgb3ZlcmZsb3c6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3Zpc2libGUnLFxuICAgICdoaWRkZW4nLFxuICAgICdzY3JvbGwnLFxuICAgICdzY3JvbGxYJyxcbiAgICAnc2Nyb2xsWScsXG4gICAgJ2F1dG8nLFxuICBdKSxcblxuICBwYWRkaW5nOiBQYWRkaW5nUHJvcFR5cGUsXG4gIHBhZGRpbmdYOiBQYWRkaW5nUHJvcFR5cGUsXG4gIHBhZGRpbmdZOiBQYWRkaW5nUHJvcFR5cGUsXG5cbiAgc21QYWRkaW5nOiBQYWRkaW5nUHJvcFR5cGUsXG4gIHNtUGFkZGluZ1g6IFBhZGRpbmdQcm9wVHlwZSxcbiAgc21QYWRkaW5nWTogUGFkZGluZ1Byb3BUeXBlLFxuXG4gIG1kUGFkZGluZzogUGFkZGluZ1Byb3BUeXBlLFxuICBtZFBhZGRpbmdYOiBQYWRkaW5nUHJvcFR5cGUsXG4gIG1kUGFkZGluZ1k6IFBhZGRpbmdQcm9wVHlwZSxcblxuICBsZ1BhZGRpbmc6IFBhZGRpbmdQcm9wVHlwZSxcbiAgbGdQYWRkaW5nWDogUGFkZGluZ1Byb3BUeXBlLFxuICBsZ1BhZGRpbmdZOiBQYWRkaW5nUHJvcFR5cGUsXG5cbiAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbJ3N0YXRpYycsICdhYnNvbHV0ZScsICdyZWxhdGl2ZScsICdmaXhlZCddKSxcbiAgcmlnaHQ6IFByb3BUeXBlcy5ib29sLFxuICBzaGFwZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnc3F1YXJlJyxcbiAgICAncm91bmRlZCcsXG4gICAgJ3BpbGwnLFxuICAgICdjaXJjbGUnLFxuICAgICdyb3VuZGVkVG9wJyxcbiAgICAncm91bmRlZEJvdHRvbScsXG4gICAgJ3JvdW5kZWRMZWZ0JyxcbiAgICAncm91bmRlZFJpZ2h0JyxcbiAgXSksXG4gIHRvcDogUHJvcFR5cGVzLmJvb2wsXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHdyYXA6IFByb3BUeXBlcy5ib29sLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgYWRkIGZyb20gJy4vYWRkLnN2Zyc7XG5pbXBvcnQgYWRkQ2lyY2xlIGZyb20gJy4vYWRkLWNpcmNsZS5zdmcnO1xuaW1wb3J0IGFkZFBpbiBmcm9tICcuL2FkZC1waW4uc3ZnJztcbmltcG9ydCBhbmdsZWRQaW4gZnJvbSAnLi9hbmdsZWQtcGluLnN2Zyc7XG5pbXBvcnQgYXJyb3dCYWNrIGZyb20gJy4vYXJyb3ctYmFjay5zdmcnO1xuaW1wb3J0IGFycm93Q2lyY2xlRm9yd2FyZCBmcm9tICcuL2Fycm93LWNpcmNsZS1mb3J3YXJkLnN2Zyc7XG5pbXBvcnQgYXJyb3dDaXJjbGVEb3duIGZyb20gJy4vYXJyb3ctY2lyY2xlLWRvd24uc3ZnJztcbmltcG9ydCBhcnJvd0Rvd24gZnJvbSAnLi9hcnJvdy1kb3duLnN2Zyc7XG5pbXBvcnQgYXJyb3dGb3J3YXJkIGZyb20gJy4vYXJyb3ctZm9yd2FyZC5zdmcnO1xuaW1wb3J0IGFycm93VXAgZnJvbSAnLi9hcnJvdy11cC5zdmcnO1xuaW1wb3J0IGFycm93VXBSaWdodCBmcm9tICcuL2Fycm93LXVwLXJpZ2h0LnN2Zyc7XG5pbXBvcnQgYmVsbCBmcm9tICcuL2JlbGwuc3ZnJztcbmltcG9ydCBjYW1lcmEgZnJvbSAnLi9jYW1lcmEuc3ZnJztcbmltcG9ydCBjYW5jZWwgZnJvbSAnLi9jYW5jZWwuc3ZnJztcbmltcG9ydCBjaGVjayBmcm9tICcuL2NoZWNrLnN2Zyc7XG5pbXBvcnQgY2hlY2tDaXJjbGUgZnJvbSAnLi9jaGVjay1jaXJjbGUuc3ZnJztcbmltcG9ydCBjaXJjbGVPdXRsaW5lIGZyb20gJy4vY2lyY2xlLW91dGxpbmUuc3ZnJztcbmltcG9ydCBjbGVhciBmcm9tICcuL2NsZWFyLnN2Zyc7XG5pbXBvcnQgY2xvY2sgZnJvbSAnLi9jbG9jay5zdmcnO1xuaW1wb3J0IGNvZyBmcm9tICcuL2NvZy5zdmcnO1xuaW1wb3J0IGNvbXBhc3MgZnJvbSAnLi9jb21wYXNzLnN2Zyc7XG5pbXBvcnQgZGFzaCBmcm9tICcuL2Rhc2guc3ZnJztcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdC5zdmcnO1xuaW1wb3J0IGVsbGlwc2lzIGZyb20gJy4vZWxsaXBzaXMuc3ZnJztcbmltcG9ydCBlbGxpcHNpc0NpcmNsZU91dGxpbmUgZnJvbSAnLi9lbGxpcHNpcy1jaXJjbGUtb3V0bGluZS5zdmcnO1xuaW1wb3J0IGV5ZSBmcm9tICcuL2V5ZS5zdmcnO1xuaW1wb3J0IGZhY2Vib29rIGZyb20gJy4vZmFjZWJvb2suc3ZnJztcbmltcG9ydCBmYWNlSGFwcHkgZnJvbSAnLi9mYWNlLWhhcHB5LnN2Zyc7XG5pbXBvcnQgZmFjZVNhZCBmcm9tICcuL2ZhY2Utc2FkLnN2Zyc7XG5pbXBvcnQgZmFjZVNtaWxleSBmcm9tICcuL2ZhY2Utc21pbGV5LnN2Zyc7XG5pbXBvcnQgZmlsdGVyIGZyb20gJy4vZmlsdGVyLnN2Zyc7XG5pbXBvcnQgZmxhZyBmcm9tICcuL2ZsYWcuc3ZnJztcbmltcG9ydCBmbGFzaGxpZ2h0IGZyb20gJy4vZmxhc2hsaWdodC5zdmcnO1xuaW1wb3J0IGdpZiBmcm9tICcuL2dpZi5zdmcnO1xuaW1wb3J0IGdsb2JlIGZyb20gJy4vZ2xvYmUuc3ZnJztcbmltcG9ydCBncmFwaEJhciBmcm9tICcuL2dyYXBoLWJhci5zdmcnO1xuaW1wb3J0IGtub29wIGZyb20gJy4va25vb3Auc3ZnJztcbmltcG9ydCBsaWdodGJ1bGIgZnJvbSAnLi9saWdodGJ1bGIuc3ZnJztcbmltcG9ydCBoYW5kbGUgZnJvbSAnLi9oYW5kbGUuc3ZnJztcbmltcG9ydCBoYW5kUG9pbnRpbmcgZnJvbSAnLi9oYW5kLXBvaW50aW5nLnN2Zyc7XG5pbXBvcnQgaGVhcnQgZnJvbSAnLi9oZWFydC5zdmcnO1xuaW1wb3J0IGhlYXJ0QnJva2VuIGZyb20gJy4vaGVhcnQtYnJva2VuLnN2Zyc7XG5pbXBvcnQgbGluayBmcm9tICcuL2xpbmsuc3ZnJztcbmltcG9ydCBsb2NhdGlvbiBmcm9tICcuL2xvY2F0aW9uLnN2Zyc7XG5pbXBvcnQgbG9jayBmcm9tICcuL2xvY2suc3ZnJztcbmltcG9ydCBtYXhpbWl6ZSBmcm9tICcuL21heGltaXplLnN2Zyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuc3ZnJztcbmltcG9ydCBtaW5pbWl6ZSBmcm9tICcuL21pbmltaXplLnN2Zyc7XG5pbXBvcnQgbW92ZSBmcm9tICcuL21vdmUuc3ZnJztcbmltcG9ydCBtdXRlIGZyb20gJy4vbXV0ZS5zdmcnO1xuaW1wb3J0IHBhdXNlIGZyb20gJy4vcGF1c2Uuc3ZnJztcbmltcG9ydCBwZW9wbGUgZnJvbSAnLi9wZW9wbGUuc3ZnJztcbmltcG9ydCBwZXJzb24gZnJvbSAnLi9wZXJzb24uc3ZnJztcbmltcG9ydCBwZXJzb25BZGQgZnJvbSAnLi9wZXJzb24tYWRkLnN2Zyc7XG5pbXBvcnQgcGluIGZyb20gJy4vcGluLnN2Zyc7XG5pbXBvcnQgcGluSGlkZSBmcm9tICcuL3Bpbi1oaWRlLnN2Zyc7XG5pbXBvcnQgcGludGVyZXN0IGZyb20gJy4vcGludGVyZXN0LnN2Zyc7XG5pbXBvcnQgcGxheSBmcm9tICcuL3BsYXkuc3ZnJztcbmltcG9ydCBxdWVzdGlvbk1hcmsgZnJvbSAnLi9xdWVzdGlvbi1tYXJrLnN2Zyc7XG5pbXBvcnQgcmVtb3ZlIGZyb20gJy4vcmVtb3ZlLnN2Zyc7XG5pbXBvcnQgcmVwb3J0IGZyb20gJy4vcmVwb3J0LnN2Zyc7XG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vc2VhcmNoLnN2Zyc7XG5pbXBvcnQgc2VuZCBmcm9tICcuL3NlbmQuc3ZnJztcbmltcG9ydCBzaGFyZSBmcm9tICcuL3NoYXJlLnN2Zyc7XG5pbXBvcnQgc2hvcHBpbmdCYWcgZnJvbSAnLi9zaG9wcGluZy1iYWcuc3ZnJztcbmltcG9ydCBzbWlsZXkgZnJvbSAnLi9zbWlsZXkuc3ZnJztcbmltcG9ydCBzbWlsZXlPdXRsaW5lIGZyb20gJy4vc21pbGV5LW91dGxpbmUuc3ZnJztcbmltcG9ydCBzb3VuZCBmcm9tICcuL3NvdW5kLnN2Zyc7XG5pbXBvcnQgc3BlZWNoIGZyb20gJy4vc3BlZWNoLnN2Zyc7XG5pbXBvcnQgc3BlZWNoRWxsaXBzaXMgZnJvbSAnLi9zcGVlY2gtZWxsaXBzaXMuc3ZnJztcbmltcG9ydCB0YWcgZnJvbSAnLi90YWcuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGQsXG4gICdhZGQtY2lyY2xlJzogYWRkQ2lyY2xlLFxuICAnYWRkLXBpbic6IGFkZFBpbixcbiAgJ2FuZ2xlZC1waW4nOiBhbmdsZWRQaW4sXG4gICdhcnJvdy1iYWNrJzogYXJyb3dCYWNrLFxuICAnYXJyb3ctY2lyY2xlLWRvd24nOiBhcnJvd0NpcmNsZURvd24sXG4gICdhcnJvdy1jaXJjbGUtZm9yd2FyZCc6IGFycm93Q2lyY2xlRm9yd2FyZCxcbiAgJ2Fycm93LWRvd24nOiBhcnJvd0Rvd24sXG4gICdhcnJvdy1mb3J3YXJkJzogYXJyb3dGb3J3YXJkLFxuICAnYXJyb3ctdXAnOiBhcnJvd1VwLFxuICAnYXJyb3ctdXAtcmlnaHQnOiBhcnJvd1VwUmlnaHQsXG4gIGJlbGwsXG4gIGNhbWVyYSxcbiAgY2FuY2VsLFxuICBjaGVjayxcbiAgJ2NoZWNrLWNpcmNsZSc6IGNoZWNrQ2lyY2xlLFxuICAnY2lyY2xlLW91dGxpbmUnOiBjaXJjbGVPdXRsaW5lLFxuICBjbGVhcixcbiAgY2xvY2ssXG4gIGNvZyxcbiAgY29tcGFzcyxcbiAgZGFzaCxcbiAgZWRpdCxcbiAgZWxsaXBzaXMsXG4gICdlbGxpcHNpcy1jaXJjbGUtb3V0bGluZSc6IGVsbGlwc2lzQ2lyY2xlT3V0bGluZSxcbiAgZXllLFxuICBmYWNlYm9vayxcbiAgJ2ZhY2UtaGFwcHknOiBmYWNlSGFwcHksXG4gICdmYWNlLXNhZCc6IGZhY2VTYWQsXG4gICdmYWNlLXNtaWxleSc6IGZhY2VTbWlsZXksXG4gIGZpbHRlcixcbiAgZmxhZyxcbiAgZmxhc2hsaWdodCxcbiAgZ2lmLFxuICBnbG9iZSxcbiAgJ2dyYXBoLWJhcic6IGdyYXBoQmFyLFxuICBoYW5kbGUsXG4gICdoYW5kLXBvaW50aW5nJzogaGFuZFBvaW50aW5nLFxuICBoZWFydCxcbiAgJ2hlYXJ0LWJyb2tlbic6IGhlYXJ0QnJva2VuLFxuICBrbm9vcCxcbiAgbGlnaHRidWxiLFxuICBsaW5rLFxuICBsb2NhdGlvbixcbiAgbG9jayxcbiAgbWF4aW1pemUsXG4gIG1lbnUsXG4gIG1pbmltaXplLFxuICBtb3ZlLFxuICBtdXRlLFxuICBwYXVzZSxcbiAgcGVvcGxlLFxuICBwZXJzb24sXG4gICdwZXJzb24tYWRkJzogcGVyc29uQWRkLFxuICBwaW4sXG4gICdwaW4taGlkZSc6IHBpbkhpZGUsXG4gIHBpbnRlcmVzdCxcbiAgcGxheSxcbiAgJ3F1ZXN0aW9uLW1hcmsnOiBxdWVzdGlvbk1hcmssXG4gIHJlbW92ZSxcbiAgcmVwb3J0LFxuICBzZWFyY2gsXG4gICdzaG9wcGluZy1iYWcnOiBzaG9wcGluZ0JhZyxcbiAgc21pbGV5LFxuICAnc21pbGV5LW91dGxpbmUnOiBzbWlsZXlPdXRsaW5lLFxuICBzZW5kLFxuICBzaGFyZSxcbiAgc291bmQsXG4gIHNwZWVjaCxcbiAgJ3NwZWVjaC1lbGxpcHNpcyc6IHNwZWVjaEVsbGlwc2lzLFxuICB0YWcsXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JY29uLmNzcyc7XG5pbXBvcnQgaWNvbnMgZnJvbSAnLi9pY29ucyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL0NvbG9ycy5jc3MnO1xuXG50eXBlIEljb25Qcm9wcyA9IHtcbiAgYWNjZXNzaWJpbGl0eUxhYmVsOiBzdHJpbmcsXG4gIGNvbG9yPzpcbiAgICB8ICdibHVlJ1xuICAgIHwgJ2RhcmtHcmF5J1xuICAgIHwgJ2VnZ3BsYW50J1xuICAgIHwgJ2dyYXknXG4gICAgfCAnZ3JlZW4nXG4gICAgfCAnbGlnaHRHcmF5J1xuICAgIHwgJ21hcm9vbidcbiAgICB8ICdtaWRuaWdodCdcbiAgICB8ICduYXZ5J1xuICAgIHwgJ29saXZlJ1xuICAgIHwgJ29yYW5nZSdcbiAgICB8ICdvcmNoaWQnXG4gICAgfCAncGluZSdcbiAgICB8ICdwdXJwbGUnXG4gICAgfCAncmVkJ1xuICAgIHwgJ3dhdGVybWVsb24nXG4gICAgfCAnd2hpdGUnLFxuICBpbmxpbmU/OiBib29sZWFuLFxuICBzaXplPzogbnVtYmVyIHwgc3RyaW5nLFxufTtcblxudHlwZSBJY29uTm9QYXRoID0ge1xuICBpY29uOiAkS2V5czx0eXBlb2YgaWNvbnM+LFxuICBkYW5nZXJvdXNseVNldFN2Z1BhdGg/OiBudWxsLFxufTtcblxudHlwZSBQYXRoTm9JY29uID0ge1xuICBpY29uPzogbnVsbCxcbiAgZGFuZ2Vyb3VzbHlTZXRTdmdQYXRoOiB7IF9fcGF0aDogc3RyaW5nIH0sXG59O1xuXG50eXBlIFByb3BzID0gSWNvblByb3BzICYgKFBhdGhOb0ljb24gfCBJY29uTm9QYXRoKTtcblxuY29uc3QgSWNvbk5hbWVzID0gT2JqZWN0LmtleXMoaWNvbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7XG4gICAgYWNjZXNzaWJpbGl0eUxhYmVsLFxuICAgIGNvbG9yID0gJ2dyYXknLFxuICAgIGljb24sXG4gICAgaW5saW5lLFxuICAgIHNpemUgPSAxNixcbiAgICBkYW5nZXJvdXNseVNldFN2Z1BhdGgsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjcyA9IGNsYXNzbmFtZXMoc3R5bGVzLmljb24sIGNvbG9yc1tjb2xvcl0sIHtcbiAgICBbc3R5bGVzLmljb25CbG9ja106ICFpbmxpbmUsXG4gIH0pO1xuXG4gIGxldCBwYXRoO1xuICBpZiAoaWNvbikge1xuICAgIHBhdGggPSBpY29uc1tpY29uXTtcbiAgfSBlbHNlIGlmIChkYW5nZXJvdXNseVNldFN2Z1BhdGgpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbiAgICBwYXRoID0gZGFuZ2Vyb3VzbHlTZXRTdmdQYXRoLl9fcGF0aDtcbiAgfSBlbHNlIHtcbiAgICBwYXRoID0gJyc7XG4gIH1cblxuICBjb25zdCBhcmlhSGlkZGVuID0gYWNjZXNzaWJpbGl0eUxhYmVsID09PSAnJyA/IHRydWUgOiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPXtjc31cbiAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgIHdpZHRoPXtzaXplfVxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBhcmlhLWhpZGRlbj17YXJpYUhpZGRlbn1cbiAgICAgIGFyaWEtbGFiZWw9e2FjY2Vzc2liaWxpdHlMYWJlbH1cbiAgICAgIHJvbGU9XCJpbWdcIlxuICAgID5cbiAgICAgIDx0aXRsZT57YWNjZXNzaWJpbGl0eUxhYmVsfTwvdGl0bGU+XG4gICAgICA8cGF0aCBkPXtwYXRofSAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5JY29uLmljb25zID0gSWNvbk5hbWVzO1xuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgYWNjZXNzaWJpbGl0eUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdibHVlJyxcbiAgICAnZGFya0dyYXknLFxuICAgICdlZ2dwbGFudCcsXG4gICAgJ2dyYXknLFxuICAgICdncmVlbicsXG4gICAgJ2xpZ2h0R3JheScsXG4gICAgJ21hcm9vbicsXG4gICAgJ21pZG5pZ2h0JyxcbiAgICAnbmF2eScsXG4gICAgJ29saXZlJyxcbiAgICAnb3JhbmdlJyxcbiAgICAnb3JjaGlkJyxcbiAgICAncGluZScsXG4gICAgJ3B1cnBsZScsXG4gICAgJ3JlZCcsXG4gICAgJ3dhdGVybWVsb24nLFxuICAgICd3aGl0ZScsXG4gIF0pLFxuICBkYW5nZXJvdXNseVNldFN2Z1BhdGg6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgX19wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KSxcbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mKEljb25OYW1lcyksXG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94L0JveCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW1hZ2UuY3NzJztcblxuY29uc3Qgc2hvdWxkU2NhbGVJbWFnZSA9IGZpdCA9PiBmaXQgPT09ICdjb3ZlcicgfHwgZml0ID09PSAnY29udGFpbic7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhbHQ6IHN0cmluZyxcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBjb2xvcjogc3RyaW5nLFxuICBmaXQ6ICdjb250YWluJyB8ICdjb3ZlcicgfCAnbm9uZScsXG4gIG5hdHVyYWxIZWlnaHQ6IG51bWJlcixcbiAgbmF0dXJhbFdpZHRoOiBudW1iZXIsXG4gIG9uRXJyb3I/OiAoKSA9PiB2b2lkLFxuICBvbkxvYWQ/OiAoKSA9PiB2b2lkLFxuICBzaXplcz86IHN0cmluZyxcbiAgc3JjOiBzdHJpbmcsXG4gIHNyY1NldD86IHN0cmluZyxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZml0OiBQcm9wVHlwZXMub25lT2YoWydjb250YWluJywgJ2NvdmVyJywgJ25vbmUnXSksXG4gICAgbmF0dXJhbEhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG5hdHVyYWxXaWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG9uRXJyb3I6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTG9hZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2l6ZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc3JjU2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgZml0OiAnbm9uZScsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHNob3VsZFNjYWxlSW1hZ2UodGhpcy5wcm9wcy5maXQpKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzKSB7XG4gICAgY29uc3QgeyBmaXQsIHNyYyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc2hvdWxkU2NhbGVJbWFnZShmaXQpICYmIHByZXZQcm9wcy5zcmMgIT09IHNyYykge1xuICAgICAgdGhpcy5sb2FkSW1hZ2UoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVMb2FkID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uTG9hZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkxvYWQoKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25FcnJvcikge1xuICAgICAgdGhpcy5wcm9wcy5vbkVycm9yKCk7XG4gICAgfVxuICB9O1xuXG4gIGxvYWRJbWFnZSgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gdGhpcy5oYW5kbGVMb2FkO1xuICAgICAgaW1hZ2Uub25lcnJvciA9IHRoaXMuaGFuZGxlRXJyb3I7XG4gICAgICBpbWFnZS5zcmMgPSB0aGlzLnByb3BzLnNyYztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWx0LFxuICAgICAgY29sb3IsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGZpdCxcbiAgICAgIG5hdHVyYWxIZWlnaHQsXG4gICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICBzaXplcyxcbiAgICAgIHNyYyxcbiAgICAgIHNyY1NldCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGlzU2NhbGVkSW1hZ2UgPSBzaG91bGRTY2FsZUltYWdlKGZpdCk7XG4gICAgY29uc3QgY2hpbGRDb250ZW50ID0gY2hpbGRyZW4gPyAoXG4gICAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiB0b3AgbGVmdCBib3R0b20gcmlnaHQgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Cb3g+XG4gICAgKSA6IG51bGw7XG5cbiAgICByZXR1cm4gaXNTY2FsZWRJbWFnZSA/IChcbiAgICAgIDxkaXZcbiAgICAgICAgYXJpYS1sYWJlbD17YWx0fVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tmaXRdfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke3NyY30nKWAsXG4gICAgICAgIH19XG4gICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgPlxuICAgICAgICB7Y2hpbGRDb250ZW50fVxuICAgICAgPC9kaXY+XG4gICAgKSA6IChcbiAgICAgIDxCb3hcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgICBfX3N0eWxlOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogYCR7bmF0dXJhbEhlaWdodCAvIG5hdHVyYWxXaWR0aCAqIDEwMH0lYCxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgYWx0PXthbHR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfVxuICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaGFuZGxlRXJyb3J9XG4gICAgICAgICAgb25Mb2FkPXt0aGlzLmhhbmRsZUxvYWR9XG4gICAgICAgICAgc2l6ZXM9e3NpemVzfVxuICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgIHNyY1NldD17c3JjU2V0fVxuICAgICAgICAvPlxuICAgICAgICB7Y2hpbGRDb250ZW50fVxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWFzay5jc3MnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBoZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmcsXG4gIHNoYXBlPzogJ2NpcmNsZScgfCAncm91bmRlZCcgfCAnc3F1YXJlJyxcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmcsXG4gIHdhc2g/OiBib29sZWFuLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hc2socHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHNoYXBlID0gJ3NxdWFyZScsIHdpZHRoLCBoZWlnaHQsIHdhc2ggPSBmYWxzZSB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5NYXNrLCBzdHlsZXNbc2hhcGVdKX0gc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHt3YXNoICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2FzaH0gLz59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbk1hc2sucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBzaGFwZTogUHJvcFR5cGVzLm9uZU9mKFsnY2lyY2xlJywgJ3JvdW5kZWQnLCAnc3F1YXJlJ10pLFxuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB3YXNoOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94L0JveCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uL0ljb24nO1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL0ltYWdlL0ltYWdlJztcbmltcG9ydCBNYXNrIGZyb20gJy4uL01hc2svTWFzayc7XG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tICcuLi9UeXBvZ3JhcGh5LmNzcyc7XG5cbmNvbnN0IFNxdWFyZSA9IChwcm9wczogKikgPT4gKFxuICA8Qm94IHsuLi5wcm9wc30gcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgIDxCb3hcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3sgX19zdHlsZTogeyBwYWRkaW5nQm90dG9tOiAnMTAwJScgfSB9fVxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgLz5cbiAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiB0b3AgbGVmdCBib3R0b20gcmlnaHQ+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Cb3g+XG4gIDwvQm94PlxuKTtcblxuY29uc3QgRGVmYXVsdEF2YXRhciA9ICh7IG5hbWUgfTogeyBuYW1lOiBzdHJpbmcgfSkgPT4ge1xuICBjb25zdCBmaXJzdEluaXRpYWwgPSBbLi4ubmFtZV1bMF0udG9VcHBlckNhc2UoKTtcbiAgcmV0dXJuIChcbiAgICA8U3F1YXJlIGNvbG9yPVwiZ3JheVwiIHNoYXBlPVwiY2lyY2xlXCI+XG4gICAgICA8c3ZnXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIHZpZXdCb3g9XCItNTAgLTUwIDEwMCAxMDBcIlxuICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgID5cbiAgICAgICAgPHRpdGxlPntuYW1lfTwvdGl0bGU+XG4gICAgICAgIDx0ZXh0XG4gICAgICAgICAgZm9udFNpemU9XCI1MHB4XCJcbiAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgZG9taW5hbnRCYXNlbGluZT1cImNlbnRyYWxcIlxuICAgICAgICAgIHRleHRBbmNob3I9XCJtaWRkbGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgICAgdHlwb2dyYXBoeS5hbnRpYWxpYXNlZCxcbiAgICAgICAgICAgIHR5cG9ncmFwaHkuc2Fuc1NlcmlmLFxuICAgICAgICAgICAgdHlwb2dyYXBoeS5sZWFkaW5nU21hbGwsXG4gICAgICAgICAgICB0eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxuICAgICAgICAgIF0uam9pbignICcpfVxuICAgICAgICA+XG4gICAgICAgICAge2ZpcnN0SW5pdGlhbH1cbiAgICAgICAgPC90ZXh0PlxuICAgICAgPC9zdmc+XG4gICAgPC9TcXVhcmU+XG4gICk7XG59O1xuXG50eXBlIFN0YXRlID0ge3wgaXNJbWFnZUxvYWRlZDogYm9vbGVhbiB8fTtcblxudHlwZSBBdmF0YXJQcm9wcyA9IHt8XG4gIG5hbWU6IHN0cmluZyxcbiAgb3V0bGluZT86IGJvb2xlYW4sXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycsXG4gIHNyYz86IHN0cmluZyxcbiAgdmVyaWZpZWQ/OiBib29sZWFuLFxufH07XG5cbmNvbnN0IHNpemVzID0ge1xuICBzbTogMjQsXG4gIG1kOiA0MCxcbiAgbGc6IDcyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXZhdGFyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBdmF0YXJQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb3V0bGluZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtJywgJ21kJywgJ2xnJ10pLFxuICAgIHZlcmlmaWVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBpc0ltYWdlTG9hZGVkOiB0cnVlLFxuICB9O1xuXG4gIGhhbmRsZUltYWdlRXJyb3IgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNJbWFnZUxvYWRlZDogZmFsc2UgfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgb3V0bGluZSwgc2l6ZSwgc3JjLCB2ZXJpZmllZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzSW1hZ2VMb2FkZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgd2lkdGggPSBzaXplID8gc2l6ZXNbc2l6ZV0gOiAnMTAwJSc7XG4gICAgY29uc3QgaGVpZ2h0ID0gc2l6ZSA/IHNpemVzW3NpemVdIDogJyc7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIHsuLi4ob3V0bGluZVxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgX19zdHlsZToge1xuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAwIDAgMnB4ICNmZmYnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7fSl9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBzaGFwZT1cImNpcmNsZVwiXG4gICAgICA+XG4gICAgICAgIHtzcmMgJiYgaXNJbWFnZUxvYWRlZCA/IChcbiAgICAgICAgICA8TWFzayBzaGFwZT1cImNpcmNsZVwiIHdhc2g+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgYWx0PXtuYW1lfVxuICAgICAgICAgICAgICBjb2xvcj1cIiNFRkVGRUZcIlxuICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0PXsxfVxuICAgICAgICAgICAgICBuYXR1cmFsV2lkdGg9ezF9XG4gICAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZUltYWdlRXJyb3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTWFzaz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8RGVmYXVsdEF2YXRhciBuYW1lPXtuYW1lfSAvPlxuICAgICAgICApfVxuICAgICAgICB7dmVyaWZpZWQgJiYgKFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgd2lkdGg9XCIyMCVcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMjAlXCJcbiAgICAgICAgICAgIG1pbldpZHRoPXs4fVxuICAgICAgICAgICAgbWluSGVpZ2h0PXs4fVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17e1xuICAgICAgICAgICAgICBfX3N0eWxlOiB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAnNCUnLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAnNCUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgc2hhcGU9XCJjaXJjbGVcIlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7XG4gICAgICAgICAgICAgICAgX19zdHlsZToge1xuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAwIDAgMnB4ICNmZmYnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgIGljb249XCJjaGVjay1jaXJjbGVcIlxuICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD1cIlwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjEwMCVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9Db2xvcnMuY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0LmNzcyc7XG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tICcuLi9UeXBvZ3JhcGh5LmNzcyc7XG5cbmNvbnN0IFNJWkVfU0NBTEU6IHsgW3NpemU6ID9zdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgeHM6IDEsXG4gIHNtOiAyLFxuICBtZDogMyxcbiAgbGc6IDQsXG4gIHhsOiA1LFxufTtcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFsaWduPzogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdjZW50ZXInIHwgJ2p1c3RpZnknLFxuICBib2xkPzogYm9vbGVhbixcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBjb2xvcj86XG4gICAgfCAnZ3JlZW4nXG4gICAgfCAncGluZSdcbiAgICB8ICdvbGl2ZSdcbiAgICB8ICdibHVlJ1xuICAgIHwgJ25hdnknXG4gICAgfCAnbWlkbmlnaHQnXG4gICAgfCAncHVycGxlJ1xuICAgIHwgJ29yY2hpZCdcbiAgICB8ICdlZ2dwbGFudCdcbiAgICB8ICdtYXJvb24nXG4gICAgfCAnd2F0ZXJtZWxvbidcbiAgICB8ICdvcmFuZ2UnXG4gICAgfCAnZGFya0dyYXknXG4gICAgfCAnZ3JheSdcbiAgICB8ICdsaWdodEdyYXknXG4gICAgfCAncmVkJ1xuICAgIHwgJ3doaXRlJyxcbiAgaW5saW5lPzogYm9vbGVhbixcbiAgaXRhbGljPzogYm9vbGVhbixcbiAgb3ZlcmZsb3c/OiAnbm9ybWFsJyB8ICdicmVha1dvcmQnLFxuICBzaXplPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcsXG4gIHNtU2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnLFxuICBtZFNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyxcbiAgbGdTaXplPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcsXG4gIGxlYWRpbmc/OiAndGFsbCcgfCAnc2hvcnQnLFxuICB0cnVuY2F0ZT86IGJvb2xlYW4sXG4gIF9fZGFuZ2Vyb3VzbHlJbmNyZWFzZUxpbmVIZWlnaHQ/OiBib29sZWFuLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHQoe1xuICBhbGlnbiA9ICdsZWZ0JyxcbiAgYm9sZCA9IGZhbHNlLFxuICBjaGlsZHJlbixcbiAgY29sb3IgPSAnZGFya0dyYXknLFxuICBpbmxpbmUgPSBmYWxzZSxcbiAgaXRhbGljID0gZmFsc2UsXG4gIG92ZXJmbG93ID0gJ2JyZWFrV29yZCcsXG4gIHNpemUgPSAnbWQnLFxuICBzbVNpemUsXG4gIG1kU2l6ZSxcbiAgbGdTaXplLFxuICBsZWFkaW5nID0gJ3Nob3J0JyxcbiAgdHJ1bmNhdGUgPSBmYWxzZSxcbiAgX19kYW5nZXJvdXNseUluY3JlYXNlTGluZUhlaWdodCA9IGZhbHNlLFxufTogUHJvcHMpIHtcbiAgY29uc3Qgc2NhbGUgPSBTSVpFX1NDQUxFW3NpemVdO1xuICBjb25zdCBzbVNjYWxlID0gU0laRV9TQ0FMRVtzbVNpemVdO1xuICBjb25zdCBtZFNjYWxlID0gU0laRV9TQ0FMRVttZFNpemVdO1xuICBjb25zdCBsZ1NjYWxlID0gU0laRV9TQ0FMRVtsZ1NpemVdO1xuXG4gIGNvbnN0IGNzID0gY3goXG4gICAgc3R5bGVzLlRleHQsXG4gICAgc3R5bGVzW2Bmb250U2l6ZSR7c2NhbGV9YF0sXG4gICAgbGdTaXplICYmIHN0eWxlc1tgbGdGb250U2l6ZSR7bGdTY2FsZX1gXSxcbiAgICBtZFNpemUgJiYgc3R5bGVzW2BtZEZvbnRTaXplJHttZFNjYWxlfWBdLFxuICAgIHNtU2l6ZSAmJiBzdHlsZXNbYHNtRm9udFNpemUke3NtU2NhbGV9YF0sXG4gICAgY29sb3IgPT09ICdibHVlJyAmJiBjb2xvcnMuYmx1ZSxcbiAgICBjb2xvciA9PT0gJ2RhcmtHcmF5JyAmJiBjb2xvcnMuZGFya0dyYXksXG4gICAgY29sb3IgPT09ICdlZ2dwbGFudCcgJiYgY29sb3JzLmVnZ3BsYW50LFxuICAgIGNvbG9yID09PSAnZ3JheScgJiYgY29sb3JzLmdyYXksXG4gICAgY29sb3IgPT09ICdncmVlbicgJiYgY29sb3JzLmdyZWVuLFxuICAgIGNvbG9yID09PSAnbGlnaHRHcmF5JyAmJiBjb2xvcnMubGlnaHRHcmF5LFxuICAgIGNvbG9yID09PSAnbWFyb29uJyAmJiBjb2xvcnMubWFyb29uLFxuICAgIGNvbG9yID09PSAnbWlkbmlnaHQnICYmIGNvbG9ycy5taWRuaWdodCxcbiAgICBjb2xvciA9PT0gJ25hdnknICYmIGNvbG9ycy5uYXZ5LFxuICAgIGNvbG9yID09PSAnb2xpdmUnICYmIGNvbG9ycy5vbGl2ZSxcbiAgICBjb2xvciA9PT0gJ29yYW5nZScgJiYgY29sb3JzLm9yYW5nZSxcbiAgICBjb2xvciA9PT0gJ29yY2hpZCcgJiYgY29sb3JzLm9yY2hpZCxcbiAgICBjb2xvciA9PT0gJ3BpbmUnICYmIGNvbG9ycy5waW5lLFxuICAgIGNvbG9yID09PSAncHVycGxlJyAmJiBjb2xvcnMucHVycGxlLFxuICAgIGNvbG9yID09PSAncmVkJyAmJiBjb2xvcnMucmVkLFxuICAgIGNvbG9yID09PSAnd2F0ZXJtZWxvbicgJiYgY29sb3JzLndhdGVybWVsb24sXG4gICAgY29sb3IgPT09ICd3aGl0ZScgJiYgY29sb3JzLndoaXRlLFxuICAgIGxlYWRpbmcgPT09ICdzaG9ydCcgJiYgdHlwb2dyYXBoeS5sZWFkaW5nU2hvcnQsXG4gICAgKGxlYWRpbmcgPT09ICd0YWxsJyB8fCBfX2Rhbmdlcm91c2x5SW5jcmVhc2VMaW5lSGVpZ2h0KSAmJlxuICAgICAgdHlwb2dyYXBoeS5sZWFkaW5nVGFsbCxcbiAgICBhbGlnbiA9PT0gJ2NlbnRlcicgJiYgdHlwb2dyYXBoeS5hbGlnbkNlbnRlcixcbiAgICBhbGlnbiA9PT0gJ2p1c3RpZnknICYmIHR5cG9ncmFwaHkuYWxpZ25KdXN0aWZ5LFxuICAgIGFsaWduID09PSAnbGVmdCcgJiYgdHlwb2dyYXBoeS5hbGlnbkxlZnQsXG4gICAgYWxpZ24gPT09ICdyaWdodCcgJiYgdHlwb2dyYXBoeS5hbGlnblJpZ2h0LFxuICAgIG92ZXJmbG93ID09PSAnYnJlYWtXb3JkJyAmJiB0eXBvZ3JhcGh5LmJyZWFrV29yZCxcbiAgICBpdGFsaWMgJiYgdHlwb2dyYXBoeS5mb250U3R5bGVJdGFsaWMsXG4gICAgIWl0YWxpYyAmJiB0eXBvZ3JhcGh5LmZvbnRTdHlsZU5vcm1hbCxcbiAgICBib2xkICYmIHR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXG4gICAgIWJvbGQgJiYgdHlwb2dyYXBoeS5mb250V2VpZ2h0Tm9ybWFsLFxuICAgIHRydW5jYXRlICYmIHR5cG9ncmFwaHkudHJ1bmNhdGVcbiAgKTtcbiAgY29uc3QgVGFnID0gaW5saW5lID8gJ3NwYW4nIDogJ2Rpdic7XG5cbiAgcmV0dXJuIChcbiAgICA8VGFnXG4gICAgICBjbGFzc05hbWU9e2NzfVxuICAgICAgey4uLih0cnVuY2F0ZSAmJiB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnXG4gICAgICAgID8geyB0aXRsZTogY2hpbGRyZW4gfVxuICAgICAgICA6IG51bGwpfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RhZz5cbiAgKTtcbn1cblxuVGV4dC5wcm9wVHlwZXMgPSB7XG4gIF9fZGFuZ2Vyb3VzbHlJbmNyZWFzZUxpbmVIZWlnaHQ6IFByb3BUeXBlcy5ib29sLFxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInLCAnanVzdGlmeSddKSxcbiAgYm9sZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ2dyZWVuJyxcbiAgICAncGluZScsXG4gICAgJ29saXZlJyxcbiAgICAnYmx1ZScsXG4gICAgJ25hdnknLFxuICAgICdtaWRuaWdodCcsXG4gICAgJ3B1cnBsZScsXG4gICAgJ29yY2hpZCcsXG4gICAgJ2VnZ3BsYW50JyxcbiAgICAnbWFyb29uJyxcbiAgICAnd2F0ZXJtZWxvbicsXG4gICAgJ29yYW5nZScsXG4gICAgJ2RhcmtHcmF5JyxcbiAgICAnZ3JheScsXG4gICAgJ2xpZ2h0R3JheScsXG4gICAgJ3JlZCcsXG4gICAgJ3doaXRlJyxcbiAgXSksXG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIGl0YWxpYzogUHJvcFR5cGVzLmJvb2wsXG4gIGxlYWRpbmc6IFByb3BUeXBlcy5vbmVPZihbJ3RhbGwnLCAnc2hvcnQnXSksXG4gIGxnU2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXSksXG4gIG1kU2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXSksXG4gIG92ZXJmbG93OiBQcm9wVHlwZXMub25lT2YoWydub3JtYWwnLCAnYnJlYWtXb3JkJ10pLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSxcbiAgc21TaXplOiBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSxcbiAgdHJ1bmNhdGU6IFByb3BUeXBlcy5ib29sLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQnV0dG9uLmNzcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0L1RleHQnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgYWNjZXNzaWJpbGl0eUV4cGFuZGVkPzogYm9vbGVhbixcbiAgYWNjZXNzaWJpbGl0eUhhc3BvcHVwPzogYm9vbGVhbixcbiAgYWNjZXNzaWJpbGl0eUxhYmVsPzogc3RyaW5nLFxuICBjb2xvcj86ICdncmF5JyB8ICdyZWQnIHwgJ2JsdWUnIHwgJ3RyYW5zcGFyZW50JyB8ICd3aGl0ZScsXG4gIGRpc2FibGVkPzogYm9vbGVhbixcbiAgaW5saW5lPzogYm9vbGVhbixcbiAgbmFtZT86IHN0cmluZyxcbiAgb25DbGljaz86ICh7IGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PD4gfSkgPT4gdm9pZCxcbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyxcbiAgdGV4dDogc3RyaW5nLFxuICB0eXBlPzogJ3N1Ym1pdCcgfCAnYnV0dG9uJyxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24ocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBhY2Nlc3NpYmlsaXR5RXhwYW5kZWQsXG4gICAgYWNjZXNzaWJpbGl0eUhhc3BvcHVwLFxuICAgIGFjY2Vzc2liaWxpdHlMYWJlbCxcbiAgICBjb2xvciA9ICdncmF5JyxcbiAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgIGlubGluZSA9IGZhbHNlLFxuICAgIG5hbWUsXG4gICAgb25DbGljayxcbiAgICBzaXplID0gJ21kJyxcbiAgICB0ZXh0LFxuICAgIHR5cGUgPSAnYnV0dG9uJyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHRleHRDb2xvciA9IHtcbiAgICBibHVlOiAnd2hpdGUnLFxuICAgIGdyYXk6ICdkYXJrR3JheScsXG4gICAgcmVkOiAnd2hpdGUnLFxuICAgIHRyYW5zcGFyZW50OiAnd2hpdGUnLFxuICAgIHdoaXRlOiAnZGFya0dyYXknLFxuICB9O1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKHN0eWxlcy5idXR0b24sIHtcbiAgICBbc3R5bGVzLnNtXTogc2l6ZSA9PT0gJ3NtJyxcbiAgICBbc3R5bGVzLm1kXTogc2l6ZSA9PT0gJ21kJyxcbiAgICBbc3R5bGVzLmxnXTogc2l6ZSA9PT0gJ2xnJyxcbiAgICBbc3R5bGVzLnNvbGlkXTogY29sb3IgIT09ICd0cmFuc3BhcmVudCcsXG4gICAgW3N0eWxlc1tjb2xvcl1dOiAhZGlzYWJsZWQsXG4gICAgW3N0eWxlcy5kaXNhYmxlZF06IGRpc2FibGVkLFxuICAgIFtzdHlsZXMuZW5hYmxlZF06ICFkaXNhYmxlZCxcbiAgICBbc3R5bGVzLmlubGluZV06IGlubGluZSxcbiAgICBbc3R5bGVzLmJsb2NrXTogIWlubGluZSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBhcmlhLWV4cGFuZGVkPXthY2Nlc3NpYmlsaXR5RXhwYW5kZWR9XG4gICAgICBhcmlhLWhhc3BvcHVwPXthY2Nlc3NpYmlsaXR5SGFzcG9wdXB9XG4gICAgICBhcmlhLWxhYmVsPXthY2Nlc3NpYmlsaXR5TGFiZWx9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgb25DbGljaz17ZXZlbnQgPT4gb25DbGljayAmJiBvbkNsaWNrKHsgZXZlbnQgfSl9XG4gICAgICB0eXBlPXt0eXBlfVxuICAgID5cbiAgICAgIDxUZXh0XG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgYm9sZFxuICAgICAgICBjb2xvcj17ZGlzYWJsZWQgPyAnZ3JheScgOiB0ZXh0Q29sb3JbY29sb3JdfVxuICAgICAgICBvdmVyZmxvdz1cIm5vcm1hbFwiXG4gICAgICAgIHNpemU9e3NpemV9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9UZXh0PlxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBhY2Nlc3NpYmlsaXR5RXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuICBhY2Nlc3NpYmlsaXR5SGFzcG9wdXA6IFByb3BUeXBlcy5ib29sLFxuICBhY2Nlc3NpYmlsaXR5TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydibHVlJywgJ2dyYXknLCAncmVkJywgJ3RyYW5zcGFyZW50JywgJ3doaXRlJ10pLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbScsICdtZCcsICdsZyddKSxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydidXR0b24nLCAnc3VibWl0J10pLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQm94IGZyb20gJy4uL0JveC9Cb3gnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NhcmQuY3NzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFjdGl2ZT86ID9ib29sZWFuLFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gIGltYWdlPzogUmVhY3QuTm9kZSxcbiAgb25Nb3VzZUVudGVyPzogKHsgZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+IH0pID0+IHZvaWQsXG4gIG9uTW91c2VMZWF2ZT86ICh7IGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PiB9KSA9PiB2b2lkLFxufH07XG5cbnR5cGUgU3RhdGUgPSB7fFxuICBob3ZlcmVkOiBib29sZWFuLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgaW1hZ2U6IFByb3BUeXBlcy5ub2RlLFxuICAgIG9uTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0ZTogU3RhdGUgPSB7XG4gICAgaG92ZXJlZDogZmFsc2UsXG4gIH07XG5cbiAgaGFuZGxlTW91c2VFbnRlciA9IChldmVudDogU3ludGhldGljTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG9uTW91c2VFbnRlciB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgeyBob3ZlcmVkOiB0cnVlIH0sXG4gICAgICBvbk1vdXNlRW50ZXIgJiYgKCgpID0+IG9uTW91c2VFbnRlcih7IGV2ZW50IH0pKVxuICAgICk7XG4gIH07XG5cbiAgaGFuZGxlTW91c2VMZWF2ZSA9IChldmVudDogU3ludGhldGljTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG9uTW91c2VMZWF2ZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgeyBob3ZlcmVkOiBmYWxzZSB9LFxuICAgICAgb25Nb3VzZUxlYXZlICYmICgoKSA9PiBvbk1vdXNlTGVhdmUoeyBldmVudCB9KSlcbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGl2ZSwgY2hpbGRyZW4sIGltYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaG92ZXJlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKHN0eWxlcy5jYXJkLCB7XG4gICAgICAvLyBJZiwgbGlrZSBAY2hyaXNsbG95ZCwgeW91IGNhbid0IHJlbWVtYmVyIEphdmFzY3JpcHQgZXF1YWxpdHkgcnVsZXMsXG4gICAgICAvLyA9PSBudWxsIGNoZWNrcyBmb3IgYG51bGxgIG9yIGB1bmRlZmluZWRgIGFuZCBsZWF2ZXMgb3V0IGBmYWxzZWAuXG4gICAgICBbc3R5bGVzLmhvdmVyXTogYWN0aXZlIHx8IChhY3RpdmUgPT0gbnVsbCAmJiBob3ZlcmVkKSxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVNb3VzZUVudGVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICA+XG4gICAgICAgIHtpbWFnZSAmJiA8Qm94IG1hcmdpbkJvdHRvbT17MX0+e2ltYWdlfTwvQm94Pn1cbiAgICAgICAgPEJveD57Y2hpbGRyZW59PC9Cb3g+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DaGVja2JveC5jc3MnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gvQm94JztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24vSWNvbic7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGVja2VkPzogYm9vbGVhbixcbiAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICBpZDogc3RyaW5nLFxuICBpbmRldGVybWluYXRlPzogYm9vbGVhbixcbiAgbmFtZT86IHN0cmluZyxcbiAgb25DaGFuZ2U6ICh7IGV2ZW50OiBTeW50aGV0aWNJbnB1dEV2ZW50PD4sIGNoZWNrZWQ6IGJvb2xlYW4gfSkgPT4gdm9pZCxcbiAgc2l6ZT86ICdzbScgfCAnbWQnLFxufH07XG5cbnR5cGUgU3RhdGUgPSB7fFxuICBmb2N1c2VkOiBib29sZWFuLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGluZGV0ZXJtaW5hdGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc20nLCAnbWQnXSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaW5kZXRlcm1pbmF0ZTogZmFsc2UsXG4gICAgc2l6ZTogJ21kJyxcbiAgfTtcblxuICBzdGF0ZTogU3RhdGUgPSB7XG4gICAgZm9jdXNlZDogZmFsc2UsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgdGhpcy5zZXRJbmRldGVybWluYXRlKCEhdGhpcy5wcm9wcy5pbmRldGVybWluYXRlKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldmlvdXNQcm9wczogUHJvcHMpIHtcbiAgICBpZiAocHJldmlvdXNQcm9wcy5pbmRldGVybWluYXRlICE9PSB0aGlzLnByb3BzLmluZGV0ZXJtaW5hdGUpIHtcbiAgICAgIHRoaXMuc2V0SW5kZXRlcm1pbmF0ZSghIXRoaXMucHJvcHMuaW5kZXRlcm1pbmF0ZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0SW5kZXRlcm1pbmF0ZShpbmRldGVybWluYXRlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgIHRoaXMuaW5wdXQuaW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGU7XG4gICAgfVxuICB9XG5cbiAgaW5wdXQ6ID9IVE1MSW5wdXRFbGVtZW50O1xuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudDogU3ludGhldGljSW5wdXRFdmVudDw+KSA9PiB7XG4gICAgY29uc3QgeyBjaGVja2VkIH0gPSBldmVudC50YXJnZXQ7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IGV2ZW50LCBjaGVja2VkIH0pO1xuICB9O1xuXG4gIGhhbmRsZUJsdXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogZmFsc2UgfSk7XG4gIGhhbmRsZUZvY3VzID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IHRydWUgfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hlY2tlZCwgZGlzYWJsZWQsIGlkLCBpbmRldGVybWluYXRlLCBuYW1lLCBzaXplIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmlucHV0LCB7XG4gICAgICAgICAgICBbc3R5bGVzLmlucHV0RW5hYmxlZF06ICFkaXNhYmxlZCxcbiAgICAgICAgICAgIFtzdHlsZXMuaW5kZXRlcm1pbmF0ZV06IGluZGV0ZXJtaW5hdGUsXG4gICAgICAgICAgICBbc3R5bGVzLmlucHV0U21dOiBzaXplID09PSAnc20nLFxuICAgICAgICAgICAgW3N0eWxlcy5pbnB1dE1kXTogc2l6ZSA9PT0gJ21kJyxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgc3R5bGVzLmNoZWNrLFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICA/IGNoZWNrZWQgfHwgaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgICAgID8gc3R5bGVzLmNoZWNrR3JheVxuICAgICAgICAgICAgICAgIDogc3R5bGVzLmNoZWNrTGlnaHRHcmF5XG4gICAgICAgICAgICAgIDogY2hlY2tlZCB8fCBpbmRldGVybWluYXRlXG4gICAgICAgICAgICAgICAgPyBzdHlsZXMuY2hlY2tEYXJrR3JheVxuICAgICAgICAgICAgICAgIDogc3R5bGVzLmNoZWNrV2hpdGUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFtzdHlsZXMuY2hlY2tFbmFibGVkXTogIWRpc2FibGVkLFxuICAgICAgICAgICAgICBbc3R5bGVzLmNoZWNrRm9jdXNlZF06IHRoaXMuc3RhdGUuZm9jdXNlZCxcbiAgICAgICAgICAgICAgW3N0eWxlcy5jaGVja01kXTogc2l6ZSA9PT0gJ21kJyxcbiAgICAgICAgICAgICAgW3N0eWxlcy5jaGVja1NtXTogc2l6ZSA9PT0gJ3NtJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAgeyhjaGVja2VkIHx8IGluZGV0ZXJtaW5hdGUpICYmIChcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD1cIlwiXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICBpY29uPXtpbmRldGVybWluYXRlID8gJ2Rhc2gnIDogJ2NoZWNrJ31cbiAgICAgICAgICAgICAgc2l6ZT17c2l6ZSA9PT0gJ3NtJyA/IDggOiAxMn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuLypcbiAgIyBDb2xsZWN0aW9uXG5cbiAgQ29sbGVjdGlvbiBpcyBjb21wb25lbnQgdGhhdCBjYW4gYWJzb2x1dGVseSBwb3NpdGlvbiBhbmQgdmlydHVhbGl6ZSBpdGVtcy4gSXQncyBtZWFudCB0byBiZSBhbiBleHRlcmVtbHkgc2ltcGxlIHdvcmtob3JzZSB0byByZS1pbXBsZW1lbnQgY3VzdG9tIGxheW91dHMuIEl0J3Mgbm90IHBlcmZlY3QgZm9yIGFsbCBzaXR1YXRpb25zIGJ1dCBpdCBkb2VzIGhhdmUgYSBjbG9zZWQgQVBJIGFuZCBpcyBwcmV0dHkgcGVyZm9ybWFudC5cblxuICAjIyBIb3cgaXQgd29ya3NcblxuICBUaGVyZSBhcmUgdHdvIGNlbnRyYWwgY29uY2VwdHMgdG8gQ29sbGVjdGlvbiAtIHRoZSBjb250ZW50IGxheWVyIGFuZCB0aGUgdmlld3BvcnQgbGF5ZXIuXG5cbiAgQ29udGVudCBsYXllciAgICAgICAgICAgICAgIFZpZXdwb3J0ICAgICAgICAgICAgICAgICAgIENvbXBvc2l0ZSBsYXllclxuXG4gICstLS0tLS0tLS0tLS0tLS0tKyAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0rXG4gIHwgICAgICAgICAgICAgICAgfCAgICAgICAgICB8ICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8XG4gIHwgKy0tKyArLS0rICstLSsgfCAgICAgICAgICB8ICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8XG4gIHwgfCAgfCB8ICB8IHwgIHwgfCAgICAgICAgICB8ICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8XG4gIHwgfCAgfCB8ICB8IHwgIHwgfCAgICAgICAgICB8ICstLS0tLS0tLS0tLS0rIHwgICAgICAgICAgfCArLS0tLS0tLS0tLS0tKyB8XG4gIHwgKy0tKyB8ICB8IHwgIHwgfCAgICAgICAgICB8IHwgICAgICAgICAgICB8IHwgICAgICAgICAgfCB8LS0rIHwgIHwgfCAgfCB8XG4gIHwgICAgICB8ICB8ICstLSsgfCAgICAgICAgICB8IHwgICAgICAgICAgICB8IHwgICAgICAgICAgfCB8ICAgIHwgIHwgKy0tfCB8XG4gIHwgKy0tKyArLS0rICAgICAgfCAgICAgICAgICB8IHwgICAgICAgICAgICB8IHwgICAgICAgICAgfCB8LS0rICstLSsgICAgfCB8XG4gIHwgfCAgfCAgICAgICstLSsgfCArLS0tLS0tPiB8IHwgICAgICAgICAgICB8IHwgKy0tLS0tLT4gfCB8ICB8ICAgICAgKy0tfCB8XG4gIHwgKy0tKyArLS0rIHwgIHwgfCAgICAgICAgICB8IHwgICAgICAgICAgICB8IHwgICAgICAgICAgfCB8LS0rICstLSsgfCAgfCB8XG4gIHwgICAgICB8ICB8IHwgIHwgfCAgICAgICAgICB8IHwgICAgICAgICAgICB8IHwgICAgICAgICAgfCB8ICAgIHwgIHwgfCAgfCB8XG4gIHwgKy0tKyB8ICB8ICstLSsgfCAgICAgICAgICB8IHwgICAgICAgICAgICB8IHwgICAgICAgICAgfCB8LS0rIHwgIHwgKy0tfCB8XG4gIHwgfCAgfCB8ICB8ICAgICAgfCAgICAgICAgICB8IHwgICAgICAgICAgICB8IHwgICAgICAgICAgfCB8ICB8IHwgIHwgICAgfCB8XG4gIHwgfCAgfCB8ICB8ICstLSsgfCAgICAgICAgICB8ICstLS0tLS0tLS0tLS0rIHwgICAgICAgICAgfCArLS0tLS0tLS0tLS0tKyB8XG4gIHwgfCAgfCB8ICB8IHwgIHwgfCAgICAgICAgICB8ICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8XG4gIHwgKy0tKyArLS0rICstLSsgfCAgICAgICAgICB8ICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8XG4gIHwgICAgICAgICAgICAgICAgfCAgICAgICAgICB8ICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8XG4gICstLS0tLS0tLS0tLS0tLS0tKyAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0rXG5cbiAgWW91IHBvc2l0aW9uIHlvdXIgaXRlbXMgaW4gdGhlIHZpcnR1YWwgY29udGVudCBsYXllciwgdGhlbiB5b3UgZGVmaW5lIHRoZSB2aWV3cG9ydCBsYXllciAoYnkgZGVmYXVsdCB0aGlzIGlzIHRoZSBmdWxsIHNpemUgb2YgdGhlIGNvbnRlbnQgbGF5ZXIpLiBDb2xsZWN0aW9uIHRoZW4gdGFrZXMgdGhvc2UgaXRlbXMsIGFuZCB0aGUgdmlld3BvcnQgcmVuZGVyaW5nIHRoZSBjb250ZW50IGxheWVyIHdpdGggb25seSB0aGUgaXRlbXMgdGhhdCBmaXQgaW5zaWRlIHRoZSB2aWV3cG9ydC5cblxuICAjIyBBc3N1bXB0aW9uc1xuXG4gIDEuIFlvdXIgbGF5b3V0IGlzIHByZS1jYWxjdWxhdGVkLiBDb2xsZWN0aW9uIGV4cGVjdHMgbGF5b3V0IHRvIGJlIHBhc3NlZCBpbiBhcyBhIHByb3BlcnR5LiBJZiB5b3VyIGxheW91dCBpc24ndCByZWFkeSAoaS5lLiBzb21ldGhpbmcgbmVlZHMgdG8gYmUgbWVhc3VyZWQpIHRoZSBjYWxsZXIgbmVlZHMgdG8gZmlndXJlIHRoYXQgb3V0LlxuICAyLiBQYXNzZWQgaW4gSXRlbSBhcmUgc29tZXdoYXQgcHVyZSAtIHRoZXkgY2FuIGJlIG1vdW50ZWQgYW5kIHVubW91bnRlZCBhdCBhbnl0aW1lIHNvIEl0ZW0ncyBsaWZlY3ljbGUgbWV0aG9kcyBuZWVkIHRvIGFjY291bnQgZm9yIHRoYXQuXG4gIDMuIFBhc3NlZCBpbiBJdGVtcyBhcmUgYm91bmQgdG8gdGhlaXIgZGF0YS1zb3VyY2Ugc2VwZXJhdGVseS4gQWxsIHRoZXkgcmVjZWl2ZSBpcyBhbiBpbmRleCwgc28gdGhleSBuZWVkIHRvIGhhdmUgYW55IGV4dGVybmFsIGRhdGEgc291cmNlcyBpbiBzY29wZS5cbiAgNC4gVGhlIHZpZXdwb3J0IGNhbiBiZSBhbnkgc2l6ZS4gTW9zdCB3aW5kb3dpbmcvcmVjeWNsaW5nIHNvbHV0aW9ucyBpbXBsZW1lbnQgc29tZSBzb3J0IG9mIG92ZXJzY2FubmluZywgaG93ZXZlciBDb2xsZWN0aW9uIGxlYXZlcyB0aGlzIHVwIHRoZSB0aGUgcGFyZW50LlxuXG4qL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBsYXlvdXRTdHlsZXMgZnJvbSAnLi4vTGF5b3V0LmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBJdGVtOiAoeyBpZHg6IG51bWJlciB9KSA9PiBSZWFjdC5Ob2RlLFxuICBsYXlvdXQ6IEFycmF5PHt8XG4gICAgdG9wOiBudW1iZXIsXG4gICAgbGVmdDogbnVtYmVyLFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgaGVpZ2h0OiBudW1iZXIsXG4gIHx9PixcbiAgdmlld3BvcnRUb3A/OiBudW1iZXIsXG4gIHZpZXdwb3J0TGVmdD86IG51bWJlcixcbiAgdmlld3BvcnRXaWR0aD86IG51bWJlcixcbiAgdmlld3BvcnRIZWlnaHQ/OiBudW1iZXIsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGVjdGlvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIHZvaWQ+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbiAgICBJdGVtOiBQcm9wVHlwZXMuYW55LFxuICAgIGxheW91dDogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuZXhhY3Qoe1xuICAgICAgICB0b3A6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgbGVmdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIH0pLmlzUmVxdWlyZWRcbiAgICApLFxuICAgIHZpZXdwb3J0SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHZpZXdwb3J0TGVmdDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2aWV3cG9ydFRvcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2aWV3cG9ydFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbGF5b3V0OiBbXSxcbiAgICB2aWV3cG9ydExlZnQ6IDAsXG4gICAgdmlld3BvcnRUb3A6IDAsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgSXRlbSwgbGF5b3V0LCB2aWV3cG9ydFRvcCA9IDAsIHZpZXdwb3J0TGVmdCA9IDAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGZ1bGwgZGltZW5zaW9ucyBvZiB0aGUgaXRlbSBsYXllclxuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoLi4ubGF5b3V0Lm1hcChpdGVtID0+IGl0ZW0ubGVmdCArIGl0ZW0ud2lkdGgpKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCguLi5sYXlvdXQubWFwKGl0ZW0gPT4gaXRlbS50b3AgKyBpdGVtLmhlaWdodCkpO1xuXG4gICAgLy8gRGVmYXVsdCB0aGUgdmlld3BvcnQgdG8gYmVpbmcgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIGNvbnRlbnQgbGF5ZXJcbiAgICBjb25zdCB7IHZpZXdwb3J0V2lkdGggPSB3aWR0aCwgdmlld3BvcnRIZWlnaHQgPSBoZWlnaHQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBDYWxjdWxhdGVzIHdoaWNoIGl0ZW1zIGZyb20gdGhlIGl0ZW0gbGF5ZXIgdG8gcmVuZGVyIGluIHRoZSB2aWV3cG9ydFxuICAgIC8vIGxheWVyLlxuICAgIGNvbnN0IGl0ZW1zID0gbGF5b3V0LnJlZHVjZSgoYWNjLCBwb3NpdGlvbiwgaWR4KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHBvc2l0aW9uLnRvcCArIHBvc2l0aW9uLmhlaWdodCA+IHZpZXdwb3J0VG9wICYmXG4gICAgICAgIHBvc2l0aW9uLnRvcCA8IHZpZXdwb3J0SGVpZ2h0ICsgdmlld3BvcnRUb3AgJiZcbiAgICAgICAgcG9zaXRpb24ubGVmdCA8IHZpZXdwb3J0V2lkdGggKyB2aWV3cG9ydExlZnQgJiZcbiAgICAgICAgcG9zaXRpb24ubGVmdCArIHBvc2l0aW9uLndpZHRoID4gdmlld3BvcnRMZWZ0XG4gICAgICApIHtcbiAgICAgICAgYWNjLnB1c2goeyBpZHgsIC4uLnBvc2l0aW9uIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2xheW91dFN0eWxlcy5yZWxhdGl2ZX0gc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fT5cbiAgICAgICAge2l0ZW1zLm1hcCgoeyBpZHgsIC4uLnN0eWxlIH0pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9e2xheW91dFN0eWxlcy5hYnNvbHV0ZX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIDxJdGVtIGlkeD17aWR4fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8qIEBmbG93ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29sdW1uLmNzcyc7XG5cbnR5cGUgRGVwcmVjYXRlZENvbHVtbnMgPSAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XG50eXBlIENvbHVtbnMgPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xuXG50eXBlIENvbHVtblByb3BzID1cbiAgfCB7fFxuICAgICAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICAgICAgc3BhbjogQ29sdW1ucyxcbiAgICAgIHNtU3Bhbj86IENvbHVtbnMsXG4gICAgICBtZFNwYW4/OiBDb2x1bW5zLFxuICAgICAgbGdTcGFuPzogQ29sdW1ucyxcbiAgICB8fVxuICB8IHt8XG4gICAgICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gICAgICB4cz86IERlcHJlY2F0ZWRDb2x1bW5zLFxuICAgICAgc20/OiBEZXByZWNhdGVkQ29sdW1ucyxcbiAgICAgIG1kPzogRGVwcmVjYXRlZENvbHVtbnMsXG4gICAgICBsZz86IERlcHJlY2F0ZWRDb2x1bW5zLFxuICAgIHx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2x1bW4ocHJvcHM6IENvbHVtblByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBjb25zdCBjcyA9IGNsYXNzbmFtZXMoXG4gICAgKHByb3BzLnhzIHx8IHByb3BzLnNtIHx8IHByb3BzLm1kIHx8IHByb3BzLmxnKSAmJiBzdHlsZXMuZGVwcmVjYXRlZENvbHVtbixcbiAgICBwcm9wcy54cyAmJiBzdHlsZXNbYHhzQ29sJHtwcm9wcy54c31gXSxcbiAgICBwcm9wcy5zbSAmJiBzdHlsZXNbYHNtQ29sJHtwcm9wcy5zbX1gXSxcbiAgICBwcm9wcy5tZCAmJiBzdHlsZXNbYG1kQ29sJHtwcm9wcy5tZH1gXSxcbiAgICBwcm9wcy5sZyAmJiBzdHlsZXNbYGxnQ29sJHtwcm9wcy5sZ31gXSxcbiAgICBwcm9wcy5zcGFuICE9IG51bGwgJiYgc3R5bGVzW2B4c0NvbCR7cHJvcHMuc3Bhbn1gXSxcbiAgICBwcm9wcy5zbVNwYW4gIT0gbnVsbCAmJiBzdHlsZXNbYHNtQ29sJHtwcm9wcy5zbVNwYW59YF0sXG4gICAgcHJvcHMubWRTcGFuICE9IG51bGwgJiYgc3R5bGVzW2BtZENvbCR7cHJvcHMubWRTcGFufWBdLFxuICAgIHByb3BzLmxnU3BhbiAhPSBudWxsICYmIHN0eWxlc1tgbGdDb2wke3Byb3BzLmxnU3Bhbn1gXVxuICApO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NzfT57Y2hpbGRyZW59PC9kaXY+O1xufVxuXG5Db2x1bW4ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHhzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzbTogUHJvcFR5cGVzLm51bWJlcixcbiAgbWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxnOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzcGFuOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzbVNwYW46IFByb3BUeXBlcy5udW1iZXIsXG4gIG1kU3BhbjogUHJvcFR5cGVzLm51bWJlcixcbiAgbGdTcGFuOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gvQm94JztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxCb3gganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAgPEJveCBtYXhXaWR0aD17ODAwfSB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RpdmlkZXIuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGl2aWRlcigpIHtcbiAgcmV0dXJuIDxociBjbGFzc05hbWU9e3N0eWxlcy5kaXZpZGVyfSAvPjtcbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICBkaXJlY3Rpb24/OiA/J3VwJyB8ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJldChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBkaXJlY3Rpb24gfSA9IHByb3BzO1xuICBsZXQgcGF0aDtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlICd1cCc6XG4gICAgICBwYXRoID0gJ00wIDAgTDEyIDEyIEwyNCAwJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHBhdGggPSAnTTI0IDAgTDEyIDEyIEwyNCAyNCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkb3duJzpcbiAgICAgIHBhdGggPSAnTTAgMjQgTDEyIDEyIEwyNCAyNCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIHBhdGggPSAnTTAgMCBMMTIgMTIgTDAgMjQnO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICAgIDxwYXRoIGQ9e3BhdGh9IC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbkNhcmV0LnByb3BUeXBlcyA9IHtcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWyd1cCcsICdyaWdodCcsICdkb3duJywgJ2xlZnQnXSksXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDYXJldCBmcm9tICcuL0NhcmV0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250ZW50cy5jc3MnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9Db2xvcnMuY3NzJztcblxuLyogTmVlZGVkIHVudGlsIHRoaXMgRmxvdyBpc3N1ZSBpcyBmaXhlZDogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzM4MCAqL1xuLyogZXNsaW50IHF1b3RlLXByb3BzOiAwICovXG5jb25zdCBTUEFDRVNfSU5ERVhfTUFQID0ge1xuICAnMCc6ICd1cCcsXG4gICcxJzogJ3JpZ2h0JyxcbiAgJzInOiAnZG93bicsXG4gICczJzogJ2xlZnQnLFxufTtcblxuY29uc3QgRElSX0lOREVYX01BUCA9IHtcbiAgdXA6IDAsXG4gIHJpZ2h0OiAxLFxuICBkb3duOiAyLFxuICBsZWZ0OiAzLFxufTtcblxuY29uc3QgTUFSR0lOID0gMjQ7XG5leHBvcnQgY29uc3QgQ0FSRVRfSEVJR0hUID0gMjQ7XG5jb25zdCBDQVJFVF9PRkZTRVRfRlJPTV9TSURFID0gMjQ7XG5leHBvcnQgY29uc3QgQk9SREVSX1JBRElVUyA9IDg7XG5cbnR5cGUgTWFpbkRpciA9ID8oJ3VwJyB8ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcpO1xudHlwZSBTdWJEaXIgPSAndXAnIHwgJ3JpZ2h0JyB8ICdkb3duJyB8ICdsZWZ0JyB8ICdtaWRkbGUnO1xuXG50eXBlIENsaWVudFJlY3QgPSB7XG4gIGJvdHRvbTogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgbGVmdDogbnVtYmVyLFxuICByaWdodDogbnVtYmVyLFxuICB0b3A6IG51bWJlcixcbiAgd2lkdGg6IG51bWJlcixcbn07XG5cbnR5cGUgV2luZG93ID0ge1xuICBoZWlnaHQ6IG51bWJlcixcbiAgd2lkdGg6IG51bWJlcixcbiAgc2Nyb2xsWTogbnVtYmVyLFxuICBzY3JvbGxYOiBudW1iZXIsXG59O1xuXG50eXBlIEZseW91dCA9IHsgaGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIgfTtcblxudHlwZSBTaGlmdCA9IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfTtcblxudHlwZSBFZGdlU2hpZnQgPSB7IGNhcmV0OiBTaGlmdCwgZmx5b3V0OiBTaGlmdCB9O1xuXG50eXBlIFByb3BzID0ge3xcbiAgYmdDb2xvcjogJ2RhcmtHcmF5JyB8ICd3aGl0ZScgfCAnb3JhbmdlJyxcbiAgY2hpbGRyZW4/OiBhbnksXG4gIGlkZWFsRGlyZWN0aW9uPzogJ3VwJyB8ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcsXG4gIG9uQ2xpY2s6IChldmVudDogRXZlbnQpID0+IHZvaWQsXG4gIG9uS2V5RG93bjogKGV2ZW50OiB7IGtleUNvZGU6IG51bWJlciB9KSA9PiB2b2lkLFxuICBvblJlc2l6ZTogKCkgPT4gdm9pZCxcbiAgcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yPzogYm9vbGVhbixcbiAgcmVsYXRpdmVPZmZzZXQ6IHtcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICB9LFxuICBzaG91bGRGb2N1cz86IGJvb2xlYW4sXG4gIHRyaWdnZXJSZWN0OiBDbGllbnRSZWN0LFxuICB3aWR0aDogbnVtYmVyLFxufH07XG5cbnR5cGUgU3RhdGUgPSB7XG4gIGZseW91dE9mZnNldDoge1xuICAgIHRvcDogP251bWJlcixcbiAgICBsZWZ0OiA/bnVtYmVyLFxuICB9LFxuICBjYXJldE9mZnNldDoge1xuICAgIHRvcDogP251bWJlcixcbiAgICByaWdodDogP251bWJlcixcbiAgICBib3R0b206ID9udW1iZXIsXG4gICAgbGVmdDogP251bWJlcixcbiAgfSxcbiAgbWFpbkRpcjogP01haW5EaXIsXG59O1xuXG4vKipcbiAqIERldGVybWluZXMgdGhlIG1haW4gZGlyZWN0aW9uIHRoZSBmbHlvdXQgb3BlbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1haW5EaXIoXG4gIGZseW91dFNpemU6IEZseW91dCxcbiAgaWRlYWxEaXJlY3Rpb246IE1haW5EaXIsXG4gIHRyaWdnZXJSZWN0OiBDbGllbnRSZWN0LFxuICB3aW5kb3dTaXplOiBXaW5kb3dcbikge1xuICAvLyBDYWxjdWxhdGVzIHRoZSBhdmFpbGFibGUgc3BhY2UgaWYgd2Ugd2VyZSB0byBwbGFjZSB0aGUgZmx5b3V0IGluIHRoZSA0IG1haW4gZGlyZWN0aW9uc1xuICAvLyB0byBkZXRlcm1pbmUgd2hpY2ggJ3F1YWRyYW50JyB0byBwb3NpdGlvbiB0aGUgZmx5b3V0IGluc2lkZSBvZlxuICBsZXQgdXAgPSB0cmlnZ2VyUmVjdC50b3AgLSBmbHlvdXRTaXplLmhlaWdodCAtIENBUkVUX0hFSUdIVDtcbiAgbGV0IHJpZ2h0ID1cbiAgICB3aW5kb3dTaXplLndpZHRoIC0gZmx5b3V0U2l6ZS53aWR0aCAtIENBUkVUX0hFSUdIVCAtIHRyaWdnZXJSZWN0LnJpZ2h0O1xuICBsZXQgZG93biA9XG4gICAgd2luZG93U2l6ZS5oZWlnaHQgLSBmbHlvdXRTaXplLmhlaWdodCAtIENBUkVUX0hFSUdIVCAtIHRyaWdnZXJSZWN0LmJvdHRvbTtcbiAgbGV0IGxlZnQgPSB0cmlnZ2VyUmVjdC5sZWZ0IC0gZmx5b3V0U2l6ZS53aWR0aCAtIENBUkVUX0hFSUdIVDtcblxuICAvLyBvdmVycmlkZXMgYXZhaWxhYmxlIHNwYWNlIHdoZW4gdGhlIHRyaWdnZXIgaXMgY2xvc2UgdG8gdGhlIGVkZ2Ugb2YgdGhlIHNjcmVlblxuICAvLyB0cmlnZ2VyIGlzIHRvbyBjbG9zZSB0byB0b3AvYm90dG9tIG9mIHNjcmVlbiBmb3IgbGVmdCAmIHJpZ2h0IGZseW91dHNcbiAgaWYgKFxuICAgIHRyaWdnZXJSZWN0LnRvcCA8IEJPUkRFUl9SQURJVVMgfHxcbiAgICB3aW5kb3dTaXplLmhlaWdodCAtIHRyaWdnZXJSZWN0LmJvdHRvbSA8IEJPUkRFUl9SQURJVVNcbiAgKSB7XG4gICAgbGVmdCA9IDA7XG4gICAgcmlnaHQgPSAwO1xuICB9XG5cbiAgLy8gdHJpZ2dlciBpcyB0b28gY2xvc2UgdG8gdGhlIGxlZnQvcmlnaHQgb2Ygc2NyZWVuIGZvciB1cCAmIGRvd24gZmx5b3V0c1xuICBpZiAoXG4gICAgdHJpZ2dlclJlY3QubGVmdCA8IEJPUkRFUl9SQURJVVMgfHxcbiAgICB3aW5kb3dTaXplLndpZHRoIC0gdHJpZ2dlclJlY3QucmlnaHQgPCBCT1JERVJfUkFESVVTXG4gICkge1xuICAgIHVwID0gMDtcbiAgICBkb3duID0gMDtcbiAgfVxuXG4gIGNvbnN0IHNwYWNlcyA9IFt1cCwgcmlnaHQsIGRvd24sIGxlZnRdO1xuXG4gIC8vIElkZW50aWZ5IGJlc3QgZGlyZWN0aW9uIG9mIGF2YWlsYWJsZSBzcGFjZXNcbiAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4uc3BhY2VzKTtcblxuICAvLyBDaG9zZSB0aGUgbWFpbiBkaXJlY3Rpb24gZm9yIHRoZSBmbHlvdXQgYmFzZWQgb24gYXZhaWxhYmxlIHNwYWNlcyAmIHVzZXIgcHJlZmVyZW5jZVxuICBsZXQgbWFpbkRpcjtcbiAgaWYgKGlkZWFsRGlyZWN0aW9uICYmIHNwYWNlc1tESVJfSU5ERVhfTUFQW2lkZWFsRGlyZWN0aW9uXV0gPiAwKSB7XG4gICAgLy8gdXNlciBwcmVmXG4gICAgbWFpbkRpciA9IGlkZWFsRGlyZWN0aW9uO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIG5vIGRpcmVjdGlvbiBwcmVmLCBjaG9zZSB0aGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZXJlIGlzIHRoZSBtb3N0IHNwYWNlIGF2YWlsYWJsZVxuICAgIG1haW5EaXIgPSBTUEFDRVNfSU5ERVhfTUFQW3NwYWNlcy5pbmRleE9mKG1heCldO1xuICB9XG4gIHJldHVybiBtYWluRGlyO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgdGhlIHN1YiBkaXJlY3Rpb24gb2YgaG93IHRoZSBmbHlvdXQgaXMgcG9zaXRpb25lZCB3aXRoaW4gdGhlIG1haW4gZGlyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdWJEaXIoXG4gIGZseW91dFNpemU6IEZseW91dCxcbiAgbWFpbkRpcjogTWFpbkRpcixcbiAgdHJpZ2dlclJlY3Q6IENsaWVudFJlY3QsXG4gIHdpbmRvd1NpemU6IFdpbmRvd1xuKSB7XG4gIC8vIE5vdyB0aGF0IHdlIGhhdmUgdGhlIG1haW4gZGlyZWN0aW9uLCBjaG9zZSBmcm9tIDMgY2FyZXQgcGxhY2VtZW50cyBmb3IgdGhhdCBkaXJlY3Rpb25cbiAgbGV0IG9mZnNldDtcbiAgbGV0IHRyaWdnZXJNaWQ7XG4gIGxldCB3aW5kb3dTcGFjZUF2YWlsYWJsZTtcblxuICBpZiAobWFpbkRpciA9PT0gJ3JpZ2h0JyB8fCBtYWluRGlyID09PSAnbGVmdCcpIHtcbiAgICBvZmZzZXQgPSBmbHlvdXRTaXplLmhlaWdodCAvIDI7XG4gICAgdHJpZ2dlck1pZCA9IHRyaWdnZXJSZWN0LnRvcCArICh0cmlnZ2VyUmVjdC5ib3R0b20gLSB0cmlnZ2VyUmVjdC50b3ApIC8gMjtcbiAgICB3aW5kb3dTcGFjZUF2YWlsYWJsZSA9IHdpbmRvd1NpemUuaGVpZ2h0O1xuICB9IGVsc2Uge1xuICAgIC8vIChtYWluRGlyID09PSAndXAnIHx8IG1haW5EaXIgPT09ICdkb3duJylcbiAgICBvZmZzZXQgPSBmbHlvdXRTaXplLndpZHRoIC8gMjtcbiAgICB0cmlnZ2VyTWlkID0gdHJpZ2dlclJlY3QubGVmdCArICh0cmlnZ2VyUmVjdC5yaWdodCAtIHRyaWdnZXJSZWN0LmxlZnQpIC8gMjtcbiAgICB3aW5kb3dTcGFjZUF2YWlsYWJsZSA9IHdpbmRvd1NpemUud2lkdGg7XG4gIH1cblxuICBjb25zdCBhYm92ZU9yTGVmdCA9IHRyaWdnZXJNaWQgLSBvZmZzZXQgLSBNQVJHSU47XG4gIGNvbnN0IGJlbG93T3JSaWdodCA9IHdpbmRvd1NwYWNlQXZhaWxhYmxlIC0gdHJpZ2dlck1pZCAtIG9mZnNldCAtIE1BUkdJTjtcbiAgbGV0IHN1YkRpcjtcbiAgaWYgKGFib3ZlT3JMZWZ0ID4gMCAmJiBiZWxvd09yUmlnaHQgPiAwKSB7XG4gICAgLy8gY2FyZXQgc2hvdWxkIGdvIGluIG1pZGRsZSBiL2MgaXQgY2FuXG4gICAgc3ViRGlyID0gJ21pZGRsZSc7XG4gIH0gZWxzZSBpZiAoYmVsb3dPclJpZ2h0ID4gMCkge1xuICAgIC8vIGNhcmV0IHNob3VsZCBnbyBhdCB0b3AgZm9yIGxlZnQvcmlnaHQgYW5kIGxlZnQgZm9yIHVwL2Rvd25cbiAgICBzdWJEaXIgPSBtYWluRGlyID09PSAnbGVmdCcgfHwgbWFpbkRpciA9PT0gJ3JpZ2h0JyA/ICd1cCcgOiAnbGVmdCc7XG4gIH0gZWxzZSB7XG4gICAgLy8gY2FyZXQgc2hvdWxkIGdvIGF0IGJvdHRvbSBmb3IgbGVmdC9yaWdodCBhbmQgcmlnaHQgZm9yIHVwL2Rvd25cbiAgICBzdWJEaXIgPSBtYWluRGlyID09PSAnbGVmdCcgfHwgbWFpbkRpciA9PT0gJ3JpZ2h0JyA/ICdkb3duJyA6ICdyaWdodCc7XG4gIH1cbiAgcmV0dXJuIHN1YkRpcjtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhbW91bnQgdGhlIGZseW91dCAmIGNhcmV0IG5lZWQgdG8gc2hpZnQgb3ZlciB0byBhbGlnbiB3aXRoIGRlc2lnbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGNFZGdlU2hpZnRzKFxuICBzdWJEaXI6IFN1YkRpcixcbiAgdHJpZ2dlclJlY3Q6IENsaWVudFJlY3QsXG4gIHdpbmRvd1NpemU6IFdpbmRvd1xuKSB7XG4gIC8vIFRhcmdldCB2YWx1ZXMgZm9yIGZseW91dCBhbmQgY2FyZXQgc2hpZnRzXG4gIGxldCBmbHlvdXRWZXJ0aWNhbFNoaWZ0ID1cbiAgICBDQVJFVF9PRkZTRVRfRlJPTV9TSURFIC0gKHRyaWdnZXJSZWN0LmhlaWdodCAtIENBUkVUX0hFSUdIVCkgLyAyO1xuICBsZXQgZmx5b3V0SG9yaXpvbnRhbFNoaWZ0ID1cbiAgICBDQVJFVF9PRkZTRVRfRlJPTV9TSURFIC0gKHRyaWdnZXJSZWN0LndpZHRoIC0gQ0FSRVRfSEVJR0hUKSAvIDI7XG4gIGxldCBjYXJldFZlcnRpY2FsU2hpZnQgPSBDQVJFVF9IRUlHSFQ7XG4gIGxldCBjYXJldEhvcml6b250YWxTaGlmdCA9IENBUkVUX0hFSUdIVDtcblxuICAvLyBDb3ZlcnMgZWRnZSBjYXNlIHdoZXJlIHRyaWdnZXIgaXMgaW4gYSBjb3JuZXIgYW5kIHdlIG5lZWQgdG8gYWRqdXN0IHRoZSBvZmZzZXQgb2YgdGhlIGNhcmV0XG4gIC8vIHRvIHNvbWV0aGluZyBzbWFsbGVyIHRoYW4gbm9ybWFsIGluIG9yZGVyXG4gIGNvbnN0IGlzQ2xvc2VWZXJ0aWNhbGx5ID1cbiAgICB0cmlnZ2VyUmVjdC50b3AgLSBmbHlvdXRWZXJ0aWNhbFNoaWZ0IDwgMCB8fFxuICAgIHRyaWdnZXJSZWN0LmJvdHRvbSArIGZseW91dFZlcnRpY2FsU2hpZnQgPiB3aW5kb3dTaXplLmhlaWdodDtcbiAgY29uc3QgaXNDbG9zZUhvcml6b250YWxseSA9XG4gICAgdHJpZ2dlclJlY3QubGVmdCAtIGZseW91dEhvcml6b250YWxTaGlmdCA8IDAgfHxcbiAgICB0cmlnZ2VyUmVjdC5yaWdodCArIGZseW91dEhvcml6b250YWxTaGlmdCA+IHdpbmRvd1NpemUud2lkdGg7XG4gIGlmIChpc0Nsb3NlVmVydGljYWxseSkge1xuICAgIGZseW91dFZlcnRpY2FsU2hpZnQgPVxuICAgICAgQk9SREVSX1JBRElVUyAtICh0cmlnZ2VyUmVjdC5oZWlnaHQgLSBDQVJFVF9IRUlHSFQpIC8gMjtcbiAgICBjYXJldFZlcnRpY2FsU2hpZnQgPSBCT1JERVJfUkFESVVTO1xuICB9XG4gIGlmIChpc0Nsb3NlSG9yaXpvbnRhbGx5KSB7XG4gICAgZmx5b3V0SG9yaXpvbnRhbFNoaWZ0ID1cbiAgICAgIEJPUkRFUl9SQURJVVMgLSAodHJpZ2dlclJlY3Qud2lkdGggLSBDQVJFVF9IRUlHSFQpIC8gMjtcbiAgICBjYXJldEhvcml6b250YWxTaGlmdCA9IEJPUkRFUl9SQURJVVM7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZseW91dDoge1xuICAgICAgeDogZmx5b3V0SG9yaXpvbnRhbFNoaWZ0LFxuICAgICAgeTogZmx5b3V0VmVydGljYWxTaGlmdCxcbiAgICB9LFxuICAgIGNhcmV0OiB7XG4gICAgICB4OiBjYXJldEhvcml6b250YWxTaGlmdCxcbiAgICAgIHk6IGNhcmV0VmVydGljYWxTaGlmdCxcbiAgICB9LFxuICB9O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgZmx5b3V0IGFuZCBjYXJldCBvZmZzZXRzIGZvciBzdHlsaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RPZmZzZXRzKFxuICBiYXNlOiB7IHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIgfSxcbiAgZWRnZVNoaWZ0OiBFZGdlU2hpZnQsXG4gIGZseW91dFNpemU6IEZseW91dCxcbiAgbWFpbkRpcjogTWFpbkRpcixcbiAgc3ViRGlyOiBTdWJEaXIsXG4gIHRyaWdnZXJSZWN0OiBDbGllbnRSZWN0XG4pIHtcbiAgbGV0IGZseW91dExlZnQgPSBiYXNlLmxlZnQ7XG4gIGxldCBmbHlvdXRUb3AgPSBiYXNlLnRvcDtcblxuICBsZXQgY2FyZXRUb3AgPSBtYWluRGlyID09PSAnZG93bicgPyAtQ0FSRVRfSEVJR0hUIDogbnVsbDtcbiAgbGV0IGNhcmV0UmlnaHQgPSBtYWluRGlyID09PSAnbGVmdCcgPyAtQ0FSRVRfSEVJR0hUIDogbnVsbDtcbiAgbGV0IGNhcmV0Qm90dG9tID0gbnVsbDtcbiAgbGV0IGNhcmV0TGVmdCA9IG1haW5EaXIgPT09ICdyaWdodCcgPyAtQ0FSRVRfSEVJR0hUIDogbnVsbDtcblxuICBpZiAoc3ViRGlyID09PSAndXAnKSB7XG4gICAgZmx5b3V0VG9wID0gYmFzZS50b3AgLSBlZGdlU2hpZnQuZmx5b3V0Lnk7XG4gICAgY2FyZXRUb3AgPSBlZGdlU2hpZnQuY2FyZXQueTtcbiAgfSBlbHNlIGlmIChzdWJEaXIgPT09ICdkb3duJykge1xuICAgIGZseW91dFRvcCA9XG4gICAgICBiYXNlLnRvcCAtIGZseW91dFNpemUuaGVpZ2h0ICsgdHJpZ2dlclJlY3QuaGVpZ2h0ICsgZWRnZVNoaWZ0LmZseW91dC55O1xuICAgIGNhcmV0Qm90dG9tID0gZWRnZVNoaWZ0LmNhcmV0Lnk7XG4gIH0gZWxzZSBpZiAoc3ViRGlyID09PSAnbGVmdCcpIHtcbiAgICBmbHlvdXRMZWZ0ID0gYmFzZS5sZWZ0IC0gZWRnZVNoaWZ0LmZseW91dC54O1xuICAgIGNhcmV0TGVmdCA9IGVkZ2VTaGlmdC5jYXJldC54O1xuICB9IGVsc2UgaWYgKHN1YkRpciA9PT0gJ3JpZ2h0Jykge1xuICAgIGZseW91dExlZnQgPVxuICAgICAgYmFzZS5sZWZ0IC0gZmx5b3V0U2l6ZS53aWR0aCArIHRyaWdnZXJSZWN0LndpZHRoICsgZWRnZVNoaWZ0LmZseW91dC54O1xuICAgIGNhcmV0UmlnaHQgPSBlZGdlU2hpZnQuY2FyZXQueDtcbiAgfSBlbHNlIGlmIChzdWJEaXIgPT09ICdtaWRkbGUnKSB7XG4gICAgaWYgKG1haW5EaXIgPT09ICdsZWZ0JyB8fCBtYWluRGlyID09PSAncmlnaHQnKSB7XG4gICAgICBjb25zdCB0cmlnZ2VyTWlkID0gZmx5b3V0VG9wICsgdHJpZ2dlclJlY3QuaGVpZ2h0IC8gMjtcbiAgICAgIGZseW91dFRvcCA9IHRyaWdnZXJNaWQgLSBmbHlvdXRTaXplLmhlaWdodCAvIDI7XG4gICAgICBjYXJldFRvcCA9IChmbHlvdXRTaXplLmhlaWdodCAtIENBUkVUX0hFSUdIVCkgLyAyO1xuICAgIH1cbiAgICBpZiAobWFpbkRpciA9PT0gJ3VwJyB8fCBtYWluRGlyID09PSAnZG93bicpIHtcbiAgICAgIGNvbnN0IHRyaWdnZXJNaWQgPSBmbHlvdXRMZWZ0ICsgdHJpZ2dlclJlY3Qud2lkdGggLyAyO1xuICAgICAgZmx5b3V0TGVmdCA9IHRyaWdnZXJNaWQgLSBmbHlvdXRTaXplLndpZHRoIC8gMjtcbiAgICAgIGNhcmV0TGVmdCA9IChmbHlvdXRTaXplLndpZHRoIC0gQ0FSRVRfSEVJR0hUKSAvIDI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmbHlvdXRPZmZzZXQ6IHtcbiAgICAgIHRvcDogZmx5b3V0VG9wLFxuICAgICAgbGVmdDogZmx5b3V0TGVmdCxcbiAgICB9LFxuICAgIGNhcmV0T2Zmc2V0OiB7XG4gICAgICB0b3A6IGNhcmV0VG9wLFxuICAgICAgcmlnaHQ6IGNhcmV0UmlnaHQsXG4gICAgICBib3R0b206IGNhcmV0Qm90dG9tLFxuICAgICAgbGVmdDogY2FyZXRMZWZ0LFxuICAgIH0sXG4gIH07XG59XG5cbi8qIENhbGN1bGF0ZXMgYmFzZWxpbmUgdG9wIGFuZCBsZWZ0IG9mZnNldCBmb3IgZmx5b3V0ICovXG5leHBvcnQgZnVuY3Rpb24gYmFzZU9mZnNldHMoXG4gIHJlbGF0aXZlT2Zmc2V0OiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sXG4gIGZseW91dFNpemU6IEZseW91dCxcbiAgbWFpbkRpcjogTWFpbkRpcixcbiAgdHJpZ2dlclJlY3Q6IENsaWVudFJlY3QsXG4gIHdpbmRvd1NpemU6IFdpbmRvd1xuKSB7XG4gIGNvbnN0IEhBTEZfQ0FSRVQgPSBDQVJFVF9IRUlHSFQgLyAyO1xuICAvLyBUT1AgT0ZGU0VUXG4gIGxldCB0b3A7XG4gIGlmIChtYWluRGlyID09PSAnZG93bicpIHtcbiAgICB0b3AgPSB3aW5kb3dTaXplLnNjcm9sbFkgKyB0cmlnZ2VyUmVjdC5ib3R0b20gKyBIQUxGX0NBUkVUO1xuICB9IGVsc2UgaWYgKG1haW5EaXIgPT09ICd1cCcpIHtcbiAgICB0b3AgPVxuICAgICAgd2luZG93U2l6ZS5zY3JvbGxZICsgKHRyaWdnZXJSZWN0LnRvcCAtIGZseW91dFNpemUuaGVpZ2h0IC0gSEFMRl9DQVJFVCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gbGVmdCBhbmQgcmlnaHRcbiAgICB0b3AgPSB3aW5kb3dTaXplLnNjcm9sbFkgKyB0cmlnZ2VyUmVjdC50b3A7XG4gIH1cblxuICAvLyBMRUZUIE9GRlNFVFxuICBsZXQgbGVmdDtcbiAgaWYgKG1haW5EaXIgPT09ICdsZWZ0Jykge1xuICAgIGxlZnQgPVxuICAgICAgd2luZG93U2l6ZS5zY3JvbGxYICsgKHRyaWdnZXJSZWN0LmxlZnQgLSBmbHlvdXRTaXplLndpZHRoIC0gSEFMRl9DQVJFVCk7XG4gIH0gZWxzZSBpZiAobWFpbkRpciA9PT0gJ3JpZ2h0Jykge1xuICAgIGxlZnQgPSB3aW5kb3dTaXplLnNjcm9sbFggKyB0cmlnZ2VyUmVjdC5yaWdodCArIEhBTEZfQ0FSRVQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gZG93biBhbmQgdXBcbiAgICBsZWZ0ID0gd2luZG93U2l6ZS5zY3JvbGxYICsgdHJpZ2dlclJlY3QubGVmdDtcbiAgfVxuXG4gIC8vIEFkanVzdHMgZm9yIHRoZSByZWxhdGl2ZSBwYXJlbnQgY29udGFpbmVyXG4gIHRvcCAtPSByZWxhdGl2ZU9mZnNldC55O1xuICBsZWZ0IC09IHJlbGF0aXZlT2Zmc2V0Lng7XG4gIHJldHVybiB7IHRvcCwgbGVmdCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGZseW91dE9mZnNldDoge1xuICAgICAgdG9wOiB1bmRlZmluZWQsXG4gICAgICByaWdodDogdW5kZWZpbmVkLFxuICAgICAgYm90dG9tOiB1bmRlZmluZWQsXG4gICAgICBsZWZ0OiB1bmRlZmluZWQsXG4gICAgfSxcbiAgICBjYXJldE9mZnNldDoge1xuICAgICAgdG9wOiB1bmRlZmluZWQsXG4gICAgICByaWdodDogdW5kZWZpbmVkLFxuICAgICAgYm90dG9tOiB1bmRlZmluZWQsXG4gICAgICBsZWZ0OiB1bmRlZmluZWQsXG4gICAgfSxcbiAgICBtYWluRGlyOiBudWxsLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0Rmx5b3V0UG9zaXRpb24odGhpcy5wcm9wcyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5zaG91bGRGb2N1cyAmJiB0aGlzLmZseW91dCkge1xuICAgICAgICB0aGlzLmZseW91dC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcm9wcy5vbkNsaWNrLCB0cnVlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5wcm9wcy5vblJlc2l6ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnByb3BzLm9uS2V5RG93bik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUHJvcHMpIHtcbiAgICB0aGlzLnNldEZseW91dFBvc2l0aW9uKG5leHRQcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJvcHMub25DbGljaywgdHJ1ZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucHJvcHMub25SZXNpemUpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5wcm9wcy5vbktleURvd24pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIG1haW4gZGlyZWNpdG9uLCBzdWIgZGlyZWN0aW9uLCBhbmQgY29ycmVzcG9uZGluZyBvZmZzZXRzIG5lZWRlZFxuICAgKiB0byBjb3JyZWN0bHkgcG9zaXRpb24gdGhlIG9mZnNldFxuICAgKi9cbiAgc2V0Rmx5b3V0UG9zaXRpb24gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgcmVsYXRpdmVPZmZzZXQsXG4gICAgICBpZGVhbERpcmVjdGlvbixcbiAgICAgIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcixcbiAgICAgIHRyaWdnZXJSZWN0LFxuICAgICAgd2lkdGgsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgLy8gU2Nyb2xsIG5vdCBuZWVkZWQgZm9yIHJlbGF0aXZlIGVsZW1lbnRzXG4gICAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5zY3JvbGxYIC8gd2luZG93LnNjcm9sbFkgc2luY2UgaXQncyBub3Qgc3VwcG9ydGVkIGJ5IElFMTFcbiAgICBjb25zdCBzY3JvbGxYID0gcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yXG4gICAgICA/IDBcbiAgICAgIDogd2luZG93LnBhZ2VYT2Zmc2V0IHx8XG4gICAgICAgIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQpIHx8XG4gICAgICAgIDA7XG4gICAgY29uc3Qgc2Nyb2xsWSA9IHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvclxuICAgICAgPyAwXG4gICAgICA6IHdpbmRvdy5wYWdlWU9mZnNldCB8fFxuICAgICAgICAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApIHx8XG4gICAgICAgIDA7XG5cbiAgICBjb25zdCB3aW5kb3dTaXplID0ge1xuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICBzY3JvbGxYLFxuICAgICAgc2Nyb2xsWSxcbiAgICB9O1xuXG4gICAgY29uc3QgZmx5b3V0U2l6ZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5mbHlvdXQgPyB0aGlzLmZseW91dC5jbGllbnRIZWlnaHQgOiAwLFxuICAgICAgd2lkdGgsXG4gICAgfTtcblxuICAgIC8vIEZpcnN0IGNob29zZSBvbmUgb2YgNCBtYWluIGRpcmVjdGlvblxuICAgIGNvbnN0IG1haW5EaXIgPSBnZXRNYWluRGlyKFxuICAgICAgZmx5b3V0U2l6ZSxcbiAgICAgIGlkZWFsRGlyZWN0aW9uLFxuICAgICAgdHJpZ2dlclJlY3QsXG4gICAgICB3aW5kb3dTaXplXG4gICAgKTtcblxuICAgIC8vIE5vdyB0aGF0IHdlIGhhdmUgdGhlIG1haW4gZGlyZWN0aW9uLCBjaG9zZSBmcm9tIDMgY2FyZXQgcGxhY2VtZW50cyBmb3IgdGhhdCBkaXJlY3Rpb25cbiAgICBjb25zdCBzdWJEaXIgPSBnZXRTdWJEaXIoZmx5b3V0U2l6ZSwgbWFpbkRpciwgdHJpZ2dlclJlY3QsIHdpbmRvd1NpemUpO1xuXG4gICAgLy8gR2V0cyB0aGUgYmFzZSBvZmZzZXQgdGhhdCBwb3NpdGlvbnMgdGhlIGZseW91dCBiYXNlZCBvbiB0aGUgbWFpbiBkaXJlY3Rpb24gb25seVxuICAgIGNvbnN0IGJhc2UgPSBiYXNlT2Zmc2V0cyhcbiAgICAgIHJlbGF0aXZlT2Zmc2V0LFxuICAgICAgZmx5b3V0U2l6ZSxcbiAgICAgIG1haW5EaXIsXG4gICAgICB0cmlnZ2VyUmVjdCxcbiAgICAgIHdpbmRvd1NpemVcbiAgICApO1xuXG4gICAgLy8gR2V0cyB0aGUgZWRnZSBzaGlmdHMgZm9yIHRoZSBmbHlvdXRcbiAgICBjb25zdCBlZGdlU2hpZnRzID0gY2FsY0VkZ2VTaGlmdHMoc3ViRGlyLCB0cmlnZ2VyUmVjdCwgd2luZG93U2l6ZSk7XG5cbiAgICAvLyBBZGp1c3RzIGZvciB0aGUgc3ViZGlyZWN0aW9uIG9mIHRoZSBjYXJldFxuICAgIGNvbnN0IHsgZmx5b3V0T2Zmc2V0LCBjYXJldE9mZnNldCB9ID0gYWRqdXN0T2Zmc2V0cyhcbiAgICAgIGJhc2UsXG4gICAgICBlZGdlU2hpZnRzLFxuICAgICAgZmx5b3V0U2l6ZSxcbiAgICAgIG1haW5EaXIsXG4gICAgICBzdWJEaXIsXG4gICAgICB0cmlnZ2VyUmVjdFxuICAgICk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNhcmV0T2Zmc2V0LFxuICAgICAgZmx5b3V0T2Zmc2V0LFxuICAgICAgbWFpbkRpcixcbiAgICB9KTtcbiAgfTtcblxuICBmbHlvdXQ6ID9IVE1MRWxlbWVudDtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBiZ0NvbG9yLCBjaGlsZHJlbiwgd2lkdGggfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBOZWVkZWQgdG8gcHJldmVudCBVSSB0aHJhc2hpbmdcbiAgICBjb25zdCB2aXNpYmlsaXR5ID0gdGhpcy5zdGF0ZS5tYWluRGlyID09PSBudWxsID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGAke2JnQ29sb3J9QmdgO1xuICAgIGNvbnN0IHN0cm9rZSA9IGJnQ29sb3IgPT09ICd3aGl0ZScgPyAnI2VmZWZlZicgOiBudWxsO1xuICAgIGNvbnN0IGJvcmRlckNvbG9yID0gYmdDb2xvciA9PT0gJ3doaXRlJyA/ICdsaWdodEdyYXknIDogYmdDb2xvcjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cbiAgICAgICAgc3R5bGU9e3sgc3Ryb2tlLCB2aXNpYmlsaXR5LCAuLi50aGlzLnN0YXRlLmZseW91dE9mZnNldCB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgY29sb3JzW2JhY2tncm91bmRdLFxuICAgICAgICAgICAgY29sb3JzW2JvcmRlckNvbG9yXSxcbiAgICAgICAgICAgIHN0eWxlcy5kaW1lbnNpb25zLFxuICAgICAgICAgICAgc3R5bGVzLmNvbnRlbnRzXG4gICAgICAgICAgKX1cbiAgICAgICAgICByZWY9e2MgPT4ge1xuICAgICAgICAgICAgdGhpcy5mbHlvdXQgPSBjO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5kaW1lbnNpb25zLCBzdHlsZXMuaW5uZXJDb250ZW50cyl9XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY29sb3JzW2JnQ29sb3JdLCBzdHlsZXMuY2FyZXQpfVxuICAgICAgICAgICAgc3R5bGU9e3sgLi4udGhpcy5zdGF0ZS5jYXJldE9mZnNldCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJldCBkaXJlY3Rpb249e3RoaXMuc3RhdGUubWFpbkRpcn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8qIGVzbGludCByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlczogMCAqL1xuQ29udGVudHMucHJvcFR5cGVzID0ge1xuICBiZ0NvbG9yOiBQcm9wVHlwZXMub25lT2YoWydkYXJrR3JheScsICd3aGl0ZScsICdvcmFuZ2UnXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaWRlYWxEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ3VwJywgJ3JpZ2h0JywgJ2Rvd24nLCAnbGVmdCddKSxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblJlc2l6ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVsYXRpdmVPZmZzZXQ6IFByb3BUeXBlcy5leGFjdCh7IHg6IFByb3BUeXBlcy5udW1iZXIsIHk6IFByb3BUeXBlcy5udW1iZXIgfSksXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3VsZEZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHJpZ2dlclJlY3Q6IFByb3BUeXBlcy5leGFjdCh7XG4gICAgYm90dG9tOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsZWZ0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRvcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gvQm94JztcbmltcG9ydCBDb250ZW50cyBmcm9tICcuL0NvbnRlbnRzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFuY2hvcjogP0hUTUxFbGVtZW50LFxuICBiZ0NvbG9yOiAnZGFya0dyYXknIHwgJ3doaXRlJyB8ICdvcmFuZ2UnLFxuICBjaGlsZHJlbj86IGFueSxcbiAgaWRlYWxEaXJlY3Rpb24/OiAndXAnIHwgJ3JpZ2h0JyB8ICdkb3duJyB8ICdsZWZ0JyxcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkLFxuICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3I6IGJvb2xlYW4sXG4gIHNob3VsZEZvY3VzPzogYm9vbGVhbixcbiAgc2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgbnVtYmVyLFxufH07XG5cbmNvbnN0IFNJWkVfV0lEVEhfTUFQID0ge1xuICB4czogMTg1LFxuICBzbTogMjMwLFxuICBtZDogMjg0LFxuICBsZzogMzIwLFxuICB4bDogMzc1LFxufTtcblxuY29uc3QgRVNDQVBFX0tFWV9DT0RFID0gMjc7XG5cbnR5cGUgQ2xpZW50UmVjdCA9IHtcbiAgYm90dG9tOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBsZWZ0OiBudW1iZXIsXG4gIHJpZ2h0OiBudW1iZXIsXG4gIHRvcDogbnVtYmVyLFxuICB3aWR0aDogbnVtYmVyLFxufTtcblxudHlwZSBTdGF0ZSA9IHtcbiAgcmVsYXRpdmVPZmZzZXQ6IHtcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICB9LFxuICB0cmlnZ2VyQm91bmRpbmdSZWN0OiBDbGllbnRSZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIHJlbGF0aXZlT2Zmc2V0OiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9LFxuICAgIHRyaWdnZXJCb3VuZGluZ1JlY3Q6IHtcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIHdpZHRoOiAwLFxuICAgIH0sXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVUcmlnZ2VyUmVjdCh0aGlzLnByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQcm9wcykge1xuICAgIHRoaXMudXBkYXRlVHJpZ2dlclJlY3QobmV4dFByb3BzKTtcbiAgfVxuXG4gIGNvbnRlbnRzOiA/SFRNTEVsZW1lbnQ7XG5cbiAgaGFuZGxlS2V5RG93biA9IChldmVudDogeyBrZXlDb2RlOiBudW1iZXIgfSkgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEVfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMucHJvcHMub25EaXNtaXNzKCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZVBhZ2VDbGljayA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBpZiAoXG4gICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiBOb2RlICYmXG4gICAgICB0aGlzLnByb3BzLmFuY2hvciAmJlxuICAgICAgIXRoaXMucHJvcHMuYW5jaG9yLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgIHRoaXMuY29udGVudHMgJiZcbiAgICAgICF0aGlzLmNvbnRlbnRzLmNvbnRhaW5zKGV2ZW50LnRhcmdldClcbiAgICApIHtcbiAgICAgIHRoaXMucHJvcHMub25EaXNtaXNzKCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZVRyaWdnZXJSZWN0KHRoaXMucHJvcHMpO1xuICB9O1xuXG4gIHVwZGF0ZVRyaWdnZXJSZWN0ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgYW5jaG9yLCBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3IgfSA9IHByb3BzO1xuICAgIGxldCB0cmlnZ2VyQm91bmRpbmdSZWN0O1xuICAgIGxldCByZWxhdGl2ZU9mZnNldDtcbiAgICBpZiAoYW5jaG9yKSB7XG4gICAgICB0cmlnZ2VyQm91bmRpbmdSZWN0ID0gYW5jaG9yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAvLyBOZWVkZWQgZm9yIGNvcnJlY3QgcG9zaXRpb25pbmcgd2l0aGluIENvbnRlbnRzLmpzXG4gICAgICByZWxhdGl2ZU9mZnNldCA9IHtcbiAgICAgICAgeDogcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yXG4gICAgICAgICAgPyB0cmlnZ2VyQm91bmRpbmdSZWN0LmxlZnQgLSBhbmNob3Iub2Zmc2V0TGVmdFxuICAgICAgICAgIDogMCxcbiAgICAgICAgeTogcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yXG4gICAgICAgICAgPyB0cmlnZ2VyQm91bmRpbmdSZWN0LnRvcCAtIGFuY2hvci5vZmZzZXRUb3BcbiAgICAgICAgICA6IDAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyByZWxhdGl2ZU9mZnNldCwgdHJpZ2dlckJvdW5kaW5nUmVjdCB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYW5jaG9yLFxuICAgICAgYmdDb2xvcixcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaWRlYWxEaXJlY3Rpb24sXG4gICAgICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3IsXG4gICAgICBzaG91bGRGb2N1cyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWFuY2hvcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHNpemUgPSB0aGlzLnByb3BzLnNpemUgPyB0aGlzLnByb3BzLnNpemUgOiAnc20nO1xuICAgIGNvbnN0IHdpZHRoID0gdHlwZW9mIHNpemUgPT09ICdzdHJpbmcnID8gU0laRV9XSURUSF9NQVBbc2l6ZV0gOiBzaXplO1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXtjID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudHMgPSBjO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5jb250ZW50cyA/IChcbiAgICAgICAgICAgIDxDb250ZW50c1xuICAgICAgICAgICAgICBiZ0NvbG9yPXtiZ0NvbG9yfVxuICAgICAgICAgICAgICBpZGVhbERpcmVjdGlvbj17aWRlYWxEaXJlY3Rpb259XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUGFnZUNsaWNrfVxuICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgICAgICAgb25SZXNpemU9e3RoaXMuaGFuZGxlUmVzaXplfVxuICAgICAgICAgICAgICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3I9e3Bvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcn1cbiAgICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXQ9e3RoaXMuc3RhdGUucmVsYXRpdmVPZmZzZXR9XG4gICAgICAgICAgICAgIHNob3VsZEZvY3VzPXtzaG91bGRGb2N1c31cbiAgICAgICAgICAgICAgdHJpZ2dlclJlY3Q9e3RoaXMuc3RhdGUudHJpZ2dlckJvdW5kaW5nUmVjdH1cbiAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0NvbnRlbnRzPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cblxuQ29udHJvbGxlci5wcm9wVHlwZXMgPSB7XG4gIGFuY2hvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250YWluczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgfSksXG4gIGJnQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2RhcmtHcmF5JywgJ3doaXRlJywgJ29yYW5nZSddKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpZGVhbERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndXAnLCAncmlnaHQnLCAnZG93bicsICdsZWZ0J10pLFxuICBvbkRpc21pc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3VsZEZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSwgLy8gZGVmYXVsdDogc21cbiAgXSksXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQm94IGZyb20gJy4uL0JveC9Cb3gnO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi4vRmx5b3V0VXRpbHMvQ29udHJvbGxlcic7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0L1RleHQnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgYW5jaG9yOiA/YW55LFxuICBpZD86IHN0cmluZyxcbiAgaWRlYWxEaXJlY3Rpb24/OiAndXAnIHwgJ3JpZ2h0JyB8ICdkb3duJyB8ICdsZWZ0JyxcbiAgbWVzc2FnZTogc3RyaW5nLFxuICBvbkRpc21pc3M6ICgpID0+IHZvaWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcj86IGJvb2xlYW4sXG4gIHNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgLyogZGVmYXVsdCBzbSAqLyxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnJvckZseW91dChwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGFuY2hvcixcbiAgICBpZCxcbiAgICBpZGVhbERpcmVjdGlvbixcbiAgICBtZXNzYWdlLFxuICAgIG9uRGlzbWlzcyxcbiAgICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3IgPSB0cnVlLFxuICAgIHNpemUsXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIWFuY2hvcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udHJvbGxlclxuICAgICAgYW5jaG9yPXthbmNob3J9XG4gICAgICBiZ0NvbG9yPVwib3JhbmdlXCJcbiAgICAgIGlkZWFsRGlyZWN0aW9uPXtpZGVhbERpcmVjdGlvbn1cbiAgICAgIG9uRGlzbWlzcz17b25EaXNtaXNzfVxuICAgICAgcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yPXtwb3NpdGlvblJlbGF0aXZlVG9BbmNob3J9XG4gICAgICBzaXplPXtzaXplfVxuICAgID5cbiAgICAgIDxCb3ggcGFkZGluZz17M30+XG4gICAgICAgIDxUZXh0IGJvbGQgY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgIDxzcGFuIGlkPXtpZH0+e21lc3NhZ2V9PC9zcGFuPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0NvbnRyb2xsZXI+XG4gICk7XG59XG5cbkVycm9yRmx5b3V0LnByb3BUeXBlcyA9IHtcbiAgYW5jaG9yOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRhaW5zOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICB9KSxcbiAgaWRlYWxEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ3VwJywgJ3JpZ2h0JywgJ2Rvd24nLCAnbGVmdCddKSxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkRpc21pc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10pLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi4vRmx5b3V0VXRpbHMvQ29udHJvbGxlcic7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhbmNob3I6ID9hbnksXG4gIGNoaWxkcmVuPzogYW55LFxuICBpZGVhbERpcmVjdGlvbj86ICd1cCcgfCAncmlnaHQnIHwgJ2Rvd24nIHwgJ2xlZnQnLFxuICBvbkRpc21pc3M6ICgpID0+IHZvaWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcj86IGJvb2xlYW4sXG4gIHNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IG51bWJlcixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbHlvdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhbmNob3IsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlkZWFsRGlyZWN0aW9uLFxuICAgICAgcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yID0gdHJ1ZSxcbiAgICAgIG9uRGlzbWlzcyxcbiAgICAgIHNpemUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWFuY2hvcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250cm9sbGVyXG4gICAgICAgIGFuY2hvcj17YW5jaG9yfVxuICAgICAgICBiZ0NvbG9yPVwid2hpdGVcIlxuICAgICAgICBpZGVhbERpcmVjdGlvbj17aWRlYWxEaXJlY3Rpb259XG4gICAgICAgIG9uRGlzbWlzcz17b25EaXNtaXNzfVxuICAgICAgICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3I9e3Bvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcn1cbiAgICAgICAgc2hvdWxkRm9jdXNcbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db250cm9sbGVyPlxuICAgICk7XG4gIH1cbn1cblxuRmx5b3V0LnByb3BUeXBlcyA9IHtcbiAgYW5jaG9yOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRhaW5zOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICB9KSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpZGVhbERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndXAnLCAncmlnaHQnLCAnZG93bicsICdsZWZ0J10pLFxuICBvbkRpc21pc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXSksIC8vIGRlZmF1bHQ6IHNtXG4gIF0pLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0dyb3VwQXZhdGFyLmNzcyc7XG5pbXBvcnQgQm94IGZyb20gJy4uL0JveC9Cb3gnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi4vVGV4dC9UZXh0JztcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9JbWFnZS9JbWFnZSc7XG5pbXBvcnQgQ29sbGVjdGlvbiBmcm9tICcuLi9Db2xsZWN0aW9uL0NvbGxlY3Rpb24nO1xuXG5jb25zdCBCT1JERVJfV0lEVEggPSAyO1xuXG5jb25zdCBBVkFUQVJfU0laRVMgPSB7XG4gIHNtOiAyNCxcbiAgbWQ6IDQwLFxuICBsZzogNzIsXG59O1xuXG5jb25zdCBERUZBVUxUX0FWQVRBUl9URVhUX1NJWkVTID0ge1xuICBzbTogNyxcbiAgbWQ6IDExLFxuICBsZzogMjEsXG59O1xuXG50eXBlIFByb3BzID0ge3xcbiAgY29sbGFib3JhdG9yczogQXJyYXk8e3xcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgc3JjPzogc3RyaW5nLFxuICB8fT4sXG4gIG91dGxpbmU/OiBib29sZWFuLFxuICBzaXplOiAnc20nIHwgJ21kJyB8ICdsZycsXG58fTtcblxuY29uc3QgYXZhdGFyTGF5b3V0ID0gKG4sIHNpemUpID0+IHtcbiAgc3dpdGNoIChuKSB7XG4gICAgY2FzZSAwOlxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBbeyB0b3A6IDAsIGxlZnQ6IDAsIHdpZHRoOiBzaXplLCBoZWlnaHQ6IHNpemUgfV07XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHdpZHRoOiBzaXplIC8gMiAtIEJPUkRFUl9XSURUSCAvIDIsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IHNpemUgLyAyICsgQk9SREVSX1dJRFRIIC8gMixcbiAgICAgICAgICB3aWR0aDogc2l6ZSAvIDIgLSBCT1JERVJfV0lEVEggLyAyLFxuICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB3aWR0aDogc2l6ZSAvIDIgLSBCT1JERVJfV0lEVEggLyAyLFxuICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiBzaXplIC8gMiArIEJPUkRFUl9XSURUSCAvIDIsXG4gICAgICAgICAgd2lkdGg6IHNpemUgLyAyLFxuICAgICAgICAgIGhlaWdodDogc2l6ZSAvIDIgLSBCT1JERVJfV0lEVEggLyAyLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9wOiBzaXplIC8gMiArIEJPUkRFUl9XSURUSCAvIDIsXG4gICAgICAgICAgbGVmdDogc2l6ZSAvIDIgKyBCT1JERVJfV0lEVEggLyAyLFxuICAgICAgICAgIHdpZHRoOiBzaXplIC8gMixcbiAgICAgICAgICBoZWlnaHQ6IHNpemUgLyAyIC0gQk9SREVSX1dJRFRIIC8gMixcbiAgICAgICAgfSxcbiAgICAgIF07XG4gIH1cbn07XG5cbmNvbnN0IGRlZ1RvUmFkID0gZGVnID0+IGRlZyAqIChNYXRoLlBJIC8gMTgwKTtcblxuY29uc3QgRGVmYXVsdEF2YXRhciA9IChwcm9wczoge1xuICBoZWlnaHQ6IG51bWJlcixcbiAgbmFtZTogc3RyaW5nLFxuICB0ZXh0TGF5b3V0OiAnY2VudGVyJyB8ICd0b3BMZWZ0JyB8ICdib3R0b21MZWZ0JyxcbiAgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnLFxuICBmb250U2l6ZTogbnVtYmVyLFxufSkgPT4ge1xuICBjb25zdCB7IGZvbnRTaXplLCBoZWlnaHQsIG5hbWUsIHRleHRMYXlvdXQgfSA9IHByb3BzO1xuICBjb25zdCBzaXplID0gQVZBVEFSX1NJWkVTW3Byb3BzLnNpemVdO1xuXG4gIGNvbnN0IHF1YXJ0ZXJQYWRkaW5nID0gTWF0aC5mbG9vcihcbiAgICAoc2l6ZSAvIDIgLSBmb250U2l6ZSkgLyAyICogTWF0aC5zaW4oZGVnVG9SYWQoNDUpKVxuICApO1xuXG4gIGNvbnN0IGluaXRpYWwgPSAoXG4gICAgPFRleHQgYm9sZCBjb2xvcj1cIndoaXRlXCI+XG4gICAgICA8Qm94XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgICBfX3N0eWxlOiB7XG4gICAgICAgICAgICBmb250U2l6ZSxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGAke2ZvbnRTaXplfXB4YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Wy4uLm5hbWVdWzBdLnRvVXBwZXJDYXNlKCl9XG4gICAgICA8L0JveD5cbiAgICA8L1RleHQ+XG4gICk7XG5cbiAgc3dpdGNoICh0ZXh0TGF5b3V0KSB7XG4gICAgY2FzZSAnYm90dG9tTGVmdCc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgYXJpYS1sYWJlbD17bmFtZX1cbiAgICAgICAgICBjb2xvcj1cImdyYXlcIlxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiZW5kXCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7XG4gICAgICAgICAgICBfX3N0eWxlOiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IHF1YXJ0ZXJQYWRkaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2luaXRpYWx9XG4gICAgICAgIDwvQm94PlxuICAgICAgKTtcbiAgICBjYXNlICd0b3BMZWZ0JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBhcmlhLWxhYmVsPXtuYW1lfVxuICAgICAgICAgIGNvbG9yPVwiZ3JheVwiXG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJzdGFydFwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17e1xuICAgICAgICAgICAgX19zdHlsZToge1xuICAgICAgICAgICAgICBwYWRkaW5nOiBxdWFydGVyUGFkZGluZyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpbml0aWFsfVxuICAgICAgICA8L0JveD5cbiAgICAgICk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBhcmlhLWxhYmVsPXtuYW1lfVxuICAgICAgICAgIGNvbG9yPVwiZ3JheVwiXG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtpbml0aWFsfVxuICAgICAgICA8L0JveD5cbiAgICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyb3VwQXZhdGFyKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGNvbGxhYm9yYXRvcnMsIG91dGxpbmUsIHNpemUgfSA9IHByb3BzO1xuICBjb25zdCBsYXlvdXQgPSBhdmF0YXJMYXlvdXQoY29sbGFib3JhdG9ycy5sZW5ndGgsIEFWQVRBUl9TSVpFU1tzaXplXSk7XG4gIGNvbnN0IGF2YXRhclNpemUgPSBBVkFUQVJfU0laRVNbc2l6ZV07XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICBoZWlnaHQ9e2F2YXRhclNpemV9XG4gICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICBzaGFwZT1cImNpcmNsZVwiXG4gICAgICB3aWR0aD17YXZhdGFyU2l6ZX1cbiAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgX19zdHlsZToge1xuICAgICAgICAgIC4uLihvdXRsaW5lID8geyBib3hTaGFkb3c6ICcwIDAgMCAycHggI2ZmZicgfSA6IHt9KSxcbiAgICAgICAgICAvLyB3aWxsQ2hhbmdlOiB0cmFuc2Zvcm0gZml4ZXMgYSBzdHJhbmdlIGJlaGF2aW9yIHdoZXJlIHRoZSBib3JkZXIgb2YgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgLy8gYXJlIG5vdCBwcm9wZXJseSB0cmltbWVkIGV2ZW4gdGhvdWdoIG92ZXJmbG93OiBoaWRkZW4gaXMgc2V0XG4gICAgICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb2xsZWN0aW9uXG4gICAgICAgIGxheW91dD17bGF5b3V0fVxuICAgICAgICBJdGVtPXsoeyBpZHggfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZvbnRTaXplID1cbiAgICAgICAgICAgIGNvbGxhYm9yYXRvcnMubGVuZ3RoIDw9IDFcbiAgICAgICAgICAgICAgPyBERUZBVUxUX0FWQVRBUl9URVhUX1NJWkVTW3Byb3BzLnNpemVdICogMlxuICAgICAgICAgICAgICA6IERFRkFVTFRfQVZBVEFSX1RFWFRfU0laRVNbcHJvcHMuc2l6ZV07XG5cbiAgICAgICAgICBpZiAoIWNvbGxhYm9yYXRvcnNbaWR4XSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPERlZmF1bHRBdmF0YXJcbiAgICAgICAgICAgICAgICBuYW1lPVwiIFwiXG4gICAgICAgICAgICAgICAgZm9udFNpemU9e2ZvbnRTaXplfVxuICAgICAgICAgICAgICAgIHRleHRMYXlvdXQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGhlaWdodD17bGF5b3V0WzBdLmhlaWdodH1cbiAgICAgICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB7IG5hbWUsIHNyYyB9ID0gY29sbGFib3JhdG9yc1tpZHhdO1xuICAgICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gbGF5b3V0W2lkeF07XG4gICAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxEZWZhdWx0QXZhdGFyXG4gICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICBmb250U2l6ZT17Zm9udFNpemV9XG4gICAgICAgICAgICAgICAgdGV4dExheW91dD17XG4gICAgICAgICAgICAgICAgICBjb2xsYWJvcmF0b3JzLmxlbmd0aCA+PSAzXG4gICAgICAgICAgICAgICAgICAgID8gWydjZW50ZXInLCAnYm90dG9tTGVmdCcsICd0b3BMZWZ0J11baWR4XVxuICAgICAgICAgICAgICAgICAgICA6ICdjZW50ZXInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCIgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIiNFRkVGRUZcIlxuICAgICAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgICAgIG5hdHVyYWxXaWR0aD17MX1cbiAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0PXsxfVxuICAgICAgICAgICAgICAgIGZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53YXNofSAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbkdyb3VwQXZhdGFyLnByb3BUeXBlcyA9IHtcbiAgY29sbGFib3JhdG9yczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLmV4YWN0KHtcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHNyYzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KVxuICApLmlzUmVxdWlyZWQsXG4gIG91dGxpbmU6IFByb3BUeXBlcy5ib29sLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbScsICdtZCcsICdsZyddKS5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9Db2xvcnMuY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkaW5nLmNzcyc7XG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tICcuLi9UeXBvZ3JhcGh5LmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhY2Nlc3NpYmlsaXR5TGV2ZWw/OiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYsXG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgY29sb3I/OlxuICAgIHwgJ2JsdWUnXG4gICAgfCAnZGFya0dyYXknXG4gICAgfCAnZWdncGxhbnQnXG4gICAgfCAnZ3JheSdcbiAgICB8ICdncmVlbidcbiAgICB8ICdsaWdodEdyYXknXG4gICAgfCAnbWFyb29uJ1xuICAgIHwgJ21pZG5pZ2h0J1xuICAgIHwgJ25hdnknXG4gICAgfCAnb2xpdmUnXG4gICAgfCAnb3JhbmdlJ1xuICAgIHwgJ29yY2hpZCdcbiAgICB8ICdwaW5lJ1xuICAgIHwgJ3B1cnBsZSdcbiAgICB8ICdyZWQnXG4gICAgfCAnd2F0ZXJtZWxvbidcbiAgICB8ICd3aGl0ZScsXG4gIGlkPzogc3RyaW5nLFxuICBsZ1NpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyxcbiAgbWRTaXplPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcsXG4gIG92ZXJmbG93PzogJ25vcm1hbCcgfCAnYnJlYWtXb3JkJyxcbiAgc2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnLFxuICBzbVNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyxcbiAgdHJ1bmNhdGU/OiBib29sZWFuLFxufH07XG5cbmNvbnN0IGRlZmF1bHRIZWFkaW5nTGV2ZWxzID0ge1xuICB4czogNSxcbiAgc206IDQsXG4gIG1kOiAzLFxuICBsZzogMixcbiAgeGw6IDEsXG59O1xuXG5jb25zdCBTSVpFX1NDQUxFOiB7IFtzaXplOiA/c3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gIHhzOiAxLFxuICBzbTogMixcbiAgbWQ6IDMsXG4gIGxnOiA0LFxuICB4bDogNSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRpbmcocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBhY2Nlc3NpYmlsaXR5TGV2ZWwsXG4gICAgY2hpbGRyZW4sXG4gICAgY29sb3IgPSAnZGFya0dyYXknLFxuICAgIGlkID0gbnVsbCxcbiAgICBsZ1NpemUsXG4gICAgbWRTaXplLFxuICAgIG92ZXJmbG93ID0gJ2JyZWFrV29yZCcsXG4gICAgc2l6ZSA9ICdtZCcsXG4gICAgc21TaXplLFxuICAgIHRydW5jYXRlID0gZmFsc2UsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjcyA9IGN4KFxuICAgIHN0eWxlcy5IZWFkaW5nLFxuICAgIHN0eWxlc1tgZm9udFNpemUke1NJWkVfU0NBTEVbc2l6ZV19YF0sXG4gICAgc21TaXplICYmIHN0eWxlc1tgc21Gb250U2l6ZSR7U0laRV9TQ0FMRVtzbVNpemVdfWBdLFxuICAgIG1kU2l6ZSAmJiBzdHlsZXNbYG1kRm9udFNpemUke1NJWkVfU0NBTEVbbWRTaXplXX1gXSxcbiAgICBsZ1NpemUgJiYgc3R5bGVzW2BsZ0ZvbnRTaXplJHtTSVpFX1NDQUxFW2xnU2l6ZV19YF0sXG4gICAgY29sb3JzW2NvbG9yXSxcbiAgICBvdmVyZmxvdyA9PT0gJ2JyZWFrV29yZCcgJiYgdHlwb2dyYXBoeS5icmVha1dvcmQsXG4gICAgdHJ1bmNhdGUgJiYgdHlwb2dyYXBoeS50cnVuY2F0ZVxuICApO1xuXG4gIGNvbnN0IGhlYWRpbmdMZXZlbCA9IGFjY2Vzc2liaWxpdHlMZXZlbCB8fCBkZWZhdWx0SGVhZGluZ0xldmVsc1tzaXplXTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgYGgke2hlYWRpbmdMZXZlbH1gLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogY3MsXG4gICAgICBpZCxcbiAgICAgIC4uLih0cnVuY2F0ZSAmJiB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnXG4gICAgICAgID8geyB0aXRsZTogY2hpbGRyZW4gfVxuICAgICAgICA6IG51bGwpLFxuICAgIH0sXG4gICAgY2hpbGRyZW5cbiAgKTtcbn1cblxuSGVhZGluZy5wcm9wVHlwZXMgPSB7XG4gIGFjY2Vzc2liaWxpdHlMZXZlbDogUHJvcFR5cGVzLm9uZU9mKFsxLCAyLCAzLCA0LCA1LCA2XSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ2JsdWUnLFxuICAgICdkYXJrR3JheScsXG4gICAgJ2VnZ3BsYW50JyxcbiAgICAnZ3JheScsXG4gICAgJ2dyZWVuJyxcbiAgICAnbGlnaHRHcmF5JyxcbiAgICAnbWFyb29uJyxcbiAgICAnbWlkbmlnaHQnLFxuICAgICduYXZ5JyxcbiAgICAnb2xpdmUnLFxuICAgICdvcmFuZ2UnLFxuICAgICdvcmNoaWQnLFxuICAgICdwaW5lJyxcbiAgICAncHVycGxlJyxcbiAgICAncmVkJyxcbiAgICAnd2F0ZXJtZWxvbicsXG4gICAgJ3doaXRlJyxcbiAgXSksXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvdmVyZmxvdzogUHJvcFR5cGVzLm9uZU9mKFsnbm9ybWFsJywgJ2JyZWFrV29yZCddKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXSksXG4gIHNtU2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXSksXG4gIG1kU2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXSksXG4gIGxnU2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXSksXG4gIHRydW5jYXRlOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gvQm94JztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24vSWNvbic7XG5pbXBvcnQgaWNvbnMgZnJvbSAnLi4vSWNvbi9pY29ucyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUG9nLmNzcyc7XG5cbmNvbnN0IFNJWkVfTkFNRV9UT19QSVhFTCA9IHtcbiAgeHM6IDI0LFxuICBzbTogMzIsXG4gIG1kOiA0MCxcbiAgbGc6IDQ4LFxuICB4bDogNTYsXG59O1xuXG50eXBlIFByb3BzID0ge3xcbiAgYWN0aXZlPzogYm9vbGVhbixcbiAgYmdDb2xvcj86ICd0cmFuc3BhcmVudCcgfCAnbGlnaHRHcmF5JyB8ICd3aGl0ZScsXG4gIGZvY3VzZWQ/OiBib29sZWFuLFxuICBob3ZlcmVkPzogYm9vbGVhbixcbiAgaWNvbkNvbG9yPzogJ2dyYXknIHwgJ2RhcmtHcmF5JyB8ICdyZWQnIHwgJ2JsdWUnIHwgJ3doaXRlJyxcbiAgaWNvbjogJEtleXM8dHlwZW9mIGljb25zPixcbiAgc2l6ZT86ICRLZXlzPHR5cGVvZiBTSVpFX05BTUVfVE9fUElYRUw+LFxufH07XG5cbmNvbnN0IGRlZmF1bHRJY29uQnV0dG9uSWNvbkNvbG9ycyA9IHtcbiAgdHJhbnNwYXJlbnQ6ICdncmF5JyxcbiAgbGlnaHRHcmF5OiAnZ3JheScsXG4gIHdoaXRlOiAnZ3JheScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2cocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmUgPSBmYWxzZSxcbiAgICBiZ0NvbG9yID0gJ3RyYW5zcGFyZW50JyxcbiAgICBmb2N1c2VkID0gZmFsc2UsXG4gICAgaG92ZXJlZCA9IGZhbHNlLFxuICAgIGljb25Db2xvciA9IGRlZmF1bHRJY29uQnV0dG9uSWNvbkNvbG9yc1tiZ0NvbG9yXSxcbiAgICBpY29uLFxuICAgIHNpemUgPSAnbWQnLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaWNvblNpemUgPSBTSVpFX05BTUVfVE9fUElYRUxbc2l6ZV0gLyAyO1xuXG4gIGNvbnN0IGlubGluZVN0eWxlID0ge1xuICAgIGhlaWdodDogU0laRV9OQU1FX1RPX1BJWEVMW3NpemVdLFxuICAgIHdpZHRoOiBTSVpFX05BTUVfVE9fUElYRUxbc2l6ZV0sXG4gIH07XG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoc3R5bGVzLnBvZywgc3R5bGVzW2JnQ29sb3JdLCB7XG4gICAgW3N0eWxlcy5hY3RpdmVdOiBhY3RpdmUsXG4gICAgW3N0eWxlcy5mb2N1c2VkXTogZm9jdXNlZCxcbiAgICBbc3R5bGVzLmhvdmVyZWRdOiBob3ZlcmVkICYmICFmb2N1c2VkICYmICFhY3RpdmUsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IHN0eWxlPXtpbmxpbmVTdHlsZX0+XG4gICAgICA8Qm94IHNoYXBlPVwiY2lyY2xlXCI+XG4gICAgICAgIHsvKlxuICAgICAgICAgIFdlJ3JlIGV4cGxpY2l0bHkgc2V0dGluZyBhbiBlbXB0eSBzdHJpbmcgYXMgYSBsYWJlbCBvbiB0aGUgSWNvbiBzaW5jZSB3ZVxuICAgICAgICAgIGFscmVhZHkgaGF2ZSBhbiBhcmlhLWxhYmVsIG9uIHRoZSBidXR0b24gY29udGFpbmVyLlxuICAgICAgICAgIFRoaXMgaXMgc2ltaWxhciB0byBoYXZpbmcgZW1wdHkgYGFsdGAgYXR0cmlidXRlczpcbiAgICAgICAgICBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9hY2Nlc3NpYmlsaXR5LXRpcC1lbXB0eS1hbHQtYXR0cmlidXRlc1xuICAgICAgICAqL31cbiAgICAgICAgPEljb25cbiAgICAgICAgICBjb2xvcj17aWNvbkNvbG9yfVxuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgc2l6ZT17aWNvblNpemV9XG4gICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPVwiXCJcbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Qb2cucHJvcFR5cGVzID0ge1xuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICBiZ0NvbG9yOiBQcm9wVHlwZXMub25lT2YoWyd0cmFuc3BhcmVudCcsICdsaWdodEdyYXknLCAnd2hpdGUnXSksXG4gIGZvY3VzZWQ6IFByb3BUeXBlcy5ib29sLFxuICBob3ZlcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaWNvbkNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydncmF5JywgJ2RhcmtHcmF5JywgJ3JlZCcsICdibHVlJywgJ3doaXRlJ10pLFxuICBpY29uOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoaWNvbnMpKS5pc1JlcXVpcmVkLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoU0laRV9OQU1FX1RPX1BJWEVMKSksXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSWNvbkJ1dHRvbi5jc3MnO1xuaW1wb3J0IGljb25zIGZyb20gJy4uL0ljb24vaWNvbnMnO1xuaW1wb3J0IFBvZyBmcm9tICcuLi9Qb2cvUG9nJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFjY2Vzc2liaWxpdHlFeHBhbmRlZD86IGJvb2xlYW4sXG4gIGFjY2Vzc2liaWxpdHlIYXNwb3B1cD86IGJvb2xlYW4sXG4gIGFjY2Vzc2liaWxpdHlMYWJlbDogc3RyaW5nLFxuICBiZ0NvbG9yPzogJ3RyYW5zcGFyZW50JyB8ICdsaWdodEdyYXknIHwgJ3doaXRlJyxcbiAgaWNvbkNvbG9yPzogJ2dyYXknIHwgJ2RhcmtHcmF5JyB8ICdyZWQnIHwgJ2JsdWUnIHwgJ3doaXRlJyxcbiAgaWNvbjogJEtleXM8dHlwZW9mIGljb25zPixcbiAgb25DbGljaz86ICh7IGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PD4gfSkgPT4gdm9pZCxcbiAgc2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnLFxufH07XG5cbnR5cGUgU3RhdGUgPSB7fFxuICBhY3RpdmU6IGJvb2xlYW4sXG4gIGZvY3VzZWQ6IGJvb2xlYW4sXG4gIGhvdmVyZWQ6IGJvb2xlYW4sXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbkJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY2Nlc3NpYmlsaXR5RXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGFjY2Vzc2liaWxpdHlIYXNwb3B1cDogUHJvcFR5cGVzLmJvb2wsXG4gICAgYWNjZXNzaWJpbGl0eUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYmdDb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsndHJhbnNwYXJlbnQnLCAnbGlnaHRHcmF5JywgJ3doaXRlJ10pLFxuICAgIGljb246IFByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhpY29ucykpLmlzUmVxdWlyZWQsXG4gICAgaWNvbkNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydncmF5JywgJ2RhcmtHcmF5JywgJ3JlZCcsICdibHVlJywgJ3doaXRlJ10pLFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10pLFxuICB9O1xuXG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgIGhvdmVyZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGhhbmRsZUJsdXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogZmFsc2UgfSk7XG4gIGhhbmRsZUZvY3VzID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiB0cnVlIH0pO1xuICB9O1xuICBoYW5kbGVNb3VzZURvd24gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogdHJ1ZSB9KTtcbiAgfTtcbiAgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogdHJ1ZSB9KTtcbiAgfTtcbiAgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBob3ZlcmVkOiBmYWxzZSxcbiAgICB9KTtcbiAgfTtcbiAgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBmYWxzZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWNjZXNzaWJpbGl0eUV4cGFuZGVkLFxuICAgICAgYWNjZXNzaWJpbGl0eUhhc3BvcHVwLFxuICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsLFxuICAgICAgYmdDb2xvcixcbiAgICAgIGljb25Db2xvcixcbiAgICAgIGljb24sXG4gICAgICBzaXplLFxuICAgICAgb25DbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHsgYWN0aXZlLCBmb2N1c2VkLCBob3ZlcmVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgYXJpYS1leHBhbmRlZD17YWNjZXNzaWJpbGl0eUV4cGFuZGVkfVxuICAgICAgICBhcmlhLWhhc3BvcHVwPXthY2Nlc3NpYmlsaXR5SGFzcG9wdXB9XG4gICAgICAgIGFyaWEtbGFiZWw9e2FjY2Vzc2liaWxpdHlMYWJlbH1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gb25DbGljayAmJiBvbkNsaWNrKHsgZXZlbnQgfSl9XG4gICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgICBvbk1vdXNlVXA9e3RoaXMuaGFuZGxlTW91c2VVcH1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIDxQb2dcbiAgICAgICAgICBhY3RpdmU9e2FjdGl2ZX1cbiAgICAgICAgICBiZ0NvbG9yPXtiZ0NvbG9yfVxuICAgICAgICAgIGZvY3VzZWQ9e2ZvY3VzZWR9XG4gICAgICAgICAgaG92ZXJlZD17aG92ZXJlZH1cbiAgICAgICAgICBpY29uQ29sb3I9e2ljb25Db2xvcn1cbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYWJlbC5jc3MnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBodG1sRm9yOiBzdHJpbmcsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFiZWwocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGh0bWxGb3IgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfSBodG1sRm9yPXtodG1sRm9yfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2xhYmVsPlxuICApO1xufVxuXG5MYWJlbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaHRtbEZvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE1hc2sgZnJvbSAnLi4vTWFzay9NYXNrJztcblxuLypcbiAgTXVjaCBvZiB0aGUgbWF0aCBhbmQgdW5kZXJzdGFuZGluZyBhYm91dCB0aGlzIGNvbXBvbmVudCBjb21lcyBmcm9tIEB2amVhdXgnc1xuICBleGNlbGxlbnQgYmxvZyBwb3N0IG9uIGltYWdlIHJlc2l6aW5nLlxuXG4gIGh0dHA6Ly9ibG9nLnZqZXV4LmNvbS8yMDEzL2ltYWdlL2Nzcy1jb250YWluZXItYW5kLWNvdmVyLmh0bWxcblxuICBJIGhpZ2hseSByZWNvbW1lbmQgeW91IHJlYWQgdGhhdCBmaXJzdCBiZWZvcmUgY29udGludWluZyBvbiByZWFkaW5nLlxuKi9cblxuY29uc3QgYXNwZWN0UmF0aW8gPSAod2lkdGgsIGhlaWdodCkgPT4gd2lkdGggLyBoZWlnaHQ7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gIGNvbnRlbnRBc3BlY3RSYXRpbzogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgd2lkdGg6IG51bWJlcixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZXR0ZXJib3goe1xuICBjaGlsZHJlbixcbiAgY29udGVudEFzcGVjdFJhdGlvLFxuICBoZWlnaHQsXG4gIHdpZHRoLFxufTogUHJvcHMpIHtcbiAgY29uc3Qgdmlld3BvcnRBc3BlY3RSYXRpbyA9IGFzcGVjdFJhdGlvKHdpZHRoLCBoZWlnaHQpO1xuXG4gIGxldCBjb250ZW50SGVpZ2h0O1xuICBsZXQgY29udGVudFdpZHRoO1xuXG4gIGlmIChjb250ZW50QXNwZWN0UmF0aW8gPCB2aWV3cG9ydEFzcGVjdFJhdGlvKSB7XG4gICAgY29udGVudFdpZHRoID0gd2lkdGg7XG4gICAgY29udGVudEhlaWdodCA9IHdpZHRoIC8gY29udGVudEFzcGVjdFJhdGlvO1xuICB9IGVsc2Uge1xuICAgIGNvbnRlbnRXaWR0aCA9IGhlaWdodCAqIGNvbnRlbnRBc3BlY3RSYXRpbztcbiAgICBjb250ZW50SGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgY29uc3Qgb2Zmc2V0VG9wID0gKGNvbnRlbnRIZWlnaHQgLSBoZWlnaHQpIC8gLTI7XG4gIGNvbnN0IG9mZnNldExlZnQgPSAoY29udGVudFdpZHRoIC0gd2lkdGgpIC8gLTI7XG5cbiAgcmV0dXJuIChcbiAgICA8TWFzayB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBvZmZzZXRUb3AsIG1hcmdpbkxlZnQ6IG9mZnNldExlZnQgfX0+XG4gICAgICAgIDxNYXNrIHdpZHRoPXtjb250ZW50V2lkdGh9IGhlaWdodD17Y29udGVudEhlaWdodH0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L01hc2s+XG4gICAgICA8L2Rpdj5cbiAgICA8L01hc2s+XG4gICk7XG59XG5cbkxldHRlcmJveC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY29udGVudEFzcGVjdFJhdGlvOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpbmsuY3NzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgaHJlZjogc3RyaW5nLFxuICBpbmxpbmU/OiBib29sZWFuLFxuICBvbkNsaWNrPzogKHsgZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8PiB9KSA9PiB2b2lkLFxuICB0YXJnZXQ/OiBudWxsIHwgJ3NlbGYnIHwgJ2JsYW5rJyxcbnx9O1xuXG50eXBlIFN0YXRlID0ge3xcbiAgZW5hYmxlRm9jdXNTdHlsZXM6IGJvb2xlYW4sXG58fTtcblxuY29uc3QgVEFCX0tFWV9DT0RFID0gOTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0YXJnZXQ6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgJ3NlbGYnLCAnYmxhbmsnXSksXG4gIH07XG5cbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGVuYWJsZUZvY3VzU3R5bGVzOiB0cnVlLFxuICB9O1xuXG4gIGhhbmRsZUNsaWNrID0gKGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PD4pID0+IHtcbiAgICBjb25zdCB7IGhyZWYsIG9uQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG9uQ2xpY2sgJiYgaHJlZikge1xuICAgICAgb25DbGljayh7IGV2ZW50IH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVNb3VzZURvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBocmVmLCB0YXJnZXQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRhcmdldCA9PT0gJ2JsYW5rJyAmJiBocmVmKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZW5hYmxlRm9jdXNTdHlsZXM6IGZhbHNlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVLZXlVcCA9IChldmVudDogU3ludGhldGljS2V5Ym9hcmRFdmVudDw+KSA9PiB7XG4gICAgY29uc3QgeyBocmVmLCB0YXJnZXQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRhcmdldCA9PT0gJ2JsYW5rJyAmJiBldmVudC5rZXlDb2RlID09PSBUQUJfS0VZX0NPREUgJiYgaHJlZikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVuYWJsZUZvY3VzU3R5bGVzOiB0cnVlIH0pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaW5saW5lID0gZmFsc2UsIHRhcmdldCA9IG51bGwsIGhyZWYgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcmVsID0gdGFyZ2V0ID09PSAnYmxhbmsnID8gJ25vb3BlbmVyIG5vcmVmZXJyZXInIDogbnVsbDtcbiAgICBjb25zdCBsaW5rVGFyZ2V0ID0gdGFyZ2V0ID8gYF8ke3RhcmdldH1gIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgIHN0eWxlcy5saW5rLFxuICAgICAgICAgIHRoaXMuc3RhdGUuZW5hYmxlRm9jdXNTdHlsZXMgPyBzdHlsZXMuYWNjZXNzaWJsZUZvY3VzU3R5bGUgOiAnJyxcbiAgICAgICAgICBpbmxpbmUgPyAnJyA6IHN0eWxlcy5ibG9ja1xuICAgICAgICApfVxuICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVNb3VzZURvd259XG4gICAgICAgIG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXB9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgIHJlbD17cmVsfVxuICAgICAgICB0YXJnZXQ9e2xpbmtUYXJnZXR9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG4iLCIvKipcbiAqIGRlYm91bmNlIHByZXZlbnRzIGEgcGFydGljdWxhciBmdW5jdGlvbiBmcm9tIGJlaW5nIGNhbGxlZCB1bnRpbCBhZnRlciBhIGdpdmVuXG4gKiBjb29sZG93biBwZXJpb2QgKGRlZmF1bHQgMTAwbXMpLiBFdmVyeSB0aW1lIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQsIGl0IHJlc2V0c1xuICogdGhlIGNvb2xkb3duLlxuICovXG5cbi8vIEBmbG93XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmbjogKCkgPT4gdm9pZCwgdGhyZXNoaG9sZDogbnVtYmVyID0gMTAwKSB7XG4gIGxldCBkZWZlclRpbWVyOiBUaW1lb3V0SUQgfCBudWxsID0gbnVsbDtcblxuICBjb25zdCBkZWJvdW5jZWQgPSAoLi4uYXJnczogYW55KSA9PiB7XG4gICAgaWYgKGRlZmVyVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dChkZWZlclRpbWVyKTtcbiAgICB9XG5cbiAgICBkZWZlclRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkZWZlclRpbWVyID0gbnVsbDtcbiAgICAgIGZuKC4uLmFyZ3MpO1xuICAgIH0sIHRocmVzaGhvbGQpO1xuICB9O1xuXG4gIGRlYm91bmNlZC5jbGVhclRpbWVvdXQgPSAoKSA9PiB7XG4gICAgaWYgKGRlZmVyVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dChkZWZlclRpbWVyKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cbiIsIi8qKlxuICogRmV0Y2hJdGVtcyBpcyBhIGxvZ2ljIGNvbXBvbmVudCB0aGF0IHJlbmRlcnMgbm8gY29udGVudCBpdHNlbGYuIEl0cyBqb2JcbiAqIGlzIHRvIG1hbmFnZSB3aGVuIHRoZSBnaXZlbiBmZXRjaE1vcmUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgYmFzZWQgb25cbiAqIHRoZSBnaXZlbiBzY3JvbGwvc2l6ZSBwcm9wcy5cbiAqXG4gKiBXaGlsZSBubyBlbGVtZW50IGlzIGFjdHVhbGx5IHBhc3NlZCB0byBGZXRjaEl0ZW1zLCBpdCBpcyBpbnRlbmRlZCB0byBiZSB1c2VkXG4gKiBpbiBjb25qdW5jdGlvbiB3aXRoIGEgbGFyZ2Ugc2Nyb2xsIGNvbnRhaW5lciB0aGF0IHVzZXMgYXN5bmMgZmV0Y2hpbmcgdG9cbiAqIGxvYWQgYW5kIHJlbmRlciBhZGRpdGlvbmFsIGRhdGEuIEJhc2VkIG9uIHRoZSBoZWlnaHQgb2YgdGhpcyBjb250YWluZXIgYW5kXG4gKiBpdHMgY3VycmVudCBzY3JvbGwgcG9zaXRpb24sIEZldGNoSXRlbXMgaXMgcmVzcG9uc2libGUgZm9yIHRyaWdnZXJpbmcgZnV0dXJlXG4gKiBmZXRjaCBjYWxscy5cbiAqL1xuXG4vLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgY29udGFpbmVySGVpZ2h0OiBudW1iZXIsXG4gIGlzQXRFbmQ/OiBib29sZWFuLFxuICBpc0ZldGNoaW5nOiBib29sZWFuLFxuICBmZXRjaE1vcmU/OiBGdW5jdGlvbixcbiAgc2Nyb2xsSGVpZ2h0OiBudW1iZXIsXG4gIHNjcm9sbFRvcDogbnVtYmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hJdGVtcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb250YWluZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBpc0F0RW5kOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0ZldGNoaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGZldGNoTW9yZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2Nyb2xsSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgc2Nyb2xsVG9wOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc2V0VGltZW91dCh0aGlzLmNoZWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBjaGVjayA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjb250YWluZXJIZWlnaHQsXG4gICAgICBpc0F0RW5kLFxuICAgICAgaXNGZXRjaGluZyxcbiAgICAgIGZldGNoTW9yZSxcbiAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgIHNjcm9sbFRvcCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChpc0F0RW5kIHx8IGlzRmV0Y2hpbmcgfHwgIWZldGNoTW9yZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzY3JvbGxCdWZmZXIgPSBjb250YWluZXJIZWlnaHQgKiAzO1xuXG4gICAgaWYgKHNjcm9sbFRvcCArIHNjcm9sbEJ1ZmZlciA+IHNjcm9sbEhlaWdodCkge1xuICAgICAgZmV0Y2hNb3JlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiLyoqXG4gKiBTY3JvbGxDb250YWluZXIgaXMgYSBwYXNzLXRocm91Z2ggY29tcG9uZW50IHRoYXQgc2ltcGx5IHNldHMgdXAgYW4gb25TY3JvbGxcbiAqIGhhbmRsZXIgb24gdGhlIGdpdmVuIHNjcm9sbENvbnRhaW5lciBlbGVtZW50IChvciB0aGUgZWxlbWVudCB0aGF0IGlzXG4gKiByZXR1cm5lZCBhcyByZXN1bHQgb2YgY2FsbGluZyB0aGUgc2Nyb2xsQ29udGFpbmVyIG1ldGhvZCkuIFRoaXMgYWxsb3dzIGZvclxuICogdGhlIGV2ZW50IGxpc3RlbmVyIHN1YnNjcmlwdGlvbiBvZiB0aGUgc2Nyb2xsQ29udGFpbmVyIHRvIGJlIG1hbmFnZWQgaW5zaWRlXG4gKiB0aGUgUmVhY3QgbGlmZWN5Y2xlIHdpdGhvdXQgYWRkaW5nIGJsb2F0IHRvIE1hc29ucnkgb3Igb3RoZXIgb25TY3JvbGxcbiAqIHN1YnNjcmliZXJzLlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIENvbXBvbmVudCByZW5kZXJzIGl0cyBjaGlsZHJlbiB3aXRob3V0IGNyZWF0aW5nIGFueVxuICogYWRkaXRpb25hbCBjb250ZW50LiBBbHNvIG5vdGUgdGhhdCwgd2hpbGUgdGhlIGNvbXBvbmVudCBpcyBidWlsdCB0byBtYW5hZ2VcbiAqIG9uU2Nyb2xsIGluc2lkZSBvZiB0aGUgUmVhY3QgbGlmZWN5Y2xlLCBpdCBkb2Vzbid0IGNoYW5nZSBvblNjcm9sbCBldmVudHNcbiAqIG9yIHRoZSBBUEkgYXQgYWxsLCBzbyBpdCBjb3VsZCBlYXNpbHkgYmUgYWRhcHRlZCB0byBvdGhlciBldmVudCB0eXBlcy5cbiAqL1xuXG4vLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNoaWxkcmVuPzogYW55LFxuICBvblNjcm9sbDogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCxcbiAgc2Nyb2xsQ29udGFpbmVyOiA/SFRNTEVsZW1lbnQgfCAoKCkgPT4gP0hUTUxFbGVtZW50KSxcbnx9O1xuXG5mdW5jdGlvbiBnZXRTY3JvbGxDb250YWluZXIoc2Nyb2xsQ29udGFpbmVyKSB7XG4gIHJldHVybiB0eXBlb2Ygc2Nyb2xsQ29udGFpbmVyID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JvbGxDb250YWluZXIoKVxuICAgIDogc2Nyb2xsQ29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgICBvblNjcm9sbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzY3JvbGxDb250YWluZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSlcbiAgICAgIC5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGdldFNjcm9sbENvbnRhaW5lcih0aGlzLnByb3BzLnNjcm9sbENvbnRhaW5lcik7XG4gICAgaWYgKHNjcm9sbENvbnRhaW5lcikge1xuICAgICAgdGhpcy51cGRhdGVTY3JvbGxDb250YWluZXIoc2Nyb2xsQ29udGFpbmVyKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgY29uc3QgbmV4dFNjcm9sbENvbnRhaW5lciA9IGdldFNjcm9sbENvbnRhaW5lcih0aGlzLnByb3BzLnNjcm9sbENvbnRhaW5lcik7XG4gICAgaWYgKG5leHRTY3JvbGxDb250YWluZXIgJiYgbmV4dFNjcm9sbENvbnRhaW5lciAhPT0gdGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHRoaXMudXBkYXRlU2Nyb2xsQ29udGFpbmVyKG5leHRTY3JvbGxDb250YWluZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnNjcm9sbENvbnRhaW5lcikge1xuICAgICAgdGhpcy5zY3JvbGxDb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNjcm9sbENvbnRhaW5lclJlZiA9ICgpID0+IHRoaXMuc2Nyb2xsQ29udGFpbmVyO1xuXG4gIHVwZGF0ZVNjcm9sbENvbnRhaW5lcihzY3JvbGxDb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICAvLyBjbGVhbnVwIGV4aXN0aW5nIHNjcm9sbCBjb250YWluZXIgaWYgaXQgZXhpc3RzXG4gICAgICB0aGlzLnNjcm9sbENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgfVxuICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyID0gc2Nyb2xsQ29udGFpbmVyO1xuICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcbiAgfVxuXG4gIGhhbmRsZVNjcm9sbCA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2Nyb2xsKGV2ZW50KTtcbiAgfTtcblxuICBzY3JvbGxDb250YWluZXI6ID9IVE1MRWxlbWVudDtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gIH1cbn1cbiIsIi8qKlxuICogdGhyb3R0bGUgbGltaXRzIHRoZSBudW1iZXIgb2YgdGltZXMgYSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHRvIGFcbiAqIGdpdmVuIHRocmVzaGhvbGQgKDEwMG1zIGJ5IGRlZmF1bHQpLiBUaGUgZnVuY3Rpb24gaXMgYWx3YXlzIGNhbGxlZFxuICogb24gdGhlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIGVkZ2UuXG4gKi9cblxuLy8gQGZsb3dcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGZuOiAoKSA9PiB2b2lkLCB0aHJlc2hob2xkOiBudW1iZXIgPSAxMDApIHtcbiAgbGV0IGxhc3Q6IG51bWJlcjtcbiAgbGV0IGRlZmVyVGltZXI6IFRpbWVvdXRJRDtcbiAgY29uc3QgdGhyb3R0bGVkID0gKC4uLmFyZ3M6IGFueSkgPT4ge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgaWYgKGxhc3QgJiYgbm93IC0gbGFzdCA8IHRocmVzaGhvbGQpIHtcbiAgICAgIGNsZWFyVGltZW91dChkZWZlclRpbWVyKTtcbiAgICAgIGRlZmVyVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGFzdCA9IG5vdztcbiAgICAgICAgZm4oLi4uYXJncyk7XG4gICAgICB9LCB0aHJlc2hob2xkIC0gKG5vdyAtIGxhc3QpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdCA9IG5vdztcbiAgICAgIGZuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfTtcblxuICB0aHJvdHRsZWQuY2xlYXJUaW1lb3V0ID0gKCkgPT4ge1xuICAgIGlmIChkZWZlclRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZGVmZXJUaW1lcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB0aHJvdHRsZWQ7XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBDYWNoZSB9IGZyb20gJy4vQ2FjaGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWFzdXJlbWVudFN0b3JlPFQsIFY+IGltcGxlbWVudHMgQ2FjaGU8VCwgVj4ge1xuICBtYXA6IFdlYWtNYXA8VCwgVj4gPSBuZXcgV2Vha01hcCgpO1xuXG4gIGdldChrZXk6IFQpOiA/ViB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmdldChrZXkpO1xuICB9XG5cbiAgaGFzKGtleTogVCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXMoa2V5KTtcbiAgfVxuXG4gIHNldChrZXk6IFQsIHZhbHVlOiBWKTogdm9pZCB7XG4gICAgdGhpcy5tYXAuc2V0KGtleSwgdmFsdWUpO1xuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5tYXAgPSBuZXcgV2Vha01hcCgpO1xuICB9XG59XG4iLCIvKipcbiAqIE1lYXN1cmluZyBzY3JvbGwgcG9zaXRpb25zLCBlbGVtZW50IGhlaWdodHMsIGV0YyBpcyBkaWZmZXJlbnQgYmV0d2VlblxuICogZGlmZmVyZW50IGJyb3dzZXJzIGFuZCB0aGUgd2luZG93IG9iamVjdCB2cyBvdGhlciBET00gbm9kZXMuIFRoZXNlXG4gKiB1dGlscyBhYnN0cmFjdCBhd2F5IHRoZXNlIGRpZmZlcmVuY2VzLlxuICovXG5cbi8vIEBmbG93XG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudEhlaWdodChlbGVtZW50OiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gIHJldHVybiBlbGVtZW50ID09PSB3aW5kb3cgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBlbGVtZW50LmNsaWVudEhlaWdodDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbFBvcygpIHtcbiAgaWYgKHdpbmRvdy5zY3JvbGxZICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBNb2Rlcm4gYnJvd3NlclxuICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsWTtcbiAgfSBlbHNlIGlmIChcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICE9PSB1bmRlZmluZWRcbiAgKSB7XG4gICAgLy8gSUUgc3VwcG9ydC5cbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlbGF0aXZlU2Nyb2xsVG9wKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgcmV0dXJuIGVsZW1lbnQgPT09IHdpbmRvd1xuICAgID8gZ2V0V2luZG93U2Nyb2xsUG9zKClcbiAgICA6IGVsZW1lbnQuc2Nyb2xsVG9wIC0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxIZWlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICByZXR1cm4gZWxlbWVudCA9PT0gd2luZG93ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICAgID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodFxuICAgIDogZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxQb3MoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICByZXR1cm4gZWxlbWVudCA9PT0gd2luZG93ID8gZ2V0V2luZG93U2Nyb2xsUG9zKCkgOiBlbGVtZW50LnNjcm9sbFRvcDtcbn1cbiIsImV4cG9ydCBjb25zdCBEZWZhdWx0TGF5b3V0U3ltYm9sID0gU3ltYm9sKCdkZWZhdWx0Jyk7XG5leHBvcnQgY29uc3QgVW5pZm9ybVJvd0xheW91dFN5bWJvbCA9IFN5bWJvbCgndW5pZm9ybVJvdycpO1xuIiwiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgQ2FjaGUgfSBmcm9tICcuL0NhY2hlJztcblxudHlwZSBQb3NpdGlvbiA9IHsgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfTtcblxuY29uc3QgbWluZGV4ID0gYXJyID0+IHtcbiAgbGV0IGlkeCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFycltpXSA8IGFycltpZHhdKSB7XG4gICAgICBpZHggPSBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaWR4O1xufTtcblxuY29uc3Qgb2Zmc2NyZWVuID0gKHdpZHRoLCBoZWlnaHQgPSBJbmZpbml0eSkgPT4gKHtcbiAgdG9wOiAtOTk5OSxcbiAgbGVmdDogLTk5OTksXG4gIHdpZHRoLFxuICBoZWlnaHQsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgPFQ+KHtcbiAgY2FjaGUsXG4gIGNvbHVtbldpZHRoID0gMjM2LFxuICBndXR0ZXIgPSAxNCxcbiAgbWluQ29scyA9IDIsXG4gIHdpZHRoLFxufToge3xcbiAgY29sdW1uV2lkdGg/OiBudW1iZXIsXG4gIGd1dHRlcj86IG51bWJlcixcbiAgY2FjaGU6IENhY2hlPFQsIG51bWJlcj4sXG4gIG1pbkNvbHM/OiBudW1iZXIsXG4gIHdpZHRoPzogP251bWJlcixcbnx9KSA9PiAoaXRlbXM6IEFycmF5PCo+KTogQXJyYXk8UG9zaXRpb24+ID0+IHtcbiAgaWYgKHdpZHRoID09IG51bGwpIHtcbiAgICByZXR1cm4gaXRlbXMubWFwKCgpID0+IG9mZnNjcmVlbihjb2x1bW5XaWR0aCkpO1xuICB9XG5cbiAgY29uc3QgY29sdW1uV2lkdGhBbmRHdXR0ZXIgPSBjb2x1bW5XaWR0aCArIGd1dHRlcjtcbiAgY29uc3QgY29sdW1uQ291bnQgPSBNYXRoLm1heChcbiAgICBNYXRoLmZsb29yKCh3aWR0aCArIGd1dHRlcikgLyBjb2x1bW5XaWR0aEFuZEd1dHRlciksXG4gICAgbWluQ29sc1xuICApO1xuICAvLyB0aGUgdG90YWwgaGVpZ2h0IG9mIGVhY2ggY29sdW1uXG4gIGNvbnN0IGhlaWdodHMgPSBuZXcgQXJyYXkoY29sdW1uQ291bnQpLmZpbGwoMCk7XG4gIGNvbnN0IGNlbnRlck9mZnNldCA9IE1hdGgubWF4KFxuICAgIE1hdGguZmxvb3IoKHdpZHRoIC0gY29sdW1uV2lkdGhBbmRHdXR0ZXIgKiBjb2x1bW5Db3VudCArIGd1dHRlcikgLyAyKSxcbiAgICAwXG4gICk7XG5cbiAgcmV0dXJuIGl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gYWNjO1xuICAgIC8vICRGbG93Rml4TWVcbiAgICBjb25zdCBoZWlnaHQgPSBjYWNoZS5nZXQoaXRlbSk7XG4gICAgbGV0IHBvc2l0aW9uO1xuXG4gICAgaWYgKGhlaWdodCA9PSBudWxsKSB7XG4gICAgICBwb3NpdGlvbiA9IG9mZnNjcmVlbihjb2x1bW5XaWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGhlaWdodEFuZEd1dHRlciA9IGhlaWdodCArIGd1dHRlcjtcbiAgICAgIGNvbnN0IGNvbCA9IG1pbmRleChoZWlnaHRzKTtcbiAgICAgIGNvbnN0IHRvcCA9IGhlaWdodHNbY29sXTtcbiAgICAgIGNvbnN0IGxlZnQgPSBjb2wgKiBjb2x1bW5XaWR0aEFuZEd1dHRlciArIGNlbnRlck9mZnNldDtcblxuICAgICAgaGVpZ2h0c1tjb2xdICs9IGhlaWdodEFuZEd1dHRlcjtcbiAgICAgIHBvc2l0aW9uID0geyB0b3AsIGxlZnQsIHdpZHRoOiBjb2x1bW5XaWR0aCwgaGVpZ2h0IH07XG4gICAgfVxuICAgIHBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9LCBbXSk7XG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgQ2FjaGUgfSBmcm9tICcuL0NhY2hlJztcblxudHlwZSBQb3NpdGlvbiA9IHsgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfTtcblxuY29uc3Qgb2Zmc2NyZWVuID0gKHdpZHRoLCBoZWlnaHQgPSBJbmZpbml0eSkgPT4gKHtcbiAgdG9wOiAtOTk5OSxcbiAgbGVmdDogLTk5OTksXG4gIHdpZHRoLFxuICBoZWlnaHQsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgPFQ+KHtcbiAgY2FjaGUsXG4gIGNvbHVtbldpZHRoID0gMjM2LFxuICBndXR0ZXIgPSAxNCxcbiAgd2lkdGgsXG4gIG1pbkNvbHMgPSAzLFxufToge3xcbiAgY2FjaGU6IENhY2hlPFQsIG51bWJlcj4sXG4gIGNvbHVtbldpZHRoPzogbnVtYmVyLFxuICBndXR0ZXI/OiBudW1iZXIsXG4gIHdpZHRoPzogP251bWJlcixcbiAgbWluQ29scz86IG51bWJlcixcbnx9KSA9PiAoaXRlbXM6IEFycmF5PFQ+KTogQXJyYXk8UG9zaXRpb24+ID0+IHtcbiAgaWYgKHdpZHRoID09IG51bGwpIHtcbiAgICByZXR1cm4gaXRlbXMubWFwKCgpID0+IG9mZnNjcmVlbihjb2x1bW5XaWR0aCkpO1xuICB9XG5cbiAgY29uc3QgY29sdW1uV2lkdGhBbmRHdXR0ZXIgPSBjb2x1bW5XaWR0aCArIGd1dHRlcjtcbiAgY29uc3QgY29sdW1uQ291bnQgPSBNYXRoLm1heChcbiAgICBNYXRoLmZsb29yKCh3aWR0aCArIGd1dHRlcikgLyBjb2x1bW5XaWR0aEFuZEd1dHRlciksXG4gICAgbWluQ29sc1xuICApO1xuXG4gIGNvbnN0IHBvc2l0aW9ucyA9IFtdO1xuICBjb25zdCBoZWlnaHRzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGxldCBwb3NpdGlvbjtcbiAgICBjb25zdCBoZWlnaHQgPSBjYWNoZS5nZXQoaXRlbXNbaV0pO1xuXG4gICAgaWYgKGhlaWdodCA9PSBudWxsKSB7XG4gICAgICBwb3NpdGlvbiA9IG9mZnNjcmVlbihjb2x1bW5XaWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGkgJSBjb2x1bW5Db3VudDtcbiAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaSAvIGNvbHVtbkNvdW50KTtcblxuICAgICAgaWYgKGNvbHVtbiA9PT0gMCB8fCBoZWlnaHQgPiBoZWlnaHRzW3Jvd10pIHtcbiAgICAgICAgaGVpZ2h0c1tyb3ddID0gaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0b3AgPVxuICAgICAgICByb3cgPiAwXG4gICAgICAgICAgPyBoZWlnaHRzLnNsaWNlKDAsIHJvdykucmVkdWNlKChzdW0sIHkpID0+IHN1bSArIHkgKyBndXR0ZXIsIDApXG4gICAgICAgICAgOiAwO1xuXG4gICAgICBwb3NpdGlvbiA9IHtcbiAgICAgICAgdG9wLFxuICAgICAgICBsZWZ0OiBjb2x1bW4gKiBjb2x1bW5XaWR0aEFuZEd1dHRlcixcbiAgICAgICAgd2lkdGg6IGNvbHVtbldpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICB9O1xuICAgIH1cbiAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbik7XG4gIH1cbiAgcmV0dXJuIHBvc2l0aW9ucztcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBDYWNoZSB9IGZyb20gJy4vQ2FjaGUnO1xuXG50eXBlIFBvc2l0aW9uID0geyB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9O1xuXG5jb25zdCBtaW5kZXggPSBhcnIgPT4ge1xuICBsZXQgaWR4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYXJyW2ldIDwgYXJyW2lkeF0pIHtcbiAgICAgIGlkeCA9IGk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpZHg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCA8VD4oe1xuICBndXR0ZXIgPSAwLFxuICBjYWNoZSxcbiAgbWluQ29scyA9IDIsXG4gIGlkZWFsQ29sdW1uV2lkdGggPSAyNDAsXG4gIHdpZHRoLFxufToge3xcbiAgZ3V0dGVyPzogbnVtYmVyLFxuICBjYWNoZTogQ2FjaGU8VCwgbnVtYmVyPixcbiAgbWluQ29scz86IG51bWJlcixcbiAgaWRlYWxDb2x1bW5XaWR0aD86IG51bWJlcixcbiAgd2lkdGg/OiA/bnVtYmVyLFxufH0pID0+IHtcbiAgaWYgKHdpZHRoID09IG51bGwpIHtcbiAgICByZXR1cm4gKGl0ZW1zOiBBcnJheTxtaXhlZD4pOiBBcnJheTxQb3NpdGlvbj4gPT5cbiAgICAgIGl0ZW1zLm1hcCgoKSA9PiAoe1xuICAgICAgICB0b3A6IEluZmluaXR5LFxuICAgICAgICBsZWZ0OiBJbmZpbml0eSxcbiAgICAgICAgd2lkdGg6IEluZmluaXR5LFxuICAgICAgICBoZWlnaHQ6IEluZmluaXR5LFxuICAgICAgfSkpO1xuICB9XG5cbiAgLy8gXCJUaGlzIGlzIGtpbmQgb2YgY3JhenkhXCIgLSB5b3VcbiAgLy8gWWVzLCBpbmRlZWQuIFRoZSBcImd1ZXNzaW5nXCIgaGVyZSBpcyBtZWFudCB0byByZXBsaWNhdGUgdGhlIHBhc3MgdGhhdCB0aGVcbiAgLy8gb3JpZ2luYWwgaW1wbGVtZW50YXRpb24gdGFrZXMgd2l0aCBDU1MuXG4gIGNvbnN0IGNvbGd1ZXNzID0gTWF0aC5mbG9vcih3aWR0aCAvIGlkZWFsQ29sdW1uV2lkdGgpO1xuICBjb25zdCBjb2x1bW5Db3VudCA9IE1hdGgubWF4KFxuICAgIE1hdGguZmxvb3IoKHdpZHRoIC0gY29sZ3Vlc3MgKiBndXR0ZXIpIC8gaWRlYWxDb2x1bW5XaWR0aCksXG4gICAgbWluQ29sc1xuICApO1xuICBjb25zdCBjb2x1bW5XaWR0aCA9IE1hdGguZmxvb3Iod2lkdGggLyBjb2x1bW5Db3VudCk7XG5cbiAgcmV0dXJuIChpdGVtczogQXJyYXk8VD4pID0+IHtcbiAgICAvLyB0aGUgdG90YWwgaGVpZ2h0IG9mIGVhY2ggY29sdW1uXG4gICAgY29uc3QgaGVpZ2h0cyA9IG5ldyBBcnJheShjb2x1bW5Db3VudCkuZmlsbCgwKTtcblxuICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gYWNjO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gY2FjaGUuZ2V0KGl0ZW0pO1xuICAgICAgbGV0IHBvc2l0aW9uO1xuXG4gICAgICBpZiAoaGVpZ2h0ID09IG51bGwpIHtcbiAgICAgICAgcG9zaXRpb24gPSB7XG4gICAgICAgICAgdG9wOiBJbmZpbml0eSxcbiAgICAgICAgICBsZWZ0OiBJbmZpbml0eSxcbiAgICAgICAgICB3aWR0aDogY29sdW1uV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBJbmZpbml0eSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbCA9IG1pbmRleChoZWlnaHRzKTtcbiAgICAgICAgY29uc3QgdG9wID0gaGVpZ2h0c1tjb2xdO1xuICAgICAgICBjb25zdCBsZWZ0ID0gY29sICogY29sdW1uV2lkdGggKyBndXR0ZXIgLyAyO1xuXG4gICAgICAgIGhlaWdodHNbY29sXSArPSBoZWlnaHQ7XG4gICAgICAgIHBvc2l0aW9uID0ge1xuICAgICAgICAgIHRvcCxcbiAgICAgICAgICBsZWZ0LFxuICAgICAgICAgIHdpZHRoOiBjb2x1bW5XaWR0aCAtIGd1dHRlcixcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgIHJldHVybiBwb3NpdGlvbnM7XG4gICAgfSwgW10pO1xuICB9O1xufTtcbiIsIi8vIEBmbG93XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNvbnJ5TGF5b3V0IHt9XG4iLCIvLyBAZmxvd1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pZm9ybVJvd0xheW91dCB7fVxuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vZGVib3VuY2UnO1xuaW1wb3J0IEZldGNoSXRlbXMgZnJvbSAnLi4vU2Nyb2xsRmV0Y2gvRmV0Y2hJdGVtcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWFzb25yeS5jc3MnO1xuaW1wb3J0IFNjcm9sbENvbnRhaW5lciBmcm9tICcuLi9TY3JvbGxGZXRjaC9TY3JvbGxDb250YWluZXInO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJy4uL3Rocm90dGxlJztcbmltcG9ydCB0eXBlIHsgQ2FjaGUgfSBmcm9tICcuL0NhY2hlJztcbmltcG9ydCBNZWFzdXJlbWVudFN0b3JlIGZyb20gJy4vTWVhc3VyZW1lbnRTdG9yZSc7XG5pbXBvcnQge1xuICBnZXRFbGVtZW50SGVpZ2h0LFxuICBnZXRSZWxhdGl2ZVNjcm9sbFRvcCxcbiAgZ2V0U2Nyb2xsUG9zLFxufSBmcm9tICcuLi9TY3JvbGxGZXRjaC9zY3JvbGxVdGlscyc7XG5pbXBvcnQge1xuICBEZWZhdWx0TGF5b3V0U3ltYm9sLFxuICBVbmlmb3JtUm93TGF5b3V0U3ltYm9sLFxufSBmcm9tICcuL2xlZ2FjeUxheW91dFN5bWJvbHMnO1xuaW1wb3J0IGRlZmF1bHRMYXlvdXQgZnJvbSAnLi9kZWZhdWx0TGF5b3V0JztcbmltcG9ydCB1bmlmb3JtUm93TGF5b3V0IGZyb20gJy4vdW5pZm9ybVJvd0xheW91dCc7XG5pbXBvcnQgZnVsbFdpZHRoTGF5b3V0IGZyb20gJy4vZnVsbFdpZHRoTGF5b3V0JztcbmltcG9ydCBMZWdhY3lNYXNvbnJ5TGF5b3V0IGZyb20gJy4uL01hc29ucnkvbGF5b3V0L21hc29ucnknO1xuaW1wb3J0IExlZ2FjeVVuaWZvcm1Sb3dMYXlvdXQgZnJvbSAnLi4vTWFzb25yeS9sYXlvdXQvdW5pZm9ybVJvdyc7XG5cbnR5cGUgUHJvcHM8VD4gPSB7fFxuICBjb2x1bW5XaWR0aD86IG51bWJlcixcbiAgY29tcDogUmVhY3QuQ29tcG9uZW50VHlwZTx7XG4gICAgZGF0YTogVCxcbiAgICBpdGVtSWR4OiBudW1iZXIsXG4gICAgaXNNZWFzdXJpbmc6IGJvb2xlYW4sXG4gIH0+LFxuICBmbGV4aWJsZT86IGJvb2xlYW4sXG4gIGd1dHRlcldpZHRoPzogbnVtYmVyLFxuICBpdGVtczogQXJyYXk8VD4sXG4gIG1lYXN1cmVtZW50U3RvcmU6IENhY2hlPFQsICo+LFxuICBtaW5Db2xzOiBudW1iZXIsXG4gIGxheW91dD86XG4gICAgfCBEZWZhdWx0TGF5b3V0U3ltYm9sXG4gICAgfCBVbmlmb3JtUm93TGF5b3V0U3ltYm9sXG4gICAgfCBMZWdhY3lNYXNvbnJ5TGF5b3V0XG4gICAgfCBMZWdhY3lVbmlmb3JtUm93TGF5b3V0LFxuICAvLyBTdXBwb3J0IGxlZ2FjeSBsb2FkSXRlbXMgdXNhZ2UuXG4gIC8vIFRPRE86IFNpbXBsaWZ5IG5vbiBmYWxzZXkgZmxvd3R5cGUuXG4gIGxvYWRJdGVtcz86XG4gICAgfCBmYWxzZVxuICAgIHwgKChcbiAgICAgICAgP3tcbiAgICAgICAgICBmcm9tOiBudW1iZXIsXG4gICAgICAgIH1cbiAgICAgICkgPT4gdm9pZCB8IGJvb2xlYW4gfCB7fSksXG4gIHNjcm9sbENvbnRhaW5lcj86ICgpID0+IEhUTUxFbGVtZW50LFxuICB2aXJ0dWFsaXplPzogYm9vbGVhbixcbnx9O1xuXG50eXBlIFN0YXRlPFQ+ID0ge3xcbiAgaGFzUGVuZGluZ01lYXN1cmVtZW50czogYm9vbGVhbixcbiAgaXNGZXRjaGluZzogYm9vbGVhbixcbiAgaXRlbXM6IEFycmF5PFQ+LFxuICBzY3JvbGxUb3A6IG51bWJlcixcbiAgd2lkdGg6ID9udW1iZXIsXG58fTtcblxuY29uc3QgUkVTSVpFX0RFQk9VTkNFID0gMzAwO1xuLy8gTXVsdGlwbGllZCBhZ2FpbnN0IGNvbnRhaW5lciBoZWlnaHQuXG4vLyBUaGUgYW1vdW50IG9mIGV4dHJhIGJ1ZmZlciBzcGFjZSBmb3IgcG9wdWxhdGluZyB2aXNpYmxlIGl0ZW1zLlxuY29uc3QgVklSVFVBTF9CVUZGRVJfRkFDVE9SID0gMC43O1xuXG5jb25zdCBsYXlvdXROdW1iZXJUb0Nzc0RpbWVuc2lvbiA9IG4gPT4gKG4gIT09IEluZmluaXR5ID8gbiA6IHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc29ucnk8VD4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM8VD4sIFN0YXRlPFQ+PiB7XG4gIHN0YXRpYyBjcmVhdGVNZWFzdXJlbWVudFN0b3JlKCkge1xuICAgIHJldHVybiBuZXcgTWVhc3VyZW1lbnRTdG9yZSgpO1xuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgcHJlZmVycmVkL3RhcmdldCBpdGVtIHdpZHRoLiBJZiBgZmxleGlibGVgIGlzIHNldCwgdGhlIGl0ZW0gd2lkdGggd2lsbFxuICAgICAqIGdyb3cgdG8gZmlsbCBjb2x1bW4gc3BhY2UsIGFuZCBzaHJpbmsgdG8gZml0IGlmIGJlbG93IG1pbiBjb2x1bW5zLlxuICAgICAqL1xuICAgIGNvbHVtbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCB0byByZW5kZXIuXG4gICAgICovXG4gICAgLyogZXNsaW50IHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzOiAwICovXG4gICAgY29tcDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcmVmZXJyZWQvdGFyZ2V0IGl0ZW0gd2lkdGguIEl0ZW0gd2lkdGggd2lsbCBncm93IHRvIGZpbGxcbiAgICAgKiBjb2x1bW4gc3BhY2UsIGFuZCBzaHJpbmsgdG8gZml0IGlmIGJlbG93IG1pbiBjb2x1bW5zLlxuICAgICAqL1xuICAgIGZsZXhpYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiBlYWNoIGl0ZW0uXG4gICAgICovXG4gICAgZ3V0dGVyV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBhbGwgb2JqZWN0cyB0byBkaXNwbGF5IGluIHRoZSBncmlkLlxuICAgICAqL1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogTWVhc3VyZW1lbnQgU3RvcmVcbiAgICAgKi9cbiAgICBtZWFzdXJlbWVudFN0b3JlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihNZWFzdXJlbWVudFN0b3JlKSxcblxuICAgIC8qKlxuICAgICAqIEEgY2FsbGJhY2sgd2hpY2ggdGhlIGdyaWQgY2FsbHMgd2hlbiB3ZSBuZWVkIHRvIGxvYWQgbW9yZSBpdGVtcyBhcyB0aGUgdXNlciBzY3JvbGxzLlxuICAgICAqIFRoZSBjYWxsYmFjayBzaG91bGQgdXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgaXRlbXMsIGFuZCBwYXNzIHRob3NlIGluIGFzIHByb3BzXG4gICAgICogdG8gdGhpcyBjb21wb25lbnQuXG4gICAgICovXG4gICAgbG9hZEl0ZW1zOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIE1pbmltdW0gbnVtYmVyIG9mIGNvbHVtbnMgdG8gZGlzcGxheS5cbiAgICAgKi9cbiAgICBtaW5Db2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB0aGUgZ3JpZCBjYWxscyB0byBnZXQgdGhlIHNjcm9sbCBjb250YWluZXIuXG4gICAgICogVGhpcyBpcyByZXF1aXJlZCBpZiB0aGUgZ3JpZCBpcyBleHBlY3RlZCB0byBiZSBzY3JvbGxhYmxlLlxuICAgICAqL1xuICAgIHNjcm9sbENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byB1c2UgYWN0dWFsIHZpcnR1YWxpemF0aW9uXG4gICAgICovXG4gICAgdmlydHVhbGl6ZTogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2x1bW5XaWR0aDogMjM2LFxuICAgIG1lYXN1cmVtZW50U3RvcmU6IG5ldyBNZWFzdXJlbWVudFN0b3JlKCksXG4gICAgbWluQ29sczogMyxcbiAgICBsYXlvdXQ6IERlZmF1bHRMYXlvdXRTeW1ib2wsXG4gICAgbG9hZEl0ZW1zOiAoKSA9PiB7fSxcbiAgICB2aXJ0dWFsaXplOiBmYWxzZSxcbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzOiBQcm9wczxUPiwgc3RhdGU6IFN0YXRlPFQ+KSB7XG4gICAgY29uc3QgeyBpdGVtcywgbWVhc3VyZW1lbnRTdG9yZSB9ID0gcHJvcHM7XG4gICAgLy8gd2hlbmV2ZXIgd2UncmUgcmVjZWl2aW5nIG5ldyBwcm9wcywgZGV0ZXJtaW5lIHdoZXRoZXIgYW55IGl0ZW1zIG5lZWQgdG8gYmUgbWVhc3VyZWRcbiAgICAvLyBUT0RPIC0gd2Ugc2hvdWxkIHRyZWF0IGl0ZW1zIGFzIGltbXV0YWJsZVxuICAgIGNvbnN0IGhhc1BlbmRpbmdNZWFzdXJlbWVudHMgPSBpdGVtcy5zb21lKFxuICAgICAgaXRlbSA9PiAhbWVhc3VyZW1lbnRTdG9yZS5oYXMoaXRlbSlcbiAgICApO1xuXG4gICAgLy8gU2hhbGxvdyBjb21wYXJlIGFsbCBpdGVtcywgaWYgYW55IGNoYW5nZSByZWZsb3cgdGhlIGdyaWQuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgLy8gV2UndmUgcmVhY2hlZCB0aGUgZW5kIG9mIG91ciBjdXJyZW50IHByb3BzIGFuZCBldmVyeXRoaW5nIG1hdGNoZXMuXG4gICAgICAvLyBJZiB3ZSBoaXQgdGhpcyBjYXNlIGl0IG1lYW5zIHdlIG5lZWQgdG8gaW5zZXJ0IG5ldyBpdGVtcy5cbiAgICAgIGlmIChzdGF0ZS5pdGVtc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyxcbiAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVzZXQgZ3JpZCBpdGVtcyB3aGVuOlxuICAgICAgaWYgKFxuICAgICAgICAvLyBBbiBpdGVtIG9iamVjdCByZWYgZG9lcyBub3QgbWF0Y2guXG4gICAgICAgIGl0ZW1zW2ldICE9PSBzdGF0ZS5pdGVtc1tpXSB8fFxuICAgICAgICAvLyBPciBsZXNzIGl0ZW1zIHRoYW4gd2UgY3VycmVudGx5IGhhdmUgYXJlIHBhc3NlZCBpbi5cbiAgICAgICAgaXRlbXMubGVuZ3RoIDwgc3RhdGUuaXRlbXMubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzLFxuICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlc2V0IGl0ZW1zIGlmIG5ldyBpdGVtcyBhcnJheSBpcyBlbXB0eS5cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwICYmIHN0YXRlLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMsXG4gICAgICAgIGl0ZW1zLFxuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChoYXNQZW5kaW5nTWVhc3VyZW1lbnRzICE9PSBzdGF0ZS5oYXNQZW5kaW5nTWVhc3VyZW1lbnRzKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgd2UgYWx3YXlzIHVwZGF0ZSBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzLFxuICAgICAgICBpdGVtcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIG51bGwgdG8gaW5kaWNhdGUgbm8gY2hhbmdlIHRvIHN0YXRlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzPFQ+KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jb250YWluZXJIZWlnaHQgPSAwO1xuICAgIHRoaXMuY29udGFpbmVyT2Zmc2V0ID0gMDtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzOiBwcm9wcy5pdGVtcy5zb21lKFxuICAgICAgICBpdGVtID0+ICEhaXRlbSAmJiAhcHJvcHMubWVhc3VyZW1lbnRTdG9yZS5oYXMoaXRlbSlcbiAgICAgICksXG4gICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby11bnVzZWQtc3RhdGVcbiAgICAgIGl0ZW1zOiBwcm9wcy5pdGVtcyxcbiAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGhvb2tzIGFmdGVyIHRoZSBjb21wb25lbnQgbW91bnRzLlxuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcblxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5ncmlkV3JhcHBlclxuICAgICAgPyB0aGlzLmdyaWRXcmFwcGVyLmNsaWVudFdpZHRoXG4gICAgICA6IHRoaXMuc3RhdGUud2lkdGg7XG5cbiAgICB0aGlzLm1lYXN1cmVDb250YWluZXIoKTtcblxuICAgIGxldCB7IHNjcm9sbFRvcCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIgIT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gdGhpcy5zY3JvbGxDb250YWluZXIuZ2V0U2Nyb2xsQ29udGFpbmVyUmVmKCk7XG4gICAgICBpZiAoc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICAgIHNjcm9sbFRvcCA9IGdldFNjcm9sbFBvcyhzY3JvbGxDb250YWluZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kaWQtbW91bnQtc2V0LXN0YXRlXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNjcm9sbFRvcCwgd2lkdGggfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBQcm9wczxUPiwgcHJldlN0YXRlOiBTdGF0ZTxUPikge1xuICAgIGNvbnN0IHsgaXRlbXMsIG1lYXN1cmVtZW50U3RvcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLm1lYXN1cmVDb250YWluZXJBc3luYygpO1xuXG4gICAgaWYgKHByZXZTdGF0ZS53aWR0aCAhPSBudWxsICYmIHRoaXMuc3RhdGUud2lkdGggIT09IHByZXZTdGF0ZS53aWR0aCkge1xuICAgICAgbWVhc3VyZW1lbnRTdG9yZS5yZXNldCgpO1xuICAgIH1cbiAgICAvLyBjYWxjdWxhdGUgd2hldGhlciB3ZSBzdGlsbCBoYXZlIHBlbmRpbmcgbWVhc3VyZW1lbnRzXG4gICAgY29uc3QgaGFzUGVuZGluZ01lYXN1cmVtZW50cyA9IGl0ZW1zLnNvbWUoXG4gICAgICBpdGVtID0+ICEhaXRlbSAmJiAhbWVhc3VyZW1lbnRTdG9yZS5oYXMoaXRlbSlcbiAgICApO1xuICAgIGlmIChcbiAgICAgIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMgfHxcbiAgICAgIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMgIT09IHRoaXMuc3RhdGUuaGFzUGVuZGluZ01lYXN1cmVtZW50cyB8fFxuICAgICAgcHJldlN0YXRlLndpZHRoID09IG51bGxcbiAgICApIHtcbiAgICAgIHRoaXMuaW5zZXJ0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgbGlzdGVuZXJzIHdoZW4gdW5tb3VudGluZy5cbiAgICovXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmluc2VydEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmluc2VydEFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgYXN5bmMgbWV0aG9kcyBhcmUgY2FuY2VsbGVkLlxuICAgIHRoaXMubWVhc3VyZUNvbnRhaW5lckFzeW5jLmNsZWFyVGltZW91dCgpO1xuICAgIHRoaXMuaGFuZGxlUmVzaXplLmNsZWFyVGltZW91dCgpO1xuICAgIHRoaXMudXBkYXRlU2Nyb2xsUG9zaXRpb24uY2xlYXJUaW1lb3V0KCk7XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICB9XG5cbiAgc2V0R3JpZFdyYXBwZXJSZWYgPSAocmVmOiA/SFRNTEVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmdyaWRXcmFwcGVyID0gcmVmO1xuICB9O1xuXG4gIHNldFNjcm9sbENvbnRhaW5lclJlZiA9IChyZWY6ID9TY3JvbGxDb250YWluZXIpID0+IHtcbiAgICB0aGlzLnNjcm9sbENvbnRhaW5lciA9IHJlZjtcbiAgfTtcblxuICBwcm9wczogUHJvcHM8Kj47XG4gIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xuICBjb250YWluZXJPZmZzZXQ6IG51bWJlcjtcbiAgZ3JpZFdyYXBwZXI6ID9IVE1MRWxlbWVudDtcbiAgaW5zZXJ0QW5pbWF0aW9uRnJhbWU6IEFuaW1hdGlvbkZyYW1lSUQ7XG4gIG1lYXN1cmVUaW1lb3V0OiBUaW1lb3V0SUQ7XG4gIHNjcm9sbENvbnRhaW5lcjogP1Njcm9sbENvbnRhaW5lcjtcblxuICAvKipcbiAgICogRGVsYXlzIHJlc2l6ZSBoYW5kbGluZyBpbiBjYXNlIHRoZSBzY3JvbGwgY29udGFpbmVyIGlzIHN0aWxsIGJlaW5nIHJlc2l6ZWQuXG4gICAqL1xuICBoYW5kbGVSZXNpemUgPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgaWYgKHRoaXMuZ3JpZFdyYXBwZXIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogdGhpcy5ncmlkV3JhcHBlci5jbGllbnRXaWR0aCB9KTtcbiAgICB9XG4gIH0sIFJFU0laRV9ERUJPVU5DRSk7XG5cbiAgdXBkYXRlU2Nyb2xsUG9zaXRpb24gPSB0aHJvdHRsZSgoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnNjcm9sbENvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSB0aGlzLnNjcm9sbENvbnRhaW5lci5nZXRTY3JvbGxDb250YWluZXJSZWYoKTtcblxuICAgIGlmICghc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzY3JvbGxUb3A6IGdldFNjcm9sbFBvcyhzY3JvbGxDb250YWluZXIpLFxuICAgIH0pO1xuICB9KTtcblxuICBtZWFzdXJlQ29udGFpbmVyQXN5bmMgPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgdGhpcy5tZWFzdXJlQ29udGFpbmVyKCk7XG4gIH0sIDApO1xuXG4gIG1lYXN1cmVDb250YWluZXIoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsQ29udGFpbmVyICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgc2Nyb2xsQ29udGFpbmVyIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyUmVmID0gc2Nyb2xsQ29udGFpbmVyLmdldFNjcm9sbENvbnRhaW5lclJlZigpO1xuICAgICAgaWYgKHNjcm9sbENvbnRhaW5lclJlZikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lckhlaWdodCA9IGdldEVsZW1lbnRIZWlnaHQoc2Nyb2xsQ29udGFpbmVyUmVmKTtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmdyaWRXcmFwcGVyO1xuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIGNvbnN0IHJlbGF0aXZlU2Nyb2xsVG9wID0gZ2V0UmVsYXRpdmVTY3JvbGxUb3Aoc2Nyb2xsQ29udGFpbmVyUmVmKTtcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lck9mZnNldCA9XG4gICAgICAgICAgICBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyByZWxhdGl2ZVNjcm9sbFRvcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBtZWFzdXJlbWVudHMvcG9zaXRpb25zIGFuZCBmb3JjZSBhIHJlZmxvdyBvZiB0aGUgZW50aXJlIGdyaWQuXG4gICAqIE9ubHkgdXNlIHRoaXMgaWYgYWJzb2x1dGVseSBuZWNlc3NhcnkgLSBleDogV2UgbmVlZCB0byByZWZsb3cgaXRlbXMgaWYgdGhlXG4gICAqIG51bWJlciBvZiBjb2x1bW5zIHdlIHdvdWxkIGRpc3BsYXkgc2hvdWxkIGNoYW5nZSBhZnRlciBhIHJlc2l6ZS5cbiAgICovXG4gIHJlZmxvdygpIHtcbiAgICB0aGlzLnByb3BzLm1lYXN1cmVtZW50U3RvcmUucmVzZXQoKTtcbiAgICB0aGlzLm1lYXN1cmVDb250YWluZXIoKTtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBmZXRjaE1vcmUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBsb2FkSXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGxvYWRJdGVtcyAmJiB0eXBlb2YgbG9hZEl0ZW1zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4gbG9hZEl0ZW1zKHsgZnJvbTogdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGggfSlcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlck1hc29ucnlDb21wb25lbnQgPSAoaXRlbURhdGE6IFQsIGlkeDogbnVtYmVyLCBwb3NpdGlvbjogKikgPT4ge1xuICAgIGNvbnN0IHsgY29tcDogQ29tcG9uZW50LCB2aXJ0dWFsaXplIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0IH0gPSBwb3NpdGlvbjtcblxuICAgIGxldCBpc1Zpc2libGU7XG4gICAgaWYgKHRoaXMucHJvcHMuc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCB2aXJ0dWFsQnVmZmVyID0gdGhpcy5jb250YWluZXJIZWlnaHQgKiBWSVJUVUFMX0JVRkZFUl9GQUNUT1I7XG4gICAgICBjb25zdCBvZmZzZXRTY3JvbGxQb3MgPSB0aGlzLnN0YXRlLnNjcm9sbFRvcCAtIHRoaXMuY29udGFpbmVyT2Zmc2V0O1xuICAgICAgY29uc3Qgdmlld3BvcnRUb3AgPSBvZmZzZXRTY3JvbGxQb3MgLSB2aXJ0dWFsQnVmZmVyO1xuICAgICAgY29uc3Qgdmlld3BvcnRCb3R0b20gPVxuICAgICAgICBvZmZzZXRTY3JvbGxQb3MgKyB0aGlzLmNvbnRhaW5lckhlaWdodCArIHZpcnR1YWxCdWZmZXI7XG5cbiAgICAgIGlzVmlzaWJsZSA9ICEoXG4gICAgICAgIHBvc2l0aW9uLnRvcCArIHBvc2l0aW9uLmhlaWdodCA8IHZpZXdwb3J0VG9wIHx8XG4gICAgICAgIHBvc2l0aW9uLnRvcCA+IHZpZXdwb3J0Qm90dG9tXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBubyBzY3JvbGwgY29udGFpbmVyIGlzIHBhc3NlZCBpbiwgaXRlbXMgc2hvdWxkIGFsd2F5cyBiZSB2aXNpYmxlXG4gICAgICBpc1Zpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1Db21wb25lbnQgPSAoXG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17YGl0ZW0tJHtpZHh9YH1cbiAgICAgICAgY2xhc3NOYW1lPXtbc3R5bGVzLk1hc29ucnlfX0l0ZW0sIHN0eWxlcy5NYXNvbnJ5X19JdGVtX19Nb3VudGVkXS5qb2luKFxuICAgICAgICAgICcgJ1xuICAgICAgICApfVxuICAgICAgICBkYXRhLWdyaWQtaXRlbVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtsZWZ0fXB4KSB0cmFuc2xhdGVZKCR7dG9wfXB4KWAsXG4gICAgICAgICAgV2Via2l0VHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke2xlZnR9cHgpIHRyYW5zbGF0ZVkoJHt0b3B9cHgpYCxcbiAgICAgICAgICB3aWR0aDogbGF5b3V0TnVtYmVyVG9Dc3NEaW1lbnNpb24od2lkdGgpLFxuICAgICAgICAgIGhlaWdodDogbGF5b3V0TnVtYmVyVG9Dc3NEaW1lbnNpb24oaGVpZ2h0KSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbXBvbmVudCBkYXRhPXtpdGVtRGF0YX0gaXRlbUlkeD17aWR4fSBpc01lYXN1cmluZz17ZmFsc2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuIHZpcnR1YWxpemUgPyAoaXNWaXNpYmxlICYmIGl0ZW1Db21wb25lbnQpIHx8IG51bGwgOiBpdGVtQ29tcG9uZW50O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjb2x1bW5XaWR0aCxcbiAgICAgIGNvbXA6IENvbXBvbmVudCxcbiAgICAgIGZsZXhpYmxlLFxuICAgICAgZ3V0dGVyV2lkdGg6IGd1dHRlcixcbiAgICAgIG1lYXN1cmVtZW50U3RvcmUsXG4gICAgICBpdGVtcyxcbiAgICAgIG1pbkNvbHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzLCB3aWR0aCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGxldCBsYXlvdXQ7XG4gICAgaWYgKGZsZXhpYmxlICYmIHdpZHRoICE9PSBudWxsKSB7XG4gICAgICBsYXlvdXQgPSBmdWxsV2lkdGhMYXlvdXQoe1xuICAgICAgICBndXR0ZXIsXG4gICAgICAgIGNhY2hlOiBtZWFzdXJlbWVudFN0b3JlLFxuICAgICAgICBtaW5Db2xzLFxuICAgICAgICBpZGVhbENvbHVtbldpZHRoOiBjb2x1bW5XaWR0aCxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5sYXlvdXQgPT09IFVuaWZvcm1Sb3dMYXlvdXRTeW1ib2wgfHxcbiAgICAgIHRoaXMucHJvcHMubGF5b3V0IGluc3RhbmNlb2YgTGVnYWN5VW5pZm9ybVJvd0xheW91dFxuICAgICkge1xuICAgICAgbGF5b3V0ID0gdW5pZm9ybVJvd0xheW91dCh7XG4gICAgICAgIGNhY2hlOiBtZWFzdXJlbWVudFN0b3JlLFxuICAgICAgICBjb2x1bW5XaWR0aCxcbiAgICAgICAgZ3V0dGVyLFxuICAgICAgICBtaW5Db2xzLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXlvdXQgPSBkZWZhdWx0TGF5b3V0KHtcbiAgICAgICAgY2FjaGU6IG1lYXN1cmVtZW50U3RvcmUsXG4gICAgICAgIGNvbHVtbldpZHRoLFxuICAgICAgICBndXR0ZXIsXG4gICAgICAgIG1pbkNvbHMsXG4gICAgICAgIHdpZHRoLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGdyaWRCb2R5O1xuICAgIGlmICh3aWR0aCA9PSBudWxsICYmIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMpIHtcbiAgICAgIC8vIFdoZW4gaHlyZGF0aW5nIGZyb20gYSBzZXJ2ZXIgcmVuZGVyLCB3ZSBkb24ndCBoYXZlIHRoZSB3aWR0aCBvZiB0aGUgZ3JpZFxuICAgICAgLy8gYW5kIHRoZSBtZWFzdXJlbWVudCBzdG9yZSBpcyBlbXB0eVxuICAgICAgZ3JpZEJvZHkgPSAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5NYXNvbnJ5fVxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMCwgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgIHJlZj17dGhpcy5zZXRHcmlkV3JhcHBlclJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIHtpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtKS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYgLy8ga2VlcCB0aGlzIGluIHN5bmMgd2l0aCByZW5kZXJNYXNvbnJ5Q29tcG9uZW50XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0YXRpY1wiXG4gICAgICAgICAgICAgIGRhdGEtZ3JpZC1pdGVtXG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpJyxcbiAgICAgICAgICAgICAgICBXZWJraXRUcmFuc2Zvcm06ICd0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogZmxleGlibGVcbiAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICA6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKGNvbHVtbldpZHRoKSwgLy8gd2UgY2FuJ3Qgc2V0IGEgd2lkdGggZm9yIHNlcnZlciByZW5kZXJlZCBmbGV4aWJsZSBpdGVtc1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWwgJiYgIWZsZXhpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAvLyBvbmx5IG1lYXN1cmUgZmxleGlibGUgaXRlbXMgb24gY2xpZW50XG4gICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudFN0b3JlLnNldChpdGVtLCBlbC5jbGllbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCBkYXRhPXtpdGVtfSBpdGVtSWR4PXtpfSBpc01lYXN1cmluZz17ZmFsc2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAod2lkdGggPT0gbnVsbCkge1xuICAgICAgLy8gV2hlbiB0aGUgd2lkdGggaXMgZW1wdHkgKHVzdWFsbHkgYWZ0ZXIgYSByZS1tb3VudCkgcmVuZGVyIGFuIGVtcHR5XG4gICAgICAvLyBkaXYgdG8gY29sbGVjdCB0aGUgd2lkdGggZm9yIGxheW91dFxuICAgICAgZ3JpZEJvZHkgPSA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gcmVmPXt0aGlzLnNldEdyaWRXcmFwcGVyUmVmfSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRnVsbCBsYXlvdXQgaXMgcG9zc2libGVcbiAgICAgIGNvbnN0IGl0ZW1zVG9SZW5kZXIgPSBpdGVtcy5maWx0ZXIoXG4gICAgICAgIGl0ZW0gPT4gaXRlbSAmJiBtZWFzdXJlbWVudFN0b3JlLmhhcyhpdGVtKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGl0ZW1zVG9NZWFzdXJlID0gaXRlbXNcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gJiYgIW1lYXN1cmVtZW50U3RvcmUuaGFzKGl0ZW0pKVxuICAgICAgICAuc2xpY2UoMCwgbWluQ29scyk7XG5cbiAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGxheW91dChpdGVtc1RvUmVuZGVyKTtcbiAgICAgIGNvbnN0IG1lYXN1cmluZ1Bvc2l0aW9ucyA9IGxheW91dChpdGVtc1RvTWVhc3VyZSk7XG4gICAgICAvLyBNYXRoLm1heCgpID09PSAtSW5maW5pdHkgd2hlbiB0aGVyZSBhcmUgbm8gcG9zaXRpb25zXG4gICAgICBjb25zdCBoZWlnaHQgPSBwb3NpdGlvbnMubGVuZ3RoXG4gICAgICAgID8gTWF0aC5tYXgoLi4ucG9zaXRpb25zLm1hcChwb3MgPT4gcG9zLnRvcCArIHBvcy5oZWlnaHQpKVxuICAgICAgICA6IDA7XG4gICAgICBncmlkQm9keSA9IChcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHJlZj17dGhpcy5zZXRHcmlkV3JhcHBlclJlZn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYXNvbnJ5fSBzdHlsZT17eyBoZWlnaHQsIHdpZHRoIH19PlxuICAgICAgICAgICAge2l0ZW1zVG9SZW5kZXIubWFwKChpdGVtLCBpKSA9PlxuICAgICAgICAgICAgICB0aGlzLnJlbmRlck1hc29ucnlDb21wb25lbnQoaXRlbSwgaSwgcG9zaXRpb25zW2ldKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1hc29ucnl9IHN0eWxlPXt7IHdpZHRoIH19PlxuICAgICAgICAgICAge2l0ZW1zVG9NZWFzdXJlLm1hcCgoZGF0YSwgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG1lYXN1cmluZ1Bvc2l0aW9uc1tpXTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2BtZWFzdXJpbmctJHtpfWB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogbGF5b3V0TnVtYmVyVG9Dc3NEaW1lbnNpb24ocG9zaXRpb24udG9wKSxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogbGF5b3V0TnVtYmVyVG9Dc3NEaW1lbnNpb24ocG9zaXRpb24ubGVmdCksXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBsYXlvdXROdW1iZXJUb0Nzc0RpbWVuc2lvbihwb3NpdGlvbi53aWR0aCksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogbGF5b3V0TnVtYmVyVG9Dc3NEaW1lbnNpb24ocG9zaXRpb24uaGVpZ2h0KSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnRTdG9yZS5zZXQoZGF0YSwgZWwuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IGRhdGE9e2RhdGF9IGl0ZW1JZHg9e2l9IGlzTWVhc3VyaW5nIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHt0aGlzLnNjcm9sbENvbnRhaW5lciAmJiAoXG4gICAgICAgICAgICA8RmV0Y2hJdGVtc1xuICAgICAgICAgICAgICBjb250YWluZXJIZWlnaHQ9e3RoaXMuY29udGFpbmVySGVpZ2h0fVxuICAgICAgICAgICAgICBmZXRjaE1vcmU9e3RoaXMuZmV0Y2hNb3JlfVxuICAgICAgICAgICAgICBpc0ZldGNoaW5nPXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzRmV0Y2hpbmcgfHwgdGhpcy5zdGF0ZS5oYXNQZW5kaW5nTWVhc3VyZW1lbnRzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgIHNjcm9sbFRvcD17dGhpcy5zdGF0ZS5zY3JvbGxUb3B9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zY3JvbGxDb250YWluZXIgPyAoXG4gICAgICA8U2Nyb2xsQ29udGFpbmVyXG4gICAgICAgIHJlZj17dGhpcy5zZXRTY3JvbGxDb250YWluZXJSZWZ9XG4gICAgICAgIG9uU2Nyb2xsPXt0aGlzLnVwZGF0ZVNjcm9sbFBvc2l0aW9ufVxuICAgICAgICBzY3JvbGxDb250YWluZXI9e3RoaXMucHJvcHMuc2Nyb2xsQ29udGFpbmVyfVxuICAgICAgPlxuICAgICAgICB7Z3JpZEJvZHl9XG4gICAgICA8L1Njcm9sbENvbnRhaW5lcj5cbiAgICApIDogKFxuICAgICAgZ3JpZEJvZHlcbiAgICApO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gvQm94JztcbmltcG9ydCBEaXZpZGVyIGZyb20gJy4uL0RpdmlkZXIvRGl2aWRlcic7XG5pbXBvcnQgSGVhZGluZyBmcm9tICcuLi9IZWFkaW5nL0hlYWRpbmcnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi4vSWNvbkJ1dHRvbi9JY29uQnV0dG9uJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01vZGFsLmNzcyc7XG5pbXBvcnQgYm9yZGVycyBmcm9tICcuLi9Cb3JkZXJzLmNzcyc7XG5pbXBvcnQgYnJlYWtwb2ludHMgZnJvbSAnLi4vYnJlYWtwb2ludHMuanNvbic7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL0NvbG9ycy5jc3MnO1xuaW1wb3J0IGNvbHVtbiBmcm9tICcuLi9Db2x1bW4uY3NzJztcbmltcG9ydCBjdXJzb3IgZnJvbSAnLi4vQ3Vyc29yLmNzcyc7XG5pbXBvcnQgbGF5b3V0IGZyb20gJy4uL0xheW91dC5jc3MnO1xuaW1wb3J0IHdoaXRlc3BhY2UgZnJvbSAnLi4vV2hpdGVzcGFjZS5jc3MnO1xuXG5jb25zdCBTSVpFX1dJRFRIX01BUCA9IHtcbiAgc206IDQxNCxcbiAgbWQ6IDU0NCxcbiAgbGc6IDgwNCxcbn07XG5cbmNvbnN0IEVTQ0FQRV9LRVlfQ09ERSA9IDI3O1xuXG50eXBlIFByb3BzID0ge3xcbiAgYWNjZXNzaWJpbGl0eUNsb3NlTGFiZWw6IHN0cmluZyxcbiAgYWNjZXNzaWJpbGl0eU1vZGFsTGFiZWw6IHN0cmluZyxcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBmb290ZXI/OiBSZWFjdC5Ob2RlLFxuICBoZWFkaW5nOiBzdHJpbmcsXG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZCxcbiAgcm9sZT86ICdhbGVydGRpYWxvZycgfCAnZGlhbG9nJyxcbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyxcbnx9O1xuXG50eXBlIFN0YXRlID0ge1xuICBicmVha3BvaW50OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnLFxuICB3aW5kb3dIZWlnaHQ6ID9udW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGJyZWFrcG9pbnQ6ICd4cycsXG4gICAgd2luZG93SGVpZ2h0OiB1bmRlZmluZWQsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVBhZ2VDbGljayk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZUJyZWFrcG9pbnQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5yZXN0cmljdEZvY3VzLCB0cnVlKTtcbiAgICB0aGlzLnByaW9yRm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHRoaXMudXBkYXRlQnJlYWtwb2ludCgpO1xuICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7IC8vIFByZXZlbnRzIGJhY2tncm91bmQgc2Nyb2xsaW5nXG4gICAgfVxuICAgIGlmICh0aGlzLm1vZGFsICYmIHRoaXMubW9kYWwuZm9jdXMpIHtcbiAgICAgIC8vIENoZWNraW5nIHRoaXMubW9kYWwuZm9jdXMgdG8gYWRkcmVzcyBhIGJ1ZyBpbiBJRTExXG4gICAgICAvLyBUaG91Z2ggdGhlIG1vZGFsIGV4aXN0cywgdGhpcy5tb2RhbC5mb2N1cyBtYXkgYmUgbnVsbFxuICAgICAgLy8gU2VlIGh0dHA6Ly93d3cubWt5b25nLmNvbS9qYXZhc2NyaXB0L2ZvY3VzLWlzLW5vdC13b3JraW5nLWluLWllLXNvbHV0aW9uL1xuICAgICAgdGhpcy5tb2RhbC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVQYWdlQ2xpY2spO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVCcmVha3BvaW50KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMucmVzdHJpY3RGb2N1cywgdHJ1ZSk7XG5cbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnOyAvLyBSZWVuYWJsZXMgYmFja2dyb3VuZCBzY3JvbGxpbmdcbiAgICB9XG4gICAgaWYgKHRoaXMucHJpb3JGb2N1cyAmJiB0aGlzLnByaW9yRm9jdXMuZm9jdXMpIHtcbiAgICAgIC8vIENoZWNraW5nIHRoaXMucHJpb3JGb2N1cy5mb2N1cyB0byBhZGRyZXNzIGEgYnVnIGluIElFMTFcbiAgICAgIHRoaXMucHJpb3JGb2N1cy5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRCcmVha3BvaW50ID0gKCkgPT4ge1xuICAgIGxldCBzaXplID0gJ3hzJztcbiAgICBPYmplY3Qua2V5cyhicmVha3BvaW50cykuZm9yRWFjaChwb2ludCA9PiB7XG4gICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoYnJlYWtwb2ludHNbcG9pbnRdKS5tYXRjaGVzKSB7XG4gICAgICAgIHNpemUgPSBwb2ludDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2l6ZTtcbiAgfTtcblxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uRGlzbWlzcygpO1xuICB9O1xuXG4gIGhhbmRsZVBhZ2VDbGljayA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBpZiAoXG4gICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiBOb2RlICYmXG4gICAgICB0aGlzLmNvbnRhaW5lciAmJlxuICAgICAgdGhpcy5jb250YWluZXIuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgdGhpcy5tb2RhbCAmJlxuICAgICAgIXRoaXMubW9kYWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICkge1xuICAgICAgdGhpcy5oYW5kbGVDbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiB7IGtleUNvZGU6IG51bWJlciB9KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5oYW5kbGVDbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGVCcmVha3BvaW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldEN1cnJlbnRCcmVha3BvaW50KCk7XG4gICAgaWYgKFxuICAgICAgc2l6ZSAhPT0gdGhpcy5zdGF0ZS5icmVha3BvaW50IHx8XG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgIT09IHRoaXMuc3RhdGUud2luZG93SGVpZ2h0XG4gICAgKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYnJlYWtwb2ludDogc2l6ZSwgd2luZG93SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlc3RyaWN0Rm9jdXMgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgaWYgKFxuICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgTm9kZSAmJlxuICAgICAgdGhpcy5tb2RhbCAmJlxuICAgICAgIXRoaXMubW9kYWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICkge1xuICAgICAgdGhpcy5tb2RhbC5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBjb250YWluZXI6ID9IVE1MRWxlbWVudDtcbiAgbW9kYWw6ID9IVE1MRWxlbWVudDtcbiAgcHJpb3JGb2N1czogP0hUTUxFbGVtZW50O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhY2Nlc3NpYmlsaXR5Q2xvc2VMYWJlbCxcbiAgICAgIGFjY2Vzc2liaWxpdHlNb2RhbExhYmVsLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBmb290ZXIsXG4gICAgICBoZWFkaW5nLFxuICAgICAgcm9sZSA9ICdkaWFsb2cnLFxuICAgICAgc2l6ZSA9ICdzbScsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgd2lkdGggPSBTSVpFX1dJRFRIX01BUFtzaXplXTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IFtcbiAgICAgIGxheW91dC5maXhlZCxcbiAgICAgIGxheW91dC5ib3JkZXJCb3gsXG4gICAgICBsYXlvdXQuZmxleCxcbiAgICAgIGxheW91dC5qdXN0aWZ5Q2VudGVyLFxuICAgICAgbGF5b3V0LmxlZnQwLFxuICAgICAgbGF5b3V0LnRvcDAsXG4gICAgXTtcbiAgICBjb25zdCBjb250YWluZXJDbGFzc2VzID1cbiAgICAgIHRoaXMuc3RhdGUuYnJlYWtwb2ludCA9PT0gJ3hzJ1xuICAgICAgICA/IGNsYXNzbmFtZXMoY29udGFpbmVyLCBsYXlvdXQuaXRlbXNFbmQsIGxheW91dC5ib3R0b20wLCBjb2x1bW4ueHNDb2wxMilcbiAgICAgICAgOiBjbGFzc25hbWVzKFxuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgbGF5b3V0Lml0ZW1zQ2VudGVyLFxuICAgICAgICAgICAgY29sdW1uLnhzQ29sMTIsXG4gICAgICAgICAgICBzdHlsZXMuY29udGFpbmVyXG4gICAgICAgICAgKTtcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBbbGF5b3V0LmZpdCwgbGF5b3V0LnJlbGF0aXZlXTtcbiAgICBjb25zdCB3cmFwcGVyQ2xhc3NlcyA9XG4gICAgICB0aGlzLnN0YXRlLmJyZWFrcG9pbnQgPT09ICd4cydcbiAgICAgICAgPyBjbGFzc25hbWVzKHdyYXBwZXIsIGNvbG9ycy53aGl0ZUJnLCB3aGl0ZXNwYWNlLm0wLCBsYXlvdXQuc2VsZkVuZClcbiAgICAgICAgOiBjbGFzc25hbWVzKHdyYXBwZXIsIGNvbG9ycy53aGl0ZUJnLCBib3JkZXJzLnJvdW5kZWQsIHN0eWxlcy53cmFwcGVyKTtcblxuICAgIGNvbnN0IG92ZXJsYXkgPSBbXG4gICAgICBsYXlvdXQuYWJzb2x1dGUsXG4gICAgICBsYXlvdXQubGVmdDAsXG4gICAgICBsYXlvdXQudG9wMCxcbiAgICAgIGN1cnNvci56b29tT3V0LFxuICAgIF07XG4gICAgY29uc3Qgb3ZlcmxheUNsYXNzZXMgPSBjbGFzc25hbWVzKFxuICAgICAgb3ZlcmxheSxcbiAgICAgIHN0eWxlcy5vdmVybGF5LFxuICAgICAgY29sb3JzLmRhcmtHcmF5QmcsXG4gICAgICBjb2x1bW4ueHNDb2wxMlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBhcmlhLWxhYmVsPXthY2Nlc3NpYmlsaXR5TW9kYWxMYWJlbH1cbiAgICAgICAgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc2VzfVxuICAgICAgICByZWY9e2MgPT4ge1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gYztcbiAgICAgICAgfX1cbiAgICAgICAgcm9sZT17cm9sZX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e292ZXJsYXlDbGFzc2VzfSAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXt3cmFwcGVyQ2xhc3Nlc31cbiAgICAgICAgICByZWY9e2MgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RhbCA9IGM7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGggfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIG1heEhlaWdodD1cIjkwdmhcIlxuICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICB4cz17eyBkaXNwbGF5OiAnZmxleENvbHVtbicgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IGZpdD5cbiAgICAgICAgICAgICAge3JvbGUgPT09ICdkaWFsb2cnID8gKFxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgX19zdHlsZTogeyBwYWRkaW5nTGVmdDogNTAsIHBhZGRpbmdSaWdodDogNTAgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nWT17NX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwieHNcIiBhY2Nlc3NpYmlsaXR5TGV2ZWw9ezF9PlxuICAgICAgICAgICAgICAgICAgICB7aGVhZGluZ31cbiAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgcGFkZGluZz17NH0+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwic21cIiBhY2Nlc3NpYmlsaXR5TGV2ZWw9ezF9PlxuICAgICAgICAgICAgICAgICAgICB7aGVhZGluZ31cbiAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge3JvbGUgPT09ICdkaWFsb2cnICYmIChcbiAgICAgICAgICAgICAgICA8Qm94IHBhZGRpbmc9ezJ9IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiB0b3AgcmlnaHQ+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2FjY2Vzc2liaWxpdHlDbG9zZUxhYmVsfVxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtyb2xlID09PSAnZGlhbG9nJyAmJiA8RGl2aWRlciAvPn1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBmbGV4PVwiZ3Jvd1wiIG92ZXJmbG93PVwiYXV0b1wiIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94IGZpdD5cbiAgICAgICAgICAgICAge2Zvb3RlciAmJiAoXG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgIHtyb2xlID09PSAnZGlhbG9nJyAmJiA8RGl2aWRlciAvPn1cbiAgICAgICAgICAgICAgICAgIDxCb3ggcGFkZGluZz17NH0+e2Zvb3Rlcn08L0JveD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTW9kYWwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGFjY2Vzc2liaWxpdHlDbG9zZUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGZvb3RlcjogUHJvcFR5cGVzLm5vZGUsXG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYWNjZXNzaWJpbGl0eU1vZGFsTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb25EaXNtaXNzOiBQcm9wVHlwZXMuZnVuYyxcbiAgcm9sZTogUHJvcFR5cGVzLm9uZU9mKFsnYWxlcnRkaWFsb2cnLCAnZGlhbG9nJ10pLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbScsICdtZCcsICdsZyddKSxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94L0JveCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHVsc2FyLmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhdXNlZD86IGJvb2xlYW4sXG4gIHNpemU/OiBudW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdWxzYXIocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgcGF1c2VkLCBzaXplID0gMTM1IH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgX19zdHlsZToge1xuICAgICAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiBwYXVzZWQgPyAwIDogJ2luZmluaXRlJyxcbiAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgICAgZGlzcGxheT17cGF1c2VkID8gJ25vbmUnIDogJ2Jsb2NrJ31cbiAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgd2lkdGg9e3NpemV9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lckNpcmNsZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3V0ZXJDaXJjbGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuUHVsc2FyLnByb3BUeXBlcyA9IHtcbiAgcGF1c2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1JhZGlvQnV0dG9uLmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGVja2VkPzogYm9vbGVhbixcbiAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICBpZDogc3RyaW5nLFxuICBuYW1lPzogc3RyaW5nLFxuICBvbkNoYW5nZTogKHtcbiAgICBldmVudDogU3ludGhldGljSW5wdXRFdmVudDw+LFxuICAgIGNoZWNrZWQ6IGJvb2xlYW4sXG4gIH0pID0+IHZvaWQsXG4gIHZhbHVlOiBzdHJpbmcsXG4gIHNpemU/OiAnc20nIHwgJ21kJyxcbnx9O1xuXG50eXBlIFN0YXRlID0ge3xcbiAgZm9jdXNlZDogYm9vbGVhbixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpb0J1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc20nLCAnbWQnXSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc2l6ZTogJ21kJyxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBmb2N1c2VkOiBmYWxzZSxcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8PikgPT4ge1xuICAgIGNvbnN0IHsgY2hlY2tlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBjaGVja2VkLCBldmVudCB9KTtcbiAgfTtcblxuICBoYW5kbGVCbHVyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IGZhbHNlIH0pO1xuICBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogdHJ1ZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGVja2VkLCBkaXNhYmxlZCwgaWQsIG5hbWUsIHNpemUsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuUmFkaW9CdXR0b24sIHtcbiAgICAgICAgICBbc3R5bGVzLlJhZGlvQnV0dG9uSXNGb2N1c2VkXTogdGhpcy5zdGF0ZS5mb2N1c2VkLFxuICAgICAgICAgIFtzdHlsZXMuUmFkaW9CdXR0b25TbV06IHNpemUgPT09ICdzbScsXG4gICAgICAgICAgW3N0eWxlcy5SYWRpb0J1dHRvbk1kXTogc2l6ZSA9PT0gJ21kJyxcbiAgICAgICAgICBbc3R5bGVzLlJhZGlvQnV0dG9uV2hpdGVCZ106ICFkaXNhYmxlZCB8fCBjaGVja2VkLFxuICAgICAgICAgIFtzdHlsZXMuUmFkaW9CdXR0b25MaWdodEdyYXlCZ106IGRpc2FibGVkICYmICFjaGVja2VkLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLklucHV0LCB7XG4gICAgICAgICAgICBbc3R5bGVzLklucHV0RW5hYmxlZF06ICFkaXNhYmxlZCxcbiAgICAgICAgICAgIFtzdHlsZXMuSW5wdXRTbV06IHNpemUgPT09ICdzbScsXG4gICAgICAgICAgICBbc3R5bGVzLklucHV0TWRdOiBzaXplID09PSAnbWQnLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgLz5cbiAgICAgICAge2NoZWNrZWQgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuQ2hlY2ssIHtcbiAgICAgICAgICAgICAgW3N0eWxlcy5DaGVja1NtXTogc2l6ZSA9PT0gJ3NtJyxcbiAgICAgICAgICAgICAgW3N0eWxlcy5DaGVja01kXTogc2l6ZSA9PT0gJ21kJyxcbiAgICAgICAgICAgICAgW3N0eWxlcy5DaGVja0VuYWJsZWRdOiAhZGlzYWJsZWQsXG4gICAgICAgICAgICAgIFtzdHlsZXMuQ2hlY2tEaXNhYmxlZF06IGRpc2FibGVkLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZldGNoSXRlbXMgZnJvbSAnLi9GZXRjaEl0ZW1zJztcbmltcG9ydCBTY3JvbGxDb250YWluZXIgZnJvbSAnLi9TY3JvbGxDb250YWluZXInO1xuaW1wb3J0IHsgZ2V0RWxlbWVudEhlaWdodCwgZ2V0U2Nyb2xsSGVpZ2h0LCBnZXRTY3JvbGxQb3MgfSBmcm9tICcuL3Njcm9sbFV0aWxzJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuLi90aHJvdHRsZSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNvbnRhaW5lcj86IEhUTUxFbGVtZW50LFxuICBpc0F0RW5kPzogYm9vbGVhbixcbiAgaXNGZXRjaGluZzogYm9vbGVhbixcbiAgZmV0Y2hNb3JlPzogRnVuY3Rpb24sXG4gIHJlbmRlckhlaWdodD86ICgpID0+IG51bWJlcixcbn07XG5cbnR5cGUgU3RhdGUgPSB7XG4gIGNvbnRhaW5lckhlaWdodDogbnVtYmVyLFxuICBzY3JvbGxIZWlnaHQ6IG51bWJlcixcbiAgc2Nyb2xsVG9wOiBudW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxGZXRjaCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IHt9O1xuXG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICBjb250YWluZXJIZWlnaHQ6IDAsXG4gICAgc2Nyb2xsSGVpZ2h0OiAwLFxuICAgIHNjcm9sbFRvcDogMCxcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBzY3JvbGwgbGlzdGVuZXIgYWZ0ZXIgdGhlIGNvbXBvbmVudCBtb3VudHMuXG4gICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250YWluZXJIZWlnaHQ6IGdldEVsZW1lbnRIZWlnaHQoY29udGFpbmVyKSxcbiAgICAgICAgLi4udGhpcy5nZXRTY3JvbGxTdGF0ZSgpLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHNjcm9sbCBidWZmZXIgYW5kIGNoZWNrIGFmdGVyIHRoZSBjb21wb25lbnQgdXBkYXRlcy5cbiAgICovXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAvLyBzZXRUaW1lb3V0IHNvIHRoZSBwYXJlbnQgY29tcG9uZW50IGNhbiBjYWxjdWxhdGUgcmVuZGVySGVpZ2h0KCkuXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNjcm9sbGFibGUgY29udGVudCBoZWlnaHQuXG4gICAqL1xuICBnZXRTY3JvbGxIZWlnaHQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0U2Nyb2xsSGVpZ2h0KGNvbnRhaW5lcik7XG4gIH07XG5cbiAgZ2V0U2Nyb2xsU3RhdGUoKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIHJlbmRlckhlaWdodCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHJlbmRlckhlaWdodCB8fCB0aGlzLmdldFNjcm9sbEhlaWdodDtcblxuICAgIHJldHVybiB7XG4gICAgICBzY3JvbGxIZWlnaHQ6IHNjcm9sbEhlaWdodCgpLFxuICAgICAgc2Nyb2xsVG9wOiBnZXRTY3JvbGxQb3MoY29udGFpbmVyKSxcbiAgICB9O1xuICB9XG5cbiAgc2Nyb2xsQnVmZmVyOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYWRkaXRpb25hbCBpdGVtcyBpZiBuZWVkZWQuXG4gICAqL1xuICB1cGRhdGVQb3NpdGlvbiA9IHRocm90dGxlKCgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U2Nyb2xsU3RhdGUoKSk7XG4gIH0pO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBzY3JvbGxUb3AgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGZldGNoTW9yZSwgaXNBdEVuZCwgaXNGZXRjaGluZyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgY29udGFpbmVySGVpZ2h0LFxuICAgICAgZmV0Y2hNb3JlLFxuICAgICAgaXNBdEVuZCxcbiAgICAgIGlzRmV0Y2hpbmcsXG4gICAgICBzY3JvbGxIZWlnaHQsXG4gICAgICBzY3JvbGxUb3AsXG4gICAgfTtcblxuICAgIGlmICghY29udGFpbmVyIHx8IGlzQXRFbmQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFNjcm9sbENvbnRhaW5lclxuICAgICAgICBvblNjcm9sbD17dGhpcy51cGRhdGVQb3NpdGlvbn1cbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyPXtjb250YWluZXJ9XG4gICAgICA+XG4gICAgICAgIDxGZXRjaEl0ZW1zIHsuLi5wcm9wc30gLz5cbiAgICAgIDwvU2Nyb2xsQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuU2Nyb2xsRmV0Y2gucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIHNjcm9sbCBjb250YWluZXIgdG8gdXNlLiBEZWZhdWx0cyB0byB3aW5kb3cuXG4gICAqL1xuICBjb250YWluZXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIH0pLFxuICByZW5kZXJIZWlnaHQ6IFByb3BUeXBlcy5mdW5jLFxuICBpc0F0RW5kOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNGZXRjaGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGZldGNoTW9yZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5TY3JvbGxGZXRjaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRhaW5lcjogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBudWxsLFxufTtcbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VhcmNoRmllbGQuY3NzJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94L0JveCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uL0ljb24nO1xuXG50eXBlIFByb3BzID0ge3xcbiAgYWNjZXNzaWJpbGl0eUxhYmVsOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcsXG4gIG9uQmx1cj86ICh7IGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PiB9KSA9PiB2b2lkLFxuICBvbkNoYW5nZTogKHtcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIHN5bnRoZXRpY0V2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcbiAgfSkgPT4gdm9pZCxcbiAgb25Gb2N1cz86ICh7XG4gICAgdmFsdWU6IHN0cmluZyxcbiAgICBzeW50aGV0aWNFdmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXG4gIH0pID0+IHZvaWQsXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxuICB2YWx1ZT86IHN0cmluZyxcbnx9O1xuXG50eXBlIFN0YXRlID0ge3xcbiAgZm9jdXNlZDogYm9vbGVhbixcbiAgaG92ZXJlZDogYm9vbGVhbixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY2Nlc3NpYmlsaXR5TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgIGhvdmVyZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgIHZhbHVlOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgICAgc3ludGhldGljRXZlbnQ6IGV2ZW50LFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNsZWFyID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgc3ludGhldGljRXZlbnQ6IGV2ZW50LFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogdHJ1ZSB9KTtcbiAgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiBmYWxzZSB9KTtcbiAgaGFuZGxlRm9jdXMgPSAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IHRydWUgfSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRm9jdXMoe1xuICAgICAgICB2YWx1ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgc3ludGhldGljRXZlbnQ6IGV2ZW50LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBoYW5kbGVCbHVyID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiBmYWxzZSB9KTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoeyBldmVudCB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWNjZXNzaWJpbGl0eUxhYmVsLCBpZCwgcGxhY2Vob2xkZXIsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gVGhpcyBtaXJyb3JzIHRoZSBidWlsdCBpbiBicm93c2VyIGJlaGF2aW9yLiBJZiB0aGVyZSdzIGEgdmFsdWUsIHNob3cgdGhlXG4gICAgLy8gY2xlYXIgYnV0dG9uIGlmIHlvdSdyZSBob3ZlcmluZyBvciBpZiB5b3UndmUgZm9jdXNlZCBvbiB0aGUgZmllbGRcbiAgICBjb25zdCBzaG93Q2xlYXIgPVxuICAgICAgKHRoaXMuc3RhdGUuZm9jdXNlZCB8fCB0aGlzLnN0YXRlLmhvdmVyZWQpICYmIHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxuICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7XG4gICAgICAgICAgICBfX3N0eWxlOiB7XG4gICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgLy8gQWRkZWQgdGhlIGZvbGxvd2luZyBsaW5lcyBmb3IgU2FmYXJpIHN1cHBvcnRcbiAgICAgICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgbGVmdFxuICAgICAgICAgIHBhZGRpbmdYPXs0fVxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gaWNvbj1cInNlYXJjaFwiIGFjY2Vzc2liaWxpdHlMYWJlbD1cIlwiIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBhcmlhLWxhYmVsPXthY2Nlc3NpYmlsaXR5TGFiZWx9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgcm9sZT1cInNlYXJjaGJveFwiXG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAvPlxuICAgICAgICB7c2hvd0NsZWFyICYmIChcbiAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiByaWdodCB0b3A+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsZWFyfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsZWFyfVxuICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvbiBpY29uPVwiY2xlYXJcIiBhY2Nlc3NpYmlsaXR5TGFiZWw9XCJcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gvQm94JztcbmltcG9ydCBUZXh0IGZyb20gJy4uL1RleHQvVGV4dCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VnbWVudGVkQ29udHJvbC5jc3MnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgaXRlbXM6IEFycmF5PFJlYWN0Lk5vZGU+LFxuICBvbkNoYW5nZTogKHsgZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8PiwgYWN0aXZlSW5kZXg6IG51bWJlciB9KSA9PiB2b2lkLFxuICBzZWxlY3RlZEl0ZW1JbmRleDogbnVtYmVyLFxuICBzaXplPzogJ21kJyB8ICdsZycsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VnbWVudGVkQ29udHJvbChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBpdGVtcywgb25DaGFuZ2UsIHNlbGVjdGVkSXRlbUluZGV4LCBzaXplID0gJ21kJyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5TZWdtZW50ZWRDb250cm9sLCB7XG4gICAgICAgIFtzdHlsZXMubWRdOiBzaXplID09PSAnbWQnLFxuICAgICAgICBbc3R5bGVzLmxnXTogc2l6ZSA9PT0gJ2xnJyxcbiAgICAgIH0pfVxuICAgICAgcm9sZT1cInRhYmxpc3RcIlxuICAgID5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGkgPT09IHNlbGVjdGVkSXRlbUluZGV4O1xuICAgICAgICBjb25zdCBjcyA9IGNsYXNzbmFtZXMoc3R5bGVzLml0ZW0sIHtcbiAgICAgICAgICBbc3R5bGVzLml0ZW1Jc05vdFNlbGVjdGVkXTogIWlzU2VsZWN0ZWQsXG4gICAgICAgICAgW3N0eWxlcy5pdGVtSXNTZWxlY3RlZF06IGlzU2VsZWN0ZWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NzfVxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBvbkNoYW5nZSh7IGV2ZW50OiBlLCBhY3RpdmVJbmRleDogaSB9KX1cbiAgICAgICAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgYm9sZFxuICAgICAgICAgICAgICAgIGNvbG9yPXtpc1NlbGVjdGVkID8gJ2RhcmtHcmF5JyA6ICdncmF5J31cbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblNlZ21lbnRlZENvbnRyb2wucHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZEl0ZW1JbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQm94IGZyb20gJy4uL0JveC9Cb3gnO1xuaW1wb3J0IEVycm9yRmx5b3V0IGZyb20gJy4uL0Vycm9yRmx5b3V0L0Vycm9yRmx5b3V0JztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24vSWNvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VsZWN0TGlzdC5jc3MnO1xuXG50eXBlIFN0YXRlID0ge1xuICBmb2N1c2VkOiBib29sZWFuLFxuICBlcnJvcklzT3BlbjogYm9vbGVhbixcbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nLFxufTtcblxudHlwZSBQcm9wcyA9IHt8XG4gIGVycm9yTWVzc2FnZT86IHN0cmluZyxcbiAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICBpZDogc3RyaW5nLFxuICBpZGVhbEVycm9yRGlyZWN0aW9uPzogJ3VwJyB8ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcgLyogZGVmYXVsdDogcmlnaHQgKi8sXG4gIG5hbWU/OiBzdHJpbmcsXG4gIG9uQ2hhbmdlOiAoeyBldmVudDogU3ludGhldGljSW5wdXRFdmVudDw+LCB2YWx1ZTogc3RyaW5nIH0pID0+IHZvaWQsXG4gIG9wdGlvbnM6IEFycmF5PHtcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIHZhbHVlOiBzdHJpbmcsXG4gIH0+LFxuICBwbGFjZWhvbGRlcj86IHN0cmluZyxcbiAgdmFsdWU/OiA/c3RyaW5nLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGVycm9yTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlkZWFsRXJyb3JEaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5leGFjdCh7XG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB9KVxuICAgICksXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaWRlYWxFcnJvckRpcmVjdGlvbjogJ3JpZ2h0JyxcbiAgICBvcHRpb25zOiBbXSxcbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XG4gICAgaWYgKHByb3BzLmVycm9yTWVzc2FnZSAhPT0gc3RhdGUuZXJyb3JNZXNzYWdlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcklzT3BlbjogISFwcm9wcy5lcnJvck1lc3NhZ2UsXG4gICAgICAgIGVycm9yTWVzc2FnZTogcHJvcHMuZXJyb3JNZXNzYWdlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgIGVycm9ySXNPcGVuOiBmYWxzZSxcbiAgfTtcblxuICBzZWxlY3Q6ID9IVE1MU2VsZWN0RWxlbWVudDtcblxuICBoYW5kbGVPbkNoYW5nZSA9IChldmVudDogU3ludGhldGljSW5wdXRFdmVudDw+KSA9PiB7XG4gICAgaWYgKFxuICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQgJiZcbiAgICAgIHRoaXMucHJvcHMudmFsdWUgIT09IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IGV2ZW50LCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5lcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ySXNPcGVuOiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5lcnJvck1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcklzT3BlbjogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUZvY3VzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmVycm9yTWVzc2FnZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ySXNPcGVuOiB0cnVlIH0pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQsXG4gICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICBpZCxcbiAgICAgIGlkZWFsRXJyb3JEaXJlY3Rpb24sXG4gICAgICBuYW1lLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgdmFsdWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhcbiAgICAgIHN0eWxlcy5zZWxlY3QsXG4gICAgICBkaXNhYmxlZCA/IHN0eWxlcy5kaXNhYmxlZCA6IHN0eWxlcy5lbmFibGVkLFxuICAgICAgZXJyb3JNZXNzYWdlID8gc3R5bGVzLmVycm9yZWQgOiBzdHlsZXMubm9ybWFsXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGNvbG9yPXtkaXNhYmxlZCA/ICdsaWdodEdyYXknIDogJ3doaXRlJ31cbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17eyBfX3N0eWxlOiB7IGJvcmRlclJhZGl1czogNCB9IH19XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBib3R0b21cbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7XG4gICAgICAgICAgICBfX3N0eWxlOiB7IHBhZGRpbmdSaWdodDogMTQsIHBhZGRpbmdUb3A6IDIgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICByaWdodFxuICAgICAgICAgIHRvcFxuICAgICAgICA+XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGljb249XCJhcnJvdy1kb3duXCJcbiAgICAgICAgICAgIHNpemU9ezEyfVxuICAgICAgICAgICAgY29sb3I9e2Rpc2FibGVkID8gJ2dyYXknIDogJ2RhcmtHcmF5J31cbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD1cIlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSAmJiB0aGlzLnN0YXRlLmZvY3VzZWQgPyBgJHtpZH0tZ2VzdGFsdC1lcnJvcmAgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAgIGFyaWEtaW52YWxpZD17ZXJyb3JNZXNzYWdlID8gJ3RydWUnIDogJ2ZhbHNlJ31cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgcmVmPXtjID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ID0gYztcbiAgICAgICAgICB9fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwbGFjZWhvbGRlciAmJlxuICAgICAgICAgICAgIXZhbHVlICYmIChcbiAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCBkaXNhYmxlZCB2YWx1ZSBoaWRkZW4+XG4gICAgICAgICAgICAgICAge3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAge29wdGlvbnMubWFwKG9wdGlvbiA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cbiAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAge2Vycm9yTWVzc2FnZSAmJlxuICAgICAgICAgIHRoaXMuc3RhdGUuZXJyb3JJc09wZW4gJiYgKFxuICAgICAgICAgICAgPEVycm9yRmx5b3V0XG4gICAgICAgICAgICAgIGFuY2hvcj17dGhpcy5zZWxlY3R9XG4gICAgICAgICAgICAgIGlkPXtgJHtpZH0tZ2VzdGFsdC1lcnJvcmB9XG4gICAgICAgICAgICAgIGlkZWFsRGlyZWN0aW9uPXtpZGVhbEVycm9yRGlyZWN0aW9ufVxuICAgICAgICAgICAgICBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVycm9ySXNPcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gvQm94JztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24vSWNvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3Bpbm5lci5jc3MnO1xuXG5jb25zdCBTSVpFID0gNDA7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhY2Nlc3NpYmlsaXR5TGFiZWw6IHN0cmluZyxcbiAgc2hvdzogYm9vbGVhbixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGlubmVyKHsgYWNjZXNzaWJpbGl0eUxhYmVsLCBzaG93IH06IFByb3BzKSB7XG4gIHJldHVybiBzaG93ID8gKFxuICAgIDxCb3ggeHM9e3sgZGlzcGxheTogJ2ZsZXgnIH19IGp1c3RpZnlDb250ZW50PVwiYXJvdW5kXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgaWNvbj1cImtub29wXCJcbiAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2FjY2Vzc2liaWxpdHlMYWJlbH1cbiAgICAgICAgICBzaXplPXtTSVpFfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICkgOiAoXG4gICAgPGRpdiAvPlxuICApO1xufVxuXG5TcGlubmVyLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgYWNjZXNzaWJpbGl0eUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBsYXlvdXQgZnJvbSAnLi4vTGF5b3V0LmNzcyc7XG5cbnR5cGUgVGhyZXNob2xkID1cbiAgfCB7fCB0b3A6IG51bWJlciB8IHN0cmluZyB8fVxuICB8IHt8IGJvdHRvbTogbnVtYmVyIHwgc3RyaW5nIHx9XG4gIHwge3wgbGVmdDogbnVtYmVyIHwgc3RyaW5nIHx9XG4gIHwge3wgcmlnaHQ6IG51bWJlciB8IHN0cmluZyB8fVxuICB8IHt8IHRvcDogbnVtYmVyIHwgc3RyaW5nLCBib3R0b206IG51bWJlciB8IHN0cmluZyB8fVxuICB8IHt8IGxlZnQ6IG51bWJlciB8IHN0cmluZywgcmlnaHQ6IG51bWJlciB8IHN0cmluZyB8fVxuICB8IHt8XG4gICAgICB0b3A6IG51bWJlciB8IHN0cmluZyxcbiAgICAgIGxlZnQ6IG51bWJlciB8IHN0cmluZyxcbiAgICAgIHJpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgICBib3R0b206IG51bWJlciB8IHN0cmluZyxcbiAgICB8fTtcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNoaWxkcmVuOiBSZWFjdC5Ob2RlLFxuICBkYW5nZXJvdXNseVNldFpJbmRleD86IHsgX196SW5kZXg6IG51bWJlciB9LFxuICAuLi5UaHJlc2hvbGQsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RpY2t5KHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGRhbmdlcm91c2x5U2V0WkluZGV4ID0geyBfX3pJbmRleDogMSB9LCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHRvcDogcHJvcHMudG9wICE9IG51bGwgPyBwcm9wcy50b3AgOiB1bmRlZmluZWQsXG4gICAgbGVmdDogcHJvcHMubGVmdCAhPSBudWxsID8gcHJvcHMubGVmdCA6IHVuZGVmaW5lZCxcbiAgICByaWdodDogcHJvcHMucmlnaHQgIT0gbnVsbCA/IHByb3BzLnJpZ2h0IDogdW5kZWZpbmVkLFxuICAgIGJvdHRvbTogcHJvcHMuYm90dG9tICE9IG51bGwgPyBwcm9wcy5ib3R0b20gOiB1bmRlZmluZWQsXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgekluZGV4OiBkYW5nZXJvdXNseVNldFpJbmRleC5fX3pJbmRleCxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17bGF5b3V0LnN0aWNreX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuU3RpY2t5LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBkYW5nZXJvdXNseVNldFpJbmRleDogUHJvcFR5cGVzLmV4YWN0KHtcbiAgICBfX3pJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIHRvcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBsZWZ0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGJvdHRvbTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICByaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3dpdGNoLmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gIGlkOiBzdHJpbmcsXG4gIG5hbWU/OiBzdHJpbmcsXG4gIG9uQ2hhbmdlOiAoeyBldmVudDogU3ludGhldGljSW5wdXRFdmVudDw+LCB2YWx1ZTogYm9vbGVhbiB9KSA9PiB2b2lkLFxuICBzd2l0Y2hlZD86IGJvb2xlYW4sXG58fTtcblxudHlwZSBTdGF0ZSA9IHt8XG4gIGZvY3VzZWQ6IGJvb2xlYW4sXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpdGNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc3dpdGNoZWQ6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHN3aXRjaGVkOiBmYWxzZSxcbiAgfTtcblxuICBzdGF0ZTogU3RhdGUgPSB7XG4gICAgZm9jdXNlZDogZmFsc2UsXG4gIH07XG5cbiAgaGFuZGxlQmx1ciA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiBmYWxzZSB9KTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8PikgPT4ge1xuICAgIGNvbnN0IHsgY2hlY2tlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgZXZlbnQsXG4gICAgICB2YWx1ZTogY2hlY2tlZCxcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogdHJ1ZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCwgaWQsIG5hbWUsIHN3aXRjaGVkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qgc3dpdGNoU3R5bGVzID0gY2xhc3NuYW1lcyhcbiAgICAgIHN0eWxlcy5zd2l0Y2gsXG4gICAgICB7XG4gICAgICAgIFtzdHlsZXMuZm9jdXNlZF06IHRoaXMuc3RhdGUuZm9jdXNlZCxcbiAgICAgIH0sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgIGRpc2FibGVkXG4gICAgICAgID8gc3dpdGNoZWQgPyBzdHlsZXMuc3dpdGNoR3JheSA6IHN0eWxlcy5zd2l0Y2hMaWdodEdyYXlcbiAgICAgICAgOiBzd2l0Y2hlZCA/IHN0eWxlcy5zd2l0Y2hEYXJrR3JheSA6IHN0eWxlcy5zd2l0Y2hXaGl0ZVxuICAgICk7XG5cbiAgICBjb25zdCBzbGlkZXJTdHlsZXMgPSBjbGFzc25hbWVzKFxuICAgICAgc3R5bGVzLnNsaWRlcixcbiAgICAgIHN3aXRjaGVkID8gc3R5bGVzLnNsaWRlclJpZ2h0IDogc3R5bGVzLnNsaWRlckxlZnQsXG4gICAgICBzd2l0Y2hlZCAmJiAhZGlzYWJsZWQgPyBzdHlsZXMuc2xpZGVyRGFyayA6IHN0eWxlcy5zbGlkZXJMaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBpbnB1dFN0eWxlcyA9IGNsYXNzbmFtZXMoc3R5bGVzLmNoZWNrYm94LCB7XG4gICAgICBbc3R5bGVzLmNoZWNrYm94RW5hYmxlZF06ICFkaXNhYmxlZCxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3dpdGNoU3R5bGVzfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2hlY2tlZD17c3dpdGNoZWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dFN0eWxlc31cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NsaWRlclN0eWxlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0L1RleHQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RhYnMuY3NzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFjdGl2ZVRhYkluZGV4OiBudW1iZXIsXG4gIHRhYnM6IEFycmF5PHt8XG4gICAgdGV4dDogYW55LFxuICAgIGhyZWY6IHN0cmluZyxcbiAgfH0+LFxuICBvbkNoYW5nZTogKHtcbiAgICBldmVudDogU3ludGhldGljTW91c2VFdmVudDw+LFxuICAgIGFjdGl2ZVRhYkluZGV4OiBudW1iZXIsXG4gIH0pID0+IHZvaWQsXG58fTtcblxudHlwZSBTdGF0ZSA9IHt8XG4gIGZvY3VzZWRUYWJJbmRleDogP251bWJlcixcbiAgaG92ZXJlZFRhYkluZGV4OiA/bnVtYmVyLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZlVGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0YWJzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5leGFjdCh7XG4gICAgICAgIHRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICAgICAgICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgfSlcbiAgICApLmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGZvY3VzZWRUYWJJbmRleDogdW5kZWZpbmVkLFxuICAgIGhvdmVyZWRUYWJJbmRleDogdW5kZWZpbmVkLFxuICB9O1xuXG4gIGhhbmRsZVRhYkNsaWNrID0gKGk6IG51bWJlciwgZTogU3ludGhldGljTW91c2VFdmVudDw+KSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvbkNoYW5nZSh7IGFjdGl2ZVRhYkluZGV4OiBpLCBldmVudDogZSB9KTtcbiAgfTtcblxuICBoYW5kbGVUYWJGb2N1cyA9IChpOiBudW1iZXIpID0+IHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkVGFiSW5kZXg6IGkgfSk7XG4gIGhhbmRsZVRhYkJsdXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZFRhYkluZGV4OiB1bmRlZmluZWQgfSk7XG5cbiAgaGFuZGxlVGFiTW91c2VFbnRlciA9IChpOiBudW1iZXIpID0+IHRoaXMuc2V0U3RhdGUoeyBob3ZlcmVkVGFiSW5kZXg6IGkgfSk7XG4gIGhhbmRsZVRhYk1vdXNlTGVhdmUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaG92ZXJlZFRhYkluZGV4OiB1bmRlZmluZWQgfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGFicywgYWN0aXZlVGFiSW5kZXggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBmb2N1c2VkVGFiSW5kZXgsIGhvdmVyZWRUYWJJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UYWJzfSByb2xlPVwidGFibGlzdFwiPlxuICAgICAgICB7dGFicy5tYXAoKHsgdGV4dCwgaHJlZiB9LCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBpID09PSBhY3RpdmVUYWJJbmRleDtcbiAgICAgICAgICBjb25zdCBpc0hvdmVyZWQgPSBpID09PSBob3ZlcmVkVGFiSW5kZXg7XG4gICAgICAgICAgY29uc3QgaXNGb2N1c2VkID0gaSA9PT0gZm9jdXNlZFRhYkluZGV4O1xuICAgICAgICAgIGNvbnN0IGNzID0gY2xhc3NuYW1lcyhzdHlsZXMudGFiLCB7XG4gICAgICAgICAgICBbc3R5bGVzLnRhYklzTm90QWN0aXZlXTogIWlzQWN0aXZlLFxuICAgICAgICAgICAgW3N0eWxlcy50YWJJc0FjdGl2ZV06IGlzQWN0aXZlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBhcmlhLXNlbGVjdGVkPXtpc0FjdGl2ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc31cbiAgICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZTogU3ludGhldGljTW91c2VFdmVudDw+KSA9PiB0aGlzLmhhbmRsZVRhYkNsaWNrKGksIGUpfVxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB0aGlzLmhhbmRsZVRhYkZvY3VzKGkpfVxuICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlVGFiQmx1cn1cbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLmhhbmRsZVRhYk1vdXNlRW50ZXIoaSl9XG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVUYWJNb3VzZUxlYXZlfVxuICAgICAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBib2xkXG4gICAgICAgICAgICAgICAgY29sb3I9e2lzQWN0aXZlIHx8IGlzSG92ZXJlZCB8fCBpc0ZvY3VzZWQgPyAnZGFya0dyYXknIDogJ2dyYXknfVxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEVycm9yRmx5b3V0IGZyb20gJy4uL0Vycm9yRmx5b3V0L0Vycm9yRmx5b3V0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0QXJlYS5jc3MnO1xuXG50eXBlIFN0YXRlID0ge1xuICBmb2N1c2VkOiBib29sZWFuLFxuICBlcnJvcklzT3BlbjogYm9vbGVhbixcbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nLFxufTtcblxudHlwZSBQcm9wcyA9IHt8XG4gIGVycm9yTWVzc2FnZT86IHN0cmluZyxcbiAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICBpZDogc3RyaW5nLFxuICBpZGVhbEVycm9yRGlyZWN0aW9uPzogJ3VwJyB8ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcgLyogZGVmYXVsdDogcmlnaHQgKi8sXG4gIG5hbWU/OiBzdHJpbmcsXG4gIG9uQmx1cj86ICh7IGV2ZW50OiBTeW50aGV0aWNGb2N1c0V2ZW50PD4sIHZhbHVlOiBzdHJpbmcgfSkgPT4gdm9pZCxcbiAgb25DaGFuZ2U6ICh7IGV2ZW50OiBTeW50aGV0aWNJbnB1dEV2ZW50PD4sIHZhbHVlOiBzdHJpbmcgfSkgPT4gdm9pZCxcbiAgb25Gb2N1cz86ICh7IGV2ZW50OiBTeW50aGV0aWNGb2N1c0V2ZW50PD4sIHZhbHVlOiBzdHJpbmcgfSkgPT4gdm9pZCxcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmcsXG4gIHJvd3M/OiBudW1iZXIgLyogZGVmYXVsdDogMyAqLyxcbiAgdmFsdWU/OiBzdHJpbmcsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGVycm9yTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlkZWFsRXJyb3JEaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJvd3M6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaWRlYWxFcnJvckRpcmVjdGlvbjogJ3JpZ2h0JyxcbiAgICByb3dzOiAzLFxuICB9O1xuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHM6IFByb3BzLCBzdGF0ZTogU3RhdGUpIHtcbiAgICBpZiAocHJvcHMuZXJyb3JNZXNzYWdlICE9PSBzdGF0ZS5lcnJvck1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9ySXNPcGVuOiAhIXByb3BzLmVycm9yTWVzc2FnZSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBwcm9wcy5lcnJvck1lc3NhZ2UsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgZm9jdXNlZDogZmFsc2UsXG4gICAgZXJyb3JJc09wZW46IGZhbHNlLFxuICB9O1xuXG4gIHRleHRhcmVhOiA/SFRNTEVsZW1lbnQ7XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBTeW50aGV0aWNJbnB1dEV2ZW50PD4pID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IHRydWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUJsdXIgPSAoZXZlbnQ6IFN5bnRoZXRpY0ZvY3VzRXZlbnQ8PikgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmVycm9yTWVzc2FnZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ySXNPcGVuOiBmYWxzZSB9KTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQgJiYgdGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlRm9jdXMgPSAoZXZlbnQ6IFN5bnRoZXRpY0ZvY3VzRXZlbnQ8PikgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmVycm9yTWVzc2FnZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ySXNPcGVuOiB0cnVlIH0pO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCAmJiB0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyh7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgIGlkLFxuICAgICAgaWRlYWxFcnJvckRpcmVjdGlvbixcbiAgICAgIG5hbWUsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHJvd3MsXG4gICAgICB2YWx1ZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxuICAgICAgc3R5bGVzLnRleHRBcmVhLFxuICAgICAgZGlzYWJsZWQgPyBzdHlsZXMuZGlzYWJsZWQgOiBzdHlsZXMuZW5hYmxlZCxcbiAgICAgIGVycm9yTWVzc2FnZSA/IHN0eWxlcy5lcnJvcmVkIDogc3R5bGVzLm5vcm1hbFxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICYmIHRoaXMuc3RhdGUuZm9jdXNlZCA/IGAke2lkfS1nZXN0YWx0LWVycm9yYCA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgYXJpYS1pbnZhbGlkPXtlcnJvck1lc3NhZ2UgPyAndHJ1ZScgOiAnZmFsc2UnfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIHJlZj17YyA9PiB7XG4gICAgICAgICAgICB0aGlzLnRleHRhcmVhID0gYztcbiAgICAgICAgICB9fVxuICAgICAgICAgIHJvd3M9e3Jvd3N9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAvPlxuICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIHRoaXMuc3RhdGUuZXJyb3JJc09wZW4gPyAoXG4gICAgICAgICAgPEVycm9yRmx5b3V0XG4gICAgICAgICAgICBhbmNob3I9e3RoaXMudGV4dGFyZWF9XG4gICAgICAgICAgICBpZD17YCR7aWR9LWdlc3RhbHQtZXJyb3JgfVxuICAgICAgICAgICAgaWRlYWxEaXJlY3Rpb249e2lkZWFsRXJyb3JEaXJlY3Rpb259XG4gICAgICAgICAgICBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBlcnJvcklzT3BlbjogZmFsc2UgfSl9XG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBFcnJvckZseW91dCBmcm9tICcuLi9FcnJvckZseW91dC9FcnJvckZseW91dCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dEZpZWxkLmNzcyc7XG5cbnR5cGUgU3RhdGUgPSB7XG4gIGZvY3VzZWQ6IGJvb2xlYW4sXG4gIGVycm9ySXNPcGVuOiBib29sZWFuLFxuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmcsXG59O1xuXG50eXBlIFByb3BzID0ge3xcbiAgYXV0b0NvbXBsZXRlPzogJ2N1cnJlbnQtcGFzc3dvcmQnIHwgJ29uJyB8ICdvZmYnIHwgJ3VzZXJuYW1lJyxcbiAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmcsXG4gIGhhc0Vycm9yPzogYm9vbGVhbixcbiAgaWQ6IHN0cmluZyxcbiAgaWRlYWxFcnJvckRpcmVjdGlvbj86ICd1cCcgfCAncmlnaHQnIHwgJ2Rvd24nIHwgJ2xlZnQnIC8qIGRlZmF1bHQ6IHJpZ2h0ICovLFxuICBuYW1lPzogc3RyaW5nLFxuICBvbkJsdXI/OiAoeyBldmVudDogU3ludGhldGljRm9jdXNFdmVudDw+LCB2YWx1ZTogc3RyaW5nIH0pID0+IHZvaWQsXG4gIG9uQ2hhbmdlOiAoeyBldmVudDogU3ludGhldGljSW5wdXRFdmVudDw+LCB2YWx1ZTogc3RyaW5nIH0pID0+IHZvaWQsXG4gIG9uRm9jdXM/OiAoeyBldmVudDogU3ludGhldGljRm9jdXNFdmVudDw+LCB2YWx1ZTogc3RyaW5nIH0pID0+IHZvaWQsXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxuICB0eXBlPzogJ2RhdGUnIHwgJ2VtYWlsJyB8ICdudW1iZXInIHwgJ3Bhc3N3b3JkJyB8ICd0ZXh0JyB8ICd1cmwnLFxuICB2YWx1ZT86IHN0cmluZyxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0RmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgJ2N1cnJlbnQtcGFzc3dvcmQnLFxuICAgICAgJ29uJyxcbiAgICAgICdvZmYnLFxuICAgICAgJ3VzZXJuYW1lJyxcbiAgICBdKSxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXJyb3JNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhhc0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlkZWFsRXJyb3JEaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICAnZGF0ZScsXG4gICAgICAnZW1haWwnLFxuICAgICAgJ251bWJlcicsXG4gICAgICAncGFzc3dvcmQnLFxuICAgICAgJ3RleHQnLFxuICAgICAgJ3VybCcsXG4gICAgXSksXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaGFzRXJyb3I6IGZhbHNlLFxuICAgIGlkZWFsRXJyb3JEaXJlY3Rpb246ICdyaWdodCcsXG4gICAgdHlwZTogJ3RleHQnLFxuICB9O1xuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHM6IFByb3BzLCBzdGF0ZTogU3RhdGUpIHtcbiAgICBpZiAocHJvcHMuZXJyb3JNZXNzYWdlICE9PSBzdGF0ZS5lcnJvck1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9ySXNPcGVuOiAhIXByb3BzLmVycm9yTWVzc2FnZSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBwcm9wcy5lcnJvck1lc3NhZ2UsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgZm9jdXNlZDogZmFsc2UsXG4gICAgZXJyb3JJc09wZW46IGZhbHNlLFxuICB9O1xuXG4gIHRleHRmaWVsZDogP0hUTUxFbGVtZW50O1xuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudDogU3ludGhldGljSW5wdXRFdmVudDw+KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgICBldmVudCxcbiAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVCbHVyID0gKGV2ZW50OiBTeW50aGV0aWNGb2N1c0V2ZW50PD4pID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5lcnJvck1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcklzT3BlbjogZmFsc2UgfSk7XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQmx1cih7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUZvY3VzID0gKGV2ZW50OiBTeW50aGV0aWNGb2N1c0V2ZW50PD4pID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5lcnJvck1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcklzT3BlbjogdHJ1ZSB9KTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgdGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRm9jdXMoe1xuICAgICAgICBldmVudCxcbiAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NvbXBsZXRlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICBoYXNFcnJvcixcbiAgICAgIGlkLFxuICAgICAgaWRlYWxFcnJvckRpcmVjdGlvbixcbiAgICAgIG5hbWUsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHR5cGUsXG4gICAgICB2YWx1ZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxuICAgICAgc3R5bGVzLnRleHRGaWVsZCxcbiAgICAgIGRpc2FibGVkID8gc3R5bGVzLmRpc2FibGVkIDogc3R5bGVzLmVuYWJsZWQsXG4gICAgICBoYXNFcnJvciB8fCBlcnJvck1lc3NhZ2UgPyBzdHlsZXMuZXJyb3JlZCA6IHN0eWxlcy5ub3JtYWxcbiAgICApO1xuXG4gICAgLy8gdHlwZT0nbnVtYmVyJyBkb2Vzbid0IHdvcmsgb24gaW9zIHNhZmFyaSB3aXRob3V0IGEgcGF0dGVyblxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE0NDQ3NjY4L2lucHV0LXR5cGUtbnVtYmVyLWlzLW5vdC1zaG93aW5nLWEtbnVtYmVyLWtleXBhZC1vbi1pb3NcbiAgICBjb25zdCBwYXR0ZXJuID0gdHlwZSA9PT0gJ251bWJlcicgPyAnXFxcXGQqJyA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5mb2N1c2VkID8gYCR7aWR9LWdlc3RhbHQtZXJyb3JgIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9e2Vycm9yTWVzc2FnZSB8fCBoYXNFcnJvciA/ICd0cnVlJyA6ICdmYWxzZSd9XG4gICAgICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICBwYXR0ZXJuPXtwYXR0ZXJufVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICByZWY9e2MgPT4ge1xuICAgICAgICAgICAgdGhpcy50ZXh0ZmllbGQgPSBjO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIC8+XG4gICAgICAgIHtlcnJvck1lc3NhZ2UgJiZcbiAgICAgICAgICB0aGlzLnN0YXRlLmVycm9ySXNPcGVuICYmIChcbiAgICAgICAgICAgIDxFcnJvckZseW91dFxuICAgICAgICAgICAgICBhbmNob3I9e3RoaXMudGV4dGZpZWxkfVxuICAgICAgICAgICAgICBpZD17YCR7aWR9LWdlc3RhbHQtZXJyb3JgfVxuICAgICAgICAgICAgICBpZGVhbERpcmVjdGlvbj17aWRlYWxFcnJvckRpcmVjdGlvbn1cbiAgICAgICAgICAgICAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBlcnJvcklzT3BlbjogZmFsc2UgfSl9XG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQm94IGZyb20gJy4uL0JveC9Cb3gnO1xuaW1wb3J0IE1hc2sgZnJvbSAnLi4vTWFzay9NYXNrJztcbmltcG9ydCBUZXh0IGZyb20gJy4uL1RleHQvVGV4dCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uL0ljb24nO1xuXG50eXBlIFByb3BzID0ge3xcbiAgY29sb3I/OiAnZGFya0dyYXknIHwgJ29yYW5nZScsXG4gIGljb24/OiAnYXJyb3ctY2lyY2xlLWZvcndhcmQnLCAvLyBsZWF2aW5nIG9wZW4gdG8gYWRkaXRpb25hbCBpY29ucyBpbiB0aGUgZnV0dXJlXG4gIHRleHQ6IHN0cmluZyB8IEFycmF5PHN0cmluZz4sXG4gIHRodW1ibmFpbD86IFJlYWN0LkVsZW1lbnQ8YW55Pixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2FzdChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBjb2xvciA9ICdkYXJrR3JheScsIGljb24sIHRodW1ibmFpbCwgdGV4dCB9ID0gcHJvcHM7XG5cbiAgbGV0IGNvbnRlbnRzO1xuICAvLyBDb25maXJtYXRpb24gVG9hc3RzXG4gIGlmICh0ZXh0IGluc3RhbmNlb2YgQXJyYXkgJiYgdGV4dC5sZW5ndGggPiAxKSB7XG4gICAgY29udGVudHMgPSAoXG4gICAgICA8Qm94IHhzPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgPEJveCB4cz17eyBkaXNwbGF5OiAnZmxleENvbHVtbicgfX0gZmxleD1cIm5vbmVcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICAgIHt0aHVtYm5haWwgPyAoXG4gICAgICAgICAgICA8TWFzayBzaGFwZT1cInJvdW5kZWRcIiBoZWlnaHQ9ezQ4fSB3aWR0aD17NDh9PlxuICAgICAgICAgICAgICB7dGh1bWJuYWlsfVxuICAgICAgICAgICAgPC9NYXNrPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHhzPXt7IGRpc3BsYXk6ICdmbGV4Q29sdW1uJyB9fVxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7IF9fc3R5bGU6IHsgcGFkZGluZ0xlZnQ6IDEwIH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3sgX19zdHlsZTogeyBmb250V2VpZ2h0OiAnbm9ybWFsJyB9IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICB7dGV4dFswXX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8VGV4dCBib2xkIGNvbG9yPVwid2hpdGVcIiBzaXplPVwibGdcIj5cbiAgICAgICAgICAgIHt0ZXh0WzFdfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvYXN0cyBhcyBHdWlkZXNcbiAgICBjb250ZW50cyA9IChcbiAgICAgIDxCb3hcbiAgICAgICAgeHM9e3sgZGlzcGxheTogJ2ZsZXgnIH19XG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiYmV0d2VlblwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8VGV4dCBib2xkIGNvbG9yPVwid2hpdGVcIiBzaXplPVwibGdcIj5cbiAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICB7aWNvbiAmJiAoXG4gICAgICAgICAgPEJveCBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7IF9fc3R5bGU6IHsgcGFkZGluZ0xlZnQ6IDI0IH0gfX0+XG4gICAgICAgICAgICA8SWNvbiBhY2Nlc3NpYmlsaXR5TGFiZWw9XCJcIiBjb2xvcj1cIndoaXRlXCIgaWNvbj17aWNvbn0gc2l6ZT17MzZ9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IG1hcmdpbkJvdHRvbT17M30gcGFkZGluZ1g9ezR9IG1heFdpZHRoPXszNzZ9IHdpZHRoPVwiMTAwdndcIj5cbiAgICAgIDxCb3ggY29sb3I9e2NvbG9yfSBmaXQgcGFkZGluZ1g9ezh9IHBhZGRpbmdZPXs1fSBzaGFwZT1cInBpbGxcIj5cbiAgICAgICAge2NvbnRlbnRzfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cblRvYXN0LnByb3BUeXBlcyA9IHtcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2RhcmtHcmF5JywgJ29yYW5nZSddKSxcbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mKFsnYXJyb3ctY2lyY2xlLWZvcndhcmQnXSksIC8vIGxlYXZpbmcgb3BlbiB0byBhZGRpdGlvbmFsIGljb25zIGluIHRoZSBmdXR1cmVcbiAgdGV4dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgXSkuaXNSZXF1aXJlZCxcbiAgdGh1bWJuYWlsOiBQcm9wVHlwZXMuZWxlbWVudCxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94L0JveCc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuLi9GbHlvdXRVdGlscy9Db250cm9sbGVyJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFuY2hvcjogP2FueSxcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBpZGVhbERpcmVjdGlvbj86ICd1cCcgfCAncmlnaHQnIHwgJ2Rvd24nIHwgJ2xlZnQnLFxuICBvbkRpc21pc3M6ICgpID0+IHZvaWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcj86IGJvb2xlYW4sXG4gIHNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyAvKiBkZWZhdWx0IG1kICovLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvb2x0aXAocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBhbmNob3IsXG4gICAgY2hpbGRyZW4sXG4gICAgaWRlYWxEaXJlY3Rpb24sXG4gICAgb25EaXNtaXNzLFxuICAgIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvciA9IHRydWUsXG4gICAgc2l6ZSA9ICdtZCcsXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIWFuY2hvcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udHJvbGxlclxuICAgICAgYW5jaG9yPXthbmNob3J9XG4gICAgICBiZ0NvbG9yPVwiZGFya0dyYXlcIlxuICAgICAgaWRlYWxEaXJlY3Rpb249e2lkZWFsRGlyZWN0aW9ufVxuICAgICAgcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yPXtwb3NpdGlvblJlbGF0aXZlVG9BbmNob3J9XG4gICAgICBvbkRpc21pc3M9e29uRGlzbWlzc31cbiAgICAgIHNpemU9e3NpemV9XG4gICAgPlxuICAgICAgPEJveCBjb2x1bW49ezEyfSBwYWRkaW5nPXszfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250cm9sbGVyPlxuICApO1xufVxuXG5Ub29sdGlwLnByb3BUeXBlcyA9IHtcbiAgYW5jaG9yOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRhaW5zOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICB9KSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpZGVhbERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndXAnLCAncmlnaHQnLCAnZG93bicsICdsZWZ0J10pLFxuICBvbkRpc21pc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10pLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVG91Y2hhYmxlLmNzcyc7XG5cbnR5cGUgU2hhcGUgPVxuICB8ICdzcXVhcmUnXG4gIHwgJ3JvdW5kZWQnXG4gIHwgJ3BpbGwnXG4gIHwgJ2NpcmNsZSdcbiAgfCAncm91bmRlZFRvcCdcbiAgfCAncm91bmRlZEJvdHRvbSdcbiAgfCAncm91bmRlZExlZnQnXG4gIHwgJ3JvdW5kZWRSaWdodCc7XG5cbnR5cGUgTW91c2VDdXJzb3IgPVxuICB8ICdjb3B5J1xuICB8ICdncmFiJ1xuICB8ICdncmFiYmluZydcbiAgfCAnbW92ZSdcbiAgfCAnbm9Ecm9wJ1xuICB8ICdwb2ludGVyJ1xuICB8ICd6b29tSW4nXG4gIHwgJ3pvb21PdXQnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBmdWxsSGVpZ2h0PzogYm9vbGVhbixcbiAgZnVsbFdpZHRoPzogYm9vbGVhbixcbiAgbW91c2VDdXJzb3I/OiBNb3VzZUN1cnNvcixcbiAgb25Nb3VzZUVudGVyPzogKHsgZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+IH0pID0+IHZvaWQsXG4gIG9uTW91c2VMZWF2ZT86ICh7IGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PiB9KSA9PiB2b2lkLFxuICBvblRvdWNoPzogKHtcbiAgICBldmVudDpcbiAgICAgIHwgU3ludGhldGljTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD5cbiAgICAgIHwgU3ludGhldGljS2V5Ym9hcmRFdmVudDxIVE1MRGl2RWxlbWVudD4sXG4gIH0pID0+IHZvaWQsXG4gIHNoYXBlPzogU2hhcGUsXG58fTtcblxuY29uc3QgU1BBQ0VfQ0hBUl9DT0RFID0gMzI7XG5jb25zdCBFTlRFUl9DSEFSX0NPREUgPSAxMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2hhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIGhhbmRsZUtleVByZXNzID0gKGV2ZW50OiBTeW50aGV0aWNLZXlib2FyZEV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25Ub3VjaCB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBDaGVjayB0byBzZWUgaWYgc3BhY2Ugb3IgZW50ZXIgd2VyZSBwcmVzc2VkXG4gICAgaWYgKFxuICAgICAgb25Ub3VjaCAmJlxuICAgICAgKGV2ZW50LmNoYXJDb2RlID09PSBTUEFDRV9DSEFSX0NPREUgfHwgZXZlbnQuY2hhckNvZGUgPT09IEVOVEVSX0NIQVJfQ09ERSlcbiAgICApIHtcbiAgICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgYWN0aW9uIHRvIHN0b3Agc2Nyb2xsaW5nIHdoZW4gc3BhY2UgaXMgcHJlc3NlZFxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG9uVG91Y2goeyBldmVudCB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZnVsbFdpZHRoID0gdHJ1ZSxcbiAgICAgIGZ1bGxIZWlnaHQsXG4gICAgICBtb3VzZUN1cnNvciA9ICdwb2ludGVyJyxcbiAgICAgIG9uTW91c2VFbnRlcixcbiAgICAgIG9uTW91c2VMZWF2ZSxcbiAgICAgIG9uVG91Y2gsXG4gICAgICBzaGFwZSA9ICdzcXVhcmUnLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoXG4gICAgICBzdHlsZXMudG91Y2hhYmxlLFxuICAgICAgc3R5bGVzW21vdXNlQ3Vyc29yXSxcbiAgICAgIHN0eWxlc1tzaGFwZV0sXG4gICAgICB7XG4gICAgICAgIFtzdHlsZXMuZnVsbEhlaWdodF06IGZ1bGxIZWlnaHQsXG4gICAgICAgIFtzdHlsZXMuZnVsbFdpZHRoXTogZnVsbFdpZHRoLFxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IG9uVG91Y2ggJiYgb25Ub3VjaCh7IGV2ZW50IH0pfVxuICAgICAgICBvbk1vdXNlRW50ZXI9e2V2ZW50ID0+IG9uTW91c2VFbnRlciAmJiBvbk1vdXNlRW50ZXIoeyBldmVudCB9KX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtldmVudCA9PiBvbk1vdXNlTGVhdmUgJiYgb25Nb3VzZUxlYXZlKHsgZXZlbnQgfSl9XG4gICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlS2V5UHJlc3N9XG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblRvdWNoYWJsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgZnVsbEhlaWdodDogUHJvcFR5cGVzLmJvb2wsXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG4gIG1vdXNlQ3Vyc29yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdjb3B5JyxcbiAgICAnZ3JhYicsXG4gICAgJ2dyYWJiaW5nJyxcbiAgICAnbW92ZScsXG4gICAgJ25vRHJvcCcsXG4gICAgJ3BvaW50ZXInLFxuICAgICd6b29tSW4nLFxuICAgICd6b29tT3V0JyxcbiAgXSksXG4gIG9uVG91Y2g6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBzaGFwZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnc3F1YXJlJyxcbiAgICAncm91bmRlZCcsXG4gICAgJ3BpbGwnLFxuICAgICdjaXJjbGUnLFxuICAgICdyb3VuZGVkVG9wJyxcbiAgICAncm91bmRlZEJvdHRvbScsXG4gICAgJ3JvdW5kZWRMZWZ0JyxcbiAgICAncm91bmRlZFJpZ2h0JyxcbiAgXSksXG59O1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94L0JveCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVmlkZW8uY3NzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGN1cnJlbnRUaW1lOiBudW1iZXIsXG4gIGR1cmF0aW9uOiBudW1iZXIsXG4gIHNlZWs6ICh0aW1lOiBudW1iZXIpID0+IHZvaWQsXG58fTtcblxudHlwZSBTdGF0ZSA9IHt8XG4gIHNlZWtpbmc6IGJvb2xlYW4sXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW9QbGF5aGVhZCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY3VycmVudFRpbWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBkdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHNlZWs6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgc2Vla2luZzogZmFsc2UsXG4gIH07XG5cbiAgc2V0UGxheWhlYWRSZWYgPSAocmVmOiA/SFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnBsYXloZWFkID0gcmVmO1xuICB9O1xuXG4gIHNlZWsgPSAoY2xpZW50WDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMucGxheWhlYWQpIHtcbiAgICAgIGNvbnN0IHsgZHVyYXRpb24sIHNlZWsgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IGxlZnQsIHdpZHRoIH0gPSB0aGlzLnBsYXloZWFkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGgubWF4KDAsIE1hdGgubWluKChjbGllbnRYIC0gbGVmdCkgLyB3aWR0aCwgMSkpO1xuICAgICAgY29uc3QgbmV3VGltZSA9IHBlcmNlbnQgKiBkdXJhdGlvbjtcbiAgICAgIHNlZWsobmV3VGltZSk7XG4gICAgfVxuICB9O1xuXG4gIHN0b3BDbGljayA9IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PlxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIGhhbmRsZU1vdXNlRG93biA9IChldmVudDogU3ludGhldGljTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2Vla2luZzogdHJ1ZSB9KTtcbiAgICB0aGlzLnNlZWsoZXZlbnQuY2xpZW50WCk7XG4gIH07XG5cbiAgaGFuZGxlTW91c2VNb3ZlID0gKGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgc2Vla2luZyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoc2Vla2luZykge1xuICAgICAgdGhpcy5zZWVrKGV2ZW50LmNsaWVudFgpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVNb3VzZVVwID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWVraW5nOiBmYWxzZSB9KTtcbiAgfTtcblxuICBwbGF5aGVhZDogP0hUTUxEaXZFbGVtZW50O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN1cnJlbnRUaW1lLCBkdXJhdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB3aWR0aCA9IGAke01hdGguZmxvb3IoY3VycmVudFRpbWUgKiAxMDAwMCAvIGR1cmF0aW9uKSAvIDEwMH0lYDtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBmbGV4PVwiZ3Jvd1wiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBoZWlnaHQ9ezE2fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgYXJpYS12YWx1ZW1heD17ZHVyYXRpb259XG4gICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICAgICAgICAgIGFyaWEtdmFsdWVub3c9e2N1cnJlbnRUaW1lfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBsYXloZWFkfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RvcENsaWNrfVxuICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuc3RvcENsaWNrfVxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5oYW5kbGVNb3VzZU1vdmV9XG4gICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZU1vdXNlVXB9XG4gICAgICAgICAgcmVmPXt0aGlzLnNldFBsYXloZWFkUmVmfVxuICAgICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXG4gICAgICAgICAgdGFiSW5kZXg9XCItMVwiXG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBsZWZ0XG4gICAgICAgICAgICByaWdodFxuICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICBjb2xvcj1cImxpZ2h0R3JheVwiXG4gICAgICAgICAgICBzaGFwZT1cInJvdW5kZWRcIlxuICAgICAgICAgICAgaGVpZ2h0PXs0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggY29sb3I9XCJ3aGl0ZVwiIHNoYXBlPVwicm91bmRlZFwiIGhlaWdodD1cIjEwMCVcIiB3aWR0aD17d2lkdGh9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICBzaGFwZT1cInJvdW5kZWRcIlxuICAgICAgICAgICAgaGVpZ2h0PXs0fVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17eyBfX3N0eWxlOiB7IGxlZnQ6IHdpZHRoIH0gfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHNoYXBlPVwiY2lyY2xlXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezE2fVxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdD17LTJ9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3sgX19zdHlsZTogeyBtYXJnaW5Ub3A6IC02IH0gfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94L0JveCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uL0ljb24nO1xuaW1wb3J0IFRleHQgZnJvbSAnLi4vVGV4dC9UZXh0JztcbmltcG9ydCBUb3VjaGFibGUgZnJvbSAnLi4vVG91Y2hhYmxlL1RvdWNoYWJsZSc7XG5pbXBvcnQgVmlkZW9QbGF5aGVhZCBmcm9tICcuL1ZpZGVvUGxheWhlYWQnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgYWNjZXNzaWJpbGl0eU1heGltaXplTGFiZWw6IHN0cmluZyxcbiAgYWNjZXNzaWJpbGl0eU1pbmltaXplTGFiZWw6IHN0cmluZyxcbiAgYWNjZXNzaWJpbGl0eU11dGVMYWJlbDogc3RyaW5nLFxuICBhY2Nlc3NpYmlsaXR5UGF1c2VMYWJlbDogc3RyaW5nLFxuICBhY2Nlc3NpYmlsaXR5UGxheUxhYmVsOiBzdHJpbmcsXG4gIGFjY2Vzc2liaWxpdHlVbm11dGVMYWJlbDogc3RyaW5nLFxuICBjdXJyZW50VGltZTogbnVtYmVyLFxuICBkdXJhdGlvbjogbnVtYmVyLFxuICBmdWxsc2NyZWVuOiBib29sZWFuLFxuICBvbkZ1bGxzY3JlZW5DaGFuZ2U6ICgpID0+IHZvaWQsXG4gIG9uUGF1c2U6IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkLFxuICBvblBsYXk6IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkLFxuICBvblZvbHVtZUNoYW5nZTogKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHZvaWQsXG4gIHBsYXlpbmc6IGJvb2xlYW4sXG4gIHNlZWs6ICh0aW1lOiBudW1iZXIpID0+IHZvaWQsXG4gIHZvbHVtZTogbnVtYmVyLFxufH07XG5cbmNvbnN0IGZ1bGxzY3JlZW5FbmFibGVkID0gKCkgPT5cbiAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgZG9jdW1lbnQuZnVsbHNjcmVlbkVuYWJsZWQgfHxcbiAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVuYWJsZWQgfHxcbiAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgZG9jdW1lbnQubW96RnVsbFNjcmVlbkVuYWJsZWQgfHxcbiAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgZG9jdW1lbnQubXNGdWxsc2NyZWVuRW5hYmxlZDtcblxuY29uc3QgdGltZVRvU3RyaW5nID0gKHRpbWU/OiBudW1iZXIpID0+IHtcbiAgY29uc3Qgcm91bmRlZCA9IE1hdGguZmxvb3IodGltZSB8fCAwKTtcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3Iocm91bmRlZCAvIDYwKTtcbiAgY29uc3Qgc2Vjb25kcyA9IHJvdW5kZWQgLSBtaW51dGVzICogNjA7XG4gIGNvbnN0IG1pbnV0ZXNTdHIgPSBtaW51dGVzIDwgMTAgPyBgMCR7bWludXRlc31gIDogbWludXRlcztcbiAgY29uc3Qgc2Vjb25kc1N0ciA9IHNlY29uZHMgPCAxMCA/IGAwJHtzZWNvbmRzfWAgOiBzZWNvbmRzO1xuICByZXR1cm4gYCR7bWludXRlc1N0cn06JHtzZWNvbmRzU3RyfWA7XG59O1xuXG5jbGFzcyBWaWRlb0NvbnRyb2xzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWNjZXNzaWJpbGl0eU1heGltaXplTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhY2Nlc3NpYmlsaXR5TWluaW1pemVMYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFjY2Vzc2liaWxpdHlNdXRlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhY2Nlc3NpYmlsaXR5UGF1c2VMYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFjY2Vzc2liaWxpdHlQbGF5TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhY2Nlc3NpYmlsaXR5VW5tdXRlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjdXJyZW50VGltZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgZnVsbHNjcmVlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBvbkZ1bGxzY3JlZW5DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25QYXVzZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblBsYXk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Wb2x1bWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcGxheWluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBzZWVrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHZvbHVtZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIGhhbmRsZUZ1bGxzY3JlZW5DaGFuZ2UgPSAoe1xuICAgIGV2ZW50LFxuICB9OiB7XG4gICAgZXZlbnQ6XG4gICAgICB8IFN5bnRoZXRpY01vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+XG4gICAgICB8IFN5bnRoZXRpY0tleWJvYXJkRXZlbnQ8SFRNTERpdkVsZW1lbnQ+LFxuICB9KSA9PiB7XG4gICAgY29uc3QgeyBvbkZ1bGxzY3JlZW5DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgb25GdWxsc2NyZWVuQ2hhbmdlKCk7XG4gIH07XG5cbiAgaGFuZGxlUGxheWluZ0NoYW5nZSA9ICh7XG4gICAgZXZlbnQsXG4gIH06IHtcbiAgICBldmVudDpcbiAgICAgIHwgU3ludGhldGljTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD5cbiAgICAgIHwgU3ludGhldGljS2V5Ym9hcmRFdmVudDxIVE1MRGl2RWxlbWVudD4sXG4gIH0pID0+IHtcbiAgICBjb25zdCB7IHBsYXlpbmcsIG9uUGF1c2UsIG9uUGxheSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocGxheWluZykge1xuICAgICAgb25QYXVzZShldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uUGxheShldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZVZvbHVtZUNoYW5nZSA9ICh7XG4gICAgZXZlbnQsXG4gIH06IHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuICAgIGV2ZW50OlxuICAgICAgfCBTeW50aGV0aWNNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PlxuICAgICAgfCBTeW50aGV0aWNLZXlib2FyZEV2ZW50PEhUTUxEaXZFbGVtZW50PixcbiAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG4gIH0pID0+IHtcbiAgICBjb25zdCB7IG9uVm9sdW1lQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uVm9sdW1lQ2hhbmdlKGV2ZW50KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWNjZXNzaWJpbGl0eU1heGltaXplTGFiZWwsXG4gICAgICBhY2Nlc3NpYmlsaXR5TWluaW1pemVMYWJlbCxcbiAgICAgIGFjY2Vzc2liaWxpdHlNdXRlTGFiZWwsXG4gICAgICBhY2Nlc3NpYmlsaXR5UGF1c2VMYWJlbCxcbiAgICAgIGFjY2Vzc2liaWxpdHlQbGF5TGFiZWwsXG4gICAgICBhY2Nlc3NpYmlsaXR5VW5tdXRlTGFiZWwsXG4gICAgICBjdXJyZW50VGltZSxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgZnVsbHNjcmVlbixcbiAgICAgIHBsYXlpbmcsXG4gICAgICBzZWVrLFxuICAgICAgdm9sdW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG11dGVkID0gdm9sdW1lID09PSAwO1xuICAgIGNvbnN0IHNob3dGdWxsc2NyZWVuQnV0dG9uID1cbiAgICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgISFmdWxsc2NyZWVuRW5hYmxlZCgpO1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICBib3R0b21cbiAgICAgICAgbGVmdFxuICAgICAgICByaWdodFxuICAgICAgICBjb2x1bW49ezEyfVxuICAgICAgICBwYWRkaW5nPXsyfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8Qm94IHBhZGRpbmc9ezJ9PlxuICAgICAgICAgIDxUb3VjaGFibGUgb25Ub3VjaD17dGhpcy5oYW5kbGVQbGF5aW5nQ2hhbmdlfSBmdWxsV2lkdGg9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17XG4gICAgICAgICAgICAgICAgcGxheWluZyA/IGFjY2Vzc2liaWxpdHlQYXVzZUxhYmVsIDogYWNjZXNzaWJpbGl0eVBsYXlMYWJlbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICBpY29uPXtwbGF5aW5nID8gJ3BhdXNlJyA6ICdwbGF5J31cbiAgICAgICAgICAgICAgc2l6ZT17MjB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvVG91Y2hhYmxlPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCB3aWR0aD17NTB9IHBhZGRpbmc9ezJ9PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIiBhbGlnbj1cInJpZ2h0XCIgc2l6ZT1cInhzXCI+XG4gICAgICAgICAgICB7dGltZVRvU3RyaW5nKGN1cnJlbnRUaW1lKX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHBhZGRpbmc9ezJ9IGZsZXg9XCJncm93XCI+XG4gICAgICAgICAgPFZpZGVvUGxheWhlYWRcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lPXtjdXJyZW50VGltZX1cbiAgICAgICAgICAgIGR1cmF0aW9uPXtkdXJhdGlvbn1cbiAgICAgICAgICAgIHNlZWs9e3NlZWt9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggd2lkdGg9ezUwfSBwYWRkaW5nPXsyfT5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cIndoaXRlXCIgYWxpZ249XCJyaWdodFwiIHNpemU9XCJ4c1wiPlxuICAgICAgICAgICAge3RpbWVUb1N0cmluZyhkdXJhdGlvbil9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBwYWRkaW5nPXsyfT5cbiAgICAgICAgICA8VG91Y2hhYmxlIG9uVG91Y2g9e3RoaXMuaGFuZGxlVm9sdW1lQ2hhbmdlfSBmdWxsV2lkdGg9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17XG4gICAgICAgICAgICAgICAgbXV0ZWQgPyBhY2Nlc3NpYmlsaXR5VW5tdXRlTGFiZWwgOiBhY2Nlc3NpYmlsaXR5TXV0ZUxhYmVsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGljb249e211dGVkID8gJ211dGUnIDogJ3NvdW5kJ31cbiAgICAgICAgICAgICAgc2l6ZT17MjB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvVG91Y2hhYmxlPlxuICAgICAgICA8L0JveD5cbiAgICAgICAge3Nob3dGdWxsc2NyZWVuQnV0dG9uICYmIChcbiAgICAgICAgICA8Qm94IHBhZGRpbmc9ezJ9PlxuICAgICAgICAgICAgPFRvdWNoYWJsZSBvblRvdWNoPXt0aGlzLmhhbmRsZUZ1bGxzY3JlZW5DaGFuZ2V9IGZ1bGxXaWR0aD17ZmFsc2V9PlxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17XG4gICAgICAgICAgICAgICAgICBmdWxsc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgID8gYWNjZXNzaWJpbGl0eU1pbmltaXplTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgOiBhY2Nlc3NpYmlsaXR5TWF4aW1pemVMYWJlbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICBpY29uPXtmdWxsc2NyZWVuID8gJ21pbmltaXplJyA6ICdtYXhpbWl6ZSd9XG4gICAgICAgICAgICAgICAgc2l6ZT17MjB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1RvdWNoYWJsZT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9Db250cm9scztcbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVmlkZW9Db250cm9scyBmcm9tICcuL1ZpZGVvQ29udHJvbHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ZpZGVvLmNzcyc7XG5cbnR5cGUgVmlkZW9XaXRoQ29udHJvbHMgPSB7fFxuICBhY2Nlc3NpYmlsaXR5TWF4aW1pemVMYWJlbDogc3RyaW5nLFxuICBhY2Nlc3NpYmlsaXR5TWluaW1pemVMYWJlbDogc3RyaW5nLFxuICBhY2Nlc3NpYmlsaXR5TXV0ZUxhYmVsOiBzdHJpbmcsXG4gIGFjY2Vzc2liaWxpdHlQYXVzZUxhYmVsOiBzdHJpbmcsXG4gIGFjY2Vzc2liaWxpdHlQbGF5TGFiZWw6IHN0cmluZyxcbiAgYWNjZXNzaWJpbGl0eVVubXV0ZUxhYmVsOiBzdHJpbmcsXG4gIGNvbnRyb2xzOiBib29sZWFuLFxufH07XG5cbnR5cGUgVmlkZW9Ob0NvbnRyb2xzID0ge3xcbiAgYWNjZXNzaWJpbGl0eU1heGltaXplTGFiZWw/OiBzdHJpbmcsXG4gIGFjY2Vzc2liaWxpdHlNaW5pbWl6ZUxhYmVsPzogc3RyaW5nLFxuICBhY2Nlc3NpYmlsaXR5TXV0ZUxhYmVsPzogc3RyaW5nLFxuICBhY2Nlc3NpYmlsaXR5UGF1c2VMYWJlbD86IHN0cmluZyxcbiAgYWNjZXNzaWJpbGl0eVBsYXlMYWJlbD86IHN0cmluZyxcbiAgYWNjZXNzaWJpbGl0eVVubXV0ZUxhYmVsPzogc3RyaW5nLFxuICBjb250cm9scz86IG51bGwsXG58fTtcblxudHlwZSBDb250cm9scyA9IFZpZGVvV2l0aENvbnRyb2xzIHwgVmlkZW9Ob0NvbnRyb2xzO1xuXG50eXBlIFNvdXJjZSA9XG4gIHwgc3RyaW5nXG4gIHwgQXJyYXk8e3wgdHlwZTogJ3ZpZGVvL20zdTgnIHwgJ3ZpZGVvL21wNCcgfCAndmlkZW8vb2dnJywgc3JjOiBzdHJpbmcgfH0+O1xuXG50eXBlIFByb3BzID0ge3xcbiAgYXNwZWN0UmF0aW86IG51bWJlcixcbiAgY2FwdGlvbnM6IHN0cmluZyxcbiAgbG9vcD86IGJvb2xlYW4sXG4gIG9uRHVyYXRpb25DaGFuZ2U/OiAoe1xuICAgIGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MVmlkZW9FbGVtZW50PixcbiAgICBkdXJhdGlvbjogbnVtYmVyLFxuICB9KSA9PiB2b2lkLFxuICBvbkVuZGVkPzogKHsgZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxWaWRlb0VsZW1lbnQ+IH0pID0+IHZvaWQsXG4gIG9uRnVsbHNjcmVlbkNoYW5nZT86ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxEaXZFbGVtZW50PixcbiAgICBmdWxsc2NyZWVuOiBib29sZWFuLFxuICB9KSA9PiB2b2lkLFxuICBvbkxvYWRlZENoYW5nZT86ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxWaWRlb0VsZW1lbnQ+LFxuICAgIGxvYWRlZDogbnVtYmVyLFxuICB9KSA9PiB2b2lkLFxuICBvblBsYXk/OiAoeyBldmVudDogU3ludGhldGljRXZlbnQ8SFRNTERpdkVsZW1lbnQ+IH0pID0+IHZvaWQsXG4gIG9uUGF1c2U/OiAoeyBldmVudDogU3ludGhldGljRXZlbnQ8SFRNTERpdkVsZW1lbnQ+IH0pID0+IHZvaWQsXG4gIG9uUmVhZHk/OiAoeyBldmVudDogU3ludGhldGljRXZlbnQ8SFRNTFZpZGVvRWxlbWVudD4gfSkgPT4gdm9pZCxcbiAgb25TZWVrPzogKHsgZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxWaWRlb0VsZW1lbnQ+IH0pID0+IHZvaWQsXG4gIG9uVGltZUNoYW5nZT86ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxWaWRlb0VsZW1lbnQ+LFxuICAgIHRpbWU6IG51bWJlcixcbiAgfSkgPT4gdm9pZCxcbiAgb25Wb2x1bWVDaGFuZ2U/OiAoe1xuICAgIGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MRGl2RWxlbWVudD4sXG4gICAgdm9sdW1lOiBudW1iZXIsXG4gIH0pID0+IHZvaWQsXG4gIHBsYXliYWNrUmF0ZTogbnVtYmVyLFxuICBwbGF5aW5nOiBib29sZWFuLFxuICBwbGF5c0lubGluZT86IGJvb2xlYW4sXG4gIHBvc3Rlcj86IHN0cmluZyxcbiAgcHJlbG9hZDogJ2F1dG8nIHwgJ21ldGFkYXRhJyB8ICdub25lJyxcbiAgc3JjOiBTb3VyY2UsXG4gIHZvbHVtZTogbnVtYmVyLFxuICAuLi5Db250cm9scyxcbnx9O1xuXG50eXBlIFN0YXRlID0ge3xcbiAgY3VycmVudFRpbWU6IG51bWJlcixcbiAgZHVyYXRpb246IG51bWJlcixcbiAgZnVsbHNjcmVlbjogYm9vbGVhbixcbnx9O1xuXG4vLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBmdWxsc2NyZWVuIGFuZCB2ZW5kb3IgcHJlZml4ZXMgc2VlXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRnVsbHNjcmVlbl9BUElcblxuY29uc3QgcmVxdWVzdEZ1bGxzY3JlZW4gPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgaWYgKGVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICBlbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgfSBlbHNlIGlmIChlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgICBlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgfSBlbHNlIGlmIChlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgICBlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gICAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgfSBlbHNlIGlmIChlbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAvLyAkRmxvd0lzc3VlIC0gdmVuZG9yIHByZWZpeCBtaXNzaW5nIGZyb20gRmxvd1xuICAgIGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICB9XG59O1xuXG5jb25zdCBleGl0RnVsbHNjcmVlbiA9ICgpID0+IHtcbiAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgaWYgKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAvLyAkRmxvd0lzc3VlIC0gdmVuZG9yIHByZWZpeCBtaXNzaW5nIGZyb20gRmxvd1xuICAgIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gICAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XG4gICAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgICBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XG4gICAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKSB7XG4gICAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgICBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKCk7XG4gIH1cbn07XG5cbi8vIE5vcm1hbGx5IGRvY3VtZW50LmZ1bGxzY3JlZW4gc3VmZmljZXMgaGVyZSBhcyBhIGZsYWcsIGJ1dCBJRTExIGRvZXMgbm90XG4vLyBoYXZlIGEgdmVuZG9yIHNwZWNpZmljIHZlcnNpb24gc28gd2UgbXVzdCBpbnN0ZWFkIHVzZSB0aGUgYWN0dWFsIGVsZW1lbnRcbmNvbnN0IGlzRnVsbHNjcmVlbiA9ICgpID0+XG4gIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50IHx8XG4gIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50IHx8XG4gIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50IHx8XG4gIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQ7XG5cbmNvbnN0IGFkZEZ1bGxzY3JlZW5FdmVudExpc3RlbmVyID0gKGhhbmRsZXI6IEZ1bmN0aW9uKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBoYW5kbGVyKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsIGhhbmRsZXIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3pmdWxsc2NyZWVuY2hhbmdlJywgaGFuZGxlcik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ01TRnVsbHNjcmVlbkNoYW5nZScsIGhhbmRsZXIpO1xufTtcblxuY29uc3QgcmVtb3ZlRnVsbHNjcmVlbkV2ZW50TGlzdGVuZXIgPSAoaGFuZGxlcjogRnVuY3Rpb24pID0+IHtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZnVsbHNjcmVlbmNoYW5nZScsIGhhbmRsZXIpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgaGFuZGxlcik7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLCBoYW5kbGVyKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignTVNGdWxsc2NyZWVuQ2hhbmdlJywgaGFuZGxlcik7XG59O1xuXG5jb25zdCBpc05ld1NvdXJjZSA9IChvbGRTb3VyY2U6IFNvdXJjZSwgbmV3U291cmNlOiBTb3VyY2UpOiBib29sZWFuID0+IHtcbiAgaWYgKHR5cGVvZiBvbGRTb3VyY2UgIT09IHR5cGVvZiBuZXdTb3VyY2UpIHtcbiAgICAvLyBJZiB0aGUgc291cmNlIHR5cGUgY2hhbmdlZCBmcm9tIHN0cmluZyB0byBBcnJheVxuICAgIC8vIG9yIHZpY2UgdmVyc2EsIHdlIGhhdmUgYSBuZXcgc291cmNlXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShuZXdTb3VyY2UpKSB7XG4gICAgaWYgKG9sZFNvdXJjZS5sZW5ndGggIT09IG5ld1NvdXJjZS5sZW5ndGgpIHtcbiAgICAgIC8vIElmIHRoZSBzb3VyY2VzIGFyZSBib3RoIGFuIEFycmF5LCBhbmQgdGhlIGxlbmd0aHNcbiAgICAgIC8vIGRvIG5vdCBtYXRjaCB3ZSBldmFsdWF0ZSBhcyBhIG5ldyBzb3VyY2VcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgc291cmNlcyBhcmUgYm90aCBhbiBBcnJheSBhbmQgdGhlIHNhbWUgbGVuZ3RoLFxuICAgIC8vIHZlcmlmeSBldmVyeSBlbGVtZW50IHN0YXllZCB0aGUgc2FtZVxuICAgIHJldHVybiBuZXdTb3VyY2Uuc29tZShcbiAgICAgIChzb3VyY2UsIGluZGV4KSA9PlxuICAgICAgICAhQXJyYXkuaXNBcnJheShvbGRTb3VyY2UpIHx8XG4gICAgICAgIHNvdXJjZS50eXBlICE9PSBvbGRTb3VyY2VbaW5kZXhdLnR5cGUgfHxcbiAgICAgICAgc291cmNlLnNyYyAhPT0gb2xkU291cmNlW2luZGV4XS5zcmNcbiAgICApO1xuICB9XG4gIC8vIElmIHRoZSBzb3VyY2VzIGFyZSBib3RoIGEgc3RyaW5nLCBzaW1wbHkgY29tcGFyZVxuICAvLyB0aGUgbmV3IHdpdGggdGhlIG9sZFxuICByZXR1cm4gbmV3U291cmNlICE9PSBvbGRTb3VyY2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWNjZXNzaWJpbGl0eU1heGltaXplTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWNjZXNzaWJpbGl0eU1pbmltaXplTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWNjZXNzaWJpbGl0eU11dGVMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY2Nlc3NpYmlsaXR5UGF1c2VMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY2Nlc3NpYmlsaXR5UGxheUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjY2Vzc2liaWxpdHlVbm11dGVMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhc3BlY3RSYXRpbzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGNhcHRpb25zOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY29udHJvbHM6IFByb3BUeXBlcy5ib29sLFxuICAgIGxvb3A6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uRHVyYXRpb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRW5kZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRnVsbHNjcmVlbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Mb2FkZWRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUGxheTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25QYXVzZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25SZWFkeTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWVrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblRpbWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uVm9sdW1lQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwbGF5YmFja1JhdGU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGxheWluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGxheXNJbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHBvc3RlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwcmVsb2FkOiBQcm9wVHlwZXMub25lT2YoWydhdXRvJywgJ21ldGFkYXRhJywgJ25vbmUnXSksXG4gICAgc3JjOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWyd2aWRlby9tM3U4JywgJ3ZpZGVvL21wNCcsICd2aWRlby9vZ2cnXSlcbiAgICAgICAgICAgIC5pc1JlcXVpcmVkLFxuICAgICAgICAgIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICAgIHZvbHVtZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHBsYXliYWNrUmF0ZTogMSxcbiAgICBwbGF5aW5nOiBmYWxzZSxcbiAgICBwcmVsb2FkOiAnYXV0bycsXG4gICAgdm9sdW1lOiAxLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIGN1cnJlbnRUaW1lOiAwLFxuICAgIGR1cmF0aW9uOiAwLFxuICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICB9O1xuXG4gIC8qKlxuICAgKiBSZWFjdCBsaWZlY3ljbGUgaG9va3MgcGVydGluZW50IHRvIFZpZGVvXG4gICAqL1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFNldCB1cCBldmVudCBsaXN0ZW5lcnMgdG8gY2F0Y2ggYmFja2Rvb3JzIGluIGZ1bGxzY3JlZW5cbiAgICAvLyBjaGFuZ2VzIHN1Y2ggYXMgdXNpbmcgdGhlIEVTQyBrZXkgdG8gZXhpdFxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhZGRGdWxsc2NyZWVuRXZlbnRMaXN0ZW5lcih0aGlzLmhhbmRsZUZ1bGxzY3JlZW5DaGFuZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzKSB7XG4gICAgLy8gSWYgdGhlIHZpZGVvIHNvdXJjZSBjaGFuZ2VkLCByZWxvYWQgdGhlIHZpZGVvXG4gICAgaWYgKGlzTmV3U291cmNlKHByZXZQcm9wcy5zcmMsIHRoaXMucHJvcHMuc3JjKSkge1xuICAgICAgdGhpcy5sb2FkKCk7XG4gICAgfVxuICAgIC8vIElmIHRoZSB2b2x1bWUgY2hhbmdlZCwgc2V0IHRoZSBuZXcgdm9sdW1lXG4gICAgaWYgKHByZXZQcm9wcy52b2x1bWUgIT09IHRoaXMucHJvcHMudm9sdW1lKSB7XG4gICAgICB0aGlzLnNldFZvbHVtZSh0aGlzLnByb3BzLnZvbHVtZSk7XG4gICAgfVxuICAgIC8vIElmIHRoZSBwbGF5YmFjayByYXRlIGNoYW5nZWQsIHNldCB0aGUgbmV3IHJhdGVcbiAgICBpZiAocHJldlByb3BzLnBsYXliYWNrUmF0ZSAhPT0gdGhpcy5wcm9wcy5wbGF5YmFja1JhdGUpIHtcbiAgICAgIHRoaXMuc2V0UGxheWJhY2tSYXRlKHRoaXMucHJvcHMucGxheWJhY2tSYXRlKTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIHBsYXliYWNrIGNoYW5nZWQsIHBsYXkgb3IgcGF1c2UgdGhlIHZpZGVvXG4gICAgaWYgKHByZXZQcm9wcy5wbGF5aW5nICE9PSB0aGlzLnByb3BzLnBsYXlpbmcpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnBsYXlpbmcpIHtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgcmVtb3ZlRnVsbHNjcmVlbkV2ZW50TGlzdGVuZXIodGhpcy5oYW5kbGVGdWxsc2NyZWVuQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBET00gcmVmZXJlbmNlIGhvdXNla2VlcGluZyB0aGF0IGlzIG5lZWRlZCBmb3IgZnVuY3Rpb25hbGl0eVxuICAgKi9cblxuICAvLyBUaGUgcGxheWVyIGVsZW1lbnQgZW5jYXBzdWxhdGVzIHRoZSBhY3R1YWwgdmlkZW8gRE9NXG4gIC8vIGVsZW1lbnQgYXMgd2VsbCBhcyB0aGUgY29udHJvbHMgdG8gYnJpbmcgYm90aCBmdWxsc2NyZWVuXG4gIHNldFBsYXllclJlZiA9IChyZWY6ID9IVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIHRoaXMucGxheWVyID0gcmVmO1xuICB9O1xuXG4gIC8vIFRoZSBhY3R1YWwgcmVmZXJlbmNlIHRvIHRoZSB2aWRlbyBIVE1MIERPTSBlbGVtZW50XG4gIHNldFZpZGVvUmVmID0gKHJlZjogP0hUTUxWaWRlb0VsZW1lbnQpID0+IHtcbiAgICB0aGlzLnZpZGVvID0gcmVmO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbnMgdGhhdCBkaXJlY3RseSBpbnRlcmFjdCB3aXRoIHRoZSBIVE1MIHZpZGVvIGVsZW1lbnRcbiAgICovXG5cbiAgLy8gU2V0IHRoZSB2aWRlbyB0byB0aGUgZGVzaXJlZCBwbGF5YmFjayByYXRlOiAxIChub3JtYWwpXG4gIHNldFBsYXliYWNrUmF0ZSA9IChwbGF5YmFja1JhdGU6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLnZpZGVvKSB7XG4gICAgICB0aGlzLnZpZGVvLnBsYXliYWNrUmF0ZSA9IHBsYXliYWNrUmF0ZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2V0IHRoZSB2aWRlbyB0byB0aGUgZGVzaXJlZCB2b2x1bWU6IDAgKG11dGVkKSAtPiAxIChtYXgpXG4gIHNldFZvbHVtZSA9ICh2b2x1bWU6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLnZpZGVvKSB7XG4gICAgICB0aGlzLnZpZGVvLnZvbHVtZSA9IHZvbHVtZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQ2hhbmdlIHRoZSB2aWRlbyBzb3VyY2UgYW5kIHJlLWxvYWQgdGhlIHZpZGVvXG4gIGxvYWQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMudmlkZW8pIHtcbiAgICAgIHRoaXMudmlkZW8ubG9hZCgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBQYXVzZSB0aGUgdmlkZW9cbiAgcGF1c2UgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMudmlkZW8pIHtcbiAgICAgIHRoaXMudmlkZW8ucGF1c2UoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gUGxheSB0aGUgdmlkZW9cbiAgcGxheSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy52aWRlbykge1xuICAgICAgdGhpcy52aWRlby5wbGF5KCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNlZWsgdGhlIHZpZGVvIHRvIHRoZSBkZXNpcmVkIHRpbWVcbiAgc2VlayA9ICh0aW1lOiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy52aWRlbykge1xuICAgICAgdGhpcy52aWRlby5jdXJyZW50VGltZSA9IHRpbWU7XG4gICAgfVxuICB9O1xuXG4gIC8vIEVudGVyL2V4aXQgZnVsbHNjcmVlbiB2aWRlbyBwbGF5ZXIgbW9kZVxuICB0b2dnbGVGdWxsc2NyZWVuID0gKCkgPT4ge1xuICAgIGlmIChpc0Z1bGxzY3JlZW4oKSkge1xuICAgICAgZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICByZXF1ZXN0RnVsbHNjcmVlbih0aGlzLnBsYXllcik7XG4gICAgfVxuICB9O1xuXG4gIHZpZGVvOiA/SFRNTFZpZGVvRWxlbWVudDtcbiAgcGxheWVyOiA/SFRNTERpdkVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEhhbmRsZXJzIGZvciB2YXJpb3VzIG1lZGlhIGV2ZW50cyBvbiB0aGUgdmlkZW9cbiAgICovXG5cbiAgLy8gU2VudCB3aGVuIGVub3VnaCBkYXRhIGlzIGF2YWlsYWJsZSB0aGF0IHRoZSBtZWRpYSBjYW4gYmUgcGxheWVkXG4gIGhhbmRsZUNhblBsYXkgPSAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxWaWRlb0VsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvblJlYWR5LCBwbGF5YmFja1JhdGUsIHBsYXlpbmcgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gU2ltdWxhdGUgYW4gYXV0b3BsYXkgZWZmZWN0IGlmIHRoZSBjb21wb25lbnQgd2FzIG1vdW50ZWQgd2l0aFxuICAgIC8vIHBsYXlpbmcgc2V0IHRvIHRydWVcbiAgICBpZiAocGxheWluZykge1xuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuICAgIC8vIFNldCB0aGUgaW5pdGlhbCBwbGF5YmFjayByYXRlIHdoZW4gdmlkZW8gaXMgcmFlZHkgdG8gcGxheVxuICAgIHRoaXMuc2V0UGxheWJhY2tSYXRlKHBsYXliYWNrUmF0ZSk7XG5cbiAgICBpZiAob25SZWFkeSkge1xuICAgICAgb25SZWFkeSh7IGV2ZW50IH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBUaGUgbWV0YWRhdGEgaGFzIGxvYWRlZCBvciBjaGFuZ2VkLCBpbmRpY2F0aW5nIGEgY2hhbmdlIGluXG4gIC8vIGR1cmF0aW9uIG9mIHRoZSBtZWRpYVxuICBoYW5kbGVEdXJhdGlvbkNoYW5nZSA9IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTFZpZGVvRWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG9uRHVyYXRpb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZHVyYXRpb24gPSAodGhpcy52aWRlbyAmJiB0aGlzLnZpZGVvLmR1cmF0aW9uKSB8fCAwO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkdXJhdGlvbiB9KTtcblxuICAgIGlmIChvbkR1cmF0aW9uQ2hhbmdlKSB7XG4gICAgICBvbkR1cmF0aW9uQ2hhbmdlKHsgZXZlbnQsIGR1cmF0aW9uIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBTZW50IHdoZW4gcGxheWJhY2sgY29tcGxldGVzLlxuICBoYW5kbGVFbmRlZCA9IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTFZpZGVvRWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG9uRW5kZWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAob25FbmRlZCkge1xuICAgICAgb25FbmRlZCh7IGV2ZW50IH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBTZW50IHdoZW4gdGhlIHZpZGVvIGlzIHN3aXRjaGVkIHRvL291dC1vZiBmdWxsc2NyZWVuIG1vZGVcbiAgaGFuZGxlRnVsbHNjcmVlbkNoYW5nZSA9IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvbkZ1bGxzY3JlZW5DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZnVsbHNjcmVlbiA9ICEhaXNGdWxsc2NyZWVuKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZ1bGxzY3JlZW4gfSk7XG5cbiAgICBpZiAob25GdWxsc2NyZWVuQ2hhbmdlKSB7XG4gICAgICBvbkZ1bGxzY3JlZW5DaGFuZ2UoeyBldmVudCwgZnVsbHNjcmVlbiB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2VudCB3aGVuIHBsYXliYWNrIG9mIHRoZSBtZWRpYSBzdGFydHMgYWZ0ZXIgaGF2aW5nIGJlZW4gcGF1c2VkLlxuICBoYW5kbGVQbGF5ID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG9uUGxheSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChvblBsYXkpIHtcbiAgICAgIG9uUGxheSh7IGV2ZW50IH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBTZW50IHdoZW4gcGxheWJhY2sgaXMgcGF1c2VkLlxuICBoYW5kbGVQYXVzZSA9IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvblBhdXNlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKG9uUGF1c2UpIHtcbiAgICAgIG9uUGF1c2UoeyBldmVudCB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2VudCBwZXJpb2RpY2FsbHkgdG8gaW5mb3JtIGludGVyZXN0ZWQgcGFydGllcyBvZiBwcm9ncmVzcyBkb3dubG9hZGluZyB0aGUgbWVkaWFcbiAgaGFuZGxlUHJvZ3Jlc3MgPSAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxWaWRlb0VsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvbkxvYWRlZENoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGJ1ZmZlcmVkIH0gPSB0aGlzLnZpZGVvIHx8IHt9O1xuICAgIGNvbnN0IGxvYWRlZCA9XG4gICAgICBidWZmZXJlZCAmJiBidWZmZXJlZC5sZW5ndGggPiAwID8gYnVmZmVyZWQuZW5kKGJ1ZmZlcmVkLmxlbmd0aCAtIDEpIDogMDtcblxuICAgIGlmIChvbkxvYWRlZENoYW5nZSkge1xuICAgICAgb25Mb2FkZWRDaGFuZ2UoeyBldmVudCwgbG9hZGVkIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBTZW50IHdoZW4gYSBzZWVrIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gIGhhbmRsZVNlZWsgPSAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxWaWRlb0VsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvblNlZWsgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAob25TZWVrKSB7XG4gICAgICBvblNlZWsoeyBldmVudCB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVGhlIHRpbWUgaW5kaWNhdGVkIGJ5IHRoZSBlbGVtZW50J3MgY3VycmVudFRpbWUgYXR0cmlidXRlIGhhcyBjaGFuZ2VkXG4gIGhhbmRsZVRpbWVVcGRhdGUgPSAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxWaWRlb0VsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvblRpbWVDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSAodGhpcy52aWRlbyAmJiB0aGlzLnZpZGVvLmN1cnJlbnRUaW1lKSB8fCAwO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VGltZSB9KTtcblxuICAgIGlmIChvblRpbWVDaGFuZ2UpIHtcbiAgICAgIG9uVGltZUNoYW5nZSh7IGV2ZW50LCB0aW1lOiBjdXJyZW50VGltZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2VudCB3aGVuIHRoZSBhdWRpbyB2b2x1bWUgY2hhbmdlc1xuICBoYW5kbGVWb2x1bWVDaGFuZ2UgPSAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25Wb2x1bWVDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbXV0ZWQgPSAodGhpcy52aWRlbyAmJiB0aGlzLnZpZGVvLm11dGVkKSB8fCBmYWxzZTtcblxuICAgIGlmIChvblZvbHVtZUNoYW5nZSkge1xuICAgICAgb25Wb2x1bWVDaGFuZ2UoeyBldmVudCwgdm9sdW1lOiBtdXRlZCA/IDEgOiAwIH0pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXNwZWN0UmF0aW8sXG4gICAgICBjYXB0aW9ucyxcbiAgICAgIGxvb3AsXG4gICAgICBwbGF5aW5nLFxuICAgICAgcGxheXNJbmxpbmUsXG4gICAgICBwb3N0ZXIsXG4gICAgICBwcmVsb2FkLFxuICAgICAgc3JjLFxuICAgICAgdm9sdW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY3VycmVudFRpbWUsIGR1cmF0aW9uLCBmdWxsc2NyZWVuIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgcGFkZGluZ0JvdHRvbSA9IChmdWxsc2NyZWVuICYmICcwJykgfHwgYCR7MSAvIGFzcGVjdFJhdGlvICogMTAwfSVgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXt0aGlzLnNldFBsYXllclJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyfVxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nQm90dG9tLCBoZWlnaHQ6IGZ1bGxzY3JlZW4gPyAnMTAwJScgOiAwIH19XG4gICAgICA+XG4gICAgICAgIDx2aWRlb1xuICAgICAgICAgIGF1dG9QbGF5PXtwbGF5aW5nfVxuICAgICAgICAgIGxvb3A9e2xvb3B9XG4gICAgICAgICAgbXV0ZWQ9e3ZvbHVtZSA9PT0gMH1cbiAgICAgICAgICBwbGF5c0lubGluZT17cGxheXNJbmxpbmV9XG4gICAgICAgICAgcG9zdGVyPXtwb3N0ZXJ9XG4gICAgICAgICAgcHJlbG9hZD17cHJlbG9hZH1cbiAgICAgICAgICBzcmM9e3R5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gc3JjIDogdW5kZWZpbmVkfVxuICAgICAgICAgIHJlZj17dGhpcy5zZXRWaWRlb1JlZn1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52aWRlb31cbiAgICAgICAgICBvbkNhblBsYXk9e3RoaXMuaGFuZGxlQ2FuUGxheX1cbiAgICAgICAgICBvbkR1cmF0aW9uQ2hhbmdlPXt0aGlzLmhhbmRsZUR1cmF0aW9uQ2hhbmdlfVxuICAgICAgICAgIG9uRW5kZWQ9e3RoaXMuaGFuZGxlRW5kZWR9XG4gICAgICAgICAgb25TZWVrZWQ9e3RoaXMuaGFuZGxlU2Vla31cbiAgICAgICAgICBvblRpbWVVcGRhdGU9e3RoaXMuaGFuZGxlVGltZVVwZGF0ZX1cbiAgICAgICAgICBvblByb2dyZXNzPXt0aGlzLmhhbmRsZVByb2dyZXNzfVxuICAgICAgICA+XG4gICAgICAgICAge0FycmF5LmlzQXJyYXkoc3JjKSAmJlxuICAgICAgICAgICAgc3JjLm1hcChzb3VyY2UgPT4gKFxuICAgICAgICAgICAgICA8c291cmNlIGtleT17c291cmNlLnNyY30gc3JjPXtzb3VyY2Uuc3JjfSB0eXBlPXtzb3VyY2UudHlwZX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDx0cmFjayBraW5kPVwiY2FwdGlvbnNcIiBzcmM9e2NhcHRpb25zfSAvPlxuICAgICAgICA8L3ZpZGVvPlxuICAgICAgICB7LyogTmVlZCB0byB1c2UgZnVsbCBwYXRoIGZvciB0aGVzZSBwcm9wcyBzbyBGbG93IGNhbiBpbmZlciBjb3JyZWN0IHN1YnR5cGUgKi99XG4gICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2xzICYmIChcbiAgICAgICAgICA8VmlkZW9Db250cm9sc1xuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eU1heGltaXplTGFiZWw9e3RoaXMucHJvcHMuYWNjZXNzaWJpbGl0eU1heGltaXplTGFiZWx9XG4gICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TWluaW1pemVMYWJlbD17dGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5TWluaW1pemVMYWJlbH1cbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlNdXRlTGFiZWw9e3RoaXMucHJvcHMuYWNjZXNzaWJpbGl0eU11dGVMYWJlbH1cbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlQYXVzZUxhYmVsPXt0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHlQYXVzZUxhYmVsfVxuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eVBsYXlMYWJlbD17dGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5UGxheUxhYmVsfVxuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eVVubXV0ZUxhYmVsPXt0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHlVbm11dGVMYWJlbH1cbiAgICAgICAgICAgIGN1cnJlbnRUaW1lPXtjdXJyZW50VGltZX1cbiAgICAgICAgICAgIGR1cmF0aW9uPXtkdXJhdGlvbn1cbiAgICAgICAgICAgIGZ1bGxzY3JlZW49e2Z1bGxzY3JlZW59XG4gICAgICAgICAgICBvblBsYXk9e3RoaXMuaGFuZGxlUGxheX1cbiAgICAgICAgICAgIG9uUGF1c2U9e3RoaXMuaGFuZGxlUGF1c2V9XG4gICAgICAgICAgICBvbkZ1bGxzY3JlZW5DaGFuZ2U9e3RoaXMudG9nZ2xlRnVsbHNjcmVlbn1cbiAgICAgICAgICAgIG9uVm9sdW1lQ2hhbmdlPXt0aGlzLmhhbmRsZVZvbHVtZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYXlpbmc9e3BsYXlpbmd9XG4gICAgICAgICAgICBzZWVrPXt0aGlzLnNlZWt9XG4gICAgICAgICAgICB2b2x1bWU9e3ZvbHVtZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImlkZW50aXR5IiwiU2V0IiwiZnJvbUNsYXNzTmFtZSIsImNsYXNzTmFtZXMiLCJmcm9tSW5saW5lU3R5bGUiLCJpbmxpbmVTdHlsZSIsImNvbmNhdCIsInN0eWxlcyIsInJlZHVjZSIsImNsYXNzTmFtZUEiLCJjbGFzc05hbWUiLCJpbmxpbmVTdHlsZUEiLCJjbGFzc05hbWVCIiwiaW5saW5lU3R5bGVCIiwibWFwQ2xhc3NOYW1lIiwiZm4iLCJBcnJheSIsImZyb20iLCJtYXAiLCJ0b1Byb3BzIiwicHJvcHMiLCJzaXplIiwic29ydCIsImpvaW4iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwic3R5bGUiLCJ0b2dnbGUiLCJ2YWwiLCJtYXBwaW5nIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicmFuZ2UiLCJzY2FsZSIsIm4iLCJNYXRoIiwiYWJzIiwicmFuZ2VXaXRob3V0WmVybyIsImJpbmQiLCJzY29wZSIsIm5hbWUiLCJ1bmlvbiIsImZucyIsIm1hcmdpblN0YXJ0Iiwid2hpdGVzcGFjZSIsIm1hcmdpbkVuZCIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsIm1hcmdpbiIsInNtTWFyZ2luVG9wIiwic21NYXJnaW5SaWdodCIsInNtTWFyZ2luQm90dG9tIiwic21NYXJnaW5MZWZ0Iiwic21NYXJnaW4iLCJtZE1hcmdpblRvcCIsIm1kTWFyZ2luUmlnaHQiLCJtZE1hcmdpbkJvdHRvbSIsIm1kTWFyZ2luTGVmdCIsIm1kTWFyZ2luIiwibGdNYXJnaW5Ub3AiLCJsZ01hcmdpblJpZ2h0IiwibGdNYXJnaW5Cb3R0b20iLCJsZ01hcmdpbkxlZnQiLCJsZ01hcmdpbiIsInBhZGRpbmdYIiwicGFkZGluZ1kiLCJwYWRkaW5nIiwic21QYWRkaW5nWCIsInNtUGFkZGluZ1kiLCJzbVBhZGRpbmciLCJtZFBhZGRpbmdYIiwibWRQYWRkaW5nWSIsIm1kUGFkZGluZyIsImxnUGFkZGluZ1giLCJsZ1BhZGRpbmdZIiwibGdQYWRkaW5nIiwicHJlZml4IiwicHJlIiwiZGlzcGxheSIsInZhbHVlIiwiY29sdW1uIiwiZm9ybWF0SW50Qm9pbnQiLCJ4IiwidG9TdHJpbmciLCJwcm9wVG9GbiIsImMiLCJ4c0Rpc3BsYXlOb25lIiwieHNEaXNwbGF5RmxleCIsInhzRGlzcGxheUJsb2NrIiwieHNEaXNwbGF5SW5saW5lQmxvY2siLCJ4c0RpcmVjdGlvblJvdyIsInhzRGlyZWN0aW9uQ29sdW1uIiwic21EaXNwbGF5Tm9uZSIsInNtRGlzcGxheUZsZXgiLCJzbURpc3BsYXlCbG9jayIsInNtRGlzcGxheUlubGluZUJsb2NrIiwic21EaXJlY3Rpb25Sb3ciLCJzbURpcmVjdGlvbkNvbHVtbiIsIm1kRGlzcGxheU5vbmUiLCJtZERpc3BsYXlGbGV4IiwibWREaXNwbGF5QmxvY2siLCJtZERpc3BsYXlJbmxpbmVCbG9jayIsIm1kRGlyZWN0aW9uUm93IiwibWREaXJlY3Rpb25Db2x1bW4iLCJsZ0Rpc3BsYXlOb25lIiwibGdEaXNwbGF5RmxleCIsImxnRGlzcGxheUJsb2NrIiwibGdEaXNwbGF5SW5saW5lQmxvY2siLCJsZ0RpcmVjdGlvblJvdyIsImxnRGlyZWN0aW9uQ29sdW1uIiwibGF5b3V0IiwiY29udGVudFN0YXJ0IiwiY29udGVudEVuZCIsImNvbnRlbnRDZW50ZXIiLCJjb250ZW50QmV0d2VlbiIsImNvbnRlbnRBcm91bmQiLCJpdGVtc1N0YXJ0IiwiaXRlbXNFbmQiLCJpdGVtc0NlbnRlciIsIml0ZW1zQmFzZWxpbmUiLCJzZWxmU3RhcnQiLCJzZWxmRW5kIiwic2VsZkNlbnRlciIsInNlbGZCYXNlbGluZSIsInNlbGZTdHJldGNoIiwiYm90dG9tMCIsImNvbG9ycyIsImJsdWVCZyIsImRhcmtHcmF5QmciLCJwaW5lQmciLCJncmF5QmciLCJyZWRCZyIsIm9saXZlQmciLCJsaWdodEdyYXlCZyIsIndoaXRlQmciLCJvcmFuZ2VCZyIsImdyZWVuQmciLCJuYXZ5QmciLCJtaWRuaWdodEJnIiwicHVycGxlQmciLCJvcmNoaWRCZyIsImVnZ3BsYW50QmciLCJtYXJvb25CZyIsIndhdGVybWVsb25CZyIsImxpZ2h0V2FzaEJnIiwiZGFya1dhc2hCZyIsImZpdCIsImZsZXhHcm93IiwiZmxleE5vbmUiLCJoZWlnaHQiLCJqdXN0aWZ5RW5kIiwianVzdGlmeUNlbnRlciIsImp1c3RpZnlCZXR3ZWVuIiwianVzdGlmeUFyb3VuZCIsImxlZnQwIiwibXQiLCJtYiIsIm1sIiwibXIiLCJ3aGl0ZXNwYWNlTGVnYWN5IiwidG9wIiwiYm90dG9tIiwibGVmdCIsIm1sQXV0byIsInJpZ2h0IiwibXJBdXRvIiwibWF4SGVpZ2h0IiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsIm92ZXJmbG93SGlkZGVuIiwib3ZlcmZsb3dTY3JvbGwiLCJvdmVyZmxvd0F1dG8iLCJvdmVyZmxvd1Njcm9sbFgiLCJvdmVyZmxvd1Njcm9sbFkiLCJ5IiwiYWJzb2x1dGUiLCJyZWxhdGl2ZSIsImZpeGVkIiwicmlnaHQwIiwiYm9yZGVycyIsImNpcmNsZSIsInBpbGwiLCJyb3VuZGVkIiwicm91bmRlZEJvdHRvbSIsInJvdW5kZWRMZWZ0Iiwicm91bmRlZFJpZ2h0Iiwicm91bmRlZFRvcCIsInRvcDAiLCJ3aWR0aCIsImZsZXhXcmFwIiwiX19zdHlsZSIsImNvbnRhaW5zIiwia2V5IiwiYXJyIiwiaW5kZXhPZiIsIm9taXQiLCJvYmoiLCJhY2MiLCJrIiwiQm94IiwiY2hpbGRyZW4iLCJibGFja2xpc3QiLCJzIiwiYm94IiwicHJvcCIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJDb2x1bW5Qcm9wVHlwZSIsIlByb3BUeXBlcyIsIm9uZU9mIiwiTWFyZ2luUHJvcFR5cGUiLCJQYWRkaW5nUHJvcFR5cGUiLCJwcm9wVHlwZXMiLCJub2RlIiwiZXhhY3QiLCJvYmplY3QiLCJvbmVPZlR5cGUiLCJib29sIiwibnVtYmVyIiwic2hhcGUiLCJzdHJpbmciLCJhZGRDaXJjbGUiLCJhZGRQaW4iLCJhbmdsZWRQaW4iLCJhcnJvd0JhY2siLCJhcnJvd0NpcmNsZURvd24iLCJhcnJvd0NpcmNsZUZvcndhcmQiLCJhcnJvd0Rvd24iLCJhcnJvd0ZvcndhcmQiLCJhcnJvd1VwIiwiYXJyb3dVcFJpZ2h0IiwiY2hlY2tDaXJjbGUiLCJjaXJjbGVPdXRsaW5lIiwiZWxsaXBzaXNDaXJjbGVPdXRsaW5lIiwiZmFjZUhhcHB5IiwiZmFjZVNhZCIsImZhY2VTbWlsZXkiLCJncmFwaEJhciIsImhhbmRQb2ludGluZyIsImhlYXJ0QnJva2VuIiwicGVyc29uQWRkIiwicGluSGlkZSIsInF1ZXN0aW9uTWFyayIsInNob3BwaW5nQmFnIiwic21pbGV5T3V0bGluZSIsInNwZWVjaEVsbGlwc2lzIiwiSWNvbk5hbWVzIiwiaWNvbnMiLCJJY29uIiwiYWNjZXNzaWJpbGl0eUxhYmVsIiwiY29sb3IiLCJpY29uIiwiaW5saW5lIiwiZGFuZ2Vyb3VzbHlTZXRTdmdQYXRoIiwiY3MiLCJjbGFzc25hbWVzIiwiaWNvbkJsb2NrIiwicGF0aCIsIl9fcGF0aCIsImFyaWFIaWRkZW4iLCJpc1JlcXVpcmVkIiwic2hvdWxkU2NhbGVJbWFnZSIsIkltYWdlIiwiaGFuZGxlTG9hZCIsIm9uTG9hZCIsImhhbmRsZUVycm9yIiwib25FcnJvciIsImxvYWRJbWFnZSIsInByZXZQcm9wcyIsInNyYyIsIndpbmRvdyIsImltYWdlIiwib25sb2FkIiwib25lcnJvciIsImFsdCIsIm5hdHVyYWxIZWlnaHQiLCJuYXR1cmFsV2lkdGgiLCJzaXplcyIsInNyY1NldCIsImlzU2NhbGVkSW1hZ2UiLCJjaGlsZENvbnRlbnQiLCJpbWciLCJSZWFjdCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJNYXNrIiwid2FzaCIsImN4IiwiU3F1YXJlIiwicGFkZGluZ0JvdHRvbSIsIkRlZmF1bHRBdmF0YXIiLCJmaXJzdEluaXRpYWwiLCJ0b1VwcGVyQ2FzZSIsInR5cG9ncmFwaHkiLCJhbnRpYWxpYXNlZCIsInNhbnNTZXJpZiIsImxlYWRpbmdTbWFsbCIsImZvbnRXZWlnaHRCb2xkIiwiQXZhdGFyIiwic3RhdGUiLCJoYW5kbGVJbWFnZUVycm9yIiwic2V0U3RhdGUiLCJpc0ltYWdlTG9hZGVkIiwib3V0bGluZSIsInZlcmlmaWVkIiwiU0laRV9TQ0FMRSIsIlRleHQiLCJhbGlnbiIsImJvbGQiLCJpdGFsaWMiLCJvdmVyZmxvdyIsInNtU2l6ZSIsIm1kU2l6ZSIsImxnU2l6ZSIsImxlYWRpbmciLCJ0cnVuY2F0ZSIsIl9fZGFuZ2Vyb3VzbHlJbmNyZWFzZUxpbmVIZWlnaHQiLCJzbVNjYWxlIiwibWRTY2FsZSIsImxnU2NhbGUiLCJibHVlIiwiZGFya0dyYXkiLCJlZ2dwbGFudCIsImdyYXkiLCJncmVlbiIsImxpZ2h0R3JheSIsIm1hcm9vbiIsIm1pZG5pZ2h0IiwibmF2eSIsIm9saXZlIiwib3JhbmdlIiwib3JjaGlkIiwicGluZSIsInB1cnBsZSIsInJlZCIsIndhdGVybWVsb24iLCJ3aGl0ZSIsImxlYWRpbmdTaG9ydCIsImxlYWRpbmdUYWxsIiwiYWxpZ25DZW50ZXIiLCJhbGlnbkp1c3RpZnkiLCJhbGlnbkxlZnQiLCJhbGlnblJpZ2h0IiwiYnJlYWtXb3JkIiwiZm9udFN0eWxlSXRhbGljIiwiZm9udFN0eWxlTm9ybWFsIiwiZm9udFdlaWdodE5vcm1hbCIsIlRhZyIsInRpdGxlIiwiQnV0dG9uIiwiYWNjZXNzaWJpbGl0eUV4cGFuZGVkIiwiYWNjZXNzaWJpbGl0eUhhc3BvcHVwIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwidGV4dCIsInR5cGUiLCJ0ZXh0Q29sb3IiLCJjbGFzc2VzIiwiYnV0dG9uIiwic20iLCJtZCIsImxnIiwic29saWQiLCJlbmFibGVkIiwiYmxvY2siLCJldmVudCIsIkNhcmQiLCJoYW5kbGVNb3VzZUVudGVyIiwib25Nb3VzZUVudGVyIiwiaG92ZXJlZCIsImhhbmRsZU1vdXNlTGVhdmUiLCJvbk1vdXNlTGVhdmUiLCJhY3RpdmUiLCJjYXJkIiwiaG92ZXIiLCJDaGVja2JveCIsImhhbmRsZUNoYW5nZSIsImNoZWNrZWQiLCJ0YXJnZXQiLCJvbkNoYW5nZSIsImhhbmRsZUJsdXIiLCJmb2N1c2VkIiwiaGFuZGxlRm9jdXMiLCJpbmRldGVybWluYXRlIiwic2V0SW5kZXRlcm1pbmF0ZSIsInByZXZpb3VzUHJvcHMiLCJpbnB1dCIsImlkIiwiaW5wdXRFbmFibGVkIiwiaW5wdXRTbSIsImlucHV0TWQiLCJlbCIsImNoZWNrIiwiY2hlY2tHcmF5IiwiY2hlY2tMaWdodEdyYXkiLCJjaGVja0RhcmtHcmF5IiwiY2hlY2tXaGl0ZSIsImNoZWNrRW5hYmxlZCIsImNoZWNrRm9jdXNlZCIsImNoZWNrTWQiLCJjaGVja1NtIiwiQ29sbGVjdGlvbiIsIkl0ZW0iLCJ2aWV3cG9ydFRvcCIsInZpZXdwb3J0TGVmdCIsIm1heCIsIml0ZW0iLCJ2aWV3cG9ydFdpZHRoIiwidmlld3BvcnRIZWlnaHQiLCJpdGVtcyIsInBvc2l0aW9uIiwiaWR4IiwicHVzaCIsImxheW91dFN0eWxlcyIsImFueSIsImFycmF5T2YiLCJDb2x1bW4iLCJ4cyIsImRlcHJlY2F0ZWRDb2x1bW4iLCJzcGFuIiwic21TcGFuIiwibWRTcGFuIiwibGdTcGFuIiwiQ29udGFpbmVyIiwiRGl2aWRlciIsImRpdmlkZXIiLCJDYXJldCIsImRpcmVjdGlvbiIsIlNQQUNFU19JTkRFWF9NQVAiLCJESVJfSU5ERVhfTUFQIiwiTUFSR0lOIiwiQ0FSRVRfSEVJR0hUIiwiQ0FSRVRfT0ZGU0VUX0ZST01fU0lERSIsIkJPUkRFUl9SQURJVVMiLCJnZXRNYWluRGlyIiwiZmx5b3V0U2l6ZSIsImlkZWFsRGlyZWN0aW9uIiwidHJpZ2dlclJlY3QiLCJ3aW5kb3dTaXplIiwidXAiLCJkb3duIiwic3BhY2VzIiwibWFpbkRpciIsImdldFN1YkRpciIsIm9mZnNldCIsInRyaWdnZXJNaWQiLCJ3aW5kb3dTcGFjZUF2YWlsYWJsZSIsImFib3ZlT3JMZWZ0IiwiYmVsb3dPclJpZ2h0Iiwic3ViRGlyIiwiY2FsY0VkZ2VTaGlmdHMiLCJmbHlvdXRWZXJ0aWNhbFNoaWZ0IiwiZmx5b3V0SG9yaXpvbnRhbFNoaWZ0IiwiY2FyZXRWZXJ0aWNhbFNoaWZ0IiwiY2FyZXRIb3Jpem9udGFsU2hpZnQiLCJpc0Nsb3NlVmVydGljYWxseSIsImlzQ2xvc2VIb3Jpem9udGFsbHkiLCJhZGp1c3RPZmZzZXRzIiwiYmFzZSIsImVkZ2VTaGlmdCIsImZseW91dExlZnQiLCJmbHlvdXRUb3AiLCJjYXJldFRvcCIsImNhcmV0UmlnaHQiLCJjYXJldEJvdHRvbSIsImNhcmV0TGVmdCIsImZseW91dCIsImNhcmV0IiwiYmFzZU9mZnNldHMiLCJyZWxhdGl2ZU9mZnNldCIsIkhBTEZfQ0FSRVQiLCJzY3JvbGxZIiwic2Nyb2xsWCIsIkNvbnRlbnRzIiwidW5kZWZpbmVkIiwic2V0Rmx5b3V0UG9zaXRpb24iLCJwb3NpdGlvblJlbGF0aXZlVG9BbmNob3IiLCJwYWdlWE9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsTGVmdCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZWRnZVNoaWZ0cyIsImZseW91dE9mZnNldCIsImNhcmV0T2Zmc2V0Iiwic2hvdWxkRm9jdXMiLCJmb2N1cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblJlc2l6ZSIsIm9uS2V5RG93biIsIm5leHRQcm9wcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJiZ0NvbG9yIiwidmlzaWJpbGl0eSIsImJhY2tncm91bmQiLCJzdHJva2UiLCJib3JkZXJDb2xvciIsImNvbnRhaW5lciIsImRpbWVuc2lvbnMiLCJjb250ZW50cyIsImlubmVyQ29udGVudHMiLCJTSVpFX1dJRFRIX01BUCIsIkVTQ0FQRV9LRVlfQ09ERSIsIkNvbnRyb2xsZXIiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsIm9uRGlzbWlzcyIsImhhbmRsZVBhZ2VDbGljayIsIk5vZGUiLCJhbmNob3IiLCJoYW5kbGVSZXNpemUiLCJ1cGRhdGVUcmlnZ2VyUmVjdCIsInRyaWdnZXJCb3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwiRXJyb3JGbHlvdXQiLCJtZXNzYWdlIiwiRmx5b3V0IiwiQk9SREVSX1dJRFRIIiwiQVZBVEFSX1NJWkVTIiwiREVGQVVMVF9BVkFUQVJfVEVYVF9TSVpFUyIsImF2YXRhckxheW91dCIsImRlZ1RvUmFkIiwiZGVnIiwiUEkiLCJmb250U2l6ZSIsInRleHRMYXlvdXQiLCJxdWFydGVyUGFkZGluZyIsImZsb29yIiwic2luIiwiaW5pdGlhbCIsIkdyb3VwQXZhdGFyIiwiY29sbGFib3JhdG9ycyIsImF2YXRhclNpemUiLCJib3hTaGFkb3ciLCJkZWZhdWx0SGVhZGluZ0xldmVscyIsIkhlYWRpbmciLCJhY2Nlc3NpYmlsaXR5TGV2ZWwiLCJoZWFkaW5nTGV2ZWwiLCJTSVpFX05BTUVfVE9fUElYRUwiLCJkZWZhdWx0SWNvbkJ1dHRvbkljb25Db2xvcnMiLCJQb2ciLCJpY29uQ29sb3IiLCJpY29uU2l6ZSIsInBvZyIsIkljb25CdXR0b24iLCJoYW5kbGVNb3VzZURvd24iLCJoYW5kbGVNb3VzZVVwIiwiTGFiZWwiLCJodG1sRm9yIiwibGFiZWwiLCJhc3BlY3RSYXRpbyIsIkxldHRlcmJveCIsImNvbnRlbnRBc3BlY3RSYXRpbyIsInZpZXdwb3J0QXNwZWN0UmF0aW8iLCJjb250ZW50SGVpZ2h0IiwiY29udGVudFdpZHRoIiwiVEFCX0tFWV9DT0RFIiwiTGluayIsImhhbmRsZUNsaWNrIiwiaHJlZiIsImVuYWJsZUZvY3VzU3R5bGVzIiwiaGFuZGxlS2V5VXAiLCJyZWwiLCJsaW5rVGFyZ2V0IiwibGluayIsImFjY2Vzc2libGVGb2N1c1N0eWxlIiwiZGVib3VuY2UiLCJ0aHJlc2hob2xkIiwiZGVmZXJUaW1lciIsImRlYm91bmNlZCIsImFyZ3MiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiRmV0Y2hJdGVtcyIsImNvbnRhaW5lckhlaWdodCIsImlzQXRFbmQiLCJpc0ZldGNoaW5nIiwiZmV0Y2hNb3JlIiwic2Nyb2xsSGVpZ2h0Iiwic2Nyb2xsQnVmZmVyIiwiZ2V0U2Nyb2xsQ29udGFpbmVyIiwic2Nyb2xsQ29udGFpbmVyIiwiU2Nyb2xsQ29udGFpbmVyIiwiZ2V0U2Nyb2xsQ29udGFpbmVyUmVmIiwiaGFuZGxlU2Nyb2xsIiwib25TY3JvbGwiLCJ1cGRhdGVTY3JvbGxDb250YWluZXIiLCJuZXh0U2Nyb2xsQ29udGFpbmVyIiwib25seSIsImVsZW1lbnQiLCJ0aHJvdHRsZSIsImxhc3QiLCJ0aHJvdHRsZWQiLCJub3ciLCJEYXRlIiwiTWVhc3VyZW1lbnRTdG9yZSIsIldlYWtNYXAiLCJnZXQiLCJoYXMiLCJzZXQiLCJnZXRFbGVtZW50SGVpZ2h0IiwiZ2V0V2luZG93U2Nyb2xsUG9zIiwiZ2V0UmVsYXRpdmVTY3JvbGxUb3AiLCJnZXRTY3JvbGxIZWlnaHQiLCJnZXRTY3JvbGxQb3MiLCJEZWZhdWx0TGF5b3V0U3ltYm9sIiwiU3ltYm9sIiwiVW5pZm9ybVJvd0xheW91dFN5bWJvbCIsIm1pbmRleCIsImkiLCJvZmZzY3JlZW4iLCJJbmZpbml0eSIsImNhY2hlIiwiY29sdW1uV2lkdGgiLCJndXR0ZXIiLCJtaW5Db2xzIiwiY29sdW1uV2lkdGhBbmRHdXR0ZXIiLCJjb2x1bW5Db3VudCIsImhlaWdodHMiLCJmaWxsIiwiY2VudGVyT2Zmc2V0IiwicG9zaXRpb25zIiwiaGVpZ2h0QW5kR3V0dGVyIiwiY29sIiwicm93Iiwic2xpY2UiLCJzdW0iLCJpZGVhbENvbHVtbldpZHRoIiwiY29sZ3Vlc3MiLCJNYXNvbnJ5TGF5b3V0IiwiVW5pZm9ybVJvd0xheW91dCIsIlJFU0laRV9ERUJPVU5DRSIsIlZJUlRVQUxfQlVGRkVSX0ZBQ1RPUiIsImxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uIiwiTWFzb25yeSIsIm1lYXN1cmVtZW50U3RvcmUiLCJoYXNQZW5kaW5nTWVhc3VyZW1lbnRzIiwic29tZSIsInNldEdyaWRXcmFwcGVyUmVmIiwicmVmIiwiZ3JpZFdyYXBwZXIiLCJzZXRTY3JvbGxDb250YWluZXJSZWYiLCJjbGllbnRXaWR0aCIsInVwZGF0ZVNjcm9sbFBvc2l0aW9uIiwibWVhc3VyZUNvbnRhaW5lckFzeW5jIiwibWVhc3VyZUNvbnRhaW5lciIsImxvYWRJdGVtcyIsInJlbmRlck1hc29ucnlDb21wb25lbnQiLCJpdGVtRGF0YSIsIkNvbXBvbmVudCIsImNvbXAiLCJ2aXJ0dWFsaXplIiwiaXNWaXNpYmxlIiwidmlydHVhbEJ1ZmZlciIsIm9mZnNldFNjcm9sbFBvcyIsImNvbnRhaW5lck9mZnNldCIsInZpZXdwb3J0Qm90dG9tIiwiaXRlbUNvbXBvbmVudCIsIk1hc29ucnlfX0l0ZW0iLCJNYXNvbnJ5X19JdGVtX19Nb3VudGVkIiwicHJldlN0YXRlIiwicmVzZXQiLCJpbnNlcnRBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbENvbnRhaW5lclJlZiIsIkhUTUxFbGVtZW50IiwicmVsYXRpdmVTY3JvbGxUb3AiLCJmb3JjZVVwZGF0ZSIsImZsZXhpYmxlIiwiZ3V0dGVyV2lkdGgiLCJmdWxsV2lkdGhMYXlvdXQiLCJMZWdhY3lVbmlmb3JtUm93TGF5b3V0IiwidW5pZm9ybVJvd0xheW91dCIsImRlZmF1bHRMYXlvdXQiLCJncmlkQm9keSIsImZpbHRlciIsIml0ZW1zVG9SZW5kZXIiLCJpdGVtc1RvTWVhc3VyZSIsIm1lYXN1cmluZ1Bvc2l0aW9ucyIsInBvcyIsImRhdGEiLCJpbnN0YW5jZU9mIiwiTW9kYWwiLCJnZXRDdXJyZW50QnJlYWtwb2ludCIsImJyZWFrcG9pbnRzIiwiZm9yRWFjaCIsIm1hdGNoTWVkaWEiLCJwb2ludCIsIm1hdGNoZXMiLCJoYW5kbGVDbG9zZSIsIm1vZGFsIiwidXBkYXRlQnJlYWtwb2ludCIsImJyZWFrcG9pbnQiLCJ3aW5kb3dIZWlnaHQiLCJyZXN0cmljdEZvY3VzIiwicHJpb3JGb2N1cyIsImFjdGl2ZUVsZW1lbnQiLCJib2R5IiwiYWNjZXNzaWJpbGl0eUNsb3NlTGFiZWwiLCJhY2Nlc3NpYmlsaXR5TW9kYWxMYWJlbCIsImZvb3RlciIsImhlYWRpbmciLCJyb2xlIiwiYm9yZGVyQm94IiwiZmxleCIsImNvbnRhaW5lckNsYXNzZXMiLCJ4c0NvbDEyIiwid3JhcHBlciIsIndyYXBwZXJDbGFzc2VzIiwibTAiLCJvdmVybGF5IiwiY3Vyc29yIiwiem9vbU91dCIsIm92ZXJsYXlDbGFzc2VzIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJQdWxzYXIiLCJwYXVzZWQiLCJpbm5lckNpcmNsZSIsIm91dGVyQ2lyY2xlIiwiUmFkaW9CdXR0b24iLCJSYWRpb0J1dHRvbklzRm9jdXNlZCIsIlJhZGlvQnV0dG9uU20iLCJSYWRpb0J1dHRvbk1kIiwiUmFkaW9CdXR0b25XaGl0ZUJnIiwiUmFkaW9CdXR0b25MaWdodEdyYXlCZyIsIklucHV0IiwiSW5wdXRFbmFibGVkIiwiSW5wdXRTbSIsIklucHV0TWQiLCJDaGVjayIsIkNoZWNrU20iLCJDaGVja01kIiwiQ2hlY2tFbmFibGVkIiwiQ2hlY2tEaXNhYmxlZCIsIlNjcm9sbEZldGNoIiwidXBkYXRlUG9zaXRpb24iLCJnZXRTY3JvbGxTdGF0ZSIsInJlbmRlckhlaWdodCIsIlNlYXJjaEZpZWxkIiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsZWFyIiwib25Gb2N1cyIsIm9uQmx1ciIsInBsYWNlaG9sZGVyIiwic2hvd0NsZWFyIiwiY2xlYXIiLCJTZWdtZW50ZWRDb250cm9sIiwic2VsZWN0ZWRJdGVtSW5kZXgiLCJpc1NlbGVjdGVkIiwiaXRlbUlzTm90U2VsZWN0ZWQiLCJpdGVtSXNTZWxlY3RlZCIsImUiLCJhY3RpdmVJbmRleCIsIlNlbGVjdExpc3QiLCJoYW5kbGVPbkNoYW5nZSIsIkhUTUxTZWxlY3RFbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JJc09wZW4iLCJpZGVhbEVycm9yRGlyZWN0aW9uIiwib3B0aW9ucyIsInNlbGVjdCIsImVycm9yZWQiLCJub3JtYWwiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nVG9wIiwib3B0aW9uIiwiU0laRSIsIlNwaW5uZXIiLCJzaG93IiwiU3RpY2t5IiwiZGFuZ2Vyb3VzbHlTZXRaSW5kZXgiLCJfX3pJbmRleCIsInN0aWNreSIsIlN3aXRjaCIsInN3aXRjaGVkIiwic3dpdGNoU3R5bGVzIiwic3dpdGNoIiwic3dpdGNoR3JheSIsInN3aXRjaExpZ2h0R3JheSIsInN3aXRjaERhcmtHcmF5Iiwic3dpdGNoV2hpdGUiLCJzbGlkZXJTdHlsZXMiLCJzbGlkZXIiLCJzbGlkZXJSaWdodCIsInNsaWRlckxlZnQiLCJzbGlkZXJEYXJrIiwic2xpZGVyTGlnaHQiLCJpbnB1dFN0eWxlcyIsImNoZWNrYm94IiwiY2hlY2tib3hFbmFibGVkIiwiVGFicyIsImhhbmRsZVRhYkNsaWNrIiwiYWN0aXZlVGFiSW5kZXgiLCJoYW5kbGVUYWJGb2N1cyIsImZvY3VzZWRUYWJJbmRleCIsImhhbmRsZVRhYkJsdXIiLCJoYW5kbGVUYWJNb3VzZUVudGVyIiwiaG92ZXJlZFRhYkluZGV4IiwiaGFuZGxlVGFiTW91c2VMZWF2ZSIsInRhYnMiLCJpc0FjdGl2ZSIsImlzSG92ZXJlZCIsImlzRm9jdXNlZCIsInRhYiIsInRhYklzTm90QWN0aXZlIiwidGFiSXNBY3RpdmUiLCJUZXh0QXJlYSIsIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCJyb3dzIiwidGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIlRleHRGaWVsZCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJhdXRvQ29tcGxldGUiLCJoYXNFcnJvciIsInRleHRGaWVsZCIsInBhdHRlcm4iLCJ0ZXh0ZmllbGQiLCJUb2FzdCIsInRodW1ibmFpbCIsImZvbnRXZWlnaHQiLCJUb29sdGlwIiwiU1BBQ0VfQ0hBUl9DT0RFIiwiRU5URVJfQ0hBUl9DT0RFIiwiVG91Y2hhYmxlIiwiaGFuZGxlS2V5UHJlc3MiLCJvblRvdWNoIiwiY2hhckNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImZ1bGxXaWR0aCIsImZ1bGxIZWlnaHQiLCJtb3VzZUN1cnNvciIsInRvdWNoYWJsZSIsIlZpZGVvUGxheWhlYWQiLCJzZXRQbGF5aGVhZFJlZiIsInBsYXloZWFkIiwic2VlayIsImNsaWVudFgiLCJkdXJhdGlvbiIsInBlcmNlbnQiLCJtaW4iLCJuZXdUaW1lIiwic3RvcENsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwic2Vla2luZyIsImhhbmRsZU1vdXNlTW92ZSIsImN1cnJlbnRUaW1lIiwiZnVsbHNjcmVlbkVuYWJsZWQiLCJ3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCIsIm1vekZ1bGxTY3JlZW5FbmFibGVkIiwibXNGdWxsc2NyZWVuRW5hYmxlZCIsInRpbWVUb1N0cmluZyIsInRpbWUiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbnV0ZXNTdHIiLCJzZWNvbmRzU3RyIiwiVmlkZW9Db250cm9scyIsImhhbmRsZUZ1bGxzY3JlZW5DaGFuZ2UiLCJvbkZ1bGxzY3JlZW5DaGFuZ2UiLCJoYW5kbGVQbGF5aW5nQ2hhbmdlIiwicGxheWluZyIsIm9uUGF1c2UiLCJvblBsYXkiLCJoYW5kbGVWb2x1bWVDaGFuZ2UiLCJvblZvbHVtZUNoYW5nZSIsImFjY2Vzc2liaWxpdHlNYXhpbWl6ZUxhYmVsIiwiYWNjZXNzaWJpbGl0eU1pbmltaXplTGFiZWwiLCJhY2Nlc3NpYmlsaXR5TXV0ZUxhYmVsIiwiYWNjZXNzaWJpbGl0eVBhdXNlTGFiZWwiLCJhY2Nlc3NpYmlsaXR5UGxheUxhYmVsIiwiYWNjZXNzaWJpbGl0eVVubXV0ZUxhYmVsIiwiZnVsbHNjcmVlbiIsInZvbHVtZSIsIm11dGVkIiwic2hvd0Z1bGxzY3JlZW5CdXR0b24iLCJyZXF1ZXN0RnVsbHNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJtc1JlcXVlc3RGdWxsc2NyZWVuIiwiZXhpdEZ1bGxzY3JlZW4iLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsIm1vekNhbmNlbEZ1bGxTY3JlZW4iLCJtc0V4aXRGdWxsc2NyZWVuIiwiaXNGdWxsc2NyZWVuIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJ3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCIsIm1vekZ1bGxTY3JlZW5FbGVtZW50IiwibXNGdWxsc2NyZWVuRWxlbWVudCIsImFkZEZ1bGxzY3JlZW5FdmVudExpc3RlbmVyIiwiaGFuZGxlciIsInJlbW92ZUZ1bGxzY3JlZW5FdmVudExpc3RlbmVyIiwiaXNOZXdTb3VyY2UiLCJvbGRTb3VyY2UiLCJuZXdTb3VyY2UiLCJpc0FycmF5Iiwic291cmNlIiwiaW5kZXgiLCJWaWRlbyIsInNldFBsYXllclJlZiIsInBsYXllciIsInNldFZpZGVvUmVmIiwidmlkZW8iLCJzZXRQbGF5YmFja1JhdGUiLCJwbGF5YmFja1JhdGUiLCJzZXRWb2x1bWUiLCJsb2FkIiwicGF1c2UiLCJwbGF5IiwidG9nZ2xlRnVsbHNjcmVlbiIsImhhbmRsZUNhblBsYXkiLCJvblJlYWR5IiwiaGFuZGxlRHVyYXRpb25DaGFuZ2UiLCJvbkR1cmF0aW9uQ2hhbmdlIiwiaGFuZGxlRW5kZWQiLCJvbkVuZGVkIiwiaGFuZGxlUGxheSIsImhhbmRsZVBhdXNlIiwiaGFuZGxlUHJvZ3Jlc3MiLCJvbkxvYWRlZENoYW5nZSIsImJ1ZmZlcmVkIiwibG9hZGVkIiwiZW5kIiwiaGFuZGxlU2VlayIsIm9uU2VlayIsImhhbmRsZVRpbWVVcGRhdGUiLCJvblRpbWVDaGFuZ2UiLCJjYXB0aW9ucyIsImxvb3AiLCJwbGF5c0lubGluZSIsInBvc3RlciIsInByZWxvYWQiLCJjb250cm9scyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJPLElBQU1BLFdBQVcsU0FBWEEsUUFBVztTQUFjO2VBQ3pCLElBQUlDLEdBQUosRUFEeUI7aUJBRXZCO0dBRlM7Q0FBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLUCxBQUFP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
