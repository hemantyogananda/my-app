import { metadata } from "./metadata";

   
  export default function RootLayout() {
    return (
      <html lang="en">
        <body>
          <div id="root">{ metadata.title - metadata.description }</div>
        </body>
      </html>
    )
  }
