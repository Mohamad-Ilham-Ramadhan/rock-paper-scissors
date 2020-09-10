import barlowSemiCondensed600Eot from "./fonts/barlow-semi-condensed-v6-latin-600.eot";
import barlowSemiCondensed600Woff2 from "./fonts/barlow-semi-condensed-v6-latin-600.woff2";
import barlowSemiCondensed600Woff from "./fonts/barlow-semi-condensed-v6-latin-600.woff";
import barlowSemiCondensed600Ttf from "./fonts/barlow-semi-condensed-v6-latin-600.ttf";
import barlowSemiCondensed600Svg from "./fonts/barlow-semi-condensed-v6-latin-600.svg";

import barlowSemiCondensed700Eot from "./fonts/barlow-semi-condensed-v6-latin-700.eot";
import barlowSemiCondensed700Woff2 from "./fonts/barlow-semi-condensed-v6-latin-700.woff2";
import barlowSemiCondensed700Woff from "./fonts/barlow-semi-condensed-v6-latin-700.woff";
import barlowSemiCondensed700Ttf from "./fonts/barlow-semi-condensed-v6-latin-700.ttf";
import barlowSemiCondensed700Svg from "./fonts/barlow-semi-condensed-v6-latin-700.svg";

const barlowSemiCondensed600 = {
  fontFamily: "Barlow Semi Condensed",
  fontStyle: "normal",
  fontWeight: 600,
  src: `url('${barlowSemiCondensed600Eot}'),
        local('Barlow Semi Condensed SemiBold'), local('BarlowSemiCondensed-SemiBold'),
        url('${barlowSemiCondensed600Eot}?#iefix') format('embedded-opentype'),
        url('${barlowSemiCondensed600Woff2}') format('woff2'),
        url('${barlowSemiCondensed600Woff}') format('woff'),
        url('${barlowSemiCondensed600Ttf}') format('truetype'),
        url('${barlowSemiCondensed600Svg}#BarlowSemiCondensed') format('svg'); 
  `,
};

const barlowSemiCondensed700 = {
  fontFamily: "Barlow Semi Condensed",
  fontStyle: "normal",
  fontWeight: 700,
  src: `url('${barlowSemiCondensed700Eot}'),
  local('Barlow Semi Condensed Bold'), local('BarlowSemiCondensed-Bold'),
        url('${barlowSemiCondensed700Eot}?#iefix') format('embedded-opentype'),
        url('${barlowSemiCondensed700Woff2}') format('woff2'),
        url('${barlowSemiCondensed700Woff}') format('woff'),
        url('${barlowSemiCondensed700Ttf}') format('truetype'),
        url('${barlowSemiCondensed700Svg}#BarlowSemiCondensed') format('svg'); 
  `,
};

export { barlowSemiCondensed600, barlowSemiCondensed700 };
