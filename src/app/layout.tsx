import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from "antd";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Web App',
  description: 'Data representation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              components: {
                Form: {
                  /* here is your component tokens */
                  itemMarginBottom: 10
                },
              },
            }}
          >
            <div className="h-screen flex flex-col">
              <Header />

              <div className="container flex flex-1 px-5  mx-auto">{children}</div>
              <Footer />
            </div>
          </ConfigProvider>

        </AntdRegistry>
      </body>
    </html>
  );
}
