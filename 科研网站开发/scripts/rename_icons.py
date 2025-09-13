#!/usr/bin/env python3
"""
Rename images/icons/icon-*.png to semantic names based on the corresponding <img alt="..."> in the HTML.
"""

import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HTML_PATH = ROOT / "material-chemistry-resources.html"
BACKUP_PATH = ROOT / "material-chemistry-resources.html.bak2"
ICONS_DIR = ROOT / "images" / "icons"

IMG_RE = re.compile(
    r'<img\s+[^>]*class="resource-icon"[^>]*src="(?P<src>images/icons/(?P<file>icon-\d+\.\w+))"[^>]*alt="(?P<alt>[^"]*)"[^>]*>',
    re.I,
)


def slugify(name: str) -> str:
    name = name.strip().lower()
    # replace spaces and slashes with hyphens
    name = re.sub(r"[\s/\\]+", "-", name)
    # remove characters not alnum or -
    name = re.sub(r"[^a-z0-9\-]+", "", name)
    name = re.sub(r"-{2,}", "-", name)
    name = name.strip("-")
    if not name:
        name = "icon"
    return name


def main():
    if not BACKUP_PATH.exists():
        shutil.copy2(HTML_PATH, BACKUP_PATH)
    content = HTML_PATH.read_text(encoding="utf-8")
    matches = list(IMG_RE.finditer(content))
    if not matches:
        print("No matching resource-icon <img> tags found.")
        return
    print(f"Found {len(matches)} <img> tags to process.")
    used_names = set()
    mapping = []  # (old_src, new_src)
    for m in matches:
        old_src = m.group("src")
        alt = m.group("alt")
        orig_file = m.group("file")
        ext = Path(orig_file).suffix
        base = slugify(alt)
        candidate = f"{base}{ext}"
        count = 1
        while candidate in used_names or (ICONS_DIR / candidate).exists():
            count += 1
            candidate = f"{base}-{count}{ext}"
        used_names.add(candidate)
        # rename file if exists
        src_path = ICONS_DIR / orig_file
        dst_path = ICONS_DIR / candidate
        if src_path.exists():
            src_path.replace(dst_path)
            print(f"Renamed {src_path.name} -> {dst_path.name}")
        else:
            print(f"Warning: source file {src_path} not found; skipping rename.")
            continue
        mapping.append((old_src, f"images/icons/{candidate}"))

    # replace in content
    new_content = content
    for old, new in mapping:
        new_content = new_content.replace(old, new)

    HTML_PATH.write_text(new_content, encoding="utf-8")
    print("HTML updated with semantic icon filenames.")


if __name__ == "__main__":
    main()
