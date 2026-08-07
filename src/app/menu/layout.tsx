import React from 'react';
import '../(all)/globals.css';

function Layout({
  music,
  children,
  videos,
  photos,
  login,
}: {
  music: React.ReactNode;
  children: React.ReactNode;
  videos: React.ReactNode;
  photos: React.ReactNode;
  login: React.ReactNode;
}) {
  const isloggedin = true;

  if (isloggedin) {
    return (
      <html>
        <body>
          <div className="min-h-screen w-full bg-white">
            <h1 className="py-2 text-center text-2xl font-bold">Menu</h1>
            <div className="h-screen w-full grid grid-cols-2 gap-4 mx-auto p-4">
              <div>{children}</div>
              <div>{music}</div>
              <div>{videos}</div>
              <div>{photos}</div>
            </div>
          </div>
        </body>
      </html>
    );
  } else {
    return (
      <html>
        <body>
          <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
            {login}
          </div>
        </body>
      </html>
    );
  }
}

export default Layout;
;

