# TEXTURA Desktop downloads

Public download page for Windows and Ubuntu, version 1.0.2 beta. This repository contains the website only; application source remains private.

## Publish

1. Create the public repository `domcan2-godfearer/textura-desktop` and commit this folder's contents to `main`, including `.github/workflows/pages.yml`.
2. In Settings → Pages, choose **GitHub Actions** as the source. Run the Publish desktop download page workflow if necessary.
3. Create a release tagged `v1.0.2`, titled **TEXTURA Desktop 1.0.2 beta**. Attach these exact existing files:
   - `TEXTURA-Desktop-1.0.2-Windows-x64-setup.exe`
   - `textura-desktop_1.0.2_all.deb`
   - `SHA256SUMS.txt`
4. Publish the release. Verify both download buttons at https://domcan2-godfearer.github.io/textura-desktop/.

Do not commit installers to Git, and do not upload the private application source archive. Downloads stay unavailable until the release API reports the matching assets. A blocked or rate-limited API may temporarily prevent download buttons from enabling; installers remain accessible on GitHub's release page.

## Release description

TEXTURA Desktop for Windows 10/11 (x64) and Ubuntu 24.04 LTS or newer. This beta cleans up Library, hides maintenance controls under Details & maintenance, and dismisses installation confirmations after five seconds. Close the app before installing over the previous version; the existing study profile is retained.

The Windows installer is unsigned and includes the offline WebView2 installer. Ubuntu may need internet access to install system dependencies. Included study resource installation works offline.

SHA-256 checksums are supplied in SHA256SUMS.txt. Preserve the existing installer filenames when uploading.

## Local preview

Serve `site/` with any static HTTP server. The page uses no tracking, external fonts, or external JavaScript dependencies. `downloads.js` reads only GitHub's public release API. Edit version references and release URLs together for future updates.
