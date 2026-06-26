#!/usr/bin/env bash
# Regenerate Camille's résumé from LaTeX.
#
# Compiles resume.tex once, keeps the full PDF here next to the source, and
# copies the same PDF into ../public/ where the website serves it. Run this
# whenever resume.tex changes so both PDFs stay identical.
#
#   ./resume/build.sh
#
# Requires tectonic (https://tectonic-typesetting.github.io). Install on macOS
# with: brew install tectonic
set -euo pipefail

cd "$(dirname "$0")"

tectonic resume.tex --outdir .
mv -f resume.pdf Camille-Devaney-Resume.pdf
cp -f Camille-Devaney-Resume.pdf ../public/Camille-Devaney-Resume.pdf

echo "Built resume/Camille-Devaney-Resume.pdf and copied it to public/Camille-Devaney-Resume.pdf"
