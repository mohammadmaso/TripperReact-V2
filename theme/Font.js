import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`


        @font-face {
            font-family: peyda;
            font-style: normal;
            font-weight: bold;
            src: url('fonts/PeydaWeb/eot/PeydaWeb-Bold.eot');
            src: url('fonts/PeydaWeb/eot/PeydaWeb-Bold.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                url('fonts/PeydaWeb/woff/PeydaWeb-Bold.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                url('fonts/PeydaWeb/woff2/PeydaWeb-Bold.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
                url('fonts/PeydaWeb/ttf/PeydaWeb-Bold.ttf') format('truetype');
        }

        @font-face {
            font-family: peyda;
            font-style: normal;
            font-weight: normal;
            src: url('fonts/PeydaWeb/eot/PeydaWeb-Regular.eot');
            src: url('fonts/PeydaWeb/eot/PeydaWeb-Regular.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                url('fonts/PeydaWeb/woff/PeydaWeb-Regular.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                url('fonts/PeydaWeb/woff2/PeydaWeb-Regular.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
                url('fonts/PeydaWeb/ttf/PeydaWeb-Regular.ttf') format('truetype');
        }


      /**
*
*	Name:			IRANYekan Font
*	Version:			3.3
*	Author:			Moslem Ebrahimi (moslemebrahimi.com)
*	Created on:		Sep 17, 2020
*	Updated on:		Sep 17, 2020
*	Website:			http://fontiran.com
*	Copyright:		Commercial/Proprietary Software
--------------------------------------------------------------------------------------
فونت ایران یکان یک نرم افزار مالکیتی محسوب می شود. جهت آگاهی از قوانین استفاده از این فونت ها لطفا به وب سایت (فونت ایران دات کام) مراجعه نمایید
--------------------------------------------------------------------------------------
IRANYekan fonts are considered a proprietary software. To gain information about the laws regarding the use of these fonts, please visit www.fontiran.com 
--------------------------------------------------------------------------------------
This set of fonts are used in this project under the license: (.....)
--------------------------------------------------------------------------------------
*	
**/
@font-face {
	font-family: iranyekan;
	font-style: normal;
	font-weight: bold;
	src: url('fonts/IranyekanWeb/eot/iranyekanwebbold.eot');
	src: url('fonts/IranyekanWeb/eot/iranyekanwebbold.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('fonts/IranyekanWeb/woff/iranyekanwebbold.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('fonts/IranyekanWeb/woff2/iranyekanwebbold.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
		 url('fonts/IranyekanWeb/ttf/iranyekanwebbold.ttf') format('truetype');
}

@font-face {
	font-family: iranyekan;
	font-style: normal;
	font-weight: 100;
	src: url('fonts/IranyekanWeb/eot/iranyekanwebthin.eot');
	src: url('fonts/IranyekanWeb/eot/iranyekanwebthin.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('fonts/IranyekanWeb/woff/iranyekanwebthin.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('fonts/IranyekanWeb/woff2/iranyekanwebthin.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
		 url('fonts/IranyekanWeb/ttf/iranyekanwebthin.ttf') format('truetype');
}

@font-face {
	font-family: iranyekan;
	font-style: normal;
	font-weight: 300;
	src: url('fonts/IranyekanWeb/eot/iranyekanweblight.eot');
	src: url('fonts/IranyekanWeb/eot/iranyekanweblight.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('fonts/IranyekanWeb/woff/iranyekanweblight.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('fonts/IranyekanWeb/woff2/iranyekanweblight.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
		 url('fonts/IranyekanWeb/ttf/iranyekanweblight.ttf') format('truetype');
}

@font-face {
	font-family: iranyekan;
	font-style: normal;
	font-weight: normal;
	src: url('fonts/IranyekanWeb/eot/iranyekanwebregular.eot');
	src: url('fonts/IranyekanWeb/eot/iranyekanwebregular.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('fonts/IranyekanWeb/woff/iranyekanwebregular.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('fonts/IranyekanWeb/woff2/iranyekanwebregular.woff2') format('woff2'), /* FF39+,Chrome36+, Opera24+*/
		 url('fonts/IranyekanWeb/ttf/iranyekanwebregular.ttf') format('truetype');
}

@font-face {
	font-family: iranyekan;
	font-style: normal;
	font-weight: 500;
	src: url('fonts/IranyekanWeb/eot/iranyekanwebmedium.eot');
	src: url('fonts/IranyekanWeb/eot/iranyekanwebmedium.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('fonts/IranyekanWeb/woff/iranyekanwebmedium.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('fonts/IranyekanWeb/woff2/iranyekanwebmedium.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
		 url('fonts/IranyekanWeb/ttf/iranyekanwebmedium.ttf') format('truetype');
}

@font-face {
	font-family: iranyekan;
	font-style: normal;
	font-weight: 800;
	src: url('fonts/IranyekanWeb/eot/iranyekanwebextrabold.eot');
	src: url('fonts/IranyekanWeb/eot/iranyekanwebextrabold.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('fonts/IranyekanWeb/woff/iranyekanwebextrabold.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('fonts/IranyekanWeb/woff2/iranyekanwebextrabold.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
		 url('fonts/IranyekanWeb/ttf/iranyekanwebextrabold.ttf') format('truetype');
}

@font-face {
	font-family: iranyekan;
	font-style: normal;
	font-weight: 850;
	src: url('fonts/IranyekanWeb/eot/iranyekanwebblack.eot');
	src: url('fonts/IranyekanWeb/eot/iranyekanwebblack.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('fonts/IranyekanWeb/woff/iranyekanwebblack.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('fonts/IranyekanWeb/woff2/iranyekanwebblack.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
		 url('fonts/IranyekanWeb/ttf/iranyekanwebblack.ttf') format('truetype');
}

@font-face {
	font-family: iranyekan;
	font-style: normal;
	font-weight: 900;
	src: url('fonts/IranyekanWeb/eot/iranyekanwebextrablack.eot');
	src: url('fonts/IranyekanWeb/eot/iranyekanwebextrablack.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
		 url('fonts/IranyekanWeb/woff/iranyekanwebextrablack.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
		 url('fonts/IranyekanWeb/woff2/iranyekanwebextrablack.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
		 url('fonts/IranyekanWeb/ttf/iranyekanwebextrablack.ttf') format('truetype');
}
      `}
  />
)

export default Fonts