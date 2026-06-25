# INSTALL.md — Setting up your new Mac 💻

A one-time setup, written step by step for a brand-new Mac. It takes about
**20–30 minutes**, and it's all copy-and-paste. By the end you'll have everything the
website needs: **Homebrew, Node.js, Git, Docker, and Claude**.

**You'll need:** your Mac, your Mac login password, and an internet connection.

> 🧠 **How to read this:** whenever you see a grey box, click it, copy the whole thing,
> paste it into the Terminal (next step), and press **Return**. Let each command finish
> before moving on — some take a few minutes.

---

## Step 0 — Open the Terminal

The Terminal is a window where you type commands. To open it:

1. Press **⌘ Command + Space** (this opens Spotlight search).
2. Type **`Terminal`** and press **Return**.

A small window with a blinking cursor appears. **Every command below goes here.** To
paste, use **⌘ Command + V**, then press **Return** to run it.

---

## Step 1 — Install Homebrew (the tool that installs everything else)

Homebrew is a free "installer for developer tools." Paste this and press Return:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**What to expect:**

- It asks for your **Mac password**. Type it and press Return. *Nothing appears as you
  type — that's normal and expected*, it's still working.
- It may ask to install the "Command Line Tools" — press **Return** to allow it. (Bonus:
  this installs **Git** for you too.)
- It runs for a few minutes. Let it finish.

### Step 1b — Switch Homebrew on (required! don't skip)

On a new Mac, Homebrew is installed but not yet *connected* to your Terminal. These
three lines connect it. Paste them and press Return:

```bash
echo >> ~/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

Now check that it worked:

```bash
brew --version
```

You should see something like `Homebrew 5.1.15`. ✅
If it instead says **"command not found"**, fully close the Terminal window, open a new
one (Step 0), and run `brew --version` again.

---

## Step 2 — Install Node.js (this runs the website)

```bash
brew install node
```

Check it:

```bash
node -v
npm -v
```

You should see version numbers (Node **20 or higher**). ✅

---

## Step 3 — Make sure Git is ready (this saves your work)

Git usually arrived with Homebrew. Check:

```bash
git --version
```

If you see a version, you're set. If not, install it:

```bash
brew install git
```

Then tell Git who you are (use your real name and email):

```bash
git config --global user.name "Camille Devaney"
git config --global user.email "you@example.com"
```

---

## Step 4 — Install Docker Desktop (for running the site in a self-contained box)

```bash
brew install --cask docker-desktop
```

Then **open Docker once** so it can finish setting itself up:

1. Press **⌘ Command + Space**, type **`Docker`**, press Return.
2. Accept the terms if asked.
3. Wait until the little **whale icon 🐳** in the top menu bar stops animating — that
   means Docker is running.

Check it (back in the Terminal):

```bash
docker --version
docker compose version
```

---

## Step 5 — Install Claude (your AI helper for editing the site)

```bash
npm install -g @anthropic-ai/claude-code
```

Check it:

```bash
claude --version
```

The first time you actually *use* Claude, it will ask you to **log in** — just follow
the on-screen prompts. ✅

---

## Step 6 (optional) — A friendly code editor

VS Code is a free, beginner-friendly place to view and edit files:

```bash
brew install --cask visual-studio-code
```

---

## 🎉 All done — let's double-check

Run each line below. Every one should print a version number (not an error):

```bash
brew --version
node -v
npm -v
git --version
docker --version
claude --version
```

If they all show versions, your Mac is fully set up.

**Next:** open **`README.md`** in this project — it shows how to download the website's
files and start working on it with Claude.
