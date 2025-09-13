#!/usr/bin/env python3
"""
Small utility to extract data: URI icons from material-chemistry-resources.html
and write them to images/icons/, replacing the src attributes with relative paths.
"""

import base64
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HTML_PATH = ROOT / "material-chemistry-resources.html"
BACKUP_PATH = ROOT / "material-chemistry-resources.html.bak"
ICONS_DIR = ROOT / "images" / "icons"

DATA_URI_RE = re.compile(
    r"""<img\s+[^>]*class="resource-icon"[^>]*src="(data:([\w/+-\.]+);base64,([A-Za-z0-9+/=]+))"[^>]*>""",
    re.I,
)


def ensure_dirs():
    ICONS_DIR.mkdir(parents=True, exist_ok=True)


def backup_html():
    if not BACKUP_PATH.exists():
        HTML_PATH.replace(BACKUP_PATH)
    else:
        # If backup already exists, keep it and create a timestamped backup
        from datetime import datetime

        ts = datetime.now().strftime("%Y%m%d%H%M%S")
        HTML_PATH.replace(ROOT / f"material-chemistry-resources.html.bak.{ts}")


def extract_and_replace():
    content = BACKUP_PATH.read_text(encoding="utf-8")
    matches = list(DATA_URI_RE.finditer(content))
    if not matches:
        print("No embedded resource-icon data:URI found.")
        return

    print(f"Found {len(matches)} icons.")
    mapping = []
    for i, m in enumerate(matches, start=1):
        full_data = m.group(1)
        mime = m.group(2)
        b64 = m.group(3)
        # guess extension
        ext = "png"
        if "/" in mime:
            ext = mime.split("/")[-1]
            if ext == "svg+xml":
                ext = "svg"
        name = f"icon-{i}.{ext}"
        path = ICONS_DIR / name
        # decode
        data = base64.b64decode(b64)
        path.write_bytes(data)
        mapping.append((full_data, f"images/icons/{name}"))
        print(f"Wrote {path} ({len(data)} bytes)")

    # Replace in content
    new_content = content
    for full_data, relpath in mapping:
        new_content = new_content.replace(full_data, relpath)

    # Save new HTML
    HTML_PATH.write_text(new_content, encoding="utf-8")
    print(f"Updated HTML saved to {HTML_PATH}")


if __name__ == "__main__":
    ensure_dirs()
    backup_html()
    extract_and_replace()
