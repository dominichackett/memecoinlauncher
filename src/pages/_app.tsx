import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import "@fontsource-variable/inter/index.css";
import '@fontsource-variable/bricolage-grotesque';


import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { XMTPProvider } from "@xmtp/react-sdk";

import { config } from '../wagmi';

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
        <XMTPProvider>

          <Component {...pageProps} />
          </XMTPProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
