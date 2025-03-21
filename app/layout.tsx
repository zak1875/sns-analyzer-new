export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <title>SNS診断アプリ</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
