<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

On Windows, when working in PowerShell, set the session encoding to UTF-8 before reading or writing files so Korean and other non-ASCII text does not become corrupted.
Keep user-facing Korean text in source files as readable UTF-8 text. Do not replace Korean strings with `\uXXXX` escapes or other ASCII-only encodings just because terminal output looks suspicious.
If Korean appears broken in PowerShell output, re-read the file explicitly with UTF-8 first and verify the stored bytes before making any content changes.
Write all documentation work in English.

## Windows PowerShell Sandbox

If a default PowerShell command fails with `windows sandbox: spawn setup refresh`, do not ask the user for read permission or escalated execution. Treat it as a shell-spawn issue, not a filesystem permission issue. Retry the command by explicitly invoking `C:\WINDOWS\System32\WindowsPowerShell\v1.0\powershell.exe -Command "..."`, or use `rg` for read-only searches when suitable.

## Git Operations

Do not perform git-related operations in this repository unless the user explicitly requests them.

## Architecture Documentation

When deciding where frontend code should live, start with `docs/architecture/feature-sliced-design.md`.

Use that file as the quick placement guide, then read the matching layer document only when needed:

- `docs/architecture/feature-sliced-design/app.md`
- `docs/architecture/feature-sliced-design/pages.md`
- `docs/architecture/feature-sliced-design/widgets.md`
- `docs/architecture/feature-sliced-design/features.md`
- `docs/architecture/feature-sliced-design/entities.md`
- `docs/architecture/feature-sliced-design/shared.md`

Do not reread every layer document for every task. Read the overview first, choose the target layer, then open the detailed layer guide for boundary checks.
<!-- END:nextjs-agent-rules -->
