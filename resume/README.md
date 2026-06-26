# Résumé

The source of record for Camille's résumé.

| File | What it is |
|---|---|
| `resume.tex` | The raw LaTeX source. **This is the file you edit.** |
| `Camille-Devaney-Resume.pdf` | The full compiled PDF, kept here next to its source. |

The website serves its own copy from `../public/Camille-Devaney-Resume.pdf`
(reachable at `camilledevaney.com/Camille-Devaney-Resume.pdf`). The LaTeX source
deliberately lives **here, not in `public/`**, so it is never served to the web.

## Regenerating the PDF

After editing `resume.tex`, run the build script from the project root:

```bash
./resume/build.sh
```

It compiles `resume.tex` once, refreshes `Camille-Devaney-Resume.pdf` here, and
copies the same PDF into `public/` so the two never drift apart. Then commit both
PDFs and the `.tex`.

Requires [tectonic](https://tectonic-typesetting.github.io) (`brew install tectonic`).
