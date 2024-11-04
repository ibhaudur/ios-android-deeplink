import React, { useEffect } from "react";

const AppLinkRedirect = () => {
  useEffect(() => {
    const appLink = "https://devinvite.wapoka.com/dsfdsfdf"; // Replace with your app's deep link
    const appStoreLink = "https://apps.apple.com/us/app/wapoka/id6737411547"; // Replace with your iOS App Store link
    const playStoreLink =
      "https://play.google.com/store/apps/details?id=com.wapoka.android"; // Replace with your Android Play Store link

    const timeout = setTimeout(() => {
      if (navigator.userAgent.match(/(iPhone|iPod|iPad)/)) {
        console.log("ios");
        window.location.href = appStoreLink;
      } else if (navigator.userAgent.match(/Android/)) {
        console.log("android");
        window.location.href = playStoreLink;
      }
    }, 2000);

    window.location.href = appLink;

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="redirect-ui">
      <p>Redirecting to the app...</p>
    </div>
  );
};

export default AppLinkRedirect;
