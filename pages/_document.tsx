// pages/_document.js

import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import theme from '../theme/theme';
import { ColorModeScript } from '@chakra-ui/react';

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    return await NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html dir="rtl" lang="fa">
        <Head>
          <link rel="manifest" href="/manifest.webmanifest.json" />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `!function(){function t(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,localStorage.getItem("rayToken")?t.src="https://app.raychat.io/scripts/js/"+o+"?rid="+localStorage.getItem("rayToken")+"&href="+window.location.href:t.src="https://app.raychat.io/scripts/js/"+o+"?href="+window.location.href;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}var e=document,a=window,o="e472d5ce-e45b-4fe5-bf03-8eceb911906f";"complete"==e.readyState?t():a.attachEvent?a.attachEvent("onload",t):a.addEventListener("load",t,!1)}();`,
            }}
          />
          <meta property="og:image" content="/images/og.png" />
          <meta property="og:title" content="پلتفرم گردشگری تریپر" />
          <meta property="og:url" content="https://mytripper.ir" />
          {/* <meta property="og:type" content="article" /> */}
          <meta property="og:description" content="راهکار جامع گردشگری" />
          <meta property="og:locale" content="fa_IR" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
