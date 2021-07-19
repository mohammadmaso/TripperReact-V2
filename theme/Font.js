import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: iranyekan;
        font-style: normal;
        font-weight: 600;
        src: url('fonts/iranyekan/eot/iranyekanwebboldfanum.eot');
        src: url('fonts/iranyekan/eot/iranyekanwebboldfanum.eot?#iefix')
            format('embedded-opentype'),
            /* IE6-8 */ url('fonts/iranyekan/woff/iranyekanwebboldfanum.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url('fonts/iranyekan/ttf/iranyekanwebboldfanum.ttf') format('truetype');
        }

        @font-face {
        font-family: iranyekan;
        font-style: normal;
        font-weight: 300;
        src: url('fonts/iranyekan/eot/iranyekanweblightfanum.eot');
        src: url('fonts/iranyekan/eot/iranyekanweblightfanum.eot?#iefix')
            format('embedded-opentype'),
            /* IE6-8 */ url('fonts/iranyekan/woff/iranyekanweblightfanum.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url('fonts/iranyekan/ttf/iranyekanweblightfanum.ttf') format('truetype');
        }

        @font-face {
        font-family: iranyekan;
        font-style: normal;
        font-weight: normal;
        src: url('fonts/iranyekan/eot/iranyekanwebregularfanum.eot');
        src: url('fonts/iranyekan/eot/iranyekanwebregularfanum.eot?#iefix')
            format('embedded-opentype'),
            /* IE6-8 */ url('fonts/iranyekan/woff/iranyekanwebregularfanum.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url('fonts/iranyekan/ttf/iranyekanwebregularfanum.ttf') format('truetype');
        }

        @font-face {
        font-family: iranyekan en;
        font-style: normal;
        font-weight: bold;
        src: url('fonts/iranyekan/eot/iranyekanwebbold.eot');
        src: url('fonts/iranyekan/eot/iranyekanwebbold.eot?#iefix') format('embedded-opentype'),
            /* IE6-8 */ url('fonts/iranyekan/woff/iranyekanwebbold.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('fonts/iranyekan/ttf/iranyekanwebbold.ttf')
            format('truetype');
        }

        @font-face {
        font-family: iranyekan en;
        font-style: normal;
        font-weight: 100;
        src: url('fonts/iranyekan/eot/iranyekanwebthin.eot');
        src: url('fonts/iranyekan/eot/iranyekanwebthin.eot?#iefix') format('embedded-opentype'),
            /* IE6-8 */ url('fonts/iranyekan/woff/iranyekanwebthin.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('fonts/iranyekan/ttf/iranyekanwebthin.ttf')
            format('truetype');
        }

        @font-face {
        font-family: iranyekan en;
        font-style: normal;
        font-weight: 300;
        src: url('fonts/iranyekan/eot/iranyekanweblight.eot');
        src: url('fonts/iranyekan/eot/iranyekanweblight.eot?#iefix') format('embedded-opentype'),
            /* IE6-8 */ url('fonts/iranyekan/woff/iranyekanweblight.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('fonts/iranyekan/ttf/iranyekanweblight.ttf')
            format('truetype');
        }

        @font-face {
        font-family: iranyekan en;
        font-style: normal;
        font-weight: normal;
        src: url('fonts/iranyekan/eot/iranyekanwebregular.eot');
        src: url('fonts/iranyekan/eot/iranyekanwebregular.eot?#iefix')
            format('embedded-opentype'),
            /* IE6-8 */ url('fonts/iranyekan/woff/iranyekanwebregular.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('fonts/iranyekan/ttf/iranyekanwebregular.ttf')
            format('truetype');
        }

        @font-face {
        font-family: iranyekan en;
        font-style: normal;
        font-weight: 500;
        src: url('fonts/iranyekan/eot/iranyekanwebmedium.eot');
        src: url('fonts/iranyekan/eot/iranyekanwebmedium.eot?#iefix')
            format('embedded-opentype'),
            /* IE6-8 */ url('fonts/iranyekan/woff/iranyekanwebmedium.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('fonts/iranyekan/ttf/iranyekanwebmedium.ttf')
            format('truetype');
        }

        @font-face {
        font-family: iranyekan en;
        font-style: normal;
        font-weight: 800;
        src: url('fonts/iranyekan/eot/iranyekanwebextrabold.eot');
        src: url('fonts/iranfonts/iranyekan/eot/iranyekanwebextrabold.eot?#iefix')
            format('embedded-opentype'),
            /* IE6-8 */ url('fonts/iranfonts/iranyekan/woff/iranyekanwebextrabold.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url('fonts/iranfonts/iranyekan/ttf/iranyekanwebextrabold.ttf') format('truetype');
        }

        @font-face {
        font-family: iransans;
        src: url('fonts/iransans/IRANSansMobile(FaNum)_Regular.eot');
        src: local('IRANSansMobile Regular'), local('IRANSansMobile_Regular'), url('fonts/iransans/IRANSansMobile(FaNum)_Regular.eot?#iefix') format('embedded-opentype'), url('fonts/iransans/IRANSansMobile(FaNum)_Regular.woff2') format('woff2'), url('fonts/iransans/IRANSansMobile(FaNum)_Regular.woff') format('woff'), url('fonts/iransans/IRANSansMobile(FaNum)_Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        }
        @font-face {
        font-family: iransans;
        src: url('fonts/iransans/IRANSansMobile(FaNum)_Regular.eot');
        src: local('IRANSansMobile Regular'), local('IRANSansMobile_Regular'), url('fonts/iransans/IRANSansMobile(FaNum)_Regular.eot?#iefix') format('embedded-opentype'), url('fonts/iransans/IRANSansMobile(FaNum)_Regular.woff2') format('woff2'), url('fonts/iransans/IRANSansMobile(FaNum)_Regular.woff') format('woff'), url('fonts/iransans/IRANSansMobile(FaNum)_Regular.ttf') format('truetype');
        }
        @font-face {
        font-family: iransans;
        src: url('fonts/iransans/IRANSansMobile(FaNum)_Light.eot');
        src: local('IRANSansMobile Light'), local('IRANSansMobile_Light'), url('fonts/iransans/IRANSansMobile(FaNum)_Light.eot?#iefix') format('embedded-opentype'), url('fonts/iransans/IRANSansMobile(FaNum)_Light.woff2') format('woff2'), url('fonts/iransans/IRANSansMobile(FaNum)_Light.woff') format('woff'), url('fonts/iransans/IRANSansMobile(FaNum)_Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        }
        @font-face {
        font-family: iransans;
        src: url('fonts/iransans/IRANSansMobile(FaNum)_Light.eot');
        src: local('IRANSansMobile Light'), local('IRANSansMobile_Light'), url('fonts/iransans/IRANSansMobile(FaNum)_Light.eot?#iefix') format('embedded-opentype'), url('fonts/iransans/IRANSansMobile(FaNum)_Light.woff2') format('woff2'), url('fonts/iransans/IRANSansMobile(FaNum)_Light.woff') format('woff'), url('fonts/iransans/IRANSansMobile(FaNum)_Light.ttf') format('truetype');
        
        }
        @font-face {
        font-family: iransans;
        src: url('fonts/iransans/IRANSansMobile(FaNum)_UltraLight.eot');
        src: local('IRANSansMobile UltraLight'), local('IRANSansMobile_UltraLight'), url('fonts/iransans/IRANSansMobile(FaNum)_UltraLight.eot?#iefix') format('embedded-opentype'), url('fonts/iransans/IRANSansMobile(FaNum)_UltraLight.woff2') format('woff2'), url('fonts/iransans/IRANSansMobile(FaNum)_UltraLight.woff') format('woff'), url('fonts/iransans/IRANSansMobile(FaNum)_UltraLight.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        }
       
        @font-face {
        font-family: iransans;
        src: url('fonts/iransans/IRANSansMobile(FaNum)_Medium.eot');
        src: local('IRANSansMobile Medium'), local('IRANSansMobile_Medium'), url('fonts/iransans/IRANSansMobile(FaNum)_Medium.eot?#iefix') format('embedded-opentype'), url('fonts/iransans/IRANSansMobile(FaNum)_Medium.woff2') format('woff2'), url('fonts/iransans/IRANSansMobile(FaNum)_Medium.woff') format('woff'), url('fonts/iransans/IRANSansMobile(FaNum)_Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        }
        
        @font-face {
        font-family: iransans;
        src: url('fonts/iransans/IRANSansMobile(FaNum)_Bold.eot');
        src: local('IRANSansMobile Bold'), local('IRANSansMobile_Bold'), url('fonts/iransans/IRANSansMobile(FaNum)_Bold.eot?#iefix') format('embedded-opentype'), url('fonts/iransans/IRANSansMobile(FaNum)_Bold.woff2') format('woff2'), url('fonts/iransans/IRANSansMobile(FaNum)_Bold.woff') format('woff'), url('fonts/iransans/IRANSansMobile(FaNum)_Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
        }
        
      `}
  />
)

export default Fonts