# Pollewood – guest guide

A simple, free guest page for the Pollewood apartment, in English, Danish, German and French.
It's a static site hosted on GitHub Pages, so there's no server to maintain and nothing that expires.

The finished address will be:

```
https://YOUR-GITHUB-USERNAME.github.io/Pollewood/
```

## What's in the folder

| File | What it is |
|------|------------|
| `index.html` | The page itself. You shouldn't need to touch it. |
| `content.js` | **All the text, in all four languages.** This is the file you edit. |
| `images/` | Photos. The ones in there now are placeholders. |
| `.nojekyll` | Tells GitHub to serve the files as they are. Leave it in. |

## 1. Publish it on GitHub Pages (one time, about 10 minutes)

1. **Create a GitHub account** at [github.com/signup](https://github.com/signup).
   Ideally use an email the apartment owner controls, so the site doesn't depend on one person.
   Turn on two-factor authentication (Settings → Password and authentication) and save the recovery codes somewhere safe.
2. **Create the repository.** Click **+** (top right) → **New repository**.
   - Repository name: `Pollewood` (exactly like this – it becomes the end of the address)
   - Visibility: **Public** (free GitHub Pages requires a public repository)
   - Click **Create repository**.
3. **Upload the files.** On the new repository page, click **uploading an existing file**.
   Drag in `index.html`, `content.js`, `README.md` and the whole `images` folder, then click **Commit changes**.
   > The `.nojekyll` file is hidden on most computers and is optional. If you can't see it, skip it.
4. **Turn on Pages.** Go to **Settings → Pages**.
   Under *Build and deployment*, set Source to **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then click **Save**.
5. **Wait 1–2 minutes**, then refresh the Settings → Pages screen. It will show
   *"Your site is live at https://YOUR-GITHUB-USERNAME.github.io/Pollewood/"*. Open it on your phone to check.

## 2. Make the QR code

Create the QR code only **after** the site is live and you've checked the address works.

- Use a **static** QR code that contains the address itself. The simplest way is the QR feature built into your browser: open the live page in Chrome or Edge on a computer, then right-click the page → **Create QR code for this page**, and download the image.
- **Do not** use "dynamic" or "trackable" QR codes from QR websites. Free plans often expire, and the printed code then stops working.
- Print it at least 3 × 3 cm and test it with a couple of different phones before laminating.

**Tip:** you can make a QR code that opens a specific language by adding `?lang=` to the address, for example
`https://YOUR-GITHUB-USERNAME.github.io/Pollewood/?lang=de`.
Without it, the page opens in the language of the guest's phone (falling back to English), and guests can switch with the buttons at the top.

## 3. Editing the content later

1. In the repository on GitHub, click `content.js`, then the **pencil icon** (Edit).
2. Change the text. Instructions are at the top of the file. Keep the backticks `` ` `` around each text.
3. Click **Commit changes**. The live page updates within about a minute.

If the page suddenly shows up blank after an edit, a backtick, comma or bracket was probably deleted by accident.
Open the file's **History**, look at the last change, and fix or undo it.

**Replacing photos:** in the `images` folder, click **Add file → Upload files** and upload a photo with the *same file name* as the one you're replacing (for example `hero.jpg`), or upload a new one and change its name in `content.js`.
Keep photos under about 500 KB each so the page loads fast on mobile data. Phones' "medium" or "large" export size is usually right.

## Things not to do

- **Don't rename** the GitHub account or the `Pollewood` repository. The address would change and the printed QR codes would stop working.
- **Don't delete** the account or make the repository private.
- **Don't put** door codes, key-box codes or the full address on the page. It's public. Send those to guests through Airbnb.
- **Don't add** booking or payment features. GitHub Pages isn't allowed to be used for commercial transactions; an information page for guests is fine.

## Trying it on your own computer

Double-click `index.html` to open it in a browser. Everything works offline, so you can check your edits before uploading.
