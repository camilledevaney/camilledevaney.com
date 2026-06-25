// Home page: a friendly tutorial for Camille on editing this site with her own
// Claude session, plus a visual overview of how a change reaches the live site.
// (Placeholder content for the real site. Edit or replace it anytime.)

import RevealRoot from "./RevealRoot";

const delay = (ms: number): React.CSSProperties =>
  ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

const steps = [
  {
    title: "Open the project",
    body: (
      <>
        On your computer, open the <Code>camilledevaney.com</Code> folder in a
        terminal (or open the folder in the Claude app). Everything that makes the
        site lives here.
      </>
    ),
  },
  {
    title: "Start the site on your computer",
    body: (
      <>
        Run <Code>npm run dev</Code> and open <Code>http://localhost:3000</Code>.
        That is this page, a private copy running just for you. Any change you make
        shows up here instantly, and nobody else can see it yet.
      </>
    ),
  },
  {
    title: "Start a Claude session",
    body: (
      <>
        In the same folder, start Claude (run <Code>claude</Code> in the terminal,
        or point the Claude app at this folder). Claude can now read and edit the
        site for you.
      </>
    ),
  },
  {
    title: "Just ask, in plain English",
    body: (
      <>
        Describe what you want like you would tell a teammate, no code required. Be
        specific about the page and the change. Claude makes the edits and you stay
        in charge.
      </>
    ),
  },
  {
    title: "Watch it change live",
    body: (
      <>
        As Claude edits the files, this page refreshes on its own. Not loving it?
        Say so and ask for a tweak. Nothing is live to the world yet. This is still
        just your private copy.
      </>
    ),
  },
  {
    title: "Publish when you are happy",
    body: (
      <>
        When it looks right, the change goes out with one step. See{" "}
        <span className="font-medium text-ink">How it reaches the world</span> below
        for exactly what happens.
      </>
    ),
  },
];

const examplePrompts = [
  "Change the home page headline to say Camille Devaney, Sales, Marketing, and Creative.",
  "Add an About page with three short paragraphs about my background.",
  "Make a Portfolio page that shows the images in the public/art folder as a grid.",
  "Add a link to my résumé in the top corner of every page.",
];

const flow = [
  { label: "Your computer", sub: "where you and Claude edit" },
  { label: "GitHub", sub: "the upstream home of your code", arrow: "git push" },
  { label: "Vercel", sub: "reads latest and builds", arrow: "auto-detects" },
  { label: "Live site", sub: "camilledevaney.com, worldwide", arrow: "deploys" },
];

export default function Home() {
  return (
    <>
      <div className="page-aura" aria-hidden />
      <RevealRoot>
        <main className="mx-auto w-full max-w-3xl px-6 py-20 text-muted sm:px-8 sm:py-28">
          {/* Hero */}
          <header>
            <p
              data-reveal=""
              style={delay(0)}
              className="font-mono text-xs uppercase tracking-[0.22em] text-accent"
            >
              camilledevaney.com
            </p>
            <h1
              data-reveal=""
              style={delay(90)}
              className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl"
            >
              Hi Camille <span className="wave">👋</span>
            </h1>
            <p
              data-reveal=""
              style={delay(180)}
              className="mt-6 max-w-xl text-lg leading-8"
            >
              This is your website. The best part is that you can change anything on
              it yourself, just by asking Claude in plain English. Here is the whole
              workflow, start to finish.
            </p>
          </header>

          {/* Steps */}
          <section className="mt-24">
            <p
              data-reveal=""
              style={delay(0)}
              className="font-mono text-xs uppercase tracking-[0.22em] text-muted"
            >
              Editing the site with Claude
            </p>
            <ol className="mt-10 ml-[18px] border-l border-line">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  data-reveal=""
                  style={delay(i * 70)}
                  className="group relative pb-10 pl-9 last:pb-0"
                >
                  <span className="absolute -left-[18px] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-background font-mono text-sm text-accent transition-colors duration-300 group-hover:border-accent">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-xl font-medium text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-7">{step.body}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Example prompts */}
          <section className="mt-24">
            <p
              data-reveal=""
              style={delay(0)}
              className="font-mono text-xs uppercase tracking-[0.22em] text-muted"
            >
              Things you can ask Claude
            </p>
            <p data-reveal="" style={delay(70)} className="mt-4 leading-7">
              Copy any of these into your Claude session, or write your own. The more
              specific you are, the better the result.
            </p>
            <ul className="mt-8">
              {examplePrompts.map((prompt, i) => (
                <li
                  key={prompt}
                  data-reveal=""
                  style={delay(i * 70)}
                  className="group flex items-start gap-3 border-b border-line py-4 transition-all duration-300 hover:pl-2"
                >
                  <span className="select-none pt-0.5 font-mono text-accent transition-transform duration-300 group-hover:translate-x-1">
                    &rsaquo;
                  </span>
                  <span className="font-mono text-sm leading-6 text-ink">
                    {prompt}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* How a change reaches the world */}
          <section className="mt-24">
            <p
              data-reveal=""
              style={delay(0)}
              className="font-mono text-xs uppercase tracking-[0.22em] text-muted"
            >
              How it reaches the world
            </p>
            <p
              data-reveal=""
              style={delay(70)}
              className="mt-4 max-w-xl leading-7"
            >
              When you are happy with a change, it travels from your computer to the
              live site automatically. Here is the path it takes.
            </p>

            <div
              data-reveal=""
              style={delay(140)}
              className="mt-10 flex flex-col gap-2 md:flex-row md:items-center md:gap-0"
            >
              {flow.map((node, i) => (
                <div key={node.label} className="contents">
                  {i > 0 && (
                    <div className="flex shrink-0 items-center justify-center gap-2 px-1 py-1 md:flex-col md:gap-1 md:px-3 md:py-0">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                        {node.arrow}
                      </span>
                      <span className="arrow-drift rotate-90 text-lg leading-none text-accent md:rotate-0">
                        &rarr;
                      </span>
                    </div>
                  )}
                  <div className="flex-1 rounded-xl px-4 py-4 text-center transition-colors duration-300 hover:bg-[var(--accent-soft)]">
                    <div className="font-display text-base font-medium text-ink">
                      {node.label}
                    </div>
                    <div className="mt-1 font-mono text-[11px] leading-5 text-muted">
                      {node.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              data-reveal=""
              style={delay(0)}
              className="mt-12 space-y-5 leading-7"
            >
              <p>
                <span className="font-medium text-ink">
                  Pushing syncs your code up to GitHub.
                </span>{" "}
                GitHub is the master copy of the site&rsquo;s code, living safely
                online. Developers call it the upstream repository. When you or
                Claude run <Code>git push</Code>, your latest local changes are
                uploaded there, so GitHub always holds the newest version.
              </p>
              <p>
                <span className="font-medium text-ink">
                  Vercel watches GitHub and deploys automatically.
                </span>{" "}
                Vercel is the service that hosts the live site. The moment new code
                lands on GitHub, Vercel notices, pulls the latest code, rebuilds the
                whole website fresh, and publishes it worldwide, usually in under a
                minute. You never upload files by hand.
              </p>
              <p className="font-mono text-sm text-muted">
                In short: <Code>git push</Code>{" "}
                <span className="text-accent">&rarr;</span> GitHub stores it{" "}
                <span className="text-accent">&rarr;</span> Vercel builds and ships
                it <span className="text-accent">&rarr;</span> it is live at
                camilledevaney.com.
              </p>
            </div>
          </section>

          {/* Already live: the résumé */}
          <section
            data-reveal=""
            style={delay(0)}
            className="mt-20 border-l-2 border-accent pl-6"
          >
            <h2 className="font-display text-xl font-medium text-ink">
              Already on your site: your résumé
            </h2>
            <p className="mt-2 leading-7">
              Your résumé is published and served straight from the site. It lives
              in the <Code>public</Code> folder, so it is reachable at a clean web
              address,{" "}
              <a
                href="/Camille-Devaney-Resume.pdf"
                className="font-medium text-accent underline decoration-1 underline-offset-4 transition-all hover:decoration-2"
              >
                /Camille-Devaney-Resume.pdf
              </a>
              . Drop any file in <Code>public</Code> and it works the same way.
            </p>
          </section>

          {/* A note from Jayce */}
          <section data-reveal="" style={delay(0)} className="mt-28 text-center">
            <h2 className="font-display text-5xl font-semibold leading-tight tracking-tight text-ink sm:text-6xl">
              I love you, you got this <span className="heartbeat">❤️</span>
            </h2>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.22em] text-muted">
              Love, Jayce
            </p>
          </section>

          {/* Footer */}
          <footer className="mt-20 border-t border-line pt-6 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              Generated by claude and Jayce
            </p>
          </footer>
        </main>
      </RevealRoot>
    </>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-md bg-[var(--accent-soft)] px-1.5 py-0.5 font-mono text-[0.85em] text-ink">
      {children}
    </code>
  );
}
